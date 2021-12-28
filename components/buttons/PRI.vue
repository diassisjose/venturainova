<template>
  <div>
    <b-button class="btn-PRI " :to="linkButton" role="button">
        <b-row class="ml-0">
          {{ textButton }}
          <b-icon-arrow-right-short class="ml-2 icon-bold"></b-icon-arrow-right-short>
        </b-row>
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:
      [
        "textButton",
        "linkButton"
      ]

  }
</script>

<style lang="scss" scoped>
.btn-PRI {
  padding: 12px 25px !important;
  border: 0;
  border-radius: 50px;
  background-image: linear-gradient(to bottom right, rgb(0, 202, 84), rgb(0, 108, 196));
  transition: 1s;
}
.btn-PRI:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.178), 0 6px 20px 0 rgba(0, 0, 0, 0.288);
  transition: 0.3s;
  background-image: linear-gradient(to bottom right, rgb(0, 197, 105), rgb(45, 161, 93));
}
.icon-bold {
  border: 2px solid;
  border-radius: 30px;
  margin-right: 5px;
}
</style>
