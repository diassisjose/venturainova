<template>
  <div>
    <Header
      titleHeader="Contato Enviado!"
      contentHeader="Recebemos seu contato, e logo mais nosso atendimento entrará em contato."
      imgHeader="/email.svg"
      titleBtn="ir para Home"
      linkBtn="/"
      class="bg-header1"
    />
  </div>
</template>

<script>
import Header from '../../components/headers/Header2'
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
      title: 'Obrigado | Ventura - Agentes da Inovação',
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
