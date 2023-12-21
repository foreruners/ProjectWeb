<template>
    <div class="grid-container">
        <div class="my-item item1">
            <img src="../imgs/Grid-Gallery/GridGallery-1.png" alt="">
        </div>
        <div class="my-item item2">
            <img src="../imgs/Grid-Gallery/GridGallery-2.png" alt="">
        </div>
        <div class="my-item item3">
            <img src="../imgs/Grid-Gallery/GridGallery-3.png" alt="">
        </div>
        <div class="my-item item4">
            <img src="../imgs/Grid-Gallery/GridGallery-4.png" alt="">
        </div>
        <div class="my-item item5">
            <img src="../imgs/Grid-Gallery/GridGallery-5.png" alt="">
        </div>
        <div class="my-item item6">
            <img src="../imgs/Grid-Gallery/GridGallery-6.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    padding: 20px;
    display: grid;
    grid-auto-rows: 180px;
    grid-template-columns: 240px auto;
    grid-template-areas:
        'header main main rig'
        'lef main main rig'
        'lef footer footer2 footer2'
    ;
    gap: 10px;

}

.item1 {grid-area: header;}
.item2 {grid-area: lef;}
.item3 {grid-area: main;}
.item4 {grid-area: rig;}
.item5 {grid-area: footer;}
.item6 {grid-area: footer2;}

.my-item:hover {

    padding: 4px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1000px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'header header'
      'lef main'
      'rig rig'
      'footer footer2';
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'header main rig'
      'lef footer footer2';
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'lef'
      'main'
      'rig'
      'footer'
      'footer2';
  }
}

</style>