<template>
  <v-navigation-drawer
    floating
    app
    left
    disable-resize-watcher
    class="bg-white"
  >
    <v-list class="d-flex flex-row justify-start">
      <v-list-item width="100%">
        <v-list-item-action
          class="d-flex flex-column justify-start align-start"
        >
          <router-link to="/" class="text-decoration-none">
            <v-list-item-title
              class="text-blue-darken-4 pa-1 my-2 text-uppercase"
            >
              Home
            </v-list-item-title>
          </router-link>
          <v-list-item-title
            class="text-grey text-uppercase d-flex flex-column"
          >
            <v-expansion-panels variant="accordion">
              <v-expansion-panel class="text-blue-darken-4 pa-0">
                <v-expansion-panel-title class="text-start pa-1">
                  <router-link
                    to="/products"
                    class="text-decoration-none text-blue-darken-4 text-uppercase"
                  >
                    Products
                  </router-link>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="d-flex flex-column">
                  <v-list>
                    <v-list-item class="pl-1">
                      <router-link
                        to="/products"
                        class="text-capitalize pl-3 text-decoration-none text-blue-darken-4"
                        >Products</router-link
                      ></v-list-item
                    >
                    <v-list-item v-for="item in items" :key="item.title">
                      <router-link
                        :to="{
                          name: 'ProductItem',
                          params: { id: item.route },
                        }"
                        class="text-capitalize text-decoration-none text-blue-darken-4"
                      >
                        {{ item.title }}
                      </router-link>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-title>

          <router-link to="/about" class="text-decoration-none">
            <v-list-item-title
              class="text-blue-darken-4 pa-1 my-2 text-uppercase"
            >
              About
            </v-list-item-title>
          </router-link>
          <router-link to="/contact" class="text-decoration-none">
            <v-list-item-title
              s
              class="text-blue-darken-4 pa-1 my-2 text-uppercase"
            >
              Contact us
            </v-list-item-title>
          </router-link>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>
<style lang=""></style>
