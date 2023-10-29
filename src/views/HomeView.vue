<template>
  <div class="home">
    <section class="header">
      <HomeHeader />
    </section>
    <section class="HomeInformation">
      <HomeInformation />
    </section>
    <section class="HomeAbout" id="HomeAbout">
      <HomeAbout />
    </section>
    <section class="HomeSkill" id="HomeSkill">
      <HomeSkill />
    </section>
    <section class="HomeProjects" id="HomeProjects">
      <HomeProjects />
    </section>
    <section class="HomeContact" id="HomeContact">
      <HomeContact />
    </section>
    <section class="Homelist">
      <Homelist />
    </section>
    <section class="HomeCopyright">
      <HomeCopyright />
    </section>
  </div>
</template>

<script setup>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import header from "@/components/header.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import HomeInformation from "@/components/HomeInformation.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import HomeSkill from "@/components/HomeSkill.vue";
import HomeProjects from "@/components/HomeProjects.vue";
import HomeContact from "@/components/HomeContact.vue";
import Homelist from "@/components/Homelist.vue";
import HomeHamburger from "@/components/HomeHamburger.vue";
import HomeCopyright from "@/components/HomeCopyright.vue";
</script>
<style lang="scss">
.home {
  max-width: 1440px;
  margin: auto;
  .header {
    width: 100%;

    height: 20vh;
    display: flex;
    align-items: center;
    // border: 1px solid black;
  }
  .HomeInformation {
    width: 100%;
    height: 80vh;
    // border: 1px solid black;
    align-items: center;
    display: flex;
  }
  .HomeAbout {
    width: 100%;
    // height: 100vh;
    // border: 1px solid black;
    overflow: hidden;
  }
  .HomeSkill {
    width: 100%;
    height: 100vh;
    // border: 1px solid black;
    overflow: hidden;
  }
  .HomeProjects {
    width: 100%;
    // height: 100vh;
    // border: 1px solid black;
    overflow: hidden;
  }
  .HomeContact {
    width: 100%;
    height: 80vh;
    // border: 1px solid black;
    overflow: hidden;
  }
  .Homelist {
    display: flex;
    justify-content: center;
    height: 10vh;
  }
  .HomeCopyright {
    display: block;
  }
}
@media screen and (max-width: 420px) {
  .home {
    .HomeAbout {
      // height: 150vh;
    }
    .HomeSkill {
      height: 200vh;
    }
    .HomeProjects {
      // height: 215vh;
    }
    .Homelist {
      display: block;
      height: 25vh;
      margin-bottom: 1.5rem;
      ul {
        display: block;
        list-style: none;
        width: 100%;
        // border: 1px solid black;
        & li {
          cursor: pointer;
          transition: 0.3s;
          line-height: 3rem;
          text-align: center;
          transition: 0.3s;
          // border: 1px solid var(--secondary-gray-1);

          &:hover {
            transition: 0.3s;
            color: var(--secondary-gray-1);
          }
        }
      }
    }
  }
}
</style>
