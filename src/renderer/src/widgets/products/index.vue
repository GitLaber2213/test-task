<script setup lang="ts">
import { ProductsList, Search } from '@renderer/features/';
</script>

<template>
    <div class="search-container">
        <Search dispatch-path="productsList/updateSearchValue" placeholder="Поиск товаров" />
    </div>
    <ProductsList />
</template>

<style>
.search-container {
    width: 100%;
    min-height: 60px;
}
</style>