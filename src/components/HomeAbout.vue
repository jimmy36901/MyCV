<template>
  <div class="HomeAbout_title">
    <h1 class="subtitle">get to konw more</h1>
    <h1 class="mainTitle">About me</h1>
  </div>

  <div class="HomeAbout_wrap">
    <div
      class="HomeAbout_Pic"
      data-aos="fade-up"
      data-aos-duration="1000"
    ></div>
    <div class="HomeAbout_InfoWrap" data-aos="fade-up" data-aos-duration="1000">
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
      <div class="HomeAbout_MyContent" v-html="MyContent"></div>
    </div>
  </div>
  <HomeArrow @click="OpenSkill()" class="AboutHomeArrow" />
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
        "&emsp;&emsp;你好，我是劉忠騏，我的個性擅長與人溝通，在團體當中，儘管他人跟自己的想法不同，也可以坐下來跟他人好好討論，因為相信都是為了讓事情有一個更好的結果。<br><br>&emsp;&emsp;在因緣際會之下，接觸到程式碼，當第一次做自己的作品，並且一步一步朝著自己所設計好的樣子發展時，那種欣喜若狂的感覺，至今依然讓我意猶未盡。為了增進自己的技術果斷報名緯育Tibame前端工程師課程，使用<span>HTML ,CSS(SCSS),JS ,Vue框架</span>來做自己的作品集。<br><br>&emsp;&emsp;在作品集當中有使用Vue做的購物車網站（Cart），也有純HTML ,CSS ,JS做的花店網站（Fluer），以及團體專題共同使用Vue創作的棒球網站(ASSEMBALL)，也有<span>使用API串接的神奇寶貝以及天氣預報</span>，在學習程式碼的過程中發現這是一個學海無涯的行業，必須與時俱進，才可以跟得上現在的科技發展。",
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
  // height: 110vh; //
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
    .HomeAbout_MyContent {
      text-align: left;
      &::v-deep > span {
        color: #c7604a;
      }
    }
  }
}
// >>> .HomeAbout_MyContent > span {
//   color: red;
// }
@media screen and (max-width: 430px) {
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
      font-size: 2rem;
      font-weight: 800;
    }
  }
  .HomeAbout_wrap {
    display: block;
    width: 90%;
    // height: 110vh;
    & .HomeAbout_Pic {
      width: 200px;
      height: 200px;
      margin: auto;
    }
    & .HomeAbout_InfoWrap {
      display: block;
      width: 100%;
      margin: auto;
      & .HomeAbout_Info {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 2rem 0rem;
        & .HomeAbout_icon {
          font-size: 1.5rem;
          padding: 1rem 0rem;
        }
        & .HomeAbout_Info_experience {
          width: 45%;
          margin: auto;
          border: 1px solid var(--primary-black);
          border-radius: 20px;
          padding: 2rem 0rem;
        }
        & .HomeAbout_Info_education {
          width: 45%;
          margin: auto;
          border: 1px solid var(--primary-black);
          border-radius: 20px;
          padding: 2rem 0rem;
        }
        & .HomeAbout_Info_experience_title {
          font-size: 1rem;
        }
        & .HomeAbout_Info_experience_content {
          font-size: 0.5rem;
          color: var(--secondary-gray-1);
        }
        & .HomeAbout_Info_education_title {
          font-size: 1rem;
        }
        & .HomeAboit_Info_education_content {
          font-size: 0.5rem;
          color: var(--secondary-gray-1);
        }
      }
      & .HomeAbout_MyContent {
        margin-bottom: 1.5rem;
      }
    }
  }
  .AboutHomeArrow {
    display: none;
  }
}
</style>
