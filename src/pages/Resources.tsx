import { SectionReveal, CountUp } from "../components/shared/SectionReveal";
import { resources } from "../data/resources";
import { ExternalLink, BookOpen, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Resources() {
  const [copied, setCopied] = useState(false);
  const chineseResources = resources.filter((r) => r.type === "中文");
  const englishResources = resources.filter((r) => r.type === "English");

  const bigNumbers = [
    { value: 5.9, suffix: "小時/週", label: "Gallup調查：每週使用AI節省的時間" },
    { value: 69, suffix: "%", label: "認為AI改善教學方法的教師比例" },
    { value: 85, suffix: "%", label: "2024-25學年已使用AI的教師比例" },
    { value: 20, suffix: "億港元", prefix: "", label: "教育局優質教育基金推動數碼教育的撥款" },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "香港教師AI應用指南",
        text: "幫助香港教師運用AI提高生產力的完整指南",
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0A2540] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-[#00D4AA]/20 rounded-full text-[#00D4AA] text-sm font-medium mb-6">
            延伸閱讀
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            參考文章與研究報告
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            深入了解AI在教育界的應用趨勢與實證研究。所有資源均來自可信機構與學術平台。
          </p>
        </div>
      </section>

      {/* Chinese Resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
              繁體中文參考資料
            </h2>
            <div className="w-16 h-1 bg-[#00D4AA] rounded-full" />
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chineseResources.map((res, i) => (
              <SectionReveal key={res.id} delay={i * 0.1}>
                <div className="bg-[#F6F9FC] rounded-xl p-6 border border-gray-100 hover:border-[#00D4AA]/30 transition-all h-full flex flex-col">
                  <span className="inline-block px-3 py-1 bg-[#0A2540] text-white text-xs rounded-full mb-3 w-fit">
                    {res.source}
                  </span>
                  <h3 className="font-semibold text-[#1A1A2E] mb-3 text-sm leading-relaxed">
                    {res.title}
                  </h3>
                  <p className="text-sm text-[#425466] leading-relaxed flex-1">
                    {res.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-[#00D4AA] flex items-center gap-1">
                      <BookOpen size={12} />
                      研究報告 / 調查
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* English Resources */}
      <section className="bg-[#F6F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
              English Resources
            </h2>
            <div className="w-16 h-1 bg-[#F5A623] rounded-full" />
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {englishResources.map((res, i) => (
              <SectionReveal key={res.id} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#F5A623]/30 transition-all h-full flex flex-col">
                  <span className="inline-block px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-full mb-3 w-fit font-medium">
                    {res.source}
                  </span>
                  <h3 className="font-semibold text-[#1A1A2E] mb-3 text-sm leading-relaxed">
                    {res.title}
                  </h3>
                  <p className="text-sm text-[#425466] leading-relaxed flex-1">
                    {res.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-[#F5A623] flex items-center gap-1">
                      <ExternalLink size={12} />
                      Academic / Report
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big Numbers */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">
              值得記住的數字
            </h2>
            <p className="text-[#425466]">這些數據來自全球與香港本地的權威研究</p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bigNumbers.map((num, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-[#0A2540] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#00D4AA] mb-2">
                    <CountUp end={num.value} suffix={num.suffix} />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {num.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              將這份指南分享給你的同事
            </h2>
            <p className="text-gray-300 mb-8">
              好的工具值得被更多人知道。一起讓AI成為香港教師的共同助手。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D4AA] text-[#0A2540] font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "已複製連結" : "複製連結分享"}
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#00D4AA] text-[#00D4AA] font-semibold rounded-lg hover:bg-[#00D4AA] hover:text-[#0A2540] transition-all"
              >
                返回首頁
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
