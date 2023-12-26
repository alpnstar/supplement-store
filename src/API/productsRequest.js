import productImg from "../../public/imgs/product-img.png";
import product2Img from "../../public/imgs/product-img-2.png";
import product3Img from "../../public/imgs/product-img-3.png";
import product4Img from "../../public/imgs/product-img-4.png";

export default class ProductsRequest {
    static async getAll() {
        // const response = await axios.get('');
        const response = [{
            id: 1,
            imgSrc: productImg,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 3.2,
                total: 1,
            },
            price: '950$',
            prevPrice: '1250$',
            publicationDate: new Date('December 5, 2023 03:24:00')
        }, {
            id: 2,
            imgSrc: product2Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 2.1,
                total: 2,
            },
            price: '950$',
            prevPrice: '1250$',
            publicationDate: new Date('December 1, 2023 03:24:00')
        }, {
            id: 3,
            imgSrc: product3Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 1.9,
                total: 6,
            },
            price: '950$',
            prevPrice: '1250$',
            publicationDate: new Date('December 29, 2023 03:24:00')
        }, {
            id: 4,
            imgSrc: product4Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 2,
                total: 2,
            },
            price: '950$',
            prevPrice: '1250$',
            publicationDate: new Date('December 21, 2023 03:24:00')
        }]

        return response;
    }
}

