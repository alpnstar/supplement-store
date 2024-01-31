import axios from "axios";

export default class CategoriesRequest {
    static async getAll() {
        const response = await axios.get(process.env.API_URL + 'categories');
        return response.data;
    }

    static async getById() {
        const response = await axios.get(process.env.API_URL + 'categories');
        return response.data;
    }
}