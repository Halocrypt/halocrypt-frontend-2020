import { Component, AsyncComponent } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../../globalStore";
import { admin } from "../../../apiRoutes";
import { postJSONRequest, getRequest } from "../../../http/requests";
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

  setTab = (e) => this.setState({ currentTab: e.target.dataset.tab });

  render(_, state) {
    const isQuestionsWorkSpace = state.currentTab === "questions";
    const isUsersWorkSpace = state.currentTab === "users";
    const isLogsWorkSpace = state.currentTab === "logs";
    return (
      <>
        <div class="btn-box">
          <button
            onClick={this.setTab}
            data-tab="questions"
            class={"admin-button-tab" + (isQuestionsWorkSpace ? " active" : "")}
          >
            Questions
          </button>

          <button
            onClick={this.setTab}
            data-tab="users"
            class={"admin-button-tab" + (isUsersWorkSpace ? " active" : "")}
          >
            Users
          </button>

          <button
            onClick={this.setTab}
            data-tab="logs"
            class={"admin-button-tab" + (isLogsWorkSpace ? " active" : "")}
          >
            Logs
          </button>
        </div>

        <div style={{ fontSize: "2rem" }}>Workspace: {state.currentTab}</div>

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
    return <Task />;
  }
}

class AddQuestion extends Component {
  getLastQuestionData = async () => {
    // fixme
  };
  render() {
    return (
      <AsyncComponent
        componentPromise={this.getLastQuestionData}
        fallbackComponent={Loader}
      />
    );
  }
}

class EditQuestion extends Component {}

function UsersPanel() {}

const Loader = () => "Loading data...";
