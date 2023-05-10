import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
  render() {
    const {price,title,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color:'#777' }}>Rs {price}</div>
          <div style={{ color:'#777'}}>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png" className="action-icons" alt="Increse" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" className="action-icons" alt="Decrese" />
            <img src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" className="action-icons" alt="Delete" />
          </div>
        </div>
      </div>
    );
  }
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
