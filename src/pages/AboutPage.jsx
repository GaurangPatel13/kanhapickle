import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../components/Testionials";
import { useNavigate } from "react-router-dom";
import Values from "../components/Values";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  }
  return (
    <div className="bg-softWhite text-charcoalGrey min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-electricBlue to-sunsetOrange md:h-[170px] h-[225px] px-[6px] flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-cinzelBlack text-softWhite mb-4">
            A Father-Son Journey to Flavorful Perfection
          </h1>
          <p className="text-xl md:text-2xl font-Helvatica text-white">
            Blending tradition with innovation, one jar at a time.
          </p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-5 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-cinzelBlack mb-6 text-center uppercase underline">
            Our Story
          </h2>
          <h6 className="text-2xl md:text-2xl font-bold font-cinzelBlack text-center md:text-start text-electricBlue mb-6">
            From a Village Dream to a Global Flavor
          </h6>
          <p className="text-lg leading-relaxed font-Helvatica text-center md:text-start mb-4">
            The inception of Kanha Pickles is a tale of family, determination,
            and the pursuit of excellence. When the world slowed down during the
            2019 lockdown, Sudhir Patel saw an opportunity to chase a lifelong
            passion for culinary arts. He began experimenting in the family
            kitchen, creating pickle recipes through a rigorous trial-and-error
            process. After eight months of dedication, the perfect recipe was
            born – a blend that not only delighted the palate but also boasted
            an extended shelf life.
            <br />
            By his side was Shreyash Patel, his 14-year-old son, who was eager
            to learn and contribute. Shreyash took on the roles of
            Manufacturing, Buying, and Marketing Head, bringing youthful energy
            and innovative ideas to the table. The father-son duo worked
            tirelessly, blending traditional techniques with modern twists to
            create pickles that resonated with customers far and wide.
          </p>
        </motion.div>
      </div>

      {/* Meet Our Founders Section */}
      <div className="bg-gray-100 py-16">
      <h2 className="text-3xl md:text-4xl font-bold font-cinzelBlack mb-6 text-center uppercase underline">Meet Our Founders</h2>
      <h6 className="text-2xl md:text-2xl font-bold font-cinzelBlack px-[6px] text-center md:mb-14 text-electricBlue mb-10">
      The Duo Behind Kanha Pickles
          </h6>
        <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sudhir Patel Section */}
          <motion.img
            src="/Assets/sudhir.png"
            alt="Sudhir Patel"
            className="rounded-full shadow-lg w-48 h-48 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-electricBlue text-center font-Incite mb-6">
              Sudhirbhai Patel
            </h2>
            <p className="text-lg mb-4 font-Helvatica">
              <strong>Founder & CEO</strong>: A visionary who left his corporate
              job to craft authentic Indian pickles. His dedication to quality
              is the foundation of Kanha Pickles.
            </p>
          </motion.div>

          {/* Shreyash Patel Section */}
          <motion.img
            src="/Assets/shreyash.png"
            alt="Shreyash Patel"
            className="rounded-full shadow-lg w-48 h-48 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-electricBlue font-Incite text-center mb-6">
              Shreyashbhai Patel
            </h2>
            <p className="text-lg md:text-start text-center font-Helvatica">
              <strong>Manufacturing, Quality & Marketing Head</strong>: At just 19 years old, Shreyash Patel has already made significant contributions to the success of Kanha Pickles. His fresh perspective and business acumen have helped the brand grow and thrive in a competitive market.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Mission & Vision Section */}
      <div className="container mx-auto px-5 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-cinzelBlack mb-6 text-center uppercase underline">Our Mission & Vision</h2>
          <h6 className="text-2xl md:text-2xl font-bold font-cinzelBlack px-[6px] text-center md:mb-14 text-electricBlue mb-10">
          Bringing Traditional Flavors to Every Home
          </h6>
          <p className="text-lg leading-relaxed">
          Our mission at Kanha Pickles is to craft pickles that are not only delicious but also a celebration of our heritage. We envision a future where every household can experience the rich, authentic flavors of India through our pickles.
          </p>
        </motion.div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 container mx-auto px-5 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-cinzelBlack mb-6 text-center uppercase underline">Our Values</h2>
          <h6 className="text-2xl md:text-2xl font-bold font-cinzelBlack px-[6px] text-center md:mb-14 text-electricBlue mb-10">
          What We Stand For
          </h6>
          <Values />
        </motion.div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-5 md:px-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-cinzelBlack mb-6 md:mb-0.5 text-center uppercase underline">Customer Testimonials</h2>
          <Testimonials />
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-electricBlue py-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-cinzelBlack font-bold mb-4">
          Join the Kanha Pickles Family
        </h2>
        <p className="text-lg mb-8 font-Helvatica">
          Ready to experience the authentic flavors of Kanha Pickles? Explore
          our range of pickles and bring the taste of tradition to your home
          today.
        </p>
        <button
          onClick={handleButtonClick}
          className="mt-5 bg-sunsetOrange text-white px-5 py-2 mb-1 rounded-lg"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
