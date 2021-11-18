<template>
  <div class="traslation">
    <select
      class="select"
      name="translations"
      id="translations"
      v-model="$i18n.locale"
    >
      <option
        v-for="(option, index) in locales"
        :key="index"
        :value="option.code"
      >
        {{ $t(`languages.${option.language}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TranslationSelect",
  data: () => ({
    locales: [
      {
        code: "pt",
        language: "portuguese",
      },
      {
        code: "en",
        language: "english",
      },
    ],
  }),
});
</script>

<style scoped>
select {
  width: 120px;
  border-color: var(--white-primary) !important;
  padding: 0.2rem;
  border-radius: 5px;
  font-style: italic;
  color: var(--white-primary);
  background-image: linear-gradient(
    to top,
    var(--blue-primary),
    var(--blue-secondary) 55%
  );
}


option {
  color: black;
}

.traslation {
  display: flex;
  justify-content: flex-end;
  margin: 10px
}

</style>