<script setup lang="ts">
import ProductsList from '@renderer/features/products/ui/products-list/index.vue';
import Search from '@renderer/features/search/ui/index.vue';
</script>

<template>
    <div class="search-container">
        <Search :dispatch-path="'productsList/updateSearchValue'" placeholder="Поиск товаров" />
    </div>
    <ProductsList />
</template>

<style>
.search-container {
    width: 100%;
    min-height: 60px;
}
</style>