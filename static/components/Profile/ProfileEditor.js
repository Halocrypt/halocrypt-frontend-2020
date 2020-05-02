import Component from "@hydrophobefireman/ui-lib";

export const mapNames = {
  id: "Username",
  current_level: "Level",
  ig_user_id: "Insta",
  is_admin: "Player Type",
};
export class ProfileInfoEditor extends Component {
  __sendSuccess = () =>
    (this.state.value || "").trim() && this.props.onUpdate(this.state.value);
  state = { value: this.props.value || "" };
  onInput = (e) => this.setState({ value: e.target.value });
  render(props, state) {
    const name = props.detailName;
    const display = mapNames[name] || name;
    return (
      <>
        <div class="mask"></div>
        <div class="app-popup profile-info-updater">
          <div
            class="heading-text clr"
            style={{ marginTop: "5px", marginBottom: "10px" }}
          >
            Edit {display}
          </div>
          {props.progress && <div>{props.progress}</div>}
          <form action="javascript:" onSubmit={this.__sendSuccess}>
            <input
              type={name === "email" ? name : "text"}
              value={state.value}
              class="paper-input"
              style={{ width: "80%" }}
              onInput={this.onInput}
              placeholder={display}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                class="action-button hoverable update-action"
                onClick={this.__sendSuccess}
              >
                Update
              </span>
              <span
                onClick={props.close}
                class="action-button hoverable update-action"
              >
                Cancel
              </span>
            </div>
          </form>
        </div>
      </>
    );
  }
}
