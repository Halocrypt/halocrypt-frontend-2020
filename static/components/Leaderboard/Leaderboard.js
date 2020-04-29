import { AsyncComponent, A } from "@hydrophobefireman/ui-lib";
import { play, admin } from "../../apiRoutes";
import { getRequest } from "../../http/requests";
import { UnexpectedError } from "../../fallbackComponents";
import goldTrophy from "../../images/gold-trophy.svg";
import silverTrophy from "../../images/silver-trophy.svg";
import bronzeTrophy from "../../images/bronze-trophy.svg";
import halocryptLogo from "../../images/logo.svg";
import { appEvents } from "../../globalStore";
const store = appEvents.getStore();

const fetchLeaderboard = async () => {
  const url = play.getLeaderboard;
  const data = await getRequest(url);
  if (data.error) {
    return UnexpectedError;
  }
  const players = data.data;
  skeletonData = players;
  return () => <Leaderboard data={players} />;
};
const PLACEHOLDER_USER = "-";
function Username(props) {
  const player = props.x;
  const i = props.i;
  const id = player.id;
  return (
    <div class="ld-header center value">
      {id !== PLACEHOLDER_USER ? (
        <A
          href={"/profile?id=" + id}
          class={"hoverable" + (i <= 2 ? " clr" : "")}
        >
          {player.is_admin && (
            <img
              class="icon-i"
              src={halocryptLogo}
              style={{
                marginRight: "10px",
              }}
              title="halocrypt admin"
            />
          )}
          {id} {store.isLoggedIn && store.userData.id === id && " (You)"}
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
    i++;
  });

  return (
    <>
      <div class="heading-text c_u ld-title">Leaderboard</div>
      <div style={{ fontSize: "0.96rem" }}>
        (Click on the user to view their profile)
      </div>

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
let skeletonData = Array(10).fill({
  id: PLACEHOLDER_USER,
  current_level: "∞",
  is_admin: null,
});
export default () => (
  <AsyncComponent
    componentPromise={fetchLeaderboard}
    fallbackComponent={() => <Leaderboard data={skeletonData} />}
  />
);
