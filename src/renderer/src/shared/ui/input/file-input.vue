<script setup lang="ts">
import { defineProps } from 'vue';
import styles from './file-input.module.css';

const props = defineProps<{
    callback: (event: Event) => void,
    loading: boolean,
    fileName: string | null,
}>();
</script>


<template>
    <div :class="styles.fileInputContainer">
        <input type="file" id="file-upload" @change="props.callback" accept="application/json, text/plain"/>  
        <label for="file-upload" :class="styles.fileInputLabel">
            <slot name="input-content"></slot>
        </label>
        <div v-if="props.fileName" :class="styles.fileName">{{ props.fileName }}</div>
    </div>
</template>