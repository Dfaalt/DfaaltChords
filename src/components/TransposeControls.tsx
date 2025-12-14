import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface TransposeControlsProps {
  transpose: number;
  onTransposeUp: () => void;
  onTransposeDown: () => void;
}

export const TransposeControls = ({
  transpose,
  onTransposeUp,
  onTransposeDown,
}: TransposeControlsProps) => {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-2">
      <span className="text-sm font-medium text-foreground">Transpose</span>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTransposeDown}
          className="h-8 w-8 p-0 cursor-pointer"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="px-3 py-1 bg-muted rounded text-sm font-semibold min-w-[50px] text-center">
          {transpose > 0 ? `+${transpose}` : transpose}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onTransposeUp}
          className="h-8 w-8 p-0 cursor-pointer"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
