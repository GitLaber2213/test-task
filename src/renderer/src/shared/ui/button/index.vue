<script setup lang="ts">
import styles from './button.module.css';
</script>

<template>
    <button :class="styles.btn">
        <slot name="button-content"></slot>
    </button>
</template>
