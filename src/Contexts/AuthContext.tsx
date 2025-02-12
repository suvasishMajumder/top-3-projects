


import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase" // Adjust the import based on 


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
const signedIn = !!user; //converting to Boolean

localStorage.setItem("isSignedIn",JSON.stringify(signedIn));

setIsSignedIn(signedIn);


console.log("Auth State Changed:" , signedIn ? "Signed In" : "SignedOut")
console.log(auth)

}catch(error){

console.log('Sorry ! Some error occured while signing in with google',error);

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