"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  FaAward,
  FaUsers,
  FaCoffee,
  FaLeaf,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaClock,
  FaTrophy,
  FaGlobe,
  FaRocket
} from "react-icons/fa";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Team members
  const teamMembers = [
    {
      name: "James Anderson",
      role: "Master Roaster",
      bio: "20+ years of coffee roasting expertise",
      image: "https://yourimageshare.com/ib/team1.jpg",
      social: "https://instagram.com"
    },
    {
      name: "Maria Rodriguez",
      role: "Head Barista",
      bio: "World Barista Championship finalist",
      image: "https://yourimageshare.com/ib/team2.jpg",
      social: "https://instagram.com"
    },
    {
      name: "David Kim",
      role: "Sourcing Director",
      bio: "Direct trade with 15+ coffee farms",
      image: "https://yourimageshare.com/ib/team3.jpg",
      social: "https://instagram.com"
    },
    {
      name: "Sarah Williams",
      role: "Pastry Chef",
      bio: "Michelin-trained dessert specialist",
      image: "https://yourimageshare.com/ib/team4.jpg",
      social: "https://instagram.com"
    }
  ];

  // Milestones
  const milestones = [
    {
      year: "2020",
      title: "Our Journey Begins",
      desc: "UltraCafe opened its first location in Milan, Italy",
      icon: FaCoffee
    },
    {
      year: "2021",
      title: "Direct Trade Program",
      desc: "Established partnerships with farmers in Ethiopia and Colombia",
      icon: FaLeaf
    },
    {
      year: "2022",
      title: "Award Recognition",
      desc: "Won 'Best Coffee Roaster' award at European Coffee Summit",
      icon: FaAward
    },
    {
      year: "2023",
      title: "Global Expansion",
      desc: "Opened locations in London, Tokyo, and New York",
      icon: FaGlobe
    }
  ];

  // Stats
  const stats = [
    { number: "10+", label: "Years of Excellence", icon: FaClock },
    { number: "50+", label: "Coffee Varieties", icon: FaCoffee },
    { number: "15+", label: "Direct Trade Farms", icon: FaLeaf },
    { number: "12K+", label: "Happy Customers", icon: FaUsers },
    { number: "8", label: "Awards Won", icon: FaTrophy },
    { number: "4", label: "Global Locations", icon: FaGlobe }
  ];

  // Values
  const values = [
    {
      title: "Quality First",
      desc: "We never compromise on quality, from bean to cup",
      icon: FaStar,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Sustainability",
      desc: "Committed to ethical sourcing and environmental responsibility",
      icon: FaLeaf,
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      title: "Community",
      desc: "Building lasting relationships with farmers and customers",
      icon: FaHeart,
      color: "from-rose-500/20 to-pink-500/20"
    },
    {
      title: "Innovation",
      desc: "Constantly pushing boundaries in coffee craftsmanship",
      icon: FaRocket,
      color: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* ====== HERO SECTION ====== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Decorative coffee beans */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  rotate: `${Math.random() * 360}deg`
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
              >
                ☕
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
              About Us
            </span>
            <h1 className="text-6xl md:text-8xl font-thin text-white mt-4">
              Our <span className="font-bold text-amber-400">Story</span>
            </h1>
            <div className="w-20 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-4" />
            <p className="text-white/50 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              From a small roastery in Milan to a global coffee brand,
              weve been perfecting the art of coffee since 2020.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
              Discover
            </span>
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-amber-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-3xl font-bold text-white mt-3 group-hover:text-amber-400 transition-colors">
                    {stat.number}
                  </p>
                  <p className="text-white/30 text-xs tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== OUR STORY ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-thin text-white mt-3">
                From Bean to <span className="font-bold text-amber-400">Cup</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mt-4" />
              
              <div className="space-y-6 mt-8">
                <p className="text-white/50 text-lg leading-relaxed">
                  UltraCafe was born from a simple passion: to bring the worlds 
                  finest coffee to every cup. Our journey began in Milan, Italy, 
                  where we discovered the art of traditional roasting.
                </p>
                <p className="text-white/40 text-base leading-relaxed">
                  Today, we source our beans directly from family-owned farms 
                  in Ethiopia, Colombia, and Costa Rica. Every batch is carefully 
                  roasted to perfection, ensuring an unforgettable coffee experience.
                </p>
                <p className="text-white/30 text-base leading-relaxed">
                  Our commitment to quality extends beyond coffee. We believe in 
                  creating spaces where people connect, ideas flourish, and 
                  moments become memories.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3"
              >
                Visit Our Cafe
                <FaArrowRight className="text-sm" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20">
                <div className="relative h-[400px] lg:h-[500px] bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-9xl text-amber-400/10">
                    ☕
                  </div>
                  <Image
                    src="https://yourimageshare.com/ib/about-image.jpg"
                    alt="About UltraCafe"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                      <FaAward className="text-amber-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Winner of</p>
                      <p className="text-white font-medium text-sm">Best Coffee Roaster 2022</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== MILESTONES ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
              Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-thin text-white mt-3">
              Our <span className="font-bold text-amber-400">Milestones</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-amber-400/30 transition-all duration-500"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="mt-4">
                    <span className="text-amber-400 text-sm font-mono">{milestone.year}</span>
                    <h3 className="text-lg font-medium text-white mt-1">{milestone.title}</h3>
                    <p className="text-white/40 text-sm mt-1">{milestone.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== OUR VALUES ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-thin text-white mt-3">
              Our <span className="font-bold text-amber-400">Values</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-4" />
            <p className="text-white/40 text-lg max-w-2xl mx-auto mt-4">
              These principles guide everything we do, from sourcing to serving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${value.color} border border-white/5 text-center group`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 group-hover:bg-amber-400/20 transition-all duration-300">
                    <Icon className="text-3xl text-amber-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mt-4">{value.title}</h3>
                  <p className="text-white/40 text-sm mt-2 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== TEAM SECTION ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-thin text-white mt-3">
              Meet the <span className="font-bold text-amber-400">Experts</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-amber-400/10">
                    ☕
                  </div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-amber-400 text-sm">{member.role}</p>
                  <p className="text-white/30 text-xs mt-1">{member.bio}</p>
                  <motion.a
                    href={member.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="inline-block mt-3 text-amber-400/60 hover:text-amber-400 transition-colors"
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-6xl font-thin text-white mt-3">
            Experience the <span className="font-bold text-amber-400">Ultra</span> Difference
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mt-4 mb-10">
            Come visit our cafe and taste the passion in every cup.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3"
              >
                View Our Menu
                <FaArrowRight />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Find Our Store
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}