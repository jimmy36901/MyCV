<template>
  <!-- <nav><router-link to="/">Home</router-link> |</nav>
  <router-view /> -->
  <HomeView />
</template>
<script>
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    HomeView,
  },
  // mounted() {
  //   let _this = this;
  //   window.onresize = function () {
  //     _this.$store.state.screenWidth = document.documentElement.clientWidth;
  //     _this.$store.state.screenHeight = document.documentElement.clientHeight;
  //   };
  // },
};
</script>
<style lang="scss">
// #app {
// font-family: Avenir, Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// text-align: center;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: var(--primary-blue);

//     &.router-link-exact-active {
//       color: var(--primary-blue);
//     }
//   }
// }
@import "@/assets/scss/style";
</style>
