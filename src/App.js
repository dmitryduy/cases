
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import LiveRoulette from "./components/LiveRoulette/LiveRoulette";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <LiveRoulette/>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
