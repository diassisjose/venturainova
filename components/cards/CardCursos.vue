<template>
  <nuxt-link class="card-service pt-4 board" to="/">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 rounded-4"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" block variant="primary">Go somewhere</b-button>
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
  &:hover {
        .expand-text {
          letter-spacing: 1px;
          transition: 0.6s;
        }
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
