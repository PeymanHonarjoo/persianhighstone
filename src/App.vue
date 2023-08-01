<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
import Footer from "@/components/FooterBox.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
