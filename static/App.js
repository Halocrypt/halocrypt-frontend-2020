import { Component, render } from "@hydrophobefireman/ui-lib";

// Importing all CSS
import "./device.css";
import "./components/NavBar/NavBar.css";


// Importing components
import LandingComponent from './components/LandingComponent/LandingComponent';

class App extends Component {
    render() {
        return(
            <div>
                <LandingComponent />
            </div>
        )
    }
}

render(<App />, document.getElementById('app-mount'));