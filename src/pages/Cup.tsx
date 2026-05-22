import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, FileText, Settings, ShieldAlert, X } from 'lucide-react';

export default function Cup() {
  const [selectedDoc, setSelectedDoc] = useState<typeof cupDocs[0] | null>(null);

  const cupDocs = [
    {
      tag: "赛事资料", title: "报名须知",
      content: "选手报名须知全文，含比赛时间与地点、组别设置、报名资格认定、报名流程、选手物资清单及退赛政策等关键信息阅读。",
      meta: "比赛时间：2026年6月5日 | 报名：5月20日-27日"
    },
    {
      tag: "赛事资料", title: "报名方法",
      content: "在线报名系统操作指南，含报名步骤图文教程、信息填写规范及常见问题解答。首次参赛选手必读。",
      meta: "报名时间：5月20日-27日 | 报名系统使用说明"
    },
    {
      tag: "赛事资料", title: "赛道视频",
      content: "成都天府国际赛道绕圈赛探路视频，包含第一视角全程、无人机航拍赛道全貌及关键弯道解析，助你提前规划配速。",
      meta: "4K/60fps | B站/视频号官方发布"
    },
    {
      tag: "参赛服务", title: "食宿交通指南",
      content: "赛场周边酒店推荐与协议价格、比赛日餐饮安排、成都市区至天府国际赛道公共交通及自驾路线导航指引。",
      meta: "赛场地址：成都市天府新区·天府国际赛道"
    },
    {
      tag: "参赛服务", title: "拼车指南",
      content: "各城市出发拼车信息汇总，含高铁+地铁+接驳方案、自行车运输方式及现场技师组装服务网点分布预告。",
      meta: "联系人：黄浩然 | 微信号：elcaro3221"
    },
    {
      tag: "安全保障", title: "免责声明",
      content: "参赛选手须签署的免责声明与参赛声明文件，含赛道风险告知、安全责任条款及赛事保险理赔相关须知。",
      meta: "报到时签署 | 未签署不得参赛"
    },
    {
      tag: "赛事资料", title: "赛事手册",
      content: "第九届/第十届川大车协杯完整赛事手册，含竞赛规程、赛道图、日程安排、器材标准与赛事仲裁条例规章汇编。",
      meta: "电子版赛前邮件发送 | 纸质版报到领取"
    },
    {
      tag: "参赛服务", title: "选手名单",
      content: "各项目参赛选手名单及号码牌分配查询，含参赛院校统计。赛前一周公布初版，赛前三天公布最终锁定名单。",
      meta: "名单公布：赛前7天 | 最终锁定：赛前3天"
    },
    {
      tag: "参赛服务", title: "比赛奖品",
      content: "精英组各组别冠亚季军颁发奖杯+奖牌+证书，4-10名获CASCU车协品牌十周年纪念周边大礼包一份。",
      meta: "精英组报名费 130元/人 | 大众组 115元/人"
    },
    {
      tag: "安全保障", title: "综合应急方案",
      content: "针对暴雨、大风、高温等极端天气的应急预案，含赛事中断、人员疏散、备用日期及临时庇护所等安保政策说明。",
      meta: "赛事中心 | 组委会备案"
    },
    {
      tag: "安全保障", title: "医疗救援方案",
      content: "赛道沿线医疗站点部署、120急救车值守、摩托车急救巡逻及常见骑行伤情况初步处理操作要求及医院转运路线。",
      meta: "现场急救响应时间 < 2分钟"
    }
  ];

  return (
    <main className="flex-1 w-full bg-[#F4F4F1] min-h-screen relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="mb-16 border-b border-[#1A1A1A]/10 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#C00000] mb-4">CASCU CHAMPIONSHIP</p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-[#1A1A1A] leading-[0.85]">
              车协杯<br />
              <span className="text-[#1A1A1A]/20">CUP TIER</span>
            </h1>
            <p className="text-2xl font-serif italic text-[#1A1A1A]/70 mb-8 font-bold">
              川大骑友 · 终极狂欢
            </p>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/80 mb-6">
              车协杯是四川大学自行车协会年度旗舰赛事，汇聚全校及西南高校骑行爱好者，以速度、技巧与团队协作展开角逐。
            </p>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
              第十届车协杯将首次落地<span className="font-bold border-b border-[#C00000]">成都天府国际赛道</span>，在专业级赛道上为参赛者带来前所未有的竞速体验。作为"四川大学十佳学生社团"的标志性品牌活动，车协杯已成为校园体育文化中不可或缺的一部分。
            </p>
          </motion.div>
        </div>

        <div>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter">赛事档案与指南</h2>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">DOCUMENTATION</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cupDocs.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedDoc(doc)}
                className="bg-white p-8 border border-[#1A1A1A]/10 hover:border-[#C00000] hover:shadow-xl transition-all cursor-pointer flex flex-col group min-h-[260px]"
              >
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40 mb-3 group-hover:text-[#C00000] transition-colors">{doc.tag}</p>
                <h3 className="text-2xl font-black mb-4 text-[#1A1A1A] group-hover:text-[#C00000] transition-colors">{doc.title}</h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mb-8 flex-1">
                  {doc.content.length > 55 ? doc.content.substring(0, 55) + '...' : doc.content}
                </p>
                <p className="text-xs text-[#1A1A1A]/50 mt-auto border-t border-[#1A1A1A]/10 pt-4 group-hover:text-[#1A1A1A]/80 transition-colors">
                  {doc.meta}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/60 backdrop-blur-sm"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#F4F4F1] w-full max-w-2xl border border-[#1A1A1A] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-[#1A1A1A]/10 bg-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C00000]">{selectedDoc.tag}</span>
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-10">
                <h3 className="text-4xl font-black tracking-tighter mb-6 text-[#1A1A1A]">{selectedDoc.title}</h3>
                <div className="w-12 h-1 bg-[#1A1A1A] mb-8" />
                <p className="text-lg leading-relaxed text-[#1A1A1A]/80 mb-12 font-serif">
                  {selectedDoc.content}
                  <br /><br />
                  <span className="italic opacity-60 text-sm">此文档目前处于公开查阅状态，有关赛事的最新解释以组委会最终发布文件为准。更多详情关注车协官方邮件与通知群。</span>
                </p>
                <div className="bg-white border border-[#1A1A1A]/10 p-6 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/50">DOCUMENT META</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">{selectedDoc.meta}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
