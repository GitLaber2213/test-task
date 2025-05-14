import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ProductInfoPage, ProductsPage, _404Page } from '@renderer/pages/';
import { ROUTES } from '@renderer/shared/';


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
        component: _404Page
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    console.log(from);
    const path = to.fullPath;

    if (path.endsWith('index.html')) {
        next({ path: ROUTES.CATALOG });
    } else {
        next();
    }
});
export default router;