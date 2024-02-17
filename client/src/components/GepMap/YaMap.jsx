import React, {useEffect} from "react";

const YaMap = () => {
    const initMap = () => {
        const map = new ymaps.Map("map", {
            center: [43.120851, 47.106600], // Координаты центра карты
            zoom: 10, // Масштаб карты
        });


        const shops = [
            new ymaps.GeoObject({
                geometry: {
                    type: "Point", coordinates: [43.204062, 46.867237]
                }
            }),
            new ymaps.GeoObject({
                geometry: {
                    type: "Point", coordinates: [42.973011, 47.421652]
                }
            }),
        ]

        shops.map(function (shop){
            map.geoObjects.add(shop);
        })
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=b5d0d16f-8487-40df-b4e2-ed28f1f8cfd7&suggest_apikey=0dcd5622-f5d2-4390-a2d5-7fce98035afb";
        script.async = true;
        script.onload = () => {
            ymaps.ready(initMap);
        };

        document.body.appendChild(script);
    }, []);

    return <div id="map" style={{width: "100%", height: 400}}/>;
};

export default YaMap;