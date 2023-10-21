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
</script>
<style lang="scss">
.home {
  .header {
    width: 100%;
    max-width: 1440px;
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
    height: 100vh;
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
    height: 100vh;
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
    height: 20vh;
  }
}
</style>
