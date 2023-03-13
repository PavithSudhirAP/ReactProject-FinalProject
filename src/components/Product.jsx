import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import ResponsiveDrawer from './ResponsiveDrawer';

const baseURL = " https://jsonplaceholder.typicode.com/photos";

function Product() {
  
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProductList(response.data);
    });
  },[])

  return (
    <>
      
      <div className="contentWrap">
        <ResponsiveDrawer />
      <div className="listItems">
        <ProductList list={productList} />
      </div> 
    </div>
    </>
  );
}

export default Product;
