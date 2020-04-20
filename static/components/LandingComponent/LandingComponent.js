import { Component } from '@hydrophobefireman/ui-lib';
import NavBar from '../NavBar/NavBar';

export default class LandingComponent extends Component {
    render(){
        return(
            <div>
                <NavBar links={[{name: 'home'}, {name: 'foo'}, {name: 'bar'}]} />
            </div>
        )
    }
}