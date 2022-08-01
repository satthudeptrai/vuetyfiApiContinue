<template>
  <div class="v-header">
    <div class="v-header-item">
      <v-icon color="#000">mdi-bell</v-icon>
    </div>
    <div class="v-header-item">
      <v-icon color="#000">mdi-cog</v-icon>
    </div>
    <div class="v-header-item">
      <v-menu
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            color="#000"
            v-bind="attrs"
            v-on="on"
          >
            mdi-account
          </v-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="() => {}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.v-header {
  position: fixed;
  height: 40px;
  width: 100%;
  background-color: #00d0ff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  .v-header-item {
    margin: 0 5px;
  }
}
</style>
