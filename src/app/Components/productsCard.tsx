// productsCard.tsx


// "use client";

// import { useEffect, useState } from "react";
// import client from "@/sanity/lib/client";
// import Image from "next/image";
// import PickDropSection from "./pickup";
// import Footer from "./footer";
// import Navbar from "./navbar";
// import Link from "next/link";
// import { toast, Toaster } from "react-hot-toast";
// import { motion } from "framer-motion"; // Importing framer-motion for animation

// // Define Car type
// type Car = {
//   _id: string;
//   name: string;
//   originalPrice: number;
//   pricePerDay: number;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   type: string;
//   imageUrl: string;
//   slug: string;
// };

// export default function Home() {
//   const [cars, setCars] = useState<Car[]>([]); // State to store all car data
//   const [filteredCars, setFilteredCars] = useState<Car[]>([]); // State to store filtered cars
//   const [wishlist, setWishlist] = useState<Car[]>([]); // State to store wishlist
//   const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

//   // Load wishlist from localStorage on mount
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       try {
//         setWishlist(JSON.parse(storedWishlist));
//       } catch (error) {
//         console.error("Error parsing wishlist:", error);
//       }
//     }
//   }, []);

//   // Persist wishlist to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Fetch car data
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == "car"] {
//             _id,
//             name,
//             originalPrice,
//             pricePerDay,
//             fuelCapacity,
//             transmission,
//             seatingCapacity,
//             type,
//             "imageUrl": image.asset->url,
//             "slug": slug.current
//           }
//         `);
//         setCars(data);
//         setFilteredCars(data); // Initialize filteredCars with all cars
//       } catch (err) {
//         console.error("Error fetching car data:", err);
//       }
//     };

//     fetchCars();
//   }, []);

//   // Handle Wishlist Toggle
//   const handleWishlistToggle = (car: Car) => {
//     const existsInWishlist = wishlist.some((item) => item._id === car._id);

//     if (existsInWishlist) {
//       // Remove from wishlist
//       const updatedWishlist = wishlist.filter((item) => item._id !== car._id);
//       setWishlist(updatedWishlist);
//       toast.error(`${car.name} removed from wishlist`);
//     } else {
//       // Add to wishlist
//       const updatedWishlist = [...wishlist, car];
//       setWishlist(updatedWishlist);
//       toast.success(`${car.name} added to wishlist`);
//     }
//   };

//   // Handle Search
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query === "") {
//       setFilteredCars(cars); // If search query is empty, show all cars
//     } else {
//       const filtered = cars.filter((car) =>
//         car.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredCars(filtered);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Toaster position="top-right" />
//       <Navbar />

//       Search Bar
//       <div className="container mx-auto py-6 px-4">
//         <motion.input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           placeholder="Search for a car..."
//           className="w-full p-3 border rounded-md text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}         
//         />
//    <button className="bg-green-500 justify-end text-white px-4 py-2 rounded">Enter</button>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <motion.div
//             className="flex justify-center items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Image
//               src="/Ads 1.png"
//               alt="Advertisement 1"
//               className="w-full h-auto rounded-lg"
//               priority
//               width={600}
//               height={400}
//             />
//           </motion.div>
//           <motion.div
//             className="flex justify-center items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Image
//               src="/Ads 2.png"
//               alt="Advertisement 2"
//               className="w-full h-auto rounded-lg"
//               priority
//               width={600}
//               height={400}
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Pickup / Drop Section */}
//       <PickDropSection />

//       {/* Car Cards Section */}
//       <section className="container mx-auto py-12">
//         <h2 className="text-2xl text-black font-bold mb-8">Available Cars</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredCars.length > 0 ? (
//             filteredCars.map((car: Car) => (
//               <motion.div
//                 key={car._id}
//                 className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="relative w-full h-24">
//                   <Image
//                     src={car.imageUrl}
//                     alt={car.name}
//                     className="rounded-t-lg object-cover"
//                     width={232}
//                     height={72}
//                   />
//                   {/* Heart Icon */}
//                   <motion.button
//                     className={`absolute top-2 right-2 text-2xl ${
//                       wishlist.some((item) => item._id === car._id)
//                         ? "text-red-500"
//                         : "text-gray-400"
//                     }`}
//                     onClick={() => handleWishlistToggle(car)}
//                     whileTap={{ scale: 1.2 }}
//                   >
//                     ♥
//                   </motion.button>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
//                   <p className="text-gray-600 text-sm">{car.type}</p>
//                   <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
//                     <span>🛢 {car.fuelCapacity}</span>
//                     <span>🚗 {car.seatingCapacity}</span>
//                   </div>
//                   <div className="text-gray-800 font-bold text-lg mt-2">
//                     {car.pricePerDay}
//                   </div>
//                   <div className="text-gray-600 line-through text-sm">
//                     {car.originalPrice}
//                   </div>
//                   <Link href={`/carpost/${car.slug}`}>
//                     <motion.button
//                       className="bg-blue-600 text-white w-full mt-4 py-2 rounded-md"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       Rent Now
//                     </motion.button>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-gray-600 text-center col-span-full">
//               No cars found matching your search.
//             </p>
//           )}
//         </div>
//         <div className="flex justify-center mt-8">
//           <Link href={`/Detialpage/`}>
//             <motion.button
//               className="bg-blue-600 text-white px-6 py-2 rounded-md"
//               whileHover={{ scale: 1.1 }}
//             >
//               Show more cars
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import client from "@/sanity/lib/client";
import Image from "next/image";
import PickDropSection from "./pickup";
import Footer from "./footer";
import Navbar from "./navbar";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion"; // Importing framer-motion for animation

// Define Car type
type Car = {
  _id: string;
  name: string;
  originalPrice: number;
  pricePerDay: number;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  type: string;
  imageUrl: string;
  slug: string;
};

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]); // State to store all car data
  const [filteredCars, setFilteredCars] = useState<Car[]>([]); // State to store filtered cars
  const [wishlist, setWishlist] = useState<Car[]>([]); // State to store wishlist
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist:", error);
      }
    }
  }, []);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Fetch car data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "car"] {
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
          }
        `);
        setCars(data);
        setFilteredCars(data); // Initialize filteredCars with all cars
      } catch (err) {
        console.error("Error fetching car data:", err);
      }
    };

    fetchCars();
  }, []);

  // Handle Wishlist Toggle
  const handleWishlistToggle = (car: Car) => {
    const existsInWishlist = wishlist.some((item) => item._id === car._id);

    if (existsInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item) => item._id !== car._id);
      setWishlist(updatedWishlist);
      toast.error(`${car.name} removed from wishlist`);
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, car];
      setWishlist(updatedWishlist);
      toast.success(`${car.name} added to wishlist`);
    }
  };

  // Handle Search with Enter Key
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredCars(cars); // If search query is empty, show all cars
    } else {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  // Trigger search when Enter key is pressed
  const handleKeyPress = (e:any) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-right" />
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 items-center">
        <motion.input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a car..."
          className="w-full p-3 border rounded-md text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={() => handleSearch(searchQuery)}
          className="bg-green-500 text-white px-6 py-2 rounded-md w-full sm:w-auto mt-4 sm:mt-0"
        >
          Search
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/Ads 1.png"
              alt="Advertisement 1"
              className="w-full h-auto rounded-lg"
              priority
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/Ads 2.png"
              alt="Advertisement 2"
              className="w-full h-auto rounded-lg"
              priority
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </div>

      {/* Pickup / Drop Section */}
      <PickDropSection />

      {/* Car Cards Section */}
      <section className="container mx-auto py-12">
        <motion.h2
          className="text-2xl text-black font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Available Cars
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car: Car) => (
              <motion.div
                key={car._id}
                className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-full h-24">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    className="rounded-t-lg object-cover"
                    width={232}
                    height={72}
                  />
                  {/* Heart Icon */}
                  <motion.button
                    className={`absolute top-2 right-2 text-2xl ${
                      wishlist.some((item) => item._id === car._id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleWishlistToggle(car)}
                    whileTap={{ scale: 1.2 }}
                  >
                    ♥
                  </motion.button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
                  <p className="text-gray-600 text-sm">{car.type}</p>
                  <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                    <span>🛢 {car.fuelCapacity}</span>
                    <span>🚗 {car.seatingCapacity}</span>
                  </div>
                  <div className="text-gray-800 font-bold text-lg mt-2">
                    {car.pricePerDay}
                  </div>
                  <div className="text-gray-600 line-through text-sm">
                    {car.originalPrice}
                  </div>
                  <Link href={`/carpost/${car.slug}/billing/`}>
                    <motion.button
                      className="bg-blue-600 text-white w-full mt-4 py-2 rounded-md"
                      whileHover={{ scale: 1.1 }}
                    >
                      Rent Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No cars found matching your search.
            </p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link href={`/Detialpage/`}>
            <motion.button
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
              whileHover={{ scale: 1.1 }}
            >
              Show more cars
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
