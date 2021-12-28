<template>
  <div>
    <Header
      titleHeader="Inovação e Criatividade"
      contentHeader="Transforme sua equipe e otimize seus resultados: venha para a Ventura!"
      imgHeader="/icon-home.svg"
      titleBtn="Saiba mais"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5" id="solucoes">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <CardText
            class="order-md-2 order-sm-1 col-md-4"
          />
          <Card
            class="order-md-1 order-sm-2 card3 text-white col-md-4"
            cardTitle="Design Thinking"
            cardContent="Desenvolvimento de soluções através de estratégias e métodos criativos."
            cardLink="solucoes/design-thinking"
            colorTxtBtn="text-white"
            iconeCard="/icon-design-thinking.svg"
          />
          <Card
            class="order-md-3 order-sm-3 card5 text-white col-md-4"
            cardTitle="Design de Produtos e Serviços"
            cardContent="Aplicação de metodologias na criação de novos produtos e serviços."
            cardLink="/solucoes/product-design"
            colorTxtBtn="text-white"
            iconeCard="/icon-product-design.svg"
          />
          <Card
            class="order-md-4 order-sm-4 card2 text-white col-md-4"
            cardTitle="Inovação em Negócios, Produtos e Serviços"
            cardContent="Inove com ousadia e inteligência para gerar mais valor."
            cardLink="/solucoes/innovation"
            colorTxtBtn="text-white"
            iconeCard="/icon-innovation.svg"
          />
          <Card
            class="order-md-5 order-sm-5 card4 text-white col-md-4"
            cardTitle="Gamificação de Processos"
            cardContent="Engaje clientes, colaboradores e equipes com processos gamificados."
            cardLink="/solucoes/gamification"
            colorTxtBtn="text-white"
            iconeCard="/icon-gamification.svg"
          />
          <Card
            class="order-md-6 order-sm-6 card1 text-white col-md-4"
            cardTitle="Modelagem da Proposta de Valor"
            cardContent="Modele e valide sua ideia de negócio ou empresa na criação, diferenciação e inovação."
            cardLink="/solucoes/business-model"
            colorTxtBtn="text-white"
            iconeCard="/icon-business-model.svg"
          />
        </b-row>
      </b-container>
      <Curve2 />
    </b-container>
    <b-container fluid class="curve-one-a py-5">
      <b-container class="py-5 ">
        <h3 class="px-2 text-primary text-center">Método de Trabalho</h3>
        <p class="px-2 text-grey text-center text-uppercase">Conheça nossa metodologia para tornar a sua empresa mais competitiva e inovadora!</p>

        <b-row class="pb-5">
          <CardLine
            iconCard="icon-metodo-1.svg"
            titleCard="Diagnóstico e pesquisa"
            contentCard="Realizamos pesquisas e entendemos as necessidades da empresa ou equipe através de entrevistas imersivas."
            class="col-md-6 order-md-1 order-sm-1 "
          />
          <CardLine
            iconCard="icon-metodo-2.svg"
            titleCard="Planejamento estruturado"
            contentCard="Desenvolvemos as vacinas para as dores observadas e coletadas na imersão com metodologias criativas."
            class="col-md-6 order-md-2 order-sm-2 "
          />
          <CardLine
            iconCard="icon-metodo-3.svg"
            titleCard="Aplicação de soluções"
            contentCard="Inserção das vacinas desenvolvidas nos cenários necessários à empresa."
            class="col-md-6 order-md-3 order-sm-3 "
          />
          <CardLine
            iconCard="icon-metodo-4.svg"
            titleCard="Análise e feedback"
            contentCard="Observação dos resultados, gerando relatórios para avaliação de acertos e testes A/B."
            class="col-md-6 order-md-4 order-sm-4 "
          />
        </b-row>
      </b-container>
      <CurveSection1 />
    </b-container>
    <b-container fluid class="curve-section-one-a">
      <Section1
        titleSec="Educação Corporativa"
        contentSec="Prepare-se e capacite a sua equipe para as oportunidades que o mercado oferece: conheça nossos treinamentos!"
        btnSec="Agendar Reunião"
        btnSecTo="/contato"
        classAtv=""
        classAtvCTA="d-none"
        imgSec="/icon-treinamentos.svg"
      />
      <CurveSection2 />
    </b-container>
    <b-container fluid class="curve-one-a py-5">
      <b-container class="py-1">
        <b-row class="pb-4 align-items-center d-flex">
          <b-col md="6" class="py-4">
            <b-img src="/icon-more.svg" center fluid width="450"></b-img>
          </b-col>
          <b-col class="py-4">
            <CardW
              md="12"
              titleCardW="Conheça a Ventura!"
              contentCardW="Saiba um pouco mais sobre nossa empresa e entenda nosso DNA."
              btnCardW="Conheça"
              btnCardWTo="/sobre"
            />
            <hr>
            <CardW
              md="12"
              titleCardW="Nossos materiais"
              contentCardW="Precisa de algum conteúdo ou ferramenta para ajudar a inovar? Entre e faça download dos materiais gratuitamente."
              btnCardW="Ver materiais"
              btnCardWTo="/materiais"
            />
          </b-col>
        </b-row>
      </b-container>
      <Curve1 />
    </b-container>
  </div>
</template>

<script>
import Header from '../components/headers/Header1'
import Section1 from '../components/sections/Section1'
import Card from '../components/cards/Card'
import CardText from '../components/cards/CardText'
import CardLine from '../components/cards/CardLine'
import CardW from '../components/cards/CardW'
import Curve1 from '../components/curves/Curve1'
import Curve2 from '../components/curves/Curve2'
import CurveSection1 from '../components/curves/CurveSection1'
import CurveSection2 from '../components/curves/CurveSection2'

export default {
  components: {
    Header,
    Card,
    CardText,
    Curve1,
    Curve2,
    CurveSection1,
    CurveSection2,
    Section1,
    CardLine,
    CardW
  }
}
</script>
