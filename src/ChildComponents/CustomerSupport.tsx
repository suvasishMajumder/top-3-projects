


import React from 'react'
import support from '../assets/pictures/support.png'

function CustomerSupport() {
  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-gray-100'>
      

<div className="h-[10vh] bg-sky-400 w-full flex justify-center items-center text-center">
<h1 className="font-bold text-3xl">Our Efficient Customer Support</h1>
</div>


<div className="w-full min-h-[120vh] md:min-h-[90vh]  place-items-center grid grid-cols-1 lg:grid-cols-2">

<div className="img w-[100%] md:w-[50%] h-[80%]">

<img src={support} className='object-contain rounded-xl w-full h-full' alt="" />

</div>




<div className="img w-[100%] md:w-[50%] min-h-[70%] space-y-10 p-2">

<h3 className="text-4xl text-green-800 text-center">Have Any Enquiry ? Feel Free to connect to us</h3>
<p className="text-[0.95rem]">
At Vegan Bazaar, we pride ourselves on providing exceptional customer service to ensure a seamless shopping experience for our valued customers. Our dedicated call center team is always ready to assist you with any inquiries, whether it's about product details, order tracking, returns, or general support. Available during extended business hours, our friendly and knowledgeable representatives strive to resolve your concerns promptly and professionally, leaving you with complete peace of mind.

For added convenience, we also offer email customer support, allowing you to reach out to us at any time. Whether you have a detailed query or simply need guidance, our email support team is committed to providing clear, thorough, and timely responses. We understand the importance of quick and effective communication, and our team goes the extra mile to ensure that your questions are answered accurately and with care.

At Vegan Bazaar , our mission is to prioritize your satisfaction at every step. Whether you're reaching out to us via phone or email, rest assured that we are here to make your experience with our vegan products as smooth and enjoyable as possible. Your trust matters to us, and we’re always here to help!

</p>

</div>



</div>


    </div>
  )
}

export default CustomerSupport;

