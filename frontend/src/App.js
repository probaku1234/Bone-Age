import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Landing6 from "./home/pages/Landing6";
import Login from "./home/pages/Login";
import SignUp from "./home/pages/SignUp";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
          style={{backgroundColor: "white"}}
        >
          <Router basename="/">
            <Switch>
              <Route exact path="/">
                <Landing6 />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
