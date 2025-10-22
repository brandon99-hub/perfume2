interface MarqueeProps {
  text: string;
  speed?: number;
}

export function Marquee({ text, speed = 50 }: MarqueeProps) {
  return (
    <div className="overflow-hidden bg-primary text-primary-foreground py-3">
      <div 
        className="inline-block whitespace-nowrap animate-marquee"
        style={{ 
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <span className="mx-4 text-sm font-medium">{text}</span>
        <span className="mx-4 text-sm font-medium">{text}</span>
        <span className="mx-4 text-sm font-medium">{text}</span>
        <span className="mx-4 text-sm font-medium">{text}</span>
        <span className="mx-4 text-sm font-medium">{text}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-40%);
          }
        }
      `}</style>
    </div>
  );
}
