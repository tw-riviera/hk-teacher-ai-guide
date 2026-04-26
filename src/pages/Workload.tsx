import { SectionReveal, CountUp } from "../components/shared/SectionReveal";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, BookOpen, ClipboardList, Users } from "lucide-react";

export function Workload() {
  const duties = [
    {
      icon: BookOpen,
      title: "教學與評核",
      level: "極高",
      levelColor: "bg-[#FF6B6B]",
      duties: "準備教材（PPT/工作紙）、課堂教學、批改作業、設計試卷（DSE/校內測考）、因材施教（照顧SEN學生）",
      pain: "批改量大、需為不同能力的學生設計多套教材（差異化教學）",
    },
    {
      icon: ClipboardList,
      title: "行政與校務",
      level: "極高",
      levelColor: "bg-[#FF6B6B]",
      duties: "處理教育局（EDB）文件、撰寫發展報告、學生數據分析、出席各類會議、家長溝通、班主任行政",
      pain: "文件工作繁瑣、重疊，佔據大量非教學時間",
    },
    {
      icon: Users,
      title: "訓輔及活動",
      level: "高",
      levelColor: "bg-[#F5A623]",
      duties: "學生紀律、心理輔導、帶領課外活動（ECA）、策劃學校大型活動（如開放日、運動會）",
      pain: "需要極高情緒勞動，且活動多安排在課後或週末",
    },
  ];

  const workHours = [
    { range: "40-50小時", percent: 15, color: "#00D4AA" },
    { range: "51-60小時", percent: 35, color: "#F5A623" },
    { range: "61-70小時", percent: 28, color: "#FF6B6B" },
    { range: "70小時以上", percent: 22, color: "#FF6B6B" },
  ];

  const stressSources = [
    { label: "學校行政工作", percent: 82 },
    { label: "教學相關事務", percent: 58 },
    { label: "學生學習差異", percent: 57 },
    { label: "家校溝通", percent: 45 },
    { label: "升學/考試壓力", percent: 40 },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0A2540] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full text-[#00D4AA] text-sm font-medium mb-6">
              數據與研究
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              香港教師的工作壓力現狀
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              逾8成教師每週工作超過51小時。這不是個別現象，而是系統性問題。
              理解問題的全貌，是找到解決方案的第一步。
            </p>
          </div>
        </div>
      </section>

      {/* 3 Duties */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
              香港教師的「全能型」職責
            </h2>
            <p className="text-[#425466]">
              教學、行政、訓輔三大範疇交織，構成教師沉重的日常負擔
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {duties.map((duty, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full">
                  <div className={`h-1.5 ${duty.levelColor}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#0A2540]/5 rounded-lg flex items-center justify-center">
                        <duty.icon size={20} className="text-[#0A2540]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1A2E]">{duty.title}</h3>
                        <span className={`inline-block px-2 py-0.5 text-xs rounded text-white ${duty.levelColor}`}>
                          壓力：{duty.level}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-1">具體職責</p>
                      <p className="text-sm text-[#425466]">{duty.duties}</p>
                    </div>
                    <div className="bg-[#FF6B6B]/5 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={16} className="text-[#FF6B6B] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-[#FF6B6B] font-medium mb-1">最大痛點</p>
                          <p className="text-sm text-[#425466]">{duty.pain}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <SectionReveal>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
                教師每週工作時數分佈
              </h3>
              <p className="text-sm text-[#425466] mb-6">數據來源：HKFEW調查</p>
              <div className="flex items-end gap-4 h-64">
                {workHours.map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-sm font-semibold text-[#1A1A2E]">
                      {item.percent}%
                    </span>
                    <div
                      className="w-full rounded-t-lg transition-all duration-1000"
                      style={{
                        height: `${item.percent * 2}px`,
                        backgroundColor: item.color,
                      }}
                    />
                    <span className="text-xs text-[#425466] text-center">{item.range}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Horizontal Bars */}
            <SectionReveal>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
                教師壓力來源排名
              </h3>
              <div className="space-y-5">
                {stressSources.map((source, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#1A1A2E]">{source.label}</span>
                      <span className="text-sm font-semibold text-[#00D4AA]">
                        {source.percent}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00D4AA] rounded-full transition-all duration-1000"
                        style={{ width: `${source.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Kindergarten Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              幼教同工同樣面臨挑戰
            </h2>
            <p className="text-[#425466]">香港教育大學2025年研究</p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: 50, suffix: "%+", label: "每日在校10小時+" },
              { value: 55, suffix: "小時", label: "每周工時中位數" },
              { value: 60, suffix: "%", label: "考慮離職比例" },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-[#FF6B6B] mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-[#425466]">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              這些數字背後，是無數教師的疲憊與堅持
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              AI不是要取代這份堅持，而是讓你能將精力放回真正重要的事——學生身上。
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4AA] text-[#0A2540] font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              看看AI如何幫忙
              <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
