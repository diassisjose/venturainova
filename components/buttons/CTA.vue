<template>
  <div>
    <b-button :class="'btn-CTA '+active" :href="linkButton">{{ textButton }}</b-button>
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
        "linkButton",
        "active"
      ]

  }
</script>

<style lang="scss" scoped>
.btn-CTA {
  padding: 12px 25px !important;
  border: 0;
  border-radius: 50px;
  background-image: linear-gradient(to bottom right, rgb(250, 150, 0), rgb(255, 81, 0));
  transition: 1s;
}
.btn-CTA:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.178), 0 6px 20px 0 rgba(0, 0, 0, 0.288);
  transition: 0.3s;
  background-image: linear-gradient(to bottom right, rgb(255, 94, 0), rgb(255, 94, 0));
}
</style>
