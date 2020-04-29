import { Component } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../../globalStore";
import { AddQuestion, EditQuestion } from "./Questions";
import back from "./back.svg";
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
                <button
                  onClick={this.setTab}
                  data-tab={x}
                  class="admin-button-tab"
                >
                  {x}
                </button>
              )
          )}
        </div>

        <div style={{ fontSize: "2rem" }}>
          Workspace: {state.currentTab || "Not selected"}
        </div>

        {this.state.currentTab && (
          <div style={{ textAlign: "left" }}>
            <img
              src={back}
              class="back hoverable"
              title="go back"
              onClick={() => this.setTab()}
            />
          </div>
        )}

        {isQuestionsWorkSpace && <QuestionsPanel />}

        {isUsersWorkSpace && <UsersPanel />}
      </>
    );
  }
}

class QuestionsPanel extends Component {
  state = { currentTask: null };

  closeWorkspaceTask = () => this.setState({ currentTask: null });

  setTask_addQuestion = () => this.setState({ currentTask: AddQuestion });

  setTask_editQuestion = () => this.setState({ currentTask: EditQuestion });

  render(_, state) {
    if (state.currentTask == null) {
      return (
        <div>
          <span>Available Actions:</span>

          <button class="btn-act hoverable" onClick={this.setTask_addQuestion}>
            Add Question
          </button>

          <button class="btn-act hoverable" onClick={this.setTask_editQuestion}>
            Edit Question
          </button>
        </div>
      );
    }
    const Task = this.state.currentTask;
    return <Task close={this.closeWorkspaceTask} />;
  }
}

function UsersPanel() {}
