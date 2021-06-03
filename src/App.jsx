import LandingPage from './components/Landing';
import ServiceSelect from './components/ServiceSelect';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const App = () => {

    return (
        <main>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/service-selection">Services</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>

                        <Route exact path="/">
                            <LandingPage/>
                        </Route>

                        <Route path="/service-selection">
                            <ServiceSelect/>
                        </Route>

                        <Route path="/schedule/:uuid">
                            Nothing here yet.
                        </Route>
                    </Switch>
                </div>
            </Router>

        </main>
    );
};

export default App;
