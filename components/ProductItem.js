/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>

        <h2 className="text-lg">{product.name}</h2>

        </Link>
        <p className=" text-blue-500 mb-2">{product.brand}</p>
        <p>R{product.price}</p>
        <button className="primary-button w-full" type="button">Add to Cart</button>
      </div>


    </div>
  );
}
