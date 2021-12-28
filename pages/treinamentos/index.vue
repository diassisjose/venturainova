<template>
  <div>
    <Header
      class="bg-header1"
      titleHeader="Design Thinking"
      contentHeader="Acelere o seu negócio usando o Design Thinking para entregar melhores resultados e promover a inovação no seu negócio."
      imgHeader="/icon-home.svg"
    />
    <b-container fluid class="curve-two-a py-5" id="solucoes">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="4">
            <CardCurso 
              class="mx-2 "
              bg="/01.jpg"
            />
          </b-col>
          <b-col md="4">
            <CardCurso class="mx-2 " />
          </b-col>
          <b-col md="4">
            <CardCurso class="mx-2 " />
          </b-col>

        </b-row>
      </b-container>
      <Curve2 />
    </b-container>
    <b-container fluid class="curve-section-one-a">
      <Section1
        titleSec="Educação Corporativa"
        contentSec="Prepare-se e capacite a sua equipe para as oportunidades que o mercado oferece."
        btnSec="Conhecer Cursos"
        btnSecTo="/"
        classAtv="d-none"
        classAtvCTA="d-none"
      />
      <CurveSection2 />
    </b-container>
    <b-container fluid class="curve-one-a py-5">
      <b-container class="py-5">
        <b-row class="pb-4">
          <b-col md="6" class="py-4">
            <b-img src="/head-undraw.svg" fluid></b-img>
          </b-col>
          <b-col class="py-4">
            <CardW
              md="12"
              titleCardW="Teste"
              contentCardW="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis mollitia accusamus similique unde labore sed culpa doloribus dignissimos consequuntur odio?"
              btnCardW="Faça download"
              btnCardWTo="/asdsad"
            />
            <hr>
            <CardW
              md="12"
              titleCardW="Teste"
              contentCardW="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis mollitia accusamus similique unde labore sed culpa doloribus dignissimos consequuntur odio?"
              btnCardW="Faça download"
              btnCardWTo="/asdsad"
            />
          </b-col>
        </b-row>
      </b-container>
      <Curve1 />
    </b-container>
  </div>
</template>

<script>
import Header from '../../components/headers/Header1'
import Section1 from '../../components/sections/Section1'
import CardCurso from '../../components/cards/CardCursos'
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
      title: 'Treinamentos | Ventura - Agentes da Inovação',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  components: {
    Header,
    CardCurso,
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

