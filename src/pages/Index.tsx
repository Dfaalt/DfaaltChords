import { SearchBar } from "@/components/SearchBar";
import { SongCard } from "@/components/SongCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockSongs } from "@/data/mockSongs";
import { Disc3 } from "lucide-react";
import { useState } from "react";

export const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredSongs = mockSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header variant="home" />

      {/* Hero Section */}
      <section className="border-b border-border bg-linear-to-b from-background to-primary/5 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 leading-snug bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Find Your Favorite Song
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore guitar chords and lyrics for your favorite songs. Transpose,
            auto-scroll, and play along with ease.
          </p>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Songs Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {searchQuery ? "Search Results" : "Popular Songs"}
          </h2>
          <p className="text-muted-foreground">
            {filteredSongs.length}{" "}
            {filteredSongs.length === 1 ? "song" : "songs"} found
          </p>
        </div>

        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} {...song} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Disc3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No songs found</h3>
            <p className="text-muted-foreground">
              Try searching with different keywords
            </p>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};
