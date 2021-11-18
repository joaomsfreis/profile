<template>
  <div class="about">
    <div class="info">
      <h1 class="hx name">
        JOÃO MARCOS
        <span class="last-name">S F REIS</span>
      </h1>
      <h2 class="hx city">Viçosa - MG, {{ $t('countries.brazil') }}</h2>
      <div>
      <p class="resume">
        {{ $t('text.resume', {years: serviceTime.years, months: serviceTime.months}) }}
      </p>
      </div>
      <badges-box/>
    </div>
  </div>
</template>

<script lang="ts">
import BadgesBox from "../components/BadgesBox.vue";
import { defineComponent } from "vue";
import IDate from "../interfaces/IDate";

export default defineComponent({
  name: "About",
  components: {BadgesBox},
  data: () => ({
    years: 1
  }),
  computed: {
    serviceTime(): IDate {
      const now = new Date();
      const startedWorking = new Date(2020, 1, 10);

      return this.diffBetweenDates(startedWorking, now);
    },
  },
  methods: {
    diffBetweenDates(start: Date, end: Date): IDate {
      let years: number;
      let months: number;

      if (end.getFullYear() === start.getFullYear()) {
        years = 0;
        months = end.getMonth() - start.getMonth();
      } else {
        const difYears = end.getFullYear() - start.getFullYear();

        if (end.getMonth() < start.getMonth()) {
          years = difYears === 1 ? difYears - 1 : difYears;
          months = end.getMonth() + (12 - start.getMonth());
        } else {
          years = difYears;
          months = end.getMonth() - start.getMonth();
        }

        if (end.getDate() < start.getDate()) months--;
      }

      return {
        years,
        months,
      };
    },
  },
});
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 10rem 0 10rem;
}

.name {
  font-size: 7rem;
  letter-spacing: -5px;
}

.last-name {
  font-family: "Alumni Sans", sans-serif;
  color: var(--blue-primary);
}

.city {
  font-size: 2.5rem;
  font-weight: 100;
  color: var(--blue-secondary);
  letter-spacing: -2px;
}

.resume {
  text-align: justify;
}

@media only screen and (max-width: 900px) {
  .about {
    margin: -5rem 1rem 0 1rem;
  }

  .name {
    font-size: 3rem;
    letter-spacing: -2px;
  }

  .city {
    font-size: 1.8rem;
    letter-spacing: 0;
  }
}
</style>

