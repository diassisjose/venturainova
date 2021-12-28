<template>
  <b-form
    name="contato"
    method="POST"
    action="/obrigado"
    netlify
    netlify-honeypot="bot-field"
    data-netlify="true"
    class="pb-5"
  >
    <input type="hidden" name="form-name" value="contato" />
    <b-col>

      <b-row class="align-items-center d-flex">

        <b-col md="7" class="py-5">
          <b-img src="/icon-contact.svg" fluid width="350"></b-img>
          <h2 class="text-primary">Vamos conversar!</h2>
          <p class="text-grey w-75">Entre com seus dados e vamos agendar nossa reunião de alinhamento: queremos entender suas demandas, dores e necessidades. Assim podemos gerar as melhores soluções, otimizando a performance dos seus resultados.</p>
        </b-col>
        <b-col md="5" class="">
          <b-card class="px-md-3 py-md-3 px-sm-4 py-sm-3 px-xs-4 py-xs-3 shadow">
            <hr>
            <div class="form-group ">
              <label class="text-white small text-uppercase">Empresa:</label>
              <b-form-input
                name="Empresa"
                placeholder="Nome da Empresa"
                v-model="form.company"
                required
              ></b-form-input>
            </div>
            <div class="form-group ">
              <label class="text-white small text-uppercase">Responsável:</label>
              <b-form-input
                name="Responsável"
                placeholder="Seu nome"
                v-model="form.nameContact"
                required
              ></b-form-input>
            </div>
            <div class="form-group ">
              <label class="text-white small text-uppercase">Email:</label>
              <b-form-input
                name="Email"
                placeholder="Seu email de contato"
                v-model="form.emailContact"
                required
              ></b-form-input>
            </div>
            <div class="form-group ">
              <label class="text-white small text-uppercase">Telefone:</label>
              <b-form-input
                name="Telefone"
                placeholder="Empresarial ou Pessoal"
                v-model="form.phoneContact"
                required
              ></b-form-input>
            </div>
            <b-button
              block
              class="btn-CTA my-4"
              type="submit"
            >
              ENVIAR
            </b-button>
            <hr>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          company: '',
          nameContact: '',
          emailContact: '',
          phoneContact: ''
        }
      }
    },
    methods: {
      onSubmit(ev) {
        this.form = ev.target.value;
      }
    }
  }
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 3px;
}
.form-control {
  height: calc(1.9em + 0.75rem + 2px);
  border-radius: 12px;
  border: 0;
  font-size: 15px;
}
.form-group {
  margin-bottom: 8px;
}

.btn-PRI{
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
.icon-bold {
  border: 2px solid;
  border-radius: 30px;
  margin-right: 5px;
}
.card {
  border-radius: 35px;
  background: #5e0eb9;
}
hr {
  border: 10px solid #5e0eb900;
}
.small {
  font-size: 11px;
}
</style>
