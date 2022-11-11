import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  
  const [cart, setCart] = useState([]);
  const [totalCost, setCost] = useState(0);

  const updateCost = (cost) => {
    setCost(totalCost + cost);
  }

  const updateCart = (namer, cost) => {

    
    updateCost(cost);
    
    setCart((prevCarts) => [
      ...prevCarts,
      {
        name: namer,
        quantity: 1
      }
    ])
  };

  return (
    <div className="App">

      
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      <div id = "cart">
          <h2>Cart</h2>
          {cart.map((item, index) => (
              <p>{item.name} x {item.quantity}</p>
          ))}

          <p>Total: {totalCost}</p>
                    
      </div>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      
        
        <section class = "BakeryItem">
          
          {bakeryData[index].name}

          <img
            src = {bakeryData[index].image}
            alt = "BakeryItem"
          />

          <p>{bakeryData[index].description}</p>
          <button onClick ={() => updateCart(bakeryData[index].name, bakeryData[index].price)}>Add to Cart</button>

          <p>
            ${bakeryData[index].price}
          </p>
        
        </section>
        
      ))}

      

      
    </div>
  );
}

export default App;
