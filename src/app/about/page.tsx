"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const mainBlue = "#4F83CC";

  return (
    <main className="min-h-screen bg-[#F7F7F7] py-20 px-6">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4" style={{ color: mainBlue }}>
          About UltraCafe
        </h1>
        <p className="text-gray-700 text-lg">
          At UltraCafe, we serve more than just coffee — we create experiences. Cozy atmosphere, premium ingredients, and a touch of love in every cup.
        </p>
      </section>

      {/* History / Story */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4" style={{ color: mainBlue }}>Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, UltraCafe has quickly become a favorite spot for coffee lovers. Our mission is to combine the finest coffee beans with a warm and welcoming environment. Each cup is crafted with care and passion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative  md:h-80 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://yourimageshare.com/ib/Is6k1b7t8U.png"
            alt="Cafe Interior"
            fill
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2" style={{ color: mainBlue }}>Premium Coffee</h3>
          <p className="text-gray-700">We source the finest beans from around the world to create unforgettable flavors.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2" style={{ color: mainBlue }}>Cozy Ambiance</h3>
          <p className="text-gray-700">A warm, relaxing environment perfect for catching up with friends or working on your projects.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2" style={{ color: mainBlue }}>Delicious Desserts</h3>
          <p className="text-gray-700">From creamy cheesecakes to rich brownies, our desserts are the perfect treat alongside your coffee.</p>
        </motion.div>
      </section>
    </main>
  );
}
