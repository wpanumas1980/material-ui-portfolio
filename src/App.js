import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

function App() {

  return (
    <React.Fragment>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/resume" component={Resume} />
          <Route  path="/portfolio" component={Portfolio} />
          <Route  path="/contact" component={Contact} />
          <Route  path="*" component={Home} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
