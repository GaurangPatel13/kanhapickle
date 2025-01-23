import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const HomePage = () => {
  const [fadeAnim, setFadeAnim] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeAnim(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    navigate("/products");
  }

  const products = [
    {
      id: 1,
      name: "Pickle Name 1",
      description: "Fresh and tangy homemade pickle.",
      image: "https://img.freepik.com/premium-photo/homemade-pickled-garlic-cloves-with-chopped-chili-peppers-mason-jar_841543-61641.jpg?ga=GA1.1.1864150380.1732104550&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Pickle Name 2",
      description: "Spicy and flavorful homemade pickle.",
      image: "./public/Assets/pickle2.png",
    },
    {
      id: 3,
      name: "Pickle Name 3",
      description: "Sweet and savory homemade pickle.",
      image: "./public/Assets/pickle3.png",
    },
  ];

  return (
    <div className="relative bg-softWhite font-Helvatica text-charcoalGrey min-h-screen flex flex-col">
      <div className="container mx-auto text-center relative px-4 flex-grow">
        <h1
          className={`text-4xl md:text-5xl py-10 md:py-5 font-bold font-cinzelBlack transition-all duration-1000 ${
            fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Discover the Essence of Homemade Pickles
        </h1>
        <div className="flex items-center justify-center">
          <img
            className={`mt-5 md:w-1/2 transition-all duration-700 delay-500 transform ${
              fadeAnim ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            src="https://img.freepik.com/free-vector/pickles-horizontal-composition-with-lots-glass-jars-with-vegetables-text-pieces-ripe-fruits-illustration_1284-31405.jpg?ga=GA1.1.1864150380.1732104550&semt=ais_hybrid"
            alt="Pickle Banner"
          />
        </div>

        <p
          className={`mt-5 text-lg md:text-xl transition-all font-cinzelBlack duration-1000 delay-200 ${
            fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Fresh, flavorful, and made with love.
        </p>
        <button
          onClick={handleButtonClick}
          className={`mt-5 bg-sunsetOrange text-white px-5 py-2 mb-10 rounded-lg transition-all duration-200 delay-500 transform ${
            fadeAnim ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } hover:bg-goldenYellow hover:text-charcoalGrey`}
        >
          View Our Collection
        </button>

        {/* Product Section */}
        <div className="mt-10 mb-5">
          <h2 className={`text-3xl font-bold text-charcoalGrey mb-6 transition-all duration-1000 ${
            fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Featured Products
          </h2>
          <div onClick={handleButtonClick} className={`mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-700 delay-500 transform ${
              fadeAnim ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}>
          
            {products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
