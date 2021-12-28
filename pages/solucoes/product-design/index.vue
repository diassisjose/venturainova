<template>
  <div>
    <Header2
      titleHeader="Design de Produtos e Serviços"
      contentHeader=
      "
        Como usar o potencial dos colaboradores e clientes para construir projetos relevantes, 
        eficientes e que entregam aquilo que prometem.
      "
      imgHeader="/icon-product-design.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="6" class="py-2">
            <b-img src="/design-product.svg" width="450" fluid></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h3 class="text-primary">Design de Produtos e Serviços: por que utilizar?</h3>
            <b-card-text class="text-dark">
              Tanto no desenvolvimento de novos Produtos quanto em Serviços precisam ser pensados para 
              favorecer o usuário e atender às suas expectativas e aos seus desejos.
              É aqui que entra a utilização do design como ferramenta nesse desenvolvimento.<br>
            </b-card-text>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Centrado no usuário: as pessoas estão no centro do processo.
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Transparência: clientes devem conseguir enxergar todo o processo que será cria
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Cocriação: envolve várias pessoas em seu desenvolvimento
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Sequencial: os serviços são visualizados em sequência ou elementos-chave.
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Holístico: leva em consideração todas as partes de um negócio, incluindo seu contexto externo.
            </p>
          </b-col>
        </b-row>
        <b-col>
          <Counter />
        </b-col>
      </b-container>
      <CurveSection1 />
    </b-container>
     <b-container id="sec-dt" fluid class="bg-primary curve-section-one-a py-5 ">
      <b-container class="py-5 ">
        <h3 class="text-white text-center py-3">Fases da Metodologia</h3>
        <p class="text-white text-center text-uppercase">Conheça nossa metodologia para tornar a sua empresa mais competitiva e inovadora!</p>
        <b-row>
          <b-col md="3">
          </b-col>
          <b-col md="6">
            <b-row>
              <Card
                iconCard="/icon-metodo-1.svg"
                titleCard="Personas"
                contentCard=
                "
                  Esse é um conceito parecido com o utilizado em marketing. Uma persona é o sumário do tipo de 
                  cliente e segmento que você deseja atender. Utilizamos a persona para nos referirmos às 
                  motivações, aos desejos, às preferências e aos valores do usuário para quem desenvolvemos um 
                  serviço. É uma abordagem importante, já que pretendemos desenvolver algo em torno do usuário e 
                  pensando sob sua perspectiva.
                
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-2.svg"
                titleCard="Jornada do consumidor"
                contentCard=
                "
                  Neste ponto, o design de serviços se parece um pouco com a experiência do usuário. Esse 
                  conceito busca entender as melhores e as piores partes que têm interseção com o cliente. 
                  Sua jornada começa antes mesmo de ele se envolver com o negócio e precisa ser levada em conta
                   na hora de desenhar os processos de um serviço.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-3.svg"
                titleCard="Blueprinting"
                contentCard=
                "
                  Por fim, este conceito ultrapassa a jornada do consumidor e procura entender um cliente de 
                  forma holística, incluindo os processos que ajudam a criar e a entregar experiências.
                "
                class=""
              />
            </b-row>
          </b-col>
          <b-col md="3">
          </b-col>
        </b-row>
      </b-container>
      <Curve2 />
    </b-container>
    <b-container fluid class="curve-one-a py-5">
      <b-container class="py-5 ">
        <ContactForm />
      </b-container>
      <Curve1/>
    </b-container>
  </div>
</template>

<script>
  import Card from '../../../components/cards/CardTime'
  import Header2 from '../../../components/headers/Header2'
  import Timeline from '../../../components/timeline/timeOne'
  import Curve1 from '../../../components/curves/Curve1'
  import Curve2 from '../../../components/curves/Curve2'
  import CurveSection1 from '../../../components/curves/CurveSection1'
  import CurveSection2 from '../../../components/curves/CurveSection2'
  import ContactForm from '../../../components/forms/form1'

  export default {
    head () {
      return {
        title: 'Design de Produtos e Serviços | Ventura - Agentes da Inovação',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    components: {
      Card,
      Header2,
      Timeline,
      Curve1,
      Curve2,
      CurveSection1,
      CurveSection2,
      ContactForm
    }
  }
</script>


<style lang="scss" scoped>
.card {
  border: 0;
  padding-top: 20px;
  border-radius: 30px;
}

.border-right {
  border-right: 1px solid #e8dff144 !important;
}
</style>
