<template>
  <div>
    <Header2
      titleHeader="Gestão da Inovação"
      contentHeader=
      "
        Integrar a gestão do conhecimento e da inovação ao seu negócio é o mais
        rentável investimento que sua empresa pode fazer.
      "
      imgHeader="/icon-innovation.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="6" class="py-2">
            <b-img src="/innovation.svg" width="450" fluid></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h3 class="text-primary">Inovação prática e ágil</h3>
            <b-card-text class="text-dark">
              Ajudamos sua empresa a desenvolver 
              a capacidade de gestão da inovação, ou mesmo a gerar soluções rápidas com resultados 
              significativos, seja em sua área de atuação imediata ou em territórios ainda inexplorados. 
              A Gestão da Inovação direcionada a produtos, serviços, processos, estratégias ou modelos de 
              negócio passará a ser dominada por sua organização.
            </b-card-text>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Modelar e executar estratégias que gerem impacto
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Antecipar-se as necessidades dos seus clientes
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Desenvolver um Mindset e técnicas para encontrar novas ideias para o seu negócio​
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Estruturar um Plano Estratégico de Inovação​
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Promover melhorias nos processos e reduzir custos​
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Criar produtos e serviços inovadores​
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
                titleCard="Primeiro nível"
                contentCard=
                "
                  É o aprimoramento do que já está funcionando na sua empresa, esse nível está muito interligado 
                  com o conceito de inovação incremental. Será que o que sua empresa faz já está quase 100% otimizado? 
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-2.svg"
                titleCard="Segundo nível"
                contentCard=
                "
                  Atacar novos negócios com base em mercados que a empresa já domina. Então, nesse nível você precisa
                  entender quais são os mercados que são semelhantes ou iguais aos que você já atua e pensar em 
                  maneiras de explorar essas novas possibilidades, por isso é importante o domínio do mercado 
                  principal para poder entrar nessa fase.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-3.svg"
                titleCard="Terceiro nível"
                contentCard=
                "
                  Essa é a fase das hipóteses a serem testadas, ideias mais arriscadas que precisam ser validadas. 
                  O investimento feito para ideias desse nível é mais voltado para a experimentação e uma vez que as 
                  ideias dessa fase são validadas, podem se tornar os novos produtos que vão ser decisivos para o 
                  futuro da sua empresa.
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
        title: 'Gestão da Inovação | Ventura - Agentes da Inovação',
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
