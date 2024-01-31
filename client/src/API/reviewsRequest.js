import axios from "axios";

export default class ReviewsRequest {
    static async lastReviews() {
        const response = await axios.get(process.env.API_URL + 'main/last-reviews');
        return response.data;
    }

    static async productReviews(id) {
        const response = await axios.get(process.env.API_URL + 'products/' + id);
        return response.data.data.attributes.reviews;
    }
}

