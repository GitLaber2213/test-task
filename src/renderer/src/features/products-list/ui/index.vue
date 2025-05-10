<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Card from '@renderer/entity/card/ui/index.vue';
import Scroll from '@renderer/shared/ui/scroll/index.vue';

const store = useStore();
const items = computed(() => store.state.productsList.items);

</script>

<template>
  
  <Scroll>
    <template #scroll-content>
      <div class="products-container">
        <Card v-bind:key="item.id" v-for="item in items" :max-height="'300px'" :max-width="'300px'"
          :min-height="'300px'" :min-width="'150px'">
          <template #card-content>

            <h1>{{ item.product.name }}
              <span v-if="item.product.weight && item.product.unitType">
                {{ item.product.weight }}{{ item.product.unitType }}
              </span>
            </h1>

            <p class="product-description">{{ item.product.description }}</p>

            <div class="product-price">
              <h2> {{ item.product.price }} ₽</h2>
            </div>

          </template>
        </Card>
      </div>

    </template>
  </Scroll>
</template>

<style>
.products-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-description {
  width: 100%;
  max-width: 275px;
  height: 100%;
  margin: 10px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.product-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>