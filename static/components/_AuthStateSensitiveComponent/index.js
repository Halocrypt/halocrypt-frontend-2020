import { Component } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
export default class AuthStateSensitiveComponent extends Component {
  _globalStoreStateChanged = () => this.setState({ hasNewData: true });

  componentDidMount() {
    appEvents.subscribe(this._globalStoreStateChanged);
  }
  componentWillUnmount() {
    appEvents.unsubscribe(this._globalStoreStateChanged);
  }
}
