import React from "react";
import Chart from "react-google-charts";
import dados from "./data/tweets.json";

function GraficoBarras(props) {
  const newdata = dados.map((tweet, key) => {
    return tweet.data;
  });

  let Mon = 0;
  let Tue = 0;
  let Wed = 0;
  let Thu = 0;
  let Fri = 0;
  let Sat = 0;
  let Sun = 0;

  newdata.forEach((index) => {
    if (index.includes("Mon")) Mon++;
    if (index.includes("Tue")) Tue++;
    if (index.includes("Wed")) Wed++;
    if (index.includes("Thu")) Thu++;
    if (index.includes("Fri")) Fri++;
    if (index.includes("Sat")) Sat++;
    if (index.includes("Sun")) Sun++;
  });

  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Dia", "Tweets"],
          ["Segunda", Mon],
          ["Terça", Tue],
          ["Quarta", Wed],
          ["Quinta", Thu],
          ["Sexta", Fri],
          ["Sábado", Sat],
          ["Domingo", Sun],
        ]}
        options={{
          chart: {
            title: "Quantidade de tweets por dia da semana",
            subtitle: "Período: 2009",
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GraficoBarras;
