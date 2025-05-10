import { createStore } from "vuex";


const CategoriesListSlice = createStore({
    state() {
        return {
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
        }
    },
});


export default CategoriesListSlice;