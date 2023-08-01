<template lang="">
  <v-row class="d-flex justify-center bg-grey-darken-3">
    <!-- Logo -->
    <v-col class="d-flex justify-center pa-0 mb-2" cols="12" md="3">
      <v-img
        @click="$router.push('/')"
        src="@/assets/Company-Logo.png"
        max-width="250"
      ></v-img>
    </v-col>
    <!-- Product Routes -->
    <v-col class="px-0" cols="12" sm="4" md="2">
      <v-card flat class="bg-transparent">
        <v-card-title class="text-grey-lighten-2 text-uppercase pr-0">
          Products
        </v-card-title>
        <v-divider
          width="110"
          thickness="3"
          class="ml-4"
          color="success"
        ></v-divider>
        <v-card-text>
          <v-list class="bg-transparent d-flex flex-column">
            <v-list-item class="pa-0" v-for="item in items" :key="item.title">
              <router-link
                :to="`/products/${item.route}`"
                class="text-grey-lighten-2 text-decoration-none text-subtitle-1"
              >
                {{ item.title }}
              </router-link>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Main Pages Routes -->
    <v-col class="px-0" cols="12" sm="4" md="2">
      <v-card flat class="bg-transparent">
        <v-card-title class="text-grey-lighten-2 text-uppercase pr-0">
          Quick links
        </v-card-title>
        <v-divider
          width="130"
          thickness="3"
          class="ml-4"
          color="success"
        ></v-divider>
        <v-card-text>
          <v-list class="bg-transparent d-flex flex-column">
            <v-list-item class="pa-0">
              <router-link
                to="/"
                class="text-grey-lighten-2 text-decoration-none text-subtitle-1"
              >
                Home
              </router-link>
            </v-list-item>
            <v-list-item class="pa-0">
              <router-link
                to="/about"
                class="text-grey-lighten-2 text-decoration-none text-subtitle-1"
              >
                About
              </router-link>
            </v-list-item>
            <v-list-item class="pa-0">
              <router-link
                to="/products"
                class="text-grey-lighten-2 text-decoration-none text-subtitle-1"
              >
                Products
              </router-link>
            </v-list-item>
            <v-list-item class="pa-0">
              <router-link
                to="/contact"
                class="text-grey-lighten-2 text-decoration-none text-subtitle-1"
              >
                Contact us
              </router-link>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Contact infos -->
    <v-col class="px-0" cols="12" sm="4" md="2">
      <v-card flat class="bg-transparent">
        <v-card-title class="text-grey-lighten-2 text-uppercase pr-0">
          Contact us
        </v-card-title>
        <v-divider
          width="130"
          thickness="3"
          class="ml-4"
          color="success"
        ></v-divider>
        <v-card-text>
          <v-list class="bg-transparent d-flex flex-column">
            <v-list-item class="pa-0">
              <span class="font-weight-bold text-subtitle-1">Phone:</span>
              <br />

              <a
                class="text-grey-lighten-2 text-decoration-none"
                href="tel: +989131170602"
              >
                +989131170602
              </a>
            </v-list-item>
            <br />
            <v-list-item class="pa-0">
              <span class="font-weight-bold text-subtitle-1">Email:</span>
              <br />
              <a
                href="mailto: persianhighstone@gmail.com"
                class="text-grey-lighten-2 text-decoration-none"
                >persianhighstone@gmail.com</a
              >
            </v-list-item>
            <br />
            <v-list-item class="pa-0">
              <span class="font-weight-bold text-subtitle-1">Address:</span>
              <br />
              <span class="text-grey-lighten-2"
                >Esfahan Julfa Post Office Post Box Number: 81735-421</span
              >
            </v-list-item>
            <br />
            <v-list-item class="pa-0">
              <span class="font-weight-bold text-subtitle-1">Join us at:</span>
              <br />
              <a
                href="https://www.instagram.com/persianhighstone"
                target="_blank"
                class="bg-transparent text-decoration-none"
              >
                <v-btn
                  class="mr-2 text-grey-lighten-2"
                  icon="mdi-instagram"
                  variant="outlined"
                  size="small"
                ></v-btn>
              </a>
              <a
                href=""
                class="bg-transparent text-decoration-none"
                target="_blank"
              >
                <v-btn
                  class="text-grey-lighten-2"
                  size="small"
                  icon="mdi-linkedin"
                  variant="outlined"
                ></v-btn>
              </a>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="bg-grey-darken-4">
    <!-- 1-Copy Right -->
    <!-- 2-Social Media Links -->
    <v-col class="d-flex justify-center">
      <span class="text-grey"
        >Copyright © 2023 Persianhighstone, Inc. All rights reserved.</span
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>
<style lang="css" scoped>
* {
  margin: 0 !important;
}
</style>
