import {
  Router,
  AsyncComponent,
  absolutePath,
  redirect,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";
import { RouteLoadingFallback } from "./fallbackComponents";
import { handler } from "./authHandler";

const getDefault = (module_) => module_.default;
const componentMap = {
  "/": () =>
    import("./components/LandingComponent/LandingComponent").then(getDefault),
  "/register": () => import("./components/Register/Register").then(getDefault),
  "/login": () => import("./components/Login/Login").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
  "/logout": () =>
    Promise.resolve(() => {
      handler.logout().then(redirect("/"));
      return "Logging you out";
    }),
  "/leaderboard": () =>
    import("./components/Leaderboard/Leaderboard").then(getDefault),
  "/play": () => import("./components/Play/Play").then(getDefault),
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
