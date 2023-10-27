<template>
  <div id="nav-icon3" @click="openClick()" :class="{ active: showUp }">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div class="blankWrap" v-if="this.showUp">
      <Homelist class="HamburgerHomelist" />
    </div>
  </div>
</template>
<script>
import Homelist from "./Homelist.vue";
export default {
  components: {
    Homelist,
  },
  data() {
    return {
      showUp: false,
    };
  },
  methods: {
    openClick() {
      this.showUp = !this.showUp;
    },
  },
};
</script>
<style lang="scss">
#nav-icon3 {
  width: 45px;
  height: 35px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: var(--secondary-gray-1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 16px;
    }

    &:nth-child(4) {
      top: 30px;
    }
  }
  & .blankWrap {
    width: 150px;
    height: 200px;
    background-color: var(--pale-white);
    border: 1px solid black;
    position: absolute;
    top: 35px;
    right: 20px;
    z-index: 10;
    // display: none;
    & .HamburgerHomelist {
      display: block;
      width: 100%;
      z-index: 10;
    }
  }
}
/* Icon 3 */

.active {
  span:nth-child(1) {
    top: 18px !important;
    width: 0% !important;
    left: 50% !important;
  }
  span:nth-child(2) {
    transform: rotate(45deg) !important;
  }
  span:nth-child(3) {
    transform: rotate(-45deg) !important;
  }
  span:nth-child(4) {
    top: 18px !important;
    width: 0% !important;
    left: 50% !important;
  }
}
@media screen and (max-width: 420px) {
  #nav-icon3 {
    margin: 0;
  }
}
</style>
