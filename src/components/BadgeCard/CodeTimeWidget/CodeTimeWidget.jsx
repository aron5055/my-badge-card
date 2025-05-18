import { FaClock, FaCode } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

export default function CodeTimeWidget({ time }) {
  return (
    <div className="flex items-center justify-center gap-2 p-3 mt-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
        <FaCode className="text-primary/70" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          近七天编码时长
        </span>
        <div className="flex items-center">
          <FaClock className="inline-block mr-1 text-xs text-primary/60" />
          {time ? (
            <span className="font-semibold">{time}</span>
          ) : (
            <Skeleton className="h-4 w-3/4" />
          )}
        </div>
      </div>
    </div>
  );
}
