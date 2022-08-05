<template>
  <div class="left-menu">
    <v-card width="256" class="mx-auto left-menu__card">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <div v-for="item in listMenu" :key="item.title">
            <v-list-item
              v-if="item.sub.length === 0"
              link
              router
              :to="item.router"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              v-else
              :class="{ 'active-link': routerLink.includes(item.name) }"
              :value="routerLink.includes(item.name)"
              :prepend-icon="item.icon"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="sub in item.sub"
                :key="sub.title"
                class="sub-item-custom"
                link
                router
                :to="sub.router"
              >
                <v-list-item-icon>
                  <v-icon>{{ sub.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ sub.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import router from '@/router/index'
export default {
  name: "LeftMenu",
  data() {
    return {
      active: true,
      listMenu: [],
    };
  },
  computed: {
    routerLink() {
      return this.$route.path;
    }
  },
  mounted() {
    this.getListMenu();
  },
  methods: {
    getListMenu() {
      this.listMenu = router.options.routes[0].children.reduce((arr, item) => {
        if (!item.meta.parent) {
          return [...arr, {
            title: item.meta.title,
            name: item.name,
            icon: item.meta.icon,
            router: item.path,
            sub: [],
          }]
        }
        const position = arr.findIndex(i => i.name === item.meta.parent);
        arr[position].sub.push({
          title: item.meta.title,
          name: item.name,
          icon: item.meta.icon,
          router: item.path,
        })
        return arr;
      }, [])
    }
  },
};
</script>

<style lang="scss" scoped>
.left-menu {
  position: fixed;
  top: 40px;
  width: 256px;
  z-index: 1;
  .left-menu__card {
    height: calc(100vh - 40px);
    ::v-deep .active-link {
      .v-list-group__header {
        color: var(--color-blue);
      }
      .v-list-item--link {
        .v-list-group__header__prepend-icon,
        .v-list-group__header__append-icon {
          .v-icon {
            color: var(--color-blue);
          }
        }
      }
    }
    .sub-item-custom {
      margin-left: 10px;
      &.v-list-item--active {
        background-color: #e5e5e5;
        color: var(--color-black);
      }
    }
  }
}
</style>
