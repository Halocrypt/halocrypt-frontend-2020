import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { play } from "../../apiRoutes";
import { sanitizeRegExp } from "../shared/UserForm";
import { getRequest } from "../../http/requests";
const store = appEvents.getStore();

const sanitize = (e) => (e || "").toLowerCase().replace(sanitizeRegExp, "");

export default class Play extends Component {
  state = { fetchedQuestion: null, isFetching: false, answer: "" };

  onInput = (e) => this.setState({ answer: sanitize(e.target.value) });
  componentDidMount() {
    if (!store.isLoggedIn) {
      return redirect("/login?next=/play");
    }
    this.fetchQuestion();
  }
  componentDidUpdate() {
    if (this.state.fetchedQuestion == null) {
      return this.fetchQuestion();
    }
  }
  async fetchQuestion() {
    if (this.state.isFetching) return;
    this.setState({ isFetching: true });
    /**@type {import('../../api').PlayRoutes.getQuestion.response['success']} */
    const req = await getRequest(play.getQuestion);
    if (req.error) {
      //??
      return this.setState({
        hasError: true,
        isFetching: false,
        fetchedQuestion: 1,
      });
    }
    const data = req.data;
    this.setState({ fetchedQuestion: data, isFetching: false });
  }
  proceedToNextLevel = () => {
    this.setState({ fetchedQuestion: null });
  };
  render(_, state) {
    return state.isFetching || !state.fetchedQuestion ? (
      <Question
        data={{
          question_level: "Loading",
          question: "Finding your question, you can",
          hint: ["wait", "wait", "wait"],
        }}
      />
    ) : (
      <Question
        data={state.fetchedQuestion}
        value={state.answer}
        onInput={this.onInput}
      />
    );
  }
}

function Question(props) {
  const { data, value, onInput } = props;
  return (
    <div>
      <div>Question - {data.question_level}</div>
      <div>{data.question}</div>
      <div>
        {data.hint.map((x, i) => (
          <div>
            <span>Hint {i + 1}:</span> <span>{x}</span>
          </div>
        ))}
      </div>
      <input onInput={onInput} value={value} />
    </div>
  );
}
