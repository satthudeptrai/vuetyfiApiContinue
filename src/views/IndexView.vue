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
import LeftMenu from "./LeftMenu/index.vue";
import HeaderComponent from "./Header/index.vue";
import '@/assets/color.scss';
export default {
  name: "IndexView",
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
.container-right {
  position: absolute;
  top: 40px;
  left: 266px;
  width: calc(100vw - 266px);
}
</style>
