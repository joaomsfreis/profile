<template>
  <a class="link" :class="badgeName ?? 'default'" :href="urlLink" target="_blank">
    <img
      :src="badge"
      alt="badge"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BadgeLink",
  props: {
    link: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    badgeName: {
      type: String,
      required: false,
    }
  },
  computed: {
    urlLink(): string {
      if(this.badgeName === 'gmail')
      return `mailto:${this.link}`;

      return this.link
    }
  }
});
</script>

<style scoped>
.link {
  text-decoration: none;
  margin-right: 0.5rem;
  padding-bottom: 0;
}

.whatsapp:hover {
  box-shadow: 0 8px 8px -4px var(--green-primary);
}

.linkedin:hover {
  box-shadow: 0 8px 8px -4px var(--blue-primary);
}

.gmail:hover {
  box-shadow: 0 8px 8px -4px var(--red-primary);
}

.default:hover {
  box-shadow: 0 8px 8px -4px var(--black);
}
</style>

