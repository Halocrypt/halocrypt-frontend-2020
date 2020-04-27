import { AsyncComponent, A } from "@hydrophobefireman/ui-lib";
import { play } from "../../apiRoutes";
import { getRequest } from "../../http/requests";
import { UnexpectedError } from "../../fallbackComponents";
import goldTrophy from "../../images/gold-trophy.svg";
import silverTrophy from "../../images/silver-trophy.svg";
import bronzeTrophy from "../../images/bronze-trophy.svg";
import halocryptLogo from "../../images/logo.svg";
const fetchLeaderboard = async () => {
  const url = play.getLeaderboard;
  const data = await getRequest(url);
  if (data.error) {
    return UnexpectedError;
  }
  return () => <Leaderboard data={data.data} />;
};

function Username(props) {
  const player = props.x;
  const i = props.i;
  return (
    <div class="ld-header center value">
      {player.id !== "???" ? (
        <A
          href={"/profile?id=" + player.id}
          class={"hoverable" + (i <= 2 ? " clr" : "")}
        >
          {player.is_admin && (
            <img
              src={halocryptLogo}
              class="icon-i"
              style={{ marginRight: "10px" }}
              title="halocrypt admin"
            />
          )}
          {player.id}
        </A>
      ) : (
        player.id
      )}
    </div>
  );
}

/**
 *
 * @param {{data:import('../../api').UserData[]}} props
 */
function Leaderboard(props) {
  const ranks = [];
  const usernames = [];
  const levels = [];
  props.data.forEach((player, i) => {
    ranks.push(<div class="ld-header left value">{getRankORSVG(i + 1)}</div>);
    usernames.push(<Username x={player} i={i} />);
    levels.push(
      <div class="ld-header right value">{player.current_level}</div>
    );
  });
  return (
    <>
      <div class="heading-text c_u ld-title">Leaderboard</div>
      <div class="pseudo ld-table heading-text">
        <div class="ld-table-row">
          <div class="ld-header left">Rank</div>
          {ranks}
        </div>
        <div class="ld-table-row center">
          <div class="ld-header center">Username</div>
          {usernames}
        </div>
        <div class="ld-table-row">
          <div class="ld-header right">Level</div>
          {levels}
        </div>
      </div>
    </>
  );
}
let ranksToImg = {
  1: { src: goldTrophy, alt: "Gold" },
  2: { src: silverTrophy, alt: "Silver" },
  3: { src: bronzeTrophy, alt: "Bronze" },
};
const getTrophy = (r) => {
  const obj = ranksToImg[r];
  const title = `Rank ${r}`;
  return (
    <img
      class="icon-i"
      aria-label={title}
      title={title}
      src={obj.src}
      alt={obj.alt}
    />
  );
};
const ranksToTrophies = {
  1: getTrophy(1),
  2: getTrophy(2),
  3: getTrophy(3),
};
function getRankORSVG(x) {
  return ranksToTrophies[x] || x;
}
ranksToImg = null;
const skeletonData = {
  id: "???",
  current_level: "Infinity",
  is_admin: true,
};
export default () => (
  <AsyncComponent
    componentPromise={fetchLeaderboard}
    fallbackComponent={() => (
      <Leaderboard data={Array(10).fill(skeletonData)} />
    )}
  />
);
