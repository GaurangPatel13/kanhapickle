import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Priya Sharma",
    feedback:
      "The pickles from Kanha Pickles are simply the best! The flavors are authentic and remind me of my childhood.",
    location: "Mumbai, India",
  },
  {
    name: "Rahul Verma",
    feedback:
      "I love how fresh and flavorful these pickles are. They go perfectly with every meal!",
    location: "Delhi, India",
  },
  {
    name: "Anita Mehta",
    feedback:
      "Kanha Pickles have become a staple in our household. The quality and taste are unmatched.",
    location: "Pune, India",
  },
  {
    name: "Vikram Singh",
    feedback:
      "The pickles are amazing! They add the perfect touch to every dish.",
    location: "Bangalore, India",
  },
  {
    name: "Sneha Das",
    feedback:
      "I appreciate the attention to detail in every jar. The taste is truly unparalleled.",
    location: "Kolkata, India",
  },
  {
    name: "Raj Malhotra",
    feedback:
      "Kanha Pickles bring back memories of my grandma's homemade pickles.",
    location: "Chandigarh, India",
  },
  {
    name: "Alok Jain",
    feedback:
      "The best pickles I’ve had! They complement every meal beautifully.",
    location: "Hyderabad, India",
  },
  {
    name: "Simran Kaur",
    feedback:
      "Kanha Pickles are now a part of our family dinners. We can’t get enough!",
    location: "Amritsar, India",
  },
  {
    name: "Neha Kapoor",
    feedback: "The flavors are so authentic and rich. Every jar is a delight!",
    location: "Lucknow, India",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -323, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 323, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      containerRef.current.scrollBy({ left: 324, behavior: "smooth" });
      if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      ) {
        containerRef.current.scrollLeft = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white py-16 relative">
      <div className="container mx-auto px-5 md:px-10">
        <h6 className="text-2xl md:text-2xl font-bold font-cinzelBlack px-[6px] text-center md:mb-14 text-electricBlue mb-10">
          What Our Customers Are Saying
        </h6>
        <div className="flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-[0px] md:left-[-10px] md:text-3xl bg-opacity-25 bg-gray-700 rounded-full p-2 text-white"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6"
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] p-6 border rounded-lg shadow-lg bg-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                  {testimonial.feedback}
                </p>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-[0px] md:right-[-10px] md:text-3xl bg-opacity-25 bg-gray-700 rounded-full p-2 text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
