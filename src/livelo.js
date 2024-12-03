import React from "react";
import "./Apps.css";

function App() {
  return (
    <div className="App">
      {/* Seção superior */}
      <div className="header">
        <div className="promo">
          <h1>Dúvidas na escolha de um presente?</h1>
          <p>Separamos pra você alguns kits presentes incríveis!</p>
          <button className="cta-button">Vem Aqui!</button>
        </div>
      </div>

      {/* Seção de Parceria */}
      <div className="partnership">
        <h2>
          Ganhe 15 pontos a cada R$1 em compras.
          <br />
          <span>Utilize o cupom abaixo para pontuar.</span>
        </h2>
        <div className="livelo-logo">
          <h1>LIVELO</h1>
        </div>
        <p>
          Para mais detalhes, entre em contato:
          <br />
          <strong>0800 123 456</strong>
        </p>
      </div>

      {/* Regulamento */}
      <div className="rules">
        <h2>Regulamento Abelha Rainha e Livelo</h2>
        <p>
          Aqui, você pode incluir o texto de regulamentação com todos os
          detalhes. O texto deve ser formatado de acordo com as informações do
          contrato da empresa.
        </p>
      </div>
    </div>
  );
}

export default App;
