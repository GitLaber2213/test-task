<script setup lang="ts">
import { ref } from 'vue';
import { FileInput } from '@renderer/shared/';
import { useStore } from 'vuex';
import { ICategory, IProductContainer } from '@renderer/shared/types/types';


const store = useStore<{
    dispatch: (type: string, payload: ICategory) => void
}>();

const fileInput = ref<string | ArrayBuffer | null>('');
const fileName = ref<string | null>(null);



const onFileChange = async (event: Event): Promise<void> => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        fileName.value = file.name;

        const reader = new FileReader();
        reader.onload = async (e: ProgressEvent<FileReader>) => {

            const jsonData = e.target?.result;
            if (typeof jsonData === 'string') {
                try {
                    const data: {groups: ICategory[], items: IProductContainer[]} = JSON.parse(jsonData);
                    store.dispatch('categoriesList/updateCatalogs', data.groups);
                    store.dispatch('productsList/updateProducts', data.items);
                } catch (error) {
                    alert(`Ошибка при парсинге JSON: ${error}`);
                };
            };
            
        };
        reader.readAsText(file);
    } else {
        alert("Ошибка загрузки файла. Попробуйте еще раз");
    };
};
</script>

<template>
    <FileInput :callback="onFileChange" :loading="false" :fileName="fileName">
        <template #input-content>
            Загрузить данные из файла
        </template>
    </FileInput>
    <div>
        {{ fileInput }}
    </div>
</template>