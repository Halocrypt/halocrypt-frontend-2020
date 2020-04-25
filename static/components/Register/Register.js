import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import UserForm, { ErrorPopup } from "../shared/UserForm";
import { handler } from "../../authHandler";
const sanitizeRegExp = /([^\w]|_)/g;
const nameRegExp = /([^\w^\s]|_)/g;
const errors = {
  userLength: "Username should be between 3 and 30 characters",
  invalidCharacters: "Username and name can not contain special characters",
  invalidEmail: "Invalid email",
};

export default class Register extends Component {
  state = {
    user: "",
    email: "",
    name: "",
    password: "",
    conf_pass: "",
    school: "",
    ig_user_id: "",
  };
  resetError = () => this.setState({ hasError: false, error: null });
  _onInput(item) {
    return (e) => this.setState({ [item]: (e.target.value || "").trim() });
  }
  _isValid(user, email, name, password, school, ig_user_id, conf_pass) {
    const reasons = [];
    if (user.length < 3 || user.length > 30) {
      reasons.push(errors.userLength);
    }
    if (
      user.replace(sanitizeRegExp, "") !== user ||
      name.replace(nameRegExp, "") !== name
    ) {
      reasons.push(errors.invalidCharacters);
    }
    // lol
    if (!email.includes("@")) {
      reasons.push(errors.invalidEmail);
    }
    if (password !== conf_pass) {
      reasons.push("Passwords do not match");
    }
    if ([name, email, user, password, school].some((x) => !x)) {
      reasons.push("Please fill the required fields");
    }
    return reasons.length
      ? {
          error: (
            <ErrorPopup
              errorHead="We could not register your account because:"
              reasons={reasons}
              close={this.resetError}
            />
          ),
        }
      : { isValid: true };
  }
  onSubmit = async () => {
    this.setState({ hasError: false });
    const {
      user,
      email,
      name,
      password,
      school,
      ig_user_id,
      conf_pass,
    } = this.state;
    const isValid = this._isValid(
      user,
      email,
      name,
      password,
      school,
      ig_user_id,
      conf_pass
    );
    if (isValid.isValid) {
      const acc = await handler.createAccount({
        user,
        email,
        name,
        password,
        school,
        ig_user_id,
      });
      if (acc.error) {
        return this.setState({ hasError: true, error: acc.error });
      }
      if (acc.id) {
        //todo change
        redirect("/");
      }
    }
    return this.setState({ hasError: true, error: isValid.error });
  };
  render() {
    return (
      <UserForm
        action="Register"
        extraText="Let's get you started"
        altLocation="Want to Login instead?"
        altLocationPath="/login"
        onSubmit={this.onSubmit}
        hasError={this.state.hasError}
        error={this.state.error}
      >
        <AnimatedInput labelText="Name" onInput={this._onInput("name")} />
        <AnimatedInput labelText="USERNAME" onInput={this._onInput("user")} />
        <AnimatedInput
          labelText="Email"
          type="email"
          onInput={this._onInput("email")}
        />
        <AnimatedInput labelText="School" onInput={this._onInput("school")} />
        <AnimatedInput
          labelText="Instagram (Optional)"
          onInput={this._onInput("ig_user_id")}
        />
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
      </UserForm>
    );
  }
}
