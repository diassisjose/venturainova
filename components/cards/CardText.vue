<template>
  <b-card class="card-service text-center px-4 pt-4 board">
    <b-img class="pb-2" src="/icon.svg" width="50" alt="icon"></b-img>
    <b-card-text class="text-grey">NOSSAS SOLUÇÕES</b-card-text>
    <h3 class="text-primary">Do que você precisa?</h3>

  </b-card>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
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
  background-color: #ffffff00;
}
.expand-text {
  transition: 0.6s;
}
.expand-text:hover {
  letter-spacing: 1px;
  transition: 0.6s;
}
small {
  font-size: 14px;
}
</style>
