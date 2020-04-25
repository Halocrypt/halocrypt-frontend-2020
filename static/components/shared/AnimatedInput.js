import { Component, h } from "@hydrophobefireman/ui-lib";
export class AnimatedInput extends Component {
  state = { isFocused: false, value: this.props.value || "" };
  onFocus = () =>
    !this.state.value && this.setState({ isFocused: true, moveDown: false });
  onBlur = () =>
    !this.state.value && this.setState({ isFocused: false, moveDown: true });
  onInput = (e) => this.setState({ value: e.target.value });
  __onInput = (e) => {
    const onInput = this.props.onInput;
    this.onInput(e);
    onInput != null ? onInput(e) : void 0;
  };
  render(
    { id = Math.random(), labelText = "", type = "text", inputClass },
    { isFocused, moveDown }
  ) {
    const value = this.state.value;
    const cls = [
      "_animate",
      isFocused || value ? "moveup" : "",
      moveDown ? "movedown" : "",
    ];
    return h(
      "div",
      { class: "user-input-anim " + (inputClass || "") },
      h("label", { class: cls, for: id }, labelText),
      h(InputComponent, {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        type,
        value,
        id,
        onInput: this.__onInput,
      })
    );
  }
}

function InputComponent({ onFocus, onBlur, onInput, id, type, value }) {
  return h("input", {
    onFocus,
    onBlur,
    onInput,
    id,
    value,
    type,
    class: "paper-input",
  });
}
