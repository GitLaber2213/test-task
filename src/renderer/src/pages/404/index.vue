<script setup lang="ts">
import { _404Icon } from '@renderer/shared/';

</script>


<template>
    <div class="_404-image">
        <img :src="_404Icon" alt="404" width="200" height="200" />
    </div>
    <div class="_404-text">
        <h1 class="_404-title">Опаньки...</h1>
        <h1 class="_404-description">Страница не найдена</h1>
    </div>
</template>


<style>
._404-image {
    margin: 10px;
}

._404-text {
    margin: 10px;
}

._404-title {
    font-size: 40px;
    font-weight: bold;
}

._404-description {
    font-size: 20px;
    color: gray;
}
</style>