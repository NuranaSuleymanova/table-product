import { useState, useEffect } from "react";
import Table from "./components/Table";
import { IProduct } from "./models/model";
import axios from "axios";
import { Route, Routes,Navigate  } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [product,setProduct]=useState<IProduct[]>([]);
  async function getData (){
    const result= await axios.get("https://fakestoreapi.com/products")
    setProduct(result.data);
   
  }

 useEffect (()=>
 {
  getData();
 },[])
  

  return (
    <div className="App">
     
         {
          product.map(item=>(
            <Table key={item.id} product={item} />
          ))
        }
         <Routes>
      <Route path="/product-detail/:id" element ={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
