"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCoffee, 
  FaIceCream, 
  FaBreadSlice, 
  FaGlassMartiniAlt, 
  FaList, 
  FaSearch,
  FaStar,
  FaClock,
  FaFire,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

type MenuItem = {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  img: string;
  popular?: boolean;
  prepTime?: string;
  rating?: number;
  tag?: string;
};

const menuItems: MenuItem[] = [
  { 
    id: 1, 
    category: "Coffee", 
    name: "Espresso", 
    desc: "Strong and bold single-origin espresso", 
    price: "$3.00", 
    img: "https://yourimageshare.com/ib/Qk6pCWIGSW.png",
    popular: true,
    prepTime: "3 min",
    rating: 4.8,
    tag: "Classic"
  },
  { 
    id: 2, 
    category: "Coffee", 
    name: "Cappuccino", 
    desc: "Espresso with steamed milk & perfect foam", 
    price: "$4.50", 
    img: "https://yourimageshare.com/ib/0T6z3yneh2.png",
    popular: true,
    prepTime: "4 min",
    rating: 4.9,
    tag: "Signature"
  },
  { 
    id: 3, 
    category: "Desserts", 
    name: "Cheesecake", 
    desc: "Classic creamy New York cheesecake", 
    price: "$5.00", 
    img: "https://yourimageshare.com/ib/A09hTezKm9.png",
    popular: false,
    prepTime: "5 min",
    rating: 4.7,
    tag: "Sweet"
  },
  { 
    id: 4, 
    category: "Desserts", 
    name: "Brownie", 
    desc: "Rich dark chocolate brownie with nuts", 
    price: "$4.00", 
    img: "https://yourimageshare.com/ib/88rTEOdZk8.png",
    popular: true,
    prepTime: "3 min",
    rating: 4.8,
    tag: "Popular"
  },
  { 
    id: 5, 
    category: "Sandwiches", 
    name: "Club Sandwich", 
    desc: "Triple layered sandwich with grilled chicken", 
    price: "$7.00", 
    img: "https://yourimageshare.com/ib/hc4B7TjATk.png",
    popular: false,
    prepTime: "8 min",
    rating: 4.6,
    tag: "Hearty"
  },
  { 
    id: 6, 
    category: "Drinks", 
    name: "Lemonade", 
    desc: "Refreshing fresh squeezed lemonade", 
    price: "$3.50", 
    img: "https://yourimageshare.com/ib/z146Y19uXG.png",
    popular: false,
    prepTime: "2 min",
    rating: 4.5,
    tag: "Cool"
  },
];

const categories = [
  { name: "All", icon: FaList, color: "from-amber-500 to-orange-500" },
  { name: "Coffee", icon: FaCoffee, color: "from-amber-500 to-orange-500" },
  { name: "Desserts", icon: FaIceCream, color: "from-pink-500 to-rose-500" },
  { name: "Sandwiches", icon: FaBreadSlice, color: "from-emerald-500 to-teal-500" },
  { name: "Drinks", icon: FaGlassMartiniAlt, color: "from-blue-500 to-cyan-500" },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems
      .filter(item => selectedCategory === "All" || item.category === selectedCategory)
      .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ====== HEADER SECTION ====== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-light">
              Our Collection
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white">
            Premium <span className="font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Menu</span>
          </h1>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-amber-400 via-orange-400 to-transparent mx-auto mt-4" />
          
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
            Discover our carefully curated selection of premium coffees, 
            delicious desserts, and fresh sandwiches.
          </p>
        </motion.div>

        {/* ====== FILTERS & SEARCH ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <motion.button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-xs font-medium tracking-wider uppercase ${
                    isActive
                      ? `bg-gradient-to-r ${cat.color} text-black shadow-lg`
                      : "bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20"
                  }`}
                >
                  <Icon className={`text-sm ${isActive ? "text-black" : "text-white/30"}`} />
                  {cat.name}
                </motion.button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 text-sm" />
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 transition-all duration-300 text-sm font-light"
            />
          </div>
        </motion.div>

        {/* ====== RESULTS COUNT ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-white/20 text-sm mb-8"
        >
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span>{filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} available</span>
        </motion.div>

        {/* ====== MENU GRID ====== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative bg-white/3 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all duration-700"
              >
                {/* Tags */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {item.tag && (
                    <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-white/40 text-[8px] px-2.5 py-1 rounded-full tracking-wider uppercase font-light">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[8px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-amber-500/30 tracking-wider uppercase">
                    <FaFire className="text-[10px]" />
                    Popular
                  </div>
                )}

                {/* Image - Optimized for PNG */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-amber-500/5 via-amber-400/5 to-transparent">
                  {/* Glow behind PNG */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-56 h-56 rounded-full blur-3xl transition-all duration-700 ${
                      hoveredItem === item.id 
                        ? "bg-amber-400/30 scale-110" 
                        : "bg-amber-400/10"
                    }`} />
                  </div>
                  
                  <Image
                    width={500}
                    height={500}
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain p-8 relative z-10 transition-transform duration-700 drop-shadow-2xl"
                    style={{
                      transform: hoveredItem === item.id ? "scale(1.08)" : "scale(1)",
                    }}
                    unoptimized
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  
                  {/* Quick Order Overlay - Appears on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-20"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full shadow-2xl shadow-amber-500/30 flex items-center gap-2 text-sm tracking-wider"
                    >
                      <FaShoppingBag className="text-sm" />
                      Quick Order
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-white/30 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      {item.rating && (
                        <div className="flex items-center gap-1 text-white/30 text-xs">
                          <FaStar className="text-amber-400 text-sm" />
                          <span className="text-white/60 font-medium">{item.rating}</span>
                        </div>
                      )}
                      {item.prepTime && (
                        <div className="flex items-center gap-1.5 text-white/20 text-xs">
                          <FaClock className="text-[10px]" />
                          <span className="font-light">{item.prepTime}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-amber-400 tracking-tight">
                        {item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#F59E0B", color: "#000" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all duration-300 border border-amber-400/20 hover:border-transparent"
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ====== EMPTY STATE ====== */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-7xl mb-4 opacity-20">☕</div>
            <h3 className="text-2xl font-light text-white/30">No items found</h3>
            <p className="text-white/10 text-sm mt-2 font-light">
              Try adjusting your search or category filter
            </p>
          </motion.div>
        )}

        {/* ====== SPECIAL OFFER BANNER ====== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border border-white/5 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-3">
                <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-[10px] tracking-[0.2em] uppercase font-light">
                  Special Offer
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-white">
                Get 10% Off <span className="font-black text-amber-400">Your First Order</span>
              </h3>
              <p className="text-white/30 text-sm mt-1 font-light">
                Use code <span className="text-amber-400 font-mono font-bold tracking-wider">ULTRA10</span> at checkout
              </p>
            </div>
            <Link href="/order">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3 whitespace-nowrap text-sm tracking-wider"
              >
                <FaShoppingBag className="text-sm" />
                Order Now
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}