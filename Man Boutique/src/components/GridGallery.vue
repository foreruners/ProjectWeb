<template>
    <div class="grid-container">
        <div class="my-item item1">
            <img src="../imgs/123.jpg" alt="">
        </div>
        <div class="my-item item2">
            <img src="../imgs/123.jpg" alt="">
        </div>
        <div class="my-item item3">
            <img src="../imgs/123.jpg" alt="">
        </div>
        <div class="my-item item4">
            <img src="../imgs/123.jpg" alt="">
        </div>
        <div class="my-item item5">
            <img src="../imgs/123.jpg" alt="">
        </div>
        <div class="my-item item6">
            <img src="../imgs/123.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    padding: 20px;
    min-height: 100dvh;
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

.item1 {
    grid-area: header;
}

.item2 {
    grid-area: lef;
}

.item3 {
    grid-area: main;
}

.item4 {
    grid-area: rig;
}

.item5 {
    grid-area: footer;
}

.item6 {
    grid-area: footer2;
}

.my-item:hover {

    padding: 10px;
    width: 90%;
    height: 90%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>