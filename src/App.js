import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">{/* <About /> */}</Route>

      <Route path="/service">{/* <Service /> */}</Route>

      <Route path="/contact">{/* <Contact /> */}</Route>
    </Switch>
  );
};

export default App;
