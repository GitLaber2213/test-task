import CategoriesList from '@renderer/features/categories-list/ui/index.vue';
import ProductsList from '@renderer/features/products/ui/products-list/index.vue';
import ProductInfo from '@renderer/features/products/ui/product-info/index.vue';
import Search from '@renderer/features/search/ui/index.vue';
import UploadFile from '@renderer/features/upload-file/ui/index.vue';

import categoriesListModule from '@renderer/features/categories-list/model/categories-list.slice';
import productsListModule from '@renderer/features/products/model/products-list.slice';

export {
    CategoriesList,
    ProductsList,
    ProductInfo,
    Search,
    UploadFile,

    categoriesListModule,
    productsListModule
};