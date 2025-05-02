




import { useAuthHook } from '@/Contexts/AuthContext';
import { auth, googleProvider } from '@/Firebase/Firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { memo, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    // const {isSignedIn , setIsSignedIn} = useAuthHook();
    const {isSignedIn } = useAuthHook();
    const [email,setEmail] = useState('');

// console.log('Login cmponent re-rendered')
    const [password,setPassword] = useState('')


  const signInWithGoogle = async() =>{

// toast.success('Sign In Done') //for tesitng


if(isSignedIn){

    toast.error('You already Logged In or Signed In');
    return;

}


try{



await signInWithPopup(auth,googleProvider);

toast.success('You are successfully signed In with Google');
// console.log('You are successfully signed In with Google');
navigate('/')

}catch(error){

// console.log('Error Sign In with google:',error);
toast.error('Error Sign In with google:');
toast.error('Sorry ! Cannot be signed In');

}
    

  }



  const signInNormally = async () => {
    if (isSignedIn) {
      toast.error('You are already logged in.');
      return;
    }
  
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      //For debugging only
      // console.log('====================================');
      // console.log(userCredential);
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
      // console.error('Error while logging in:', error);
      toast.error('Error Logging In');
    }
  };
  


  return (
    <>
    <div className='min-h-screen min-w-full max-h-[100vh] overflow-y-hidden max-w-[100vw] bg-gray-900
     flex justify-center items-center '>
      <div className="loginBox   w-3/4 h-full sm:h-[38rem] sm:w-[28rem] flex flex-col
       items-center justify-center
       rounded-md bg-gray-700 space-y-10 py-8">

<div className="logo text-white font-bold text-5xl">Login</div>

<div className="input-1 mt-10">
<label htmlFor="Email" className='text-white font-bold'>Email:&nbsp;&nbsp;</label>
<input type="email" placeholder='Enter your Email' 
onChange={(e) => setEmail(e.target.value)}
className='w-[98%] h-12 sm:w-[90%] sm:h-8 bg-white rounded-sm'
 name='Email' id='Email'
 value={email}
 required/>
</div>




<div className="input-2">
<label htmlFor="Password" className='text-white font-bold'>Password:&nbsp;&nbsp;</label>
<input type="password" placeholder='Enter your Password' 
className='w-[98%] h-12 sm:w-[90%] sm:h-8 bg-white rounded-sm'
name='Password' id='Password'
onChange={(e) => setPassword(e.target.value)}
value={password}
required/>

</div>


<button onClick={() => signInNormally()} type="button" className="text-white
 bg-blue-700 hover:bg-blue-800 
focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
 text-sm px-16 sm:px-36 py-4 text-center me-2 mb-2 dark:bg-blue-600
  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

<hr  className='bg-white h-[0.5px] w-full'/>



<div className="flex items-center justify-center h-[30vh] sm:h-screen dark:bg-gray-800">
    <button onClick={() =>signInWithGoogle()} className="px-4 py-2 border flex gap-2
     border-slate-200 dark:border-slate-700 rounded-lg text-slate-700
      dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500
       hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
        <span className='text-white'>Login with Google</span>
    </button>
</div>



      </div>
    </div>
    </>
  )
}

export default Login;
