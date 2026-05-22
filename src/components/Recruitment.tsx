import { motion } from 'motion/react';
import { Send, Bike, HeartHandshake } from 'lucide-react';

export default function Recruitment() {
  return (
    <section id="recruitment" className="py-24 bg-[#1A1A1A] text-white border-b border-[#1A1A1A]/10 w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-4 border border-white/20 inline-block px-3 py-1 w-max"
            >
              Status: Open
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
            >
              秋季招新计划<br/>
              <span className="text-[#C00000]">JOIN THE SQUAD</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 mb-12 max-w-lg leading-relaxed font-serif italic"
            >
              无论你是硬尾山地党、破风公路控，还是单纯向往远方的“萌新”，四川大学学生自行车协会始终为你留有一个车位。专业技师指导、周末短途骑行、长途寒暑假远征。
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-0"
            >
              <div className="p-8 border border-white/20 flex-1 hover:bg-white/5 transition-colors">
                <Bike className="w-8 h-8 text-[#C00000] mb-6" />
                <h3 className="text-xl font-bold mb-2">百团大战现场</h3>
                <p className="text-white/50 text-sm leading-relaxed">关注秋季开学招新活动，现场体验修车与器材区，登记入会。</p>
              </div>
              <div className="p-8 border border-white/20 flex-1 hover:bg-white/5 transition-colors">
                <Send className="w-8 h-8 text-white/80 mb-6" />
                <h3 className="text-xl font-bold mb-2">微信公众号</h3>
                <p className="text-white/50 text-sm leading-relaxed">搜索关注【川大车协】，获取最新活动资讯与线上报名入口。</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#C00000] p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <HeartHandshake className="w-12 h-12 text-white/60 mb-8" />
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-80">Join Now</p>
              <h3 className="text-4xl font-black mb-4 tracking-tighter">随时欢迎你的加入</h3>
              <p className="text-white/80 mb-8 max-w-sm">无条件热爱，无边界探索的大家庭等你来报到。</p>
            </div>
            
            <div className="border border-white p-6 flex items-center justify-between mt-auto">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Official Account</p>
                <p className="font-bold text-xl tracking-widest">川大车协</p>
              </div>
              <button className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all border border-[#1A1A1A]">
                立刻关注
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
