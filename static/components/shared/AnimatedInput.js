import { Component, h } from "@hydrophobefireman/ui-lib";
export class AnimatedInput extends Component {
  state = { isFocused: false, value: "" };
  onFocus = () =>
    !this.state.value && this.setState({ isFocused: true, moveDown: false });
  onBlur = () =>
    !this.state.value && this.setState({ isFocused: false, moveDown: true });
  onInput = (e) => this.setState({ value: e.target.value });
  onSubmit = () => this.props.onSubmit(this.state.value);
  render(
    { id, labelText = "", type = "text", onInput },
    { isFocused, moveDown }
  ) {
    const cls = [
      "_animate",
      isFocused ? "moveup" : "",
      moveDown ? "movedown" : "",
    ];
    return h(
      "div",
      { class: "user-input-anim" },
      h("label", { class: cls, for: id }, labelText),
      h(InputComponent, {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        type,
        id,
        onInput: (e) => {
          this.onInput(e);
          onInput != null ? onInput(e) : void 0;
        },
      })
    );
  }
}

function InputComponent({ onFocus, onBlur, onInput, id, type }) {
  return h("input", {
    onFocus,
    onBlur,
    onInput,
    id,
    type,
    class: "paper-input",
  });
}
