<template>
  <b-container fluid class="py-5 bg-primary">
    <b-container class="pb-5">
      <b-row>
        <b-col md="6" class="align-items-center d-flex py-4 order-md-1 order-sm-2">
          <b-col>
            <h3 class="text-white">{{ titleSec }}</h3>
            <b-card-text class="text-white">{{ contentSec }}</b-card-text>
            <PRI
              :textButton=" btnSec "
              :linkButton=" btnSecTo "
              :class="classAtv"
            />
            <CTA
              textButton="Marcar eunião"
              linkButton="/contato"
              :class="classAtvCTA"
            />
          </b-col>
        </b-col>
        <b-col md="6" class="py-4 order-md-2 order-sm-1">
          <b-img center :src="imgSec" width="400" fluid></b-img>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import PRI from '../buttons/PRI'
  import CTA from '../buttons/CTA'
  export default {
    components: {
      PRI,
      CTA
    },
    props: [
      'titleSec',
      'contentSec',
      'btnSec',
      'btnSecTo',
      'classAtv',
      'classAtvCTA',
      'imgSec'
    ]
  }
</script>

<style lang="scss" scoped>

</style>
