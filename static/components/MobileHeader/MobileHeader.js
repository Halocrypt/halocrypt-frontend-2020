import LogoLink from "../shared/LogoLink";
import { getAppRoutes, getSocialLinks } from "../shared/appLinks";
import PathSensitiveComponent from "../_PathSensitiveComponent";
import { A } from "@hydrophobefireman/ui-lib";
const social_links = getSocialLinks({ margin: "auto" });
const sLen = social_links.length;
export default class MobileHeader extends PathSensitiveComponent {
  _toggleMenu = () => this.setState((ps) => ({ enabledMenu: !ps.enabledMenu }));

  render(_, state) {
    return (
      <>
        <header>
          <div class="hamburger-menu" onClick={this._toggleMenu} />
          {state.currentPath === "/" ? (
            <LogoLink size="60" />
          ) : (
            <A href="/" class="heading-text halocrypt-text">
              Halocrypt
            </A>
          )}
        </header>
        {state.enabledMenu ? (
          <div class="mask" onClick={this._toggleMenu}></div>
        ) : null}
        <div
          class={
            "swipeable-menu-container" + (state.enabledMenu ? " expanded" : "")
          }
        >
          <div class="app-routes-mob">
            {getAppRoutes(this.state.currentPath)}
          </div>
          <div
            class="social-links-mob"
            style={{
              "grid-template-columns": `repeat(${sLen}, 1fr)`,
              marginBottom: "5px",
            }}
          >
            {social_links}
          </div>
        </div>
      </>
    );
  }
}
