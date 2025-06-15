import { Check, House } from "lucide-react";
import { Button } from "../components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { motion } from "framer-motion";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { AuthContext } from "@/Contexts/AuthContext";


const CheckPage3 = () => {


const {isSignedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const { list, selectVal, total , formData , random } = location.state || {};




  const {Email , FirstName , LastName , address , phNumber , pincode , selectCountry , shippingMethod
  } = formData;
  




  useEffect(()=>{

    setTimeout(() => {
      
      setLoading(false);

    }, 6000)


  },[])

const [loading , setLoading] = useState(true);

const { theme } = useContext(ThemeContext)


if(!isSignedIn){

  return (

    <Navigate to={'/Login'} replace={true}/>
  )

}

if(loading){

return (

  <div className="min-h-[100vh] flex justify-center items-center max-w-[100vw]">
    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-4xl mr-20`}>
      Processing Your Order</h1>
 <ClockLoader color="blue" size={60} />
 </div>
)
}




  return (
    <>
    <motion.div className={`min-h-[100vh] py-28 flex flex-col justify-center space-y-14 
      items-center ${theme === 'light' ? 'bg-zinc-300 text-gray-950' : 'bg-gray-950 text-zinc-300'}`}
    initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:2.2}}>
      <div className="h-2/5 w-4/5 sm:w-3/5 lg:w-2/5 text-center p-16 bg-gray-700 space-y-10 flex-col flex rounded-xl justify-center items-center">
        <div className="h-28 w-28 rounded-full bg-white flex justify-center items-center">
          <Check className="text-green-600" size={65} />
        </div>

        <h3 className="text-xl text-white">
          <strong className="">Order Id:</strong> {random}
        </h3>

        <p className="text-white text-center">
          {`The total order items value is Rs.${total} and the COD order mode is ${selectVal} `}
        </p>

        <p className="text-white">{`Your ordered products will be delivered to your
         provided address i.e, ${address} , pincode: ${pincode} and you will receive the order details in your email
         address i.e, ${Email}`}</p>

        <Button
          onClick={() => navigate("/")}
          className={`bg-[#12CE51] text-white cursor-pointer 
         md:w-64 lg:w-96 py-6 flex space-x-1.5`}
        >
          <strong style={{color:'black'}}>Back To Home Page</strong>
          <House  style={{color:'black'}} />
        </Button>
      </div>
    </motion.div>
    </>
  );
};

export default CheckPage3;
