import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { postJSONRequest } from "../../http/requests";
import { user } from "../../apiRoutes";
import { AnimatedInput } from "../shared/AnimatedInput";

const store = appEvents.getStore();
export default class VerifyEmail extends Component {
  state = { isLoading: false, token: "" };

  componentDidMount() {
    if (!store.isLoggedIn) return this.setState({ error: "Log in first" });
    if (store.userData.has_verified_email) return redirect("/profile");

    this.setState({ isLoading: true });

    postJSONRequest(user.verifyEmail, {
      user: store.userData.id,
    }).then((x) => {
      const error = x.error || x.data.error;
      if (error) return this.setState({ error });

      this.setState({ isLoading: false, emailSent: true });
    });
  }
  onInput = (e) => this.setState({ token: e.target.value || "" });
  onSubmit = () => {
    const token = (this.state.token || "").trim();
    if (!token) this.setState({ error: "Blank Token" });
    this.setState({ isLoading: true });

    postJSONRequest(user.checkEmailToken, { token }).then((x) => {
      const error = x.error || x.data.error;
      if (error) return this.setState({ error, isLoading: false });

      store.userData.has_verified_email = true;

      return redirect("/profile?email-verified");
    });
  };
  render(props, state) {
    return (
      <div>
        {state.error && (
          <ErrorPopup
            errorHead="Failed"
            reasons={Array.isArray(state.error) ? state.error : [state.error]}
            close={this._resetError}
          />
        )}
        <div class="heading-text bfont mtx-fp">Verify Email</div>
        <form action="javascript:" onSubmit={this.onSubmit}>
          {state.emailSent
            ? "Check your email for the token"
            : "Still mailing you.."}
          {state.emailSent && (
            <div class="input-parent">
              <AnimatedInput onInput={this.onInput} labelText={"Token"} />
              <button class="action-button hoverable heading-text">
                Submit
              </button>
            </div>
          )}
        </form>
        {state.isLoading && "Just a sec"}
      </div>
    );
  }
}
