<template>
  <b-card class="card-service px-4 pt-4 board">
    <h3 class="text-primary">{{ titleCardW }}</h3>
    <b-card-text class="text-grey">{{ contentCardW }}</b-card-text>
    <PRI
      :textButton="btnCardW"
      :linkButton="btnCardWTo"
    />
  </b-card>
</template>

<script>
  import PRI from '../buttons/PRI'
  export default {
    components: {
      PRI
    },
    props: [
      'titleCardW',
      'contentCardW',
      'btnCardW',
      'btnCardWTo'
    ]
  }
</script>

<style lang="scss" scoped>
.icon-bold {
  border: 2px solid;
  border-radius: 30px;
  margin-right: 5px;
}
.card-service {
  border-color: #f2f0f500;
  background-color: #ffffff00;
}
</style>
