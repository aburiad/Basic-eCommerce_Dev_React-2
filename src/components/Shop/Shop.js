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
        .then(data => {setProduct(data);setuiproduct(data)})
        
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
        // search Handeling 
        const searchHandle =(event)=>{
            console.log(product)
            const searchkey = event.target.value;
            const searchres =  product.filter(product=> product.name.includes(searchkey))
            console.log(searchres)
            setuiproduct(searchres)
        }
    return (
        <div>
            <div className="search">
                <input onChange={searchHandle} type="text" placeholder='search your product' />
            </div>
            <div className="shopLayout">
                {
                     uiproduct.map((singleProductObj)=>{
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