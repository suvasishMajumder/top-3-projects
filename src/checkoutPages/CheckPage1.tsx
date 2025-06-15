import { useContext, useEffect, useMemo, useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { Button } from "../components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "@/Contexts/CartContext";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { Minus, Plus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "@/Contexts/AuthContext";


interface ICountries{

  id:number;
  country:string;
  phoneCode:string;
  capital:string;

}


interface IDefaultValues{

  FirstName: string;
  LastName: string;
  selectCountry: string;
  address: string;
  pincode: string;
  Email: string;
  shippingMethod: string;
  phNumber: string;
}

const CheckPage1 = () => {
  const countries:ICountries[] = useMemo(
    () => [
      { id: 1, country: "European Union", phoneCode: "+32", capital: "Brussels"},
      { id: 2, country: "UK", phoneCode: "+44", capital: "London" },
      { id: 3, country: "Turkey", phoneCode: "+90", capital: "Ankara" },
      { id: 4, country: "Norway", phoneCode: "+47", capital: "Oslo" },
      { id: 5, country: "UAE", phoneCode: "+971", capital: "Abu Dhabi" },
      { id: 6, country: "Saudi Arabia", phoneCode: "+966", capital: "Riyadh" },
      { id: 7, country: "Malaysia", phoneCode: "+60", capital: "Kuala Lumpur" },
      { id: 8, country: "Singapore", phoneCode: "+65", capital: "Singapore" },
      { id: 9, country: "India", phoneCode: "+91", capital: "New Delhi" },
      { id: 10, country: "Uruguay", phoneCode: "+598", capital: "Montevideo" },
      { id: 11, country: "Australia", phoneCode: "+61", capital: "Canberra" },
      { id: 12, country: "NZ", phoneCode: "+64", capital: "Wellington" },
      { id: 13, country: "Canada", phoneCode: "+1", capital: "Ottawa" },
      { id: 14, country: "US", phoneCode: "+1", capital: "Washington D.C." },
      { id: 15, country: "Israel", phoneCode: "+972", capital: "Jerusalem" },
      { id: 16, country: "Qatar", phoneCode: "+974", capital: "Doha" },
      { id: 17, country: "Vietnam", phoneCode: "+84", capital: "Hanoi" },
      {
        id: 18,
        country: "Sri Lanka",
        phoneCode: "+94",
        capital: "Sri Jayawardenepura Kotte",
      },
      { id: 19, country: "Nepal", phoneCode: "+977", capital: "Kathmandu" },
      { id: 20, country: "Indonesia", phoneCode: "+62", capital: "Jakarta" },
    ],
    []
  );

  const { theme } = useContext(ThemeContext);
  const {isSignedIn} = useContext(AuthContext);

  const defaultValues:IDefaultValues = {
    FirstName: "",
    LastName: "",
    selectCountry: "",
    address: "",
    pincode: "",
    Email: "",
    shippingMethod: "FedEX",
    phNumber: "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data:any) => {
    // event.preventDefault()
    setFormData(data);
    handleNavigate(data);
  };

  const handleReset = () => {
    reset();
  };

  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [list, setList] = useState(cartProducts);
  const [total, setTotal] = useState<number>(0);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;

  // const formValidation = (e) => {
  //   e.preventDefault();
  // };



  const handleNavigate = (formData) => {
    navigate("/checkpage2", { state: { list, total, formData } });
  };

  const plusQuantity = (id) => {
    setList((prev) =>
      prev.map((product) => {
        if (Number(id) === Number(product.id)) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      })
    );
  };

  const minusQuantity = (id) => {
    setList((prev) =>
      prev.map((product) => {
        if (Number(product.id) === Number(id)) {
          return product.quantity === 1
            ? { ...product, quantity: 1 }
            : { ...product, quantity: product.quantity - 1 };
        }

        return product;
      })
    );
  };

  useEffect(() => {
    let temp:number = 0;
    // const item:number = 0;

    for (let i = 0; i < list.length; i++) {
      temp = temp + list[i].quantity * list[i].price;
    }

    setTotal(temp);
  }, [plusQuantity, minusQuantity]);

  const clearSetQuantity = () => {
    setList(cartProducts);
  };

  

  
 
  
  if(!isSignedIn){

    return (
<Navigate to='/Login' replace={true}/>

    )


  
  }

  return (
    <>
      <div
        className={`min-h-[150vh] select-none max-w-screen overflow-x-hidden grid grid-cols-1 
    lg:grid-cols-2 gap-3 ${
      theme === "light"
        ? "bg-zinc-200 text-gray-950"
        : " bg-gray-950 text-zinc-200"
    }`}
      >
        <div
          className={`first w-[90%] md:w-[75%] lg:w-[85%] m-auto min-h-[70rem] max-h-[85rem] flex 
        justify-center items-center ${
          theme === "light" ? "bg-zinc-400" : "bg-gray-900"
        } `}
        >
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="h-[95%] px-8 w-4/5  flex 
text-center mx-auto justify-center pb-20 space-y-10 flex-col items-center "
          >
            <h1
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } text-3xl font-bold`}
            >
              Enter Delivery Details
            </h1>
            <div className="name w-full flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between">
              <div className="f-name w-full md:w-[45%]  space-y-2.5">
                <Label htmlFor="First-Name">First Name</Label>
                <Input
                  {...register("FirstName", {
                    required: "First Name Must be Entered",
                    minLength: {
                      value: 2,
                      message: "Your Name Must be of at least 2 letters long",
                    },
                  })}
                  type="text"
                  id="FirstName"
                  className="rounded-full"
                  placeholder="Enter Your First Name"
                />

                {errors?.FirstName && (
                  <p role="alert" className="text-[#FFDF19] text-sm">
                    {errors?.FirstName?.message && (
                      <span role="alert" className="text-red-700 text-lg">
                        {String(errors.FirstName.message)}
                      </span>
                    )}
                  </p>
                )}
              </div>

              <div className="l-name w-full md:w-[45%] space-y-2.5">
                <Label htmlFor="LastName">Last Name</Label>
                <Input
                  {...register("LastName", {
                    required: "Last Name Must Be Entered",
                    minLength: {
                      value: 1,
                      message:
                        "The Minimum Length Of The Last Name Must Be 1 Letter At Least",
                    },
                  })}
                  type="text"
                  id="Last-Name"
                  className="rounded-full"
                  placeholder="Enter Your Last Name"
                  required
                />

                {errors.LastName && (
                  <p role="alert" className="text-[#FFDF19] text-sm">
                    {errors?.LastName?.message && (
                      <span role="alert" className="text-red-700 text-lg">
                        {String(errors.LastName.message)}
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>

            <div className="address w-full space-y-2.5">
              <Label htmlFor="Address">Address</Label>
              <Input
                {...register("address", {
                  required: "Address Must Be Eneterd",

                  minLength: {
                    value: 10,
                    message:
                      "The Length Of An Address Must Be At Least 10 Letters",
                  },
                })}
                type="text"
                id="Address"
                className="rounded-full"
                placeholder="Enter Your Full Address"
                required
              />
              {errors.address && (
                <p className="">
                  {errors?.address?.message && (
                    <span role="alert" className="text-red-700 text-sm">
                      {String(errors.address.message)}
                    </span>
                  )}
                </p>
              )}
            </div>

            <div className="pincode w-full space-y-2.5">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                {...register("pincode", {
                  minLength: {
                    value: 3,
                    message:
                      "The Minimum Length Of The Pincode Must Be of 3 Letters",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "The Maximum Length Of The Pincode Must Be of 10 Letters",
                  },
                })}
                type="number"
                id="pincode"
                className="rounded-full"
                placeholder="Enter Your Pincode"
                required
              />

              {errors.pincode && (
                <p className="">
                  {errors?.pincode?.message && (
                    <span role="alert" className="text-red-700 text-sm">
                      {String(errors.pincode.message)}
                    </span>
                  )}
                </p>
              )}
            </div>

            <div className="email w-full space-y-2.5">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("Email", {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email Address",
                  },
                })}
                type="email"
                id="email"
                className="rounded-full"
                placeholder="Enter Your Email"
                required
              />

              {errors?.Email && (
                <p className="">
                  {errors?.Email?.message && (
                    <span role="alert" className="text-red-700 text-sm">
                      {String(errors.Email.message)}
                    </span>
                  )}
                </p>
              )}
            </div>

            <div className="shippingMethod w-full items-start space-y-6">
              <Label htmlFor="">Choose a Delivery Option</Label>

              <div
                className={`${
                  theme === "light" ? "text-gray-950" : "text-zinc-200"
                } space-y-4`}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="r1"
                    value="FedEX"
                    defaultChecked
                    {...register("shippingMethod", {
                      required: "Please Select A Valid Shipping Method",
                    })}
                    className={`w-4 h-4 rounded-full border-2 ${
                      theme === "light"
                        ? "border-gray-950 checked:bg-gray-950"
                        : "border-zinc-300 checked:bg-zinc-300"
                    }`}
                  />
                  <Label htmlFor="r1">FedEX</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="r2"
                    value="DHL Express"
                    {...register("shippingMethod", {
                      required: "Please Select A Valid Shipping Method",
                    })}
                    className={`w-4 h-4 rounded-full border-2 ${
                      theme === "light"
                        ? "border-gray-950 checked:bg-gray-950"
                        : "border-zinc-300 checked:bg-zinc-300"
                    }`}
                  />
                  <Label htmlFor="r2">DHL Express</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="r3"
                    value="UPS (United Parcel Service)"
                    {...register("shippingMethod", {
                      required: "Please Select A Valid Shipping Method",
                    })}
                    className={`w-4 h-4 rounded-full border-2 ${
                      theme === "light"
                        ? "border-gray-950 checked:bg-gray-950"
                        : "border-zinc-300 checked:bg-zinc-300"
                    }`}
                  />
                  <Label htmlFor="r3">United Parcel Service</Label>
                </div>
              </div>

              {errors.shippingMethod && (
                <p>
                  <span role="alert" className="text-red-700 text-sm">
                    {errors.shippingMethod.message}
                  </span>
                </p>
              )}
            </div>

            <div className="select-country w-full flex flex-col space-y-2.5">
              <Label htmlFor="selectCountry">Select:</Label>
              <Controller
                name="selectCountry"
                control={control}
                rules={{ required: "Select a Country From this list" }}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Your Country" />
                      </SelectTrigger>
                      <SelectContent className="w-40">
                        <SelectGroup className="w-40">
                          {countries.map((c) => (
                            <SelectItem
                              key={c.id}
                              value={c.country}
                              className={`font-bold ${
                                theme === "light"
                                  ? "bg-zinc-300 text-black"
                                  : "bg-black text-zinc-300"
                              } ml-0 w-40`}
                            >
                              {c.country}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <p role="alert" className="text-red-700 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="phNumber w-full space-y-2.5">
              <Label htmlFor="Phone Number">Phone Number</Label>
              <Input
                {...register("phNumber", {
                  required: "Phone Numbers Must Be Entered",
                  minLength: {
                    value: 7,
                    message: "The Phone Number Must Be 7 digits Minimum",
                  },

                  maxLength: {
                    value: 12,
                    message: "The Phone Number Must Be 12 Digits Maximum",
                  },
                })}
                type="number"
                id="ph-number"
                className="rounded-full"
                placeholder="Enter Your Phone Number"
                required
              />

              {errors?.phNumber?.message && (
                <p className="">
                  {errors?.phNumber?.message && (
                    <span role="alert" className="text-red-700 text-sm">
                      {String(errors.phNumber.message)}
                    </span>
                  )}
                </p>
              )}
            </div>

            {/* copy */}

            <Button
              type="submit"
              disabled={cartProducts.length === 0}
              // onClick={handleNavigate}
              className={`${
                theme === "light"
                  ? "bg-gray-950 text-white"
                  : "bg-blue-600 text-white"
              } 
 cursor-pointer w-44 mb-20 sm:w-96 flex hover:bg-blue-800 space-x-1.5`}
            >
              <strong>Next</strong>
              <FaLongArrowAltRight />
            </Button>

{cartProducts.length === 0 && <p className="text-red-700 text-lg">Add Products to the Cart before moving to next page</p>}

            <Input
              type="reset"
              onClick={handleReset}
              className={`${
                theme === "light"
                  ? "bg-red-800 font-bold text-white"
                  : "bg-red-600 text-white"
              } 
cursor-pointer w-44 mb-40 sm:w-96 flex hover:bg-blue-800 space-x-1.5`}
            />
          </form>
        </div>

        <div
          className={`right w-[90%] md:w-[75%] lg:w-[85%] p-10 m-auto min-h-[70rem] h-auto
space-y-4 flex flex-col  items-center
  
  ${theme === "light" ? "bg-zinc-400 text-gray-900" : "bg-gray-900 text-white"}
  `}
        >
          {list?.map((item, index) => {
            return (
              <div
                className="flex flex-col font-bold p-4 text-center sm:flex-row space-y-5 border-[1px]
                 border-blue-700 items-center sm:space-x-6"
                key={index}
              >
                <h3 className="">{item.name}</h3> <span className="">x</span>
                <h3 className="">{item.quantity}</h3>
                <span className="">=</span>{" "}
                <span className="">₹&nbsp;{item.quantity * item.price}</span>
                <Plus
                  className="bg-green-700 cursor-pointer"
                  onClick={() => plusQuantity(item.id)}
                />
                <Minus
                  className="bg-red-700 cursor-pointer"
                  onClick={() => minusQuantity(item.id)}
                />
              </div>
            );
          })}

          <hr />

          <h1 className="text-xl">{`Total: ₹${total}`}</h1>

          <Button
            type="button"
            onClick={clearSetQuantity}
            className={`${
              theme === "light"
                ? "text-zinc-300 bg-gray-950"
                : "bg-zinc-300 hover:bg-gray-400 text-gray-950"
            }`}
          >
            Clear Quantity
          </Button>
        </div>
      </div>
    </>
  );
};
export default CheckPage1;
