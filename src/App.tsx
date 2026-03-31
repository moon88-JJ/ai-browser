import React, { useState, useMemo } from "react";
import { 
  Brain, 
  Search, 
  Cpu, 
  Palette, 
  BookOpen, 
  Globe, 
  Code, 
  MessageSquare, 
  FileText, 
  Zap, 
  Languages, 
  FileSearch, 
  Bot, 
  Briefcase, 
  Layout, 
  Layers, 
  Book, 
  Star, 
  Smile, 
  Terminal,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Trophy
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, TOOLS, COMPARISON_DATA, STRATEGIES, GOLDEN_TRIO } from "./constants";
import { AITool, Category } from "./types";

const iconMap: Record<string, any> = {
  Brain, Search, Cpu, Palette, BookOpen, Globe, Code,
  MessageSquare, FileText, Zap, Languages, FileSearch,
  Bot, Briefcase, Layout, Layers, Book, Star, Smile, Terminal
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredTools = useMemo(() => {
    if (activeCategory === "all") return TOOLS;
    return TOOLS.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryData = useMemo(() => {
    return CATEGORIES.find(c => c.id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <Brain size={20} className="text-black" />
          </div>
          <span className="font-bold tracking-tighter text-xl">AI NEXUS</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-[#0a0a0a] border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="p-8 hidden lg:block">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                <Brain size={24} className="text-black" />
              </div>
              <div>
                <h1 className="font-bold tracking-tighter text-2xl leading-none">AI NEXUS</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Ecosystem 2026</p>
              </div>
            </div>
          </div>

          <nav className="px-4 py-4 lg:py-0 space-y-1">
            <button
              onClick={() => { setActiveCategory("all"); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeCategory === "all" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              <Layers size={18} className={activeCategory === "all" ? "text-orange-500" : "group-hover:text-orange-500"} />
              <span className="text-sm font-medium">全部工具</span>
            </button>
            
            <div className="pt-4 pb-2 px-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">分类导航</div>
            
            {CATEGORIES.map((cat) => {
              const Icon = iconMap[cat.icon] || Layers;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setIsSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeCategory === cat.id ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}
                >
                  <Icon size={18} className={activeCategory === cat.id ? "text-orange-500" : "group-hover:text-orange-500"} />
                  <span className="text-sm font-medium">{cat.shortTitle}</span>
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
            <p className="text-xs text-orange-500/80 font-medium mb-2 italic">"多模型协作 = 新生产力"</p>
            <p className="text-[10px] text-white/40 leading-relaxed">2026 真正的“高手用法”是构建属于你的 AI 工作流。</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen p-6 lg:p-12 overflow-x-hidden">
          {/* Hero Section */}
          <header className="mb-16 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Navigation Hub</h2>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
                {activeCategory === "all" ? "2026 主流 AI 全家桶" : activeCategoryData?.title}
              </h1>
              <p className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed">
                {activeCategory === "all" 
                  ? "覆盖 90%+ 全球主流 AI 工具。每个工具都有最强场景，助你一眼洞察工具边界，构建顶级生产力工作流。"
                  : activeCategoryData?.description}
              </p>
            </motion.div>
          </header>

          {/* Golden Trio Section (Only on "All") */}
          {activeCategory === "all" && (
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-24 p-8 lg:p-12 rounded-[40px] bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent border border-orange-500/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <Trophy size={200} className="text-orange-500" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="text-orange-500" size={32} />
                  <h2 className="text-3xl font-bold tracking-tight italic">如果你只选 3 个：黄金组合</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {GOLDEN_TRIO.map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-sm">
                      <div className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-2">{item.role}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-24">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, index) => {
                const Icon = iconMap[tool.icon] || Layers;
                return (
                  <motion.a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-orange-500/50 hover:bg-[#151515] transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <ExternalLink size={16} className="text-white/20 group-hover:text-orange-500 transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{tool.name}</h3>
                    <p className="text-white/40 text-sm mb-4 flex-grow">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/60 uppercase tracking-wider font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-500/80 italic">{tool.oneLiner}</span>
                      <ChevronRight size={16} className="text-white/20 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Comparison & Strategy Sections (Only on "All" or specific triggers) */}
          {activeCategory === "all" && (
            <div className="space-y-24">
              {/* Core Capability Comparison */}
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tight">核心能力对比</h2>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    {COMPARISON_DATA.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:bg-white/5 transition-colors">
                        <div className="flex flex-col">
                          <span className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.type}</span>
                          <span className="text-xl font-bold">{item.tool}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-orange-500 font-medium italic">{item.why}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-500 rounded-3xl p-12 text-black flex flex-col justify-center">
                    <h3 className="text-4xl font-black tracking-tighter mb-6 leading-none uppercase">高手用法</h3>
                    <p className="text-xl font-medium mb-8 opacity-90">不要只选一个 AI，而是构建“AI 工作流组合”。</p>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-orange-500 flex items-center justify-center font-bold shrink-0">1</div>
                        <p className="text-lg"><b>Perplexity</b> → 查资料</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-orange-500 flex items-center justify-center font-bold shrink-0">2</div>
                        <p className="text-lg"><b>ChatGPT</b> → 思考 & 输出</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-orange-500 flex items-center justify-center font-bold shrink-0">3</div>
                        <p className="text-lg"><b>DeepSeek</b> → 编程/推理</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-orange-500 flex items-center justify-center font-bold shrink-0">4</div>
                        <p className="text-lg"><b>Manus</b> → 自动执行</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Usage Strategies */}
              <section className="pb-24">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tight">真实使用策略</h2>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {STRATEGIES.map((strat, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-white/20 transition-all group">
                      <h4 className="text-lg font-bold mb-4 group-hover:text-orange-500 transition-colors">{strat.role}</h4>
                      <div className="flex items-center gap-2 text-white/40 text-sm">
                        <ArrowRight size={14} className="text-orange-500" />
                        <span>{strat.tools}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-12 text-center text-white/20 text-xs tracking-widest uppercase font-medium">
        AI Nexus 2026 &copy; Curated for High Performance Workflow
      </footer>
    </div>
  );
}
