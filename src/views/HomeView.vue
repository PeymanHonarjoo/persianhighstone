<template>
  <div class="bg-grey-lighten-4">
    <v-carousel
      hide-delimiter-background
      cycle
      show-arrows="hover"
      delimiter-icon="mdi-circle"
      color="blue-darken-4"
      height="635"
      interval="2700"
    >
      <v-carousel-item
        src="@/assets/Carousel/image1.jpeg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="@/assets/Carousel/image2.jpeg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="@/assets/Carousel/image3.jpeg"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="6" align-self="center">
          <v-card
            flat
            v-motion
            :initial="{
              x: -16,
            }"
            :visibleOnce="{
              x: 0,
              transition: {
                duration: 1200,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            color="transparent"
            class="pa-5"
          >
            <v-card-title primary-title> Marble </v-card-title>
            <v-card-subtitle> Marble stone </v-card-subtitle>
            <v-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus sed, suscipit ex sint, officia vero possimus eos ipsum
              eius assumenda odit necessitatibus? Minus placeat officia nihil
              minima mollitia. Voluptatum quis unde laudantium impedit neque
              eligendi autem commodi blanditiis maxime fuga fugit, veritatis
              corrupti, voluptatem dicta ratione asperiores eos debitis!
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="blue-darken-4">View more</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-img
            v-motion
            :initial="{
              opacity: 0,
              x: 16,
            }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 850,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            class="bg-white rounded-lg"
            :aspect-ratio="1"
            src="@/assets/Home_Page_Images/marble-design.jpg"
            cover
          ></v-img>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="6" class="order-last order-sm-first">
          <v-img
            v-motion
            :initial="{
              opacity: 0,
              x: -16,
            }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 850,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            class="bg-white rounded-lg"
            :aspect-ratio="1"
            src="@/assets/Home_Page_Images/travertine-design2.jpg"
            cover
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          align-self="center"
          class="order-first order-sm-last"
        >
          <v-card
            class="pa-5"
            color="transparent"
            flat
            v-motion
            :initial="{
              x: 16,
            }"
            :visibleOnce="{
              x: 0,
              transition: {
                duration: 1200,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
          >
            <v-card-title primary-title> Stone Products </v-card-title>
            <v-card-subtitle> Products </v-card-subtitle>
            <v-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus sed, suscipit ex sint, officia vero possimus eos ipsum
              eius assumenda odit necessitatibus? Minus placeat officia nihil
              minima mollitia. Voluptatum quis unde laudantium impedit neque
              eligendi autem commodi blanditiis maxime fuga fugit, veritatis
              corrupti, voluptatem dicta ratione asperiores eos debitis!
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="blue-darken-4">View more</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <SlabsSlider />
      <DecorativesSlider />
      <v-row class="mt-2">
        <v-col cols="12" xs="12" sm="6" align-self="center">
          <v-card
            flat
            v-motion
            :initial="{
              x: -16,
            }"
            :visibleOnce="{
              x: 0,
              transition: {
                duration: 1200,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            color="transparent"
            class="pa-5"
          >
            <v-card-title primary-title> Shipping </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              sit hic numquam, iusto praesentium possimus pariatur molestias
              aspernatur in laborum nostrum nobis, nihil est dolorum
              necessitatibus repellendus sint earum laboriosam laudantium!
              Aliquid nisi mollitia quasi alias numquam, sed repudiandae totam
              nesciunt atque. Ab assumenda nulla autem voluptatem animi aliquam
              rem dicta accusamus labore, optio odio mollitia quod beatae
              expedita deserunt ratione nesciunt ea laboriosam modi
              exercitationem minus a recusandae, temporibus quae! Quidem,
              numquam. Sequi, voluptatum, iste enim officia mollitia vitae porro
              laborum eius impedit voluptatem possimus! Aliquam officia commodi
              aliquid reiciendis totam ea! Consequatur consectetur accusamus
              minima impedit tenetur adipisci?
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="blue-darken-4">View more</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-img
            v-motion
            :initial="{
              opacity: 0,
              x: 15,
            }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 850,
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            class="bg-white rounded-lg"
            :aspect-ratio="1"
            src="@/assets/Home_Page_Images/marble-design.jpg"
            cover
          ></v-img>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-1">
        <v-img
          v-motion
          :initial="{
            opacity: 0,
          }"
          :visibleOnce="{
            opacity: 1,
            transition: {
              duration: 850,
              type: 'keyframes',
              ease: 'easeOut',
            },
          }"
          class="rounded-lg"
          src="@/assets/Home_Page_Images/travertine-design2.jpg"
          cover
        ></v-img>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SlabsSlider from "@/components/SlabsSlider.vue";
import DecorativesSlider from "@/components/DecorativesSlider.vue";

// Components

export default defineComponent({
  name: "HomeView",
  components: { SlabsSlider, DecorativesSlider },
});
</script>
<style lang="css">
.v-btn--elevated {
  background-color: #0d47a1;
  color: white !important;
  border: 1px solid #0d47a1;
}

.v-btn--elevated:hover {
  background-color: white;
  color: #0d47a1 !important;
  border: 1px solid white;
  transition: all 0.3s;
}
</style>
