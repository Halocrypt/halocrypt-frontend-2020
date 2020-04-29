import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import { sanitizeRegExp, ErrorPopup } from "../shared/UserForm";
import { user } from "../../apiRoutes";
import { postJSONRequest } from "../../http/requests";
import { logger } from "../../Logger";

const url = user.forgotPassword;

const clean = (x) => x.replace(sanitizeRegExp, "");

const getVal = (e) => (e.target.value || "").trim();

export default class TokenFetchingComponent extends Component {
  state = { user: "", isLoading: false };

  onSubmit = () => {
    if (this.state.isLoading) return;
    const username = clean(this.state.user);

    this.setState({ isLoading: true, success: false });

    postJSONRequest(url, { user: username }).then((x) => {
      const err = x.error || x.data.error;
      if (err) this.setState({ error });
      this.setState({ success: true, isLoading: false });
    });

    logger.sendUserLog(logger.passwordResetRequested);
  };

  onInputUserName = async (e) => this.setState({ user: getVal(e) });

  onInputPasswordToken = (e) => this.setState({ passwordToken: getVal(e) });
  onInputNewPassword = (e) => this.setState({ newPassword: getVal(e) });
  onInputConfNewPassword = (e) => this.setState({ confNewPassword: getVal(e) });
  onSubmitPasswordToken = () => {
    const token = (this.state.passwordToken || "").trim();
    const newPassword = this.state.newPassword;
    const confNewPassword = this.state.confNewPassword;
    const reasons = [];
    if (!token) reasons.push("token");
    if (!newPassword) reasons.push("password");
    if (!confNewPassword) reasons.push("confirm password");
    if (newPassword !== confNewPassword) reasons.push("Passwords must match");
    if (reasons.length) {
      this.state({ error: reasons });
    }
    this.setState({ isLoading: true });

    postJSONRequest(user.checkPasswordToken, {
      token,
      new_password: newPassword,
    }).then((x) => {
      const error = x.error || x.data.error;
      if (error) return this.setState({ error, isLoading: false });
      redirect("/login?changed-password=true");
    });
  };
  _resetError = () => this.setState({ error: null });

  render(_, state) {
    return (
      <div>
        {state.error && (
          <ErrorPopup
            errorHead="Failed"
            reasons={Array.isArray(state.error) ? state.error : [state.error]}
            close={this._resetError}
          />
        )}

        <div class="heading-text bfont mtx-fp">Reset</div>
        <div class="clr heading-text">Gold Fish Memory?</div>
        <form
          action="javascript:"
          onSubmit={state.success ? this.onSubmitPasswordToken : this.onSubmit}
        >
          {state.success && "Check your email for the token"}
          <div class="input-parent">
            {state.success ? (
              <div>
                <AnimatedInput
                  onInput={this.onInputPasswordToken}
                  labelText="Token"
                />
                <AnimatedInput
                  onInput={this.onInputNewPassword}
                  labelText="New Password"
                />
                <AnimatedInput
                  onInput={this.onInputConfNewPassword}
                  labelText="Confirm"
                />
              </div>
            ) : (
              <AnimatedInput
                onInput={this.onInputUserName}
                labelText={"Username"}
              />
            )}
          </div>
          <button class="action-button hoverable heading-text">Submit</button>
        </form>
        {state.isLoading && "Hang on.. Contacting our servers"}
      </div>
    );
  }
}
