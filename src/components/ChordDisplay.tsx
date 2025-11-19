import type { ChordPart } from "@/data/mockSongs";
import { transposeChordLine } from "@/utils/chordTransposer";
import { ChordHover } from "./ChordHover";

interface ChordDisplayProps {
  chords: ChordPart[];
  transpose: number;
}

// Helper: parse "[G]Like a drum [Em7]don't stop" jadi 2 baris:
// chords: "G                Em7       ..."
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

// Posisi chord dalam 1 baris (pakai index kolom)
type ChordPlacement = {
  left: string;
  core: string;
  right: string;
  column: number; // posisi mulai chord (dalam karakter)
};

/**
 * Render baris chord (string) menjadi:
 * - baseline monospace tak terlihat (buat jaga lebar & alignment)
 * - overlay pill <ChordHover> di posisi kolom yang sama
 */
const renderChordLine = (line: string, keyPrefix: string) => {
  if (!line) return null;

  const placements: ChordPlacement[] = [];

  let i = 0;
  while (i < line.length) {
    // skip spasi
    if (line[i] === " ") {
      i++;
      continue;
    }

    // ambil token non-spasi (kandidat chord)
    const start = i;
    let token = "";

    while (i < line.length && line[i] !== " ") {
      token += line[i];
      i++;
    }

    if (token && isChordToken(token)) {
      const { left, core, right } = extractChordCore(token);

      placements.push({
        left,
        core,
        right,
        column: start,
      });
    }
  }

  return (
    <>
      {/* baseline monospace tak terlihat → jaga lebar & posisi */}
      <span className="opacity-0 select-none">{line}</span>

      {/* overlay pill-chord di atas baseline */}
      <div className="absolute left-0 top-0 pointer-events-none">
        {placements.map((p, idx) => (
          <div
            key={`${keyPrefix}-ch-${idx}`}
            style={{
              position: "absolute",
              left: `calc(${p.column}ch - 0.4ch)`, // 1ch = lebar 1 karakter monospace
              top: 0,
              pointerEvents: "auto",
            }}
          >
            {p.left && <span>{p.left}</span>}
            <ChordHover rawChord={p.core} />
            {p.right && <span>{p.right}</span>}
          </div>
        ))}
      </div>
    </>
  );
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

            <pre className="chord-font text-sm leading-snug whitespace-pre-wrap wrap-break-words relative">
              {/* Baris chord – baseline + overlay pill */}
              <span className="text-primary font-semibold block mb-1 whitespace-pre relative">
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
