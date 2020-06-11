import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { config } from "./Overmind";
import "./css/tailwind.css";

import Navbar from "./Layout/Navbar";
import Login from "./Pages/Login";
import Todos from "./Pages/Todos";
import CreateUser from "./Pages/CreateUser";
import Error from "./Layout/Error";

const App: React.FC = () => {
  // config for overmind dev tools
  const overmind = createOvermind(config, {
    devtools: "http://localhost:5000",
  });

  return (
    <Provider value={overmind}>
      <Router basename={"/react"}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/register" component={CreateUser} />
        </Switch>
        <Error />
      </Router>
    </Provider>
  );
};

export default App;
