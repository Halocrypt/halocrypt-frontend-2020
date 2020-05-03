import { Component } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../../globalStore";
import { QuestionsPanel } from "./Questions";
import { UsersPanel } from "./Users";

const store = appEvents.getStore();

export default function Admin() {
  if (!store.isLoggedIn || !store.userData.is_admin) {
    return <div style={{ fontSize: "8rem" }}>NO</div>;
  }
  return (
    <div class="admin-data-panel">
      <DataPanel />
    </div>
  );
}
class DataPanel extends Component {
  /**@type {{currentTab:"logs"|"questions"|"users"}} */
  state = { currentTab: "questions" };

  setTab = (e) =>
    this.setState({ currentTab: e ? e.target.dataset.tab : null });

  render(_, state) {
    const isQuestionsWorkSpace = state.currentTab === "questions";
    const isUsersWorkSpace = state.currentTab === "users";
    const isLogsWorkSpace = state.currentTab === "logs";

    return (
      <>
        <div class="btn-box">
          {["questions", "users", "logs"].map(
            (x) =>
              state.currentTab !== x && (
                <span
                  onClick={this.setTab}
                  data-tab={x}
                  class="admin-button-tab"
                >
                  {x}
                </span>
              )
          )}
        </div>

        <div style={{ fontSize: "2rem" }}>
          Workspace: {state.currentTab || "Not selected"}
        </div>

        {isQuestionsWorkSpace && <QuestionsPanel />}

        {isUsersWorkSpace && <UsersPanel />}
      </>
    );
  }
}
