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
        getFilteredGroupedCategories: (state) => (searchText: string): ICategoryWithChildren[] => {
            const nodeMap: Map<number, ICategoryWithChildren> = new Map(
                state.groups.map(item => [item.id, { ...item, children: [] }])
            );

            state.groups.forEach(item => {
                if (item.idParent !== null) {
                    const parentNode = nodeMap.get(item.idParent);
                    const currentNode = nodeMap.get(item.id);
                    if (parentNode && currentNode) {
                        parentNode.children.push(currentNode);
                    }
                }
            });

            const filterNode = (node: ICategoryWithChildren): ICategoryWithChildren | null => {
                const nameMatches = node.name.toLowerCase().includes(searchText.toLowerCase());

                const filteredChildren = node.children
                    .map(child => filterNode(child))
                    .filter(Boolean) as ICategoryWithChildren[];

                if (nameMatches || filteredChildren.length > 0) {
                    return {
                        ...node,
                        children: filteredChildren,
                    };
                }
                return null;
            };

            const roots = Array.from(nodeMap.values())
                .filter(node => node.idParent === null)
                .map(node => filterNode(node))
                .filter(Boolean) as ICategoryWithChildren[];

            return roots;
        },
    },
};


export default categoriesListModule;