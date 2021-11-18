<template>
  <main class="container">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="main">
      <Main/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./views/Main.vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    Main,
  },
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap');

* {
  margin: 0;
  font-family: 'Merriweather Sans', sans-serif;
}

main {
  --black: #000000;
  --blue-primary: #0275d8;
  --white-primary: #ffffff;
  --blue-secondary: #3591e0;
  --green-primary: #25d366;
  --red-primary: #d14836;
}

.button { 
  background: none;
	color: var(--white-primary);
	border: none;
	padding: 2vh;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar main";
}

.hx {
  font-family: "Alumni Sans", sans-serif;
}

@media only screen and (max-width: 900px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .1fr 4fr;

    grid-template-areas: "sidebar" "main";
  }
}
</style>
