import { AutoScrollControls } from "@/components/AutoScrollControls";
import { ChordDisplay } from "@/components/ChordDisplay";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TransposeControls } from "@/components/TransposeControls";
import { Button } from "@/components/ui/button";
import { mockSongs } from "@/data/mockSongs";
import { ArrowLeft, Guitar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SongDetail = () => {
  const { id } = useParams();
  const song = mockSongs.find((s) => s.id === Number(id));
  const [transpose, setTranspose] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(3);
  const scrollRef = useRef<NodeJS.Timeout | null>(null);

  const MAX_TRANSPOSE = 11;
  const MIN_TRANSPOSE = -11;

  const handleTransposeUp = () => {
    setTranspose((prev) => (prev < MAX_TRANSPOSE ? prev + 1 : prev));
  };

  const handleTransposeDown = () => {
    setTranspose((prev) => (prev > MIN_TRANSPOSE ? prev - 1 : prev));
  };

  useEffect(() => {
    if (isScrolling) {
      scrollRef.current = setInterval(() => {
        window.scrollBy({
          top: 0.4,
          behavior: "smooth",
        });
      }, 100 / scrollSpeed);
    } else {
      if (scrollRef.current) {
        clearInterval(scrollRef.current);
      }
    }

    return () => {
      if (scrollRef.current) {
        clearInterval(scrollRef.current);
      }
    };
  }, [isScrolling, scrollSpeed]);

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Song not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Guitar className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">Dfaalt Chords</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Song Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{song.title}</h1>
          <p className="text-xl text-muted-foreground">{song.artist}</p>
        </div>

        {/* Controls */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur pb-6 space-y-4">
          <TransposeControls
            transpose={transpose}
            onTransposeUp={handleTransposeUp}
            onTransposeDown={handleTransposeDown}
          />
          <AutoScrollControls
            isScrolling={isScrolling}
            speed={scrollSpeed}
            onToggleScroll={() => setIsScrolling(!isScrolling)}
            onSpeedChange={setScrollSpeed}
          />
        </div>

        {/* Chords & Lyrics */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm w-full overflow-hidden">
          <ChordDisplay chords={song.chords} transpose={transpose} />
        </div>
      </div>
    </div>
  );
};
