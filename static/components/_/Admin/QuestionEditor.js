import { Component } from "@hydrophobefireman/ui-lib";

export class QuestionEditor extends Component {
  state = {
    hasQuestionData: null,
    question: "",
    hint: [],
    special: [],
    answer: "",
    hintLen: 0,
    specialLen: 0,
  };
  _handleQuestion = (e) => {
    const question = e.target.value || "";
    this.setState({ question });
    this.props.propUpdater("question", question);
  };
  componentDidMount() {
    if (
      this.state.hasQuestionData &&
      this.state.question_level === this.props.questionData.question_level
    )
      return;
    this.props.questionData = [];
    this.setState({
      hasQuestionData: true,
      ...this.props.questionData,
    });
  }

  componentDidUpdate = this.componentDidMount;
  _handleHint = (e) => {
    const idx = +e.target.dataset.value;
    this.state.hint[idx] = ee.target.value;
  };
  render(props, state) {
    if (!state.hasQuestionData) return;
    return (
      <div>
        <div style={{ width: "80%", margin: "auto", marginBottom: "20px" }}>
          <input
            class="paper-input"
            value={state.question}
            placeholder="Question"
            onInput={this._handleQuestion}
          />
        </div>
        <div>
          {state.hint && state.hint.length > 0 ? (
            state.hint.map((x, i) => (
              <input
                data-value={i}
                class="paper-input"
                value={x}
                placeholder={"Hint #" + i}
                onInput={this._handleHint}
              />
            ))
          ) : (
            <input
              data-value={i}
              class="paper-input"
              value={x}
              placeholder={"Hint #" + i}
            />
          )}
        </div>
      </div>
    );
  }
}
