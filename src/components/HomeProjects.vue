<template>
  <HomePageTitle subtitle="Browse My Recent" mainTitle="Projects" />
  <div class="HomeProject_wrap">
    <div
      class="HomeProject_item"
      v-for="items in mainProjects"
      :key="items.id"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        class="HomeProject_Pic"
        :style="`background-image: url(${items.url})`"
      >
        <p class="visible">{{ items.addInfo }}</p>
      </div>
      <h1 class="HomeProject_title">{{ items.title }}</h1>
      <a :href="items.link" target="_blank"
        ><button class="HomeProject_btn">{{ items.btn }}</button></a
      >
    </div>
  </div>
  <HomeArrow @click="OpenContact()" class="HomeArrow" />
</template>
<script>
import HomePageTitle from "./HomePageTitle.vue";
import HomeArrow from "./HomeArrow.vue";
export default {
  components: { HomePageTitle, HomeArrow },
  data() {
    return {
      // showUp: window.innerWidth > 420,
      // show: true,
      // noShow: false,

      mainProjects: [
        {
          id: 1,
          url: require("@/assets/Projects/ShoppingCart.png"),
          title: "Cart",
          btn: "Live Demo",
          link: "https://jimmy36901.github.io/cart/",
          addInfo: "Vue",
        },
        {
          id: 2,
          url: require("@/assets/Projects/Fleur.png"),
          title: "Fluer",
          btn: "Live Demo",
          link: "https://jimmy36901.github.io/ALBERT/index.html",
          addInfo: "Html/CSS/Js (個專)",
        },
        {
          id: 3,
          url: require("@/assets/Projects/Assemball.png"),
          title: "Assemball",
          btn: "Live Demo",
          link: "https://tibamef2e.com/chd102/g4/",
          addInfo: "Vue (團專)",
        },
      ],
    };
  },
  methods: {
    OpenContact() {
      const CONTACT = document.getElementById("HomeContact");
      CONTACT.scrollIntoView({ behavior: "smooth" });
      // console.log(CONTACT);
    },
  },
  // computed: {
  //   showDisplay() {
  //     return this.showUp ? this.show : this.noShow;
  //   },
  // },
};
</script>
<style lang="scss">
.HomeProject_wrap {
  width: 80%;
  // height: 70vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  // border: 1px solid black;
  & .HomeProject_item {
    width: 30%;
    height: 500px;
    border: 1.5px solid var(--secondary-gray-3);
    display: flex;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    & .HomeProject_Pic {
      width: 80%;
      height: 300px;
      border: 1px solid var(--secondary-gray-1);
      border-radius: 2rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      & .visible {
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0;
        color: var(--pale-white);
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        border-radius: 2rem;
      }
      &:hover {
        & .visible {
          opacity: 1;
          transition: 0.3s;
        }
      }
    }
    & .HomeProject_title {
      font-size: 2rem;
      padding: 1.5rem;
    }
    & a {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
    & .HomeProject_btn {
      width: 30%;
      text-align: center;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 4rem;
      cursor: pointer;
      border: 1px solid var(--secondary-gray-3);
      border-radius: 2rem;
      background-color: var(--pale-white);
      transition: 0.3s;
      &:hover {
        background-color: #353535;
        color: var(--pale-white);
        transition: 0.3s;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .HomeArrow {
    display: none;
  }
  .HomeProject_wrap {
    display: block;
    margin: 0rem auto 1rem;
    // height: 180vh;
    & .HomeProject_item {
      width: 80%;
      margin: auto;
      height: 450px;
      margin-top: 1.5rem;
      & .HomeProject_title {
        font-size: 1.5rem;
        padding: 1rem;
      }
      & .HomeProject_Pic {
        & .visible {
          display: none;
        }
      }
      & .HomeProject_btn {
        width: 30%;
        text-align: center;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 4rem;
        cursor: pointer;
        border: 1px solid var(--secondary-gray-3);
        border-radius: 2rem;
        background-color: var(--pale-white);
        transition: 0s;
        &:hover {
          background-color: var(--pale-white);
          color: black;
          transition: 0s;
        }
      }
    }
  }
}
</style>
