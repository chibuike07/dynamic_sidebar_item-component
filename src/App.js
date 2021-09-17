import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./Views/DashboardView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
