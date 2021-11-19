<template>
  <div class="education">
    <h1 class="hx title">{{ $t("menu.education") }}</h1>
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
  name: "Education",
  components: { Poster },
  data: () => ({
    posters: [
      {
        title: "ufop_full",
        subTitle: "computer_engineering",
        start: "august-2014",
        end: "december-2019",
        text: null,
      },
      {
        title: "ifmg_full",
        subTitle: "industrial_automation",
        start: "february-2011",
        end: "december-2013",
        text: null,
      }
    ],
  }),
});
</script>

<style scoped>
.education {
  margin: 5rem;
}

.title {
  font-size: 4rem;
  letter-spacing: -2px;

  margin: 3rem 0;
}

@media only screen and (max-width: 900px) {
  .education {
    margin: 0rem 1rem;
  }
}
</style>

