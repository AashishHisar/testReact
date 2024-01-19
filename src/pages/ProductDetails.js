import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { productId } = useParams();
    const [data, setData] = useState([])

    const getProductDetails = async () => {
        try {
            // await fetch(`https://fakestoreapi.com/products/${productId}`)
            //     .then(response => response.json())
            //     .then(data => setData(data))
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            setData(data)
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [])
    // console.log(data.rating[rate]);
    return (
        <div className='container bootdey mt-5'>
            <div className="col-md-12" >
                <section className="panel shadow">
                    <div className="panel-body d-flex">
                        <div className="col-md-6">
                            <div className="pro-img-details">
                                <img src={data.image} alt="" weight="400" height="400" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="pro-d-title">
                                <a href="#" className=""> {data.title} </a>
                            </h4><p> {data.description}</p>
                            <div className="product_meta">
                                <span className="posted_in">
                                    <strong>Categories:</strong>
                                    <a rel="tag" href="#">{data.category}</a>
                                </span>
                                <br />
                                <span className="tagged_as">
                                    <strong>Total Rating:</strong>
                                    <a rel="tag" href="#">
                                        {data?.rating?.rate}
                                    </a>
                                </span>
                            </div>
                            <div className="m-bot15">
                                <strong>Price : </strong>
                                <span className="amount-old">{data.price}</span>
                                <input type="quantiy" placeholder="1" className="form-control quantity mt-2 mb-2" />
                            </div><p>
                                <button className="btn btn-round btn-danger" type="button">
                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Link to="/dashboard" className='btn btn-primary mt-3'>Back To Dashboard</Link>
        </div>

    )
}

export default ProductDetails