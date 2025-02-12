import foodpic1 from "./special_images/veganFood1.jpg";
import foodpic2 from "./special_images/veganFood2.jpg";
import foodpic3 from "./special_images/veganFood3.jpg";
import foodpic4 from "./special_images/veganFood4.jpg";
import foodpic5 from "./special_images/veganFood5.jpg";

import vegancosmetics1 from "./special_images/vegancosmetics1.jpg";
import vegancosmetics2 from "./special_images/vegancosmetics2.jpg";
import vegancosmetics3 from "./special_images/vegancosmetics3.jpg";
import vegancosmetics4 from "./special_images/vegancosmetics4.jpg";
import vegancosmetics5 from "./special_images/vegancosmetics5.jpg";

import veganpetfood1 from "./special_images/veganpetfood1.jpg";
import veganpetfood2 from "./special_images/veganpetfood2.jpg";
import veganpetfood3 from "./special_images/veganpetfood3.jpg";
import veganpetfood4 from "./special_images/veganpetfood4.jpg";
import veganpetfood5 from "./special_images/veganpetfood5.jpg";

export const rawDataFoodandDrinks = [
  {
    id: '1',
    img: foodpic1,
    name: "Vegan Scrambled Egg",
    price: 200,
    gluten_free: true,
    category: "Food",
  },

  {
    id: '2',
    img: foodpic2,
    name: "Vegan Plant Based Chicken",
    price: 500,
    gluten_free: true,
    category: "Food",
  },

  {
    id: '3',
    img: foodpic3,
    name: "Plant Based Masala Bites",
    price: 500,
    gluten_free: false,
    category: "Food",
  },

  {
    id: '4',
    img: foodpic4,
    name: "Plant Based Vegan Meat",
    price: 899,
    gluten_free: true,
    category: "Food",
  },

  {
    id: '5',
    img: foodpic5,
    name: "Plant Based Paneer",
    price: 799,
    gluten_free: false,
    category: "Food",
  } ]

export const rawDatacosmetics = [
  //Cosmetics Products
{
  id: '1',
  img: vegancosmetics1,
  name: "Serry Beuty Essential Pack (100% Cruelty Free)",
  price: 800,
  gluten_free: false,
  category: "Cosmetics",
},

{
  id: '2',
  img: vegancosmetics2,
  name: "Serry Melt Up Facewash",
  price: 500,
  gluten_free: true,
  category: "Cosmetics",
},

{
  id: '3',
  img: vegancosmetics3,
  name: "Green Tea extract Skin Toner cum Face Cleaner",
  price: 800,
  gluten_free: true,
  category: "Cosmetics",
},

{
  id: '4',
  img: vegancosmetics4,
  name: "Vegan Moituriser",
  price: 699,
  gluten_free: false,
  category: "Cosmetics",
},

{
  id: '5',
  img: vegancosmetics5,
  name: "Serry Compact Powder",
  price: 499,
  gluten_free: false,
  category: "Cosmetics",
}

]
//Pet Food


export const veganPetFood = [


{
    id: '1',
    img: veganpetfood1,
    name: "Biopet Dog Food",
    price: 799,
    gluten_free: false,
    category: "petfood",
  },
  
  {
    id: '2',
    img: veganpetfood2,
    name: "V-planet Protein Chunks for Dog",
    price: 700,
    gluten_free: false,
    category: "petfood",
  },
  
  {
    id: '3',
    img: veganpetfood3,
    name: "V-Planet Soya Chunks for Dogs",
    price: 900,
    gluten_free: false,
    category: "petfood",
  },
  
  {
    id: '4',
    img: veganpetfood4,
    name: "WildEarth Vegan Biscuit for Dogs",
    price: 399,
    gluten_free: true,
    category: "petfood",
  },
  
  {
    id: '5',
    img: veganpetfood5,
    name: "Hello Eloborate Vegan Cookies for Pets",
    price: 299,
    gluten_free: true,
    category: "petfood",
  },
  



];


export  const data = {
  rawDataFoodandDrinks,
  rawDatacosmetics,
  veganPetFood,
};


