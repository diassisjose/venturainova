<template>
  <b-container fluid class="bg-grey-light p-5 text--white">
    <b-container>
      <b-row class="my-3">
        <b-col md="4">
          <a href="/">
            <b-img width="240" fluid center src="/logo-bk.svg"></b-img>
          </a>
        </b-col>

        <b-col md="4" class="my-3">
          <h5 class="text-primary">Sobre a Ventura</h5>
          <p class="text-grey">Nosso compromisso é gerar inovação e acessibilidade à metodologias e estratégias de inovação, seja para comunidades, empresas e startups.</p>
          <b-row class="m-1">
            <a href="https://www.facebook.com/venturainovacao" target="_blank">
              <b-img width="30" class="mr-1" src="/icon-facebook.svg" ></b-img>
            </a>
            <a href="https://www.instagram/venturainova" target="_blank">
              <b-img width="30" class="mr-1" src="/icon-instagram.svg"></b-img>
            </a>
            <a href="https://www.linkedin.com/company/ventura-inova" target="_blank">
              <b-img width="30" class="mr-1" src="/icon-linkedin.svg"></b-img>
            </a>
          </b-row>
        </b-col>
        <b-col md="4" class="my-3">
          <h5 class="text-primary">Contato</h5>
          <a class="text-grey" href="tel:+55-38-3015-1700">(38) 3015-1700</a><br>
          <a class="text-grey" href="mailto:contato@venturainova.me">contato@venturainova.me</a>

          <p class="text-grey">Rua do Guarani, 201 - Montes Claros | Minas Gerais | 39403-066</p>
        </b-col>
      </b-row>
    </b-container>

  </b-container>
</template>

<script>
  export default {
    name: 'Footer',
    components: {
    }

  }
</script>

<style lang="scss" scoped>
h5 {
  font-weight: 800;
}
</style>
