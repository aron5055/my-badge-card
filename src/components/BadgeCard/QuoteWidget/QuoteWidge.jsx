import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

export default function QuoteWidge({ quote }) {
  if (!quote || !quote.text) {
    return (
      <div className="p-4 max-w-[95%] mx-auto my-2">
        <div className="mb-2">
          <Skeleton className="h-5 w-3/4 mx-auto mb-2" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-2" />
        </div>
        <Skeleton className="h-4 w-1/4 ml-auto" />
      </div>
    );
  }

  return (
    <div className="p-4 max-w-full mx-auto my-2">
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
