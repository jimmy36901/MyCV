<template>
  <ul>
    <li @click="OpenAbout()">About</li>
    <li @click="OpenSkill()">Skill</li>
    <li @click="OpenProjects()">Projects</li>
    <li @click="OpenContact()">Contact</li>
  </ul>
</template>
<script>
export default {
  methods: {
    OpenAbout() {
      const ABOUT = document.getElementById("HomeAbout");
      ABOUT.scrollIntoView({ behavior: "smooth" });
    },
    OpenSkill() {
      const SKILL = document.getElementById("HomeSkill");
      SKILL.scrollIntoView({ behavior: "smooth" });
    },
    OpenProjects() {
      const PROJECTS = document.getElementById("HomeProjects");
      PROJECTS.scrollIntoView({ behavior: "smooth" });
    },
    OpenContact() {
      const CONTACT = document.getElementById("HomeContact");
      CONTACT.scrollIntoView({ behavior: "smooth" });
      // console.log(CONTACT);
    },
  },
};
</script>
<style lang="scss">
ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 30%;
  // border: 1px solid black;
  & li {
    cursor: pointer;
    transition: 0.3s;
    line-height: 3rem;
    text-align: center;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      color: var(--secondary-gray-1);
    }
  }
}
</style>
