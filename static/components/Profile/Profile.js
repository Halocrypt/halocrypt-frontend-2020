import {
  AsyncComponent,
  Component,
  Router,
  redirect,
  A,
} from "@hydrophobefireman/ui-lib";
import { ProfileInfoEditor, mapNames } from "./ProfileEditor";
import { appEvents } from "../../globalStore";
import { user } from "../../apiRoutes";
import { getRequest, postJSONRequest } from "../../http/requests";
import { ErrorPopup } from "../shared/UserForm";
import keys from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/keys";
import { logger } from "../../Logger";
import * as validators from "../../validators";
const store = appEvents.getStore();
const EMPTY = {};

const editableFieldsValidatorFunctions = {
  ig_user_id: validators.OPTIONAL_VALUE,
  email: validators.REQUIRED_VALUE,
  school: validators.OPTIONAL_VALUE,
};

const clsName = "heading-text hoverable landing-action-button";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      fieldEdited: null,
      __receivedData: props.data,
    };
  }

  requestEditUserDetail = (e) => {
    if (this.state.isEditing || !store.isLoggedIn) return;

    this.setState({ isEditing: true, fieldEdited: e });
  };
  syncProfileInfoWithServer = (value) => {
    if (this.state.workProgress) return;

    const field = this.state.fieldEdited;
    const valid = editableFieldsValidatorFunctions[field](value);

    if (valid.valid) {
      this.setState({ workProgress: "Syncing new data with the server..." });
      postJSONRequest(user.edit, {
        user: store.userData.id,
        field,
        new_value: (value || "").trim(),
      }).then((x) => {
        const error = x.error || x.data.error;
        if (error) return this.setState({ error, workProgress: null });
        this.setState({
          workProgress: null,
          isEditing: null,
          fieldEdited: null,
        });
        const userData = x.data.user_data;
        appEvents.set("userData", userData);
        this.setState({ __receivedData: userData });
      });
    } else {
      this.setState({ error: valid.error, workProgress: null });
    }
  };

  _getRequestEditUserDetail = (propName) => () =>
    this.requestEditUserDetail(propName);

  closePrompt = () => this.setState({ isEditing: false, fieldEdited: null });
  resetError = () => this.setState({ error: null });
  render(_, state) {
    /**@type {import('../../api').UserData} */
    const data = state.__receivedData;
    const sec = data.secure_data || EMPTY;
    const currID = store.isLoggedIn && store.userData.id;

    return (
      <div>
        {state.isEditing && (
          <>
            {state.error && (
              <ErrorPopup
                errorHead="Can't edit"
                close={this.resetError}
                reason={state.error}
              />
            )}
            <ProfileInfoEditor
              progress={this.state.workProgress}
              close={this.closePrompt}
              detailName={state.fieldEdited}
              onUpdate={this.syncProfileInfoWithServer}
            />
          </>
        )}
        <div class="heading-text bfont">Profile</div>
        <div style={{ fontSize: "0.96rem" }}>
          You can edit your email, instagram and school fields by clicking them
        </div>
        <div class="prof-data-box">
          {["name", "id", "current_level", "is_admin", "school"]
            .concat(keys(sec))
            .map((x) =>
              getProfileInfoField(x, this._getRequestEditUserDetail, data, sec)
            )}
        </div>
        <div class="action-buttons-profile">
          <ActionButtons data={data} currID={currID} />
        </div>
      </div>
    );
  }
}

function ActionButtons(props) {
  const data = props.data;
  const currID = props.currID;
  return (
    <>
      {shouldShowAdminPanel(data, currID) && (
        <A href="/__admin__" class={clsName}>
          Admin Panel
        </A>
      )}
      {data.id === currID && [
        !data.has_verified_email && (
          <A href="/verify-email" class={clsName}>
            Verify Email
          </A>
        ),
        <A href="/logout" class={clsName}>
          Logout
        </A>,
      ]}
    </>
  );
}

function getProfileInfoField(x, getRequestEditUserDetail, data, sec) {
  return (
    <div
      onClick={
        x in editableFieldsValidatorFunctions
          ? getRequestEditUserDetail(x)
          : null
      }
      class={
        "prof-container" +
        (x in editableFieldsValidatorFunctions ? " hoverable" : "")
      }
    >
      <div class="heading-text prof-field">{mapNames[x] || x}</div>
      <div class="prof-field">{getValue(data, sec, x)}</div>
    </div>
  );
}

async function loadProfile() {
  const q = new URLSearchParams(Router.getQs);
  const id = q.get("id");
  /**@type {import("../../api").UserData} */
  let data;
  if (store.isLoggedIn && id === store.userData.id) {
    data = store.userData;
  } else {
    data = await getRequest(`${user.getUserDetails}?id=${id}`);

    data = data.data;
    logger.sendUserLog({ type: logger.profileView, userViewed: data.id });
  }
  if (data) {
    return () => <Profile data={data} />;
  }

  return () => (
    <ErrorPopup
      errorHead="Profile Error"
      reasons={["User does not exist"]}
      close={() => redirect("/")}
    />
  );
}

function getValue(data, sec, x) {
  let val = x in data ? data[x] : sec[x];
  if (val == null) val = "N/A";
  if (x === "is_admin") {
    if (val === true) {
      //could be N/A
      val = "Team Halocrypt";
    } else {
      val = "Player";
    }
  }
  return val;
}

function shouldShowAdminPanel(data, currID) {
  return data.is_admin && data.id === currID;
}

/**@type {import('../../api').UserData} */
const skeletonData = {
  id: "Loading..",
  current_level: "Infinity",
  has_verified_email: null,
  name: "??",
};

export default () => {
  const q = new URLSearchParams(Router.getQs);
  const id = q.get("id");
  if (!id) {
    if (store.isLoggedIn) {
      return redirect(`/profile?id=${store.userData.id}`);
    }
    return redirect("/login");
  }

  return (
    <AsyncComponent
      componentPromise={loadProfile}
      fallbackComponent={() => <Profile data={skeletonData} />}
    />
  );
};
