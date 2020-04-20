import { Component } from "@hydrophobefireman/ui-lib";
import NavBarItem from "./NavBarItem";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props, state) {
    const links = this.props.links;
    console.log(links);
    return (
      <div className="navbar__main">
        {links.map((link) => (
          <ul>
            <NavBarItem name={link.name} />
          </ul>
        ))}
      </div>
    );
  }
}
