export function ErrorPopup(props) {
  return <Popup {...props} title="Something Ain't Right" />;
}

export function SuccessPopup(props) {
  return <Popup {...props} title="Success!" />;
}
export const sanitizeRegExp = /([^\w]|_)/g;

function Popup(props) {
  return (
    <div class="app-popup">
      <div class="heading-text clr app-popup-title">{props.title}</div>
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
