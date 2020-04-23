import Component, { render, Router, redirect } from "@hydrophobefireman/ui-lib";

// Importing all CSS
import "./device.css";
import "./components/Header/Header.css";
import "./components/MobileHeader/MobileHeader.css";
import "./components/LandingComponent/LandingComponent.css";
import "./aquireB64.css";
// Importing components
import LazyRouteLoader from "./lazyRouteLoader";

import DynamicHeader from "./components/_DynamicHeader";

class App extends Component {
  componentDidMount() {
    const qs = Router.getQs;
    let c;
    if ((c = new URLSearchParams(qs).get("__loader"))) {
      redirect(c);
      return;
    }
  }
  render(props, state) {
    return (
      <>
        <DynamicHeader />
        <LazyRouteLoader />
      </>
    );
  }
}

render(<App />, document.getElementById("app-mount"));
