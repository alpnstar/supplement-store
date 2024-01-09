import axios from "axios";

export default class CategoriesRequest{
    static async getAll() {
        const response = await axios.get('http://172.12.0.2/api/categories');
        return response.data;
    }
    static async getById() {
        const response = await axios.get('http://172.12.0.2/api/categories');
        return response.data;
    }
}