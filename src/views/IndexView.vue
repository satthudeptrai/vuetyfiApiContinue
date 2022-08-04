<template>
  <div class="app">
    <HeaderComponent />
    <LeftMenu />
    <div class="container-right">
      <router-view />
    </div>
  </div>
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
  // beforeRouteEnter(to, from, next) {
  //   const token = document.cookie
  //   console.log("anhanh",next)
  //   if (token) {
  //     next();
  //   }
  // }
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
