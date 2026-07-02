export default function Spinner({ size = "md", label = "Loading..." }) {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-[3px]",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div className="relative">
        {/* Track */}
        <div className={`${sizes[size]} rounded-full border-white/10`} />
        {/* Spinning gradient arc */}
        <div
          className={`${sizes[size]} absolute inset-0 rounded-full border-transparent border-t-orange-500 border-r-pink-600 animate-spin`}
        />
      </div>
      {label && (
        <span className="text-sm text-slate-400 font-medium">{label}</span>
      )}
    </div>
  );
}
