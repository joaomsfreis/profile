<template>
  <div class="update">
    <img class="update-img" src="../assets/meditation.svg" alt="not found" />
    <h1 class="hx update-text">{{ $t('text.developing') }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Developing",
});
</script>

<style scoped>
.update {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.update-img {
  width: 100%;
  height: 80vh;
}

.update-text {
  font-size: 3rem;
  color: var(--blue-secondary);
  font-style: italic;
}

@media only screen and (max-width: 900px) {
  .update-img {
    width: 100%;
    height: 50vh;
  }
}
</style>