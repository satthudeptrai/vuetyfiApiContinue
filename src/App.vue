<template>
  <v-app>
    <div>
      <div class="app">
        <HeaderComponent />
        <LeftMenu />
        <div class="container-right">
          <router-view />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import LeftMenu from "./views/LeftMenu/index.vue";
import HeaderComponent from "./views/Header/index.vue";
import '@/assets/color.scss';
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    LeftMenu,
    HeaderComponent,
  },
};
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  z-index: 1;
  .container-right {
    position: absolute;
    top: 40px;
    left: 266px;
    width: calc(100vw - 266px);
  }
}
</style>
