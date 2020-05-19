import { Component, A } from "@hydrophobefireman/ui-lib";
import { getRequest, postJSONRequest } from "../../../http/requests";
import { admin } from "../../../apiRoutes";
import { stampFormat } from "./logutil";
import { contains } from "./Questions";
import { callback } from "../../../shared";
const getLogs = admin.getLogs;
const clearLogs = admin.clearLogs;

export class LogsPanel extends Component {
  state = {
    isFetching: false,
    error: null,
    rawData: null,
    filteredData: null,
    filterOptions: { logType: "all", inputValue: "", level: null },
  };
  _setChoice = (e) => {
    this.setState((ps) => {
      const fo = ps.filterOptions;
      fo.logType = e.target.dataset.logtype;
      return fo;
    });
  };
  _handleInput = (e) => {
    const value = e.target.value;
    callback(() =>
      this.setState((ps) => {
        const fo = ps.filterOptions;
        fo.inputValue = value;
        return fo;
      })
    );
  };
  _handleLevelInput = (e) => {
    let value = +e.target.value;
    if (value <= 0 || value != value) {
      value = "";
    }
    callback(() => {
      this.setState((ps) => {
        const fo = ps.filterOptions;
        fo.level = value;
        return fo;
      });
    });
  };
  _fetchLogs = async () => {
    try {
      if (this.state.isFetching) return;
      this.setState({ isFetching: true });
      let logs;
      try {
        logs = await getRequest(getLogs);
      } catch (e) {
        return this.setState({ error: "Unknown error" });
      }
      const rawData = logs.data || [];
      this.setState({ rawData, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ error: "unknown error" });
    }
  };
  _mergeLogs = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener(
      "change",
      () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = async () => {
          let js = JSON.parse(reader.result);
          js = js.data || js;
          let noErr = true;
          while (js.length) {
            await postJSONRequest(admin.mergeLogs, js.splice(0, 500))
              .then((r) => {
                if (!r || (!r.success && !r.data.success))
                  return this.setState({ error: "Could not merge logs" });
              })
              .catch(() => {
                noErr = false;
                this.setState({ error: "Could not merge logs" });
              });
          }
          if (!noErr) return;
          this._fetchLogs();
        };
        reader.readAsText(file);
      },
      { once: true }
    );
    input.click();
  };
  _download = () => {
    const blob = new Blob([JSON.stringify(this.state.rawData)], {
      type: "application/json",
    });
    const U = URL.createObjectURL(blob);
    Object.assign(document.createElement("a"), {
      href: U,
      download: "logs.json",
    }).click();
  };
  render(_, state) {
    if (state.error)
      return (
        <div>
          <div>An error occured.</div>
          <div>{state.error}</div>
        </div>
      );
    return (
      <div>
        <button
          class="action-button hoverable act"
          style={{ padding: "1rem" }}
          onClick={this._fetchLogs}
        >
          Fetch new logs
        </button>
        <button
          class="action-button hoverable act"
          style={{ padding: "1rem" }}
          onClick={this._mergeLogs}
        >
          Merge logs
        </button>
        {state.rawData && (
          <button
            class="action-button hoverable act"
            style={{ padding: "1rem" }}
            onClick={this._download}
          >
            Download Logs
          </button>
        )}
        {state.isFetching && (
          <div>Fetching new user actions from the server</div>
        )}
        <div
          class={
            "admin-log-renderer" + (state.isFetching ? "" : " has-content")
          }
        >
          {state.rawData && (
            <div>
              <div class="input-parent">
                <input
                  class="paper-input"
                  placeholder="Search user"
                  onInput={this._handleInput}
                  value={state.filterOptions.inputValue}
                />
              </div>
              <div class="input-parent">
                <input
                  class="paper-input"
                  placeholder="Search level"
                  onInput={this._handleLevelInput}
                  value={state.filterOptions.level}
                />
              </div>
              <div>
                <ButtonChoice
                  onClick={this._setChoice}
                  active={state.filterOptions.logType}
                />
              </div>
              <div>
                <FilteredLogsRenderer
                  rawData={state.rawData}
                  {...state.filterOptions}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function ButtonChoice(props) {
  return (
    <div>
      <div>Select log type </div>
      <div>Currently showing {props.active} logs</div>
      <div class="act-btn-container">
        {["all", "correct", "incorrect"].map((x) => (
          <button
            class={
              "hoverable action-button logtype" +
              (props.active === x ? " active" : "")
            }
            data-logtype={x}
            onClick={props.onClick}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}

class FilteredLogsRenderer extends Component {
  state = { showCount: 0 };
  filterThroughLogs = () => {
    const logType = this.props.logType;
    const input = this.props.inputValue;
    const level = this.props.level || 0;
    const rawData = this.props.rawData || [];

    const showAll = logType == "all";
    const shouldBeCorrect = logType === "correct";
    const shouldBeIncorrect = logType === "incorrect";
    const filteredData = rawData.filter((x) => {
      if (!showAll) {
        if (shouldBeCorrect && !x.is_correct) return false;
        if (shouldBeIncorrect && x.is_correct) return false;
      }
      if (level) {
        if (+x.level !== level) {
          return false;
        }
      }
      if (input) {
        return contains(x.user, input);
      }
      return true;
    });
    this.setState({ filteredData, showCount: 100 });
  };
  componentDidUpdate(pProps) {
    if (!pProps) return;

    if (
      ["level", "inputValue", "logType", "rawData"].some(
        (x) => this.props[x] !== pProps[x]
      )
    ) {
      callback(this.filterThroughLogs);
    }
  }
  componentDidMount() {
    callback(this.filterThroughLogs);
  }
  _increment = () => this.setState((ps) => ({ showCount: ps.showCount + 100 }));
  __getList() {
    const filteredData = this.state.filteredData;
    const fLen = filteredData.length;
    const sc = this.state.showCount;
    const ret = Array(Math.min(fLen, sc));
    for (let i = 0; i < sc && i < fLen; i++) {
      const x = filteredData[i];
      ret[i] = <LogItem x={x} />;
    }
    return ret;
  }
  render(props, state) {
    const filteredData = state.filteredData;
    if (!filteredData) return "calculating";
    const lst = this.__getList();
    const fLen = filteredData.length;
    const lstLen = lst.length;
    return (
      <div>
        <div>
          Found {fLen} results, showing {lstLen}
        </div>
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <div>Click on the username to view their profile</div>
          <dv>Click on a log item to highlight it</dv>
          {lst}
        </div>
        {lstLen != fLen && (
          <button class="action-button hoverable act" onClick={this._increment}>
            Load More
          </button>
        )}
      </div>
    );
  }
}

class LogItem extends Component {
  state = { isClicked: false };
  handleClick = () => this.setState((ps) => ({ isClicked: !ps.isClicked }));
  render(props, state) {
    const x = props.x;
    return (
      <div
        class={
          "log-entry search-result-element" +
          (state.isClicked ? " hl-entry" : "")
        }
        onClick={this.handleClick}
      >
        <span class="answer-status">{x.is_correct ? "✅" : "❌"}</span>
        <A href={"/profile?id=" + x.user} class="bold clr ">
          {x.user}
        </A>
        <span class="bold ts">({x.level})</span>
        <span class="bold break-word ts">{x.attempt} </span>
        <span class="ts flx-end">
          <span class="bold clr">{stampFormat(x.timestamp)}</span>
        </span>
      </div>
    );
  }
}
