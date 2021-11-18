<template>
  <div class="avatar-container">
    <img class="avatar" src="https://github.com/joaomsfreis.png" alt="Avatar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
});
</script>

<style scoped>
.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;
}

.avatar {
  border: solid var(--blue-secondary) 0.5rem;
  border-radius: 200px;
  width: 8rem;
}

@media only screen and (max-width: 900px) {
  .avatar-container {
    display: none;
  }
}
</style>