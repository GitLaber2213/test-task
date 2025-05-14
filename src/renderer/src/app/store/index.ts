import { createStore } from 'vuex'
import { categoriesListModule, productsListModule } from '@renderer/features/';

const store = createStore({
    modules: {
        categoriesList: categoriesListModule,
        productsList: productsListModule,
    },
});


export default store;