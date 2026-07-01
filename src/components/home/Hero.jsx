import { Sparkles, Play } from "lucide-react";
import { appInfo } from "../../constants/appInfo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0a0e1a] min-h-[460px] flex items-center px-8 md:px-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${appInfo.pic}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-red-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-amber-500/30 bg-amber-500/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-400">
            {appInfo.badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {appInfo.title.first}{" "}
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            {appInfo.title.highlighted}
          </span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
          {appInfo.description}
        </p>

        <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/30">
          <Play className="w-4 h-4 fill-white" />
          {appInfo.cta.text}
        </button>
      </div>
    </section>
  );
}
