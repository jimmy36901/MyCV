import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ---------------------------------------------

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faAward,
  faSchool,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faUserSecret,
  faInstagram,
  faFacebook,
  faGithub,
  faAward,
  faSchool,
  faEnvelope,
  faPhone,
  faLine
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon) //icon
  .mount("#app");
