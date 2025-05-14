<script setup lang="ts">
import { Form } from '@renderer/entity/';
import {Button, PreviousIcon} from '@renderer/shared/';
import { IProduct, IProductContainer, IProductListModuleState } from '@renderer/shared/types/types';
import styles from './product-info.module.css';

import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const router: Router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();

const productIdParam = route.params.productId;
const productId = typeof productIdParam === 'string' ? parseInt(productIdParam) : 0;

const store = useStore<IProductListModuleState>();
const productInfo = computed<IProductContainer | null>(() => store.getters['productsList/getProductById'](productId));

const { name,
    description,
    unitType,
    weight,
    price
} = productInfo.value?.product as Partial<IProduct>

const goBackHandleClick = () => router.back();
</script>


<template>
    <div :class="styles.productInfoContainer">
        <div :class="styles.productInfoHeader">
            <Button @click="goBackHandleClick">
                <template #button-content>
                    <img :src="PreviousIcon" alt="Назад" width="40" height="40" />
                </template>
            </Button>
            <h1>Информация о продукте</h1>
        </div>
        <Form>
            <template #form-content>
                <div :class="styles.productInfoItem">Название продукта - {{ name || "Не указано" }}</div>
                <div :class="styles.productInfoItem">Описание - {{ description || "Не указано" }}</div>
                <div :class="styles.productInfoItem">Объем продукта - {{ weight || "Не указано" }}</div>
                <div :class="styles.productInfoItem">Единица измерения - {{ unitType || "Не указано" }}</div>
                <div :class="styles.productInfoItem">Цена - {{ price || "Не указано" }}₽</div>
            </template>
        </Form>
    </div>
</template>