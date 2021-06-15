import { useState } from "react";
import styled from "styled-components"
import DataContext from '../context/myData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;


export default function Main() {
    let [portfolio, setPortfolio] = useState([]);

    return (
        <DataContext.Provider value={{
            portfolio,
            setPortfolio,

        }}>
            <Router>
                <MainContainer>
                    <Header />
                    <Switch>
                        <Route exact path="/" >
                            <Homepage />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </MainContainer>
            </Router>
        </DataContext.Provider>
    )
}