import React from 'react'

const Product = (props) => {
  // console.log(props)
  console.log(props.product.food);
  return (
    <div>
       <img src={props.product.food.image} alt='peproni.png'/>
                <div className='text-center'>
                <h2 className='text-lg font-bold py-2'>{props.product.food.label}</h2>
                <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{props.product.food.category}</span>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <span>₹400</span>
                    <button className='py-1 px-4 rounded-full bg-yellow-500 font-bold'>ADD</button>
                </div>
    </div>
  )
}

export default Product
