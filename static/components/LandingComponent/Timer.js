import { Component } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
const tFix = (t) => {
  t = "" + t;
  return (t.length === 1 ? "0" : "") + t;
};
export default class Timer extends Component {
  state = {
    isTiming: true,
    timeLeft: appEvents.getStore().eventBeginTimeStamp - +new Date(),
  };
  _updateTime = () =>
    this.setState((ps) => {
      const tl = ps.timeLeft - 1000;

      let isTiming = true;
      if (tl <= 0) {
        isTiming = false;
      }
      return { timeLeft: tl, isTiming };
    });
  componentDidMount() {
    this.__interval = setInterval(this._updateTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.__interval);
  }
  componentDidUpdate() {
    if (!this.state.isTiming) clearInterval(this.__interval);
  }
  parseTime(timeLeft) {
    let _left;
    const inSeconds = timeLeft / 1000;
    const secInAnHour = 3600;
    const secInAMin = 60;
    const hours = Math.floor(inSeconds / secInAnHour);
    _left = inSeconds % secInAnHour;
    const mins = Math.floor(inSeconds / secInAnHour);
    _left = Math.round(_left % secInAMin);
    const sec = _left;
    if (sec > 3 && hours === 0 && mins === 0) {
      return `${tFix(hours)}:${tFix(mins)}:${tFix(sec)}`;
    }
    const r = "Ready?";
    switch (sec) {
      case 3:
        return "Are";
      case 2:
        return "You";
      case 1:
        return r;
      default:
        return r;
    }
  }
  render(props, state) {
    return this.state.isTiming ? (
      <>
        <div class="heading-text goes-live">Going Live In</div>
        <div class="heading-text going-live-time-delta">
          {this.parseTime(state.timeLeft)}
        </div>
      </>
    ) : null;
  }
}
