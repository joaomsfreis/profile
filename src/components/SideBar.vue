<template>
  <aside>
    <Avatar/>
    <div class="name-container" @click="showAndHideMenu">
      <div class="name">
        <h1 class="hx">João Marcos</h1>
      </div>
      <div>
        <div class="button">
          <font-awesome-icon icon="ellipsis-v" />
        </div>
      </div>
    </div>
    <Links :class="showClass" @closeMenu="showAndHideMenu" />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import Links from "./Links.vue";

export default defineComponent({
  name: "SideBar",
  components: { Links, Avatar},
  data: () => ({
    showMenu: false,
  }),
  computed: {
    showClass(): string {
      return this.showMenu ? "inline-menu" : "none-menu";
    },
  },
  methods: {
    showAndHideMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
</script>

<style scoped>
aside {
  background: var(--blue-primary);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: height .5s;
}

.name-container {
  display: none;
  cursor: pointer;
  z-index: 2;
}

.name h1 {
  color: var(--white-primary);
  padding: 1vh;
}

@media only screen and (max-width: 900px) {
  aside {
    height: auto;
  }

  .name-container {
    display: flex;
    justify-content: space-between;
  }

  .none-menu {
    display: none;
  }

  .inline-menu {
    display: inline;
  }

  .name {
    font-weight: 600;
    font-size: 1rem;
  }
}
</style>