import { Bookmark } from "lucide-react";


const STATUS_STYLES = {
    Watching: "bg-emerald-500/15 text-emerald-400",
    "Plan to Watch": "bg-blue-500/15 text-blue-400",
    Completed: "bg-purple-500/15 text-purple-400",
};

export function LibraryCard({ item }) {
    return (
      <div className="flex gap-4 bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 w-full max-w-md">
        <img src = {item.images?.jpg?.image_url} alt={item.title}className="w-20 h-28 object-cover rounded-md flex-shrink-0 bg-slate-900" />
        <div className="flex flex-col flex-1 min-w-0">
          <span
            className={`inline-flex items-center gap-1 self-start text-[11px] font-semibold uppercase tracking-wide px-2 py-1 rounded-md mb-2 ${
              STATUS_STYLES[item.status] ?? "bg-slate-600/30 text-slate-300"
            }`}
          >
            <Bookmark size={12} />
            {item.status}
          </span>
  
          <h3 className="text-white font-semibold text-base mb-2">
            {item.title}
          </h3>
  
          <button className="mt-auto self-start text-sm font-medium text-slate-200 bg-slate-700/70 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Start Watching
          </button>
        </div>
      </div>
    );
  }