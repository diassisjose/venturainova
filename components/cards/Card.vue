<template>
  <nuxt-link class="card-service px-4 pt-4 board"   :to="cardLink">
    <b-card >
      <b-img :src="iconeCard" width="50" alt="icon" class="bg-icon"></b-img>
      <br/><br/>
      <h4>{{ cardTitle }}</h4>
      <b-card-text>{{ cardContent }}</b-card-text>
      <b-row :class="'ml-0 expand-text '+colorTxtBtn">
        <b-icon-arrow-right-short class="h4 icon-bold"></b-icon-arrow-right-short>
        <small>CONHEÇA MAIS...</small>
      </b-row>
    </b-card>
  </nuxt-link>

</template>

<script>
  export default {
    props: [
      'cardTitle',
      'cardContent',
      'cardLink',
      'colorTxtBtn',
      'iconeCard'
    ]

  }
</script>

<style lang="scss" scoped>
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
</style>
