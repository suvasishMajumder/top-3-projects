

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { lazy, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


// Import or define the flag variables
import flag1 from "../assets/flags/australia.png";
import flag2 from "../assets/flags/canada.png";
import flag3 from "../assets/flags/european-union.png";
import flag4 from "../assets/flags/india.png";
import flag5 from "../assets/flags/malayshia.png";
import flag6 from "../assets/flags/nz.png";
import flag7 from "../assets/flags/russia.png";
import flag8 from "../assets/flags/singapore.png";
import flag9 from "../assets/flags/uruguay.png";
import flag10 from "../assets/flags/united-arab-emirates.png";
import flag11 from "../assets/flags/united-kingdom.png";
import flag12 from "../assets/flags/united-states.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { ThemeContext, ThemeProvider } from "@/Contexts/ThemeContext";
// import ThemeToggler from '../resusable_components/ThemeToggler'
const ThemeToggler = lazy(()=>import('../resusable_components/ThemeToggler'))


export default function RegisteredMerchant() {

  const {theme } = useContext(ThemeContext);

  const flags = useMemo(() => [
    {
      id: 1,
      flag: flag1,
      country: 'Australia'
    },
    {
      id: 2,
      flag: flag2,
      country: 'Canada'
    },
    {
      id: 3,
      flag: flag3,
      country: 'European Union'
    },
    {
      id: 4,
      flag: flag4,
      country: 'India'
    },
    {
      id: 5,
      flag: flag5,
      country: 'Malaysia'
    },
    {
      id: 6,
      flag: flag6,
      country: 'New Zealand'
    },
    {
      id: 7,
      flag: flag7,
      country: 'Russia'
    },
    {
      id: 8,
      flag: flag8,
      country: 'Singapore'
    },
    {
      id: 9,
      flag: flag9,
      country: 'Uruguay'
    },
    {
      id: 10,
      flag: flag10,
      country: 'UAE'
    },
    {
      id: 11,
      flag: flag11,
      country: 'United Kingdom'
    },
    {
      id: 12,
      flag: flag12,
      country: 'United States'
    },
  ], []);


type FormData = {
  firstName: string;
  lastName: string;
  ContactNo: string;
  email: string;
  description: string;
};



const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const { firstName, email } = data;

    const Service_id = "service_xydky9l";
    const template_id = "template_hamaasd";
    const user_id = "yocYPdVmSrx-In5Vk";

    const Data = {
      to_name: firstName,
      to_email: email,
      message: `Subject: Thank You for Your Application to Join VeganBazar as a B2B Partner!

      Dear ${firstName},

      We hope this message finds you well. We're excited to inform you that we've successfully received 
      your application to become a registered B2B (Business to Business Partner) with VeganBazaar.

      Our B2B team will be reviewing your submission shortly, and you can expect to hear from us soon via
      email or phone about the benefits and endless growth opportunities you will have by joining us as a registered
      B2B Partner. We appreciate your patience and look forward to potentially welcoming you into the VeganBazaar family!

      Warm regards,
      Team VeganBazaar`,
    };

    try {
      await emailjs.send(Service_id, template_id, Data, user_id);
      toast.success("Email sent successfully");
      reset(); // Reset form after successful submission
      navigate('/')
    } catch (error) {
      // console.error(error);
      toast.error("Sorry! Email could not be sent");
    }
  };


  

  // const handleChangeTheme = () =>{

  //   toggleTheme();

  // }

  return (

    <>

    <div className={`min-h-[190vh] w-[95vw] space-y-14 mx-auto sm:min-w-[100vw]
     shadow-2xl ${theme === 'light' ? 'bg-gray-300 text-black' : 
    'bg-gray-950 text-white'} flex flex-col justify-center items-center`}>
   

<h1 className={`text-2xl text-center sm:text-3xl font-bold  ${theme === 'light' ? 'text-black' :
   'text-white'}`}>We Are Proud To Have
   Our B2B Partners From The Following Countries</h1>
<div className="flag-bar">



<Carousel   plugins={[
    Autoplay({
      delay: 1200,
    }),
  ]} className="max-w-[100vw] md:max-w-[68vw] text-center">
      <CarouselContent className="w-full">
        {flags.map(({flag,country,id}) => (
          <CarouselItem key={id} className="basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="p-1 w-80 sm:w-96">
              <div className="bg-transparent  border-none shadow-none">
                <div className="flex bg-transparent text-center space-y-4 flex-col items-center justify-center p-2">
                  <img src={flag} className="w-10 h-10" alt=""  loading="lazy" />
                  <h3 className="font-bold">{country}</h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     

    </Carousel>

</div>

    <div className={`h-4/5 p-5 md:w-4/6 lg:w-[40%] xl:w-3/6 2xl:w-2/6 shadow-2xl rounded-lg
       ${theme === 'light' ? 'bg-[#007025]' : 'bg-gray-800 shadow-2xl'} `}>
      <form
        className="h-full w-full flex flex-col space-y-10 rounded-3xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="headings text-center">
          <h1 className="text-3xl font-bold text-white">
            Want to Become a B2B Partner with Us
          </h1>
          <p className="text-lg font-thin text-white">
            Fill the below form and submit. Our B2B executives will contact you
            very soon
          </p>
        </div>

        <div className="firstname">
          <label htmlFor="First Name" className="font-semibold text-white">
            First Name
          </label>
          <br />
          <input
            {...register("firstName", {
              required: "First Name Must Be Entered",
              minLength: {
                value: 2,
                message: "The First Name Must be at least 2 characters long",
              },
            })}
            type="text"
            placeholder="Enter Your First Name"
            className="text-black w-full rounded-md p-3"
            id="First Name"
          />
          {errors.firstName && (
            <p role="alert" className="text-[#FFDF19] text-sm">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="lastname">
          <label htmlFor="Last Name" className="font-semibold  text-white">
            Last Name
          </label>
          <br />
          <input
            {...register("lastName", {
              required: "Last Name Must Be Entered",
              minLength: {
                value: 1,
                message: "The Last Name Must be at least 1 character long",
              },
            })}
            className="text-black w-full rounded-md p-3"
            placeholder="Enter Your Last Name"
            id="Last Name"
          />
          {errors.lastName && (
            <p role="alert" className="text-[#FFDF19] text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="email">
          <label htmlFor="email" className="font-semibold text-white">
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter a valid email address... eg: example@example.com"
            {...register("email", {
              required: "Email Address Must Be Entered",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid Email Address",
              },
            })}
            className="text-black w-full rounded-md p-3"
            id="email"
          />
          {errors.email && (
            <p role="alert" className="text-[#FFDF19] text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="contact">
          <label htmlFor="ContactNo" className="font-semibold text-white">
            Contact No:
          </label>
          <br />
          <input
            {...register("ContactNo", {
              required: "Contact No Must Be Entered",
              minLength: {
                value: 10,
                message: "The Contact No Must be at least 10 characters long",
              },
              maxLength: {
                value: 15,
                message: "The Contact No Must be at most 15 characters long",
              },
            })}
            type="number"
            className="text-black w-full rounded-md p-3"
            placeholder="Enter Your Contact No:"
            id="ContactNo"
          />
          {errors.ContactNo && (
            <p role="alert" className="text-[#FFDF19] text-sm">{errors.ContactNo.message}</p>
          )}
        </div>

        <div className="description">
          <label htmlFor="description" className="font-semibold text-white">
            Describe your Business:
          </label>
          <br />
          <input
            type="text"
            {...register("description", {
              required: "Description Must Be Entered",
              maxLength: {
                value: 150,
                message: "The Description Must be at most 150 characters long",
              },
              minLength: {
                value: 15,
                message: "The Description Must be at least 15 characters long",
              },
            })}
            className="text-black w-full h-20 p-2 rounded-md placeholder:text-xs"
            placeholder="Explain about your Your Business in short within 150 words"
            id="description"
          />
          {errors.description && (
            <p role="alert" className="text-[#FFDF19] text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br 
          focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-2"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  );
}
