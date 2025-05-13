import { IProductContainer, IProductListModuleState } from "@renderer/shared/types/types";
import { Module } from "vuex";

const productsListModule: Module<IProductListModuleState, any> = {
    namespaced: true,
    state: (): IProductListModuleState => ({
        items: [
            {
                "id": 109,
                "idGroup": 4,
                "product": {
                    "id": 3,
                    "name": "Шампунь Чистая линия",
                    "price": 32000,
                    "description": "Сделает ваши волосы неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми",
                    "weight": 1,
                    "unitType": "л.",
                },
            },
            {
                "id": 110,
                "idGroup": 4,
                "product": {
                    "id": 51,
                    "name": "Зубная паста Colgate",
                    "price": 32000,
                    "weight": 1,
                    "unitType": "л.",
                },
            },
                        {
                "id": 102,
                "idGroup": 1,
                "product": {
                    "id": 68,
                    "name": "bera",
                    "price": 32000,
                    "weight": 1,
                    "unitType": "л.",
                }
            },

            {
                "id": 100,
                "idGroup": 3,
                "product": {
                    "id": 1,
                    "name": "Утюг",
                    "price": 190000
                }
            },
            {
                "id": 101,
                "idGroup": null,
                "product": {
                    "id": 1,
                    "description": "Сделает ваши волосы неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми неотразимыми",
                    "name": "Прочий товар, без каталога",
                    "price": 14600
                }
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
        getProductById: (state) => (productId: number): IProductContainer | undefined => {
            return state.items.find(item => item.id === productId);
        },
        getProductsByGroupId: (state) => (id: number, searchText: string): IProductContainer[] => {
            if(!id) {
                return state.items.filter(item => item.idGroup === null)
            } else {
                return state.items.filter(item => item.idGroup === id && item.product.name.toLowerCase().includes(searchText.toLowerCase()));
            }
        },
    },
};


export default productsListModule;    