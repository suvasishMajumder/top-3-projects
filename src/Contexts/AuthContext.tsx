


import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase" // Adjust the import based on 
import toast from "react-hot-toast";


export const AuthContext = createContext({

isSignedIn: false,
setIsSignedIn: () => {}, //placeholder function


})


export const useAuthHook = () =>{

return useContext(AuthContext)

}


export const AuthProvider = ({children}) =>{

const [isSignedIn, setIsSignedIn] = useState(() =>{

const val = localStorage.getItem("isSignedIn"); 

return val ? JSON.parse(val) : false;


})


useEffect(() =>{



const unsubscribe = auth.onAuthStateChanged((user)=>{

    try{
const signedIn = !!user; //converting to Boolean . Converts any truthy/falsy value to a strict boolean (true/false),


localStorage.setItem("isSignedIn",JSON.stringify(signedIn));

setIsSignedIn(signedIn);


// console.log("Auth State Changed:" , signedIn ? "Signed In" : "SignedOut")
// console.log(auth)

}catch(error){

// console.log('Sorry ! Some error occured while signing in with google',error);
toast.error('Sorry ! Some error occured while signing in with google');

}

})


return () => unsubscribe();


},[])


return (

<AuthContext.Provider value={{isSignedIn, setIsSignedIn}}>

{children}

</AuthContext.Provider>

)


}