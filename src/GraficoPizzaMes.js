import React from "react";
import Chart from "react-google-charts";
import dados from "./data/tweets.json";

function Graficos(props) {
  const newdata = dados.map((tweet, key) => {
    return tweet.data;
  });

  let Abril = 0;
  let Maio = 0;
  let Junho = 0;
  let Julho = 0;

  const mesAno = newdata.map((index) => {
    if (index.includes("Mon")) Abril++;
    if (index.includes("Mon")) Maio++;
    if (index.includes("Tue")) Junho++;
    if (index.includes("Wed")) Julho++;
  });

  const data = [
    ["Tweets", "Mês do ano"],
    ["Abril", Abril],
    ["Maio", Maio],
    ["Junho", Junho],
    ["Julho", Julho],
  ];
  const options = {
    title: "Quantidade de tweets por mês do ano",
    pieHole: 0.1,
    is3D: true,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Graficos;
