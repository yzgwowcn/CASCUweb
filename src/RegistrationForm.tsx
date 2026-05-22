import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, CheckCircle2, Trophy } from 'lucide-react';
import { events } from '../data/events';

export default function RegistrationForm() {
  const openEvents = events.filter(e => e.status !== 'closed');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    campus: '望江',
    event: openEvents[0]?.id || '',
    hasBike: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 bg-[#F4F4F1] flex items-center justify-center border-b border-[#1A1A1A]/10 min-h-[600px] w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 border border-[#1A1A1A] text-center max-w-md w-full mx-4 shadow-2xl shadow-black/5"
        >
          <CheckCircle2 className="w-16 h-16 text-[#C00000] mx-auto mb-6" />
          <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tighter">报名成功</h3>
          <p className="text-[#1A1A1A]/70 mb-8 text-sm">
            车协干事将尽快与您联系，请保持手机畅通并留意短信通知。期待与你在赛道与山野相见。
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-4 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F4F4F1] hover:bg-[#F4F4F1] hover:text-[#1A1A1A] font-bold text-xs uppercase tracking-widest transition-all"
          >
            返回列表 BACK
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-[#F4F4F1] border-b border-[#1A1A1A]/10 w-full relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6">赛事及活动报名<br/><span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>REGISTRATION</span></h2>
              <div className="w-12 h-1 bg-[#C00000] mb-8" />
              <p className="text-lg font-serif italic text-[#1A1A1A]/70 leading-relaxed mb-6 max-w-md">
                "车协杯"是四川大学自行车协会年度旗舰赛事，汇聚全校骑行爱好者，以速度、技巧与团队协作展开角逐。第十届车协杯将首次落地成都天府国际赛道。
              </p>
              <p className="text-sm font-serif italic text-[#1A1A1A]/50 leading-relaxed mb-10 max-w-md">
                同时包含平时的周边拉练、公益活动及休闲骑行。挑选心仪的近期赛事与活动，提交您的参与意向！
              </p>

              <div className="space-y-0 border-t border-[#1A1A1A]/10">
                {events.map((evt) => (
                  <div key={evt.id} className="py-6 border-b border-[#1A1A1A]/10 flex items-start gap-4 hover:bg-white transition-colors px-4 group">
                    <div className={`${evt.type === 'cup' ? 'text-[#C00000]' : 'text-[#1A1A1A] group-hover:text-[#C00000]'} transition-colors`}>
                      {evt.type === 'cup' ? <Trophy className="w-6 h-6" /> : (evt.type === 'ride' ? <MapPin className="w-6 h-6" /> : <CalendarIcon className="w-6 h-6" />)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">{evt.title}</h4>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50">
                        {evt.time} 
                        {evt.difficulty ? ` · DIFFICULTY: ${evt.difficulty}` : ''}
                        {evt.location ? ` · LOCATION: ${evt.location}` : ''}
                        {evt.status === 'upcoming' ? ' [即将开放]' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-12 border border-[#1A1A1A] shadow-2xl shadow-black/5 relative"
          >
            <div className="absolute top-0 right-0 bg-[#C00000] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
              FORM
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2">选择参与活动 Event</label>
                <select 
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-[#F4F4F1] border border-[#1A1A1A]/20 focus:border-[#C00000] focus:ring-0 rounded-none focus:outline-none transition-colors appearance-none"
                >
                  {openEvents.map(evt => (
                    <option key={evt.id} value={evt.id} disabled={evt.status === 'upcoming'}>
                      {evt.title} {evt.status === 'upcoming' ? '(即将开始)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2">姓名 Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-[#F4F4F1] border border-[#1A1A1A]/20 focus:border-[#C00000] focus:ring-0 rounded-none focus:outline-none transition-colors"
                    placeholder="输入姓名"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2">联系电话 Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-[#F4F4F1] border border-[#1A1A1A]/20 focus:border-[#C00000] focus:ring-0 rounded-none focus:outline-none transition-colors"
                    placeholder="联系方式"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2">所在校区 Campus</label>
                  <select 
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-[#F4F4F1] border border-[#1A1A1A]/20 focus:border-[#C00000] focus:ring-0 rounded-none focus:outline-none transition-colors appearance-none"
                  >
                    <option value="望江">望江校区</option>
                    <option value="江安">江安校区</option>
                    <option value="华西">华西校区</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2">是否自备车辆 Bike</label>
                  <select 
                    name="hasBike"
                    value={formData.hasBike}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-[#F4F4F1] border border-[#1A1A1A]/20 focus:border-[#C00000] focus:ring-0 rounded-none focus:outline-none transition-colors appearance-none"
                  >
                    <option value="yes">是（公路/山地/折叠）</option>
                    <option value="no">否（需租赁）</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-6 py-5 bg-[#C00000] hover:bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all"
              >
                提交报名信息 SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
