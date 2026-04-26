export interface Resource {
  id: number;
  source: string;
  title: string;
  summary: string;
  type: "中文" | "English";
  url?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    source: "香港教育工作者聯會 (HKFEW)",
    title: "小學教師工作狀況問卷調查結果",
    summary: "分析了香港教師的壓力來源與行政負擔，為AI介入提供了背景需求。",
    type: "中文",
  },
  {
    id: 2,
    source: "香港大學電子學習發展實驗室",
    title: "「智為學理」AI科學教育撥款計劃",
    summary: "詳細說明如何透過AI輔助科學科教學及自動化評核，提升教學創新能力。",
    type: "中文",
  },
  {
    id: 3,
    source: "KidsAiTools (2026趨勢報告)",
    title: "2026年AI教育新趨勢：教師如何運用AI，家長應知何事？",
    summary: "探討AI寫作助手、反饋工具如何減輕教師在2026年的日常工作量。",
    type: "中文",
  },
  {
    id: 4,
    source: "香港教育城 (HKEdCity)",
    title: "人工智能：教育轉型的關鍵催化劑",
    summary: "香港官方教育平台，提供大量AI工具在本地課堂應用的實例。",
    type: "中文",
  },
  {
    id: 5,
    source: "香港01 / 香港教育大學研究",
    title: "教大研究：幼師工時與AI輔助潛力",
    summary: "報導教育大學針對前線教師工時的研究，強調科技減負的迫切性。",
    type: "中文",
  },
  {
    id: 6,
    source: "Oswaal Books (2026 Analysis)",
    title: "How AI Is Reshaping Teachers' Workload in 2026?",
    summary: "A detailed breakdown of how automated grading and reporting save hours per week.",
    type: "English",
  },
  {
    id: 7,
    source: "Education Week (EdWeek)",
    title: "More Teachers Are Using AI In Their Classrooms: 2026 Survey Trends",
    summary: "Provides statistics on teacher adoption rates and productivity gains in planning and feedback.",
    type: "English",
  },
  {
    id: 8,
    source: "ResearchGate",
    title: "AI and Teacher Productivity: A Quantitative Analysis of Time-Saving",
    summary: "An academic study quantifying exactly how much time AI saves in administrative tasks.",
    type: "English",
  },
  {
    id: 9,
    source: "The School House",
    title: "AI for Teachers: Tools to Help Educators in 2026",
    summary: "Focuses on the 'full teaching cycle' and how AI supports organization, documentation, and planning.",
    type: "English",
  },
  {
    id: 10,
    source: "UNESCO",
    title: "Guidance for Generative AI in Education and Research",
    summary: "The global standard for ethical and productive use of AI to support educators.",
    type: "English",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 55, suffix: "小時", prefix: "", label: "平均週工時" },
  { value: 85, suffix: "%", prefix: "", label: "感到壓力過大" },
  { value: 5.9, suffix: "小時/週", prefix: "", label: "AI節省時間" },
  { value: 10, suffix: "款", prefix: "", label: "推薦工具" },
];
