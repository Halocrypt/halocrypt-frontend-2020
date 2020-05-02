import { AsyncComponent } from "@hydrophobefireman/ui-lib";
import {
  fetchLeaderboard,
  skeletonData,
  Leaderboard,
  LeaderboardHeading,
} from "./LeaderboardRenderer";

export default () => (
  <AsyncComponent
    componentPromise={fetchLeaderboard}
    fallbackComponent={() => (
      <>
        <LeaderboardHeading />
        <Leaderboard data={skeletonData} />
      </>
    )}
  />
);
