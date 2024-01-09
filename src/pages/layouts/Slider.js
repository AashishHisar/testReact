import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = () => {

    const apiUrl = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);
    const [conditionPrice,setMaxPrice]=useState(100);

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
                    <li><img src={item.image} width="50" height="50"/></li>
                    
                ))}
            </ul>
        </>
    )
}

export default Slider