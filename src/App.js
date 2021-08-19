import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import LiveRoulette from "./components/LiveRoulette/LiveRoulette";
import CasePage from "./pages/CasePage/CasePage";
import Container from "./Container/Container";
import { Provider } from "react-redux";
import store from "./store/store";


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
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
