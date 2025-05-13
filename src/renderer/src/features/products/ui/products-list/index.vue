<script setup lang="ts">
import Card from '@renderer/entity/card/ui/index.vue';
import styles from './product-list.module.css';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute, Router } from 'vue-router';
import { IProductContainer, IProductListModuleState } from '@renderer/shared/types/types';
import { ROUTES } from '@renderer/shared/constants/route-contants';

const router: Router = useRouter();
const route = useRoute();
const store = useStore<{ productsList: IProductListModuleState }>();

const catalogId = computed<number>(() => {
  const param = route.params.catalogId;
  return typeof param === 'string' ? parseInt(param) : 0;
});

const searchValue = computed<string>(() => store.state.productsList.searchValue);

const products = computed<IProductContainer[]>(() => {
  return store.getters['productsList/getProductsByGroupId'](catalogId.value, searchValue.value);
});

const pushToProductHandleClick = (id: number): void => {
  router.push({ name: ROUTES.PRODUCT, params: { productId: id } });
};
</script>

<template>
  <Card v-bind:key="item.id" v-for="item in products" @click="pushToProductHandleClick(item.id)" :max-height="'300px'"
    :max-width="'300px'" :min-height="'300px'" :min-width="'150px'">
    <template #card-content>

      <h1>{{ item.product.name }}
        <span v-if="item.product.weight && item.product.unitType">
          {{ item.product.weight }}{{ item.product.unitType }}
        </span>
      </h1>

      <p :class="styles.productDescription">{{ item.product.description }}</p>

      <div :class="styles.productPrice">
        <h2> {{ item.product.price }}₽</h2>
      </div>

    </template>
  </Card>
</template>