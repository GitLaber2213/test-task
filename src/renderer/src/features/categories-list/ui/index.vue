<script setup lang="ts">

import { computed } from 'vue';
import { useStore } from 'vuex';
import Card from '@renderer/entity/card/ui/index.vue';
import Scroll from '@renderer/shared/ui/scroll/index.vue';

const store = useStore();
const categories = computed(() => store.state.categoriesList.groups);
console.log(categories.value);
</script>

<template>
    <Scroll>
        <template #scroll-content>
            <div class="categories-container">
                <Card v-bind-key="category.id" v-for="category in categories" max-height="100px" max-width="300px"
                    min-height="75px" min-width="150px">
                    <template #card-content>
                        <div class="categories-content">
                            <div v-if="category.logo">
                                <img :src="category.logo" alt="Логотип каталога" width="40" height="40" />
                            </div>
                            <h2>
                                {{ category.name }}
                            </h2>
                        </div>
                    </template>
                </Card>
            </div>
        </template>
    </Scroll>
</template>


<style>
.categories-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 300px;
}

.categories-content {
    display: flex;
    align-items: center;
}
</style>