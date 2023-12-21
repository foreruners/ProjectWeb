<template>
    <div class="social-links ">
      <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none me-2 p-1">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="https://twitter.com/" target="_blank" class="text-decoration-none me-2 p-1">
        <i class="bi bi-twitter"></i>
      </a>
      <a href="https://example.com/rss" target="_blank" class="text-decoration-none me-2 p-1">
        <i class="bi bi-rss"></i>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialMedia',
  };
  </script>
  
  <style scoped>
  i{
    color: #d1c9c9;
  }

  i:hover{
    color: #76787a;
  }
  .social-links {
    font-size: 24px;
    color: #007bff;
  }
  </style>
  