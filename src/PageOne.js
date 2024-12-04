import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png'
import revendedora from './Assets/revendedora.jpg'
import aplicativo from './Assets/aplicativo.jpg'
import catalago from './Assets/img3.png'


// Styled Components
const Wrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #424242;
  color: #fff;
  padding: 10px 0;
`;

const HeaderContainer = styled(Container)`
  background-color: #424242;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoLink = styled.a`
  img {
    height: 20px;

    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;


const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
  }
`;

const CardImage = styled.img`
  border-radius: 8px;
  margin-bottom: 16px;
  width: ${(props) => props.width || '100%'};
`;

const Footer = styled.footer`
  background-color: #424242;
  color: #fff;
  padding: 16px 0;
  text-align: center;
`;

const App = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <HeaderContainer>
          <LogoLink href="/">
            <img className='logo1' src={logo} alt="Logo" />
          </LogoLink>
          <SocialLinks>
          <a href="/">← Volta para o site</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </SocialLinks>
        </HeaderContainer>
      </Header>

      {/* Conteúdo Principal */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={3}>
          {/* Primeiro Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <CardImage
                    src={revendedora}
                    alt="Quero Revender"
                    width="95%"
                  />
                  <Typography variant="h5" gutterBottom>
                    Quero Revender
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Faça parte dessa equipe maravilhosa que cresce a cada dia mais no Brasil.
                    Seja um revendedor e espalhe a beleza por onde passar.
                  </Typography>
                  <Link to="https://distribuidor.abelharainha.com.br/login">
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ mt: 2 }}
                    >
                      Saiba Como
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Segundo Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <CardImage
                    src={aplicativo}
                    alt="Baixar o Aplicativo"
                  />
                  <Typography variant="h5" gutterBottom>
                    Baixar o Aplicativo
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    O aplicativo da Abelha Rainha garante mais praticidade, organização e economia de tempo para você, revendedor(a)!
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/baixar"
                    sx={{ mt: 2 }}
                  >
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Terceiro Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <CardImage
                    src={catalago}
                    alt="Catálogo Digital"
                    width="67%"
                  />
                  <Typography variant="h5" gutterBottom>
                    Catálogo Digital
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Faça o download do nosso catálogo e tenha em mãos os melhores produtos para cuidar da sua beleza e bem-estar.
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    href="/catalago"
                    sx={{ mt: 2 }}
                  >
                    Acessar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer>
        <Typography variant="body2">
          Copyright © 2024 Abelha Rainha. Todos os direitos reservados.
        </Typography>
      </Footer>
    </Wrapper>
  );
};

export default App;
