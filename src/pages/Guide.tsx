import { useState } from "react";
import { SectionReveal } from "../components/shared/SectionReveal";
import { ChevronDown, ChevronUp, CheckCircle, ExternalLink } from "lucide-react";

export function Guide() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const steps = [
    {
      phase: "1. 先導測試",
      time: "1-2個月",
      action: "選3-5位志願教師試用2款工具",
      output: "使用報告與反饋",
    },
    {
      phase: "2. 小組建立",
      time: "第2-3月",
      action: "成立「AI教學小組」，定期分享會",
      output: "校本案例庫",
    },
    {
      phase: "3. 培訓工作坊",
      time: "第3-4月",
      action: "邀請工具供應商或同儕導師培訓",
      output: "教師能力認證",
    },
    {
      phase: "4. 制度整合",
      time: "第4-6月",
      action: "將AI使用納入教學常規與資源分配",
      output: "校內指引文件",
    },
    {
      phase: "5. 評估優化",
      time: "持續",
      action: "收集數據、調整工具組合、分享成功經驗",
      output: "年度成效報告",
    },
  ];

  const checklists = [
    "學生數據是否獲得適當保護？（符合PDPO私隱條例）",
    "AI生成內容是否經過教師審核？（不直接發放給學生）",
    "學生是否理解AI在學習中的角色？（培養數字素養）",
    "是否保留人類教師的最終決策權？（AI是輔助非替代）",
    "是否確保所有學生都能平等使用AI資源？（避免數碼鴻溝）",
  ];

  const accordionItems = [
    {
      title: "自動生成習題與試卷",
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">為何選這個</p>
            <p className="text-sm text-[#425466]">備課是每位教師每天都做的事，見效最快，幾乎所有科目都適用。</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">推薦工具</p>
            <p className="text-sm text-[#425466]">MagicSchool + NotebookLM</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">預期效果</p>
            <p className="text-sm text-[#00D4AA] font-medium">備課時間縮短60-70%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-2">操作步驟</p>
            <ol className="text-sm text-[#425466] space-y-1 list-decimal list-inside">
              <li>上傳課程指引或校本教材到NotebookLM</li>
              <li>輸入主題、年級與題型要求到MagicSchool</li>
              <li>AI生成初稿，教師審核調整</li>
              <li>輸出PDF或直接分享至Google Classroom</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      title: "分析學生成績趨勢",
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">為何選這個</p>
            <p className="text-sm text-[#425466]">數據驅動決策，提升教學精準度，讓教師從「感覺」走向「證據」。</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">推薦工具</p>
            <p className="text-sm text-[#425466]">Gradescope + Google Gemini</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-1">預期效果</p>
            <p className="text-sm text-[#00D4AA] font-medium">批改時間縮短50%，精確追蹤知識點掌握度</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1A1A2E] mb-2">操作步驟</p>
            <ol className="text-sm text-[#425466] space-y-1 list-decimal list-inside">
              <li>掃描或上傳試卷到Gradescope</li>
              <li>AI自動歸類相似答案</li>
              <li>批量批改典型錯誤，套用到全班</li>
              <li>生成弱點分析報告，輸入Gemini撰寫家長信</li>
            </ol>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0A2540] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full text-[#00D4AA] text-sm font-medium mb-6">
            落地手冊
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            如何在學校推行AI
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            從個人試用到全校推廣的完整路徑。包含起步建議、推行步驟與倫理檢查清單。
          </p>
        </div>
      </section>

      {/* Accordion - Starting Points */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              兩個立竿見影的起點
            </h2>
            <p className="text-[#425466]">根據教師最常見的痛點，建議從以下兩處開始</p>
          </SectionReveal>

          <div className="space-y-4">
            {accordionItems.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1A1A2E]">{item.title}</span>
                    {openAccordion === i ? (
                      <ChevronUp size={20} className="text-[#00D4AA]" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  {openAccordion === i && (
                    <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                      {item.content}
                    </div>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              全校推行的五個階段
            </h2>
            <p className="text-[#425466]">循序漸進，穩紮穩打</p>
          </SectionReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#00D4AA]/30" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00D4AA] rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      {i + 1}
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[45%] bg-white rounded-xl p-6 border border-gray-100 shadow-sm ${
                        i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#0A2540] text-white text-xs rounded">
                          {step.time}
                        </span>
                        <h3 className="font-semibold text-[#1A1A2E]">
                          {step.phase}
                        </h3>
                      </div>
                      <p className="text-sm text-[#425466] mb-2">
                        <span className="font-medium">行動：</span>
                        {step.action}
                      </p>
                      <p className="text-sm text-[#00D4AA]">
                        <span className="font-medium">產出：</span>
                        {step.output}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Checklist */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              使用AI的倫理檢查清單
            </h2>
            <p className="text-[#425466]">基於UNESCO原則與香港教育環境</p>
          </SectionReveal>

          <SectionReveal>
            <div className="bg-[#F6F9FC] rounded-xl p-8">
              <div className="space-y-4">
                {checklists.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                  >
                    <CheckCircle size={20} className="text-[#00D4AA] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#425466]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Local Resources */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-3">香港本地資源</h2>
            <p className="text-gray-300">政府與官方機構的支援</p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "優質教育基金",
                desc: "20億港元推動數碼教育，每校最多50萬港元AI資助。可用於購買AI教學軟件、硬件及培訓。",
                link: "教育局網站",
              },
              {
                title: "香港教育城",
                desc: "AI教學研討會系列、教師培訓工作坊、大量本地課堂應用實例。定期舉辦線上線下活動。",
                link: "edcity.hk",
              },
              {
                title: "AI教學資源庫",
                desc: "教育局官方AI教育資源與指引，包含課程框架、教學示例及評估工具。",
                link: "EDB網站",
              },
            ].map((res, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 h-full">
                  <h3 className="font-semibold text-white mb-3">{res.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {res.desc}
                  </p>
                  <div className="flex items-center gap-1 text-[#00D4AA] text-sm">
                    <ExternalLink size={14} />
                    <span>{res.link}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
