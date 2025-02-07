"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/app/Components/checkout";
import convertToSubcurrency from "../../../../../lib/convetToSubcurrency";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import client from "@/sanity/lib/client";
import { use } from "react";


interface PageProps {
  params: Promise<{ slug: string }>;
}

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const cleanPrice = (price: string) => {
  const cleanedPrice = price.replace(/[^\d.-]/g, "");
  return parseFloat(cleanedPrice);
};

const Payment = ({ params }: PageProps) => {
  const { slug } = use(params);
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const query = `*[_type == "car" && slug.current == $slug][0]`;
        const data = await client.fetch(query, { slug });
        setCar(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found!</p>;

  const pricePerDay = cleanPrice(car?.pricePerDay || "0");
  const amount = convertToSubcurrency(pricePerDay);
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(10);
    } else {
      alert("Invalid promo code");
    }
  };

  const total = pricePerDay - discount;

  return (
    
    <div className="flex flex-col-reverse lg:flex-row gap-5 p-5 bg-white">
    
      {/* Payment Section */}
     
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(total),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={total} />
      </Elements>

      {/* Rental Summary */}
      
      <div className="flex flex-col max-w-[700px] w-full bg-white rounded-lg p-6 shadow-lg">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#1A202C]">Rental Summary</h2>
          <p className="text-xs sm:text-sm text-[#acb9cb]">
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
            {car?.image ? (
              <Image
                src={urlFor(car.image).url()}
                alt={car?.name || "Car"}
                width={116}
                height={72}
                className="rounded-md object-cover"
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A202C]">{car?.name || "Unknown Car"}</h3>
            <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-sm sm:text-base">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-[#90A3BF] text-xs sm:text-sm ml-2">440+ Reviews</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm sm:text-base font-medium text-[#90A3BF]">Subtotal</span>
            <span className="text-sm sm:text-base font-semibold text-[#1A202C]">${pricePerDay}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base font-medium text-[#90A3BF]">Tax</span>
            <span className="text-sm sm:text-base font-semibold text-[#1A202C]">$0</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="flex flex-col sm:flex-row gap-4 text-black items-center mb-4">
          <input
            type="text"
            placeholder="Apply promo code save10"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-grow h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-xs sm:text-sm placeholder-[#90A3BF] focus:outline-none"
          />
          <button
            onClick={applyPromoCode}
            className="w-full sm:w-[92px] h-10 sm:h-12 bg-[#3563E9] text-white text-xs sm:text-sm font-semibold rounded-lg"
          >
            Apply now
          </button>
        </div>

        {/* Total Price */}
        <div className="border-t border-[#EDEDED] pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm sm:text-lg font-bold text-[#1A202C]">Total Rental Price</span>
            <span className="text-xl sm:text-2xl font-bold text-[#3563E9]">${total}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#90A3BF] text-center sm:text-left">
            Overall price and includes rental discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
