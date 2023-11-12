<template>
  <HomePageTitle subtitle="Get in Touch" mainTitle="Contact Me" />
  <div class="HomeContact_Wrap">
    <div
      class="HomeContact_items"
      v-for="(items, index) in ContactList"
      @click="openDefaulteEmail(index)"
      key="items.id"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div class="HomeContact_icon">
        <font-awesome-icon :icon="[items.type, items.icon]" />
        <!-- <font-awesome-icon :icon="['fas', 'envelope']" /> -->
      </div>
      <div class="HomeContact_text">{{ items.text }}</div>
    </div>
  </div>
</template>
<script>
import HomePageTitle from "./HomePageTitle.vue";
export default {
  components: { HomePageTitle },
  data() {
    return {
      ContactList: [
        {
          id: 1,
          icon: "envelope",
          type: "fas",
          text: "jimmy36901@gmail.com",
        },
        {
          id: 2,
          icon: "phone",
          type: "fas",
          text: "0905273904",
        },
        {
          id: 3,
          icon: "line",
          type: "fab",
          text: "gibson920",
        },
      ],
    };
  },
  methods: {
    openDefaulteEmail(index) {
      if (index === 0) {
        window.location.href = "mailto:jimmy36901@gmail.com";
      } else if (index === 2) {
        window.location.href = "https://line.me/ti/p/XeUXkHn6xm";
      }
    },
  },
};
</script>
<style>
.HomeContact_Wrap {
  width: 80%;
  height: 60vh;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .HomeContact_items {
    border: 1px solid black;
    width: 30%;
    display: flex;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    /* justify-content: space-between; */
    transition: 0.3s;
    transform: scale(1);

    &:hover {
      background-color: var(--secondary-gray-1);
      transition: 0.3s;
      transform: scale(1.1);
      color: var(--pale-white);
    }
    &:nth-child(2) {
      cursor: unset;
    }
    & .HomeContact_icon {
      padding: 0rem 1rem;
      font-size: 1rem;
      /* border: 1px solid black; */
    }
    & .HomeContact_text {
      /* padding-left: 1rem; */
      /* border: 1px solid black; */
      font-size: 1rem;
    }
  }
}
@media screen and (max-width: 430px) {
  .HomeContact_Wrap {
    & .HomeContact_items {
      width: 90%;
      &:hover {
        background-color: var(--pale-white);
        transition: 0s;
        transform: scale(1);
        color: black;
      }
      & .HomeContact_text {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
