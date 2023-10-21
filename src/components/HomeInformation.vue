<template>
  <div class="HomeInformation_wrap">
    <div class="Home_MyPic"></div>
    <section class="Home_MyPic_info">
      <p class="Home_greeting">{{ greeting }}</p>
      <h1 class="Home_Myname">{{ myName }}</h1>
      <p class="Home_career">{{ job }}</p>
      <div class="iconList">
        <a
          href="https://instagram.com/albertliu0424?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
          ><span class="iconBrand"
            ><font-awesome-icon :icon="['fab', 'instagram']" /></span
        ></a>
        <a
          href="https://www.facebook.com/profile.php?id=100003299959232"
          target="_blank"
          ><span class="iconBrand"
            ><font-awesome-icon :icon="['fab', 'facebook']" /></span
        ></a>
        <a href="https://github.com/jimmy36901" target="_blank"
          ><span class="iconBrand"
            ><font-awesome-icon :icon="['fab', 'github']" /></span
        ></a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello I'm",
      myName: "Albert Liu",
      job: "Frontend Developer",
    };
  },
};
</script>
<style lang="scss">
.HomeInformation_wrap {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & .Home_MyPic {
    width: 350px;
    height: 350px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 1rem;
    background-image: url("/src/assets/images/headshot.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  & .Home_MyPic_info {
    width: 30%;
    text-align: center;
    margin-left: 1rem;

    & .Home_greeting {
      font-size: 2rem;
      color: var(--secondary-gray-1);
    }
    & .Home_Myname {
      font-size: 3rem;
      letter-spacing: 0.5rem;
    }
    & .Home_career {
      font-size: 2rem;
      color: var(--secondary-gray-1);
    }
    & .iconList {
      //   border: 1px solid black;
      a {
        text-decoration: none;
        // cursor: pointer;
        &:nth-child(2) {
          margin: 0rem 1rem;
        }
      }
      & .iconBrand {
        font-size: 2.5rem;
        color: var(--primary-black);
        transition: 0.3s;
        transform: rotate(0deg);
        &:hover {
          color: var(--cozy-brown);
          transform: rotate(15deg);
          transition: 0.3s;
        }
      }
      & .iconBrand:nth-child(2) {
        margin: 0rem 1rem;
      }
    }
  }
}
</style>
