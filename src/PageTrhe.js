import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>🐝 Abelha Rainha | Área da Revendedora</h1>
          <nav>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#youtube">YouTube</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <h2>Com o Aplicativo da Abelha Rainha, você só tem a ganhar!</h2>
          <p>O aplicativo da Abelha Rainha garante mais praticidade, organização e economia de tempo para você, revendedor(a)!</p>

          {/* Botões de Download */}
          <div className="download-buttons">
            <div className="download">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Download no Google Play"
                className="store-button"
              />
              <p>Download para Android</p>
            </div>
            <div className="download">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Download_on_the_App_Store_Badge.svg/512px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download na App Store"
                className="store-button"
              />
              <p>Download para iOS (iPhone)</p>
            </div>
          </div>

          {/* Lista de Vantagens */}
          <section className="benefits">
            <h3>Confira as vantagens:</h3>
            <ul>
              <li>Com o aplicativo, você tem acesso ao catálogo vigente assim que ele é lançado (em tempo real), e ainda pode ter a campanha sempre em mãos, no seu celular, para mostrar onde e quando quiser.</li>
              <li>Você também pode baixar o catálogo através do app e enviar para seus clientes através do WhatsApp, sem precisar se deslocar para mostrar a revista. Já os clientes podem mandar os pedidos à distância, também através do WhatsApp.</li>
              <li>Os pedidos registrados no app da Abelha Rainha são enviados imediatamente e ficarão salvos com total segurança. Assim, você pode mandar conforme os pedidos forem chegando, sem precisar esperar para mandar todos de uma vez e correr o risco de perder pedidos.</li>
              <li>Os pedidos ficarão salvos no app mesmo que você não esteja com internet no momento do registro. Assim que o celular se conectar novamente, eles serão enviados para o seu distribuidor.</li>
              <li>No app, você terá a visão de todos os pedidos por clientes, garantindo maior organização. Lá, você também terá acesso à sua lista de clientes salvos.</li>
              <li>O aplicativo da Abelha Rainha não ocupa muito espaço no celular e também utiliza pouco do seu pacote de dados.</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Copyright © 2024 Abelha Rainha. Todos os direitos reservados.</p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
