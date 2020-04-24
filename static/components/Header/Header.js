import PathSensitiveComponent from "../_PathSensitiveComponent";
import LogoLink from "../shared/LogoLink";
import { getAppRoutes, getSocialLinks } from "../shared/appLinks";
import { appEvents } from "../../globalStore";
const SOCIAL_LINKS = getSocialLinks();
export default class Header extends PathSensitiveComponent {
  __update = () => this.setState({});
  componentWillUnmount() {
    super.componentWillUnmount();
    appEvents.unsubscribe(this.__update);
  }
  componentDidMount() {
    super.componentDidMount();
    appEvents.subscribe(this.__update);
  }
  render(_, s) {
    return (
      <header static-desktop>
        {s.currentPath === "/" ? (
          <div class="social-links">{SOCIAL_LINKS}</div>
        ) : (
          <LogoLink size="60" />
        )}
        <div class="header-links">{getAppRoutes(s.currentPath)}</div>
      </header>
    );
  }
}
