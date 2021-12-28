<template>
  <div>
    <b-container fluid class="curve-two-a ">
      <b-container class="">
        <b-row class="pb-5 px-3 align-items-center d-flex full">
          <b-col md="6" class="py-4">
            <b-img src="/icon-services.svg" fluid center width="450"></b-img>
          </b-col>
          <b-col md="6" class="py-4">
            <h2 class="text-primary">Nascemos da inquietude!</h2>
            <b-card-text class="text-dark pt-2">
              <p>
                Sentimos a necessidade de gerar mudanças, de contribuir e em disseminar o que vivenciamos, acumulamos e estudamos. <br>
                Nosso propósito é efetivado quando produzimos nossas palestras, treinamentos, vídeos, materiais para blogs e e-Books didáticos:
                assim podemos mostrar à que viemos a este mundo!
              </p>
              <PRI
                textButton="Conheça"
                linkButton="#servicos"
                class=""
              />
            </b-card-text>
          </b-col>
        </b-row>
      </b-container>
      <CurveSection1 />
    </b-container>
    
    <b-container fluid class="curve-section-one-a bg-primary" id="servicos">
      <b-container class="py-5 bg-primary px-md-5">
        <b-container class="pb-5 px-md-5">
          <h2 class="text-center pt-5 text-white">Nossas Soluções</h2>
          <p class="text-center text-white pb-4">Conheça os serviços que fornecemos</p>
          <b-row class="py-4 align-items-center d-flex text-white">
            <b-col sm="12" class="col-md-5">
              <b-img src="/icon-design-thinking.svg" center fluid width="400"  alt="icon" class="bg-icon"></b-img>
            </b-col>
            <b-col sm="12" class="col-md-7">
              <h3>Design Thinking</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum consequuntur modi, ipsam quod, fugiat exercitationem veniam qui impedit enim ducimus. Repudiandae magni ex in mollitia dicta explicabo, eum hic voluptatem non, soluta maiores eligendi atque consectetur labore amet debitis!</p>
              <PRI
                textButton="Conheça"
                linkButton="/solucoes/design-thinking"
                class=""
              />
            </b-col>
          </b-row>
          <b-row class="py-4 align-items-center d-flex text-white">
            <b-col sm="12" class="col-md-5 order-md-2 order-sm-1">
              <b-img src="/icon-product-design.svg" center fluid width="400"  alt="icon" class="bg-icon"></b-img>
            </b-col>
            <b-col sm="12" class="col-md-7 order-md-1 order-sm-2">
              <h3>Design de Produtos e Serviços</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum consequuntur modi, ipsam quod, fugiat exercitationem veniam qui impedit enim ducimus. Repudiandae magni ex in mollitia dicta explicabo, eum hic voluptatem non, soluta maiores eligendi atque consectetur labore amet debitis!</p>
              <PRI
                textButton="Conheça"
                linkButton="/solucoes/product-design"
                class=""
              />
            </b-col>
          </b-row>
          <b-row class="py-4 align-items-center d-flex text-white">
            <b-col sm="12" class="col-md-5">
              <b-img src="/icon-innovation.svg" center fluid width="400"  alt="icon" class="bg-icon"></b-img>
            </b-col>
            <b-col sm="12" class="col-md-7">
              <h3>Inovação em Negócios, Produtos e Serviços</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum consequuntur modi, ipsam quod, fugiat exercitationem veniam qui impedit enim ducimus. Repudiandae magni ex in mollitia dicta explicabo, eum hic voluptatem non, soluta maiores eligendi atque consectetur labore amet debitis!</p>
              <PRI
                textButton="Conheça"
                linkButton="/solucoes/innovation"
                class=""
              />
            </b-col>
          </b-row>
          <b-row class="py-4 align-items-center d-flex text-white">
            <b-col sm="12" class="col-md-5 order-md-2 order-sm-1">
              <b-img src="/icon-gamification.svg" center fluid width="400"  alt="icon" class="bg-icon"></b-img>
            </b-col>
            <b-col sm="12" class="col-md-7 order-md-1 order-sm-2">
              <h3>Gamificação de Processos</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum consequuntur modi, ipsam quod, fugiat exercitationem veniam qui impedit enim ducimus. Repudiandae magni ex in mollitia dicta explicabo, eum hic voluptatem non, soluta maiores eligendi atque consectetur labore amet debitis!</p>
              <PRI
                textButton="Conheça"
                linkButton="/solucoes/gamification"
                class=""
              />
            </b-col>
          </b-row>
          <b-row class="py-4 align-items-center d-flex text-white">
            <b-col sm="12" class="col-md-5">
              <b-img src="/icon-business-model.svg" center fluid width="400"  alt="icon" class="bg-icon"></b-img>
            </b-col>
            <b-col sm="12" class="col-md-7">
              <h3>Modelagem da Proposta de Valor</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum consequuntur modi, ipsam quod, fugiat exercitationem veniam qui impedit enim ducimus. Repudiandae magni ex in mollitia dicta explicabo, eum hic voluptatem non, soluta maiores eligendi atque consectetur labore amet debitis!</p>
              <PRI
                textButton="Conheça"
                linkButton="/solucoes/business-model"
                class=""
              />
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <Curve1 />
    </b-container>
  </div>
</template>

<script>
import Header from '../../components/headers/Header1'
import Section1 from '../../components/sections/Section1'
import Card from '../../components/cards/Card'
import CardText from '../../components/cards/CardText'
import CardLine from '../../components/cards/CardLine'
import CardW from '../../components/cards/CardW'
import Curve1 from '../../components/curves/Curve1'
import Curve2 from '../../components/curves/Curve2'
import CurveSection1 from '../../components/curves/CurveSection1'
import CurveSection2 from '../../components/curves/CurveSection2'
import PRI from '../../components/buttons/PRI'

export default {
  head () {
    return {
      title: 'Soluções | Ventura - Agentes da Inovação',
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
    PRI
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
a {
  border-radius: 60px;
}

a:hover {
  .expand-text {
    letter-spacing: 1px;
    transition: 0.6s;
  }
}
.expand-text {
  transition: 0.6s;
}
.icon-bold {
  border: 2px solid;
  border-radius: 30px;
  margin-right: 5px;
}
.board {
  border: 20px solid;
}
.card-service {
  border-radius: 60px;
  border-color: #f2f0f5;
}

.card {
  border: 0;
}
small {
  font-size: 13px;
  padding-top: 3px;
}
.bg-icon {
    max-width: 60%;
    padding-bottom: 20px;
  }
</style>
