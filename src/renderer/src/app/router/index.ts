import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductsPage from '@renderer/pages/products/index.vue';
import Page404 from '@renderer/pages/404/index.vue';
import ProductInfoPage from '@renderer/pages/product-info/index.vue';
import { ROUTES } from '@renderer/shared/constants/route-contants';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: ROUTES.CATALOG
    },
    {
        path: ROUTES.CATALOG,
        component: ProductsPage
    },
    {
        path: ROUTES.CATALOG_ID,
        component: ProductsPage,
        name: ROUTES.CATALOG,
    },
    {
        path: ROUTES.PRODUCT_ID,
        component: ProductInfoPage,
        name: ROUTES.PRODUCT
    },
    {
        path: '/:pathMatch(.*)*',
        component: Page404
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


export default router;