import axios from "axios";

export default class ReviewsRequest {
    static async lastReviews() {
        const response = await axios.get(process.env.API_URL + 'api/main/last-reviews');
        return response.data;
    }
}

