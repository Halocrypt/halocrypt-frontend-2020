import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { play } from "../../apiRoutes";
import { getRequest, postJSONRequest } from "../../http/requests";
import { AnimatedInput } from "../shared/AnimatedInput";
import { ErrorPopup } from "../shared/UserForm";
import { logger } from "../../Logger";
const store = appEvents.getStore();

const sanitize = (e) => (e || "").toLowerCase().replace(/\s/g, "");

const placeHolderData = {
  question_level: "Loading",
  question: "Finding your question",
  hint: [],
};
const placeholderQuestion = <Question data={placeHolderData} />;
export default class Play extends Component {
  state = {
    fetchedQuestion: null,
    isFetching: false,
    answer: "",
    isAwaitingAnswer: false,
    incorrect: false,
  };

  onInput = (e) => this.setState({ answer: sanitize(e.target.value) });
  componentDidMount() {
    if (!store.isLoggedIn) {
      return redirect("/login?next=/play");
    }
    logger.sendUserLog(logger.pageViewPlay);
    this.fetchQuestion();
  }
  componentDidUpdate() {
    if (this.state.fetchedQuestion == null) {
      return this.fetchQuestion();
    }
  }
  _submit = async () => {
    const answer = this.state.answer;

    const qLevel =
      (this.state.fetchedQuestion &&
        this.state.fetchedQuestion.question_level) ||
      1;

    if (!answer) return;
    /**@type {import('../../api').PlayRoutes.answerQuestion.request} */

    const postData = { answer };
    this.setState({ isAwaitingAnswer: true });

    /** @type {import('../../api').PlayRoutes.answerQuestion.response['success']} */
    const resp = await postJSONRequest(play.answerQuestion, postData);

    const data = resp.data;

    logger.sendUserLog({
      type: logger.answeredQuestion,
      question_level: qLevel,
    });

    if (data.result) {
      return this.proceedToNextLevel();
    }
    this.setState({ isAwaitingAnswer: false, incorrect: true });
  };
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
    logger.sendUserLog({
      type: logger.accessQuestion,
      question_level: (this.state.fetchedQuestion || 0) + 1,
    });
    this.setState({ fetchedQuestion: null });
  };
  resetError = () => this.setState({ incorrect: false });
  render(_, state) {
    if (!store.eventBegan)
      return <div style={{ fontSize: "4rem" }}>Not yet</div>;
    return (
      <>
        {state.incorrect && (
          <>
            <div class="mask"></div>
            <ErrorPopup
              errorHead="Nope"
              reasons={["That is not the right answer"]}
              close={this.resetError}
            />
          </>
        )}
        {state.isFetching || !state.fetchedQuestion ? (
          placeholderQuestion
        ) : (
          <Question
            data={state.fetchedQuestion}
            value={state.answer}
            onInput={this.onInput}
            onSubmit={this._submit}
          />
        )}
        {state.isAwaitingAnswer && "Checking your answer..."}
      </>
    );
  }
}
const extra = {
  autocomplete: "off",
  autocorrect: "off",
  autocapitalize: "off",
  spellcheck: false,
  style: { width: "90%" },
};
/**
 *
 * @param {{data:import('../../api').PlayRoutes.getQuestion.response['success']['data']}} props
 */
function Question(props) {
  const { data, value, onInput, onSubmit } = props;
  if (data.game_over) {
    return "You win (?)";
  }
  return (
    <form action="javascript:" onSubmit={onSubmit}>
      <div class="question-num">Question - {data.question_level}</div>
      <div class="question-card">
        <div>{data.question}</div>
        <div class="question-hint">
          {data.hint.map((x, i) => (
            <div>{`Hint ${i + 1}: ${x}`}</div>
          ))}
        </div>
        <input
          class="paper-input"
          placeholder="Answer"
          onInput={onInput}
          value={value}
          {...extra}
        />
      </div>
      <button class="action-button heading-text sbm-button hoverable">
        Submit
      </button>
    </form>
  );
}
