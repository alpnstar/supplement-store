import axios from "axios";

export default class ProductsRequest {


    static allProducts = {
        async getAll(params = {}) {
            const response = await axios.get(process.env.API_URL + 'api/products', {
                params: {
                    'pagination[per_page]': 1,
                    ...params,
                }
            });
            return response.data;
        },
        async getById(id) {
            const response = await axios.get(process.env.API_URL + 'api/products/'+id);
            return response.data;
        }
    }

    static async newProducts() {
        const response = await axios.get(process.env.API_URL + 'api/main/new-products');
        return response.data;
    }

    static async popularProducts() {
        const response = await axios.get(process.env.API_URL + 'api/main/popular-products');
        return response.data;
    }

}
