import { useState } from "react";
import { FrontFace } from "./FrontFace";
import { BackFace } from "./BackFace";
import { cn } from "@/lib/utils";
import "./styles.css";

function BadgeCard({ config }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((f) => !f);

  return (
    <div
      className="relative w-[280px] h-[420px] mt-[-10%] translate-z-0"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className={cn("badge-card-inner", flipped ? "flipped" : "")}>
        <FrontFace config={config} handleFlip={handleFlip} />
        <BackFace config={config} handleFlip={handleFlip} />
      </div>
    </div>
  );
}

export default BadgeCard;
