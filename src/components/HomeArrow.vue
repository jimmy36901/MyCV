<template>
  <div class="imageWrap">
    <img :src="this.img" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@/assets/images/downArrow.png"),
    };
  },
};
</script>
<style lang="scss">
.imageWrap {
  width: 90%;
  margin: auto;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    animation: jumping 1s ease-in-out infinite;
    cursor: pointer;
  }
}
@keyframes jumping {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
