import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const locaction = useLocation();

    useEffect(()=>{
        if(locaction.pathname.includes('/shop')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[locaction])

    return showSearch && visible ? (
        <div className='flex justify-center items-center border-y bg-gray-50 text-center py-4'>
            <div className='w-3/4 flex items-center border border-gray-400 rounded-full  pl-10'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} 
                className='w-full bg-gray-50 outline-none py-2 text-center' type='text' placeholder='Search here...' />
                <FontAwesomeIcon className='text-lg cursor-pointer px-4' icon={faSearch} />
            </div>
            <FontAwesomeIcon onClick={()=>setShowSearch(false)} className='text-lg cursor-pointer px-4' icon={faClose} />


        </div>
    ) : null
}

export default SearchBar
