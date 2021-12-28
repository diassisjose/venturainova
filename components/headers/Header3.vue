<template>
  <b-container class="curve-one-a" fluid >
    <b-container class="px-md-5">
      <b-row class="align-items-center d-flex " style="height: 100vh;">
        <b-col lg="5" type="primary" variant="primary" class="">
          <b-img center fluid class="rounded mx-auto d-block d-sm-none" :src="imgHeader" width="180"></b-img>
          <h1 class="text-white ">{{ titleHeader }}</h1>
          <p class="p-head text-white">{{ contentHeader }}</p>
          <br>
        <br>
        </b-col>
        <b-col lg="7" center class="text-center d-none d-sm-block">
          <b-img center class="rounded mx-auto d-block" :src="imgHeader" width="480"></b-img>
        </b-col>
      </b-row>
    </b-container>
    <Curve1 />
  </b-container>
</template>

<script>
  import Curve1 from '../curves/Curve1'
  export default {
    components: {
      Curve1
    },
    props: [
      'titleHeader',
      'contentHeader',
      'imgHeader'
    ]
  }
</script>

<style lang="scss" scoped>
.bg-header1 {
  background-image: url("/bg-design-thinking.webp");
    /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 540px) {
  .bg-header1 {
    background-image: none;
    background-color: #5e0eb9;
  }
}
</style>
