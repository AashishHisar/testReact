import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = () => {

    const apiUrl = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);
    const [conditionPrice, setMaxPrice] = useState(100);

    const callGetApi = async () => {
        try {
            await fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => setData(data))

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        callGetApi();
    }, []);

    // for set the api filter 
    const filteredData = data.filter((data) => data.price < conditionPrice);
    
    return (
        <>
            <ul>
                {filteredData.map((item, index) => (
                    <li>
                        <div>
                            <span>{item.title}</span><br />
                            <img src={item.image} width="50" height="60" /><br/>
                            <span className="text-bold text-primary">Price:{item.price}</span>
                        </div>
                    </li>

                ))}
            </ul>
        </>
    )
}

export default Slider