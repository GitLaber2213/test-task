import { createStore } from 'vuex'
import productsListModule  from "@renderer/features/products/model/products-list.slice";
import categoriesListModule  from "@renderer/features/categories-list/model/categories-list.slice";

const store = createStore({
    modules: {
        categoriesList: categoriesListModule,
        productsList: productsListModule,
        uploadFile: {},
    },
});


export default store;