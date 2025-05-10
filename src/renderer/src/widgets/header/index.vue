<script setup lang="ts">
import CategoriesList from '@renderer/features/categories-list/ui/index.vue';
</script>

<template>
    <div class="header-container">
        <CategoriesList />
    </div>
</template>

<style>
.header-container {
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    
    min-width: 200px;
    min-height: 70px;

    margin: 10px;
    margin-bottom: 0;

    background-color: #292929;
    
    border-radius: 10px;
    border-bottom: 2px solid #41a372;
    border-top: 2px solid #41a372;
}
</style>