<script setup lang="ts">
</script>

<template>
    <div class="scroll-container">
        <slot name="scroll-content"></slot>
    </div>    
</template>

<style>
.scroll-container {
    overflow-y: scroll;
    flex: 1 1 auto;
    width: 100%;
}

.scroll-container::-webkit-scrollbar {
    width: 2px;
}

.scroll-container::-webkit-scrollbar-track {
    background-color: #292929;
    border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: #cdd4d1;
    border-radius: 10px;
}

</style>