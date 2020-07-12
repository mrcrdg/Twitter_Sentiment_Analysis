import React from "react";
import "./App.css";
import Home from "./Home";
import Graficos from "./Graficos";
import Tweets from "./Tweets";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Router>
          <main>
            <nav className="menu">
              <ul>
                <li>
                  <Link to="/" className="menu-links">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/Graficos" className="menu-links">
                    Gráficos
                  </Link>
                </li>

                <li>
                  <Link to="/Tweets" className="menu-links">
                  Tweets
                  </Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Graficos" component={Graficos} />
              <Route path="/Tweets" component={Tweets} />
            </Switch>
          </main>
        </Router>
      </Row>

      <Row className="rodape">
        <p>
          Página HTML desenvolvida por Marcia Rodrigues, para a disciplina de
          Programação Web I - Eng de Software - SENAI/Londrina. ©
        </p>
      </Row>
    </Container>
  );
}

export default App;
