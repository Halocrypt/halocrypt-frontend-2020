import { redirect, A, Router } from "@hydrophobefireman/ui-lib";
import { ErrorPopup } from "../shared/UserForm";
import { AnimatedInput } from "../shared/AnimatedInput";
import { handler } from "../../authHandler";
import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
import { appEvents } from "../../globalStore";
import { logger } from "../../Logger";
const store = appEvents.getStore();
export default class Login extends AuthStateSensitiveComponent {
  state = {
    user: "",
    password: "",
  };

  loginCheck() {
    if (store.isLoggedIn) {
      const n = this.state.next;
      if (n && !isAbsolute(n)) {
        return redirect(n);
      }
      return redirect("/profile");
    }
  }
  componentDidUpdate = this.loginCheck;
  componentDidMount() {
    logger.sendUserLog(logger.pageViewLogin);
    const p = new URLSearchParams(Router.getQs);
    const next = p.get("next");
    if (next) {
      this.setState({ next });
    }
    super.componentDidMount();
    this.loginCheck();
  }

  onInput(item) {
    return (e) => {
      let value = e.target.value;
      if (e !== "password") {
        value = (value || "").trim();
      }
      this.setState({ [item]: value || "" });
    };
  }
  onSubmit = async () => {
    if (this.state.loading) return;
    this.setState({ loading: true });
    const dat = await handler.auth({
      user: this.state.user,
      password: this.state.password,
    });
    if (dat.error) {
      return this.setState({
        hasError: true,
        error: dat.error,
        loading: false,
      });
    }
    logger.sendUserLog(logger.loginActionCompleted);
    const n = this.state.next;
    if (n && !isAbsolute(n)) {
      return redirect(n);
    }
    return redirect("/profile");
  };
  resetError = () => this.setState({ hasError: false, error: null });
  render(_, state) {
    return (
      <div class="form-doc">
        <div class="form-title heading-text">Login</div>
        {state.hasError && (
          <RegistrationError close={this.resetError} reason={state.error} />
        )}
        <div class="form-stx">
          <form action="javascript:" onsubmit={this.onSubmit}>
            <AnimatedInput
              inputClass="form-anim"
              value={this.state.user}
              type="text"
              labelText="username"
              onInput={this.onInput("user")}
            />
            <AnimatedInput
              inputClass="form-anim"
              value={this.state.password}
              type="password"
              labelText="password"
              onInput={this.onInput("password")}
            />

            <button class="heading-text submit-button hoverable">Login</button>
            {state.loading && <div>Just a sec, checking your credentials</div>}
          </form>
          <div>
            <div class="inst">
              <A href="/register" class="heading-text clr hoverable">
                New User?
              </A>
              <A
                href="/forgot-password"
                class="heading-text clr hoverable"
                style={{ marginLeft: "auto" }}
              >
                Forgot Password?
              </A>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function RegistrationError(props) {
  return (
    <>
      <div class="mask child"></div>
      <ErrorPopup
        errorHead="Can't Login"
        close={props.close}
        reasons={[props.reason]}
      />
    </>
  );
}

const isAbsolute = (url) => url.indexOf("://") > 0 || url.indexOf("//") === 0;
