import {
  Component,
  Router,
  RouterSubscription,
} from "@hydrophobefireman/ui-lib";
export default class extends Component {
  state = { currentPath: Router.getPath };
  componentDidMount() {
    RouterSubscription.subscribe(this.__routeChange);
  }
  __routeChange = (path) => {
    this.setState({ currentPath: path });
  };
  componentWillUnmount() {
    RouterSubscription.unsubscribe(this.__routeChange);
  }
}
