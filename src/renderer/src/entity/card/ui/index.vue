<script setup lang="ts">
import styles from './card.module.css';
const props = defineProps<{
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
}>();
</script>


<template>
    <button :class="styles.cardContainer" :style="{ minWidth: props.minWidth, minHeight: props.minHeight, maxWidth: props.maxWidth, maxHeight: props.maxHeight }">
        <div style="width: 100%; height: 100%;">
            <slot name="card-content"></slot>
        </div>
    </button>
</template>