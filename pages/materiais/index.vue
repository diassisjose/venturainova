<template>
  <div>
    <Header
      titleHeader="Materiais Gratuitos"
      contentHeader="Download de frameworks, eBooks e links para vídeos de referências que recomendamos: uma breve curadoriaa da inovação!"
      imgHeader="/icon-files.svg"
      titleBtn="Saiba mais"
      class="bg-header1"
    />
    
    <b-container fluid class="curve-one-b py-5">
      <b-container class="py-5 ">
        <h3 class="text-primary text-center">Método de Trabalho</h3>
        <p class="text-grey text-center text-uppercase">Conheça nossa metodologia para tornar a sua empresa mais competitiva e inovadora!</p>

        <b-row class="pb-5">
            <CardLine
              iconCard="icon-file.svg"
              titleCard="Canvas de Modelo de Negócio"
              contentCard="Testedfgdfg dafgh dfhdfh dsfh sdfh sdfhs dfhdsf dsf dfhdsfh sdfh sdfhdsfhsdfhdfs "
              class="col-md-6 order-md-1 order-sm-1 "
            />
            <CardLine
              iconCard="icon-play.svg"
              titleCard="Testeste"
              contentCard="Testedfgdfg dafgh dfhdfh dsfh sdfh sdfhs dfhdsf dsf dfhdsfh sdfh sdfhdsfhsdfhdfs "
              class="col-md-6 order-md-2 order-sm-2 "
            />
            <CardLine
              iconCard="icon-file.svg"
              titleCard="eBook Design Thinking"
              contentCard="Testedfgdfg dafgh dfhdfh dsfh sdfh sdfhs dfhdsf dsf dfhdsfh sdfh sdfhdsfhsdfhdfs "
              class="col-md-6 order-md-3 order-sm-3 "
            />
            <CardLine
              iconCard="icon-file.svg"
              titleCard="eBook Gamificação"
              contentCard="Testedfgdfg dafgh dfhdfh dsfh sdfh sdfhs dfhdsf dsf dfhdsfh sdfh sdfhdsfhsdfhdfs "
              class="col-md-6 order-md-4 order-sm-4 "
            />
        </b-row>
      </b-container>
      <CurveSection1 />
    </b-container>
    <b-container fluid class="curve-section-one-a">
      <Section1
        titleSec="Educação Corporativa"
        contentSec="Prepare-se e capacite a sua equipe para as oportunidades que o mercado oferece."
        btnSec="Download"
        btnSecTo="/treinamentos"
        classAtv=""
        classAtvCTA="d-none"
      />
      <Curve1 />
    </b-container>
  </div>
</template>

<script>
import Header from '../../components/headers/Header3'
import Section1 from '../../components/sections/Section1'
import Card from '../../components/cards/Card'
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
      title: 'Materiais | Ventura - Agentes da Inovação',
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
    CardW
  }
}
</script>

<style lang="scss">
.bg-header1 {
  background-image: url("/bg-404.webp") !important;
    /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
