<template>
  <div class="headerWrap">
    <h1 class="headerWrap_title">Albert Liu</h1>
    <!-- <component :is="hamburger"></component> -->
    <Homelist class="HeaderHomelist" />
    <HomeHamburger class="HomeHamburger" />
  </div>
</template>
<script>
import Homelist from "@/components/Homelist.vue";
import HomeHamburger from "@/components/HomeHamburger.vue";
export default {
  components: {
    Homelist,
    HomeHamburger,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.headerWrap {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  // transform: translateY(25%);
  &_title {
    font-size: 2rem;
  }
  & ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 30%;
    // border: 1px solid black;
    & li {
      cursor: pointer;
      transition: 0.3s;
      line-height: 3rem;
      text-align: center;
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      &:hover {
        border-bottom: 2px solid var(--secondary-gray-1);
        transition: 0.3s;
        color: var(--secondary-gray-1);
      }
    }
  }
  & .HomeHamburger {
    display: none;
  }
}
@media screen and (max-width: 420px) {
  .headerWrap {
    align-items: center;
    & .HeaderHomelist {
      display: none;
    }
    & .HomeHamburger {
      display: block;
    }
  }
  #nav-icon3 {
    margin: 0;
  }
}
</style>
