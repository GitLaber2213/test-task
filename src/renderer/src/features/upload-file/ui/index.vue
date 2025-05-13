<script setup lang="ts">
import { ref } from 'vue';
import Input from '@renderer/shared/ui/input/file-input.vue';


const fileInput = ref<string | ArrayBuffer | null>('');
const fileName = ref<string | null>(null);


const onFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        fileName.value = file.name;
        const reader = new FileReader();
        reader.onload = () => {

            const lines = reader.result.split('\n');
            lines.forEach(element => {
                console.log(element);
            });

            fileInput.value = reader.result;
        };
        reader.readAsText(file);
    };
};


</script>

<template>
    <Input :callback="onFileChange" :loading="false" :fileName="fileName">
    <template #input-content>
        Загрузить данные из файла
    </template>
    </Input>
    <div>
        {{ fileInput }}
    </div>
</template>

<style></style>