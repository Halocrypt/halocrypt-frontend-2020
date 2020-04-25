import { Component, redirect, A } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import { ErrorPopup } from "../shared/UserForm";
import { handler } from "../../authHandler";
const IS_VALID = { valid: true };
const sanitizeRegExp = /([^\w]|_)/g;

function REQUIRED_VALUE(v) {
  if (!v) return { error: "Value required" };
  return IS_VALID;
}
const errors = {
  userLength: "Username should be between 3 and 30 characters",
  invalidCharacters: "Username and name can not contain special characters",
  invalidEmail: "Invalid email",
  nameLength: "Name should be less than 30 characters and cannot be blank",
  pwLength: "Password should be longer than 5 characters",
  pwNomatch: "Passwords do not match",
};
const BODY_STYLE = document.body.style;
export default class Register extends Component {
  componentDidMount() {
    BODY_STYLE.overflow = "hidden";
  }
  componentWillUnmount() {
    BODY_STYLE.overflow = "unset";
  }
  state = {
    user: "",
    email: "",
    name: "",
    password: "",
    conf_pass: "",
    school: "",
    ig_user_id: "",
    currentInputIndex: 0,
  };
  fieldsOrder = [
    "name",
    "user",
    "email",
    "school",
    "ig_user_id",
    "password",
    "conf_pass",
  ];
  labelTexts = {
    ig_user_id: "Instagram (Optional)",
    conf_pass: "Confirm password",
  };

  resetError = () => this.setState({ hasError: false, error: null });
  _validate_password(pw) {
    const pLen = pw.length;
    if (pLen < 5) {
      return { error: errors.pwLength };
    }
    return IS_VALID;
  }

  _validate_user(user) {
    const uLen = user.length;
    if (uLen < 3 || uLen > 30) {
      return { error: errors.userLength };
    }
    if (user !== user.replace(sanitizeRegExp, "")) {
      return { error: errors.invalidCharacters };
    }

    return IS_VALID;
  }
  _validate_name(name) {
    const nameLength = name.length;
    if (!nameLength || nameLength > 30) {
      return { error: errors.nameLength };
    }
    return IS_VALID;
  }
  _validate_conf_pass(pw) {
    if (pw !== this.state.password) return { error: errors.pwNomatch };
    return IS_VALID;
  }
  _validate_email = REQUIRED_VALUE;
  _validate_school = REQUIRED_VALUE;
  _validate_ig_user_id = () => IS_VALID;
  onSubmit = async (e) => {
    e.preventDefault();
    const currIndex = this.state.currentInputIndex;
    const currentProp = this.fieldsOrder[currIndex];
    const isValid = this["_validate_" + currentProp](this.state[currentProp]);
    if (isValid.valid) {
      if (currIndex !== this.fieldsOrder.length - 1) {
        return this.setState({
          currentInputIndex: currIndex + 1,
          hasError: false,
          error: null,
        });
      }
      const { user, email, name, password, school, ig_user_id } = this.state;
      this.setState({ loading: true });
      const acc = await handler.createAccount({
        user,
        email,
        name,
        password,
        school,
        ig_user_id,
      });
      if (acc.error) {
        return this.setState({
          hasError: true,
          error: acc.error,
          loading: false,
        });
      }
      if (acc.id) return redirect("/login");
    } else {
      this.setState({ hasError: true, error: isValid.error });
    }
  };
  _decrementState = (e) => {
    e.preventDefault();
    this.setState((ps) => ({ currentInputIndex: ps.currentInputIndex - 1 }));
  };
  onInput(item) {
    return (e) => {
      let value = e.target.value;
      if (e !== "password" && e !== "conf_pass") {
        value = (value || "").trim();
      }
      this.setState({ [item]: value || "" });
    };
  }
  render(_, state) {
    const isLastInput = state.currentInputIndex === this.fieldsOrder.length - 1;
    return (
      <div class="form-doc">
        <div class="form-title heading-text">Register</div>
        <div class="form-ext-text heading-text clr">Let's Get You Started</div>
        {state.hasError && (
          <RegistrationError close={this.resetError} reason={state.error} />
        )}
        <div class="form-stx">
          <form action="javascript:" onsubmit={this.onSubmit}>
            <InputFields instance={this} />
            <FormActionControls
              state={state}
              decrement={this._decrementState}
              isLastInput={isLastInput}
            />
            {state.loading && <div>Hang on, getting you signed up</div>}
          </form>
          <div class="inst">
            <A href="/login" class="heading-text clr ">
              Want to Login Instead?
            </A>
          </div>
        </div>
      </div>
    );
  }
}

function FormActionControls(props) {
  const { state, decrement, isLastInput } = props;
  return (
    <div class="form-action-controls">
      {state.currentInputIndex !== 0 && (
        <button class="form-act back" onClick={decrement}></button>
      )}
      {isLastInput ? (
        <button
          style={{ marginLeft: "auto" }}
          class="heading-text submit-button"
        >
          Register
        </button>
      ) : (
        <button class="form-act fwd"></button>
      )}
    </div>
  );
}

const inputTypes = {
  email: "email",
  password: "password",
  conf_pass: "password",
};
function InputFields(props) {
  const that = props.instance;

  return that.fieldsOrder.map(
    (x, i) =>
      i == that.state.currentInputIndex && (
        <AnimatedInput
          inputClass="form-anim"
          value={that.state[x]}
          type={inputTypes[x] || "text"}
          labelText={that.labelTexts[x] || x}
          onInput={that.onInput(x)}
        />
      )
  );
}

function RegistrationError(props) {
  return (
    <>
      <div class="mask child"></div>
      <ErrorPopup
        errorHead="Can't register"
        close={props.close}
        reasons={[props.reason]}
      />
    </>
  );
}
