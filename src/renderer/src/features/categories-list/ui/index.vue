<script setup lang="ts">
import Card from '@renderer/entity/card/ui/index.vue';
import Scroll from '@renderer/shared/ui/scroll/index.vue';
import styles from './categories-list.module.css'
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Router, useRouter } from 'vue-router';
import { ICategory, ICategoryListModuleState } from '@renderer/shared/types/types';
import { ROUTES } from '@renderer/shared/constants/route-contants';

const router: Router = useRouter();

const store = useStore<{categoriesList: ICategoryListModuleState;}>();
const categories = computed<ICategory[] | null>(() => store.getters['categoriesList/getSearchCatalogs'](store.state.categoriesList.searchValue));

const pushToCatalog = (id: number): void => {
    router.push({ name: ROUTES.CATALOG, params: {catalogId: id}});
};
</script>

<template>
    <Scroll>
        <template #scroll-content>
            <div :class="styles.categoriesContainer">
                <Card v-bind-key="category.id" v-for="category in categories" @click="pushToCatalog(category.id)" max-height="100px" max-width="300px"
                min-height="100px" min-width="150px">
                <template #card-content>
                    <div :class="styles.categoriesContent">
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