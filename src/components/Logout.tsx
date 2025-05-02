

import { auth } from '@/Firebase/Firebase';
import { signOut } from 'firebase/auth'
import React from 'react'
import toast from 'react-hot-toast';


const Logout = () => {

    const signOutFunction = async() =>{

try {
    
await signOut(auth);
toast.success('Successfully Logged Out')


} catch (error) {
    // console.log('Cannot sign out: ',error);
    toast.error('Cannot sign out:')
}


    }



  return (
   <>
   <button type="button"
   onClick={() =>signOutFunction()}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
      dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
       dark:focus:ring-blue-800">Logout</button>

   </>
  )
}

export default Logout;
