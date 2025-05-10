<script setup lang="ts">

const props = defineProps<{
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
}>();
</script>


<template>
    <button class="card-container" :style="{ minWidth: props.minWidth, minHeight: props.minHeight, maxWidth: props.maxWidth, maxHeight: props.maxHeight }">
        <div style="width: 100%; height: 100%;">
            <slot name="card-content"></slot>
        </div>
    </button>
</template>

<style>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    font-size: 16px;
    font-weight: bold;
    color: #e7e7e7;

    position: relative;

    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;

    margin: 15px 10px;
    padding: 10px;

    border-radius: 10px;
    border: 1px solid #979797;

    background-color: #2c2c2c;
    cursor: pointer;
    outline: none;


    transition: 0.3s;
    z-index: 1;
}

.card-container:focus {
    outline: 2px solid #78ff9a;
}

.card-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #246434;
    border-radius: 10px;
    z-index: -1;
    transition: 0.3s;
}

.card-container:hover::after {
    transform: translate(10px, 10px);
    background-color: #308b47;
}

.card-container:hover {
    transform: translate(-10px, -10px);
}
</style>