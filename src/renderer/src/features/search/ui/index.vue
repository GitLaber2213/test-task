<script setup lang="ts">
import Input from '@renderer/shared/ui/input/text-input.vue';
import styles from './search.module.css';
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps<{
    placeholder: string;
    dispatchPath: string;
}>();

const store = useStore<{
  dispatch: (type: string, payload: any) => void;
}>();
const inputValue = ref<string>('');


const updateInputValue = (newValue: string): void => {
    inputValue.value = newValue;
    store.dispatch(props.dispatchPath, newValue);
};
</script>

<template>
    <div :class="styles.searchContainer">
        <Input :modelValue="inputValue" @update:modelValue="updateInputValue" :placeholder="placeholder" />
    </div>
</template>