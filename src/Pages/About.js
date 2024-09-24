import React from 'react';
import Hero from '../assets/img/About/AboutHero.webp'
import Team1 from '../assets/img/About/team-thumb-01.webp'
import Team2 from '../assets/img/About/team-thumb-02.webp'
import Team3 from '../assets/img/About/team-thumb-03.webp'
import Team4 from '../assets/img/About/team-thumb-04.webp'


const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 px-4 md:px-1">
      <h1 className="text-4xl font-bold mb-6" >About Us</h1>


      {/* Herobanner */}

      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-20 p-6 rounded text-white' style={{ backgroundColor: '#699C47' }}>
        <img className='rounded' src={Hero} alt='...' />
        <div className="text-lg mb-4 max-w-2xl">
          <p className='text-5xl font-extrabold'>We believe in pure and organic quality</p>
          <p className='mt-10'> We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level. Always be able to find the phone that you are looking for in our offer, have made us stand out in the market, but they are simply symptoms of our dedication to what we are doing and our desire to constantly.</p>
        </div>
      </div>


      {/* Counters */}

      <div className='w-full mt-42 flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0 mt-44 text-white py-20 px-4 rounded-md' style={{ backgroundColor: '#699C47' }}>

        <div className='flex flex-col gap-4'>
          <p className='text-5xl font-bold'>89k+</p>
          <p className='text-xl font-bold'>Organic Products</p>
        </div>


        <div className='flex flex-col gap-4'>
          <p className='text-5xl font-bold'>80k+</p>
          <p className='text-xl font-bold'>Metric to supplied</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-5xl font-bold'>40k+</p>
          <p className='text-xl font-bold'>Experienced Farmer</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-5xl font-bold'>25k+</p>
          <p className='text-xl font-bold'>Organic Awards</p>
        </div>

      </div>

      {/* Mission */}

      <h2 className="text-4xl font-bold mt-52">Our Mission</h2>

      <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center mt-4">
        Our mission is to connect with our audience and share valuable insights, tips, and resources. We believe in the power of community and are committed to fostering an inclusive environment for everyone.
      </p>


      {/* Farmers */}


      <div className='w-full mt-40 text-center'>
        <h6 className='font-medium'>Professional Team</h6>
        <h1 className='text-4xl font-bold mt-6'>Meat the Farmers</h1>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-20'>

          <div className='flex flex-col items-center group'>
            <div className='overflow-hidden'>
            <img className='transition-all duration-300 group-hover:scale-105 cursor-pointer' src={Team1} alt='...' />
            </div>
            <div className='flex flex-col items-center gap-1 mt-2'>
            <h5 className='text-xl font-bold'>David Askerph</h5>
            <h6>Sr. Farmer</h6>
            </div>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='overflow-hidden'>
            <img className='transition-all duration-300 group-hover:scale-105 cursor-pointer' src={Team2} alt='...' />
            </div>
            <div className='flex flex-col items-center gap-1 mt-2'>
            <h5 className='text-xl font-bold'>David Askerph</h5>
            <h6>Sr. Farmer</h6>
            </div>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='overflow-hidden'>
            <img className='transition-all duration-300 group-hover:scale-105 cursor-pointer' src={Team3} alt='...' />
            </div>
            <div className='flex flex-col items-center gap-1 mt-2'>
            <h5 className='text-xl font-bold'>David Askerph</h5>
            <h6>Sr. Farmer</h6>
            </div>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='overflow-hidden'>
            <img className='transition-all duration-300 group-hover:scale-105 cursor-pointer' src={Team4} alt='...' />
            </div>
            <div className='flex flex-col items-center gap-1 mt-2'>
            <h5 className='text-xl font-bold'>David Askerph</h5>
            <h6>Sr. Farmer</h6>
            </div>
          </div>

        </div>
      </div>


      {/* Contact Us */}

      <div className='my-20 text-center'>
        <h2 className="text-4xl font-bold mt-32">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4 max-w-2xl mt-4">
          If you have any questions, suggestions, or feedback, please feel free to reach out. We love hearing from our community.
        </p>

        <p className="text-lg text-gray-700 mb-4 max-w-2xl mt-10">
          Thank you for visiting our page, and we hope you enjoy your stay! Together, let's make a difference.
        </p>

        <a
          href="/"
          className="mt-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
