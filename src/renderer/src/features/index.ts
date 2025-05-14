import CategoriesList from './categories-list/ui/index.vue';
import ProductsList from './products/ui/products-list/index.vue';
import ProductInfo from './products/ui/product-info/index.vue';
import Search from './search/ui/index.vue';
import UploadFile from './upload-file/ui/index.vue';

import categoriesListModule from './categories-list/model/categories-list.slice';
import productsListModule from './products/model/products-list.slice';

export {
    CategoriesList,
    ProductsList,
    ProductInfo,
    Search,
    UploadFile,

    categoriesListModule,
    productsListModule
};