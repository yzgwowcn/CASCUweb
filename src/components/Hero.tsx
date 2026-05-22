import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center bg-[#F4F4F1] border-b border-[#1A1A1A]/10">
      <div className="relative z-10 px-6 lg:px-12 w-full max-w-[1440px] mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 border border-[#1A1A1A]/20 px-3 py-1 text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold"
        >
          <MapPin size={14} />
          <span>四川大学 · 自2008年</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-[120px] leading-[0.85] font-black tracking-tighter uppercase mb-8 text-[#1A1A1A]"
        >
          四川大学<br />
          <span className="text-[#C00000]">自行车协会</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A]/70 max-w-xl mb-12"
        >
          “行万里路 · 读万卷书”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#culture"
            className="px-10 py-5 bg-[#1A1A1A] text-[#F4F4F1] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C00000] transition-colors text-center"
          >
            了解车协 EXPLORE
          </a>
          <a
            href="#register"
            className="px-10 py-5 border border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-all text-center"
          >
            报名活动 SIGNUP
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-12 flex flex-col items-start animate-pulse text-[#1A1A1A]/50"
      >
        <span className="text-[10px] tracking-widest mb-2 uppercase font-bold">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
