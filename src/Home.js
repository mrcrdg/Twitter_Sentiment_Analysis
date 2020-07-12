import React from "react";
import "./Home.css";

function Home() {
  return (
    <header className="conteudo">
      <div className="imagem-fundo"></div>

      <p style={{ fontSize: "1.5em" }}>
        Twitter <code>sentiment analisys.</code>
      </p>

      <h4>
        A ascensão das mídias sociais, como blogs e redes sociais tem despertado
        interesse em análise de sentimento. Com a proliferação de opiniões,
        avaliações, recomendações e outras formas de expressão on-line, a
        opinião se transformou em uma espécie de moeda virtual para empresas que
        desejam comercializar os seus produtos, identificar novas oportunidades
        e gerenciar suas reputações. Como as empresas estão cada vez mais
        interessadas em automatizar o processo de pesquisa sobre o que está
        sendo falado sobre elas, a compreensão das conversas nas mídias sociais,
        a fim de identificar conteúdo relevante, que permita tomar ações
        específicas, tem levado as empresas a buscar soluções de análise de
        sentimentos. Nossa visão do mundo é muitas vezes influenciada pela visão
        e opinião de outras pessoas. E isso não acontece apenas com indivíduos,
        mas também com as empresas. E por isso, cada vez mais as empresas estão
        interessadas em saber a percepção de outras empresas e indivíduos sobre
        seus produtos e serviços. E esta é a função da análise de sentimentos,
        também conhecida como opinion mining: é a tarefa de identificar se a
        opinião que foi expressada em um determinado texto é positiva ou
        negativa.
      </h4>

      <a
        className="home-link"
        href="http://www.cienciaedados.com/analise-de-sentimentos-e-machine-learning/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Texto Adapatado.
      </a>
    </header>
  );
}

export default Home;
