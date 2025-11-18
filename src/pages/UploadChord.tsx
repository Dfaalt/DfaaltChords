import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Music2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner"; // ⬅️ pakai Sonner

interface ChordSection {
  part: string;
  content: string;
  lyric: string;
}

export const UploadChord = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [sections, setSections] = useState<ChordSection[]>([
    { part: "Verse 1", content: "", lyric: "" },
  ]);

  const addSection = () => {
    setSections([...sections, { part: "", content: "", lyric: "" }]);
  };

  const removeSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const updateSection = (
    index: number,
    field: keyof ChordSection,
    value: string
  ) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist) {
      toast.error("Error", {
        description: "Please fill in title and artist",
      });
      return;
    }

    const newSong = {
      title,
      artist,
      chords: sections,
    };

    console.log("New song:", newSong);

    toast.success("Success!", {
      description: "Song uploaded successfully",
    });

    // Reset form
    setTitle("");
    setArtist("");
    setSections([{ part: "Verse 1", content: "", lyric: "" }]);
  };

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
            <Music2 className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">ChordHub</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Upload New Song</h1>
          <p className="text-muted-foreground">
            Add chords and lyrics for a new song
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Song Info */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div>
              <Label htmlFor="title">Song Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Perfect"
                required
              />
            </div>
            <div>
              <Label htmlFor="artist">Artist *</Label>
              <Input
                id="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="e.g., Ed Sheeran"
                required
              />
            </div>
          </div>

          {/* Chord Sections */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Chord Sections</h2>
              <Button type="button" onClick={addSection} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </div>

            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Label>Section {index + 1}</Label>
                  {sections.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSection(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div>
                  <Label htmlFor={`part-${index}`}>
                    Part Name (e.g., Verse 1, Chorus)
                  </Label>
                  <Input
                    id={`part-${index}`}
                    value={section.part}
                    onChange={(e) =>
                      updateSection(index, "part", e.target.value)
                    }
                    placeholder="Verse 1"
                  />
                </div>

                <div>
                  <Label htmlFor={`chords-${index}`}>Chords</Label>
                  <Input
                    id={`chords-${index}`}
                    value={section.content}
                    onChange={(e) =>
                      updateSection(index, "content", e.target.value)
                    }
                    placeholder="G  Em  C  D"
                    className="chord-font"
                  />
                </div>

                <div>
                  <Label htmlFor={`lyrics-${index}`}>Lyrics</Label>
                  <Textarea
                    id={`lyrics-${index}`}
                    value={section.lyric}
                    onChange={(e) =>
                      updateSection(index, "lyric", e.target.value)
                    }
                    placeholder="I found a love for me..."
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Upload Song
          </Button>
        </form>
      </div>
    </div>
  );
};
