import { Component, redirect, A } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { play } from "../../apiRoutes";
import { getRequest, postJSONRequest } from "../../http/requests";
import { ErrorPopup, SocialLinkContainer } from "../shared/UserForm";
const store = appEvents.getStore();

const sanitize = (e) => (e || "").toLowerCase().replace(/\s/g, "");

const placeHolderData = {
  question_level: "Loading",
  question: "Finding your question",
  hint: [],
};
const placeholderQuestion = <Question data={placeHolderData} />;
export default function Play() {
  return "Halocrypt is over.. Thanks for being a part of this";
}
// export default class Play extends Component {
//   state = {
//     fetchedQuestion: null,
//     isFetching: false,
//     answer: "",
//     isAwaitingAnswer: false,
//     incorrect: false,
//   };

//   onInput = (e) => this.setState({ answer: sanitize(e.target.value) });
//   componentDidMount() {
//     if (!store.isLoggedIn) {
//       return redirect("/login?next=/play");
//     }
//     this.fetchQuestion();
//   }
//   componentDidUpdate() {
//     if (this.state.fetchedQuestion == null) {
//       return this.fetchQuestion();
//     }
//   }
//   _submit = async () => {
//     if (this.state.isAwaitingAnswer || this.state.incorrect) return;
//     const answer = this.state.answer;

//     if (!answer) return;
//     this.setState({ isAwaitingAnswer: true });
//     /**@type {import('../../api').PlayRoutes.answerQuestion.request} */

//     const postData = { answer };

//     /** @type {import('../../api').PlayRoutes.answerQuestion.response['success']} */
//     const resp = await postJSONRequest(play.answerQuestion, postData);

//     const data = resp.data;
//     const error = data.error || resp.error;
//     if (error)
//       return this.setState({
//         hasError: error,
//         isFetching: false,
//         isAwaitingAnswer: false,
//       });
//     if (data.result) {
//       // don't emit..useless
//       return this.proceedToNextLevel();
//     }
//     this.setState({ isAwaitingAnswer: false, incorrect: true });
//   };
//   async fetchQuestion() {
//     if (store.userData.is_disqualified) return;
//     if (
//       this.state.isFetching ||
//       (!store.eventBegan && !store.userData.is_admin)
//     )
//       return;
//     this.setState({ isFetching: true });
//     /**@type {import('../../api').PlayRoutes.getQuestion.response['success']} */
//     const req = await getRequest(play.getQuestion);
//     const error = req.error || req.data.error;
//     if (error) {
//       //??
//       return this.setState({
//         hasError: error,
//         isFetching: false,
//         fetchedQuestion: 1,
//       });
//     }
//     const data = req.data;
//     const prev = store.userData.current_level;
//     store.userData.current_level = data.question_level || prev;
//     this.setState({ fetchedQuestion: data, isFetching: false });
//   }
//   proceedToNextLevel = () => {
//     this.setState({
//       fetchedQuestion: null,
//       isAwaitingAnswer: false,
//       incorrect: false,
//       answer: "",
//     });
//   };
//   __focusAnswer() {
//     const i = document.getElementById("answer-input");
//     i && i.focus();
//   }
//   resetError = () => {
//     this.setState({ incorrect: false, hasError: null });
//     this.__focusAnswer();
//   };
//   render(_, state) {
//     if (state.hasError) {
//       return (
//         <ErrorPopup
//           errorHead="Can't play"
//           reasons={[state.hasError]}
//           close={this.resetError}
//         />
//       );
//     }
//     if (store.isLoggedIn && store.userData.is_disqualified)
//       return (
//         <div style={{ fontSize: "3rem" }}>
//           Disqualified!
//           <div>
//             <A
//               class="clr hoverable"
//               style={{ marginTop: "20px" }}
//               href="/why-am-i-disqualified"
//             >
//               Learn More
//             </A>
//           </div>
//         </div>
//       );
//     if (!store.eventBegan && (!store.isLoggedIn || !store.userData.is_admin))
//       return <div style={{ fontSize: "4rem" }}>Not yet</div>;
//     return (
//       <>
//         {state.incorrect && (
//           <>
//             <div class="mask"></div>
//             <ErrorPopup
//               errorHead="Nope"
//               reasons={["That is not the right answer"]}
//               close={this.resetError}
//             />
//           </>
//         )}
//         {state.isFetching || !state.fetchedQuestion ? (
//           placeholderQuestion
//         ) : (
//           <Question
//             data={state.fetchedQuestion}
//             value={state.answer}
//             onInput={this.onInput}
//             onSubmit={this._submit}
//           />
//         )}
//         {state.isAwaitingAnswer && "Checking your answer..."}
//         <div class="hint-help" style={{ margin: "auto", width: "70%" }}>
//           <div>Find Hints On:</div>
//           <SocialLinkContainer />
//         </div>
//       </>
//     );
//   }
// }
const extra = {
  autocomplete: "off",
  autocorrect: "off",
  autocapitalize: "off",
  spellcheck: false,
  style: { width: "90%", marginTop: "2rem" },
};
/**
 *
 * @param {{data:import('../../api').PlayRoutes.getQuestion.response['success']['data']}} props
 */
export function Question(props) {
  const { data, value, onInput, onSubmit, disableInput } = props;
  if (data.game_over) {
    return "You win (?)";
  }
  return (
    <form action="javascript:" onSubmit={onSubmit}>
      <div class="question-num">Question - {data.question_level}</div>
      <div class="question-card">
        <div>{getLinkOrTextNode(data.question)}</div>
        <div class="question-hint">
          {data.hint &&
            !!data.hint.length &&
            data.hint.map((x, i) => <Hint data={x} i={i} />)}
        </div>
        {!disableInput && (
          <input
            id="answer-input"
            class="paper-input"
            placeholder="Answer"
            onInput={onInput}
            value={value}
            {...extra}
          />
        )}
      </div>
      {!disableInput && (
        <button class="action-button heading-text sbm-button hoverable">
          Submit
        </button>
      )}
    </form>
  );
}

export function getLinkOrTextNode(x) {
  if (typeof x === "string") return x;
  const type = x.type;
  const value = x.value;
  if (type === "text") return value;
  if (type === "link")
    return (
      <a
        target="_blank"
        href={value}
        style={{
          textDecoration: "underline",
          color: "var(--spec-color)",
          wordBreak: "break-all",
        }}
      >
        {value}
      </a>
    );
}

function Hint(props) {
  const x = props.data;
  const i = props.i;
  return (
    x &&
    !!x.value && (
      <div>
        {`Hint ${i + 1}: `}
        {getLinkOrTextNode(x)}
      </div>
    )
  );
}
