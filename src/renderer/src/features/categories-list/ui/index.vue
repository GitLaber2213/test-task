<script setup lang="ts">
import { Card, GroupedCard } from '@renderer/entity';
import { Scroll, ROUTES } from '@renderer/shared/';
import { ICategoryListModuleState, ICategoryWithChildren } from '@renderer/shared/types/types';
import styles from './categories-list.module.css';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Router, useRouter } from 'vue-router';

const router: Router = useRouter();

const store = useStore<{ categoriesList: ICategoryListModuleState; }>();
const categories = computed<ICategoryWithChildren[] | null>(() => store.getters['categoriesList/getFilteredGroupedCategories'](store.state.categoriesList.searchValue));
const pushToCatalog = (id: number): void => {
    router.push({ name: ROUTES.CATALOG, params: { catalogId: id } });
};

</script>

<template>
    <Scroll>
        <template #scroll-content>
            <div :class="styles.categoriesContainer">

                <template v-for="category in categories" :key="category.id">

                    <GroupedCard v-if="category.children && category.children.length > 0" :header="category.name"
                        :logo="category.logo">
                        <template #grouped-card-content>
                            <Card v-for="sub in category.children" :key="sub.id" @click="pushToCatalog(sub.id)"
                                max-height="100px" max-width="300px" min-height="100px" min-width="150px">
                                <template #card-content>
                                    <div :class="styles.categoriesContent">
                                        <div v-if="sub.logo">
                                            <img :src="sub.logo" alt="Логотип" width="40" height="40" />
                                        </div>
                                        <h2>{{ sub.name }}</h2>
                                    </div>
                                </template>
                            </Card>
                        </template>
                    </GroupedCard>

                    <Card v-else :key="category.id" @click="pushToCatalog(category.id)" max-height="100px"
                        max-width="300px" min-height="100px" min-width="150px">
                        <template #card-content>
                            <div :class="styles.categoriesContent">
                                <div v-if="category.logo">
                                    <img :src="category.logo" alt="Логотип" width="40" height="40" />
                                </div>
                                <h2>{{ category.name }}</h2>
                            </div>
                        </template>
                    </Card>

                </template>

            </div>
        </template>
    </Scroll>
</template>