import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Share2 } from "lucide-react";

const navLinks = [
  { path: "/", label: "首頁" },
  { path: "/workload", label: "工作現狀" },
  { path: "/solutions", label: "AI解決方案" },
  { path: "/tools", label: "工具推薦" },
  { path: "/guide", label: "實踐指南" },
  { path: "/resources", label: "資源中心" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A2540]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-lg"
            >
              <span className="w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center text-[#0A2540] text-sm font-bold">
                AI
              </span>
              <span>教師AI指南</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === link.path
                      ? "text-[#00D4AA]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <div className="h-0.5 bg-[#00D4AA] mt-0.5 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Share Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "香港教師AI應用指南",
                      text: "幫助香港教師運用AI提高生產力的完整指南",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("連結已複製到剪貼簿");
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 border border-[#00D4AA] text-[#00D4AA] rounded-lg text-sm hover:bg-[#00D4AA] hover:text-[#0A2540] transition-all"
              >
                <Share2 size={16} />
                分享
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0A2540] p-6 pt-20 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base ${
                    location.pathname === link.path
                      ? "bg-[#00D4AA]/20 text-[#00D4AA]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 mt-4 pt-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("連結已複製到剪貼簿");
                  }}
                  className="flex items-center gap-2 px-4 py-3 text-[#00D4AA] w-full"
                >
                  <Share2 size={18} />
                  分享此頁面
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
