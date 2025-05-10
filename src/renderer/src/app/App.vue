<script setup lang="ts">
import Header from '@renderer/widgets/header/index.vue';
import ProductsList from '@renderer/features/products-list/ui/index.vue';
import Footer from '@renderer/widgets/footer/index.vue';
</script>


<template>
  <div class="app-container">
    <Header />
    <ProductsList />
    <Footer />
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
</style>

