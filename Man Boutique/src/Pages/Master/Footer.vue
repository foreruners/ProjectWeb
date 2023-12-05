<script>
import SocialMedia from '../../components/SocialMedia.vue';

export default {
  components: {
    SocialMedia,
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between bg-secondary text-light">
    <div>
      <SocialMedia></SocialMedia>
    </div>
    <div>Man Boutique</div>
    <div>© 2023 Man Boutique</div>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
