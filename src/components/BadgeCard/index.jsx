import { useState } from "react";
import { FrontFace } from "./FrontFace";
import { BackFace } from "./BackFace";
import { cn } from "@/lib/utils";
import "./BadgeCard.css";

function BadgeCard({ config }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((f) => !f);

  return (
    <div className="badge-card-container">
      <div className={cn("badge-card-inner", flipped ? "flipped" : "")}>
        <FrontFace config={config} handleFlip={handleFlip} />
        <BackFace config={config} handleFlip={handleFlip} />
      </div>
    </div>
  );
}

export default BadgeCard;
