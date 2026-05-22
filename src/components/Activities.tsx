import { motion } from 'motion/react';
import { Map, Flag, Wrench, Calendar, Trophy, ArrowRight } from 'lucide-react';

export default function Activities() {
  const activityData = [
    {
      title: "周末短途骑游",
      subtitle: "WEEKEND RIDES",
      desc: "每周组织成都周边精品路线。龙泉山看日出，黄龙溪戏水，街子古镇寻味——车轮碾过天府沃野。",
      icon: <Map className="w-8 h-8 text-[#1A1A1A]" />
    },
    {
      title: "节假日长途远征",
      subtitle: "HOLIDAY TOURS",
      desc: "清明、五一、国庆策划3-7天骑游。挑战蒲虹路，环骑龙泉山脉，用车轮丈量巴山蜀水。",
      icon: <Flag className="w-8 h-8 text-[#1A1A1A]" />
    },
    {
      title: "教学与公益",
      subtitle: "PUBLIC SERVICE",
      desc: "连续多年开展校园公益修车，免费为全校师生检修排坑。零基础修车培训，教你做自己的机械师。",
      icon: <Wrench className="w-8 h-8 text-[#1A1A1A]" />
    }
  ];

  const highlights = [
    { label: "活动年历", subtitle: "CALENDAR", icon: <Calendar className="w-5 h-5"/>, desc: "春季活动正在进行中" },
    { label: "车协历史", subtitle: "HISTORY", icon: <Flag className="w-5 h-5"/>, desc: "十余年风雨骑行录" },
    { label: "车协杯", subtitle: "CHAMPIONSHIP", icon: <Trophy className="w-5 h-5"/>, desc: "品牌高校自行车联赛" },
  ];

  return (
    <section id="activities" className="py-24 bg-white border-b border-[#1A1A1A]/10 w-full relative">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tighter"
            >
              社团特色活动<br /><span className="text-[#C00000]">FEATURES</span>
            </motion.h2>
            <p className="text-xl font-serif italic text-[#1A1A1A]/70 max-w-lg mb-8">
              从入门骑游到高阶挑战，从机械原理到公益服务，在这里，自行车不只是交通工具，更是一种生活方式。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-0 border-t border-l border-[#1A1A1A]/10 bg-[#F4F4F1]">
            {highlights.map((item, i) => (
              <div key={i} className="flex flex-col items-start p-6 border-b border-r border-[#1A1A1A]/10 w-full sm:w-48 cursor-pointer hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors group">
                <div className="text-[#1A1A1A] mb-4 group-hover:text-[#C00000] transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-4 group-hover:opacity-80">{item.subtitle}</p>
                <div className="flex items-end justify-between w-full mt-auto">
                  <p className="text-xs opacity-70 group-hover:opacity-100 max-w-[100px] leading-tight">{item.desc}</p>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/30 group-hover:text-[#F4F4F1] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activityData.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="border border-[#1A1A1A]/10 p-10 bg-[#F4F4F1] hover:bg-[#C00000] hover:text-white group transition-colors duration-500 relative flex flex-col"
            >
              <div className="mb-12 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity">
                {act.icon}
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-2">{act.title}</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-6 group-hover:opacity-80 group-hover:text-white">
                {act.subtitle}
              </p>
              <div className="w-8 h-[1px] bg-[#1A1A1A]/20 group-hover:bg-white/40 mb-6"></div>
              <p className="text-lg leading-relaxed opacity-80 group-hover:opacity-100">
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
