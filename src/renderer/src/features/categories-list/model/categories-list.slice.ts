import { ICategory, ICategoryListModuleState } from "@renderer/shared/types/types";
import { Module } from "vuex";

const categoriesListModule: Module<ICategoryListModuleState, any> = {
    namespaced: true,
    state: (): ICategoryListModuleState => ({
        groups: [],
        searchValue: '',
    }),
    mutations: {
        setSearchValue(state, newValue: string): void {
            state.searchValue = newValue;
        },
        setGroups(state, catalogs: ICategory[]): void {
            state.groups = catalogs;
        },
    },
    actions: {
        updateSearchValue({ commit }, newValue: string): void {
            commit('setSearchValue', newValue);
        },
        updateCatalogs({commit}, catalogs: ICategory[]): void {
            commit('setGroups', catalogs);
        },
    },
    getters: {
        getSearchCatalogs: (state) => (searchText: string): ICategory[] => {
            return state.groups.filter((item) => item?.name?.toLowerCase().includes(searchText.toLowerCase()))
        },
    },
};


export default categoriesListModule;