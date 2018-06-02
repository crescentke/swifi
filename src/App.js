import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
// import Header from './components/Header';
import {Home} from './components/Home';
import {Demo} from './components/Demo';
import {Signin} from "./components/Signin";
// import Market from './components/Market';
// import NotFound from './components/NotFound';
// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import marketApp from "./reducers";

import './App.css';
// import {Provider} from "react-redux";

// let store = createStore(marketApp, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path={"/demo"} component={Demo}/>
                        <Route path={"/accounts/login"} component={Signin}/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
