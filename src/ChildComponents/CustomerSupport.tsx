


import React, { useContext } from 'react'
import support from '../assets/pictures/support.webp'
import { ThemeContext } from '@/Contexts/ThemeContext';



function CustomerSupport() {

  const {theme} = useContext(ThemeContext)

  return (
    <>   
     <div role='main' className={`max-w-[100vw] min-h-[100vh] ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-950'}`}>
      

<div className={`mb-16 h-[10vh] ${theme === 'light' ? 'bg-blue-500 text-black' : 'bg-blue-800 text-white'} w-full flex justify-center items-center text-center`}>
<h1 className="font-bold text-3xl">Our Efficient Customer Support</h1>
</div>


<div className="w-full h-auto md:min-h-[90vh] flex flex-col justify-evenly items-center ">

<div className="img w-[100%] md:w-[50%] h-[80%]">

<img role='img' src={support} className='object-cover rounded-xl w-full h-full mb-16' alt="support executives" loading='lazy' />

</div>




<div className="w-[100%] md:w-[80%] min-h-[70%] space-y-10 p-2">

<h3 className={`text-4xl font-extrabold ${theme === 'light' ? 'text-green-800' : 'text-lime-400 '} text-center`}>Have Any Enquiry ? Feel Free to connect to us</h3>
<p className={`text-center text-[0.95rem] ${theme === 'light' ? ' text-black' : 'text-white'}`}>
At Vegan Bazaar, we pride ourselves on providing exceptional customer service to ensure a seamless shopping experience for our valued customers. Our dedicated call center team is always ready to assist you with any inquiries, whether it's about product details, order tracking, returns, or general support. Available during extended business hours, our friendly and knowledgeable representatives strive to resolve your concerns promptly and professionally, leaving you with complete peace of mind.

For added convenience, we also offer email customer support, allowing you to reach out to us at any time. Whether you have a detailed query or simply need guidance, our email support team is committed to providing clear, thorough, and timely responses. We understand the importance of quick and effective communication, and our team goes the extra mile to ensure that your questions are answered accurately and with care.

At Vegan Bazaar , our mission is to prioritize your satisfaction at every step. Whether you're reaching out to us via phone or email, rest assured that we are here to make your experience with our vegan products as smooth and enjoyable as possible. Your trust matters to us, and we’re always here to help!

</p>


<div className="contact-bar text-base  sm:text-lg flex-wrap bg-teal-800 shadow-xl rounded-xl
 text-white w-full flex flex-col justify-evenly h-[44rem] p-5">
  
  <div className="first-row h-auto w-full flex space-x-10">


<h3 className=""><b className='underline'>Toll Free:</b>1800-5656-8569&nbsp;<b>{`For India`}</b></h3>
  </div>


  <div className="first-row h-auto flex w-full space-x-10">


<h3 className=""><b className='underline'>Toll Free:</b>1800-2525-3335&nbsp;<b>{`For all other countries except India`}</b></h3>
  </div>

  <div className="first-row  w-full ">
<h3 className=""><b className='underline'>Email Address(Customer Enquiry): <br />
</b>veganbazaarservcus@gmail.com&nbsp;<b>{`For all other countries`}</b></h3>
  </div>

  <div className="first-row  w-full ">
<h3 className=""><b className='underline'>Email Address(B2B Enquiry): <br />
</b>veganbazaarb2b@hotmail.com&nbsp;<b>{`For all countries`}</b></h3>
  </div>

  

</div>

</div>



</div>


    </div>
    </>

  )
}

export default CustomerSupport;

