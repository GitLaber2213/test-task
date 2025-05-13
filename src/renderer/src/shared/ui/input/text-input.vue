<script setup lang="ts">
import styles from './text-input.module.css';
const props = defineProps<{
    placeholder: string;
    modelValue: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <input :class="styles.input" :value="props.modelValue" @input="handleInput" type="text" :placeholder="props.placeholder" />
</template>