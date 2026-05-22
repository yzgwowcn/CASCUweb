import { motion } from 'motion/react';
import { Target, Leaf, Users, Route } from 'lucide-react';

export default function Culture() {
  const values = [
    { icon: <Users size={24} />, title: "团结", subtitle: "UNITY", desc: "并肩作伴，凝聚破风的力量" },
    { icon: <Target size={24} />, title: "挑战", subtitle: "CHALLENGE", desc: "翻越山海，超越自我的极限" },
    { icon: <Leaf size={24} />, title: "绿色", subtitle: "GREEN", desc: "低碳出行，守护身边的自然" },
    { icon: <Route size={24} />, title: "公益", subtitle: "PUBLIC", desc: "修车教学，服务全校的师生" },
  ];

  return (
    <section id="culture" className="py-24 bg-[#F4F4F1] relative border-b border-[#1A1A1A]/10 w-full">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 pb-12 border-b border-[#1A1A1A]/10 gap-10">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-4"
            >
              Our Culture
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6"
            >
              用双轮<br /><span className="text-[#C00000]">丈量青春</span>
            </motion.h2>
          </div>
          <div className="max-w-md">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-serif italic text-[#1A1A1A]/70 leading-relaxed"
            >
              四川大学自行车协会是校团委指导下，2008年成立的体育类学生社团。我们秉持"行万里路，读万卷书"的理念，践行"团结、挑战、绿色、公益"的宗旨，在校园内外推广自行车文化，倡导低碳出行。
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#1A1A1A]/10">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-start p-10 bg-[#F4F4F1] border-b border-r border-[#1A1A1A]/10 hover:bg-[#1A1A1A] hover:text-[#F4F4F1] group transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1A1A]/20 group-hover:border-[#F4F4F1]/30 rounded-full mb-8 text-[#1A1A1A] group-hover:text-[#F4F4F1]">
                {val.icon}
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-1">{val.title}</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-6 group-hover:text-[#F4F4F1]/60">
                {val.subtitle}
              </p>
              <p className="text-sm border-t border-[#1A1A1A]/10 group-hover:border-[#F4F4F1]/20 pt-6 mt-auto opacity-80 group-hover:text-[#F4F4F1]">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
