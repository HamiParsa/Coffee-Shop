"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCoffee, FaHome, FaSmile } from "react-icons/fa";
// set color web
const primaryColor = "#4F83CC"; 
const secondaryColor = "#4F83CC"; 
const lightBg = "#F8F8FF"; 

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/coffee-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-6"
        >
          <h1 className="text-7xl font-extrabold mb-6 text-white">Cafe Aroma</h1>
          <p className="text-2xl mb-8 text-gray-200">
            Brewed to Perfection, Served with Love
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/menu"
              className={`px-8 py-3 bg-[${primaryColor}] text-white rounded-full shadow-lg hover:opacity-90 transition`}
              style={{ backgroundColor: primaryColor }}
            >
              Explore Menu
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Items */}
      <section id="menu" className="py-20" style={{ backgroundColor: lightBg }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>
          Customer Favorites
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { img: "/latte.jpg", title: "Caramel Latte", desc: "Smooth espresso with caramel flavor" },
            { img: "/cake.png", title: "Chocolate Cake", desc: "Rich and moist dark chocolate cake" },
            { img: "/mocha.png", title: "Iced Mocha", desc: "Refreshing iced espresso with chocolate" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center flex-col items-center"
            >
              <Image width={1000} height={1000} src={item.img} alt={item.title} className="w-fit h-56"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>
          Why Choose Cafe Aroma?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <FaCoffee className="text-5xl mx-auto" style={{ color: secondaryColor }} />
            <h3 className="text-xl font-semibold mt-4">Fresh Coffee</h3>
            <p className="text-gray-600 mt-2">
              We serve only the finest, freshly brewed coffee.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <FaHome className="text-5xl mx-auto" style={{ color: secondaryColor }} />
            <h3 className="text-xl font-semibold mt-4">Cozy Atmosphere</h3>
            <p className="text-gray-600 mt-2">
              A perfect place to relax and enjoy your day.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <FaSmile className="text-5xl mx-auto" style={{ color: secondaryColor }} />
            <h3 className="text-xl font-semibold mt-4">Friendly Staff</h3>
            <p className="text-gray-600 mt-2">
              Our team is here to make you feel at home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: lightBg }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { name: "Emily", text: "Best coffee in town! Cozy place and friendly staff." },
            { name: "Michael", text: "Absolutely love the caramel latte. Highly recommended!" },
            { name: "Sophia", text: "Great atmosphere for working and hanging out with friends." },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <p className="italic text-gray-700 mb-4">“{review.text}”</p>
              <h4 className="font-semibold" style={{ color: primaryColor }}>
                - {review.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: primaryColor }}>
          Join Our Coffee Club
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to get exclusive offers and 10% off your first order!
        </p>
        <form className="flex justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2"
            style={{ borderColor: primaryColor }}
          />
          <button
            type="submit"
            className="px-6 py-3 text-white rounded-full shadow-lg hover:opacity-90 transition"
            style={{ backgroundColor: primaryColor }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
);
}
