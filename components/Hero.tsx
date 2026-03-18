"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center bg-[url('/gym-bg.jpg')] bg-cover bg-center overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[2px] w-8 bg-[#d4a017]"></span>
          <p className="text-[#d4a017] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
            Premium Fitness Destination
          </p>
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter"
        >
          Push Your <br /> 
          <span className="text-[#d4a017]">Limits</span> <br /> 
          Today
        </motion.h1>

        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-gray-300 max-w-lg text-sm md:text-base leading-relaxed font-medium"
        >
          Experience the ultimate premium fitness destination with <br className="hidden md:block" />
          world-class equipment and expert guidance from certified elite coaches.
        </motion.p>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <button className="bg-[#d4a017] text-black px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#b88a14] transition-all duration-300 active:scale-95">
            Start Free Trial
          </button>
          <button className="bg-white/5 backdrop-blur-sm text-white px-10 py-4 font-black uppercase text-xs tracking-widest border border-white/20 hover:bg-white/10 transition-all duration-300 active:scale-95">
            View Classes
          </button>
        </motion.div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}