import { ThemeContext } from "@/Contexts/ThemeContext";
import React, { useContext, useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


interface FaqItem {
  Question: string;
  Answer: string;
}


const FaQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<{ [key: number]: boolean }>({});

const {theme } = useContext(ThemeContext)

  const handleFaqBar = (index: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked FAQ
    }));
}

  const faqdata = useMemo<FaqItem[]>(
    () => [
      {
        "Question": "What products does VeganBazar offer?",
        "Answer": "VeganBazar offers a wide range of vegan products, including cosmetics, pet foods, pantry staples, snacks, beverages, and household items. All products are 100% plant-based and cruelty-free."
      },
      {
        "Question": "Are all products certified vegan?",
        "Answer": "Yes, every product sold on VeganBazar is certified vegan by recognized organizations like The Vegan Society or carries clear vegan labeling from trusted brands."
      },
      {
        "Question": "Do you ship internationally?",
        "Answer": "Yes, we ship to most countries. Shipping costs and delivery times vary depending on your location. Check our Shipping Policy page for details."
      },
      {
        "Question": "How can I track my order?",
        "Answer": "Once your order is shipped, you'll receive a tracking number via email. Use this number on the carrier's website or our Order Tracking page for updates."
      },
      {
        "Question": "What is your return policy?",
        "Answer": "We accept returns within 30 days of delivery for unopened products. Visit our Returns & Refunds page to initiate the process."
      },
      {
        "Question": "Are your cosmetics cruelty-free?",
        "Answer": "Absolutely! All cosmetics are cruelty-free and never tested on animals. Many are certified by Leaping Bunny or PETA."
      },
      {
        "Question": "Do you offer gluten-free food options?",
        "Answer": "Yes, we have a dedicated gluten-free category. Check product descriptions for allergen information."
      },
      {
        "Question": "How long does shipping take?",
        "Answer": "Standard shipping takes 3-7 business days domestically and 7-21 days internationally. Expedited options are available at checkout."
      },
      {
        "Question": "Are your pet foods nutritionally complete?",
        "Answer": "All vegan pet foods meet AAFCO nutritional standards. Consult your vet before transitioning your pet's diet."
      },
      {
        "Question": "What payment methods do you accept?",
        "Answer": "We accept credit/debit cards, PayPal, Apple Pay, and Google Pay. All transactions are securely encrypted."
      },
      {
        "Question": "Do you sell organic products?",
        "Answer": "Many products are USDA Organic certified. Look for the 'Organic' filter in product categories."
      },
      {
        "Question": "How do I contact customer service?",
        "Answer": "Reach us via email at support@veganbazar.com, live chat on our website, or phone at +1-800-VEGANBAZAR during business hours."
      },
      {
        "Question": "Are your packaging materials eco-friendly?",
        "Answer": "We use 100% recyclable or compostable packaging. Our filler is made from recycled paper or cornstarch."
      },
      {
        "Question": "Do you offer gift cards?",
        "Answer": "Yes! Digital gift cards are available in any amount and never expire. Find them under 'Gifts' in the main menu."
      },
      {
        "Question": "Can I get a student discount?",
        "Answer": "Students get 10% off with a valid .edu email. Sign up through our Student Discount Program page."
      },
      {
        "Question": "How do I apply a discount code?",
        "Answer": "Enter your code at checkout in the 'Promo Code' field. Click 'Apply' to see the adjusted total."
      },
      {
        "Question": "Are products safe for sensitive skin?",
        "Answer": "Many cosmetics are formulated for sensitive skin. Check product descriptions for terms like 'fragrance-free' or 'hypoallergenic.'"
      },
      {
        "Question": "Do you restock sold-out items?",
        "Answer": "Popular items are restocked regularly. Enable 'Notify Me' alerts on product pages for updates."
      },
      {
        "Question": "Are supplements vegan and non-GMO?",
        "Answer": "All supplements are vegan, and most are non-GMO. Certifications are listed in product details."
      },
      {
        "Question": "What is your sustainability initiative?",
        "Answer": "We offset 100% of our carbon emissions, partner with reforestation programs, and prioritize ethical sourcing."
      },
      {
        "Question": "Do you offer bulk ordering?",
        "Answer": "Yes, contact sales@veganbazar.com for bulk or wholesale inquiries. Discounts apply for large orders."
      },
      {
        "Question": "How do I change my account password?",
        "Answer": "Go to 'Account Settings' > 'Security' > 'Change Password.' You’ll need your current password to update."
      },
      {
        "Question": "Are there nut-free food options?",
        "Answer": "Yes, use the 'Nut-Free' filter in the Food category. Always check allergen labels for cross-contamination warnings."
      },
      {
        "Question": "Do you donate to charities?",
        "Answer": "We donate 1% of all profits to vegan and animal welfare organizations. See our 'Impact' page for partners."
      },
      {
        "Question": "Can I cancel or modify my order?",
        "Answer": "Contact us immediately if your order hasn’t shipped. Once shipped, modifications aren’t possible."
      },
      {
        "Question": "Are food products non-GMO?",
        "Answer": "Most are non-GMO. Look for the Non-GMO Project Verified seal in product images."
      },
      {
        "Question": "Do you offer a loyalty program?",
        "Answer": "Yes! Earn points with every purchase. Redeem points for discounts. Join for free at checkout."
      },
      {
        "Question": "How do I leave a product review?",
        "Answer": "Log in, go to 'My Orders,' select the product, and click 'Write a Review.' Reviews are moderated for authenticity."
      },
      {
        "Question": "What if my order arrives damaged?",
        "Answer": "Contact us within 48 hours with photos. We’ll replace the item or issue a refund."
      },
      {
        "Question": "Do you sell gift-wrapped items?",
        "Answer": "Yes! Select 'Add Gift Wrapping' at checkout. Choose from recycled or reusable wrapping options."
      },
      {
        "Question": "Are your products biodegradable?",
        "Answer": "Many are! Look for 'Biodegradable' or 'Compostable' tags in product descriptions."
      },
      {
        "Question": "Do you have a newsletter?",
        "Answer": "Yes! Subscribe for 10% off your first order, new product alerts, and exclusive deals."
      },
      {
        "Question": "Can I request a product not listed?",
        "Answer": "Suggest products via our Contact page. We frequently add items based on customer demand."
      },
      {
        "Question": "Are your supplements third-party tested?",
        "Answer": "All supplements undergo third-party testing for purity and potency. Certificates available upon request."
      },
      {
        "Question": "Do you offer expedited shipping?",
        "Answer": "Yes! Choose Priority (2-3 days) or Express (1-2 days) shipping at checkout for domestic orders."
      },
      {
        "Question": "How do I delete my account?",
        "Answer": "Email privacy@veganbazar.com with your request. All data will be permanently erased within 14 days."
      },
      {
        "Question": "Are your pet foods vet-approved?",
        "Answer": "Many are formulated with veterinary input, but always consult your vet before dietary changes."
      },
      {
        "Question": "Do you sell products for cats?",
        "Answer": "Yes! We offer vegan cat food, treats, and supplements. Check the 'Cats' section under Pet Foods."
      },
      {
        "Question": "Are your oils cold-pressed?",
        "Answer": "Most oils are cold-pressed or expeller-pressed. Details are in individual product descriptions."
      },
      {
        "Question": "Can I recycle your packaging?",
        "Answer": "Yes! All packaging is recyclable. Remove labels and recycle according to local guidelines."
      },
      {
        "Question": "Do you offer a subscription service?",
        "Answer": "Yes! Subscribe to select products for 10% off and free shipping. Manage subscriptions in your account."
      },
      {
        "Question": "How do I use a referral code?",
        "Answer": "Share your unique referral link from the 'Referrals' page. Both you and your friend get $10 off."
      },
      {
        "Question": "Are products fluoride-free?",
        "Answer": "All oral care products are fluoride-free. Check ingredient lists for specifics."
      },
      {
        "Question": "Do you sell seasonal items?",
        "Answer": "Yes! Visit our Holiday Shop for limited-edition products during festive seasons."
      },
      {
        "Question": "How do I check allergen information?",
        "Answer": "Allergens are listed in product details. Contact us if you need additional clarification."
      },
      {
        "Question": "Do you offer employment opportunities?",
        "Answer": "View open positions on our Careers page. We’re always looking for passionate team members."
      },
      {
        "Question": "Are your beverages pasteurized?",
        "Answer": "Some are; check product details. Cold-pressed juices are typically HPP-treated, not heat-pasteurized."
      },
      {
        "Question": "Can I order without creating an account?",
        "Answer": "Yes! Check out as a guest. However, creating an account lets you track orders and save preferences."
      },
      {
        "Question": "Do you have a physical store?",
        "Answer": "Currently, we’re online-only. Follow our newsletter for pop-up shop announcements."
      },
      {
        "Question": "Are your spices ethically sourced?",
        "Answer": "Yes! We partner with Fair Trade cooperatives to ensure ethical farming practices."
      },
      {
        "Question": "How do I report a defective product?",
        "Answer": "Email support@veganbazar.com with your order number and photos. We’ll resolve the issue promptly."
      }
    ],
    [] 
  );

  return (

    <>
    <div className={`min-h-screen space-y-16 select-none max-w-screen 
    ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-950 text-white'} flex flex-col items-center`}>

<div className="faq-header font-extrabold text-5xl text-center mt-10">Frequently Asked Questions (FAQ) </div>

      <div className="w-4/5  text-black h-auto space-y-1.5">
        {faqdata.map((item: FaqItem, index: number) => (
          <div key={index} onClick={() => handleFaqBar(index)} className={`border-[2px]  p-3 transition-transform
           cursor-pointer ${theme === 'light' ? 'text-black border-gray-900' : 'text-white border-gray-100'} `}>
            <h3 className="text-xl font-bold">{item.Question}</h3>
            <IoIosArrowDown className={`${openFaq[index] ? 'rotate-180' : 'rotate-none'}`}  />
            <p className={`${openFaq[index] ? 'block ' : 'hidden'}`}>{item.Answer}</p>
          </div>
        ))}
      </div>

<div className="faq-footer">


</div>

    </div>
    </>
  );
};

export default FaQ;