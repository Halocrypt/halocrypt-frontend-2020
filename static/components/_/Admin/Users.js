import { Component } from "@hydrophobefireman/ui-lib";
import { callback } from "../../../Logger";
import { admin } from "../../../apiRoutes";
import { getRequest } from "../../../http/requests";
import { contains, clean, pluralize } from "./Questions";
import { UserProfileEditor } from "./UserProfileEditor";
export class UsersPanel extends Component {
  state = {
    isFetching: false,
    fetchedUsers: null,
    filteredUsers: null,
    query: "",
  };

  fetchUsers() {
    if (this.state.isFetching) return;
    this.setState({ isFetching: true });
    getRequest(admin.getAllUsers).then((x) => {
      const error = x.error || x.data.error;
      if (error) return this.setState({ error });
      const data = x.data;
      this.setState({
        isFetching: false,
        error: false,
        fetchedUsers: data,
        filteredUsers: data,
      });
    });
  }
  componentDidMount() {
    this.fetchUsers();
  }
  // componentDidUpdate = this.componentDidMount;
  execSearchQueryAsynchronously = (e) => {
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
  setUserEditingCandidate = (e) => {
    const currentEditIndex = +e.target.dataset.eindex;
    this.setState({
      isEditingUserDetails: true,
      currentUserDetails: this.state.filteredUsers[currentEditIndex],
      currentEditIndex,
    });
  };
  _closeEditor = (deletedUser) => {
    let fetchedUsers = this.state.fetchedUsers;
    if (deletedUser) {
      fetchedUsers = (this.state.fetchedUsers || []).filter(
        (x) => x !== deletedUser
      );
    }
    this.setState({
      isEditingUserDetails: false,
      fetchedUsers: fetchedUsers,
      filteredUsers: fetchedUsers,
    });
  };
  render(props, state) {
    if (state.isFetching) {
      return "fetching all user data...";
    }
    if (state.error) {
      return (
        <div>
          An error occured: <div>{state.error}</div>
        </div>
      );
    }
    if (state.isEditingUserDetails)
      return (
        <>
          <span class="hoverable action-button act" onClick={this._closeEditor}>
            Go Back to Users List
          </span>
          <UserProfileEditor
            closeProfileEditor={this._closeEditor}
            data={state.currentUserDetails}
            propUpdateCallback={this._syncProps}
          />
        </>
      );
    const dataLen = this.state.filteredUsers && this.state.filteredUsers.length;
    return (
      <div>
        <div style={{ fontSize: "0.96rem" }}>Click a user to edit</div>
        <div class="input-parent">
          <input
            placeholder="Search by username or name"
            class="paper-input"
            onInput={this.execSearchQueryAsynchronously}
          />
        </div>

        {state.filteredUsers && (
          <>
            <div style={{ fontSize: "2rem" }}>
              Results: {dataLen} {pluralize("User", dataLen)}
            </div>
            <div class="search-results heading-text">
              {state.filteredUsers.map((x, i) => (
                <div
                  data-eindex={i}
                  class="search-result-element hoverable"
                  onClick={this.setUserEditingCandidate}
                >
                  {x.id} ( {x.name} )
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}
