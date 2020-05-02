import { Component } from "@hydrophobefireman/ui-lib";
import { admin } from "../../../apiRoutes";
import { postJSONRequest } from "../../../http/requests";
import { getLatestQuestionNumber, getAllQuestions, Loader } from "./util";
import { sanitizeRegExp, ErrorPopup } from "../../shared/UserForm";
import { Question } from "../../Play/Play";
import { QuestionEditor, DEFAULT_INPUT } from "./QuestionEditor";
import { callback } from "../../../Logger";

class AddQuestion extends Component {
  url = admin.addQuestion;
  state = {
    questionData: {
      question: { ...DEFAULT_INPUT },
      hint: [],
      special_hint: [],
    },
  };

  async getLastQuestionData() {
    this.setState({ isLoading: true, data: null, showLastQuestion: false });

    const data = await getLatestQuestionNumber();

    const _qData = this.state.questionData;

    let qn = data.question_number;
    qn == null && (qn = -1);

    _qData.question_level = qn + 1;

    this.setState({ data: true, isLoading: false, questionData: _qData });
  }
  componentDidMount() {
    this.getLastQuestionData();
  }

  _sendQuestion = () => {
    this.setState({ isLoading: true });

    postJSONRequest(this.url, this.state.questionData).then((resp) => {
      if (resp.error || resp.data.error) {
        return this.setState({
          isLoading: false,
          error: resp.error || resp.data.error,
        });
      }
      this.props.close();
    });
  };

  _propUpdater = (prop, value) =>
    this.setState((ps) => {
      const d = ps.questionData;

      d[prop] = value;

      return ps;
    });

  _reset = () => this.setState({ error: false });

  render(_, state) {
    if (state.isLoading) return <Loader />;

    if (!state.data) return;

    if (state.error) {
      return (
        <ErrorPopup
          errorHead="unknown error"
          reasons={["check your console?"]}
          close={this._reset}
        />
      );
    }
    if (state.success) return;
    return (
      <QuestionEditorTempl
        propUpdater={this._propUpdater}
        sendQuestion={this._sendQuestion}
        questionData={state.questionData}
      />
    );
  }
}
export const clean = (x) => (x + "").replace(sanitizeRegExp, "").toLowerCase();

export const contains = (b, a) => clean(b).includes(a);

/** @param {import('../../../api').Question} x */
function filterQuestions(x, q) {
  const sanitized = clean(q);
  const { question, question_level, hint, answer } = x;
  if (
    contains(question, sanitized) ||
    contains(question_level, sanitized) ||
    contains(answer, sanitized)
  )
    return true;
  if (hint && hint.length) {
    for (const h of hint) {
      if (contains(h.value || h, sanitized)) return true;
    }
  }
  return false;
}

class EditQuestion extends AddQuestion {
  state = {
    questionData: { question: "", hint: [], special_hint: [] },
    questionData: null,
    isLoading: false,
    data: false,
    fetchedQuestions: null,
    filteredData: null,
    searchValue: "",
  };
  url = admin.editQuestion;

  async fetchAll() {
    this.setState({ isLoading: true });

    const data = await getAllQuestions();

    this.setState({
      data: true,
      isLoading: false,
      fetchedQuestions: data,
      filteredData: data,
    });
  }
  componentDidMount() {
    this.fetchAll();
  }
  _search = (e) => {
    const q = e.target.value || "";
    let filteredData;

    const fetchedQuestions = this.state.fetchedQuestions;

    callback(() => {
      if (!q) {
        filteredData = fetchedQuestions;
      } else {
        filteredData = fetchedQuestions.filter((x) =>
          filterQuestions(x, q.trim())
        );
      }
      this.setState({ filteredData });
    });
    this.setState({ searchValue: q });
  };
  _setEditQuestion = (e) => {
    const ques = +e.target.dataset.bind;

    const data = this.state.filteredData[ques];

    this.setState({ questionData: data });
  };
  render(_, state) {
    if (state.isLoading) return <Loader />;

    if (!state.data) return;

    if (state.error) {
      return (
        <ErrorPopup
          errorHead="unknown error"
          reasons={["check your console?"]}
          close={this._reset}
        />
      );
    }

    if (!state.data) return;

    if (!state.questionData && state.filteredData) {
      const dataLen = state.filteredData.length;

      return (
        <div>
          <div style={{ fontSize: "2rem" }}>
            Result: {dataLen} {pluralize("Question", dataLen)}
          </div>

          <div class="search-box">
            <div style={{ marginBottom: "10px" }}>
              Search By Question/Question number/Answer/Hint Content
            </div>
            <input
              value={state.searchValue}
              class="paper-input"
              onInput={this._search}
            />
          </div>

          <hr />
          <div>
            <QuestionList
              filteredData={state.filteredData}
              setEditQuestion={this._setEditQuestion}
            />
          </div>
        </div>
      );
    }

    if (state.questionData) {
      return (
        <QuestionEditorTempl
          questionData={state.questionData}
          propUpdater={this._propUpdater}
          sendQuestion={this._sendQuestion}
        />
      );
    }
  }
}

function QuestionList(props) {
  return props.filteredData.map((x, i) => (
    <div class="c_u question-parent">
      <Question data={x} disableInput />
      <button
        data-bind={i}
        onClick={props.setEditQuestion}
        class="action-button hoverable edit-q"
      >
        Edit Question {x.question_level}
      </button>
    </div>
  ));
}

class QuestionEditorTempl extends Component {
  state = { showGameLivePreview: true };

  _toggle = () =>
    this.setState((ps) => ({ showGameLivePreview: !ps.showGameLivePreview }));

  render(props, state) {
    const { propUpdater, sendQuestion, questionData } = props;
    const showGameLivePreview = state.showGameLivePreview;
    return (
      <div>
        <button
          onClick={this._toggle}
          class="heading-text last-q hoverable action-button"
        >
          {showGameLivePreview ? "hide" : "show"} Live Preview
        </button>
        {showGameLivePreview && (
          <div class="last-question-card">
            <Question data={questionData} disableInput />
          </div>
        )}
        <QuestionEditor
          propUpdater={propUpdater}
          onSubmit={sendQuestion}
          questionData={questionData}
        />
      </div>
    );
  }
}

export function pluralize(str, val) {
  return val === 1 ? str : `${str}s`;
}

export class QuestionsPanel extends Component {
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
