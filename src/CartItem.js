import React from "react";
    //You can also use bind function for bind reference on Normal function..
 
  function CartItem(props){
    const {price,title,qty} = props.products;
    const{products,decreseQuantity,increseQuantity,onDeleteButton}  = props;
    return (
      <div className="cart-item">
      
        <div className="left-block">
          <img style={style.img} src={products.img} alt=""/>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color:'#777' }}>Rs {price}</div>
          <div style={{ color:'#777'}}>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png" className="action-icons" alt="Decrese" onClick={()=>decreseQuantity(products)}/>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" className="action-icons" alt="Increse"  onClick={()=>increseQuantity(products)}/>
            <img src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" className="action-icons" alt="Delete" onClick={()=>onDeleteButton(products.id)} />
          </div>
        </div>
       
      </div>
    );
  }

const style = {
  img: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "grey",
  },
};

export default CartItem;
