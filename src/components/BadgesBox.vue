<template>
  <div class="networks">
    <BadgeLink
      v-for="(badge, index) in badges"
      :key="index"
      :link="badge.link"
      :badge="badge.img"
      :badge-name="badge.badgeName"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BadgeLink from "./BadgeLink.vue";

export default defineComponent({
  components: { BadgeLink },
  name: "BadgesBox",
  data: () => ({
    badges: [
      {
        link: "https://github.com/joaomsfreis",
        img: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
        badgeName: null,
      },
      {
        link: "https://www.linkedin.com/in/joão-reis-675044a4/",
        img: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
        badgeName: "linkedin",
      },
      {
        link: "https://api.whatsapp.com/send?phone=5531999352499",
        img: "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white",
        badgeName: "whatsapp",
      },
      {
        link: "joaomsfreis@gmail.com",
        img: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
        badgeName: "gmail",
      },
    ]
  }),
});
</script>

<style scoped>
.networks {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-width: 900px) {
  .networks {
    align-items: center;
    justify-content: center;
  }
}
</style>

