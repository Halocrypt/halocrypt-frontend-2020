import { useState, useEffect, useCallback } from "@hydrophobefireman/ui-lib";
import { Leaderboard, LeaderboardHeading } from "./LeaderboardRenderer";
import { callback, clean, contains } from "../../shared";

export function SearchableLeaderboard(props) {
  useEffect(() => {
    props.data && props.data.forEach((x, i) => (x.rank = i));
  }, []);
  const fetchedUsers = props.data;
  const [filteredUsers, setFilteredUsers] = useState(props.data);
  const executeAsynchronousSearch = useCallback(
    (e) => {
      const query = e.target.value || "";
      const sanitized = clean(query);
      if (!fetchedUsers || !fetchedUsers.length) return setFilteredUsers([]);

      if (!query) return setFilteredUsers(fetchedUsers); // .slice();

      callback(() => {
        const data = fetchedUsers.filter(
          /** @param {import('../../../api').UserData} x  */
          (x) => {
            const name = x.name;
            const user = x.id;
            return contains(name, sanitized) || contains(user, sanitized);
          }
        );
        setFilteredUsers(data);
      });
    },
    [fetchedUsers]
  );
  const resultLen = filteredUsers && filteredUsers.length;
  return (
    <>
      <LeaderboardHeading />
      <div class="search-box">
        <div class="input-parent" style={{ width: "80%", marginTop: "10px" }}>
          <input
            onInput={executeAsynchronousSearch}
            class="paper-input"
            placeholder="Search"
          />
        </div>
      </div>
      {resultLen > 0 && (
        <>
          <div style={{ fontSize: "2rem" }}>
            {resultLen} {pluralize("Result", resultLen)}
          </div>
          <Leaderboard
            data={filteredUsers}
            isFilteredData={filteredUsers !== fetchedUsers}
          />
        </>
      )}
    </>
  );
}
export function pluralize(str, val) {
  return val === 1 ? str : `${str}s`;
}
