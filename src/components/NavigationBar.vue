<template lang="">
  <div>
    <NavDrawer v-model="drawer" />
    <v-app-bar absolute height="110" class="px-md-7">
      <v-app-bar-nav-icon
        class="hidden-md-and-up text-blue-darken-4"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-img
          @click="$router.push('/')"
          class="mx-auto"
          src="@/assets/Company-Logo.png"
          max-width="180"
        ></v-img>
      </v-app-bar-title>

      <v-app-bar-title class="hidden-sm-and-down" max-width="100">
        <v-list class="d-flex flex-row justify-start">
          <v-list-item>
            <v-list-item-action
              class="d-flex flex-row justify-center align-center"
            >
              <router-link to="/" class="text-decoration-none">
                <v-list-item-title
                  class="text-blue-darken-4 mx-3 text-uppercase font-weight-normal"
                >
                  Home
                </v-list-item-title>
              </router-link>
              <v-menu
                open-on-hover
                v-model="menu"
                :close-on-content-click="false"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-blue-darken-4 font-weight-normal"
                    to="/products"
                    prepend-icon="mdi-chevron-down"
                    v-bind="props"
                    >Products</v-btn
                  >
                </template>

                <v-card min-width="200" class="bg-blue-darken-4">
                  <v-list class="bg-blue-darken-4 pa-0" width="100%">
                    <v-list-item
                      class="bg-blue-darken-4"
                      v-for="item in items"
                      :key="item.title"
                    >
                      <router-link
                        :to="{
                          name: 'ProductItem',
                          params: { id: item.route },
                        }"
                        class="text-capitalize text-decoration-none text-grey-lighten-4"
                      >
                        {{ item.title }}
                      </router-link>
                    </v-list-item>
                    <v-divider></v-divider>
                  </v-list>

                  <v-divider></v-divider>
                </v-card>
              </v-menu>
              <router-link to="/about" class="text-decoration-none">
                <v-list-item-title
                  class="text-blue-darken-4 mx-3 text-uppercase font-weight-normal"
                >
                  About
                </v-list-item-title>
              </router-link>
              <router-link to="/contact" class="text-decoration-none">
                <v-list-item-title
                  s
                  class="text-blue-darken-4 mx-3 text-uppercase font-weight-normal"
                >
                  Contact us
                </v-list-item-title>
              </router-link>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-app-bar-title>

      <v-btn icon class="text-blue-darken-4">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import NavDrawer from "@/components/NavigationDrawer.vue";
export default {
  data() {
    return {
      menu: false,
      drawer: false,
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },

  components: { NavDrawer },
};
</script>
<style lang=""></style>
