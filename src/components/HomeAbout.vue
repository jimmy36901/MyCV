<template>
  <div class="HomeAbout_title">
    <h1 class="subtitle">get to konw more</h1>
    <h1 class="mainTitle">About me</h1>
  </div>

  <div class="HomeAbout_wrap">
    <div class="HomeAbout_Pic"></div>
    <div class="HomeAbout_InfoWrap">
      <div class="HomeAbout_Info">
        <div class="HomeAbout_Info_experience">
          <font-awesome-icon :icon="['fas', 'award']" class="HomeAbout_icon" />
          <h1 class="HomeAbout_Info_experience_title">
            {{ experience_title }}
          </h1>
          <h1
            class="HomeAbout_Info_experience_content"
            v-html="experience_content"
          ></h1>
        </div>
        <div class="HomeAbout_Info_education">
          <font-awesome-icon :icon="['fas', 'school']" class="HomeAbout_icon" />
          <h1 class="HomeAbout_Info_education_title">{{ education_title }}</h1>
          <h1
            class="HomeAboit_Info_education_content"
            v-html="education_content"
          ></h1>
        </div>
      </div>
      <div class="HomeAbout_MyContent">{{ MyContent }}</div>
    </div>
  </div>
  <HomeArrow @click="OpenSkill()" />
</template>
<script>
import HomeArrow from "./HomeArrow.vue";
export default {
  components: { HomeArrow },
  data() {
    return {
      experience_title: "Experience",
      experience_content: "緯育Tibme前端養成班<br>112/04/18-112/08/25",
      education_title: "Education",
      education_content: "明新科技大學<br>旅館管理系",
      MyContent:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis incidunt facilis facere sit exercitationem sed! Unde assumenda ducimus eveniet blanditiis, qui commodi, ut maxime expedita error sunt repellat suscipit praesentium.",
    };
  },
  methods: {
    OpenSkill() {
      const SKILL = document.getElementById("HomeSkill");
      SKILL.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.HomeAbout_title {
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
.HomeAbout_wrap {
  width: 80%;
  height: 70vh; //
  margin: auto;
  //   border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //   margin-bottom: 10vh;
  & .HomeAbout_Pic {
    width: 350px;
    height: 350px;
    border: 1px solid transparent;
    border-radius: 2rem;
    // background-image: url("src/assets/images/aboutPic.jpg");
    background-image: url("/src/assets/images/aboutPic.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  & .HomeAbout_InfoWrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .HomeAbout_Info {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 2rem;
      & .HomeAbout_icon {
        font-size: 1.5rem;
        padding: 1rem 0rem;
      }
      & .HomeAbout_Info_experience {
        width: 45%;
        border: 1px solid var(--primary-black);
        border-radius: 20px;
        padding: 2rem 0rem;
      }
      & .HomeAbout_Info_education {
        width: 45%;
        border: 1px solid var(--primary-black);
        border-radius: 20px;
        padding: 2rem 0rem;
      }
      & .HomeAbout_Info_experience_title {
        font-size: 1rem;
      }
      & .HomeAbout_Info_experience_content {
        font-size: 1rem;
        color: var(--secondary-gray-1);
      }
      & .HomeAbout_Info_education_title {
        font-size: 1rem;
      }
      & .HomeAboit_Info_education_content {
        font-size: 1rem;
        color: var(--secondary-gray-1);
      }
    }
  }
}
</style>
