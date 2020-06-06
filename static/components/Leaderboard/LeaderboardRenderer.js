import {
  A,
  useMemo,
  useCallback,
  useState,
  useEffect,
} from "@hydrophobefireman/ui-lib";
import { play } from "../../apiRoutes";
import { getRequest } from "../../http/requests";
import { UnexpectedError } from "../../fallbackComponents";
import goldTrophy from "../../images/gold-trophy.svg";
import silverTrophy from "../../images/silver-trophy.svg";
import bronzeTrophy from "../../images/bronze-trophy.svg";
import halocryptLogo from "../../images/logo.svg";
import { appEvents } from "../../globalStore";
import { SearchableLeaderboard } from "./SearchableLeaderboard";

const store = appEvents.getStore();
export function LeaderboardHeading() {
  return (
    <>
      <div class="heading-text c_u ld-title">Leaderboard</div>
      <div style={{ fontSize: "0.96rem" }}>
        (Click on the user to view their profile)
      </div>
    </>
  );
}

export const fetchLeaderboard = async () => {
  const url = play.getLeaderboard;
  const data = await getRequest(url);
  if (data.error) {
    return UnexpectedError;
  }
  const players = data.data;
  skeletonData = players;
  return () => <SearchableLeaderboard data={players} />;
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

const MAX_ITEMS_IN_ONE_RENDER = 100;
function useFrozenListener(cb) {
  return useCallback(cb, []);
}
function useCurrentWindowElements(props, currentOffset) {
  return useMemo(() => {
    const data = props.data;
    const dataLength = data.length;
    const ranks = [];
    const usernames = [];
    const levels = [];

    const offset = currentOffset;
    const numObjs = offset + MAX_ITEMS_IN_ONE_RENDER;

    const hasPreDecidedRank = "rank" in (data[0] || {});
    for (let i = offset; i < numObjs && i < dataLength; i++) {
      const player = data[i];
      let rank = i;
      if (hasPreDecidedRank) {
        rank = player.rank;
      }
      ranks.push(
        <div class="ld-header left value">{getRankORSVG(rank + 1)}</div>
      );
      usernames.push(<Username x={player} i={rank} />);
      levels.push(
        <div class="ld-header right value">{player.current_level}</div>
      );
    }
    return { ranks, usernames, levels };
  }, [currentOffset, props.data]);
}
export function Leaderboard(props) {
  const [currentOffset, setCurrentOffset] = useState(0);
  const incrementOffset = useFrozenListener(() =>
    setCurrentOffset((prev) => prev + MAX_ITEMS_IN_ONE_RENDER)
  );
  const decrementOffset = useFrozenListener(() =>
    setCurrentOffset((prev) => prev - MAX_ITEMS_IN_ONE_RENDER)
  );

  useEffect(() => {
    setCurrentOffset(0);
  }, [props.data]);

  const { ranks, usernames, levels } = useCurrentWindowElements(
    props,
    currentOffset
  );
  const dataLength = props.data.length;
  return (
    <>
      <OffsetButtons
        maxCount={MAX_ITEMS_IN_ONE_RENDER}
        offset={currentOffset}
        dataLength={dataLength}
        decrement={decrementOffset}
        increment={incrementOffset}
      />

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
      <OffsetButtons
        maxCount={MAX_ITEMS_IN_ONE_RENDER}
        offset={currentOffset}
        dataLength={dataLength}
        decrement={decrementOffset}
        increment={incrementOffset}
      />
    </>
  );
}

function OffsetButtons(props) {
  const maxCount = props.maxCount;
  const offset = props.offset;
  const dataLength = props.dataLength;
  const shouldShowPreviousButton = offset >= maxCount;
  const increment = props.increment;
  const decrement = props.decrement;
  // const previousButton = {
  //   from: offset - maxCount + 1,
  //   to: offset,
  // };
  // const nextButton = {
  //   from: offset + maxCount + 1,
  //   to: offset + maxCount * 2,
  // };
  const shouldShowNextButton = offset + maxCount < dataLength;
  const cls = "hoverable action-button h__uns";
  return (
    <div class="flex">
      {shouldShowPreviousButton && (
        <div class="offset-left">
          <span onClick={decrement} class={cls}>
            Previous
          </span>
        </div>
      )}
      {shouldShowNextButton && (
        <div class="offset-right" style={{ marginLeft: "auto" }}>
          <span onClick={increment} class={cls}>
            Next
          </span>
        </div>
      )}
    </div>
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
export let skeletonData = Array(10).fill({
  id: PLACEHOLDER_USER,
  current_level: "∞",
  is_admin: null,
});
