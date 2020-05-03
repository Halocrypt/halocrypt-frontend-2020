import Component from "@hydrophobefireman/ui-lib";
import { Leaderboard, LeaderboardHeading } from "./LeaderboardRenderer";
import { callback, clean, contains } from "../../shared";
export class SearchableLeaderboard extends Component {
  componentDidMount() {
    this.props.data && this.props.data.forEach((x, i) => (x.rank = i));
    this.setState({
      fetchedUsers: this.props.data,
      filteredUsers: this.props.data,
    });
  }
  executeAsynchronousSearch = (e) => {
    const query = e.target.value || "";
    const sanitized = clean(query);
    if (!this.state.fetchedUsers || !this.state.fetchedUsers.length)
      return this.setState({ filteredUsers: [] });

    if (!query)
      return this.setState({ filteredUsers: this.state.fetchedUsers }); // .slice();
    callback(() => {
      const data = this.state.fetchedUsers.filter(
        /** @param {import('../../../api').UserData} x  */
        (x) => {
          const name = x.name;
          const user = x.id;
          return contains(name, sanitized) || contains(user, sanitized);
        }
      );

      this.setState({ error: false, filteredUsers: data });
    });
  };
  render(_, state) {
    const resultLen = state.filteredUsers && state.filteredUsers.length;
    return (
      <>
        <LeaderboardHeading />
        <div class="search-box">
          <div class="input-parent" style={{ width: "80%", marginTop: "10px" }}>
            <input
              onInput={this.executeAsynchronousSearch}
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
              data={state.filteredUsers}
              isFilteredData={state.filteredUsers !== state.fetchedUsers}
            />
          </>
        )}
      </>
    );
  }
}

export function pluralize(str, val) {
  return val === 1 ? str : `${str}s`;
}
