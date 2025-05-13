<script setup lang="ts">
import Header from '@renderer/widgets/header/index.vue';
import Footer from '@renderer/widgets/footer/index.vue';
import Scroll from '@renderer/shared/ui/scroll/index.vue';
</script>


<template>
  <div class="app-container">
    <Header />

      <Scroll>
        <template #scroll-content>
          <div class="route-container">
            <RouterView />
          </div>
        </template>
      </Scroll>

    <Footer />
  </div>
</template>

<style>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
}

.route-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}
</style>
