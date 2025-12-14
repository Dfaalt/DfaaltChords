import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-4 md:h-16 flex flex-col md:flex-row items-center md:justify-between gap-2">
        {/* Text */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Dfaalt Chords. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/ilham-maulana1101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/dfaalt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
