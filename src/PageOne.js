import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Link } from '@mui/material';
import Img from './Assets/logo.png';

function App() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ backgroundColor: '#424242', color: '#fff', padding: '10px 0' }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <img src={Img} alt="Logo" />
            <Typography variant="p">Área da Revendedora</Typography>
            <Box>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', mx: 1 }}>
                Voltar para loja
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', mx: 1 }}>
                Facebook
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', mx: 1 }}>
                Instagram
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', mx: 1 }}>
                YouTube
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Conteúdo principal */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={3}>
          {/* Primeiro Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box textAlign="center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Quero Revender"
                    style={{ borderRadius: '8px', marginBottom: '16px', width: '100%' }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Quero Revender
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Faça parte dessa equipe maravilhosa que cresce a cada dia mais no Brasil. Seja um revendedor e espalhe a beleza por onde passar.
                  </Typography>
                  <Link to="google.com">
                  <Button variant="contained" color="error" href="https://gxgaming.com.br" sx={{ mt: 2 }}>
                    Saiba Como
                  </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Segundo Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box textAlign="center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Baixar o Aplicativo"
                    style={{ borderRadius: '8px', marginBottom: '16px', width: '100%' }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Baixar o Aplicativo
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    O aplicativo da Abelha Rainha garante mais praticidade, organização e economia de tempo para você, revendedor(a)!
                  </Typography>
                  <Button variant="contained" color="primary" href="https://gxgaming.com.br" sx={{ mt: 2 }}>
                    Baixar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Terceiro Cartão */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box textAlign="center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Catálogo Digital"
                    style={{ borderRadius: '8px', marginBottom: '16px', width: '100%' }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Catálogo Digital
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Faça o download do nosso catálogo e tenha em mãos os melhores produtos para cuidar da sua beleza e bem-estar.
                  </Typography>
                  <Button variant="contained" color="success" href="https://gxgaming.com.br" sx={{ mt: 2 }}>
                    Acessar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#424242', color: '#fff', py: 2 }}>
        <Container>
          <Typography variant="body2" align="center">
            Copyright © 2024 Abelha Rainha. Todos os direitos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
