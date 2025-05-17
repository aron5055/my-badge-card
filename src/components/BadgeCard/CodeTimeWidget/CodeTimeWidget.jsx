import { FaClock, FaCode } from "react-icons/fa";

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
          <span className="font-semibold">{time || "加载中..."}</span>
        </div>
      </div>
    </div>
  );
}
