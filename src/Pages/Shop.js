import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../components/ProductCard'

const Shop = () => {

    const { Data, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant')



    useEffect(() => {
        setFilterProducts(Data);
    }, [])

    // Filter Selection

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    // Filter Apply

    const applyFilter = () => {

        let productsCopy = Data.slice();

        // Search - Bar

        if(showSearch && search){
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        // ============  //

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }

        setFilterProducts(productsCopy)


        // if(productsCopy == 0){
        //     console.log("hello");
            
        // }

    }

    useEffect(() => {
        applyFilter();
    },[category, search, showSearch])


    const sortProduct = () => {

        let filtProCopy = filterProducts.slice();

        switch (sortType) {

            // sort type low-high

            case 'low-high': setFilterProducts(filtProCopy.sort((a, b) => (a.newPrice - b.newPrice)));
                break;

            // sort type high-low

            case 'high-low': setFilterProducts(filtProCopy.sort((a, b) => (b.newPrice - a.newPrice)));
                break;

            default: applyFilter();
                break;
        }

    }

    useEffect(() => {
        sortProduct();
    }, [sortType])


    // ============================================  //
    // ============================================  //

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 lg:px-0'>

            {/* Sidebar Filter */}

            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 font-medium'>Filter
                    <FontAwesomeIcon className={`text-xs text-gray-700 sm:hidden ${showFilter ? 'rotate-90' : ''}`} icon={faAngleRight} />
                </p>
                {/* Category Filter */}

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Vegetable'} onChange={toggleCategory} /> Vegetables
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Fruit'} onChange={toggleCategory} /> Fruits
                        </p>
                    </div>
                </div>

                {/* Product Sort */}

                <div className={`mt-6 border border-gray-300 ${showFilter ? '' : 'hidden'} sm:block`}>

                    <select onChange={(e) => setSortType(e.target.value)}
                        className='w-full h-12 text-sm font-medium pl-5  cursor-pointer'>
                        <option value="relevant">Sort by: Relevent</option>
                        <option value="low-high">Sort by: Low-high</option>
                        <option value="high-low">Sort by: High-low</option>
                    </select>
                </div>

            </div>

            {/* Main Container */}

            <div className='w-full border mt-6 p-6'>

                <h1 className='text-2xl text-center font-medium'>--- All Products ---</h1>

                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 p-4 my-6">

                    {filterProducts.map((item, index) => {
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

        </div>
    )
}

export default Shop
