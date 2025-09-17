"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCoffee, FaIceCream, FaBreadSlice, FaGlassMartiniAlt, FaList, FaSearch } from "react-icons/fa";

type MenuItem = {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  img: string;
};

const menuItems: MenuItem[] = [
  { id: 1, category: "Coffee", name: "Espresso", desc: "Strong and bold shot of coffee", price: "$3", img: "https://yourimageshare.com/ib/Qk6pCWIGSW.png" },
  { id: 2, category: "Coffee", name: "Cappuccino", desc: "Espresso with steamed milk & foam", price: "$4.5", img: "https://yourimageshare.com/ib/0T6z3yneh2.png" },
  { id: 3, category: "Desserts", name: "Cheesecake", desc: "Classic creamy cheesecake", price: "$5", img: "https://yourimageshare.com/ib/A09hTezKm9.png" },
  { id: 4, category: "Desserts", name: "Brownie", desc: "Rich chocolate brownie", price: "$4", img: "https://yourimageshare.com/ib/88rTEOdZk8.png" },
  { id: 5, category: "Sandwiches", name: "Club Sandwich", desc: "Triple layered sandwich with chicken", price: "$7", img: "https://yourimageshare.com/ib/hc4B7TjATk.png" },
  { id: 6, category: "Drinks", name: "Lemonade", desc: "Refreshing fresh lemonade", price: "$3.5", img: "https://yourimageshare.com/ib/z146Y19uXG.png" },
];

const categories = [
  { name: "All", icon: <FaList className="inline mb-1" /> },
  { name: "Coffee", icon: <FaCoffee className="inline mb-1" /> },
  { name: "Desserts", icon: <FaIceCream className="inline mb-1" /> },
  { name: "Sandwiches", icon: <FaBreadSlice className="inline mb-1" /> },
  { name: "Drinks", icon: <FaGlassMartiniAlt className="inline mb-1" /> },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = menuItems
    .filter(item => selectedCategory === "All" || item.category === selectedCategory)
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const mainBlue = "#4F83CC";

  return (
    <main className="min-h-screen bg-[#F7F7F7] py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12" style={{ color: mainBlue }}>Our Menu</h1>

      {/* Categories + Search */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 items-center">
        <div className="flex gap-4 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-6 py-2 rounded-full transition`}
              style={{
                backgroundColor: selectedCategory === cat.name ? mainBlue : "white",
                color: selectedCategory === cat.name ? "white" : mainBlue,
                border: `2px solid ${mainBlue}`,
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
        <div className="relative mt-4 md:mt-0">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-full border text-black focus:outline-none"
            style={{ borderColor: mainBlue, boxShadow: `0 0 0 2px ${mainBlue}20` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative flex justify-center overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={item.img}
                  alt={item.name}
                  className="w-[200px] h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: mainBlue }}>{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold" style={{ color: mainBlue }}>{item.price}</span>
                  <button className="px-4 py-2 text-white rounded-full transition" style={{ backgroundColor: mainBlue }}>
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
