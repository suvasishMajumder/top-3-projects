import React, { lazy, Suspense, useContext } from "react";
import img2 from "../assets/special_images/aboutImg2.webp";
// import GoogleMap from "@/GoogleMap";
// import GoogleMap from "../GoogleMap";
const GoogleMap = lazy(() => import("../GoogleMap"));
import { ThemeContext } from "@/Contexts/ThemeContext";
import { PiCubeTransparentThin, PiPottedPlantLight } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Atom, Leaf } from "lucide-react";
import { MdLocalShipping } from "react-icons/md";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`${
          theme === "light"
            ? "bg-gray-100 text-gray-950"
            : "bg-gray-950 text-gray-200"
        } aria-labelledby="about-heading`}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2
                id="about-heading"
                className="text-3xl text-center font-extrabold  sm:text-4xl"
              >
                About Us
              </h2>
              <p className="mt-4  text-lg">
                Based in the heart of Indore, Vegan Bazar is more than just a
                store. We’re a community dedicated to promoting a compassionate
                and sustainable lifestyle. We offer a wide range of high-quality
                vegan products, including:
              </p>
              <ul className="list-disc ml-6 mt-4  text-lg">
                <li>
                  <strong>Food & Beverages:</strong> Indulge in a world of
                  plant-based delights, from creamy plant-based milks to savory
                  vegan curries.
                </li>
                <li>
                  <strong>Cosmetics:</strong> Pamper yourself with cruelty-free
                  cosmetics that are as kind to the planet as they are to your
                  skin.
                </li>
                <li>
                  <strong>Pet Food & Supplements:</strong> Nourish your furry
                  friends with ethical, plant-based pet food and supplements.
                </li>
              </ul>
              <p className="mt-4  text-lg">
                At Vegan Bazar, we believe that a vegan lifestyle is not just a
                trend; it’s a conscious choice. By choosing vegan, you’re making
                a positive impact on the planet and all its inhabitants. Join us
                in our mission to create a kinder, greener future.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                  aria-label="Learn more about us"
                >
                  Learn more about us
                  <span className="ml-2" aria-hidden="true">
                    &#8594;
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={img2}
                alt="An image showing Vegan Bazar's mission of promoting a vegan lifestyle."
                className="object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          className="container p-5 min-w-[100vw] text-center space-y-10"
          aria-labelledby="values-heading"
        >
          <div className="text-center">
            <h2 id="values-heading" className="text-4xl text-center">
              Our Moral Values and Philosophy
            </h2>
            <p className="text-lg ">
              <span className="font-semibold">Vegan Products -</span> A choice
              for compassion, health, and the planet
            </p>
          </div>

          <div
            className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            role="list"
          >
            {[
              {
                id:0,
                title: "Plant-Based",
                description:
                  "The one-stop shop for all vegan needs. Accelerating the adoption of a conscious living.",
                icon: <PiPottedPlantLight className="text-2xl" />,
              },
              {
                id:1,
                title: "Committed",
                description:
                  "We commit to provide the most diverse range of vegan products and services all across India.",
                icon: <VscWorkspaceTrusted className="text-2xl" />,
              },

              {
                id:2,
                title: "Sustainable",
                description:
                  "We focus on eco-friendly, recyclable packaging, and ethical sourcing for a greener, kinder planet.",
                  icon: <Leaf className="text-2xl" />
              },
              {
                id:3,
                title: "Futuristic",
                description:
                  "Veganism has entered our lives like a ray of hope, but many still find it difficult to practice due to the limited alternatives. We aim to revolutionize that.",
                  icon: <Atom className="text-2xl" />
              
                },
              {
                id:4,
                title: "Transparent",
                description: "We strive hard and we make mistakes too.",
                icon: <PiCubeTransparentThin />

              },
              {
                id:5,
                title: "Sourced Locally",
                description: "More than 99% of our brands are Made in India.",
                icon: <MdLocalShipping className="text-2xl" />
              },
            ].map((value, index) => {
          //     <p
          //       key={index}
          //       className="p-4 rounded-md border text-center border-gray-500 border-opacity-85"
          //       role="listitem"
          //     >
          //       <span className="font-bold">{value.title}</span>
                
          //       {value.description}
          //  <span className="text-center"> {value.icon}</span>  
          //     </p>
    
return (
<div key={value.id} className="p-4 rounded-md border space-y-4 flex flex-col h-60  justify-center 
items-center text-center border-gray-500 border-opacity-85">
<span className="font-bold text-xl">{value.title}</span>
<p className="">{value.description}</p>
<span className="text-center"> {value.icon}</span>  


</div>

)})}
          </div>
        </div>
      </section>

      <section className="g-map">
        <Suspense fallback={<div className="italic font-bold">Loading...</div>}>
          <GoogleMap />
        </Suspense>
      </section>
    </>
  );
};

export default About;
