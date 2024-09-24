import React from 'react'
import Hero from '../components/Hero'
import LatestProduct from '../components/LatestProduct'
import Newsletter from '../components/Newsletter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGift,
  faHeadset,
  faTruck,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons'


const Header = () => {

  

  return (
    <>

      {/* HeroBanner */}

      <Hero />

      {/* ======= Latest Products ======= */}

      <LatestProduct title={'--- Latest Products ---'} />


      {/* ====================== */}

      {/* ======== About ======== */}



      <div className="flex flex-col md:flex-row gap-4 mt-6 px-2 py-6 md:p-6 md:rounded" style={{ backgroundColor: '#699C47' }}>

        <div className="text-center text-green-700 rounded-md p-4 bg-white" >

          <FontAwesomeIcon className='text-3xl mb-2' icon={faGift} />
          <h4 className='text-2xl mb-3'>Product Packing</h4>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, pariatur!</p>

        </div>

        <div className="text-center text-green-700 rounded-md p-4 bg-white">

          <FontAwesomeIcon className='text-3xl mb-2' icon={faHeadset} />
          <h4 className='text-2xl mb-3'>24X7 Support</h4>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, pariatur!</p>

        </div>

        <div className="text-center text-green-700 rounded-md p-4 bg-white">

          <FontAwesomeIcon className='text-3xl mb-2' icon={faTruck} />
          <h4 className='text-2xl mb-3'>Delivery in 5 Days</h4>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, pariatur!</p>

        </div>

        <div className="text-center text-green-700 rounded-md p-4 bg-white">

          <FontAwesomeIcon className='text-3xl mb-2' icon={faCreditCard} />
          <h4 className='text-2xl mb-3'>Secure Payment</h4>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, pariatur!</p>

        </div>

      </div>


      {/* ================ */}

      {/* NewsLetter */}

      <Newsletter />

      {/* ================ */}

    </>
  )
}

export default Header
