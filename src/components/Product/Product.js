import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,seller,price,img} = props.productInfo;
    const info = props.productInfo;
    const pnameslice = info.name.slice(0,21);
    return (
            <div className="shopItem">
                <div className="shopThumb">
                    <img src={img}/>
                </div>
                <div className="shopContent">
                    <h4 className="shopTitle">{pnameslice}</h4>
                    <span className='brand'>{seller}</span>
                    <h5 className="productPrice">${price}</h5>
                    <span className="productRating"></span>
                    <button onClick={()=>{props.passaFunc(props.productInfo)}} className="addtoCart">Add Cart</button>
                </div>
            </div>
    );
};

export default Product;