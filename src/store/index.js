import { createStore } from "vuex";
import Product from "@/assets/api/Products.json";
export default createStore({
  state: {
    items: [
      {
        title: "Marble",
        route: "marble",
      },
      {
        title: "Travertine",
        route: "travertine",
      },
      {
        title: "Onyx",
        route: "onyx",
      },
      {
        title: "Traonyx",
        route: "traonyx",
      },
      {
        title: "Limestone",
        route: "limestone",
      },
      {
        title: "Granite",
        route: "granite",
      },
      {
        title: "Bianco",
        route: "bianco",
      },
    ],
    product: Product,
  },
  getters: {
    SlabProducts: (state) => {
      return state.product.SlabProducts;
    },
    StoneProducts: (state) => {
      return state.product.StoneProducts;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
