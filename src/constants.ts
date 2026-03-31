import { AITool, Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "tier1",
    title: "🥇 核心主力 (Tier 1)",
    shortTitle: "核心主力",
    description: "当前最主流、综合实力最强的 AI 工具，覆盖 80% 以上的日常需求。",
    icon: "Star",
  },
  {
    id: "tier2",
    title: "🧪 技术特色 (Tier 2)",
    shortTitle: "技术特色",
    description: "在特定领域（如编程、推理、实时热点）具有极强优势的工具。",
    icon: "Zap",
  },
  {
    id: "tier3",
    title: "🇨🇳 国产精选 (Tier 3)",
    shortTitle: "国产精选",
    description: "中文理解力强，本地生态整合度高，适合国内办公场景。",
    icon: "Globe",
  },
  {
    id: "tier4",
    title: "🧰 效率工具 (Tier 4)",
    shortTitle: "效率工具",
    description: "专注于 Agent 自动化、UI 生成、知识库管理等垂直应用。",
    icon: "Cpu",
  },
];

export const TOOLS: AITool[] = [
  // Tier 1
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    category: "tier1",
    description: "最均衡：写作 / 编程 / 推理 / Agent。工具链最完整，Deep Research 能力强。",
    oneLiner: "通用最强：全能型选手",
    icon: "MessageSquare",
    tags: ["Universal", "Deep Research", "Agent"],
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/new",
    category: "tier1",
    description: "超强长文本（200K+），代码理解顶级，写作自然度最高。",
    oneLiner: "写作+代码王：逻辑严密",
    icon: "FileText",
    tags: ["Writing", "Coding", "Long Context"],
  },
  {
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google.com/app",
    category: "tier1",
    description: "超大上下文（百万级），深度整合 Google 生态（Gmail/Docs/YT），强多模态。",
    oneLiner: "生态整合王：Google 全家桶",
    icon: "Layers",
    tags: ["Google Ecosystem", "Multimodal", "1M+ Context"],
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    url: "https://www.perplexity.ai/",
    category: "tier1",
    description: "每条回答都带引用，实时联网搜索，类似“AI 版 Google”。",
    oneLiner: "搜索之王：情报收集神器",
    icon: "Search",
    tags: ["Search", "Citations", "Real-time"],
  },

  // Tier 2
  {
    id: "deepseek",
    name: "DeepSeek",
    url: "https://chat.deepseek.com/",
    category: "tier2",
    description: "编程、数学、推理极强。成本极低，MoE 架构效率极高。",
    oneLiner: "工程师神器：技术/开源首选",
    icon: "Zap",
    tags: ["Reasoning", "Coding", "Low Cost"],
  },
  {
    id: "grok",
    name: "Grok",
    url: "https://grok.com/",
    category: "tier2",
    description: "风格激进、敢说。接入 X (推特) 实时数据，创意内容强。",
    oneLiner: "风格/自由：实时社媒热点",
    icon: "MessageSquare",
    tags: ["X Integration", "Real-time", "Creative"],
  },

  // Tier 3
  {
    id: "qwen",
    name: "Qwen",
    url: "https://chat.qwen.ai/",
    category: "tier3",
    description: "阿里出品。强在工程、开源生态，企业级应用广泛。",
    oneLiner: "阿里开源：工程生态强",
    icon: "Languages",
    tags: ["Open Source", "Enterprise", "Chinese"],
  },
  {
    id: "zhipu",
    name: "智谱 AI",
    url: "https://chat.z.ai/",
    category: "tier3",
    description: "偏科研/企业，中文理解极强，GLM 系列底座。",
    oneLiner: "科研/企业：中文理解强",
    icon: "Star",
    tags: ["Research", "GLM", "Chinese"],
  },
  {
    id: "kimi",
    name: "Kimi",
    url: "https://www.kimi.com/en",
    category: "tier3",
    description: "超长文本处理（100万字），中文长文处理能力顶级。",
    oneLiner: "月之暗面：长文处理强",
    icon: "FileSearch",
    tags: ["Long Context", "Chinese"],
  },
  {
    id: "doubao",
    name: "豆包",
    url: "https://www.dola.com/chat/",
    category: "tier3",
    description: "字节跳动出品。偏产品化、娱乐化，国内生态整合度高。",
    oneLiner: "字节跳动：本地化整合强",
    icon: "Smile",
    tags: ["Product", "Entertainment", "Chinese"],
  },

  // Tier 4
  {
    id: "minimax",
    name: "MiniMax Agent",
    url: "https://agent.minimax.io/",
    category: "tier4",
    description: "Agent 平台，适合做 AI 应用开发，多模态能力强。",
    oneLiner: "Agent 平台：应用开发",
    icon: "Bot",
    tags: ["Agent", "Development"],
  },
  {
    id: "aistudio",
    name: "Google AI Studio",
    url: "https://aistudio.google.com/apps",
    category: "tier4",
    description: "模型调试 / Prompt 工程，直接调用 Gemini API。",
    oneLiner: "开发者工具：模型调试",
    icon: "Terminal",
    tags: ["API", "Prompt Engineering"],
  },
  {
    id: "lovable",
    name: "Lovable",
    url: "https://lovable.dev/",
    category: "tier4",
    description: "用 AI 做网站（无代码），快速生成全栈应用。",
    oneLiner: "无代码建站：SaaS 神器",
    icon: "Layout",
    tags: ["No-code", "Web Dev"],
  },
  {
    id: "stitch",
    name: "Stitch",
    url: "https://stitch.withgoogle.com/?pli=1",
    category: "tier4",
    description: "UI 生成 / 设计自动化，Google 出品。",
    oneLiner: "UI 生成：设计自动化",
    icon: "Palette",
    tags: ["UI Design", "Automation"],
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    url: "https://notebooklm.google.com/",
    category: "tier4",
    description: "把文档变“AI 大脑”，自动总结 + 推理，知识库神器。",
    oneLiner: "知识库神器：文档推理",
    icon: "Book",
    tags: ["Knowledge Base", "Summarization"],
  },
  {
    id: "manus",
    name: "Manus",
    url: "https://manus.im/app",
    category: "tier4",
    description: "自动执行任务（类似 AutoGPT 进化版），Agent 型产品。",
    oneLiner: "Agent 产品：自动执行",
    icon: "Briefcase",
    tags: ["Automation", "Agent"],
  },
];

export const COMPARISON_DATA = [
  { type: "🧠 综合能力", tool: "ChatGPT", why: "最均衡" },
  { type: "✍️ 写作", tool: "Claude", why: "自然度最高" },
  { type: "💻 编程", tool: "Claude / DeepSeek", why: "理解力+性价比" },
  { type: "🔍 搜索", tool: "Perplexity", why: "带引用" },
  { type: "📊 数据分析", tool: "Gemini", why: "Google 生态" },
  { type: "📚 长文处理", tool: "Kimi / Gemini", why: "百万级上下文" },
  { type: "🤖 Agent", tool: "ChatGPT / MiniMax / Manus", why: "自动执行" },
  { type: "🎨 创意内容", tool: "Grok", why: "风格激进" },
  { type: "🇨🇳 中文场景", tool: "Qwen / Kimi / 豆包", why: "本地化强" },
];

export const STRATEGIES = [
  {
    role: "🧑‍💻 开发者",
    tools: "ChatGPT + Claude + DeepSeek",
  },
  {
    role: "📈 投资 / Web3",
    tools: "ChatGPT + Perplexity + Grok",
  },
  {
    role: "🧠 知识管理",
    tools: "NotebookLM + Gemini + ChatGPT",
  },
  {
    role: "💰 AI 赚钱玩家",
    tools: "ChatGPT(主控) + Claude(内容) + Perplexity(信息)",
  },
];

export const GOLDEN_TRIO = [
  { name: "ChatGPT", role: "主力", desc: "处理日常 80% 任务" },
  { name: "Claude", role: "写作/代码", desc: "高质量输出首选" },
  { name: "Perplexity", role: "搜索", desc: "替代传统搜索引擎" },
];
