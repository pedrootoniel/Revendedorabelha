import React from 'react';
import styled from 'styled-components';
import logo from './Assets/logo.png';
import playstore from './Assets/playstore.png'; // Substitua pelo caminho correto
import appstore from './Assets/apple.png'; // Substitua pelo caminho correto

// Styled Components
const Wrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #424242;
  color: #fff;
  padding: 16px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoLink = styled.a`
  img {
    height: 50px;

    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;

const Links = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 8px;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      display: block;
      margin: 4px 0;
    }
  }
`;

const Content = styled.main`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  padding: 0 16px;
  flex: 1;

  h4 {
    font-size: 24px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: #555;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 32px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 12px 32px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 40px;
    }

    &:hover {
      background-color: #333;
    }
  }
`;

const Advantages = styled.section`
  background-color: #f0f0f0;
  padding: 24px;
  margin: 40px auto;
  max-width: 800px;
  border-radius: 8px;
  text-align: left;

  h6 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 12px;

      &::before {
        content: '✔';
        color: green;
        margin-right: 8px;
      }
    }
  }
`;

const Footer = styled.footer`
  background-color: #424242;
  color: #fff;
  padding: 16px;
  text-align: center;
`;

// Componente Principal
const App = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <HeaderContainer>
          <LogoLink href="/">
            <img src={logo} alt="Logo" />
          </LogoLink>
          <Links>
            <a href="/">Voltar para a loja</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </Links>
        </HeaderContainer>
      </Header>

      {/* Conteúdo principal */}
      <Content>
        <h4>Com o Aplicativo da Abelha Rainha, você só tem a ganhar!</h4>
        <p>
          O aplicativo da Abelha Rainha garante mais praticidade, organização e
          economia de tempo para você, revendedor(a)!
        </p>

        {/* Botões de download */}
        <ButtonGroup>
          <button>
            <img src={playstore} alt="Google Play" />
            Download para Android
          </button>
          <button>
            <img src={appstore} alt="App Store" />
            Download para iOS
          </button>
        </ButtonGroup>

        {/* Lista de vantagens */}
        <Advantages>
          <h6>Confira as vantagens:</h6>
          <ul>
            <li>Acesso ao catálogo vigente assim que ele é lançado.</li>
            <li>Envio fácil do catálogo pelo WhatsApp.</li>
            <li>Pedidos salvos com total segurança.</li>
            <li>Pedidos acessíveis mesmo offline.</li>
            <li>Organização completa dos pedidos por cliente.</li>
            <li>Aplicativo leve e econômico.</li>
          </ul>
        </Advantages>
      </Content>

      {/* Footer */}
      <Footer>
        Copyright © 2024 Abelha Rainha. Todos os direitos reservados.
      </Footer>
    </Wrapper>
  );
};

export default App;
