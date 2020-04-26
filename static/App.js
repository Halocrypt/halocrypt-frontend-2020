import Component, { render, Router, redirect } from "@hydrophobefireman/ui-lib";
import { handler } from "./authHandler";
// Importing all CSS
import "./device.css";
import "./components/Header/Header.css";
import "./components/MobileHeader/MobileHeader.css";
import "./components/LandingComponent/LandingComponent.css";
import "./components/Profile/Profile.css";
import "./aquireB64.css";
import "./forms.css";
// Importing components
import LazyRouteLoader from "./lazyRouteLoader";

import DynamicHeader from "./components/_DynamicHeader";

class App extends Component {
  async __beginFetch() {
    await handler.checkAuth();
  }
  componentDidMount() {
    const qs = Router.getQs;
    let c;
    this.__beginFetch();
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
