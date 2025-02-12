

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useState } from "react";
import srct from "../assets/video/waterBubble.mp4";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  ContactNo: string;
  email: string;
  description: string;
};

export default function RegisteredMerchant() {

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
      console.error(error);
      toast.error("Sorry! Email could not be sent");
    }
  };

  return (

    <div className="h-[150vh] min-w-[100vw] shadow-2xl bg-[#007025] flex justify-center items-center">
    
    <div className="h-4/5 p-5 md:w-4/6 lg:w-[40%] xl:w-3/6 2xl:w-2/6 shadow-2xl rounded-lg bg-[#007025]">
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
            <p className="text-[#FFDF19] text-sm">{errors.lastName.message}</p>
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
            <p className="text-[#FFDF19] text-sm">{errors.email.message}</p>
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
            <p className="text-[#FFDF19] text-sm">{errors.ContactNo.message}</p>
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
            <p className="text-[#FFDF19] text-sm">
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
  );
}
