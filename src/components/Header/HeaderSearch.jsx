import React, {useEffect, useRef, useState} from 'react';
import ProductsRequest from "../../API/productsRequest";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const HeaderSearch = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [firstDownload, setFirstDownload] = useState(false);
    const [fullResult, setFullResult] = useState();
    const [pinchedResult, setPinchedResult] = useState();
    const ref = useRef();

    async function productsFetch(value) {
        try {
            setIsLoading(true);
            const response = await ProductsRequest.allProducts.getBySearch(value);
            setFullResult(response.data);
            setDisplay(true);
            setFirstDownload(true)
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        Array.isArray(fullResult) && setPinchedResult(fullResult.slice(0, 4))
    }, [fullResult]);

    function closeOptions(event) {
        if (ref.current.className === 'header__search' && !ref.current.contains(event.target) && display) {
            setDisplay(false);
        }
    }

    useEffect(() => {
        if (display) {
            document.addEventListener('click', closeOptions)
        } else {
            document.removeEventListener('click', closeOptions)
        }
        return () => document.removeEventListener('click', closeOptions);
    }, [display]);

    return (
        <div ref={ref} className="header__search">
            <input value={searchValue} onChange={(event) => {
                setSearchValue(event.target.value);
                if (event.target.value.length >= 3) {
                    productsFetch(event.target.value);
                } else setDisplay(false);
            }
            } onFocus={() => setDisplay(true)}
                   placeholder="Ищите по названию или артикулу" type="text"/>
            <div className="header__search-result">
                <ul className="custom-select-options header__search-options">
                    {display ? (!isLoading ? (fullResult && fullResult.length !== 0 && pinchedResult
                                ? <>
                                    {pinchedResult.map(item => <li
                                        onClick={() => {
                                            setDisplay(false);
                                            navigate('/' + item.id);
                                        }
                                        }
                                        key={item.attributes.name}>
                                <span className="header__search-options-title">
                                <img src={item.attributes.image} alt=""/>
                                    {item.attributes.name}</span>
                                        <span className="header__search-options-price">{item.attributes.price} ₽</span>
                                    </li>)}
                                    {fullResult.length > 4 && <li onClick={() => {
                                        navigate('/search/' + searchValue)
                                    }}>
                                        Остальные {fullResult.length - pinchedResult.length} товаров
                                    </li>}
                                </> : fullResult && fullResult.length === 0 ? <li>Ничего не найдено</li> : ''
                        ) :
                        <li>Поиск...</li>) : ''}
                </ul>
            </div>
        </div>
    )
        ;
};

export default HeaderSearch;