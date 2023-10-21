<template>
  <div class="HomePageTitle">
    <h1 class="subtitle">{{ subtitle }}</h1>
    <h1 class="mainTitle">{{ mainTitle }}</h1>
  </div>
</template>
<script>
export default {
  props: ["subtitle", "mainTitle"],
};
</script>
<style lang="scss">
.HomePageTitle {
  width: 80%;
  height: 20vh; //
  //   border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .subtitle {
    font-size: 1rem;
    color: var(--secondary-gray-1);
  }
  & .mainTitle {
    font-size: 3rem;
    font-weight: 800;
  }
}
</style>
