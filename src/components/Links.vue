<template>
  <ul class="links">
    <li
      v-for="(link, index) in links"
      :key="index"
      :id="`link-${index}`"
      class="link"
      :class="{ active: activeIndex === index }"
      @click="changeActive(index)"
    >
      <router-link :to="link.route">{{ $t(`menu.${link.title}`) }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Links",
  emits: ["closeMenu"],
  data: () => ({
    links: [
      {
        title: "about",
        route: "/",
      },
      {
        title: "education",
        route: "/education",
      },
      {
        title: "experience",
        route: "/experience",
      },
    ],
    activeIndex: 0,
  }),
  mounted() {
    this.activeIndex = 0;
    this.activeIndex = this.links.findIndex(link => link.route === this.getRoute());
  },
  methods: {
    changeActive(index: number) {
      this.activeIndex = index;
      this.$emit("closeMenu");
    },
    getRoute(): string {
      const route = location.href.split('/'); 
      return `/${route.pop() ?? ''}`;
    }
  },
});
</script>

<style scoped>

.links {
  display: grid;
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
  z-index: 2;
}

.link {
  padding: 0.7rem;
  text-align: center;
}

.link a {
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--blue-secondary);
}

.link.active a {
  color: var(--white-primary);
}

.link a:hover {
  color: var(--white-primary);
}

@media only screen and (max-width: 900px) {
  .link a {
    font-size: 1.2rem;
  }
}
</style>