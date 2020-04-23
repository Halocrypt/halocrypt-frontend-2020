import LogoLink from "../shared/LogoLink";
import Draggable from "./DraggableComponent";
import { getAppRoutes, getSocialLinks } from "../Header/Header";
import PathSensitiveComponent from "../_PathSensitiveComponent";
import { A } from "@hydrophobefireman/ui-lib";
export default class MobileHeader extends PathSensitiveComponent {
  _setCoords = () => {
    this.setState({ enabledMenu: true });
  };
  _toggleMenu = () => this.setState((ps) => ({ enabledMenu: !ps.enabledMenu }));
  _headerChild = () => (
    <>
      <div
        class="swipeable-button hoverable"
        onClick={(e) => {
          this.setState({ enabledMenu: true });
        }}
      ></div>
      <div class="app-routes-mob">{getAppRoutes(this.state.currentPath)}</div>
      <div class="social-links-mob" style={{ marginBottom: "5px" }}>
        {getSocialLinks({ margin: "auto" })}
      </div>
    </>
  );

  render(_, state) {
    return (
      <>
        <header>
          {state.currentPath === "/" ? (
            <LogoLink size="60" />
          ) : (
            <A href="/" class="heading-text halocrypt-text">
              Halocrypt
            </A>
          )}
        </header>
        {!state.enabledMenu ? (
          <Draggable
            onlyY={true}
            // onClick={this._toggleMenu}
            dragChildName="div"
            dragChildProps={{
              class: "swipeable-menu-container",
              children: this._headerChild(),
            }}
            swipeThresholdExeeded={this._setCoords}
          />
        ) : (
          <>
            <div class="mask" onClick={this._toggleMenu}></div>
            <div class="swipeable-menu-container expanded">
              {this._headerChild()}
            </div>
          </>
        )}
      </>
    );
  }
}
