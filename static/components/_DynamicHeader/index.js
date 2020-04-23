import Component from "@hydrophobefireman/ui-lib";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
const THRESHOLD_WIDTH = 600;

export default class DynamicHeader extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.onWidthChange);
  }
  /** never happenning */
  // componentWillUnmount(){
  // window.remove("resize", this.onWidthChange);
  // }
  state = { windowWidth: innerWidth };
  onWidthChange = () => {
    const width = window.innerWidth;
    this.setState({ windowWidth: width });
  };
  render(_, state) {
    const mobileLayout = state.windowWidth < THRESHOLD_WIDTH;
    return mobileLayout ? <MobileHeader /> : <Header />;
  }
}
