import "./App.css";
import SocietyList from "./Components/SocietyList";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";
import FirstPage from "./Components/FirstPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/SocietyList">
          <SocietyList />
        </Route>
        <Route exact path="/home">
          <FirstPage />
        </Route>
      </Switch>{" "}
    </div>
  );
}

export default App;

// whenever we need to Route a pathway we need to keep it within <Route></Route> to give them exact paths
