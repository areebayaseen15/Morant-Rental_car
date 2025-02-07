// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import CarSummary from "./carssummary";
// import Footer from "../Components/footer";
// import Navbar from "../Components/navbar";

// export default function BillingInfo() {

//   const [selectedPayment, setSelectedPayment] = useState("");

  
//   const handlePaymentMethodSelect = (method: React.SetStateAction<string>) => {
//     setSelectedPayment(method === selectedPayment ? "" : method); 
//   };

//   return (
   
//     <div className="w-full min-h-screen bg-[#F6F7F9]">
// <Navbar /> 

// <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
//   {/* Left Section */}
//    <div className="lg:col-span-8 space-y-6">
     
//       {/* Billing Info */}
//       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md p-6 lg:ml-6">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <p className="text-xl font-bold text-[#1A202C]">Billing Info</p>
//             <p className="text-sm font-medium text-[#90A3BF] mt-1">
//               Please enter your billing info
//             </p>
//           </div>
//           <p className="text-sm font-medium text-[#90A3BF]">Step 1 of 4</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {["Name", "Phone Number", "Address", "Town / City"].map((label) => (
//             <div key={label}>
//               <p className="text-base font-semibold text-[#1A202C]">{label}</p>
//               <input
//                 type="text"
//                 placeholder={`Your ${label.toLowerCase()}`}
//                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Rental Info */}
//       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <p className="text-xl font-bold text-[#1A202C]">Rental Info</p>
//             <p className="text-sm font-medium text-[#90A3BF] mt-1">
//               Please select your rental date
//             </p>
//           </div>
//           <p className="text-sm font-medium text-[#90A3BF]">Step 2 of 4</p>
//         </div>

//         {/* Pick-Up and Drop-Off */}
//         <div className="space-y-8">
//           {["Pick-Up", "Drop-Off"].map((type) => (
//             <div key={type}>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
//                   <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
//                 </div>
//                 <p className="text-lg font-semibold text-[#1A202C]">{type}</p>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
//                 {["Locations", "Date", "Time"].map((label) => (
//                   <div key={label}>
//                     <p className="text-base font-semibold text-[#1A202C]">{label}</p>
//                     <div className="relative mt-2">
//                       <input
//                         type="text"
//                         placeholder={`Select your ${label.toLowerCase()}`}
//                         className="w-full h-14 border rounded-lg px-4 text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                       />
//                       <Image
//                         src="/arrowdown.png"
//                         alt="Arrow"
//                         width={14}
//                         height={14}
//                         className="absolute w-4 h-4 top-1/2 right-4 transform -translate-y-1/2"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Payment Method */}
//       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <p className="text-lg font-bold text-[#1A202C]">Payment Method</p>
//             <p className="text-sm font-medium text-[#90A3BF]">
//               Please enter your payment method
//             </p>
//           </div>
//           <p className="text-sm font-medium text-[#90A3BF]">Step 3 of 4</p>
//         </div>

//         <div className="bg-[#F6F7F9] rounded-lg p-6">
         
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex items-center gap-2">
//               <Image
//                 src="/Mark.png"
//                 alt=""
//                 width={4}
//                 height={4}
//                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
//               />
//               <p
//                 className="text-base font-semibold text-[#1A202C]"
//                 onClick={() => handlePaymentMethodSelect("Credit Card")}
//               >
//                 Credit Card
//               </p>
//             </div>
//             <Image
//               src="/Visa.png"
//               alt="Visa Logo"
//               width={92}
//               height={24}
//               className="w-[92px]"
//             />
//           </div>

//           {selectedPayment === "Credit Card" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-semibold text-[#1A202C]">Card Number</p>
//                 <input
//                   type="text"
//                   placeholder="Enter your card number"
//                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-[#1A202C]">Card Holder</p>
//                 <input
//                   type="text"
//                   placeholder="Enter cardholder name"
//                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-[#1A202C]">Expiration Date</p>
//                 <input
//                   type="text"
//                   placeholder="MM / YY"
//                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-[#1A202C]">CVC</p>
//                 <input
//                   type="text"
//                   placeholder="Enter CVC"
//                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                 />
//               </div>
//             </div>
//           )}

      
//           <div className="flex justify-between items-center mb-8 mt-4">
//             <div className="flex items-center gap-2">
//               <Image
//                 src="/Mark.png"
//                 alt=""
//                 width={4}
//                 height={4}
//                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
//               />
//               <p
//                 className="text-base font-semibold text-[#1A202C]"
//                 onClick={() => handlePaymentMethodSelect("PayPal")}
//               >
//                 PayPal
//               </p>
//             </div>
//             <Image
//               src="/PayPal.png"
//               alt="PayPal Icon"
//               width={100}
//               height={24}
//               className="ml-auto"
//             />
//           </div>

//           {selectedPayment === "PayPal" && (
//             <div className="mt-4">
//               <p className="text-sm font-semibold text-[#1A202C]">PayPal Email</p>
//               <input
//                 type="email"
//                 placeholder="Enter your PayPal email"
//                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//               />
//             </div>
//           )}

//           <div className="flex justify-between items-center mb-8 mt-4">
//             <div className="flex items-center gap-2">
//               <Image
//                 src="/Mark.png"
//                 alt=""
//                 width={4}
//                 height={4}
//                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
//               />
//               <p
//                 className="text-base font-semibold text-[#1A202C]"
//                 onClick={() => handlePaymentMethodSelect("Bitcoin")}
//               >
//                 Bitcoin
//               </p>
//             </div>
//             <Image
//               src="/Bitcoin.png"
//               alt="Bitcoin Icon"
//               width={100}
//               height={24}
//               className="ml-auto"
//             />
//           </div>

//           {selectedPayment === "Bitcoin" && (
//             <div className="mt-4">
//               <p className="text-sm font-semibold text-[#1A202C]">Bitcoin Address</p>
//               <input
//                 type="text"
//                 placeholder="Enter your Bitcoin address"
//                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//               />
//             </div>
//           )}
//         </div>
//         </div>
        
//         {/* Confirmation */}
//         <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 mb-9 p-6 lg:ml-6">
//           <div className="flex justify-between items-start gap-4 mb-6">
//             <div className="w-3/4">
//               <p className="text-xl font-bold text-[#1A202C]">Confirmation</p>
//               <p className="text-sm font-medium text-[#90A3BF] mt-2">
//                 We are getting to the end. Just a few clicks and your rental is ready!
//               </p>
//             </div>
//             <p className="text-sm font-medium text-[#90A3BF]">Step 4 of 4</p>
//           </div>

//           <div className="flex flex-col gap-4 mb-6">
//             <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
//               <input type="checkbox" className="w-6 h-6 mr-4" />
//               <p className="text-base font-semibold text-[#1F2544]">
//                 I agree with sending Marketing and newsletter emails. No spam, promised!
//               </p>
//             </div>

//             <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
//               <input type="checkbox" className="w-6 h-6 mr-4" />
//               <p className="text-base font-semibold text-[#1F2544]">
//                 I agree with our terms and conditions and privacy policy.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center mb-6">
//             <button className="w-36 h-14 bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white">
//               <p className="text-base font-bold">Rent Now</p>
//             </button>
          
//           </div>

//           <div className="flex flex-col gap-2">
//             <div className="flex items-center">
//               <Image src="/saftey.png" width={32} height={32} alt="Security Icon" />
//               <p className="text-base font-semibold text-[#1A202C] ml-2">All your data are safe</p>
//             </div>
//             <p className="text-sm font-medium text-[#90A3BF]">
//               We are using the most advanced security to provide you the best experience ever.
//             </p>
//             <CarSummary />
//           </div>
//         </div>
//         {/* <Footer /> */}
//         <Footer/>
//     </div>
//     </div>
//     </div>

// );
// }



// components/BillingInfo.tsx

// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import CarSummary from './carssummary';
// import Footer from '../Components/footer';
// import Navbar from '../Components/navbar';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import PaymentForm from '@/app/payMethod/PaymentForm';

// // Initialize Stripe outside of component render to avoid recreating Stripe object on every render
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// const BillingInfo: React.FC = () => {
//   const [selectedPayment, setSelectedPayment] = useState<string>('');

//   const handlePaymentMethodSelect = (method: string) => {
//     setSelectedPayment(method === selectedPayment ? '' : method);
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="w-full min-h-screen bg-[#F6F7F9]">
//         <Navbar />

//         <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
//           {/* Left Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Billing Info */}
//             <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md p-6 lg:ml-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <p className="text-xl font-bold text-[#1A202C]">Billing Info</p>
//                   <p className="text-sm font-medium text-[#90A3BF] mt-1">
//                     Please enter your billing info
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-[#90A3BF]">Step 1 of 4</p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {['Name', 'Phone Number', 'Address', 'Town / City'].map((label) => (
//                   <div key={label}>
//                     <p className="text-base font-semibold text-[#1A202C]">{label}</p>
//                     <input
//                       type="text"
//                       placeholder={`Your ${label.toLowerCase()}`}
//                       className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Rental Info */}
//             <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <p className="text-xl font-bold text-[#1A202C]">Rental Info</p>
//                   <p className="text-sm font-medium text-[#90A3BF] mt-1">
//                     Please select your rental date
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-[#90A3BF]">Step 2 of 4</p>
//               </div>

//               {/* Pick-Up and Drop-Off */}
//               <div className="space-y-8">
//                 {['Pick-Up', 'Drop-Off'].map((type) => (
//                   <div key={type}>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
//                         <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
//                       </div>
//                       <p className="text-lg font-semibold text-[#1A202C]">{type}</p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
//                       {['Locations', 'Date', 'Time'].map((label) => (
//                         <div key={label}>
//                           <p className="text-base font-semibold text-[#1A202C]">{label}</p>
//                           <div className="relative mt-2">
//                             <input
//                               type="text"
//                               placeholder={`Select your ${label.toLowerCase()}`}
//                               className="w-full h-14 border rounded-lg px-4 text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                             />
//                             <Image
//                               src="/arrowdown.png"
//                               alt="Arrow"
//                               width={14}
//                               height={14}
//                               className="absolute w-4 h-4 top-1/2 right-4 transform -translate-y-1/2"
//                             />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <p className="text-lg font-bold text-[#1A202C]">Payment Method</p>
//                   <p className="text-sm font-medium text-[#90A3BF]">
//                     Please enter your payment method
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-[#90A3BF]">Step 3 of 4</p>
//               </div>

//               <div className="bg-[#F6F7F9] rounded-lg p-6">
//                 {/* Credit Card Selection */}
//                 <div
//                   className="flex justify-between items-center mb-8 cursor-pointer"
//                   onClick={() => handlePaymentMethodSelect('Credit Card')}
//                 >
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
//                       {selectedPayment === 'Credit Card' && (
//                         <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
//                       )}
//                     </div>
//                     <p className="text-base font-semibold text-[#1A202C]">Credit Card</p>
//                   </div>
//                   <Image
//                     src="/Visa.png"
//                     alt="Visa Logo"
//                     width={92}
//                     height={24}
//                     className="w-[92px]"
//                   />
//                 </div>

//                 {selectedPayment === 'Credit Card' && <PaymentForm />}

//                 {/* PayPal Selection (Optional) */}
//                 <div
//                   className="flex justify-between items-center mb-8 mt-4 cursor-pointer"
//                   onClick={() => handlePaymentMethodSelect('PayPal')}
//                 >
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
//                       {selectedPayment === 'PayPal' && (
//                         <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
//                       )}
//                     </div>
//                     <p className="text-base font-semibold text-[#1A202C]">PayPal</p>
//                   </div>
//                   <Image
//                     src="/PayPal.png"
//                     alt="PayPal Icon"
//                     width={100}
//                     height={24}
//                     className="ml-auto"
//                   />
//                 </div>

//                 {selectedPayment === 'PayPal' && (
//                   <div className="mt-4">
//                     <p className="text-sm font-semibold text-[#1A202C]">PayPal Email</p>
//                     <input
//                       type="email"
//                       placeholder="Enter your PayPal email"
//                       className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                     />
//                   </div>
//                 )}

//                 {/* Bitcoin Selection (Optional) */}
//                 <div
//                   className="flex justify-between items-center mb-8 mt-4 cursor-pointer"
//                   onClick={() => handlePaymentMethodSelect('Bitcoin')}
//                 >
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
//                       {selectedPayment === 'Bitcoin' && (
//                         <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
//                       )}
//                     </div>
//                     <p className="text-base font-semibold text-[#1A202C]">Bitcoin</p>
//                   </div>
//                   <Image
//                     src="/Bitcoin.png"
//                     alt="Bitcoin Icon"
//                     width={100}
//                     height={24}
//                     className="ml-auto"
//                   />
//                 </div>

//                 {selectedPayment === 'Bitcoin' && (
//                   <div className="mt-4">
//                     <p className="text-sm font-semibold text-[#1A202C]">Bitcoin Address</p>
//                     <input
//                       type="text"
//                       placeholder="Enter your Bitcoin address"
//                       className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Confirmation */}
//             <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 mb-9 p-6 lg:ml-6">
//               <div className="flex justify-between items-start gap-4 mb-6">
//                 <div className="w-3/4">
//                   <p className="text-xl font-bold text-[#1A202C]">Confirmation</p>
//                   <p className="text-sm font-medium text-[#90A3BF] mt-2">
//                     We are getting to the end. Just a few clicks and your rental is ready!
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-[#90A3BF]">Step 4 of 4</p>
//               </div>

//               <div className="flex flex-col gap-4 mb-6">
//                 <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
//                   <input type="checkbox" className="w-6 h-6 mr-4" />
//                   <p className="text-base font-semibold text-[#1F2544]">
//                     I agree with sending Marketing and newsletter emails. No spam, promised!
//                   </p>
//                 </div>

//                 <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
//                   <input type="checkbox" className="w-6 h-6 mr-4" />
//                   <p className="text-base font-semibold text-[#1F2544]">
//                     I agree with our terms and conditions and privacy policy.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center mb-6">
//                 <button
//                   className="w-36 h-14 bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white"
//                   // Disable button if payment is not selected or not successful
//                 >
//                   <p className="text-base font-bold">Rent Now</p>
//                 </button>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center">
//                   <Image src="/saftey.png" width={32} height={32} alt="Security Icon" />
//                   <p className="text-base font-semibold text-[#1A202C] ml-2">All your data are safe</p>
//                 </div>
//                 <p className="text-sm font-medium text-[#90A3BF]">
//                   We are using the most advanced security to provide you the best experience ever.
//                 </p>
//                 <CarSummary />
//               </div>
//             </div>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </Elements>
//   );
// };

// export default BillingInfo;


'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CarSummary from './carssummary';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/app/payMethod/PaymentForm';

// Initialize Stripe outside of component render to avoid recreating Stripe object on every render
let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
  }
  return stripePromise;
};

const BillingInfo: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [stripeLoaded, setStripeLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Ensure Stripe is loaded before rendering the Elements provider
    getStripe().then(() => setStripeLoaded(true));
  }, []);

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPayment(method === selectedPayment ? '' : method);
  };

  if (!stripeLoaded) {
    return <div>Loading Stripe...</div>; // Show a loading state while Stripe is being initialized
  }

  return (
    <Elements stripe={getStripe()}>
      <div className="w-full min-h-screen bg-[#F6F7F9]">
        <Navbar />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Billing Info */}
            <div className="w-full bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div>
                  <p className="text-xl font-bold text-[#1A202C]">Billing Info</p>
                  <p className="text-sm font-medium text-[#90A3BF] mt-1">
                    Please enter your billing info
                  </p>
                </div>
                <p className="text-sm font-medium text-[#90A3BF] mt-2 sm:mt-0">Step 1 of 4</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Name', 'Phone Number', 'Address', 'Town / City'].map((label) => (
                  <div key={label}>
                    <p className="text-base font-semibold text-[#1A202C]">{label}</p>
                    <input
                      type="text"
                      placeholder={`Your ${label.toLowerCase()}`}
                      className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Info */}
            <div className="w-full bg-white rounded-lg shadow-md mt-6 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div>
                  <p className="text-xl font-bold text-[#1A202C]">Rental Info</p>
                  <p className="text-sm font-medium text-[#90A3BF] mt-1">
                    Please select your rental date
                  </p>
                </div>
                <p className="text-sm font-medium text-[#90A3BF] mt-2 sm:mt-0">Step 2 of 4</p>
              </div>

              {/* Pick-Up and Drop-Off */}
              <div className="space-y-8">
                {['Pick-Up', 'Drop-Off'].map((type) => (
                  <div key={type}>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
                        <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
                      </div>
                      <p className="text-lg font-semibold text-[#1A202C]">{type}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                      {['Locations', 'Date', 'Time'].map((label) => (
                        <div key={label}>
                          <p className="text-base font-semibold text-[#1A202C]">{label}</p>
                          <div className="relative mt-2">
                            <input
                              type="text"
                              placeholder={`Select your ${label.toLowerCase()}`}
                              className="w-full h-14 border rounded-lg px-4 text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
                            />
                            <Image
                              src="/arrowdown.png"
                              alt="Arrow"
                              width={14}
                              height={14}
                              className="absolute w-4 h-4 top-1/2 right-4 transform -translate-y-1/2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="w-full bg-white rounded-lg shadow-md mt-6 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div>
                  <p className="text-xl font-bold text-[#1A202C]">Payment Method</p>
                  <p className="text-sm font-medium text-[#90A3BF]">
                    Please enter your payment method
                  </p>
                </div>
                <p className="text-sm font-medium text-[#90A3BF] mt-2 sm:mt-0">Step 3 of 4</p>
              </div>

              <div className="bg-[#F6F7F9] rounded-lg p-6">
                {/* Credit Card Selection */}
                <div
                  className="flex justify-between items-center mb-6 cursor-pointer"
                  onClick={() => handlePaymentMethodSelect('Credit Card')}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
                      {selectedPayment === 'Credit Card' && (
                        <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#1A202C]">Credit Card</p>
                  </div>
                  <Image
                    src="/Visa.png"
                    alt="Visa Logo"
                    width={92}
                    height={24}
                    className="w-[92px]"
                  />
                </div>

                {selectedPayment === 'Credit Card' && <PaymentForm />}

                {/* PayPal Selection (Optional) */}
                <div
                  className="flex justify-between items-center mb-6 mt-4 cursor-pointer"
                  onClick={() => handlePaymentMethodSelect('PayPal')}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
                      {selectedPayment === 'PayPal' && (
                        <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#1A202C]">PayPal</p>
                  </div>
                  <Image
                    src="/PayPal.png"
                    alt="PayPal Icon"
                    width={100}
                    height={24}
                    className="ml-auto"
                  />
                </div>

                {selectedPayment === 'PayPal' && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#1A202C]">PayPal Email</p>
                    <input
                      type="email"
                      placeholder="Enter your PayPal email"
                      className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </div>
                )}

                {/* Bitcoin Selection (Optional) */}
                <div
                  className="flex justify-between items-center mb-6 mt-4 cursor-pointer"
                  onClick={() => handlePaymentMethodSelect('Bitcoin')}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
                      {selectedPayment === 'Bitcoin' && (
                        <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#1A202C]">Bitcoin</p>
                  </div>
                  <Image
                    src="/Bitcoin.png"
                    alt="Bitcoin Icon"
                    width={100}
                    height={24}
                    className="ml-auto"
                  />
                </div>

                {selectedPayment === 'Bitcoin' && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#1A202C]">Bitcoin Address</p>
                    <input
                      type="text"
                      placeholder="Enter your Bitcoin address"
                      className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Confirmation */}
            <div className="w-full bg-white rounded-lg shadow-md mt-6 mb-9 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div className="w-full sm:w-3/4">
                  <p className="text-xl font-bold text-[#1A202C]">Confirmation</p>
                  <p className="text-sm font-medium text-[#90A3BF] mt-2">
                    We are getting to the end. Just a few clicks and your rental is ready!
                  </p>
                </div>
                <p className="text-sm font-medium text-[#90A3BF] mt-2 sm:mt-0">Step 4 of 4</p>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
                  <input type="checkbox" className="w-6 h-6 mr-4" />
                  <p className="text-base font-semibold text-[#1F2544]">
                    I agree with sending Marketing and newsletter emails. No spam, promised!
                  </p>
                </div>

                <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
                  <input type="checkbox" className="w-6 h-6 mr-4" />
                  <p className="text-base font-semibold text-[#1F2544]">
                    I agree with our terms and conditions and privacy policy.
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <button
                  className="w-full sm:w-36 h-14 bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white"
                  // Disable button if payment is not selected or not successful
                >
                  <p className="text-base font-bold">Rent Now</p>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <Image src="/saftey.png" width={32} height={32} alt="Security Icon" />
                  <p className="text-base font-semibold text-[#1A202C] ml-2">All your data are safe</p>
                </div>
                <p className="text-sm font-medium text-[#90A3BF]">
                  We are using the most advanced security to provide you the best experience ever.
                </p>
                <CarSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-auto '>
        <Footer/>
      </div>
    </Elements>
  
  );
};

export default BillingInfo;