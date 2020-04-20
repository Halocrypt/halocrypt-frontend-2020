import { Component } from '@hydrophobefireman/ui-lib';

export default class NavBarItem extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <li className="navbar__main--item"><a>{this.props.name}</a></li>
        )
    }
}