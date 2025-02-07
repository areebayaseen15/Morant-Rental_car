"use client";

import client from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

// Fetch product details from Sanity
async function getProduct(slug: string) {
  const query = `*[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    originalPrice,
    pricePerDay,
    fuelCapacity,
    transmission,
    seatingCapacity,
    type,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;
  return await client.fetch(query, { slug });
}

export default function ProductDetail() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const slug = params?.slug;

      if (!slug || Array.isArray(slug)) {
        console.error("Invalid slug provided.");
        return;
      }

      try {
        const fetchedProduct = await getProduct(slug);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params]);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new item
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    router.push("/cart"); // Navigate to cart
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-500">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          Product not found. 😔
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto py-10 px-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="object-cover"
              width={332}
              height={150}
            />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              {product.type}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center mb-6">
                <span className="text-lg text-blue-600 font-bold">
                  {product.pricePerDay}
                </span>
                <span className="text-sm text-gray-500 line-through ml-4">
                  ${product.originalPrice}
                </span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Fuel Capacity:</strong> {product.fuelCapacity}
                </li>
                <li>
                  <strong>Seating Capacity:</strong> {product.seatingCapacity}{" "}
                  people
                </li>
                <li>
                  <strong>Transmission:</strong> {product.transmission}
                </li>
              </ul>
            </div>
            <Link href="/paymentpage">
              <button
                onClick={addToCart}
                className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gray-50 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Why Choose Us?</h2>
          <p className="text-gray-600">
            Enjoy top-notch service with the best cars at competitive prices.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Reliable and well-maintained vehicles</li>
            <li>✔ Transparent pricing with no hidden costs</li>
            <li>✔ Easy booking and hassle-free cancellations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
