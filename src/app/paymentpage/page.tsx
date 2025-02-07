// "use client";



// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import Footer from "../Components/footer";
// import Navbar from "../Components/navbar";

// const PaymentPage = () => {
//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);

//   const handlePromoApply = () => {
//     if (promoCode === "DISCOUNT10") {
//       setPromoApplied(true);
//     } else {
//       alert("Invalid promo code");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />

//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-8 lg:px-8">
//         {/* Left Content */}
//         <div className="lg:col-span-8 space-y-6">
//           {/* Billing Info */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-bold text-gray-900">
//                 Payment Method
//               </h3>
//               <p className="text-sm text-gray-500">Step 1 of 4</p>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">
//               Please enter your billing info
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="border text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone number"
//                 className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Town / City"
//                 className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Rental Info */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-bold text-gray-900">Rental Info</h3>
//               <p className="text-sm text-gray-500">Step 2 of 4</p>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">
//               Please select your rental date
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Pick-Up Info */}
//               <div>
//                 <h4 className="text-sm font-bold text-gray-700 mb-2">
//                   Pick-Up
//                 </h4>
//                 <div className="space-y-2">
//                   <select className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option>Select your city</option>
//                   </select>
//                   <input
//                     type="date"
//                     className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="time"
//                     className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Drop-Off Info */}
//               <div>
//                 <h4 className="text-sm font-bold text-gray-700 mb-2">
//                   Drop-Off
//                 </h4>
//                 <div className="space-y-2">
//                   <select className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option>Select your city</option>
//                   </select>
//                   <input
//                     type="date"
//                     className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="time"
//                     className="w-full border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-bold text-gray-900">
//                 Payment Method
//               </h3>
//               <p className="text-sm text-gray-500">Step 3 of 4</p>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">
//               Please enter your payment method
//             </p>

//             Payment Options
//             <div className="space-y-6">
//               {/* Credit Card Section */}
//               <div className="p-4 rounded-lg border border-gray-300 bg-gray-50">
//                 <div className="flex justify-between items-center mb-4">
//                   <label className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="creditCard"
//                       className="form-radio text-blue-500 focus:ring-blue-500"
//                       defaultChecked
//                     />
//                     <span className="text-sm font-semibold  text-black">
//                       Credit Card
//                     </span>
//                   </label>
//                   <div className="flex space-x-2">
//                     <Image
//                       src="/visa (1).png"
//                       alt="Visa"
//                       width={60}
//                       height={24}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Card number"
//                     className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Expiration Date (DD/MM/YY)"
//                     className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Card Holder"
//                     className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="text"
//                     placeholder="CVC"
//                     className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* PayPal Option */}
//               <label className="flex items-center   text-black space-x-2 p-4 rounded-lg border border-gray-300 bg-gray-50 hover:shadow-md cursor-pointer">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="paypal"
//                   className="form-radio  text-blue-500 focus:ring-blue-500"
//                 />
//                 <span className="text-sm font-semibold">PayPal</span>
//                 <div className="ml-3 mt-2 justify-end">
//                   <Image
//                     src="/paypal (1).png"
//                     alt="PayPal"
//                     width={60}
//                     height={24}
//                     className="object-contain left-96"
//                   />
//                 </div>
//               </label>

//               {/* Bitcoin Option */}
//               <label className="flex items-center   text-black space-x-2 p-4 rounded-lg border border-gray-300 bg-gray-50 hover:shadow-md cursor-pointer">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="bitcoin"
//                   className="form-radio text-blue-500 focus:ring-blue-500"
//                 />
//                 <span className="text-sm font-semibold  text-black">
//                   Bitcoin
//                 </span>
//                 <div className="ml-3 mt-2 items-end">
//                   <Image
//                     src="/bitcoin.png"
//                     alt="Bitcoin"
//                     width={60}
//                     height={24}
//                     className="object-contain"
//                   />
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* Confirmation */}
//           <div className="">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-bold text-gray-900">
//                   Confirmation
//                 </h3>
//                 <p className="text-sm text-gray-500">Step 4 of 4</p>
//               </div>
//               <p className="text-sm text-gray-500 mb-4">
//                 We are getting to the end. Just a few clicks and your rental is
//                 ready!
//               </p>

//               {/* Confirmation Checkboxes */}
//               <div className="space-y-4 mb-6">
//                 <label className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-300 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-600">
//                     I agree with sending marketing and newsletter emails. No
//                     spam, promised!
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-300 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-600">
//                     I agree with our terms and conditions and privacy policy.
//                   </span>
//                 </label>
//               </div>

//               {/* Security Message */}
//               <div className="mt-6 flex items-start space-x-2">
//                 <div>
//                   <Image src="/saftey.png" alt="" width={32} height={32} />
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   All your data are safe. We are using the most advanced
//                   security to provide you the best experience ever.
//                 </p>
//               </div>
//             </div>

//             <Link href="/Dashborad">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
//                 Rent Now
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Content - Rental Summary */}
//         <div className="lg:col-span-4">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">
//               Rental Summary
//             </h3>
//             <div className="flex items-center mb-4">
//               <Image
//                 src="/Look1.png"
//                 alt="Nissan GT - R"
//                 width={100}
//                 height={60}
//                 className="rounded-md"
//               />
//               <div className="ml-4">
//                 <h4 className="text-gray-900 font-bold">Nissan GT - R</h4>
//                 <p className="text-sm text-gray-500">440+ Reviewer</p>
//               </div>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">
//               Prices may change depending on the length of the rental.
//             </p>
//             <div className="flex justify-between text-sm text-gray-700">
//               <p>Subtotal</p>
//               <p>$80.00</p>
//             </div>
//             <div className="flex justify-between text-sm text-gray-700 mb-4">
//               <p>Tax</p>
//               <p>$0</p>
//             </div>
//             <div className="flex items-center space-x-2 mb-4">
//               <input
//                 type="text"
//                 placeholder="Apply promo code"
//                 className="border  text-black border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//               />
//               <button
//                 onClick={handlePromoApply}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//               >
//                 Apply now
//               </button>
//             </div>
//             <div className="flex justify-between text-lg font-bold text-gray-900">
//               <p>Total Rental Price</p>
//               <p>${promoApplied ? "72.00" : "80.00"}</p>
//             </div>
//           </div>
          
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default PaymentPage;



"use client"
import React from 'react'
import BillingInfo from './biling'


function page() {
  return (
   <BillingInfo/>

  )
}

export default page