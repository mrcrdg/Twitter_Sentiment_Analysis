import React from "react";
import "./Graficos.css";
import GraficoBarras from "./GraficoBarras";
import GraficoPizzaSentimento from "./GraficoPizzaSentimento";
import GraficoPizzaMes from "./GraficoPizzaMes";

import { Container, Row } from "react-bootstrap";

function Graficos(props) {
  return (
    <Container fluid>
      <Row>
        <h1>Análise de Sentimentos</h1>
      </Row>

      <Row className="graficos">
        <GraficoPizzaSentimento></GraficoPizzaSentimento>
      </Row>

      <Row className="graficos">
        <GraficoBarras></GraficoBarras>
      </Row>

      <Row className="graficos">
        <GraficoPizzaMes></GraficoPizzaMes>
      </Row>
    </Container>
  );
}

export default Graficos;
