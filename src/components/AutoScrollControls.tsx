import { Pause, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface AutoScrollControlsProps {
  isScrolling: boolean;
  speed: number;
  onToggleScroll: () => void;
  onSpeedChange: (speed: number) => void;
}

export const AutoScrollControls = ({
  isScrolling,
  speed,
  onToggleScroll,
  onSpeedChange,
}: AutoScrollControlsProps) => {
  return (
    <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
      <Button
        variant={isScrolling ? "default" : "outline"}
        size="sm"
        onClick={onToggleScroll}
        className="min-w-[120px]"
      >
        {isScrolling ? (
          <>
            <Pause className="h-4 w-4 mr-2" />
            Pause Scroll
          </>
        ) : (
          <>
            <Play className="h-4 w-4 mr-2" />
            Auto Scroll
          </>
        )}
      </Button>
      <div className="flex items-center gap-3 flex-1 max-w-xs">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Speed:
        </span>
        <Slider
          value={[speed]}
          onValueChange={(value) => onSpeedChange(value[0])}
          min={1}
          max={10}
          step={1}
          className="flex-1"
        />
        <span className="text-sm font-medium min-w-5">{speed}</span>
      </div>
    </div>
  );
};
