import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";

import db from "../utils/db";
import { Store } from "../utils/Store";

export default function Home({products}) {

  const { state, dispatch} = useContext(Store);
  const { cart} = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // ajax request
    const {data} = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Out of stock");


    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added successfully to cart");

  };

  return (


      <Layout title={"Home Page"}>
              <div>
           <Landing/>

          </div>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">{products.map((product) =>(
          <ProductItem product={product} key={product.slug} addToCartHandler={addToCartHandler}></ProductItem>
        ))}





        </div>
      </Layout>


  );
}

// server side rendering
export async function getServerSideProps(){

  await db.connect();
  const products = await Product.find().lean();

  return{
    props:{
      products: products.map(db.convertDocToObj)
    }
  }
}

