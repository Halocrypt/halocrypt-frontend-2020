import { Component } from "@hydrophobefireman/ui-lib";

import {
  AnswerFormField,
  QuestionFormField,
  HintInputFormField,
} from "./QuestionFormFields";

export const DEFAULT_INPUT = { type: "text", value: "" };

const alternate = { text: "link", link: "text" };
export class QuestionEditor extends Component {
  state = {
    hasQuestionData: null,
    question: { ...DEFAULT_INPUT },
    hint: [],
    special: [],
    answer: "",
  };
  syncProp(propName, propVal) {
    this.setState({ [propName]: propVal });
    this.props.propUpdater(propName, propVal);
  }
  _handleQuestion = (e) => {
    const question = {
      value: e.target.value || "",
      type: this.state.question.type,
    };
    this.syncProp("question", question);
  };
  _handleAnswer = (e) => {
    const answer = e.target.value || "";
    this.syncProp("answer", answer);
  };
  setDefaultValues(clonedProps) {
    const toDefault = ["hint", "special"];
    toDefault.forEach((x) => {
      if (!clonedProps[x] || !clonedProps[x].length) {
        clonedProps[x] = [DEFAULT_INPUT];
        this.props.propUpdater(x, clonedProps[x]);
      }
    });
  }

  componentDidMount() {
    if (
      this.state.hasQuestionData &&
      this.state.question_level === this.props.questionData.question_level
    )
      return;
    const clonedProps = { ...this.props.questionData };
    this.setDefaultValues(clonedProps);
    this.setState({
      hasQuestionData: true,
      ...clonedProps,
    });
  }

  componentDidUpdate = this.componentDidMount;
  _handleHintLike = (stateVar) => {
    return (e) => {
      const idx = +e.target.dataset.value;
      const value = e.target.value || "";
      const type = e.target.dataset.type;
      this.setState((ps) => {
        const obj = [].slice.call(ps[stateVar] || []);

        obj[idx] = { value, type };
        ps[stateVar] = obj;

        this.props.propUpdater(
          stateVar,
          obj.filter((x) => x.value && x.value.trim())
        );

        return ps;
      });
    };
  };
  _add = (stateVar) => {
    return () =>
      this.setState((ps) => {
        const obj = [].slice.call(ps[stateVar]);
        obj.push(DEFAULT_INPUT);
        ps[stateVar] = obj;
        return ps;
      });
  };

  toggleHintType = (e) => {
    const idx = +e.target.dataset.value;
    const type = e.target.dataset.type;
    const stateVar = e.target.dataset.name;
    this.setState((ps) => {
      const obj = ps[stateVar];
      const cloned = { ...obj[idx] };
      cloned.type = alternate[type];
      obj[idx] = cloned;
      this.props.propUpdater(stateVar, obj);
      return ps;
    });
  };
  toggleQuestionType = (e) => {
    const type = e.target.dataset.type;
    const next = alternate[type];
    const updatedQuestion = { ...this.state.question };
    updatedQuestion.type = next;
    this.syncProp("question", updatedQuestion);
  };
  render(props, state) {
    if (!state.hasQuestionData) return;
    return (
      <form action="javascript:" onSubmit={props.onSubmit}>
        <QuestionFormField
          question={state.question}
          handleQuestion={this._handleQuestion}
          toggleQuestionType={this.toggleQuestionType}
        />
        <hr />
        <AnswerFormField
          answer={state.answer}
          handleAnswer={this._handleAnswer}
        />
        <hr />
        {["hint", "special"].map((x) => (
          <HintInputFormField
            propName={x}
            propVal={state[x]}
            handleHint={this._handleHintLike}
            toggleType={this.toggleHintType}
            add={this._add}
          />
        ))}
        <span class="action-button hoverable">Submit</span>
      </form>
    );
  }
}
