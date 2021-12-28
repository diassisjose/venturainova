<template>
  <div>
    <Header2
      titleHeader="Projeto de Gamificação"
      contentHeader=
      "
        Explorando o mundo da gamificação e dos jogos corporativos!
      "
      imgHeader="/icon-gamification.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="6" class="py-2">
            <b-img src="/gamification.svg" width="450" fluid></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h3 class="text-primary">Como a Gamificação pode te ajudar?</h3>
            <b-card-text class="text-dark">
              A gamificação é a utilização de psicologia comportamental para moldar comportamentos desejados em seu 
              target, engajando seus stakeholders de maneira efetiva.
            </b-card-text>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Fidelização de Clientes
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Design de Jogos Sérios
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Engajamento de Colaboradores
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Novos Colaboradores
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Motivação de Vendores
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Experiência do Usuário
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
        <p class="text-white text-center text-uppercase">
          Vamos juntos descobrir como aumentar o engajamentos
          dos seus colaboradores nos treinamentos corporativos
        </p>
        <b-row>
          <b-col md="3">
          </b-col>
          <b-col md="6">
            <b-row>
              <Card
                iconCard="/icon-metodo-1.svg"
                titleCard="Diagnóstico do público interno"
                contentCard=
                "
                  O primeiro passo para implementar um projeto de gamificação consistente e, claro, efetivo é 
                  realizar um diagnóstico do público interno. Ao considerar o perfil dos usuários que vão utilizar 
                  a plataforma, será possível conhecer melhor as limitações, comportamentos, referências, habilidades 
                  e expectativas do grupo.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-2.svg"
                titleCard="Definação dos propósitos"
                contentCard=
                "
                  Parte do processo da implantação da gamificação é definir o objetivo da ação: o 
                  game será destinado para o treinamento de novos colaboradores? Para alavancar as vendas de 
                  um determinado produto ou serviço? Ou para um setor específico? Dessa forma, é mais fácil 
                  planejar seu funcionamento, quais informações deverão ser utilizadas e quais não serão 
                  relevantes, entre outras questões.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-3.svg"
                titleCard="Definição de Metas para gamificação"
                contentCard=
                "
                  Não basta apenas saber qual o objetivo da gamificação. É essencial também definir metas reais e, 
                  claro, tangíveis. Afinal, o intuito do projeto é aprimorar a organização como um todo. Nesse 
                  sentido, aposte em testes com um pequeno grupo do alto escalão administrativo, antes de liberar o 
                  game para toda a equipe. Assim, será possível tornar o jogo mais eficiente, corrigindo falhas 
                  iniciais.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-4.svg"
                titleCard="Implantação e Mensuração de Resultados"
                contentCard=
                "
                  A mensuração dos resultados é responsável pelo sucesso do projeto e também vai proporcionar o 
                  devido respaldo para tomar decisões futuras. Por isso, não pense duas vezes para solicitar o 
                  feedback dos colaboradores. Peça para que eles sejam sinceros e digam o que acharam do game, 
                  entendendo como eles se sentem em relação ao novo projeto.
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
        title: 'Gamificação | Ventura - Agentes da Inovação',
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
