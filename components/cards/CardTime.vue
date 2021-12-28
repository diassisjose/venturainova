<template>
  <b-col class="card-body">
    <b-img :src="iconCard" fluid width="60" alt="icon" class="mb-2 "></b-img>
    <h4 class="mt-2 text-white">{{ titleCard }}</h4>
    <p class="text-white">{{ contentCard }}</p>
  </b-col>
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

</style>
