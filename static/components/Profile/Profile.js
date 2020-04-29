import { AsyncComponent, Router, redirect, A } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { user } from "../../apiRoutes";
import { getRequest } from "../../http/requests";
import { ErrorPopup } from "../shared/UserForm";
import keys from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/keys";
import { logger } from "../../Logger";
const store = appEvents.getStore();
const EMPTY = {};

const mapNames = {
  id: "Username",
  current_level: "Level",
  ig_user_id: "Insta",
  is_admin: "Player Type",
};
function Profile(props) {
  /**@type {import('../../api').UserData} */
  const data = props.data;
  const sec = data.secure_data || EMPTY;
  const currID = store.isLoggedIn && store.userData.id;
  const clsName = "heading-text hoverable landing-action-button";
  return (
    <div>
      <div class="heading-text bfont">Profile</div>
      <div class="prof-data-box">
        {["name", "id", "current_level", "is_admin", "school"]
          .concat(keys(sec))
          .map((x) => (
            <div class="prof-container">
              <div class="heading-text prof-field">{mapNames[x] || x}</div>
              <div class="prof-field">{getValue(data, sec, x)}</div>
            </div>
          ))}
      </div>
      <div class="action-buttons-profile">
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
      </div>
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
