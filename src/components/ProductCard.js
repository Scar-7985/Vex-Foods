import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <>
      <Link className='w-60 border rounded-md group' to={`/product/${props.id}`}>

        <div className="w-full">
          <div className='overflow-hidden'>
            <img className='group-hover:scale-105 transition-all duration-400' src={props.image} alt="..." />
          </div>
          <div className="p-4">
            <h5 className="text-md font-medium">{props.name}</h5>
            <p className=" flex gap-2 my-1">
              <span className='line-through text-gray-400 text-sm'>${props.oldPrice}</span>
              <span>${props.newPrice}</span>
            </p>
          </div>
        </div>

      </Link>

    </>
  )
}

export default ProductCard
