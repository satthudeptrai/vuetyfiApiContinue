<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import '@/assets/color.scss';
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  z-index: 1;
}
</style>
