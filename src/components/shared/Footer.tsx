import { Link } from "react-router-dom";
import { BookOpen, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center text-[#0A2540] text-sm font-bold">
                AI
              </span>
              <span className="font-bold text-lg">教師AI指南</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              專為香港中小學教師設計的AI應用資訊平台，
              協助教師運用科技減輕負擔、提升教學效能。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">快速連結</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/workload", label: "工作現狀分析" },
                { to: "/solutions", label: "AI解決方案" },
                { to: "/tools", label: "工具推薦" },
                { to: "/guide", label: "實踐指南" },
                { to: "/resources", label: "資源中心" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-[#00D4AA] text-sm transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold mb-4 text-white">關於本站</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              本站內容基於公開資料整理，包括香港教育工作者聯會、
              香港教育大學、UNESCO等機構的研究報告。所有數據與
              工具資訊僅供參考，不構成商業推薦。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            2026 香港教師AI應用指南. 資料來源：HKFEW、HKU、HKEdCity、UNESCO等.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <BookOpen size={14} />
            <span>以教育為本，科技為輔</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
