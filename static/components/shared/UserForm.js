import Component from "@hydrophobefireman/ui-lib";

export function ErrorPopup(props) {
  return <Popup {...props} title="Something Ain't Right" />;
}

export function SuccessPopup(props) {
  return <Popup {...props} title="Success!" />;
}
export const sanitizeRegExp = /([^\w]|_)/g;

export class Popup extends Component {
  __id = Math.random();
  componentDidMount() {
    const el = document.getElementById(`${this.__id}`);
    el && el.focus();
  }
  render(props) {
    return (
      <div class="app-popup">
        <div class="heading-text clr app-popup-title">{props.title}</div>
        <div>{props.errorHead}</div>
        <div class="err-reasons">
          <div>
            {(props.reasons || []).map((x) => (
              <div> - {x}</div>
            ))}
          </div>
        </div>
        <button id={this.__id} class="app-popup-close" onClick={props.close}>
          OK
        </button>
      </div>
    );
  }
}
