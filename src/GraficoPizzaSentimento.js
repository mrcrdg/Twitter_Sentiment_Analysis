import React from "react";
import Chart from "react-google-charts";
import dados from "./data/tweets.json";

function Graficos() {
  //Puxando o Objeto e transformando em Array
  
  const newdata = dados.map((tweet, key) => {
    return tweet.sentimento;
  });

  newdata.sort();
    
  const data = [
    ["Sentimento", "Quantidade de Tweets"],
    ["Negativo", newdata.filter(x => x===0).length],
    ["Positivo", newdata.filter(x => x===4).length],
  ];
  const options = {
    title: "Sentimentos",
    pieHole: 0.2,
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
