import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { LuRefreshCw } from "react-icons/lu";

export function BackFace({ handleFlip }) {
  return (
    <Card className="card-face back-face">
      <CardContent className="p-0 flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Back Side</h2>
          <p className="text-muted-foreground">
            Additional information goes here
          </p>
        </div>
      </CardContent>
      <Button
        className="absolute bottom-2 right-2 rounded-full"
        variant="outline"
        size="icon"
        onClick={handleFlip}
      >
        <LuRefreshCw className="h-4 w-4" />
        <span className="sr-only">翻转</span>
      </Button>
    </Card>
  );
}
