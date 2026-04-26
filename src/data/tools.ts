export interface Tool {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  description: string;
  strengths: string[];
  hkValue: string;
  pricing: string;
  coreStrength: string;
  bestFor: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "MagicSchool AI",
    category: "教材開發",
    difficulty: "入門",
    description: "全能型行政與教學助手，內建超過80種專為教師設計的工具。",
    strengths: [
      "自動生成IEP（個別學習計劃）",
      "編寫學生報告評語",
      "將複雜概念轉化為適合不同年級的課文",
    ],
    hkValue: "極大減輕每學期末撰寫數百份學生評語的負擔",
    pricing: "免費/付費",
    coreStrength: "多功能行政",
    bestFor: "寫評語、IEP、教案、工作紙",
  },
  {
    id: 2,
    name: "Diffit",
    category: "教材開發",
    difficulty: "入門",
    description: "差異化教學神器，自動將內容改寫成不同難度等級。",
    strengths: [
      "自動改寫為P3至S3不同難度",
      "生成摘要、詞彙表與選擇題",
      "輸入網址或上傳PDF即可使用",
    ],
    hkValue: "完美對應差異化教學，幫助照顧SEN或學習進度不同的學生",
    pricing: "免費/付費",
    coreStrength: "難度分級",
    bestFor: "多樣化教材製作、SEN支援",
  },
  {
    id: 3,
    name: "NotebookLM",
    category: "教材開發",
    difficulty: "入門",
    description: "Google個人化知識庫，基於你上傳的資料回答問題，零幻覺。",
    strengths: [
      "僅根據上傳資料生成內容",
      "生成筆記摘要與考題",
      "100%符合校本課程要求",
    ],
    hkValue: "確保生成的內容100%符合校本課程要求，不混入網絡錯誤資訊",
    pricing: "免費",
    coreStrength: "資料準確性",
    bestFor: "針對校本教材設計題目",
  },
  {
    id: 4,
    name: "Wolfram Alpha",
    category: "STEM教育",
    difficulty: "進階",
    description: "科學與數學的精準計算引擎，處理複雜物理公式與化學反應。",
    strengths: [
      "處理物理公式與化學反應式",
      "數學計算步驟視覺化",
      "提供精確計算而非估算",
    ],
    hkValue: "策劃機器人足球或水火箭等STEAM課程時，精確計算動力與力學數據",
    pricing: "免費/付費",
    coreStrength: "硬科學計算",
    bestFor: "物理、數學、機器人數據計算",
  },
  {
    id: 5,
    name: "GitHub Copilot",
    category: "STEM教育",
    difficulty: "進階",
    description: "編程教學的「副駕駛」，即時給出代碼建議並修復Bug。",
    strengths: [
      "支援Python與Arduino",
      "即時代碼建議與除錯",
      "協助教授邏輯思維",
    ],
    hkValue: "大大降低課堂上Debug的壓力，讓老師專注於教授邏輯思維而非語法細節",
    pricing: "付費",
    coreStrength: "代碼輔助",
    bestFor: "編程教學",
  },
  {
    id: 6,
    name: "Curipod",
    category: "課室互動",
    difficulty: "入門",
    description: "激發創意與即時反饋，AI自動生成互動教學環節。",
    strengths: [
      "自動生成投票、繪圖、腦力激盪環節",
      "即時分析學生文字答案",
      "學生透過iPad或電腦實時參與",
    ],
    hkValue: "打破沈悶教學，適合跨學科專題（PBL）教學",
    pricing: "免費/付費",
    coreStrength: "互動設計",
    bestFor: "PBL、跨學科",
  },
  {
    id: 7,
    name: "Khanmigo",
    category: "課室互動",
    difficulty: "入門",
    description: "蘇格拉底式AI導師，透過引導式提問帶領學生思考。",
    strengths: [
      "不直接給答案，引導思考",
      "協助設計分組活動",
      "模擬歷史人物對話",
    ],
    hkValue: "培養學生自主學習能力，而非單純依賴AI寫作業",
    pricing: "免費",
    coreStrength: "引導學習",
    bestFor: "自主學習培養",
  },
  {
    id: 8,
    name: "Canva Magic Studio",
    category: "行政效率",
    difficulty: "入門",
    description: "專業活動海報生成器，AI圖像生成與自動佈局。",
    strengths: [
      "AI生成多款高質感宣傳圖",
      "一鍵去背與自動翻譯",
      "輸入活動名稱即可生成",
    ],
    hkValue: "讓老師在沒有美工支援下，也能快速製作吸睛的活動宣傳海報及Instagram貼文",
    pricing: "免費/付費",
    coreStrength: "視覺設計",
    bestFor: "海報、STEAM成果展示",
  },
  {
    id: 9,
    name: "Google Gemini",
    category: "行政效率",
    difficulty: "入門",
    description: "Workspace版行政流程自動化，深度整合Google辦公套件。",
    strengths: [
      "會議錄音轉表格摘要",
      "教學日誌直接生成家長信",
      "整合Docs、Sheets與Gmail",
    ],
    hkValue: "處理日常瑣碎電郵與會議記錄，節省出的時間可用於輔導學生",
    pricing: "付費(Workspace)",
    coreStrength: "流程自動化",
    bestFor: "行政、家長溝通",
  },
  {
    id: 10,
    name: "Gradescope",
    category: "行政效率",
    difficulty: "進階",
    description: "理科批改與數據分析，自動歸類相似答案批量處理。",
    strengths: [
      "自動歸類相似的學生答案",
      "只需批改一次典型錯誤即可套用到全班",
      "生成詳細弱點分析圖表",
    ],
    hkValue: "將測考批改時間縮短50%以上，並能精確追蹤學生對特定知識點的掌握度",
    pricing: "付費",
    coreStrength: "批量批改",
    bestFor: "理科試卷批閱、成績趨勢分析",
  },
];

export const toolCategories = ["全部", "教材開發", "STEM教育", "課室互動", "行政效率"];
