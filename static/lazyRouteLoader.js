import {
  Router,
  AsyncComponent,
  absolutePath,
  redirect,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";
import { RouteLoadingFallback } from "./fallbackComponents";
import { handler } from "./authHandler";

const Logout = () =>
  Promise.resolve(() => {
    handler.logout().then(redirect("/"));
    return "Logging you out";
  });

const getDefault = (module_) => module_.default;

const componentMap = {
  "/": () =>
    import("./components/LandingComponent/LandingComponent").then(getDefault),
  "/register": () => import("./components/Register/Register").then(getDefault),
  "/login": () => import("./components/Login/Login").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
  "/logout": Logout,
  "/leaderboard": () =>
    import("./components/Leaderboard/Leaderboard").then(getDefault),
  "/play": () => import("./components/Play/Play").then(getDefault),
  "/rules": () => import("./components/Rules/Rules").then(getDefault),
  "/__admin__": () => import("./components/_/Admin/Admin").then(getDefault),
  "/forgot-password": () =>
    import("./components/Verify/forgot-password").then(getDefault),
  "/verify-email": () =>
    import("./components/Verify/verify-email").then(getDefault),
  "/halo_begin": () => import("./components/Halo_Begin/hint_").then(getDefault),
};

const getRouteChild = (path, promise) => {
  const RouteChild = function (props) {
    return (
      <section data-application-state={path}>
        <AsyncComponent
          componentPromise={promise}
          compactLayout={props.compactLayout}
          fallbackComponent={RouteLoadingFallback}
        />
      </section>
    );
  };
  return <RouteChild path={absolutePath(path)} />;
};

export default function (props) {
  return (
    <main class={["router-app", props.compactLayout ? "compact" : "free-form"]}>
      <div class="router-parent">
        <Router>
          {entries(componentMap).map(([path, promise]) =>
            getRouteChild(path, promise)
          )}
          }
        </Router>
      </div>
    </main>
  );
}
