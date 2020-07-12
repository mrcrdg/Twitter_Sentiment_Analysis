import React from "react";
import dados from "./data/tweets.json";

function GraficosTeste() {
  //Puxando o Objeto e transformando em Array
  const newdata = dados.map((data, key) => {
    return data.data;
  });

  newdata.sort();

  // Retornar os sentimentos
  function sentimentoPos(totalSentimentos) {
    let count = []; // Poderia ser count{}
    totalSentimentos.forEach(() => {
      count[4] = (count[4] || 0) + 1;
    });
    return Object.values(count);
  }

  function sentimentoNeg(totalSentimentos) {
    let count = [];
    totalSentimentos.forEach(() => {
      count[0] = (count[0] || 0) + 1;
    });
    return Object.values(count);
  }

  
  
  //return (Object.values(data));

  console.log("Dados: "); // Isso é um Objeto JavaScript (uma linha)
  console.log(dados);
  console.log("Newdata: "); // Isso são dados tabelados em colunas, atraves da função Object.values()
  console.log(newdata);
  console.log("Positivos: "); // Isso é o total de sentimentos positivos em um array
  console.log(newdata.filter(x => x===4).length);
  console.log("Negativos: "); // Isso são todos os sentimento num Array
  console.log(newdata.filter(x => x===0).length);

  return (
    <div>
      <h1>Página de Testes</h1>
      <h2>{}</h2>
    </div>
  );
}

export default GraficosTeste;
