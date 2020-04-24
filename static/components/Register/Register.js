import { Component, A } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
export default class Register extends Component {
  _onInput(item) {
    return (e) => this.setState({ [item]: e.target.value });
  }
  render() {
    return (
      <div class="form-doc">
        <div class="form-title heading-text">Register</div>
        <div class="form-ext-text heading-text clr">Let's Get You Rolling</div>
        {this.state.hasError && <div class="error-form">An Error Occured</div>}
        <div class="form-stx">
          <form action="javascript:" onsubmit={() => console.log(this.state)}>
            <AnimatedInput
              labelText="USERNAME"
              onInput={this._onInput("user")}
            />
            <AnimatedInput labelText="Email" onInput={this._onInput("email")} />
            <AnimatedInput
              type="password"
              labelText="Password"
              onInput={this._onInput("password")}
            />
            <AnimatedInput
              type="password"
              labelText="Confirm Password"
              onInput={this._onInput("conf_pass")}
            />
            <div class="inst">
              <A href="/login" class="heading-text clr ">
                Want to Login instead?
              </A>
            </div>
            <button class="heading-text submit-button">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
