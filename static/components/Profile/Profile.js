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

const clsName = "heading-text hoverable landing-action-button";

export class Profile extends Component {
  state = {
    isEditing: false,
    fieldEdited: null,
    __receivedData: this.props.data,
  };
  headerText = "Profile";
  helpText =
    "You can edit your email, instagram and school fields by clicking them";
  editableFieldsValidatorFunctions = {
    ig_user_id: validators.OPTIONAL_VALUE,
    email: validators.REQUIRED_VALUE,
    school: validators.OPTIONAL_VALUE,
  };
  // _hiddenFields = {
  //   last_question_answered_at: 1,
  //   is_disqualified: 1,
  //   has_verified_email: 1,
  //   secure_data: 1,
  // };
  _getKeys(data) {
    // keys(data)
    //         .filter((x) => !this._hiddenFields[x])
    return ["name", "id", "current_level", "is_admin", "school"].concat(
      keys((data && data.secure_data) || EMPTY)
    );
  }
  _getActionPanel() {
    const data = this.state.__receivedData;
    const currID = store.isLoggedIn && store.userData.id;
    return (
      <div class="action-buttons-profile">
        <ActionButtons data={data} currID={currID} />
      </div>
    );
  }
  requestEditUserDetail = (e) => {
    if (this.state.isEditing || !this._isAllowedToEditProfile()) return;

    this.setState({ isEditing: true, fieldEdited: e });
  };
  _isAllowedToEditProfile() {
    const selfId = store.userData ? store.userData.id : null;
    return this.state.__receivedData.id === selfId;
  }
  syncProfileInfoWithServer = (value) => {
    if (this.state.workProgress) return;

    const field = this.state.fieldEdited;
    const valid = this.editableFieldsValidatorFunctions[field](value);

    if (valid.valid) {
      this.setState({ workProgress: "Syncing new data with the server..." });
      postJSONRequest(user.edit, {
        user: this.state.__receivedData.id,
        field,
        new_value: (value || "").trim(),
      }).then(this.__onResponse);
    } else {
      this.setState({ error: valid.error, workProgress: null });
    }
  };
  __onResponse = (x) => {
    if (!store.isLoggedIn) return;
    const error = x.error || x.data.error;
    if (error) return this.setState({ error, workProgress: null });
    const userData = x.data.user_data;
    this.setState({
      workProgress: null,
      isEditing: null,
      fieldEdited: null,
      __receivedData: userData,
    });
    if (userData.id === store.userData.id) appEvents.set("userData", userData);
  };
  _getRequestEditUserDetail = (propName) => () =>
    this.requestEditUserDetail(propName);

  closePrompt = () => this.setState({ isEditing: false, fieldEdited: null });
  resetError = () => this.setState({ error: null });
  render(_, state) {
    /**@type {import('../../api').UserData} */
    const data = state.__receivedData;
    const sec = data.secure_data || EMPTY;

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
              value={
                state.__receivedData[state.fieldEdited] ||
                state.__receivedData.secure_data[state.fieldEdited]
              }
            />
          </>
        )}
        <div class="heading-text bfont">{this.headerText}</div>
        <div style={{ fontSize: "0.96rem" }}>
          {this._isAllowedToEditProfile() && this.helpText}
        </div>
        <div class="prof-data-box">
          {this._getKeys(data).map((x) => (
            <ProfileInfoField
              editableFieldsValidatorFunctions={
                this.editableFieldsValidatorFunctions
              }
              x={x}
              getRequestEditUserDetail={this._getRequestEditUserDetail}
              data={data}
              sec={sec}
            />
          ))}
        </div>
        {this._getActionPanel()}
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

function ProfileInfoField(props) {
  const {
    x,
    getRequestEditUserDetail,
    data,
    sec,
    editableFieldsValidatorFunctions,
  } = props;
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
  if (x === "is_admin") {
    if (val === true) {
      //could be N/A
      val = "Team Halocrypt";
    } else {
      val = "Player";
    }
  }
  if (val == null || val === "") val = "N/A";
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
