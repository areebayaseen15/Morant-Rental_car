"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animation

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alex Stanton",
      position: "CEO at Bukalapak",
      date: "2022-07-21", // Use ISO date format (YYYY-MM-DD)
      rating: 4,
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      avatar: "/dp.png",
    },
    {
      id: 2,
      name: "Skylar Dias",
      position: "CEO at Amazon",
      date: "2022-07-20", // Use ISO date format (YYYY-MM-DD)
      rating: 5,
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      avatar: "/dp.png",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    position: "",
    rating: 0,
    review: "",
    avatar: "/dp.png", // Default avatar
  });

  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [reviewsPerPage] = useState<number>(2); // Limit reviews per page

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReview = () => {
    if (
      newReview.name &&
      newReview.position &&
      newReview.rating &&
      newReview.review
    ) {
      setReviews((prev) => [
        ...prev,
        {
          ...newReview,
          id: Date.now(), // unique ID based on timestamp
          date: new Date().toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        },
      ]);
      setNewReview({ name: "", position: "", rating: 0, review: "", avatar: "/dp.png" });
      setError(""); // Clear any previous error
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleDeleteReview = (id: number) => {
    const filteredReviews = reviews.filter((review) => review.id !== id);
    setReviews(filteredReviews);
  };

  const handleEditReview = (id: number) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setNewReview(reviewToEdit);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index of the first and last reviews to display based on the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Sort reviews by date: Ensure the date is properly formatted before sorting
  const sortedReviews = currentReviews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Sorting by time in descending order
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Reviews Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-black">Reviews</h3>
        <span className="bg-blue-100 text-blue-500 text-sm font-bold px-2 py-1 rounded-full">
          {reviews.length}
        </span>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <motion.div
            key={review.id}
            className="flex flex-col sm:flex-row sm:justify-between items-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-4 text-black">
              <Image
                src={review.avatar}
                alt={review.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <p className="text-sm text-blue-500">{review.position}</p>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
            <div className="flex flex-col items-end text-black sm:items-start sm:ml-auto">
              <span className="text-sm text-gray-500">{review.date}</span>
              <div className="flex text-yellow-400 mt-2">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ★
                    </motion.span>
                  ))}
                {Array(5 - review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-yellow-300"
                    >
                      ★
                    </motion.span>
                  ))}
              </div>
              <div className="flex gap-4 mt-2">
               
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Add Review Form */}
      <div className="mt-6 border-t pt-6">
        <h4 className="text-lg font-bold text-black mb-4">Add Your Review</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="p-2 border rounded-lg text-black"
          />
          <input
            type="text"
            name="position"
            value={newReview.position}
            onChange={handleInputChange}
            placeholder="Your Position"
            className="p-2 border rounded-lg text-black"
          />
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="p-2 border rounded-lg text-black"
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            name="review"
            value={newReview.review}
            onChange={handleInputChange}
            placeholder="Write your review..."
            className="p-2 border rounded-lg text-black col-span-1 sm:col-span-2"
            rows={3}
          ></textarea>
        </div>
        <motion.button
          onClick={handleAddReview}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          whileTap={{ scale: 0.95 }}
        >
          Submit Review
        </motion.button>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * reviewsPerPage >= reviews.length}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
