import axios from "axios";

export default async function () {
    const response = await axios.get(process.env.API_URL + 'api/brands');
    return response.data;
}
