import {
  Router,
  AsyncComponent,
  absolutePath,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";
import { RouteLoadingFallback } from "./fallbackComponents";

const getDefault = (module_) => module_.default;
const componentMap = {
  "/": () =>
    import("./components/LandingComponent/LandingComponent").then(getDefault),
  "/register": () => import("./components/Register/Register").then(getDefault),
  "/login": () => import("./components/Login/Login").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
};

export default function (props) {
  return (
    <main class={["router-app", props.compactLayout ? "compact" : "free-form"]}>
      <div class="router-parent">
        <Router>
          {entries(componentMap).map(([path, promise]) => (
            <section data-application-state={path} path={absolutePath(path)}>
              <AsyncComponent
                componentPromise={promise}
                compactLayout={props.compactLayout}
                fallbackComponent={RouteLoadingFallback}
              />
            </section>
          ))}
        </Router>
      </div>
    </main>
  );
}
