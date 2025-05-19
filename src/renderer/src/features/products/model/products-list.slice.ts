import { IProductContainer, IProductListModuleState } from "@renderer/shared/types/types";
import { Module } from "vuex";

const productsListModule: Module<IProductListModuleState, any> = {
    namespaced: true,
    state: (): IProductListModuleState => ({
        items: [],
        searchValue: '',
    }),
    mutations: {
        setSearchValue(state, newValue: string): void {
            state.searchValue = newValue;
        },
        setProducts(state, products: IProductContainer[]): void {
            state.items = products;
        }
    },
    actions: {
        updateSearchValue({ commit }, newValue: string): void {
            commit('setSearchValue', newValue);
        },
        updateProducts({ commit }, products: IProductContainer[]): void {
            commit('setProducts', products);
        },
    },
    getters: {
        getProductById: (state) => (productId: number): IProductContainer | undefined => {
            return state.items.find(item => item.id === productId);
        },
        getProductsByGroupId: (state) => (id: number, searchText: string): IProductContainer[] => {
            return state.items?.filter(item => item?.idGroup === id && item?.product?.name?.toLowerCase().includes(searchText.toLowerCase()));
        },
    },
};


export default productsListModule;    