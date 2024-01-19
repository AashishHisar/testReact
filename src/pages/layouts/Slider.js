import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Slider = () => {

    const apiUrl = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);
    const [conditionPrice, setMaxPrice] = useState(100);
    const [productCategory, setProductCategory] = useState("");
    // const [filterProduct, setFilterProduct] = useState("");

    // const history = useHistory();
    const callGetApi = async () => {
        try {
            if (productCategory == "") {
                await fetch(`https://fakestoreapi.com/products`)
                    .then(response => response.json())
                    .then(data => setData(data))
            } else {
                await fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
                    .then(response => response.json())
                    .then(data => setData(data)) 
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        callGetApi();
    }, [productCategory]);
    //for filter of products 
    const onSearch = (e) => {
        setProductCategory(e.target.value);
    }
    // for set the api filter 
    const filteredData = data.filter((data) => data.price < conditionPrice);

    return (
        <>
            <Header onSearch={onSearch} />
            {filteredData.length != 0 ? <ul className='mb-2 row flex-wrap list-inline'>
                {filteredData.map((item, index) => (
                    <li className='col-md-3 col-12 col-sm-6 p-3   my-2' key={index}>
                        <div className='shadow d-flex flex-md-column align-items-stretch h-100'>
                            <Link to={`/product/details/${item.id}`}>
                                <img src={item.image} width="200" height="200" /><br />
                                <span className='h5 text-start text-decoration-none'>{item.title}</span><br />  </Link>
                            <span className="text-bold text-primary">Price:{item.price}</span>
                        </div>
                    </li>
                ))}
            </ul> : <ul className='mb-2 row flex-wrap list-inline'><h4>Sorry Product not matched with Store</h4></ul>}

            <Link to="/" className='btn btn-primary'>Back to Menu</Link>
        </>
    )
}

export default Slider