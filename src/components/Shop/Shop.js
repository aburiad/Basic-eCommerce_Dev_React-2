
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
    let sum = 0;
    const cartToHandle =(products)=>{
        const newPrice = [...cart,products.price];
        setCart(newPrice);
    }

    const addition = (cart)=>{
        console.log(cart)
        let total = 0;
        for(let x of cart){
            total += x;
        }
        return total;
    }
    const addtotal = addition(cart);
        // search Handeling 
        const searchHandle =(event)=>{
            console.log(product)
            const searchkey = event.target.value;
            const searchres =  product.filter(product=> product.name.includes(searchkey))
            console.log(searchres)
            setuiproduct(searchres)
        }
        let ordered = cart.length;
    return (
        <div>
            <div className="search">
                <input onChange={searchHandle} type="text" placeholder='search your product' />
            </div>
            <div className="shopLayout">
                <Cart passCartinfo={addtotal} len={ordered}></Cart>
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