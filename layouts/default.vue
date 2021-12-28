<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav/Navbar'
import Footer from '../components/footer/Footer1'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

