import { sanitizeRegExp } from "./components/shared/UserForm";

export const IS_VALID = { valid: true };

export function REQUIRED_VALUE(v) {
  if (!v) return { error: "Value required" };
  return IS_VALID;
}

export const OPTIONAL_VALUE = () => IS_VALID;

export function password(pw) {
  const pLen = pw.length;
  if (pLen < 5) {
    return { error: errors.pwLength };
  }
  return IS_VALID;
}

export function userName(user) {
  const uLen = user.length;
  if (uLen < 3 || uLen > 30) {
    return { error: errors.userLength };
  }
  if (user !== user.replace(sanitizeRegExp, "")) {
    return { error: errors.invalidCharacters };
  }
  return IS_VALID;
}

export function name(val) {
  const nameLength = val.length;
  if (!nameLength || nameLength > 30) {
    return { error: errors.nameLength };
  }
  return IS_VALID;
}

export const errors = {
  userLength: "Username should be between 3 and 30 characters",
  invalidCharacters: "Username and name can not contain special characters",
  invalidEmail: "Invalid email",
  nameLength: "Name should be less than 30 characters and cannot be blank",
  pwLength: "Password should be longer than 5 characters",
  pwNomatch: "Passwords do not match",
};
