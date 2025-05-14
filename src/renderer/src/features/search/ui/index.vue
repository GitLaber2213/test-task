<script setup lang="ts">
import { TextInput } from '@renderer/shared/';
import styles from './search.module.css';
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps<{
    placeholder: string;
    dispatchPath: string;
}>();

const store = useStore<{
    dispatch: (type: string, payload: string) => void;
}>();
const inputValue = ref<string>('');


const updateInputValue = (newValue: string): void => {
    inputValue.value = newValue;
    store.dispatch(props.dispatchPath, newValue);
};
</script>

<template>
    <div :class="styles.searchContainer">
        <TextInput :modelValue="inputValue" @update:modelValue="updateInputValue" :placeholder="placeholder" />
    </div>
</template>