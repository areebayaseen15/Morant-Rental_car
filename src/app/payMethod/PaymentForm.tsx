// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // // Load Stripe.js with your publishable key
// // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// // const PaymentForm = ({ amount }) => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!stripe || !elements) {
// //       return;
// //     }

// //     // Create a payment intent on the server
// //     const response = await fetch('/api/payment/create-payment-intent', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
// //     });

// //     const { clientSecret } = await response.json();

// //     // Confirm the payment on the client side
// //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //       payment_method: {
// //         card: elements.getElement(CardElement),
// //       },
// //     });

// //     if (error) {
// //       setMessage(`Payment failed: ${error.message}`);
// //     } else if (paymentIntent.status === 'succeeded') {
// //       setMessage('Payment successful!');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <div className="mb-4">
// //         <CardElement
// //           options={{
// //             style: {
// //               base: {
// //                 fontSize: '16px',
// //                 color: '#424770',
// //                 '::placeholder': {
// //                   color: '#aab7c4',
// //                 },
// //               },
// //               invalid: {
// //                 color: '#9e2146',
// //               },
// //             },
// //           }}
// //         />
// //       </div>
// //       <button
// //         type="submit"
// //         disabled={!stripe}
// //         className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
// //       >
// //         Pay ${amount}
// //       </button>
// //       {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
// //     </form>
// //   );
// // };

// // const StripePayment = ({ amount }) => (
// //   <Elements stripe={stripePromise}>
// //     <PaymentForm amount={amount} />
// //   </Elements>
// // );

// // export default StripePayment;






// // app/payment/page.tsx

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import {
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

// const PaymentPage = () => {
//   // If needed
//   const router = useRouter();
//   const stripe = useStripe();
//   const elements = useElements();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Create a PaymentIntent by calling the backend API
//       const response = await axios.post('/api/create-payment-intent', {
//         amount: Math.round(calculateTotal() * 100), // Amount in cents
//         currency: 'usd',
//       });

//       const { clientSecret } = response.data;

//       // Confirm the payment on the client side
//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)!,
//         },
//       });

//       if (paymentResult.error) {
//         setError(paymentResult.error.message || "Payment failed");
//       } else {
//         if (paymentResult.paymentIntent.status === "succeeded") {
//           // Payment successful
//           clearCart();
//           // Optionally clear wishlist or other actions
//           router.push("/order-confirmation");
//         }
//       }
//     } catch (err: any) {
//       setError(err.response?.data?.error || "An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="max-w-4xl mx-auto p-6">
//         <p className="text-center text-gray-600">Your cart is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//         Payment Page
//       </h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Payment Form */}
//         <form
//           onSubmit={handlePayment}
//           className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2"
//         >
//           <h2 className="text-xl font-semibold text-blue-900 mb-4">
//             Payment Details
//           </h2>

//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: "16px",
//                   color: "#424770",
//                   "::placeholder": {
//                     color: "#aab7c4",
//                   },
//                 },
//                 invalid: {
//                   color: "#9e2146",
//                 },
//               },
//             }}
//           />

//           {error && (
//             <div className="mt-4 text-red-500">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={!stripe || loading}
//             className={`mt-6 w-full py-2 px-4 bg-pink-500 text-white rounded-md ${
//               loading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-600"
//             }`}
//           >
//             {loading ? "Processing..." : `Pay $${calculateTotal().toFixed(2)}`}
//           </button>
//         </form>

//         {/* Order Summary */}
//         <div className="bg-purple-50 p-6 rounded-lg shadow-md w-full md:w-1/2">
//           <h2 className="text-xl font-semibold text-blue-900 mb-4">
//             Order Summary
//           </h2>
//           <ul className="divide-y divide-gray-300">
//             {cart.map((item) => (
//               <li key={item.id} className="flex justify-between py-4">
//                 <div>
//                   <p className="font-medium">{item.name}</p>
//                   <p className="text-sm text-gray-500">
//                     ${item.price.toFixed(2)} x {item.quantity}
//                   </p>
//                 </div>
//                 <p className="font-medium text-blue-900">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <p className="flex justify-between text-blue-900">
//               <span>Subtotal:</span>
//               <span>${calculateTotal().toFixed(2)}</span>
//             </p>
//             <p className="flex justify-between text-gray-600">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </p>
//             <p className="flex justify-between font-semibold text-blue-900">
//               <span>Total:</span>
//               <span>${calculateTotal().toFixed(2)}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;



// components/PaymentForm.tsx

'use client';

import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    // Example amount, replace with your actual amount
    const amount = 5000; // $50.00 in cents

    try {
      // Create Payment Intent on the server
      const res = await fetch('/Api/payment/route.ts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.error.message);
      }

      const clientSecret: string = data.clientSecret;

      // Confirm the payment on the client
      const cardElement = elements.getElement(CardElement) as StripeCardElement;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message || 'Payment failed.');
      } else {
        if (paymentResult.paymentIntent?.status === 'succeeded') {
          setSuccess(true);
          // Aap yahan redirect kar sakte hain ya success message dikha sakte hain
        }
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
        className="w-full p-4 border rounded-lg"
      />
      {error && <div className="text-red-500">{error}</div>}
      {success ? (
        <div className="text-green-500">Payment Successful!</div>
      ) : (
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-36 h-14 bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      )}
    </form>
  );
};

export default PaymentForm;
