import { Component } from "@hydrophobefireman/ui-lib";
import plus from "./plus.svg";

const DEFAULT_HINT = { type: "text", value: "" };

export class QuestionEditor extends Component {
  state = {
    hasQuestionData: null,
    question: "",
    hint: [],
    special: [],
    answer: "",
  };
  _handleQuestion = (e) => {
    const question = e.target.value || "";
    this.setState({ question });
    this.props.propUpdater("question", question);
  };
  _handleAnswer = (e) => {
    const answer = e.target.value || "";
    this.setState({ answer });
    this.props.propUpdater("answer", answer);
  };
  componentDidMount() {
    if (
      this.state.hasQuestionData &&
      this.state.question_level === this.props.questionData.question_level
    )
      return;
    const clonedProps = { ...this.props.questionData };
    if (!clonedProps.hint || !clonedProps.hint.length) {
      clonedProps.hint = [DEFAULT_HINT];
      this.props.propUpdater("hint", clonedProps.hint);
    }
    this.setState({
      hasQuestionData: true,
      ...clonedProps,
    });
  }

  componentDidUpdate = this.componentDidMount;
  _handleHintLike(stateVar) {
    return (e) => {
      const idx = +e.target.dataset.value;
      const value = e.target.value || "";
      const type = e.target.dataset.type;
      this.setState((ps) => {
        const obj = [].slice.call(ps[stateVar]);

        obj[idx] = { value, type };
        ps[stateVar] = obj;

        this.props.propUpdater(
          stateVar,
          obj.filter((x) => x.value && x.value.trim())
        );

        return ps;
      });
    };
  }
  _add(stateVar) {
    return () =>
      this.setState((ps) => {
        const obj = [].slice.call(ps[stateVar] || getHintLike(ps, stateVar));
        obj.push(DEFAULT_HINT);
        ps[stateVar] = obj;
        return ps;
      });
  }

  toggleType = (e) => {
    const alternate = { text: "link", link: "text" };
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

  render(props, state) {
    if (!state.hasQuestionData) return;
    return (
      <form action="javascript:" onSubmit={props.onSubmit}>
        <div class="input-parent">
          <div class="task-desc">Question:</div>
          <input
            class="paper-input"
            value={state.question}
            placeholder="Question"
            onInput={this._handleQuestion}
          />
        </div>
        <hr />
        <div class="input-parent">
          <div class="task-desc">Answer:</div>
          <input
            class="paper-input"
            value={state.answer}
            placeholder="Answer"
            onInput={this._handleAnswer}
          />
        </div>
        <hr />
        <div class="input-parent">
          <div class="task-desc">Hints:</div>
          <HintInput
            name="hint"
            hint={state.hint}
            handleHint={this._handleHintLike("hint")}
            setType={this.toggleType}
          />
          <AddMore add={this._add("hint")} name="hint" />
        </div>
        <hr />
        <div class="input-parent">
          <div class="task-desc">Special:</div>
          <HintInput
            name="special"
            hint={state.special}
            handleHint={this._handleHintLike("special")}
          />
          <AddMore add={this._add("special")} name="special" />
        </div>
        <hr />
        <button class="action-button hoverable">Submit</button>
      </form>
    );
  }
}

function HintInput(props) {
  let { hint, handleHint, name } = props;
  (!hint || hint.length <= 0) && (hint = [DEFAULT_HINT]);
  return hint.map((x, i) => (
    <div class="hints-parent-admin">
      Hint Type: {x.type}
      <input
        data-value={i}
        class="paper-input"
        data-type={x.type}
        value={x.value}
        placeholder={`${name} #${i}`}
        onInput={handleHint}
      />
      <div
        data-type={x.type}
        data-value={i}
        data-name={name}
        onClick={props.setType}
        class="hoverable action-button"
        style={{ padding: 0 }}
      >
        Toggle Type
      </div>
    </div>
  ));
}

function AddMore(props) {
  return (
    <img
      class="hoverable plus back"
      src={plus}
      title={`add ${props.name}`}
      onClick={props.add}
    />
  );
  k;
}
