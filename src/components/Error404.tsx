import React from 'react';
import bgImg from './error_404.jpg'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {

const navigate = useNavigate()
  
  return (
    <>
    <div
      className='h-[110vh] max-w-[100vw] text-center space-y-5 text-white text-bold'
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
    

<h1 className="text-6xl text-red-600">Page Not Found</h1>
<button onClick={() => navigate('/')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 
focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 
px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go To Home Page</button>


    </div>
    </>
  );
};

export default Error404;