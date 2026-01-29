export default function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span className={`px-4 py-1.5 rounded-full border ${color} text-[10px] font-mono tracking-widest bg-white/5 backdrop-blur-sm uppercase`}>
      {text}
    </span>
  );
}