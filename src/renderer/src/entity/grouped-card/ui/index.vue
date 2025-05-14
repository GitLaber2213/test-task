<script setup lang="ts">
import styles from './grouped-card.module.css';

const props = defineProps<{
    logo?: string;
    header: string;
}>();
</script>


<template>
    <div :class="styles.groupedCardContainer">
        <div :class="styles.groupedCardContainerHeader">
            <div v-if="props.logo">
                <img :src="props.logo" height="28" width="28" />
            </div>
            <div>
                {{ props.header }}
            </div>
        </div>
        <div :class="styles.groupedCardContainerContent">
            <slot name="grouped-card-content"></slot>
        </div>
    </div>
</template>
