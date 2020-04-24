import { A } from "@hydrophobefireman/ui-lib"; // optimiziation, do not map on re renders

const routeData = [
  { text: "Leaderboard", path: "/leaderboard" },
  { text: "Rules", path: "/rules" },
  { text: "Play", path: "/play" },
  { text: "FAQ", path: "/faq" },
];

export const getAppRoutes = (routePath, style) =>
  routeData.map(({ text, path }) =>
    path !== routePath ? (
      <A
        style={style}
        href={`${path}`}
        class={["heading-text", "heading-link", "hoverable"]}
      >
        <span>{text}</span>
      </A>
    ) : null
  );

const SOCIAL_LINKS_MAP = {
  instagram: "https://www.instagram.com/halocrypt/",
  discord: "https://discord.gg/",
  twitter: "https://twitter.com/halocrypt1",
  github: "/github-info",
};
export const getSocialLinks = (style) =>
  ["instagram", "twitter", "discord", "github"].map((x) => {
    const href = SOCIAL_LINKS_MAP[x];
    const isInternalNavigation = href[0] === "/";
    const El = isInternalNavigation ? A : "a";
    const target = isInternalNavigation ? null : "_blank";
    return (
      <El
        style={style}
        target={target}
        class={`${x} social-logo`}
        href={href}
      />
    );
  });
