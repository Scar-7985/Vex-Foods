import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'

const Product = () => {

  const { Data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = Data.find((e) => e.id === productId)

  return (
    <>
    <ProductInfo product={product} />
    </>
  )
}

export default Product
