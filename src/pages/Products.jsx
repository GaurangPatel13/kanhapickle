import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Card from "../components/Card";

const Products = () => {
  // Sample product data
  const allProducts = [
    {
      id: 1,
      image: "/Assets/mango 500g.png",
      title: "Rajshahi Mango Pickle",
      description: "Tangy and spicy!",
      Category: "Mango",
      size: "500g",
    },
    {
      id: 2,
      image: "/Assets/gorkeri 350g.png",
      title: "Gujarati Gorkeri Pickle",
      description: "Sweet and Categoryful.",
      Category: "Sweet",
      size: "325g",
    },
    {
      id: 3,
      image: "/Assets/lemon 325g.png",
      title: "Super Lemon Pickle",
      description: "A burst of lemony freshness.",
      Category: "Lemon",
      size: "325g",
    },
    {
      id: 4,
      image: "/Assets/chilli 325g.png",
      title: "Premium Green Chilli Pickle",
      description: "Green chilli with a spicy twist.",
      Category: "Chilli",
      size: "325g",
    },
    {
      id: 5,
      image: "/Assets/chilli 5kg.png",
      title: "Spicy Green Chilli Pickle",
      description: "Green chilli with a spicy twist.",
      Category: "Chilli",
      size: "5Kg",
    },
    {
      id: 6,
      image: "/Assets/mix 325g.png",
      title: "Special Mixed Pickle",
      description: "Tangy and spicy Mixed Vegitable pickle.",
      Category: "Mix",
      size: "325g",
    },
  ];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [fadeAnim, setFadeAnim] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle filter change for Category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle filter change for size
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter((product) => {
    return (
      (selectedCategory === "All" || product.Category === selectedCategory) &&
      (selectedSize === "All" || product.size === selectedSize)
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeAnim(true);
    }, 300);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold =
        window.innerWidth < 768
          ? document.documentElement.scrollHeight * 0.1
          : document.documentElement.scrollHeight * 0.15;
      setShowScrollButton(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-softWhite text-charcoalGrey min-h-screen">
      <div className="container mx-auto px-5 py-10">
        <h1
          className={`text-4xl font-bold text-electricBlue md:text-center mb-6 font-cinzelBlack transition-all duration-1000 ${
            fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Pickles
        </h1>

        {/* Filters */}
        <div
          className={`flex md:mb-6 space-x-4 mb-8 transition-all duration-1000 ${
            fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <label htmlFor="Category" className="text-s font-medium">
              Category
            </label>
            <select
              id="Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="ml-2 p-2 text-sm border rounded-md"
            >
              <option value="All">All</option>
              <option value="Mango">Mango</option>
              <option value="Mix">Mix</option>
              <option value="Chilli">Green Chilli</option>
              <option value="Sweet">Gor Keri</option>
              <option value="Lemon">Lemon</option>
            </select>
          </div>

          <div>
            <label htmlFor="size" className="text-sm font-medium">
              Size
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="ml-2 p-2 text-sm border rounded-md"
            >
              <option value="All">All</option>
              <option value="325g">325g</option>
              <option value="500g">500g</option>
              <option value="1Kg">1Kg</option>
              <option value="5Kg">5Kg</option>
            </select>
          </div>
        </div>

        {/* Products List */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-500 transform ${
            fadeAnim ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              size={product.size}
            />
          ))}
        </div>

        {/* Scroll to top button */}
        {showScrollButton && (
          <button
            className="fixed bottom-10 right-10 bg-electricBlue text-softWhite p-2 rounded-full hover:bg-electricBlue/90 transition-colors duration-200 ease-in-out"
            onClick={scrollToTop}
          >
            <FaArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
