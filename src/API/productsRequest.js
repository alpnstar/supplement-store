import productImg from "../../public/imgs/product-img.png";
import product2Img from "../../public/imgs/product-img-2.png";
import product3Img from "../../public/imgs/product-img-3.png";
import product4Img from "../../public/imgs/product-img-4.png";
import axios from "axios";

export default class ProductsRequest {
    static async getAll() {
        const response = await axios.get('http://172.12.0.2/api/products');
        return response.data;
    }
    static async getById() {

    }
}

