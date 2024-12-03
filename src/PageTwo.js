import React from 'react';
import { Box, Container, Typography, Grid, Button, Link, List, ListItem, ListItemText, Paper } from '@mui/material';
import Img from './Assets/logo.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/apple.png';




function App() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ backgroundColor: '#424242', color: '#fff', py: 2 }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
          <img src={Img} alt="Logo" />
            <Box>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Facebook
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Instagram
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                YouTube
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Conteúdo principal */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Com o Aplicativo da Abelha Rainha, você só tem a ganhar!
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          O aplicativo da Abelha Rainha garante mais praticidade, organização e economia de tempo para você, revendedor(a)!
        </Typography>

        {/* Botões de download */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              href="https://play.google.com/store/apps/details?id=com.abelharainha"
              sx={{ backgroundColor: '#000', color: '#fff', px: 4, py: 2 }}
            >
              <img
                src={playstore}
                alt="Google Play"
                style={{ height: '40px' }}
              />
            </Button>
            <Typography variant="body2" align="center" mt={1}>
              Download para Android
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              href="https://apps.apple.com/br/app/abelha-rainha/id1479251020"
              sx={{ backgroundColor: '#000', color: '#fff', px: 4, py: 2 }}
            >
              <img
                src={appstore}
                alt="App Store"
                style={{ height: '40px' }}
              />
            </Button>
            <Typography variant="body2" align="center" mt={1}>
              Download para iOS (iPhone)
            </Typography>
          </Grid>
        </Grid>

        {/* Lista de vantagens */}
        <Paper sx={{ p: 3, backgroundColor: '#f0f0f0' }}>
          <Typography variant="h6" gutterBottom>
            Confira as vantagens:
          </Typography>
          <List>
            {[
              'Com o aplicativo, você tem acesso ao catálogo vigente assim que ele é lançado (em tempo real), e ainda pode ter a campanha sempre em mãos, no seu celular.',
              'Você também pode baixar o catálogo através do app e enviar para seus clientes através do WhatsApp, sem precisar se deslocar.',
              'Os pedidos registrados no app da Abelha Rainha são enviados imediatamente e ficarão salvos com total segurança.',
              'Os pedidos ficarão salvos no app mesmo que você não esteja conectado à internet no momento do registro.',
              'No app, você terá a visão de todos os pedidos por clientes, garantindo maior organização.',
              'O aplicativo da Abelha Rainha não ocupa muito espaço no celular e também utiliza pouco do seu pacote de dados.',
            ].map((advantage, index) => (
              <ListItem key={index}>
                <ListItemText primary={advantage} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#424242', color: '#fff', py: 2, mt: 5 }}>
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
