<template>
  <transition name="fade" mode="out-in">
    <div>
      <v-row id="header" class="mx-0 pt-3">
        <v-parallax
          :src="require(`../assets/Banners/${productInfo.image}`)"
          class="d-flex justify-center"
          height="500"
        >
          <v-container>
            <v-card
              class="ma-5 mt-15 py-5 bg-black-opacity rounded-xl rounded-ts-0"
            >
              <v-card-title
                primary-title
                class="font-weight-medium text-grey-lighten-3 text-uppercase text-center text-sm-h4 pa-5"
              >
                {{ productInfo.name }}
              </v-card-title>
              <v-card-text
                class="font-italic text-grey-lighten-2 text-center text-sm-subtitle-1 mx-sm-10 my-3"
              >
                {{ productInfo.description }}
              </v-card-text>
            </v-card>
          </v-container>
          <!-- <v-container class="pa-0">
        <p class="text-blue-darken-4 text-center text-h3 my-5 py-3">
          {{ productInfo.name }}
        </p>
        <p class="text-grey-darken-4 text-center text-subtitle-1 my-5 py-5">
          {{ productInfo.description }}
        </p>
      </v-container> -->
        </v-parallax>
      </v-row>

      <v-container class="my-5">
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="3"
            v-for="pageItems in productInfo.pageItems"
            :key="pageItems.id"
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="150">
              <v-card
                flat
                v-bind="props"
                color="transparent"
                class="rounded-0"
                :elevation="isHovering ? 20 : 0"
              >
                <v-img
                  :src="
                    require(`../assets/PHS_Website_Gallary/${pageItems.image}`)
                  "
                  cover
                  :aspect-ratio="1.5"
                >
                  <v-fade-transition>
                    <router-link
                      :to="{
                        name: 'Contact',
                        params: { id: pageItems.title },
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
                <v-card-subtitle
                  class="d-flex justify-center text-subtitle-2 pt-3"
                >
                  {{ pageItems.subtitle }}
                </v-card-subtitle>
                <v-card-actions
                  class="d-flex justify-center pt-0 text-blue-darken-4 font-weight-medium"
                >
                  {{ pageItems.title }}
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductItem",
  props: ["id"],
  data() {
    return {
      pageID: this.id,
      productInfo: {},
      pageReady: true,
    };
  },
  watch: {
    $route(to) {
      this.pageID = to.params.id;
      this.productInfo = this.SlabProducts.find(
        (item) => item.url == this.pageID
      );
    },
  },
  computed: {
    ...mapGetters(["SlabProducts", "StoneProducts"]),
    getJsonData() {
      return this.SlabProducts.find((item) => item.url == this.pageID);
    },
  },
  created() {
    if (this.getJsonData === undefined) {
      this.pageReady = false;
      this.$router.push({ name: "home" });
      console.log("Not found");
    } else {
      this.productInfo = this.SlabProducts.find(
        (item) => item.url == this.pageID
      );
    }
  },
};
</script>
<style>
.bg-black-opacity {
  background-color: rgba(0, 0, 0, 0.55) !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
