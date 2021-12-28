<template>
  <div>
    <Header2
      titleHeader="Design de Negócio"
      contentHeader="Modele e valide sua ideia de negócio ou empresa na criação, diferenciação e inovação para o mercado."
      imgHeader="/icon-business-model.svg"
      titleBtn="Saiba mais"
      linkBtn="#sec-dt"
      class="bg-header1"
    />
    <b-container fluid class="curve-two-a py-5">
      <b-container class="py-5 ">
        <b-row class="pb-5">
          <b-col md="6" class="py-2">
            <b-img src="/business.svg" width="450" fluid></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h3 class="text-primary">Por que usar a Modelagem de Negócios?</h3>
            <b-card-text class="text-dark">Ao utilizar a Modelagem de Negócios podemos avaliar sua ideia e a execução da mesma, diagnosticando sua viabilidade, validação e se há necessidade de pivotação.</b-card-text>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Avaliar o grau de interesse do público com o serviço ou produto fornecido
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Gerar análise sobre processos como logística, comunicação e estrutura interna
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Levantamento de investimentos, retornos e custos iniciais
            </p>
            <p class="text-dark">
              <b-icon-check-circle class="text-orange text-primary mr-2 icon-bold"></b-icon-check-circle>
              Gera economia de tempo e desenvolvimento dos processos da empresa
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
                contentCard=
                "
                  A Imersão tem por objetivo aprofundar o conhecimento sobre a área de atuação do futuro negócio,
                  bem sintetizar informações pertinentes ao mercado e necessidades iniciais.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-2.svg"
                titleCard="Preenchimento do Canvas"
                contentCard=
                "
                  Agora que entendemos mais sobre a ideia de negócio iremos inserir as nuances dessa ideia dentro do
                  Canvas do Modelo de Negócio, mapeando todos os pontos pertinentes ao processo de criação e formatação
                  da Ideia de Negócio.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-3.svg"
                titleCard="Validação | Pivotação"
                contentCard=
                "
                  A Validação se dá quando partimos para a pesquisa da Ideia de Negócio com o seu Público Alvo,
                  assim podemos entender se esse público compreende o que é fornecido, qual a demanda ou quais
                  são as críticas existentes ao fornecimento. Estando tudo de acordo, prosseguimos para a próxima
                  etapa. Caso não esteja, entramos na Pivotação: fase onde conflitamos o que queremos fornecer com os
                  insumos e opiniões fornecidas pelo público, voltando novamente ao Canvas e Validando posteriormente.
                "
                class=""
              />
              <Card
                iconCard="/icon-metodo-4.svg"
                titleCard="Desenvolvimento do MVP"
                contentCard=
                "
                  Aqui iniciamos a aplicação do Modelo de Negócio com seu formato mínimo, gerando KPI's e mapeando
                  resultados. Assim podemos mensurar o crescimento e adaptações necessárias para o desenvolvimento
                  do negócio à pleno vapor!
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
        title: 'Modelagem de Negócios | Ventura - Agentes da Inovação',
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
