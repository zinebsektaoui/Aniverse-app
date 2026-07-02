import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorState({
  message = "Something went wrong while loading the data.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
        <AlertTriangle className="w-7 h-7 text-red-400" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-1">
          Oops, something broke
        </h3>
        <p className="text-sm text-slate-400 max-w-sm">{message}</p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/30"
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      )}
    </div>
  );
}
