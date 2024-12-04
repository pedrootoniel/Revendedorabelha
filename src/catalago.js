import React from 'react';
import styled from 'styled-components';
import logo from './Assets/logo.png'; // Substitua pelo logo correto
import catalogoImage from './Assets/img3.png'; // Substitua pela imagem do catálogo

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
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const MainContent = styled.main`
  text-align: center;
  padding: 40px 16px;
  flex: 1;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const CatalogImage = styled.img`
  max-width: 600px;
  width: 90%;
  border-radius: 8px;
`;

const Footer = styled.footer`
  background-color: #424242;
  color: #fff;
  text-align: center;
  padding: 16px;

  p {
    margin: 0;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  img {
    margin-left: 8px;
    vertical-align: middle;
    height: 20px;

    @media (max-width: 768px) {
      height: 16px;
    }
  }
`;

// React Component
const Catalago = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <HeaderContainer>
          <Logo><img src={logo}/></Logo>
          <NavLinks>
            <a href="/">← Voltar para Loja</a>
            <a href="/facebook">Facebook</a>
            <a href="/instagram">Instagram</a>
            <a href="/youtube">YouTube</a>
          </NavLinks>
        </HeaderContainer>
      </Header>

      {/* Main Content */}
      <MainContent>
        <h1>Acesse o Catálogo</h1>
        <p>
          Faça o download do nosso catálogo e tenha em mãos os melhores produtos para cuidar da sua
          beleza e bem-estar.
        </p>
        <CatalogImage src={catalogoImage} alt="Catálogo Abelha Rainha" />
      </MainContent>

      {/* Footer */}
      <Footer>
        <p>
          Copyright © 2024 Abelha Rainha. Todos os direitos reservados. Desenvolvido por{' '}
          <img src={logo} alt="Logo Desenvolvedor" />
        </p>
      </Footer>
    </Wrapper>
  );
};

export default Catalago;
