import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import './App.css';

import store from "./store/store";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import LiveRoulette from "./components/LiveRoulette/LiveRoulette";
import CasePage from "./pages/CasePage/CasePage";
import Container from "./Container/Container";
import ContractsPage from "./pages/ContractsPage/ContractsPage";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <div className='bg'/>
                    <Header/>
                    <LiveRoulette/>
                    <Container>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/case/:id' component={CasePage}/>
                            <Route path='/contracts' component={ContractsPage}/>
                            <Route path='*' component={HomePage}/>
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
