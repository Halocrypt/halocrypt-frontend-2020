import { Component, redirect } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import UserForm from "../shared/UserForm";
import { handler } from "../../authHandler";
const sanitizeRegexp = /([^\w]|_)/g;
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
    school: "",
    ig_user_id: "",
  };
  _onInput(item) {
    return (e) => this.setState({ [item]: (e.target.value || "").trim() });
  }
  _isValid(user, email, name, password, school, ig_user_id, conf_pass) {
    const reasons = [];
    if (user.length < 3 || user.length > 30) {
      reasons.push(errors.userLength);
    }
    if (
      user.replace(sanitizeRegexp, "") !== user ||
      name.replace(sanitizeRegexp, "") !== name
    ) {
      reasons.push(errors.invalidCharacters);
    }
    // lol
    if (!email.includes("@")) {
      reasons.push(errors.invalidEmail);
    }
    if (password === conf_pass) {
      reasons.push("Passwords do not match");
    }
    return reasons.length
      ? {
          err: (
            <div style="">
              {reasons.map((x) => (
                <div> - {x}</div>
              ))}
            </div>
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
    return this.setState({ hasError: true, error: isValid.err });
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
        <AnimatedInput labelText="USERNAME" onInput={this._onInput("user")} />
        <AnimatedInput labelText="Name" onInput={this._onInput("name")} />
        <AnimatedInput labelText="Email" onInput={this._onInput("email")} />
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
