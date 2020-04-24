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
};

export default function (props) {
  return (
    <main class={["router-app", props.compactLayout ? "compact" : "free-form"]}>
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
    </main>
  );
}
