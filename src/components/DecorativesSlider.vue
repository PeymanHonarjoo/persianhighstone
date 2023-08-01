<template lang="">
  <div>
    <v-card-title
      primary-title
      class="d-flex flex-row justify-center align-center text-center pa-7 text-blue-darken-4"
    >
      <v-divider style="border-width: 1px"></v-divider>
      <span class="mx-2 text-h4">Decoratives</span>
      <v-divider style="border-width: 1px"></v-divider>
    </v-card-title>
    <v-carousel
      hide-delimiters
      class="rounded-lg"
      show-arrows="hover"
      :height="imageHeight"
      color="transparent"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <!-- FIRST ITEM -->
      <v-carousel-item class="d-flex align-center">
        <v-row class="d-felx justify-center aling-center">
          <v-col
            cols="3"
            sm="3"
            md="3"
            class="px-1"
            v-for="item in firstDecorativeItems"
            :key="item.title"
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="150">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 20 : 0"
                color="transparent"
                class="rounded"
                v-motion
                :initial="{
                  x: -20,
                }"
                :visible="{
                  x: 0,
                  transition: {
                    duration: 900,
                    type: 'keyframes',
                    ease: 'easeOut',
                  },
                }"
              >
                <v-img
                  :src="require(`@/assets/Decoratives/${item.image}`)"
                  cover
                  :aspect-ratio="1"
                >
                  <v-fade-transition>
                    <router-link
                      :to="{
                        name: 'ProductItem',
                        params: { id: item.route },
                      }"
                      class="text-decoration-none text-grey-lighten-4"
                    >
                      <div
                        v-if="isHovering"
                        class="d-flex justify-center align-center bg-opacity text-h6 text-uppercase pa-5"
                        style="height: 100%"
                      >
                        quick veiw
                      </div>
                    </router-link>
                  </v-fade-transition>
                </v-img>

                <v-card-actions class="d-flex justify-center">
                  <router-link
                    :to="{
                      name: 'ProductItem',
                      params: { id: item.route },
                    }"
                    custom
                    v-slot="{ navigate }"
                  >
                    <v-btn
                      color="blue-darken-4 text-capitalize px-0"
                      @click="navigate"
                      role="link"
                    >
                      <span style="white-space: normal">
                        {{ item.title }}
                      </span>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-carousel-item>
      <!-- SECOND ITEM -->
      <v-carousel-item class="d-flex align-center px-5">
        <v-row class="d-felx justify-center aling-center">
          <v-col
            cols="6"
            sm="4"
            md="4"
            v-for="item in secondDecorativeItems"
            :key="item.title"
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="150">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 20 : 0"
                color="transparent"
                class="rounded"
                v-motion
                :initial="{
                  x: 50,
                }"
                :visible="{
                  x: 0,
                  transition: {
                    duration: 1100,
                    type: 'keyframes',
                    ease: 'easeOut',
                  },
                }"
              >
                <v-img
                  :src="require(`@/assets/Decoratives/${item.image}`)"
                  cover
                >
                  <v-fade-transition>
                    <router-link
                      :to="{
                        name: 'ProductItem',
                        params: { id: item.route },
                      }"
                      class="text-decoration-none text-grey-lighten-3"
                    >
                      <div
                        v-if="isHovering"
                        class="d-flex justify-center align-center bg-opacity text-h6 text-uppercase pa-5"
                        style="height: 100%"
                      >
                        quick veiw
                      </div>
                    </router-link>
                  </v-fade-transition>
                </v-img>

                <v-card-actions class="d-flex justify-center">
                  <router-link
                    :to="{
                      name: 'ProductItem',
                      params: { id: item.route },
                    }"
                    custom
                    v-slot="{ navigate }"
                  >
                    <v-btn
                      color="blue-darken-4 text-capitalize"
                      @click="navigate"
                      role="link"
                    >
                      <span style="white-space: normal">
                        {{ item.title }}
                      </span>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstDecorativeItems: [
        {
          image: "bathroom-accessories.jpg",
          title: "Bathroom Accessories",
          route: "bathroom-accessories",
        },
        {
          image: "chess-board.jpg",
          title: "chess boards",
          route: "chess-boards",
        },
        {
          image: "clock.jpg",
          title: "clocks",
          route: "clocks",
        },
        {
          image: "cups.jpg",
          title: "cups",
          route: "cups",
        },
      ],
      secondDecorativeItems: [
        {
          image: "kitchen-products.jpg",
          title: "kitchen products",
          route: "kitchen-products",
        },
      ],
    };
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.display.name) {
        case "xs":
          return "200";
        case "sm":
          return "260";
        case "md":
          return "275";
        case "xl":
          return "500";
        default:
          return "350";
      }
    },
  },
};
</script>
<style lang="css">
.bg-opacity {
  background-color: rgba(71, 105, 192, 0.6) !important;
}
</style>
