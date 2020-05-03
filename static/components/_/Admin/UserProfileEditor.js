import { Profile } from "../../Profile/Profile";
import keys from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/keys";
import * as validators from "../../../validators";
import { postJSONRequest } from "../../../http/requests";
import { admin } from "../../../apiRoutes";
import { appEvents } from "../../../globalStore";
import { Popup } from "../../shared/UserForm";
const store = appEvents.getStore();
export class UserProfileEditor extends Profile {
  helpText = "Click on a property to edit";
  editableFieldsValidatorFunctions = {
    // id: validators.userName,
    name: validators.name,
    ig_user_id: validators.OPTIONAL_VALUE,
    email: validators.REQUIRED_VALUE,
    school: validators.OPTIONAL_VALUE,
    current_level: validators.INTEGER_VALUE,
    last_question_answered_at: validators.INTEGER_VALUE,
    // is_admin: validators.BOOLEAN_VALUE,
    // is_disqualified: validators.BOOLEAN_VALUE,
    // has_verified_email: validators.BOOLEAN_VALUE,
  };
  _promiseErrorHandler = () =>
    this.setState({ error: "Unknown error occured", isEditing: true });
  __confirmAction = (e) => {
    const action = e.target.dataset.action;
    this.setState({
      confirmAction: action,
      isConfirmed: false,
    });
  };
  __executeConfirmedAction = () => {
    const action = this.state.confirmAction;
    this.setState({
      isConfirmed: true,
      workProgress: "Making irreversible changes to the database....",
    });
    if (action === "delete") {
      return postJSONRequest(admin.deleteUser, {
        user: this.state.__receivedData.id,
        field: this.state.fieldEdited,
      })
        .then((x) => {
          const error = x.error || x.data.error;
          if (error)
            return this.setState({
              error,
              workProgress: null,
              confirmAction: null,
            });
          this.props.closeProfileEditor(this.state.__receivedData);
        })
        .catch(this._promiseErrorHandler);
    }

    if (action == "qualification-toggle") {
      const route = this.state.__receivedData.is_disqualified
        ? "requalify"
        : "disqualify";
      const url = admin[route];
      return postJSONRequest(url, { user: this.state.__receivedData.id })
        .then(this.__cxResponses)
        .catch(this._promiseErrorHandler);
    }
  };
  __cxResponses = (x) => {
    this.setState({ confirmAction: null });
    this.__onResponse(x);
  };
  syncProfileInfoWithServer = (value) => {
    const field = this.state.fieldEdited;
    if (field === "last_question_answered_at" || field === "current_level") {
      value = value.length > 1 ? value.replace(/^0+/, "") : value;
    }
    const valid = this.editableFieldsValidatorFunctions[field](value);
    if (valid.valid) {
      this.setState({ workProgress: "Syncing new data with the server..." });
      postJSONRequest(admin.adminEditUserData, {
        user: this.state.__receivedData.id,
        field,
        new_value: (value || "").trim(),
      })
        .then(this.__onResponse)

        .catch(this._promiseErrorHandler);
    } else {
      return this.setState({
        error: valid.error,
        workProgress: null,
        isEditing: true,
      });
    }
  };
  _getKeys(data) {
    return ["id", "has_verified_email"].concat(
      keys(this.editableFieldsValidatorFunctions)
    );
  }
  _isAllowedToEditProfile() {
    return true;
  }
  _getActionPanel() {
    if (!store.isLoggedIn) return;
    const data = this.state.__receivedData;
    if (data && data.id !== store.userData.id) {
      return (
        <div>
          <div class="heading-text clr" style={{ fontSize: "2rem" }}>
            DANGER SECTION
          </div>
          <span
            data-action="delete"
            class="hoverable action-button act"
            onClick={this.__confirmAction}
          >
            Delete Account
          </span>
          <span
            data-action="qualification-toggle"
            class="hoverable action-button act"
            onClick={this.__confirmAction}
          >
            {data.is_disqualified ? "Requalify" : "Disqualify"} Account
          </span>
        </div>
      );
    }
  }
  __closeAction = () =>
    this.setState({ confirmAction: null, isConfirmed: null });
  render(props, state) {
    const confirmAction = state.confirmAction;
    if (confirmAction) {
      const receivedData = state.__receivedData;
      const isDQ = receivedData.is_disqualified;
      const uID = receivedData.id;
      const uName = receivedData.name;
      if (!state.isConfirmed) {
        return (
          <>
            <div class="mask" onClick={this.__closeAction}></div>
            <Popup
              close={this.__executeConfirmedAction}
              title="Woah there.."
              errorHead={
                <span>
                  Are you sure you want to
                  <span style={{ color: "red" }}>
                    {" " +
                      (confirmAction === "delete"
                        ? confirmAction
                        : isDQ
                        ? "Requalify"
                        : "Disqualify"
                      ).toUpperCase()}
                  </span>
                  {` ${uID}( ${uName} ) ?`}
                </span>
              }
            />
            ;
          </>
        );
      }
      if (state.workProgress) {
        return <div>{state.workProgress}</div>;
      }
    } else {
      return super.render(props, state);
    }
  }
}
