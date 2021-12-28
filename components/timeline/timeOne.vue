<template>
  <div class="pb-5">
    <div class="container py-2">
      <!-- timeline item 1 -->
      <div class="row no-gutters">
          <div class="col-sm"> <!--spacer--> </div>
          <!-- timeline item 1 center dot -->
          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
              <div class="row h-50">
                  <div class="col">&nbsp;</div>
                  <div class="col">&nbsp;</div>
              </div>
              <h5 class="m-2">
                  <span class="badge badge-pill bg-white border"> &nbsp;</span>
              </h5>
              <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
              </div>
          </div>
          <!-- timeline item 1 event content -->
          <div class="col-sm py-2">
              <div class="card shadow ">
                  <Card
                    iconCard="/icon.svg"
                    titleCard="Título"
                    contentCard="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officiis nemo iure similique ipsum repudiandae omnis harum est fuga rerum!"
                  />
              </div>
          </div>
      </div>
      <!--/row-->
      <!-- timeline item 2 -->
      <div class="row no-gutters">
          <div class="col-sm py-2">
              <div class="card border-success shadow">
                <Card
                  iconCard="/icon.svg"
                  titleCard="Título"
                  contentCard="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officiis nemo iure similique ipsum repudiandae omnis harum est fuga rerum!"
                />
              </div>
          </div>
          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
              <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
              </div>
              <h5 class="m-2">
                  <span class="badge badge-pill bg-white border">&nbsp;</span>
              </h5>
              <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
              </div>
          </div>
        <div class="col-sm"> <!--spacer--> </div>
        </div>
        <!--/row-->
        <!-- timeline item 3 -->
        <div class="row no-gutters">
            <div class="col-sm"> <!--spacer--> </div>
            <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                    <span class="badge badge-pill bg-white border">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <div class="col-sm py-2">
                <div class="card shadow">
                  <Card
                    iconCard="/icon.svg"
                    titleCard="Título"
                    contentCard="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officiis nemo iure similique ipsum repudiandae omnis harum est fuga rerum!"
                  />
                </div>
            </div>
        </div>
        <!--/row-->
        <!-- timeline item 4 -->
        <div class="row no-gutters">
            <div class="col-sm py-2">
                <div class="card shadow">
                    <Card
                      iconCard="/icon.svg"
                      titleCard="Título"
                      contentCard="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officiis nemo iure similique ipsum repudiandae omnis harum est fuga rerum!"

                    />
                </div>
            </div>
            <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                    <span class="badge badge-pill bg-white border">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <div class="col-sm"> <!--spacer--> </div>
        </div>
        <!--/row-->
    </div>
  </div>
</template>

<script>
  import Card from '../cards/CardTime'
  export default {
    components: {
      Card
    }

  }
</script>

<style lang="scss" scoped>
.card {
  border: 0;
  padding: 20px;
  border-radius: 30px;
}

.border-right {
  border-right: 1px solid #e8dff144 !important;
}
</style>
