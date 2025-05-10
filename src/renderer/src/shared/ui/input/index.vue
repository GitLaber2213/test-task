<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{
    callback: (event: Event) => void,
    loading: boolean,
    fileName: string | null,
}>();
    

</script>


<template>
    <div class="file-input-container">
        <input type="file" id="file-upload" @change="callback" accept="application/json, text/plain"/>  
        <label for="file-upload" class="file-input-label">
            <slot name="input-content"></slot>
        </label>
        <div v-if="fileName" class="file-name">{{ fileName }}</div>
    </div>
</template>


<style>
.file-input-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="file"] {
    display: none;
}

.file-input-label {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: bold;

    position: relative;
    cursor: pointer;

    width: 100%;
    height: 100%;
    min-width: 150px;
    min-height: 50px;
    max-width: 300px;
    max-height: 50px;

    margin: 10px;
    padding: 10px;

    border-radius: 10px;
    border: 1px solid #979797;

    color: #d3d3d3;
    background-color: #2c2c2c;

    outline: none;

    transition: 0.3s;
    z-index: 1;
}

.file-input-label:focus {
    outline: 2px solid #78ff9a;
}

.file-input-label::after {
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

.file-input-label:hover::after {
    transform: translate(5px, 5px);
    background-color: #308b47;
}

.file-input-label:hover {
    transform: translate(-5px, -5px);
}
</style>