import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { Data, addToCart } = useContext(ShopContext);
    const { productId } = useParams();
    const product = Data.find((e) => e.id === Number(productId));


    return (
        <div className='flex flex-col py-6'>
            <Link to='/shop' className='bg-red-400 text-white py-2 px-4' >
            <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
            Go Back</Link>
            <div className="w-80 mx-auto border rounded-md my-24">
                <div className='overflow-hidden'>
                    <img className='w-full' src={product.image} alt={product.name} />
                </div>
                <div className="p-4">
                    <h5 className="text-lg font-medium">{product.name}</h5>
                    <h5 className="text-md text-gray-500 font-medium">{product.category}</h5>
                    <h5 className="text-xs text-gray-500 font-medium my-2"><span className='font-bold'>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <p className="flex gap-2 my-1">
                        <span className='line-through text-gray-400 text-sm'>${product.oldPrice}</span>
                        <span>${product.newPrice}</span>
                    </p>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full border border-green-400 bg-green-400 hover:bg-white text-white hover:text-green-400 rounded-md p-2 mt-2"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
