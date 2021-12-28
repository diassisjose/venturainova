<template>
  <b-navbar id="nav" class="shadow " sticky toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand href="/">
        <b-img class="img-resized py-md-2" src="/logo-wt.svg" width="200"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/sobre">A Ventura</b-nav-item>
          <b-nav-item href="/solucoes">Soluções</b-nav-item>
          <!-- <b-nav-item href="/treinamentos">Treinamentos</b-nav-item> -->
          <b-nav-item href="/materiais">Materiais</b-nav-item>
        </b-navbar-nav>
        <CTA
          class="mx-2"
          textButton="Marcar Reunião"
          linkButton="/contato"
        />
        <!-- Modelagem de Negócios -->
        <!-- Desenvolvimento de Produtos & Serviços -->
        <!-- Inovação em Negócios, Produtos e Serviços -->
        <!-- Gamificação de Processos -->
        <!-- Modelagem de Proposta de Valor -->
        <!-- Educação Corporativa -->
        <!-- Workshops Educativos -->
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import CTA from '../buttons/CTA'
  export default {
    name: 'Navbar',
    components: {
      CTA
    }
  }
</script>

<style lang="scss" scoped>
.dropdown:hover>.b-nav-dropdown{
  display: block;
  margin-top: -7px;
}
.nav-link {
  color: rgba(255, 255, 255, 0.89) !important;
  font-weight: 400;
  font-size: 15px;
}
.dropdown-item{
    font-size: 14px;
  }
.navbar-toggler {
  border-color: #00000000;
}

.dropdown-item {
  padding: 9px 14px;
}

.dropdown-menu{
  padding: 5px 0 0 0;
  margin: 0;

}

.dropdown>.dropdown-menu {
  display: none;
  border: none;
  border-radius: 0;
  box-shadow: 0 15px 1em #3333334f;
}

.dropdown-item:hover {
  background-color: var(--v3);
  color: var(--b1);
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

</style>
