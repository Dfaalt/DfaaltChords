import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Guitar, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  variant?: "home" | "detail";
}

export const Header = ({ variant = "home" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left */}
        {variant === "detail" ? (
          <Link to="/">
            <Button variant="ghost" size="sm" className="cursor-pointer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Guitar className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Dfaalt Chords</span>
          </div>
        )}

        {/* Center (Detail only) */}
        {variant === "detail" && (
          <div className="flex items-center gap-2">
            <Guitar className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">Dfaalt Chords</span>
          </div>
        )}

        {/* Right */}
        <div className="flex items-center gap-2">
          {variant === "home" && (
            <Link to="/upload">
              <Button variant="outline" size="sm" className="cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Upload Chord
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
