<template>
    <div class="row mb-4 d-flex justify-content-between align-items-center">
      <div class="col-md-2 col-lg-2 col-xl-2">
        <img :src="item.image" class="img-fluid rounded-3" alt="Product Image">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-muted mb-0">{{ item.name }}</h6>
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button class="btn btn-inc-decr  px-2" @click="decrement(item.id)">
          <i class="bi bi-dash"></i>
        </button>
        <div class="pt-2 text-muted px-2" style="font-size: 1rem;">
          {{ item.quantity }}
        </div>
        <button class="btn btn-inc-decr  px-2" @click="increment(item.id)">
          <i class="bi bi-plus"></i>
        </button>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 class="mb-0 text-muted">{{ item.price }} €/unit</h6>
      </div>
      <div class="col-md-1 col-lg-1 col-xl-1">
        <button class="btn btn-style  px-2" @click="removeItem(item.id)">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: Object,
    increment: Function,
    decrement: Function,
    removeItem: Function
  });
  </script>