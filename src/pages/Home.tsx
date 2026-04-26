import { Link } from "react-router-dom";
import { SectionReveal, CountUp } from "../components/shared/SectionReveal";
import { ArrowRight, BookOpen, Zap, Target } from "lucide-react";
import { stats } from "../data/resources";

export function Home() {
  const featuredTools = [
    { name: "MagicSchool AI", category: "教材開發", desc: "全能型教學助手，80+專用工具" },
    { name: "Diffit", category: "教材開發", desc: "差異化教學神器，自動分級" },
    { name: "Gradescope", category: "行政效率", desc: "理科批改時間縮短50%+" },
    { name: "Curipod", category: "課室互動", desc: "互動簡報生成，即時反饋" },
    { name: "Canva AI", category: "行政效率", desc: "零美工基礎製作專業海報" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0A2540] flex items-center overflow-hidden">
        {/* Background Grid Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00D4AA" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full mb-6">
              <span className="text-[#00D4AA] text-sm font-medium">2026 教育科技指南</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              讓AI成為你的
              <br />
              <span className="text-[#00D4AA]">教學助手</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              香港教師平均每週工作55小時。AI不是取代你的威脅，而是減輕負擔的最佳夥伴。
              從備課到批改，從行政到互動，讓你將時間放回真正重要的事——學生身上。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tools"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D4AA] text-[#0A2540] font-semibold rounded-lg hover:brightness-110 transition-all hover:-translate-y-0.5"
              >
                探索AI工具
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/workload"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#00D4AA] text-[#00D4AA] font-semibold rounded-lg hover:bg-[#00D4AA] hover:text-[#0A2540] transition-all"
              >
                了解教師現狀
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Chart */}
        <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
          <svg width="200" height="120" viewBox="0 0 200 120">
            {[40, 70, 55, 90, 65, 80, 45].map((h, i) => (
              <rect key={i} x={i * 28 + 4} y={120 - h} width="20" height={h} fill="#00D4AA" rx="4" />
            ))}
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F6F9FC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[#425466]">{stat.label}</div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Core Values */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
              AI如何幫助香港教師？
            </h2>
            <p className="text-[#425466] max-w-2xl mx-auto">
              從教學準備到行政處理，從學生互動到數據分析，AI正在改變教育的每一個環節
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "教學自動化",
                desc: "自動生成教案、工作紙、差異化教材，將備課時間縮短60-70%。",
                link: "/solutions",
                cta: "查看解決方案",
              },
              {
                icon: Zap,
                title: "行政效率化",
                desc: "會議記錄、學生評語、成績分析一次完成，告別重複勞動。",
                link: "/solutions",
                cta: "查看解決方案",
              },
              {
                icon: Target,
                title: "精準反饋",
                desc: "AI輔助批改加個性化評語，讓學生真正理解錯誤原因。",
                link: "/tools",
                cta: "查看工具",
              },
            ].map((card, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center mb-5">
                    <card.icon size={24} className="text-[#00D4AA]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#425466] leading-relaxed mb-6 flex-1">
                    {card.desc}
                  </p>
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1 text-[#00D4AA] font-medium hover:gap-2 transition-all"
                  >
                    {card.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2 Big CTAs */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal animation="slideInLeft">
              <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  10款精選AI工具
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  從教案設計到活動海報，從批改試卷到STEM計算，
                  找到適合你的教學助手。涵蓋4大教學場景，每款都經過實際需求篩選。
                </p>
                <Link
                  to="/tools"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00D4AA] text-[#0A2540] font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  瀏覽工具庫
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal animation="slideInRight">
              <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  學校推行AI指南
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  從零開始在校園引入AI的完整步驟、倫理考量與起步建議。
                  包含五階段推行路徑與UNESCO倫理檢查清單。
                </p>
                <Link
                  to="/guide"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#00D4AA] text-[#00D4AA] font-semibold rounded-lg hover:bg-[#00D4AA] hover:text-[#0A2540] transition-all"
                >
                  閱讀指南
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Featured Tools Preview */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E]">精選工具預覽</h2>
            <Link
              to="/tools"
              className="text-[#00D4AA] font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              查看全部
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {featuredTools.map((tool, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 bg-white rounded-xl p-6 border border-gray-100 shadow-sm snap-start"
              >
                <span className="inline-block px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium rounded-full mb-3">
                  {tool.category}
                </span>
                <h3 className="font-semibold text-[#1A1A2E] mb-2">{tool.name}</h3>
                <p className="text-sm text-[#425466]">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
