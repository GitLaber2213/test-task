<script setup lang="ts">
import styles from './product-list.module.css';
import { IProductContainer, IProductListModuleState } from '@renderer/shared/types/types';
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from 'vue-router';
import { ROUTES } from '@renderer/shared/';
import { Card } from '@renderer/entity';
import { computed } from 'vue';
import { useStore } from 'vuex';

const router: Router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();
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