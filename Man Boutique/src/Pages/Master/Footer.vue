<script>
import SocialMedia from '../../components/SocialMedia.vue';

export default {
  components: {
    SocialMedia,
  },
};
</script>

<template>
  <footer class="myConteiner d-flex justify-content-between bg-dark text-light">
    
    <p class="mb-0 d-flex align-items-center">© 2023 Man Boutique</p>

    <p class="mb-0 d-flex align-items-center">Man Boutique</p>
    
    <div>
      <SocialMedia class="bi-xs"></SocialMedia>
    </div>

  </footer>
</template>

<style scoped>
p {
  text-align: center;
}

.myConteiner{
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 40px;
}
</style>
