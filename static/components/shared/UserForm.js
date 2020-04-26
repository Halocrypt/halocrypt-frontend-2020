export function ErrorPopup(props) {
  return (
    <div class="app-popup">
      <div class="heading-text clr app-popup-title">Something Ain't Right</div>
      <div>{props.errorHead}</div>
      <div class="err-reasons">
        <div>
          {props.reasons.map((x) => (
            <div> - {x}</div>
          ))}
        </div>
      </div>
      <button class="app-popup-close" onClick={props.close}>
        OK
      </button>
    </div>
  );
}
