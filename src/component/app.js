import {React} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {HomePage, AdminPage, VoterPage, ErrorPage} from "components/pages";
import { WebsiteContextProvider } from "context/WebsiteContext";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
      scroll-behavior: smooth;
    }
`;

const App = () => {
  return (
    <WebsiteContextProvider>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/voter" component={VoterPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </WebsiteContextProvider>
  );
};

export default App;