import plus from "./plus.svg";
export function HintInputFormField(props) {
  const x = props.propName;
  const value = props.propVal;
  const handleHint = props.handleHint;
  const toggleType = props.toggleType;
  const add = props.add;
  return (
    <>
      <div class="input-parent">
        <div class="task-desc">{x}:</div>
        <HintInput
          name={x}
          hint={value}
          handleHint={handleHint(x)}
          setType={toggleType}
        />
        <AddMore add={add(x)} name={x} />
      </div>
      <hr />
    </>
  );
}
export function AnswerFormField(props) {
  return (
    <div class="input-parent">
      <div class="task-desc">Answer:</div>
      <input
        class="paper-input"
        value={props.answer}
        placeholder="Answer"
        onInput={props.handleAnswer}
      />
    </div>
  );
}
export function QuestionFormField(props) {
  return (
    <div class="input-parent">
      <div class="task-desc">Question:</div>
      <div>Type {props.question.type}</div>
      <input
        class="paper-input"
        value={props.question.value}
        placeholder="Question"
        onInput={props.handleQuestion}
      />
      <div
        data-type={props.question.type}
        class="hoverable action-button"
        onClick={props.toggleQuestionType}
      >
        Toggle Type
      </div>
    </div>
  );
}

export function HintInput(props) {
  let { hint, handleHint, name } = props;
  (!hint || hint.length <= 0) && (hint = [DEFAULT_INPUT]);
  return hint.map((x, i) => (
    <div class="hints-parent-admin">
      {props.setType && `Type: ${x.type}`}
      <input
        data-value={i}
        class="paper-input"
        data-type={x.type}
        value={x.value}
        placeholder={`${name} #${i}`}
        onInput={handleHint}
      />
      {props.setType && (
        <div
          data-type={x.type}
          data-value={i}
          data-name={name}
          onClick={props.setType}
          class="hoverable action-button"
        >
          Toggle Type
        </div>
      )}
    </div>
  ));
}

export function AddMore(props) {
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
