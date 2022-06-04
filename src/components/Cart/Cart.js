import React from 'react';
import './Cart.css'
import CartTrick from './CartTrick';
const Cart = (props) => {
    return (
        <div className='extra_layout extraTrick'>
            <CartTrick passcart={props.passCartinfo} len={props.len}/>
        </div>
    );
};

export default Cart;