import PathSensitiveComponent from "../_PathSensitiveComponent";
import LogoLink from "../shared/LogoLink";
import { getAppRoutes, getSocialLinks } from "../shared/appLinks";
const SOCIAL_LINKS = getSocialLinks();
export default class Header extends PathSensitiveComponent {
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
