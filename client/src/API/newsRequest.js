import axios from "axios";

export default class NewsRequest {
    static allNews = {
        async getAll() {
            const response = await axios.get(process.env.API_URL + 'api/posts', {
                params: {}
            });
            return response.data;
        },
        async getById(id) {
            const response = await axios.get(process.env.API_URL + 'api/posts/' + id);
            return response.data;
        }
    }

    static async recentNews() {
        const response = await axios.get(process.env.API_URL + 'api/main/news');
        return response.data;
    }
}