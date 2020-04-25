import { Component, A } from "@hydrophobefireman/ui-lib";

export default class UserForm extends Component {
  _onInput(item) {
    return (e) => this.setState({ [item]: e.target.value });
  }
  render(props) {
    return (
      <div class="form-doc">
        <div class="form-title heading-text">{props.action}</div>
        <div class="form-ext-text heading-text clr">{props.extraText}</div>
        {this.props.hasError && (
          <div class="error-form">{this.props.error}</div>
        )}
        <div class="form-stx">
          <form action="javascript:" onsubmit={props.onSubmit}>
            {props.children}
            <div class="inst">
              <A href={props.altLocationPath} class="heading-text clr ">
                {props.altLocation}
              </A>
            </div>
            <button class="heading-text submit-button">{props.action}</button>
          </form>
        </div>
      </div>
    );
  }
}

export function ErrorPopup(props) {
  return (
    <div class="app-popup">
      <div class="heading-text clr app-popup-title">Something Ain't Right</div>
      <div class="err-reasons">
        <div>{props.errorHead}</div>
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
