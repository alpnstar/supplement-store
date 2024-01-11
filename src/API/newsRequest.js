import axios from "axios";

export default class NewsRequest {
    static allNews = {
        async getAll() {
            const response = await axios.get(process.env.API_URL + 'api/posts', {
                params: {
                    'pagination[per_page]': 12,
                }
            });
        },
        async getById(id) {
            const response = await axios.get(process.env.API_URL + 'api/posts', {
                params: {
                    'id': id,
                }
            });
        }
    }

    static async recentNews() {
        const response = await axios.get(process.env.API_URL + 'api/main/news');
        return response.data;
    }
}