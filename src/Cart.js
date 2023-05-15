import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products:[
            {
                price:999,
                title:'Phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price:99,
                title:'Watch',
                qty:13,
                img:'',
                id:2
            },
            {
                price:99449,
                title:'Laptop',
                qty:18,
                img:'',
                id:3
            }
           ]
        }
        // this.testing();
    }

     handleIncreseQuantity= (product)=>{
            const {products} = this.state;
            const index = products.indexOf(product);

            products[index].qty+=1;
            this.setState({
                products:products
            })
    }

    handleDecreseQuantity= (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(   products[index].qty === 0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })
}

handleDeleteButton = (id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id)

    this.setState({
        products:items
    })
}

   render(){
    const {products} = this.state;
    return(
        <div className="cart">
            {products.map((item)=>{
                return (
                <CartItem 
                    products={item} 
                    key={item.id}
                    increseQuantity={this.handleIncreseQuantity}
                    decreseQuantity={this.handleDecreseQuantity}
                    onDeleteButton={this.handleDeleteButton}
                />
                )
            })}
        </div>
    )
   }
}

export default Cart;