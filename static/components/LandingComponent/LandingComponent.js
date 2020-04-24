import { A, redirect } from "@hydrophobefireman/ui-lib";
import LogoLink from "../shared/LogoLink";
import Timer from "./Timer";
import { appEvents } from "../../globalStore";
import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
const store = appEvents.getStore();

export default class LandingComponent extends AuthStateSensitiveComponent {
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
          {!(store.isLoggedIn && store.eventBegan) ? (
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
              href="/play"
              class="heading-text hoverable landing-action-button"
            >
              Play
            </A>
          )}
        </div>
        <div class="powered-by-box">
          <div class="powered-by" data-x="?">
            Powered By:
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
