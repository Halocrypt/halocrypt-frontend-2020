import { Component } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import { sanitizeRegExp } from "../shared/UserForm";
import { user } from "../../apiRoutes";
import { postJSONRequest } from "../../http/requests";

const url = user.forgotPassword;

const clean = (x) => x.replace(sanitizeRegExp, "");
export default class TokenFetchingComponent extends Component {
  state = { user: "", isLoading: false };

  onSubmit = () => {
    const user = clean(this.state.user);

    this.setState({ isLoading: true });
  };

  onInput = async (e) => {
    this.setState({ user: (e.target.value || "").trim() });
  };

  render(_, state) {
    return (
      <div>
        <div class="heading-text bfont mtx-fp">Reset</div>
        <div class="clr heading-text">Gold Fish Memory?</div>
        <form action="javascript:" onSubmit={this.onSubmit}>
          <div class="input-parent">
            <AnimatedInput onInput={this.onInput} labelText="Username" />
          </div>
          <button class="action-button hoverable heading-text">Submit</button>
        </form>
        {state.isLoading && "Hang on.. Contacting our servers"}
      </div>
    );
  }
}
