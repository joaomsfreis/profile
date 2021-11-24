<template>
  <div class="content">
    <div class="details">
      <h2 class="hx details-title">
        {{ $t(`text.${title}`) }}
      </h2>
      <h3 class="hx details-sub-title">
        {{ $t(`text.${subTitle}`) }}
      </h3>
      <p class="details-text" v-if="text">
        {{ $t(`text.${text}`) }}
      </p>
    </div>
    <div class="period">
      <p class="hx">
        {{ $t(`monthsYear.${startMonth}`, { year: startYear }) }}
        -
        {{ endMonth ? $t(`monthsYear.${endMonth}`, { year: endYear }) : $t('text.now')  }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Poster",
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
  computed: {
    endYear(): string | null {
      if (this.end) return this.end.split("-")[1];
      return null;
    },
    endMonth(): string | null {
      if (this.end) return this.end.split("-")[0];

      return null;
    },
    startYear(): string | null {
      if (this.start) return this.start.split("-")[1];

      return null
    },
    startMonth(): string | null {
      if (this.start) return this.start.split("-")[0];

      return null
    }
  },
});
</script>

<style scoped>
.details {
  grid-area: details;
}

.details-title {
  font-weight: 1000;
  font-size: 1.5rem;
  text-align: justify;
}

.details-sub-title {
  font-weight: 100;
  font-size: 1.3rem;
  color: var(--blue-primary);
}

.details-text {
  text-align: justify;
}

.period {
  color: var(--blue-secondary);
  font-size: 1.3rem;
  grid-area: period;
}

.content {
  margin: 3rem 0;
  display: grid;

  grid-template-columns: 5fr 1fr 2fr;

  grid-template-areas: "details . period";
}

@media only screen and (max-width: 900px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>