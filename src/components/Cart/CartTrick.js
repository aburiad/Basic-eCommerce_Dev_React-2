// import React from 'react';

import { useState } from 'react';
import { Badge, Button ,Modal, } from 'react-bootstrap';

// const CartTrick = (props) => {
//     console.log(props.passcart)
//     let pPrice = props.passcart;
//     return (
//         <div>
//             {
               
//             }
//             <h2>total Price: {props.passcart}</h2>
//         </div>
//     );
// };

// export default CartTrick;
function CartTrick(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let pPrice = props.passcart;
    return (
      <>
        <Button variant="primary" onClick={handleShow}>Product Info</Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Product Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>Total Price: {props.passcart}</h4>
              <Button variant="primary">
                Total Ordered <Badge bg="secondary">{props.len}</Badge>
                <span className="visually-hidden">unread messages</span>
                </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default CartTrick;