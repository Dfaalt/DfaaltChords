import { Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

interface SongCardProps {
  id: number;
  title: string;
  artist: string;
}

export const SongCard = ({ id, title, artist }: SongCardProps) => {
  return (
    <Link to={`/song/${id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-1 truncate text-foreground">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm truncate">{artist}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
