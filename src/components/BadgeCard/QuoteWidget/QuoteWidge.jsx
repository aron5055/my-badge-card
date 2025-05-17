import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function QuoteWidge({ quote }) {
  if (!quote || !quote.text) {
    return (
      <div className="p-4 text-center animate-pulse">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-[95%] mx-auto my-2 rounded-lg bg-accent/30 backdrop-blur-sm">
      <div className="relative text-center">
        <FaQuoteLeft className="absolute -top-2 -left-2 text-primary/40 text-sm" />
        <p className="text-sm font-medium italic px-4 py-2">{quote.text}</p>
        <FaQuoteRight className="absolute -bottom-2 -right-2 text-primary/40 text-sm" />
      </div>
      {quote.author && (
        <p className="text-right text-xs text-muted-foreground mt-2 pr-2">
          — {quote.author}
        </p>
      )}
    </div>
  );
}
