<script setup lang="ts">
import styles from './scroll.module.css';
</script>

<template>
    <div :class="styles.scrollContainer">
        <slot name="scroll-content"></slot>
    </div>    
</template>