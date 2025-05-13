import { ICategory, ICategoryListModuleState } from "@renderer/shared/types/types";
import { Module } from "vuex";

const categoriesListModule: Module<ICategoryListModuleState, any> = {
    namespaced: true,
    state: (): ICategoryListModuleState => ({
        groups: [
            {
                "id": 1,
                "idParent": null,
                "name": "Бытовая техника",
                "logo": "https://cdn-icons-png.freepik.com/256/6708/6708382.png?ga=GA1.1.453316467.1746718545&semt=ais_hybrid"
            },
            {
                "id": 2,
                "idParent": 1,
                "name": "Техника для кухни"
            },
            {
                "id": 3,
                "idParent": 1,
                "name": "Техника для дома"
            },
            {
                "id": 4,
                "idParent": null,
                "name": "Красота и здоровье"
            },
        ],
        searchValue: '',
    }),
    mutations: {
        setSearchValue(state, newValue: string): void {
            state.searchValue = newValue;
        },
    },
    actions: {
        updateSearchValue({ commit }, newValue: string): void {
            commit('setSearchValue', newValue);
        },
    },
    getters: {
        getSearchCatalogs: (state) => (searchText: string): ICategory[] => {
            return state.groups.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
        },
    },
};


export default categoriesListModule;