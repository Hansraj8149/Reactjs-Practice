import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
    const [products, setProducts]= useState([]);
    useEffect(async () => {
      const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '278ae3d70fmshff1c3f652c3a521p10ba48jsndffddb2ee988',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };
      
      try {
        await fetch(url, options)
        .then(response => response.json())
        .then(products => {
          // console.log(products.hints);
          setProducts(products.hints);
        })

      } catch (error) {
        console.error(error);
      }

    },[])
  return (
    <div className='container mx-auto pb-24'>
        <h1 className='font-bold text-lg my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
            {
              products.map(product => <Product key={product.foodId} product={product}/>)
            }
          

        </div>
    </div>
  )
}

export default Products
