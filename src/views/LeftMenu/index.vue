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
          <div v-for="item in items" :key="item.title">
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
export default {
  name: "LeftMenu",
  data() {
    return {
      active: true,
      items: [
        {
          title: "Menu1",
          name: 'menu1',
          icon: "mdi-image",
          router: "",
          sub: [
            {
              title: "sub1",
              name: 'sub1',
              icon: "mdi-view-dashboard",
              router: "/menu1/sub1",
            },
            {
              title: "sub2",
              name: 'sub2',
              icon: "mdi-view-dashboard",
              router: "/menu1/sub2",
            },
          ],
        },
        {
          title: "Menu2",
          name: 'menu2',
          icon: "mdi-image",
          router: "/about",
          sub: [],
        },
        {
          title: "Menu3",
          name: 'menu3',
          icon: "mdi-help-box",
          router: "/",
          sub: [],
        },
      ],
    };
  },
  computed: {
    routerLink() {
      return this.$route.path;
    }
  },
  mounted() {
    
  },
  methods: {},
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
