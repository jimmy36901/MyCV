<template>
  <HomeView />
</template>
<script>
import HomeView from "./views/HomeView.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    HomeView,
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/style";
</style>
