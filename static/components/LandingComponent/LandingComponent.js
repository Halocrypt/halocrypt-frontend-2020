import { A, AsyncComponent } from "@hydrophobefireman/ui-lib";
import LogoLink from "../shared/LogoLink";
import Timer from "./Timer";
import { handler } from "../../authHandler";
import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
import { CredLoadingFallBack } from "../../fallbackComponents";
import { appEvents } from "../../globalStore";

const store = appEvents.getStore();

async function fetchUserData() {
  const ret = LandingComponentDataLoaded;
  if (store.isLoggedIn) return ret;

  await handler.checkAuth();

  return ret;
}

class LandingComponentDataLoaded extends AuthStateSensitiveComponent {
  /**
   * @param {keyof import('../../globalStore/store').Store} e
   * @param {import('../../api').UserData} data
   */
  render(props) {
    return (
      <div>
        <div class="animated-landing-title">
          <div class="front-logo">
            <LogoLink size="200" />
          </div>
          <div class="heading-text main-title">HALOCRYPT</div>
        </div>
        <Timer />
        <div class="reg-btn-box">
          {!store.isLoggedIn ? (
            <>
              <A
                href="/register"
                class="landing-action-button heading-text hoverable"
              >
                Register
              </A>
              <A
                href="/login"
                class="heading-text hoverable landing-action-button"
              >
                Login
              </A>
            </>
          ) : (
            <A
              href={store.eventBegan ? "/play" : "Profile"}
              class="heading-text hoverable landing-action-button"
            >
              {store.eventBegan ? "Play" : "Profile"}
            </A>
          )}
        </div>
      </div>
    );
  }
}
export default () => (
  <AsyncComponent
    componentPromise={fetchUserData}
    fallbackComponent={CredLoadingFallBack}
  />
);
