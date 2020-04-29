import { A } from "@hydrophobefireman/ui-lib";
import LogoLink from "../shared/LogoLink";
import dpsImg from "../../images/dps.png";
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
        <div style={{ marginTop: "85px" }}>
          <div class="t-container">
            <div style={{ fontSize: "2rem" }}>About</div>
            <div>
              Halocrypt is an international online cryptic hunt organized by the
              students of DPS, Indore.
            </div>
            <div>
              The hunt consists of 50 brain wrecking questions based on famous
              incidents, figures and internet culture. The goal of the
              participant is to answer the questions as fast as possible using
              the hints given to place themselves at the top of the leaderboard.
            </div>
            <div>
              The top competitors who reach the highest levels in the shortest
              amount of time shall receive the prizes. The participant is free
              to use the internet to search for the answers. The hunt will
              commence on the 4<sup>th</sup> of May at 12 AM IST.
            </div>
            <div>
              Halocrypt provides participating students with an international
              platform to compete and test their skills against some of the
              greatest cryptic hunters and intellects on the globe.
            </div>
            <div>
              The competitor who completes all 50 questions or ends at the top
              of the leaderboard when the event ends, shall be declared as the
              winner of Halocrypt 2020.
            </div>
            <div>
              IF a competitor completes all the 50 levels before the competition
              ends, the competitor shall get all the prizes and no other
              competitor will receive any prize.
            </div>
          </div>
          <div class="t-container">
            <div style={{ fontSize: "2rem" }}>Prizes:-</div>
            <div>
              <span class="bold">
                1<sup>st</sup>:
              </span>
              NETFLIX PREMIUM or amazon gift card for the same amount, spotify
              premium family and discord nitro.
            </div>
            <div>
              <span class="bold">
                2<sup>nd</sup>:
              </span>
              NETFLIX STANDARD or amazon gift card for the same amount, spotify
              premium family and discord nitro.
            </div>
            <div>
              <span class="bold">
                3<sup>rd</sup>:
              </span>
              NETFLIX STANDARD or amazon gift card for the same amount, spotify
              premium family and discord nitro.
            </div>
            <div>10X spotify premium.</div>
            <div>10Xdiscord nitro classic</div>
          </div>
        </div>
      </div>
    );
  }
}
