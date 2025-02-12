//id,img,name,price,gluten_free,category

import feature1 from "./special_images/veganFood1.jpg";
import feature2 from "./special_images/veganFood2.jpg";
import feature3 from "./special_images/vegancosmetics2.jpg";
import feature4 from "./special_images/veganpetfood3.jpg";
import feature5 from "./special_images/vegancosmetics5.jpg";




const FeaturedProductsData = [
  {
    id: 1,
    name: "Vegan Scrambled Egg",
    img: feature1,
    category: "Food",
    price: 200,
    gluten_free: true,
  },
  {
    id: 2,
    name: "Vegan Plant Based Chicken",
    img: feature2,
    category: "Food",
    price: 500,
    gluten_free: true,
  },
  {
    id: 3,
    name: "Serry MeltUp Facewash",
    img: feature3,
    category: "Cosmetics",
    price: 320,
    gluten_free: false,
  },
  {
    id: 4,
    name: "V-Planet Dog Food",
    img: feature4,
    category: "petfood",
    price: 699,
    gluten_free: true,
  },
  {
    id: 5,
    name: "Serry Vegan Compact Powder",
    img: feature5,
    category: "Cosmetics",
    price: 399,
    gluten_free: false,
  },
];


export default FeaturedProductsData;