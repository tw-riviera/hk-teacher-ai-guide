import { useState } from "react";
import { SectionReveal } from "../components/shared/SectionReveal";
import { tools, toolCategories } from "../data/tools";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

export function Tools() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredTools =
    activeCategory === "全部"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0A2540] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full text-[#00D4AA] text-sm font-medium mb-6">
            精選工具庫
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            10款最適合香港教師的AI工具
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            按教學場景分類，每款工具都經過實際教學需求篩選，
            涵蓋教材開發、STEM教育、課室互動與行政效率四大範疇。
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <SectionReveal className="flex flex-wrap gap-2 mb-10 sticky top-20 z-30 bg-white/95 backdrop-blur py-4">
            {toolCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#00D4AA] text-[#0A2540]"
                    : "bg-gray-100 text-[#425466] hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionReveal>

          {/* Tool Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredTools.map((tool, i) => (
              <SectionReveal key={tool.id} delay={i * 0.05}>
                <div
                  className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    expandedId === tool.id ? "ring-2 ring-[#00D4AA]" : ""
                  }`}
                  onClick={() =>
                    setExpandedId(expandedId === tool.id ? null : tool.id)
                  }
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium rounded-full">
                          {tool.category}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            tool.difficulty === "入門"
                              ? "bg-[#00D4AA]/10 text-[#00D4AA]"
                              : "bg-[#FF6B6B]/10 text-[#FF6B6B]"
                          }`}
                        >
                          {tool.difficulty}
                        </span>
                      </div>
                      <span className="text-xs text-[#425466]">
                        {tool.pricing}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-[#425466] mb-4">
                      {tool.description}
                    </p>

                    {/* HK Value - highlighted */}
                    <div className="bg-[#00D4AA]/5 rounded-lg p-3 mb-3">
                      <div className="flex items-start gap-2">
                        <Star size={14} className="text-[#00D4AA] mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#1A1A2E]">{tool.hkValue}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#425466]">
                        核心：{tool.coreStrength}
                      </span>
                      {expandedId === tool.id ? (
                        <ChevronUp size={18} className="text-[#00D4AA]" />
                      ) : (
                        <ChevronDown
                          size={18}
                          className="text-gray-400"
                        />
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  {expandedId === tool.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-sm font-medium text-[#1A1A2E] mb-2">
                        三大核心強項：
                      </p>
                      <ul className="space-y-2 mb-4">
                        {tool.strengths.map((s, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-[#425466]"
                          >
                            <span className="w-1.5 h-1.5 bg-[#00D4AA] rounded-full mt-2 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#425466]">
                          適合場景：{tool.bestFor}
                        </span>
                        <span className="text-xs text-[#425466]">
                          費用：{tool.pricing}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              快速對照表
            </h2>
            <p className="text-[#425466]">一眼比較所有工具的核心定位</p>
          </SectionReveal>

          <SectionReveal>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
                <thead>
                  <tr className="bg-[#0A2540] text-white">
                    <th className="text-left py-3 px-4 text-sm font-semibold rounded-tl-xl">工具</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">核心強項</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">適合場景</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold">上手難度</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold rounded-tr-xl">費用</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, i) => (
                    <tr
                      key={tool.id}
                      className={`border-b border-gray-100 hover:bg-[#F6F9FC] ${
                        i === tools.length - 1 ? "last:border-0" : ""
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-[#1A1A2E] text-sm">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#425466]">
                        {tool.coreStrength}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#425466]">
                        {tool.bestFor}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 text-xs rounded ${
                            tool.difficulty === "入門"
                              ? "bg-[#00D4AA]/10 text-[#00D4AA]"
                              : "bg-[#F5A623]/10 text-[#F5A623]"
                          }`}
                        >
                          {tool.difficulty}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-sm text-[#425466]">
                        {tool.pricing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Getting Started Tips */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              新手教師起步建議
            </h2>
            <p className="text-[#425466]">三步開始你的AI教學之旅</p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-[#00D4AA]/30" />

            {[
              {
                step: "01",
                title: "先從一個痛點開始",
                desc: "選擇你最耗時的任務（如寫評語或批改），專注解決這個問題。",
              },
              {
                step: "02",
                title: "試用免費版本",
                desc: "所有工具都有免費層，先體驗功能再決定是否升級。",
              },
              {
                step: "03",
                title: "與同事分享",
                desc: "組成校內AI教師小組，互相學習，共同成長。",
              },
            ].map((tip, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-[#F6F9FC] rounded-xl p-6 text-center relative">
                  <div className="w-10 h-10 bg-[#00D4AA] rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4 relative z-10">
                    {tip.step}
                  </div>
                  <h3 className="font-semibold text-[#1A1A2E] mb-2">{tip.title}</h3>
                  <p className="text-sm text-[#425466]">{tip.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
