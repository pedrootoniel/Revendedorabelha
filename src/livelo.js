import React from "react";
import "./Apps.css";
import logo from './Assets/logo1.png';
import livelo from './Assets/positivo.png';
import livelo1 from './Assets/livelo.png';
import negativo from './Assets/negativo.png';



function App() {
  return (
    <div className="App">
      {/* Seção superior */}
      <div className="header">
        <div className="promo">
        <img className="liveloimg" src={livelo}/>
        <img className="logoabelha" src={logo}/>
          <p>Ganhe 13 pontos a cada R$1 em compras.
          <br/><br/>
<span className="clube">CLUBE LIVELO:</span>
<br/>
Ganhe 15 pontos a cada R$1 em compras.<br/><br/>
Utilize o cupom <span className="clube">LIVELO</span> para pontuar.</p>
<img className="liveloimg1" src={livelo1}/>
<br/> 
          <button className="cta-button">Ir Para Abelha Rainha</button>
          <br/>
          <span className="clube">FRETE GRÁTIS* </span>
          <br/><p>*Sudeste e Centro-Oeste pedidos acima de R$99,00
          <br/>*Norte, Sul e Nordeste pedidos acima de R$99,00
          <br/>O valor do frete não será incluso para pontuação, somente produtos.<br/>
Consulte o regulamento.</p>
        </div>
      </div>

      {/* Seção de Parceria */}
      <div className="partnership">

        <div className="livelo-logo">
         <img className="liveloimg2" src={negativo}/>
        </div>
        <p>
       <strong>1º O que fazer para garantir seus pontos?<br/></strong>
Utilize o cupom LIVELO em seu carrinho de compras.<br/>
<br/><strong>2º Escolhendo o produto:<br/></strong>
Na compra de produtos disponível em nossa loja, acessando aqui.
<br/><strong>3º Vêm pontos!</strong><br/>
Os pontos serão creditados no CPF do responsável pelo pedido em até 30 dias<br/> após a entrega, consulte em sua conta Livelo.<br/>
<br/><strong>4º Sobre a Livelo:</strong><br/>
A Livelo é o maior programa de pontos do Brasil, no qual você junta pontos e troca por viagens, experiências e até cashback, de um jeito fácil de verdade!
          <br />
        </p>
      </div>

      {/* Regulamento */}
      <div className="rules">
        <h2>Regulamento Abelha Rainha e Livelo</h2>
        <p>
        Ao realizar as compras na loja virtual da Abelha Rainha Cosméticos, em darkgrey-panther-885250.hostingersite.com/livelo

(Hotsite), o cliente aceita e concorda com as regras e condições contidas abaixo.
        </p>
        <p>1. Participantes: Poderão participar do programa as pessoas físicas, maiores de dezoito anos, que adquirirem produtos vendidos e entregues pela marca Abelha Rainha no Hotsite

darkgrey-panther-885250.hostingersite.com/livelo , mediante inserção do cupom “LIVELO” no campo “Cupom de Desconto”, antes da confirmação da compra. O Participante deverá ser o titular do CPF

informado durante o processo de compra no Hotsite, cumprir todas as condições deste regulamento e ainda do regulamento do Programa Livelo, disponível em

darkgrey-panther-885250.hostingersite.com/regulamento.</p>
<p>2. Campanha: Os Participantes poderão acumular:

(i) Acúmulo Padrão: 3 (três) Pontos Livelo a cada R$1 (um real) em compras para todos os Participantes, podendo ser alterado pelos representantes da marca Abelha Rainha a qualquer tempo; ou

(ii) Acúmulo Especial: 4 (quatro) ou mais Pontos Livelo a cada real em campanhas especiais válidas por tempo determinado, conforme regras definidas na própria oferta/campanha.

2.1. Em uma compra, o Participante somente poderá acumular pontos OU pelo Acúmulo Padrão OU Acúmulo Especial, a depender das regras definidas na oferta, não sendo possível acumular pontos nas duas modalidades.

2.2. Para campanhas/ofertas que tiverem como critério a necessidade de ser assinante do Clube Livelo, serão elegíveis apenas os assinantes que

(i) tiverem realizado sua adesão ao Clube Livelo antes de adquirir produtos da marca Abelha Rainha no darkgrey-panther-885250.hostingersite.com/livelo e 

(ii) permanecer com sua assinatura ativa até o crédito dos Pontos Livelo.</p>
<p>3. Período: A presente Campanha é válida por tempo indeterminado, podendo ser encerrada mediante prévio aviso de 30 (trinta) dias por parte dos representantes da marca Abelha Rainha.</p>
<p>4. Pontos Acumulados: A quantidade de pontos a serem creditados será definida pelos representantes da marca Abelha Rainha, e estes comunicarão a Livelo para que proceda com o crédito devido.</p>
<p>5. Validade dos Pontos: Os Pontos oriundos desta Campanha de Incentivo terão validade de 24 (vinte e quatro) meses a contar da data de creditamento na Conta Livelo do Participante.</p>
<p>6. Prazo para Crédito de Pontos: Os Pontos Livelo serão creditados em até 30 (trinta) dias corridos contados do recebimento, pelo cliente, do produto adquirido no darkgrey-panther-885250.hostingersite.com/livelo , desde que o número do CPF informado seja válido e tenha sido inserido o cupom “LIVELO” antes da finalização da compra.</p>
<p>7. ATENÇÃO: O que não acumula Pontos: Não acumulam Pontos Livelo

(i) embalagens para presente,

(ii) frete,

(iii) valores pagos com Cupom de Desconto, gift card e Vale-Compra; 

(iv) pedidos realizados por pessoa jurídica;

(v) compras realizadas fora do Hotsite

(vi) compras realizadas no Hotsite sem aplicação do Cupom “LIVELO”

 Também não serão creditados Pontos Livelo para:

(i) pedidos não aprovados ou cancelados;

(ii) produtos devolvidos pelo Participante;

(iii) caso de suspeita de fraude; 

(iv) em hipótese de violação deste regulamento ou regulamento do Programa Livelo; e Produtos que não são vendidos e nem entregues pela marca Abelha Rainha. COMPRAS EFETUADAS EM CANAIS NÃO INFORMADOS NESTE REGULAMETO NÃO SERÃO PASSÍVEIS DE ACÚMULO DE PONTOS LIVELO.</p>
<p>8. Não cumulatividade: Esta Campanha não é cumulativa com outras promoções, bonificações ou descontos.</p>
<p>9. Responsabilidade: A Livelo não se responsabiliza pela qualidade dos produtos e serviços oferecidos e disponibilizados pela Abelha Rainha. A Livelo não se responsabiliza por informações incorretas apresentadas pela Abelha Rainha e/ou Participante, incluindo, mas não se limitando o número de CPF para proceder com o crédito de Pontos. Cabe a Abelha Rainha definir a conversão de dólar para real em campanhas realizadas na paridade dólar por ponto.</p>
      </div>
    </div>
  );
}

export default App;
