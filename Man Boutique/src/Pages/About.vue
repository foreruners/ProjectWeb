<script>
import GridGallery from '../components/GridGallery.vue';

export default {
    components: {
        GridGallery
    },
}
</script>

<template>
    <div class="about-section py-5" style="margin-top: 80px;">
        <div class="container">
            <h1 class="section-title text-center mb-4" data-aos="flip-down" data-aos-duration="1000">About Us</h1>
            <div class="row mb-5 align-items-center">
                <div class="about-text col-md-7" data-aos="fade-right" data-aos-duration="1000">
                    <p>
                        Founded in 2023, Man Boutique began with the mission of bringing elegance and sophistication to
                        men's wardrobes. Our founders, Ricardo Ferreira, Wilson Mirande, and Filipe Moreira, inspired by
                        classic European fashion trends, decided to create a boutique that reflects a combination of
                        timeless styles with a modern touch.
                    </p>
                    <p>
                        Each piece in our collection is chosen with the utmost care, ensuring quality and exclusivity. Our
                        goal is to offer our customers not just clothing, but a lifestyle that values excellence and
                        attention to detail.
                    </p>
                    <p>
                        The mission of Man Boutique goes beyond simply dressing men; it is dedicated to redefining men's
                        fashion with an approach that balances innovation and tradition. We are committed to creating an
                        environment where each customer feels unique and valued. We believe that personal style is a form of
                        expression, and for this reason, our curation of pieces seeks to offer options that speak directly
                        to the character and personality of each individual. At Man Boutique, it's not just about appearance
                        - it's about confidence, character, and making a lasting impression.
                    </p>
                </div>
                <div class="about-image col-md-5" data-aos="fade-left" data-aos-duration="1000">
                    <img src="../assets/img/abouImg.png" class="img-fluid rounded">
                </div>
            </div>
            <hr>
            <div class="services-section mt-5">
                <h1 class="services-title text-center" data-aos="flip-down" data-aos-duration="1000">Our Exclusive Services</h1>
                <p class="text-center">
                    At Man Boutique, we offer more than just products - we deliver experiences. Our personalized fashion
                    consulting service helps you find the perfect style that fits your personal taste and needs. In
                    addition, we offer clothing customization sessions, where our experts work with you to create unique
                    pieces that highlight your individuality.
                </p>
                <p class="text-center">
                    We are also committed to sustainability, carefully selecting eco-friendly materials and supporting
                    responsible fashion practices. Join us in exclusive events and collaborations with renowned designers
                    for a truly immersive fashion experience.
                </p>
            </div>

            <div class="gallery-section mt-2">
                <GridGallery></GridGallery>
            </div>

        </div>
    </div>
</template>

<style scoped>
.services-section {
    margin-top: 50px;
}

.services-title {
    font-size: 2rem;
    margin-bottom: 30px;
}

h1{
  background-color: rgba(174, 172, 182, 0.193);
  color: rgba(9, 3, 39, 0.94);
  text-shadow: #4f4c4c 1px 1px 1px;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
}
</style>