<template>
  <article class="article">
    <TranslationSelect class="select" />
    <div class="main">
      <router-view class="page" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TranslationSelect from "../components/TranslationSelect.vue";

export default defineComponent({
  name: "Main",
  components: { TranslationSelect },
});
</script>

<style soped>
.article {
  width: 100%;
}

.main {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.select {
  position: fixed;
  right: 2rem;
}

@media only screen and (max-width: 900px) {
  .main {
    height: 70vh;
  }

  .select {
    position: inherit;
    padding-top: 3rem;
  }
}
</style>