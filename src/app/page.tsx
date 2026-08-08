"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCoffee, 
  FaStar, 
  FaArrowRight,
  FaAward,
  FaUsers,
  FaShoppingBag,
  FaHeart,
  FaLeaf,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Featured Products
  const featured = [
    {
      img: "https://i.postimg.cc/z3mJ08S5/delicious-caramel-macchiato-with-whipped-cream-and-coffee-beans-isolated-on-transparent-background-f.webp",
      title: "Caramel Latte",
      desc: "Smooth espresso with rich caramel",
      price: "$5.50",
      badge: "Bestseller"
    },
    {
      img: "https://yourimageshare.com/ib/p2GLjGmaU1.png",
      title: "Chocolate Cake",
      desc: "Rich dark chocolate cake",
      price: "$4.90",
      badge: "New"
    },
    {
      img: "https://yourimageshare.com/ib/3aMRoqwRbw.png",
      title: "Iced Mocha",
      desc: "Refreshing iced chocolate coffee",
      price: "$6.20",
      badge: "Popular"
    }
  ];

  const stats = [
    { number: "12K+", label: "Happy Customers" },
    { number: "50+", label: "Coffee Varieties" },
    { number: "15+", label: "Awards Won" },
    { number: "4", label: "Global Locations" }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      text: "The best coffee experience I've ever had. Every cup is perfection.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      text: "UltraCafe has become my second home. Amazing coffee and atmosphere.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Wilson",
      role: "Food Blogger",
      text: "A true gem in the city. The attention to detail is extraordinary.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <main ref={containerRef} className="bg-black text-white overflow-hidden">
      
      {/* ====== SECTION 1: HERO ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-light">
                  Since 2020
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05]">
                <span className="text-white">Coffee</span>
                <br />
                <span className="font-black bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Perfected
                </span>
              </h1>

              <p className="text-white/40 text-base md:text-lg max-w-md mt-4 leading-relaxed font-light">
                Experience the art of perfectly roasted coffee, crafted with 
                passion and served with elegance.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/menu">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <FaShoppingBag />
                    Order Now
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <FaPlay className="text-amber-400 text-xs" />
                  Watch Story
                </motion.button>
              </div>

              <div className="flex gap-8 mt-10 pt-6 border-t border-white/5">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-xl font-bold text-white">{stat.number}</p>
                    <p className="text-white/20 text-[10px] tracking-wider uppercase font-light">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <FaCoffee className="text-[250px] md:text-[300px] text-amber-400 drop-shadow-[0_0_60px_rgba(251,191,36,0.3)] mx-auto" />
                  
                  {/* Steam */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-5, -40 - i * 10, -5],
                        opacity: [0, 0.2 - i * 0.05, 0],
                        x: [0, (i - 1) * 8, 0]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.8
                      }}
                      className={`absolute text-3xl text-white/10 font-thin`}
                      style={{
                        top: `${-10 - i * 12}%`,
                        left: `${30 + i * 20}%`
                      }}
                    >
                      ﹌
                    </motion.div>
                  ))}
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-0 -right-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="text-lg font-bold text-amber-400">4.9</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-amber-400 text-[8px]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Delivery Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-0 -left-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center">
                      <span className="text-amber-400 text-sm">⚡</span>
                    </div>
                    <div>
                      <p className="text-white/40 text-[8px] tracking-wider uppercase">Delivery</p>
                      <p className="text-white font-medium text-xs">Free</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-white/10 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-4 h-6 border border-white/10 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-0.5 h-1.5 bg-amber-400/50 rounded-full mt-1.5"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== SECTION 2: BRAND STRIP ====== */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-black via-gray-950/90 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: FaAward, text: "Premium Quality" },
              { icon: FaLeaf, text: "Sustainable Sourcing" },
              { icon: FaHeart, text: "Crafted with Love" },
              { icon: FaUsers, text: "Community First" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <Icon className="text-amber-400 text-2xl" />
                  <span className="text-white/40 text-xs tracking-wider uppercase font-light">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: FEATURED PRODUCTS ====== */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-950/90 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">
              Signature Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
              Most <span className="font-black text-amber-400">Loved</span> Items
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-3" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                  {item.badge}
                </div>
                
                <div className="relative h-56 overflow-hidden bg-gradient-to-b from-amber-500/5 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all duration-700" />
                  </div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain p-6 relative z-10 group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                    unoptimized
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/30 text-sm font-light">{item.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span className="text-xl font-bold text-amber-400">{item.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1.5 bg-amber-400/10 text-amber-400 rounded-full text-xs font-medium hover:bg-amber-400 hover:text-black transition-all duration-300"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm flex items-center gap-2 mx-auto"
              >
                View All Menu
                <FaArrowRight className="text-xs" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== SECTION 4: ABOUT PREVIEW ====== */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
                From Bean to <span className="font-black text-amber-400">Cup</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mt-3" />
              <p className="text-white/40 text-base leading-relaxed mt-6 font-light">
                UltraCafe was born from a simple passion: to bring the worlds 
                finest coffee to every cup. We source our beans directly from 
                family-owned farms, ensuring quality and sustainability.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-8 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm flex items-center gap-2"
                >
                  Learn More
                  <FaArrowRight className="text-xs" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center text-8xl text-amber-400/10">
                  ☕
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 5: TESTIMONIALS ====== */}
      <section className="py-24 bg-gradient-to-b from-gray-950/90 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
              What <span className="font-black text-amber-400">Customers</span> Say
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-3" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-amber-400/20 transition-all duration-500"
              >
                <FaQuoteLeft className="text-amber-400/10 text-3xl" />
                <p className="text-white/50 text-sm leading-relaxed mt-2 font-light">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-black font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{review.name}</h4>
                    <p className="text-white/20 text-[10px] tracking-wider uppercase font-light">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: NEWSLETTER ====== */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950/90 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
            Join the <span className="font-black text-amber-400">Club</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto mt-3 font-light">
            Subscribe for exclusive offers, new releases, and 10% off your first order.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 transition-all duration-300 text-sm font-light"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 text-sm"
            >
              Subscribe
            </motion.button>
          </form>
          <p className="text-white/10 text-[10px] tracking-wider mt-3 font-light">
            ✦ No spam, unsubscribe anytime ✦
          </p>
        </motion.div>
      </section>
    </main>
  );
}