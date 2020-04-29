import { A } from "@hydrophobefireman/ui-lib"; // optimiziation, do not map on re renders
import { appEvents } from "../../globalStore";
const store = appEvents.getStore();

const routeData = [
  { text: "Leaderboard", path: "/leaderboard" },
  { text: "Rules", path: "/rules" },
  { text: "Play", path: "/play" },
  { text: "Profile", path: "/profile" },
];

export const getAppRoutes = (routePath, style) =>
  routeData.map(({ text, path }) =>
    path !== routePath.split("?")[0] &&
    ("/profile" !== path || store.isLoggedIn) ? (
      <A
        style={{ fontWeight: "normal", ...style }}
        href={path}
        class={["heading-text", "heading-link", "hoverable"]}
      >
        <span>{text}</span>
      </A>
    ) : null
  );

const SOCIAL_LINKS_MAP = {
  instagram: {
    href: "https://www.instagram.com/halocrypt/",
    label: "Halocrpt Instagram",
  },
  discord: { href: "https://discord.gg/fz8e6Df", label: "Halocrypt Discord" },
  github: {
    href: "https://github.com/halocrypt-20",
    label: "Halocrypt Github",
  },
  twitter: {
    href: "https://twitter.com/halocrypt1",
    label: "Halocrypt Twitter",
  },
};
export const getSocialLinks = (style) =>
  Object.keys(SOCIAL_LINKS_MAP).map((x) => {
    const data = SOCIAL_LINKS_MAP[x];
    const isInternalNavigation = data.href[0] === "/";
    const El = isInternalNavigation ? A : "a";
    const target = isInternalNavigation ? null : "_blank";
    return (
      <El
        rel="noreferrer"
        style={style}
        target={target}
        class={`${x} social-logo`}
        href={data.href}
        aria-label={data.label}
      />
    );
  });
