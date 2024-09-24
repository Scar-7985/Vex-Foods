import React from 'react'
import ProductCard from './ProductCard'
import Data from './Data'

const NewProduct = (props) => {
  return (
    <>
      <div className='border mt-6 p-6'>

        <h1 className='text-2xl text-center font-medium'>{props.title}</h1>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 p-4 my-6">

          {Data.slice(0,10).map((item, index) => {
            return <ProductCard
              key={index}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice} />
          })}

        </div>

      </div>
    </>
  )
}

export default NewProduct
