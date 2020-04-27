import { A } from "@hydrophobefireman/ui-lib";
import LogoLink from "../shared/LogoLink";
import Timer from "./Timer";

import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
import { appEvents } from "../../globalStore";

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
          <div class="heading-text main-title c_u">HALOCRYPT</div>
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
              href={store.eventBegan ? "/play" : "profile"}
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
