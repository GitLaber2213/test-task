import { createStore } from 'vuex'
import ProductsListSlice  from "@renderer/features/products-list/model/product-list.slice";
import CategoriesListSlice  from "@renderer/features/categories-list/model/categories-list.slice";

const store = createStore({
    modules: {
        categoriesList: CategoriesListSlice,
        productsList: ProductsListSlice,
        uploadFile: {},
    }
});


export default store;