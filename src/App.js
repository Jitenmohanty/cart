import "./App.css";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          id: 1,
        },
        {
          price: 99,
          title: "Watch",
          qty: 13,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          id: 2,
        },
        {
          price: 99449,
          title: "Laptop",
          qty: 18,
          img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
          id: 3,
        },
      ],
    };
    // this.testing();
  }

  handleIncreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteButton = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getTotal = () => {
    const{products} = this.state;
    let totalPrice = 0;

    products.map((product)=>{
      totalPrice = totalPrice + product.qty * product.price;
    })
    return totalPrice;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increseQuantity={this.handleIncreseQuantity}
          decreseQuantity={this.handleDecreseQuantity}
          onDeleteButton={this.handleDeleteButton}
        />
        <div style={{fontSize:25,marginLeft:80,color:'grey'}}>Total:{this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
