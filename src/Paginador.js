import React, { useState, useEffect } from "react";
import "./Paginador.css";
import dados from "./data/tweets.json";
import Paginator from "react-hooks-paginator";
import { Container, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Paginador() {
  const pageLimit = 20;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setData(dados);
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);


  return (
    <Container fluid>
      <Row>
        <Card>
          <Card className="p-0 overflow-auto max-height">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr style={{height: "55px", textAlign: "center"}}>
                  <th>Tweet</th>
                  <th>Sentimento</th>
                  <th>Data</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>                    
                    {currentData.map((data, i) => (
                      <li key={i}>{data.texto}</li>
                    ))}
                  </td>
                  <td>
                    {currentData.map((data, i) => (
                      <li key={i}>{data.sentimento === 4 ? ":)" : ":("}</li>
                    ))}
                  </td>
                  <td>
                    {currentData.map((data, i) => (
                      <li key={i}>{data.data}</li>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>

          <Paginator
            totalRecords={data.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Card>
      </Row>
    </Container>
  );
}

export default Paginador;
