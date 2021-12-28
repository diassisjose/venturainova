<template>
  <div>
    <Header2
      titleHeader="Design Thinking"
      contentHeader="Acelere o seu negócio usando o Design Thinking para entregar melhores resultados e promover a inovação no seu negócio."
      imgHeader="/icon-design-thinking.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="6" class="py-2">
            <b-img src="/dt-01.svg" fluid></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h3 class="text-primary">Benefícios do Design Thinking</h3>
            <b-card-text class="text-dark">O Design Thinking é uma abordagem inovadora que se baseia, principalmente, nas pessoas para promover diversos benefícios como:</b-card-text>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Aproxima a empresa da realidade do cliente
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Facilidade para identificar e entender problemas e desafios
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Promove o engajamento da equipe no processo
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Incentiva a Criatividade
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Fomenta a inovação e o crescimento da empresa
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
                titleCard="Imersão"
                contentCard="Esta é a primeira fase do processo e, uma vez iniciada, a equipe do projeto identifica e se aproxima dos diversos aspectos e contextos de um problema – tanto do ponto de vista da empresa, quanto do cliente final. 
                              A Imersão tem por objetivo aproximar as pessoas interessadas ao contexto do problema, através do levantamento de informações e observações pertinentes."
                class=""
              />
              <Card
                iconCard="/icon-metodo-2.svg"
                titleCard="Análise e Síntese"
                contentCard="Esta fase está voltada à organização e consolidação, de formar visual, das informações e dados levantados durante a Imersão. 
                              A análise e Síntese busca facilitar a identificação quais são as oportunidades e desafios do projeto."
                class=""
              />
              <Card
                iconCard="/icon-metodo-3.svg"
                titleCard="Ideação e Prototipação"
                contentCard="A Ideação se dedica a gerar ideias inovadoras, através de atividades lúdicas e colaborativas que promovem a criatividade e inovação.
                              Já a fase de Prototipação busca auxiliar a validação das ideias geradas, através da criação de um protótipo das melhores ideias identificadas."
                class=""
              />
              <Card
                iconCard="/icon-metodo-4.svg"
                titleCard="Validação e Implementação"
                contentCard="Nesta fase procura-se validar as ideias selecionadas junto às pessoas interessadas e possíveis clientes, com o objetivo de captar a percepção e encontrar possíveis ajustes necessários.
                              A fase de Implementação, realizada por meio de experimentações práticas e análises de resultados, acaba por gerar um conhecimento contínuo ao longo do processo."
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
        title: 'Design Thinking | Ventura - Agentes da Inovação',
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
    },
    methods: {
      scroll () {
        const element = document.getElementById('sec-dt');
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
