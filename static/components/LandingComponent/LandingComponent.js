import { Component, A } from "@hydrophobefireman/ui-lib";
import LogoLink from "../shared/LogoLink";
export default class LandingComponent extends Component {
  render(props) {
    return (
      <div>
        <div class="animated-landing-title">
          <div class="front-logo">
            <LogoLink size="200" />
          </div>
          <div class="heading-text main-title">HaloCrypt</div>
        </div>
        <div class="heading-text goes-live">Going Live In</div>
        <div class="heading-text going-live-time-delta">00:00:00</div>
        <div class="reg-btn-box">
          <A
            href="/register"
            class="landing-action-button heading-text hoverable"
          >
            Register
          </A>
          <A href="/login" class="heading-text hoverable landing-action-button">
            Login
          </A>
        </div>
      </div>
    );
  }
}
