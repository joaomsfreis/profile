<template>
  <div class="experience">
    <h1 class="hx title">{{ $t("menu.experience") }}</h1>
    <Poster
      v-for="(poster, index) in posters"
      :key="index"
      :title="poster.title"
      :subTitle="poster.subTitle"
      :end="poster.end"
      :start="poster.start"
      :text="poster.text"
    />
  </div>
</template>

<script lang="ts">
import Poster from "@/components/Poster.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Experence",
  components: { Poster },
  data: () => ({
    posters: [
      {
        title: "web",
        subTitle: "univicosa",
        start: "february-2020",
        end: null,
        text: "univicosa_resume",
      },
      {
        title: "analist",
        subTitle: "gorceix",
        start: "february-2014",
        end: "august-2014",
        text: "gorceix_resume",
      }
    ],
  }),
});
</script>

<style scoped>
.experience {
  margin: 5rem;
}

.title {
  font-size: 4rem;
  letter-spacing: -2px;

  margin: 3rem 0;
}

@media only screen and (max-width: 900px) {
  .experience {
    margin: 6rem 1rem 0rem 1rem;
  }
}
</style>

