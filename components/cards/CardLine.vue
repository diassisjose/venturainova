<template>
  <b-card class="card-service px-4 pt-4 board">
    <b-col md="3" class="px-0 d-block d-sm-none">
      <b-img class="pb-2 m-0 pr-0" :src="'/'+iconCard" width="70" alt="icon"></b-img>
    </b-col>
    <b-row>
      <b-col md="3" class="d-none d-sm-block img-card-line">
        <b-img class="pb-2 " :src="'/'+iconCard" alt="icon"></b-img>
      </b-col>
      <b-col>
        <h4 class="text-primary mb-3">{{ titleCard }}</h4>
        <b-card-text class="text-grey">{{ contentCard}}</b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    props: [
      'iconCard',
      'titleCard',
      'contentCard'
    ]
  }
</script>

<style lang="scss" scoped>
.board {
  border: 0;
}
.card-service {
  border-radius: 60px;
  border-color: #f2f0f5;
  background-color: #ffffff00;
}
.img-card-line {
  max-width: 100px;
}
</style>
