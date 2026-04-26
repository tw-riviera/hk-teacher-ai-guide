import { SectionReveal } from "../components/shared/SectionReveal";

export function Solutions() {
  const solutions = [
    {
      num: "01",
      title: "自動化教案與教材",
      desc: "AI能在幾秒內生成針對特定主題的教案、工作紙及測驗題目。透過Prompt Engineering，生成的內容可依據香港課程標準自動校準，確保教學質素。",
      stat: "備課時間縮短70%",
      tools: "MagicSchool, Diffit",
      icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
    },
    {
      num: "02",
      title: "差異化教學",
      desc: "AI能將同一份教材調整為不同難度等級，協助老師照顧班內的SEN（特殊教育需要）或非華語學生。一套教材自動衍生多套版本，無需額外時間。",
      stat: "一套變多套，零額外時間",
      tools: "Diffit, NotebookLM",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    },
    {
      num: "03",
      title: "智能評核與反饋",
      desc: "AI輔助批改工具不僅能給分數，還能生成個別化的評語，幫助學生理解錯誤原因。教師保留最終覆核定稿權，加入人性化的反饋與鼓勵。",
      stat: "批改時間縮短50%",
      tools: "Gradescope, CoGrader",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
    },
    {
      num: "04",
      title: "行政事務自動化",
      desc: "AI可協助整理會議記錄、撰寫行政報告草稿、分析學生出勤與成績趨勢，預警學習危機。自動記錄考勤，標記異常，告別手動點名與繁瑣文書。",
      stat: "每週節省2-3小時",
      tools: "Google Gemini, MagicSchool",
      icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
    },
    {
      num: "05",
      title: "教師培訓與專業發展",
      desc: "香港教育城與教育局合辦AI教學研討會系列，教育局從優質教育基金撥款20億港元推動數碼教育。AI驅動的個性化培訓讓教師持續成長。",
      stat: "優教基金撥款20億港元",
      tools: "HKEdCity, Khanmigo",
      icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.09l-5.91-3.23L12 9.77l5.91 3.09L12 16.09z",
    },
    {
      num: "06",
      title: "數據驅動教學決策",
      desc: "實時分析學生成績趨勢，預警學習危機。香港本地平台結合AI與GPS技術，支持戶外探究學習，考察後秒速評估學生表現。",
      stat: "即時評估，秒速反饋",
      tools: "EduVenture, Curipod",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
    },
  ];

  const timeSavings = [
    { task: "教案規劃", traditional: "3-4小時", ai: "1小時", saved: "-75%" },
    { task: "教材製作", traditional: "2-3小時", ai: "0.5小時", saved: "-75%" },
    { task: "評核批改", traditional: "4-5小時", ai: "2小時", saved: "-50%" },
    { task: "學生追蹤", traditional: "1-2小時", ai: "0.3小時", saved: "-70%" },
    { task: "行政報告", traditional: "2-3小時", ai: "0.5小時", saved: "-75%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0A2540] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full text-[#00D4AA] text-sm font-medium mb-6">
            應用方向
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            AI在教育的六大生產力場景
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            從自動化到精準化，AI如何將每週工作時間縮短近6小時
          </p>
        </div>
      </section>

      {/* 6 Solutions - Alternating */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {solutions.map((sol, i) => (
            <SectionReveal key={i}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                {/* Illustration */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <div className="w-16 h-16 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#00D4AA">
                        <path d={sol.icon} />
                      </svg>
                    </div>
                    <span className="text-5xl font-bold text-[#00D4AA]/20 font-mono">
                      {sol.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-[#00D4AA] font-mono text-sm font-semibold">
                    {sol.num}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mt-2 mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-[#425466] leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-block px-3 py-1 bg-[#00D4AA]/10 text-[#00D4AA] text-sm font-semibold rounded-full">
                      {sol.stat}
                    </span>
                    <span className="text-sm text-[#425466]">
                      相關工具：{sol.tools}
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Time Savings Table */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
              AI帶來的時間效益（每週）
            </h2>
            <p className="text-[#425466]">來源：Gallup-Walton Family Foundation調查</p>
          </SectionReveal>

          <SectionReveal>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0A2540]">
                    <th className="text-left py-4 px-4 font-semibold text-[#1A1A2E]">任務領域</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#1A1A2E]">傳統方式</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#1A1A2E]">AI輔助</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#00D4AA]">節省時間</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSavings.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-[#F6F9FC]">
                      <td className="py-4 px-4 text-[#1A1A2E]">{row.task}</td>
                      <td className="py-4 px-4 text-center text-[#425466]">{row.traditional}</td>
                      <td className="py-4 px-4 text-center text-[#00D4AA] font-medium">{row.ai}</td>
                      <td className="py-4 px-4 text-center font-bold text-[#00D4AA]">{row.saved}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#0A2540] text-white">
                    <td className="py-4 px-4 font-bold">總計</td>
                    <td className="py-4 px-4 text-center font-bold">12-17小時</td>
                    <td className="py-4 px-4 text-center font-bold">4-5小時</td>
                    <td className="py-4 px-4 text-center font-bold text-[#00D4AA]">約6小時/週</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* UNESCO Principles */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] text-[#00D4AA]/10 font-serif leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-xl sm:text-2xl font-medium text-[#1A1A2E] leading-relaxed mb-6">
                AI不應取代人類智能，而應赋能教師、學習者和研究人員。
              </blockquote>
              <p className="text-sm text-[#425466] mb-8">
                — UNESCO《Guidance for Generative AI in Education and Research》
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["人類主體性", "包容性", "公平性", "文化多樣性"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#425466]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
