import { AsyncComponent, Router, redirect, A } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { ProfileLoadingFallback } from "../../fallbackComponents";
import { user } from "../../apiRoutes";
import { getRequest } from "../../http/requests";
import { ErrorPopup } from "../shared/UserForm";
import keys from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/keys";
const store = appEvents.getStore();
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
      fallbackComponent={ProfileLoadingFallback}
    />
  );
};
const mapNames = {
  id: "Username",
  current_level: "Level",
  ig_user_id: "Insta",
};
function Profile(props) {
  /**@type {import('../../api').UserData} */
  const data = props.data;
  const sec = data.secure_data;
  const currID = store.isLoggedIn && store.userData.id;
  return (
    <div>
      <div class="heading-text bfont">Profile</div>
      <div class="prof-data-box">
        {["name", "id", "current_level"].concat(keys(sec, {})).map((x) => (
          <div class="prof-container">
            <div class="heading-text prof-field">{mapNames[x] || x}</div>
            <div class="prof-field">{getValue(data, sec, x)}</div>
          </div>
        ))}
      </div>
      {data.id === currID && <A href="/logout">Logout</A>}
    </div>
  );
}
async function loadProfile() {
  const q = new URLSearchParams(Router.getQs);
  const id = q.get("id");
  let data;
  if (store.isLoggedIn && id === store.userData.id) {
    data = store.userData;
  } else {
    /**@type {import("../../api").UserRoutes.getUserDetails.response['success']} */
    data = await getRequest(`${user.getUserDetails}?id=${id}`);
    data = data.data;
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
  const val = x in data ? data[x] : sec[x];
  if (val == null) return "N/A";
  return val;
}
