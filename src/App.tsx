import { 
  Play, 
  Trophy, 
  TrendingUp, 
  Bell, 
  Flame, 
  Clock,
  Activity,
  ChevronRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Match } from './types.ts';

const matches: Match[] = [
  {
    id: '1',
    team1: 'Real Madrid',
    team2: 'Manchester City',
    time: '8:00 PM',
    prediction: 'Real Madrid Win',
    odds: '2.10',
    league: 'UEFA Champions League',
    probability: 78
  },
  {
    id: '2',
    team1: 'Barcelona',
    team2: 'Arsenal',
    time: '10:00 PM',
    prediction: 'Both Teams Score',
    odds: '1.80',
    league: 'UEFA Champions League',
    probability: 82
  },
  {
    id: '3',
    team1: 'Liverpool',
    team2: 'PSG',
    time: '11:30 PM',
    prediction: 'Over 2.5 Goals',
    odds: '1.95',
    league: 'UEFA Champions League',
    probability: 85
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500/30">
      
      {/* HEADER */}
      <header className="border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent tracking-tighter">
              GoalPlus Premium
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                Live Analytics • Predictive AI
              </p>
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest px-4">
              VIP Analysis
            </button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-2xl font-bold shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all flex items-center gap-2 group"
            >
              Go Premium
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 md:p-12 mb-10 group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-green-500/10 transition-colors duration-700" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-yellow-500 uppercase tracking-[0.3em] text-[10px] font-black mb-6">
              <div className="p-1 px-2 border border-yellow-500/20 rounded-md bg-yellow-500/5 flex items-center gap-2">
                <Trophy size={14} className="animate-bounce" />
                Featured Match
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                  REAL MADRID
                  <span className="text-zinc-600 block text-3xl md:text-4xl mt-2 italic font-light italic-serif-style">vs Manchester City</span>
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed font-light">
                  Our advanced neural model predicts a high-intensity offensive battle. 
                  Madrid's tactical flexibility at the Bernabéu creates a <span className="text-green-500 font-bold">78%</span> edge in the primary market.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <div className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-5 py-2.5 rounded-2xl font-black text-xs tracking-widest animate-pulse whitespace-nowrap">
                    <Activity size={14} />
                    LIVE NOW
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-5 py-2.5 rounded-2xl font-black text-xs tracking-widest whitespace-nowrap">
                    <Target size={14} />
                    Odds 2.10
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black hover:bg-green-500 hover:text-white px-10 py-6 rounded-3xl font-black text-lg shadow-2xl shadow-green-500/20 transition-all active:scale-95 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
                WATCH STREAM
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* PERFORMANCE STATS */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <StatCard 
            icon={<Bell className="text-green-400" size={24} />}
            value="150+"
            label="Live Matches Daily"
            delay={0.1}
          />
          <StatCard 
            icon={<TrendingUp className="text-yellow-400" size={24} />}
            value="91.4%"
            label="AI Accuracy (Last 30d)"
            delay={0.2}
          />
          <StatCard 
            icon={<Flame className="text-red-400" size={24} />}
            value="HOT"
            label="Trending Signals"
            delay={0.3}
          />
        </section>

        {/* PREDICTIONS FEED */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-black tracking-tight">Active Indicators</h2>
              <p className="text-zinc-500 text-sm font-medium">Real-time forecasting across 40+ global leagues</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zinc-600 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              {matches.length} streams online
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {matches.map((match, index) => (
                <MatchCard key={match.id} match={match} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* VIP BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              <ShieldCheck className="text-black w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">Platinum Access</h3>
              <p className="text-zinc-400 max-w-md">Unlock hidden markets, value bets, and detailed probability breakdowns from our master algorithm.</p>
            </div>
          </div>

          <button className="relative z-10 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-zinc-700">
            Join the Elite
          </button>
        </motion.div>
      </main>

      <footer className="mt-20 border-t border-zinc-900 bg-black pt-16 pb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
                GoalPlus Premium
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-8">
                The world's most advanced football prediction engine. Built for performance, 
                designed for precision.
              </p>
              <div className="flex items-center gap-4">
                <SocialLink icon="X" />
                <SocialLink icon="IG" />
                <SocialLink icon="YT" />
              </div>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <FooterColumn title="Platform" links={['Live Scores', 'Predictions', 'AI Insights', 'VIP Tools']} />
              <FooterColumn title="Company" links={['About', 'Careers', 'Contact', 'Journal']} />
              <FooterColumn title="Support" links={['Help Center', 'Safety', 'Status']} />
              <FooterColumn title="Legal" links={['Privacy', 'Terms', 'Responsible Play']} />
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-mono">
            <p>© 2026 GoalPlus Media Hub. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button className="hover:text-green-500 transition-colors">VERSION 2.4.1</button>
              <button className="hover:text-green-500 transition-colors">AUTO_SYNC_ACTIVE</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, value, label, delay }: { icon: React.ReactNode, value: string, label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-zinc-900/40 border border-zinc-800/80 rounded-[30px] p-8 backdrop-blur-sm group hover:border-zinc-700 transition-all"
    >
      <div className="p-3 bg-black/40 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-4xl font-black tracking-tight mb-2 group-hover:text-green-400 transition-colors">
        {value}
      </h3>
      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
}

function MatchCard({ match, index }: { match: Match, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900/30 border border-zinc-800/50 rounded-[35px] p-7 hover:border-green-500/30 transition-all group relative overflow-hidden backdrop-blur-md flex flex-col h-full"
    >
      {/* STATUS BADGE */}
      <div className="flex items-center justify-between mb-8">
        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest ${
          match.id === '1' 
            ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
            : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50'
        }`}>
          {match.id === '1' ? 'LIVE' : 'UPCOMING'}
        </span>
        <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
          <Clock size={12} className="text-zinc-600" />
          {match.time}
        </div>
      </div>

      {/* TEAMS */}
      <div className="mb-8 flex-1">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight group-hover:text-green-400 transition-colors">
              {match.team1}
            </h3>
            <div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-50" />
            </div>
          </div>
          <div className="text-zinc-700 font-mono text-xs uppercase tracking-widest flex items-center gap-3 before:h-px before:flex-1 before:bg-zinc-800/50 after:h-px after:flex-1 after:bg-zinc-800/50">
            vs
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight">
              {match.team2}
            </h3>
             <div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* PREDICTION WIDGET */}
      <div className="bg-black/60 border border-zinc-800 rounded-2xl p-5 mb-8 relative overflow-hidden group-hover:border-zinc-700 transition-colors">
        <div className="absolute top-0 right-0 p-2 opacity-5">
          <TrendingUp size={48} />
        </div>
        <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em] mb-3">
          <TrendingUp size={12} className="text-yellow-400" />
          Precision Forecast
        </div>
        <p className="text-yellow-400 text-xl font-black tracking-tighter">
          {match.prediction}
        </p>
      </div>

      {/* ODDS & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
        <div>
          <p className="text-zinc-600 text-[10px] uppercase font-black tracking-widest mb-1.5">Market Odds</p>
          <p className="text-3xl font-black font-mono tracking-tighter text-white">
            {match.odds}
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black hover:bg-green-500 hover:text-white px-6 py-4 rounded-2xl font-black transition-all active:scale-95 text-xs tracking-tighter group/btn shadow-xl shadow-white/5">
          <Play size={14} fill="currentColor" className="group-hover/btn:scale-110 transition-transform" />
          STREAM
        </button>
      </div>
    </motion.div>
  );
}

function SocialLink({ icon }: { icon: string }) {
  return (
    <button className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-green-500/50 transition-all font-black text-xs">
      {icon}
    </button>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-zinc-300 text-[10px] uppercase tracking-[0.3em] font-black border-b border-zinc-900 pb-2">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map(link => (
          <button key={link} className="text-zinc-500 hover:text-green-400 text-sm transition-colors text-left font-medium">
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}
