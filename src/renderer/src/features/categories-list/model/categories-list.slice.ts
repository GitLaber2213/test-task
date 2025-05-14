import { ICategory, ICategoryListModuleState, ICategoryWithChildren } from "@renderer/shared/types/types";
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
        updateCatalogs({ commit }, catalogs: ICategory[]): void {
            commit('setGroups', catalogs);
        },
    },
    getters: {
        getSearchCatalogs: (state) => (searchText: string): ICategory[] => {
            return state.groups.filter((item) => item?.name?.toLowerCase().includes(searchText.toLowerCase()))
        },
        getFilteredGroupedCategories: (state) => (searchText: string): ICategoryWithChildren[] => {
            const map: Map<number, ICategoryWithChildren> = new Map();
            const roots: ICategoryWithChildren[] = [];

            
            const filtered: ICategory[] = state.groups.filter(item =>
                item?.name?.toLowerCase().includes(searchText.toLowerCase())
            );


            filtered.forEach(group => {
                map.set(group.id, { ...group, children: [] });
            });


            filtered.forEach(group => {
                const currentNode = map.get(group.id)!;
                if (group.idParent === null) {
                    roots.push(currentNode);
                } else {
                    const parentNode = map.get(group.idParent);
                    if (parentNode) {
                        parentNode.children.push(currentNode);
                    }
                }
            });
            return roots;
        }
    },
};


export default categoriesListModule;