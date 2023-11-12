<template>
  <HomePageTitle subtitle="Explore My" mainTitle="Skill" />
  <div class="HomeSkill_item_wrap">
    <div
      class="HomeSkill_item_ball"
      v-for="items in circleBall"
      :key="items.id"
    >
      <h1 class="HomeSkill_item_ball_title">{{ items.Title }}</h1>
      <p class="HomeSkill_item_subtitle">{{ items.subtitle }}</p>
    </div>
  </div>
  <HomeArrow @click="OpenProjects()" class="HomeArrow" />
</template>
<script>
import HomePageTitle from "./HomePageTitle.vue";
import HomeArrow from "./HomeArrow.vue";
export default {
  components: { HomePageTitle, HomeArrow },
  data() {
    return {
      circleBall: [
        { id: 1, Title: "Html", subtitle: "Experienced" },
        { id: 2, Title: "css", subtitle: "Intermediate" },
        { id: 3, Title: "Javascript", subtitle: "basic" },
        { id: 4, Title: "Vue", subtitle: "basic" },
        { id: 5, Title: "Boostrap", subtitle: "basic" },
        { id: 6, Title: "Ajax", subtitle: "Experienced" },
        { id: 7, Title: "Git", subtitle: "Intermediate" },
        { id: 7, Title: "SCSS/SASS", subtitle: "Experienced" },
      ],
    };
  },
  methods: {
    OpenProjects() {
      const PROJECTS = document.getElementById("HomeProjects");
      PROJECTS.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss">
.HomeSkill_item_wrap {
  width: 80%;
  margin: 5rem auto;
  //   border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  // text-align: center;
  // justify-content: center;
  // align-items: center;
  & .HomeSkill_item_ball {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: floating 1.5s 0s ease-in infinite;
    // &:nth-child(even) {
    //   animation: floating 1s 0s ease-in infinite;
    // }
    & .HomeSkill_item_subtitle {
      color: var(--secondary-gray-1);
    }
  }
}
@keyframes floating {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-20px);
  }
}
@media screen and (max-width: 430px) {
  .HomeArrow {
    display: none;
  }
  .HomeSkill_item_wrap {
    display: grid;
    margin: 0rem auto;
    justify-items: center;
    grid-template-columns: 1fr;
  }
}
</style>
