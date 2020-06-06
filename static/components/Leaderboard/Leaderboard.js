import { AsyncComponent } from "@hydrophobefireman/ui-lib";
import { fetchLeaderboard, skeletonData } from "./LeaderboardRenderer";
import { SearchableLeaderboard } from "./SearchableLeaderboard";

export default () => (
  <AsyncComponent
    componentPromise={fetchLeaderboard}
    fallbackComponent={() => <SearchableLeaderboard data={skeletonData} />}
  />
);
