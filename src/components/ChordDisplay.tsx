import { useEffect, useState } from "react";
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
  // salin karakter untuk baseline yang kelihatan
  const chars = line.split("");

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

      // simpan posisi buat pill
      placements.push({
        left,
        core,
        right,
        column: start,
      });

      // hapus teks chord dari baseline → ganti spasi
      for (let k = start; k < i; k++) {
        chars[k] = " ";
      }
    }
  }

  // baseline yang kelihatan: chord sudah jadi spasi, | dan % tetap ada
  const visibleLine = chars.join("");

  return (
    <>
      {/* baseline yang kelihatan */}
      <span className="chord-font text-primary whitespace-pre select-none">
        {visibleLine}
      </span>

      {/* overlay pill-chord di atas baseline */}
      <div className="absolute left-0 top-0 pointer-events-none">
        {placements.map((p, idx) => (
          <div
            key={`${keyPrefix}-ch-${idx}`}
            style={{
              position: "absolute",
              left: `calc(${p.column}ch - 0.4ch)`,
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

/* =====================================================
   MOBILE SMART SPLIT (MAX 2 BAGIAN)
   ===================================================== */

// Dynamic per-device maxLen
const useDynamicMaxLen = () => {
  const [maxLen, setMaxLen] = useState(40);

  useEffect(() => {
    const calc = () => {
      const width = window.innerWidth;

      // measure width of monospace char
      const span = document.createElement("span");
      span.style.fontFamily = "monospace";
      span.style.fontSize = "16px";
      span.style.visibility = "hidden";
      span.innerText = "W";
      document.body.appendChild(span);

      const charWidth = span.getBoundingClientRect().width;
      document.body.removeChild(span);

      const maxChars = Math.floor(width / charWidth);

      // boundary minimal biar tidak kependekan
      setMaxLen(Math.max(24, maxChars));
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return maxLen;
};

// Max 2 line split
const splitByLengthTwoParts = (raw: string, maxLen: number) => {
  const text = raw.trim();
  if (text.length <= maxLen) return [text];

  let breakPos = text.lastIndexOf(" ", maxLen);
  if (breakPos === -1) breakPos = maxLen;

  const first = text.slice(0, breakPos).trim();
  const second = text.slice(breakPos).trim();

  return [first, second];
};

const useIsMobile = (bp = 600) => {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth <= bp : false
  );
  useEffect(() => {
    const r = () => setIsMobile(window.innerWidth <= bp);
    r();
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, [bp]);
  return isMobile;
};

export const ChordDisplay = ({ chords, transpose }: ChordDisplayProps) => {
  const isMobile = useIsMobile(600);
  const dynamicMaxLen = useDynamicMaxLen();

  return (
    <div className="space-y-6">
      {chords.map((part, index) => {
        const rawLines = isMobile
          ? splitByLengthTwoParts(part.chordLyric, dynamicMaxLen)
          : [part.chordLyric];

        return (
          <div key={index} className="space-y-1">
            {part.part && (
              <h3 className="font-bold text-primary text-sm mb-3">
                [{part.part}]
              </h3>
            )}

            {rawLines.map((raw, li) => {
              const { chords: chordLine, lyric } = parseChordLyric(
                raw,
                transpose
              );

              return (
                <pre
                  key={`${index}-${li}`}
                  className="chord-font text-sm leading-snug whitespace-pre-wrap relative mb-2"
                >
                  <span className="text-primary font-semibold block mb-1 whitespace-pre relative">
                    {renderChordLine(chordLine, `l-${index}-${li}`)}
                  </span>

                  <span className="text-foreground block">{lyric}</span>
                </pre>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
