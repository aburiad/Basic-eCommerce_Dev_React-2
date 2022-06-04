 import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    
    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    const [count,setCount] = useState([]);
    const [uiproduct,setuiproduct] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    // let sum = 0;
    const cartToHandle =(products)=>{
        const newPrice = [...cart,products.price];
        setCart(newPrice);
        // for(let x of cart){
        //     let oldPrice = x;
        //     sum += oldPrice;
        //     console.log(sum)
        // }
    }

        const searchHandle =(event)=>{
            console.log(product)
            const searchkey = event.target.value;
            for(let x of product){
                const findvalue = x.name.includes(searchkey);
                setuiproduct(findvalue);
            }
            // console.log(mathpro)
        }

    return (
        <div>
            <div className="search">
                <input onChange={searchHandle} type="text" placeholder='search your product' />
            </div>
            <div className="shopLayout">
                {
                    product.map((singleProductObj)=>{
                        return (   
                            <Product passaFunc={cartToHandle} productInfo={singleProductObj}/>  
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop;