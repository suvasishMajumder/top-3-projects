






import { useAuthHook } from '@/Contexts/AuthContext';
import { auth, googleProvider } from '@/Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth , signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button';

const SignUp = () => {

    const navigate = useNavigate();

    const {isSignedIn , setIsSignedIn} = useAuthHook();
    const [email,setEmail] = useState('');


    const [password,setPassword] = useState('')


  const signInWithGoogle = async() =>{

// toast.success('Sign In Done') //for tesitng


if(isSignedIn){

    toast.error('You already Logged In or Signed In');
    return;

}


try{



await signInWithPopup(auth,googleProvider);

toast.success('You are successfully signed Up with Google');
// console.log('You are successfully signed Up with Google');
navigate('/')

}catch(error){

// console.log('Error Signing Up with google:',error);
toast.error('Sorry ! Cannot be Signed Up');

}
    

  }



  const signInNormally = async () => {
    if (isSignedIn) {
      toast.error('You are already logged in.');
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
if(!emailPattern.test(email)){

  toast.error(`${email} is not a valid Email Address`);
  return;

}


if(!(password.length >= 8)){

  toast.error(`The Password Must Be At Least 8 characters`);
  return;

}
  
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // console.log('====================================');
      // console.log(userCredential); //I have done this for debugging purpose
      // console.log('====================================');
      toast.success('You are successfully logged in with Email and Password');
      // setIsSignedIn(true); // Update state to indicate the user is logged in
      navigate('/');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found. Please check your email or sign up.');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password. Please try again.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
      console.error('Error while logging in:', error);
    }
  };
  


  return (
    <>
    <div className='min-h-screen min-w-full max-h-[100vh] overflow-y-hidden max-w-[100vw] bg-gray-950
     flex justify-center items-center '>
      <div className="signUpBox w-full h-full sm:h-[38rem] sm:w-[28rem] flex flex-col
       items-center justify-center
       bg-gray-950 border-white border-[1px] rounded-xl shadow-md space-y-10 py-8">

<div className="logo text-white font-bold text-5xl">Sign Up</div>

<div className="input-1 mt-10">
<label htmlFor="Email" className='text-white font-bold'>Email:&nbsp;&nbsp;</label>
<input type="email" placeholder='Enter your Email' 
onChange={(e) => setEmail(e.target.value)}
className='w-[98%] p-2 h-12 sm:w-[90%] sm:h-8 bg-white rounded-sm'
 name='Email' id='Email'
 value={email}
 required/>
</div>




<div className="input-2">
<label htmlFor="Password" className='text-white font-bold'>Password:&nbsp;&nbsp;</label>
<input type="password" placeholder='Enter your Password' 
className='w-[98%] p-2 h-12 sm:w-[90%] sm:h-8 bg-white rounded-sm'
name='Password' id='Password'
onChange={(e) => setPassword(e.target.value)}
value={password}
required/>

</div>


<Button onClick={() => signInNormally()} type="button" className="text-white
 bg-blue-700 hover:bg-blue-800 
focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
 text-sm px-24 sm:px-36 py-6 text-center me-2 mb-2 dark:bg-blue-600
  dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</Button>

<hr  className='bg-white h-[0.5px] w-full'/>


<div className="text-white cursor-pointer transition-all font-medium flex flex-col text-center">
  Already Have An Account or Existing User ?&nbsp;&nbsp;
<span className='underline font-normal hover:text-blue-700' onClick={()=>navigate('/Login')} >Login / Sign In</span></div>



<div className="flex items-center justify-center h-[30vh] sm:h-screen dark:bg-gray-800">
    <button onClick={() =>signInWithGoogle()} className="px-4 py-2 border flex gap-2
     border-slate-200 dark:border-slate-700 rounded-lg text-slate-700
      dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500
       hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
        <span className='text-white'>SignUp with Google</span>
    </button>
</div>



      </div>
    </div>
    </>
  )
}

export default SignUp;
