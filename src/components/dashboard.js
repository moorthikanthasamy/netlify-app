import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Error from "./error";

const App = () => {
    return <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
    </Switch>
}
export default App;