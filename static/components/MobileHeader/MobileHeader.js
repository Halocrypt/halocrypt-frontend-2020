import LogoLink from "../shared/LogoLink";
import { getAppRoutes, getSocialLinks } from "../shared/appLinks";
import PathSensitiveComponent from "../_PathSensitiveComponent";
import { A } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
const social_links = getSocialLinks({ margin: "auto" });
const sLen = social_links.length;
let m = document.querySelector("main");
export default class MobileHeader extends PathSensitiveComponent {
  _toggleMenu = () => this.setState((ps) => ({ enabledMenu: !ps.enabledMenu }));

  componentWillUpdate() {
    m = m || document.querySelector("main");
    m && (m.style.transform = this.state.enabledMenu ? "scale(0.9)" : "unset");
  }
  __update = () => this.setState({});
  componentWillUnmount() {
    super.componentWillUnmount();
    appEvents.unsubscribe(this.__update);
  }
  componentDidMount() {
    super.componentDidMount();
    appEvents.subscribe(this.__update);
  }
  render(_, state) {
    return (
      <>
        <header>
          <div class="hamburger-menu" onClick={this._toggleMenu} />
          {state.currentPath === "/" ? (
            <LogoLink size="60" />
          ) : (
            <A href="/" class="heading-text halocrypt-text c_u">
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
            {getAppRoutes(this.state.currentPath, {
              marginTop: "5px",
              marginBottom: "5px",
            })}
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
