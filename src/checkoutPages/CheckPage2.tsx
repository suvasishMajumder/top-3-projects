

import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, 
  AlertDialogDescription , AlertDialogFooter, AlertDialogHeader,
   AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import emailjs from "emailjs-com";
import { AuthContext } from "@/Contexts/AuthContext";



const CheckPage2 = () => {


  const { theme } = useContext(ThemeContext);
const [popup , setShowPopUp] = useState<boolean>(false);
const [random , setRandom] = useState<string>('');

const {isSignedIn} = useContext(AuthContext);
  


    const location = useLocation();
    const { list , total , formData } = location.state || {name:'Empty'};



  

  // if(isSignedIn){
  //   const {Email , FirstName , LastName , address , phNumber , pincode , selectCountry , shippingMethod
  //   } = formData;
  // }
    const {Email , FirstName , LastName  , phNumber  , shippingMethod
    } = formData;



useEffect(() => {
  const temp = Math.floor(Math.random() * 1000) * 998;
  const tempLetter = Math.floor(Math.random() * 15);
  const tempLetterNew = Math.floor(Math.random() * 15);


  const arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Y",
  ];

  setRandom(temp + arr[tempLetter] + arr[tempLetterNew] );
}, []);


const sentEmail = async() =>{

    const Service_id = "service_xydky9l";
    const template_id = "template_hamaasd";
    const user_id = "yocYPdVmSrx-In5Vk";

    const Data = {
      to_name: FirstName,
      to_email: Email,
      message: `Subject: Order confirmation

      Dear ${FirstName} ${LastName},

     Thanks for purchasing from Veganbazaar.
     Your prefered shipping method is ${shippingMethod} and the order id is ${random}. You will get the updated information about
    your order deliver status in your mobile number i.e, ${phNumber} 

      Warm regards,
      Team VeganBazaar`,
    };

    try {
      await emailjs.send(Service_id, template_id, Data, user_id);
      toast.success("Order Confirmation Sent Successfully");
      
    } catch (error) {
      console.error(error);
      toast.error("Sorry! Email could not be sent");
    }

}



const handleNavigate = () =>{

  sentEmail();
navigate('/checkpage3',{state:{list,selectVal,total,formData, random}});

}

const handlePopUp = () =>{

  setShowPopUp(prev => !prev);

}


const [selectVal , setSelectVal] = useState('cod-pure');



useEffect(()=>{


  if(isSignedIn){
  toast.success(`You Selected ${selectVal.toUpperCase()} As Your Payment Method`, {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  })};

},[selectVal])



const navigate = useNavigate();


if(!isSignedIn){

return (
<Navigate to='/Login' replace={true}/>
)
}

  return (
    <>
    <div className={`min-h-[100vh] py-28 flex flex-col justify-center space-y-14 items-center
     ${theme === 'light' ? 'bg-zinc-300' : 'bg-gray-950'}`}>

<h1 className={`text-center select-none text-4xl ${theme === 'light' ? 'text-gray-950' : 'text-white'} font-bold flex 
flex-col justify-center  items-center`}>All On The Spot COD Payment Options</h1>

     <div className="mx-auto w-full max-w-screen gap-5 overflow-x-hidden ">

<h3 className={`text-xl text-center my-14
  ${theme === 'light' ? 'text-gray-950' : 'text-zinc-300'}`}><strong>Selected COD Payment Mode:</strong>&nbsp;{selectVal}</h3>

<RadioGroup className="grid grid-cols-1 md:grid-cols-2" onValueChange={(val)=>setSelectVal(val)} defaultValue="cod-pure">


  <div className=" space-x-2 w-72 h-72 cursor-pointer rounded-xl mx-auto bg-gray-700
   text-white flex flex-col space-y-8  justify-center items-center">
    <RadioGroupItem  value="cod-pure" id="cod-pure"
     />
    <Label htmlFor="cod-pure">Pay With Cash (Pure COD)</Label>
  </div>



  <div className="w-72 h-72 cursor-pointer rounded-xl mx-auto bg-gray-700 
text-white flex flex-col space-y-8  justify-center items-center">
    <RadioGroupItem value="Card-With-Delivery"  id="Card With Delivery" />
    <Label htmlFor="Card-With-Delivery">Card With Delivery</Label>
  </div>



  <div className="w-72 h-72 cursor-pointer rounded-xl mx-auto bg-gray-700 
text-white flex flex-col space-y-8  justify-center items-center">
    <RadioGroupItem value="E-Wallet"  id="E-Wallet" />
    <Label htmlFor="E-Wallet">E Wallet</Label>
  </div>



  <div className="w-72 h-72 cursor-pointer rounded-xl mx-auto bg-gray-700 
text-white flex flex-col space-y-8  justify-center items-center">
    <RadioGroupItem value="Pay With Debit/Credit Card"  id="option-two" />
    <Label htmlFor="PayWithDebit/CreditCard">Pay With Debit/Credit Card</Label>
  </div>

</RadioGroup>



</div> 

<AlertDialog>
  <AlertDialogTrigger>
    <Button className="bg-blue-800 text-white cursor-pointer
     w-72 sm:w-96 flex space-x-1.5 hover:bg-blue-600">
      <strong>Confirm Order</strong>
      <FaLongArrowAltRight />
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Your Order</AlertDialogTitle>
      <AlertDialogDescription>
        Once you confirm, your order will be placed and processed for delivery. Please ensure all your payment and delivery details are correct. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Go Back</AlertDialogCancel>
      <AlertDialogAction onClick={handleNavigate}>Place Order</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
    </>
  )
}

export default CheckPage2;
