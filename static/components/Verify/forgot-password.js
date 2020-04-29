import { Component } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";

export default class ForgotPassword extends Component {
  state = { user: "" };

  onInput = (e) => this.setState({ user: (e.target.value || "").trim() });

  render() {
    <div>
      <div class="heading-text bfont">Reset</div>
    </div>;
  }
}
