import { A } from "@hydrophobefireman/ui-lib";
import PathSensitiveComponent from "../_PathSensitiveComponent";
import LogoLink from "../shared/LogoLink";
// optimiziation, do not map on re renders
export const getAppRoutes = (path, style) =>
  ["Leaderboard", "Rules", "Play"].map((x) =>
    x.toLowerCase() !== path.substr(1) ? (
      <A
        style={style}
        href={`/${x.toLowerCase()}`}
        class={["heading-text", "heading-link", "hoverable"]}
      >
        <span>{x}</span>
      </A>
    ) : null
  );

const SOCIAL_LINKS_MAP = {
  instagram: "https://www.instagram.com/halocrypt/",
  discord: null,
  twitter: null,
};
export const getSocialLinks = (style) =>
  ["instagram", "twitter", "discord"].map((x) => (
    <a
      style={style}
      target="__blank"
      class={`${x} social-logo hoverable`}
      href={SOCIAL_LINKS_MAP[x]}
    />
  ));
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
