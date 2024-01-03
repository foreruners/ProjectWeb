<!-- Notification.vue -->

<template>
    <div v-if="show" class="notification" :class="type">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  
  const show = ref(false);
  const message = ref('');
  const type = ref('success');
  
  watch(
    () => show.value,
    () => {
      setTimeout(() => {
        show.value = false;
      }, 3000);
    }
  );
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    animation: fade-out 0.5s ease-out;
  }
  
  .success {
    background-color: #28a745;
    color: #fff;
  }
  
  .warning {
    background-color: #ffc107;
    color: #000;
  }
  
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  </style>
  