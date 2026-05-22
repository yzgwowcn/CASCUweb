import { motion } from 'motion/react';
import { Flag } from 'lucide-react';

export default function History() {
  return (
    <main className="flex-1 w-full bg-[#F4F4F1] min-h-[80vh] flex flex-col items-center justify-center border-t border-[#1A1A1A]/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-6"
      >
        <Flag className="w-20 h-20 mx-auto text-[#1A1A1A]/20 mb-8" />
        <p className="text-[10px] uppercase font-bold tracking-widest text-[#C00000] mb-4">EST. 2008</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-[#1A1A1A]">
          十余年<br />
          <span className="text-[#1A1A1A]/30">风雨骑行录</span>
        </h1>
        <div className="w-16 h-1 bg-[#1A1A1A] mx-auto mb-8" />
        <p className="text-xl font-serif italic text-[#1A1A1A]/60 max-w-lg mx-auto">
          "一部车轮丈量大地的纪实册。我们还在不断地增加新的注脚。"
        </p>
        <p className="mt-12 text-sm uppercase tracking-widest font-bold text-[#1A1A1A]/40 border border-[#1A1A1A]/10 inline-block px-6 py-3 bg-white">
          PAGE UNDER CONSTRUCTION
        </p>
      </motion.div>
    </main>
  );
}
