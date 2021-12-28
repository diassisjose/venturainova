<template>
  <b-container class="curve-one-a" fluid >
    <b-container class="px-md-5">
      <b-row class="align-items-center d-flex px-md-5 full" >
        <b-col lg="5" type="primary" variant="primary">
          <b-img center fluid class="rounded mx-auto d-block d-sm-none" :src="imgHeader" width="180"></b-img>
          <h1 class="text-white">{{ titleHeader }}</h1>
          <p class="p-head text-white w-md-75">{{ contentHeader }}</p>
          <PRI
            :textButton="  titleBtn "
            :linkButton=" linkBtn "
            class="sm-center"
          />
          <br>
          <br>
        </b-col>
        <b-col lg="7" center class="text-center d-none d-sm-block">
          <b-img center class="rounded mx-auto d-block" :src="imgHeader" fluid width="450"></b-img>
        </b-col>
      </b-row>
    </b-container>
    <Curve1 />
  </b-container>
</template>

<script>
  import Curve1 from '../curves/Curve1'
  import PRI from '../buttons/PRI'
  export default {
    components: {
      Curve1,
      PRI
    },
    props: [
      'titleHeader',
      'contentHeader',
      'imgHeader',
      'titleBtn',
      'linkBtn'
    ]
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 540px) {
  .bg-header1 {
    background-image: none;
    background-color: #5e0eb9;
  }
}
</style>
