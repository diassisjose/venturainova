<template>
  <div>
    <Header
      titleHeader="Ops..."
      contentHeader="Infelizmente essa página foi abduzida... Em breve consertaremos! Enquanto isso, volte para nossa Home"
      imgHeader="/icon-404.svg"
      titleBtn="Voltar para HOME"
      linkBtn="/"
      class="bg-header1"
    />
  </div>
</template>

<script>
import Header from '../components/headers/Header2'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.bg-header1 {
  background-image: url("/bg-404.webp");
}
</style>
