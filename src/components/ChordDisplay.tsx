import type { ChordPart } from "@/data/mockSongs";
import { transposeChordLine } from "@/utils/chordTransposer";
import { ChordHover } from "./ChordHover";

interface ChordDisplayProps {
  chords: ChordPart[];
  transpose: number;
}

// Helper: parse "[G]Like a drum [Em7]don't stop" jadi 2 baris:
// chords: "G                 Em7       ..."
// lyric:  "Like a drum      don't stop..."
const parseChordLyric = (input: string, transpose: number) => {
  let lyric = "";
  let chords = "";

  let i = 0;
  while (i < input.length) {
    if (input[i] === "[") {
      // ambil chord di dalam [ ... ]
      let j = i + 1;
      let chordRaw = "";
      while (j < input.length && input[j] !== "]") {
        chordRaw += input[j];
        j++;
      }

      // transpose chord
      const transposedChord = transposeChordLine(chordRaw, transpose).trim();

      // posisikan chord di atas karakter lyric sekarang
      while (chords.length < lyric.length) {
        chords += " ";
      }
      chords += transposedChord;

      i = j + 1; // lompat setelah ']'
    } else {
      // karakter biasa → masuk lyric
      lyric += input[i];

      // jaga panjang chords minimal sama dengan lyric (diisi spasi)
      if (chords.length < lyric.length) {
        chords += " ";
      }

      i++;
    }
  }

  return { chords, lyric };
};

// buang kurung luar, tapi simpan biar bisa dirender lagi di UI
const extractChordCore = (token: string) => {
  const trimmed = token.trim();
  let left = "";
  let right = "";
  let core = trimmed;

  if (core.startsWith("(")) {
    left = "(";
    core = core.slice(1);
  }

  if (core.endsWith(")")) {
    right = ")";
    core = core.slice(0, -1);
  }

  return { left, core, right };
};

// Regex simple untuk deteksi token chord (G, Em7, Cadd9, A7sus4, G/B, dll)
const isChordToken = (token: string) => {
  const { core } = extractChordCore(token);
  return /^[A-G][b#]?[0-9A-Za-z/#+]*$/.test(core);
};

/**
 * Render baris chord (string) menjadi kombinasi:
 * - spasi biasa → <span>   </span>
 * - token chord → <ChordHover />
 * supaya style chord tetap pakai pill HoverCard
 */
const renderChordLine = (line: string, keyPrefix: string) => {
  const nodes: React.ReactNode[] = [];
  let current = "";
  let currentIsSpace = line[0] === " ";
  let idx = 0;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    const isSpace = ch === " ";

    if (isSpace === currentIsSpace) {
      current += ch;
    } else {
      // flush segmen sebelumnya
      if (current) {
        if (currentIsSpace) {
          nodes.push(<span key={`${keyPrefix}-sp-${idx++}`}>{current}</span>);
        } else {
          const token = current.trim();
          if (token && isChordToken(token)) {
            const { left, core, right } = extractChordCore(token);

            nodes.push(
              <span
                key={`${keyPrefix}-ch-${idx++}`}
                className="inline-block align-baseline"
              >
                {left && <span>{left}</span>}
                <ChordHover rawChord={core} />
                {right && <span>{right}</span>}
              </span>
            );
          } else {
            nodes.push(<span key={`${keyPrefix}-tx-${idx++}`}>{current}</span>);
          }
        }
      }

      current = ch;
      currentIsSpace = isSpace;
    }
  }

  // flush segmen terakhir
  if (current) {
    if (currentIsSpace) {
      nodes.push(<span key={`${keyPrefix}-sp-last`}>{current}</span>);
    } else {
      const token = current.trim();
      if (token && isChordToken(token)) {
        nodes.push(
          <span
            key={`${keyPrefix}-ch-last`}
            className="inline-block align-baseline"
          >
            <ChordHover rawChord={token} />
          </span>
        );
      } else {
        nodes.push(<span key={`${keyPrefix}-tx-last`}>{current}</span>);
      }
    }
  }

  return nodes;
};

export const ChordDisplay = ({ chords, transpose }: ChordDisplayProps) => {
  return (
    <div className="space-y-6">
      {chords.map((part, index) => {
        const { chords: chordLine, lyric } = parseChordLyric(
          part.chordLyric,
          transpose
        );

        return (
          <div key={index} className="space-y-1">
            {part.part && (
              <h3 className="font-bold text-primary text-sm mb-3">
                [{part.part}]
              </h3>
            )}

            <pre className="chord-font text-sm leading-snug whitespace-pre-wrap wrap-break-words">
              {/* Baris chord – tetap di atas lirik */}
              <span className="text-primary font-semibold block mb-1 whitespace-pre">
                {renderChordLine(chordLine, `line-${index}`)}
              </span>

              {/* Baris lirik – boleh wrap ke bawah di mobile */}
              <span className="text-foreground block">{lyric}</span>
            </pre>
          </div>
        );
      })}
    </div>
  );
};
