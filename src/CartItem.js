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
        // this.testing();
    }

    //You can also use bind function for bind reference on Normal function..

    testing(){

      const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('done');
        },5000)
      })

      promise.then(()=>{
        //Synchronous call
          this.setState({qty:100});
          console.log('state',this.state);
      })

    }

    decreseQuantity = ()=>{
      const {qty} =this.state;

      if(qty===0){
        return;
      }
      this.setState((prevState) =>{
        return{
           qty:prevState.qty-1
        }
    })
  }

    increseQuantity = ()=>{
        console.log('Click',this.state);
        //1st approach
        // this.setState({
        //   qty:this.state.qty +1
        // })
        // 2nd approach
        this.setState((prevState) =>{
          return{
             qty:prevState.qty+1,
          }
            
        })
    }
  render() {
    const {price,title,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.img}  alt=""/>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color:'#777' }}>Rs {price}</div>
          <div style={{ color:'#777'}}>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png" className="action-icons" alt="Decrese" onClick={this.decreseQuantity}/>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" className="action-icons" alt="Increse"  onClick={this.increseQuantity}/>
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
