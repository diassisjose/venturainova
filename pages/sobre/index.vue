<template>
  <div>
    <Header
      titleHeader="Somos a Ventura!"
      contentHeader="Acreditamos no crescimento e melhoria das empresas através da inovação: vamos propagar essa ideia mundo afora!"
      imgHeader="/icon-sobre.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-2 ">
        <b-row class="pb-5 px-3 align-items-center d-flex ">
          <b-col md="6" class="py-4">
            <b-img src="/icon-story.svg" fluid center width="450"></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h2 class="text-primary">Nascemos da inquietude!</h2>
            <b-card-text class="text-dark pt-2">
              <p>
                Sentimos a necessidade de gerar mudanças, de contribuir e em disseminar o que vivenciamos, acumulamos e estudamos. <br>
                Nosso propósito é efetivado quando produzimos nossas palestras, treinamentos, vídeos, materiais para blogs e e-Books didáticos:
                assim podemos mostrar à que viemos a este mundo!
              </p>
            </b-card-text>
          </b-col>
        </b-row>
      </b-container>
      <CurveSection1 />
    </b-container>
    <b-container fluid class="curve-section-one-a bg-primary">
      <b-container fluid class="py-5 bg-primary">
        <b-container class="pb-5">
          <h2 class="text-center pt-5 text-white">Manifesto</h2>
          <p class="text-center text-white pb-4 mx-auto" style="max-width: 600px">
            Somos comprometidos com a mudança e transformação, que concretizamos quando desenvolvemos 
            soluções centradas no ser humano e que estejam dentro dos interesses das empresa, 
            das pessoas e da sociedade. 
          </p>
          <b-row class="pb-3">
            <Card2
              class="order-md-1 order-sm-2 pb-3 card-extra m-2 shadow text-white"
              cardTitle="Missão"
              cardContent="
                Democratizar a transformação digital para quebrarmos cada vez mais atritos entre consumidores e varejistas.
              "
              cardLink="solucoes/design-thinking"
              colorTxtBtn="text-white"
              iconeCard="/target.svg"
            />
            <Card2
              class="order-md-1 order-sm-2 pb-3 card-extra m-2 shadow text-white"
              cardTitle="Visão"
              cardContent=
              "
                Consolidar-se como a maior plataforma omnichannel da américa latina, sendo reconhecida pela qualidade, 
                performance e atendimento.
              "
              cardLink="solucoes/design-thinking"
              colorTxtBtn="text-white"
              iconeCard="/idea.svg"
            />
            <Card2
              class="order-md-1 order-sm-2 pb-3 card-extra m-2 shadow text-white"
              cardTitle="Valores"
              cardContent=
              "
                Ética, qualidade, transparência, co-criação, conhecimento, agilidade, harmonia e diversidade.
              "
              cardLink="solucoes/design-thinking"
              colorTxtBtn="text-white"
              iconeCard="/map.svg"
            />
          </b-row>
        </b-container>
      </b-container>
      <Curve1 />
    </b-container>
  </div>
</template>

<script>
import Header from '../../components/headers/Header3'
import Section1 from '../../components/sections/Section1'
import Card from '../../components/cards/Card'
import Card2 from '../../components/cards/Card2'
import CardText from '../../components/cards/CardText'
import CardLine from '../../components/cards/CardLine'
import CardW from '../../components/cards/CardW'
import Curve1 from '../../components/curves/Curve1'
import Curve2 from '../../components/curves/Curve2'
import CurveSection1 from '../../components/curves/CurveSection1'
import CurveSection2 from '../../components/curves/CurveSection2'

export default {
  head () {
    return {
      title: 'Sobre a Ventura | Ventura - Agentes da Inovação',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
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
    CardW,
    Card2
  }
}
</script>

<style lang="scss">
.bg-header1 {
  background-image: url("/bg-design-thinking.webp");
    /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
