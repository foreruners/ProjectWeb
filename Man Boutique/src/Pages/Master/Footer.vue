<script>
import SocialMedia from '../../components/SocialMedia.vue';

export default {
  components: {
    SocialMedia,
  },
};
</script>

<template>
  <footer class="footer text-white p-1 mt-auto">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-md-12 d-flex justify-content-between">
                    <div>
                      <p class="mb-0 mt-2 d-flex align-items-center">© 2023 All rights reserved.</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <SocialMedia class="bi-xs"></SocialMedia>
                    </div>
                </div>
            </div>
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

  background-color: rgba(9, 3, 39, 0.8);
}

.footer {
  background-color: rgba(9, 3, 39, 0.94);
}
</style>
