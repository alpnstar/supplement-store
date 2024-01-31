import axios from "axios";

export default class ProductsRequest {


    static allProducts = {
        async getAll(params = {}) {
            const response = await axios.get(process.env.API_URL + 'products', {
                params: {
                    ...params,
                }
            });
            return response.data;
        },
        async getById(id) {
            const response = await axios.get(process.env.API_URL + 'products/' + id);
            return response.data;
        },
        async getBySearch(text) {
            const response = await axios.get(process.env.API_URL + 'products', {
                params: {
                    'filter[name]': text,
                },
            });
            return response.data;
        }

    }

    static async newProducts() {
        const response = await axios.get(process.env.API_URL + 'main/new-products');
        return response.data;
    }

    static async popularProducts() {
        const response = await axios.get(process.env.API_URL + 'main/popular-products');
        return response.data;
    }

}
