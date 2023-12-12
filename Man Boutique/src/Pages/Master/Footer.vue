<script>
import SocialMedia from '../../components/SocialMedia.vue';

export default {
  components: {
    SocialMedia,
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between bg-secondary text-light  fixed-bottom ">
    <div>
      <SocialMedia class="bi-xs"></SocialMedia>
    </div>
    <p class="mb-0 d-flex align-items-center">Man Boutique</p>
    <p class="mb-0 d-flex align-items-center">© 2023 Man Boutique</p>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
