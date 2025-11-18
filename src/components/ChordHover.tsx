import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import ChordDiagram from "@techies23/react-chords";
import guitarJson from "@tombatossals/chords-db/lib/guitar.json";

interface ChordHoverProps {
  rawChord: string;
}

// --- Instrument manual (ini yang dibutuhkan react-chords) ---
const GUITAR_INSTRUMENT = {
  strings: 6,
  fretsOnChord: 4,
  name: "Guitar",
  keys: [],
  tunings: {
    standard: ["E", "A", "D", "G", "B", "E"],
  },
};

// --- Bentuk data dari guitar.json ---

type DbPosition = {
  frets: (number | string)[];
  fingers?: (number | null)[];
  barres?: number[];
  capo?: boolean;
};

type DbChordVariant = {
  suffix: string;
  positions: DbPosition[];
};

type GuitarDb = {
  chords: Record<string, DbChordVariant[]>;
};

// handle kemungkinan ada `.default`
const getGuitarDb = (): GuitarDb => {
  const dbAny = (guitarJson as any).default ?? guitarJson;
  return dbAny as GuitarDb;
};

// --- Helper chord name ---

const cleanChordLabel = (raw: string) => {
  let label = raw?.trim?.() ?? "";

  // buang [ ], ( )
  label = label.replace(/[\[\]()]/g, "");

  return label.trim();
};

const mapSuffix = (suffix: string): string => {
  // biarin slash chord apa adanya (/B, /G, m/B, dst)
  if (suffix.startsWith("/")) return suffix;
  if (suffix.startsWith("m/")) return suffix;

  const table: Record<string, string> = {
    "": "major",

    // Em → minor (karena di DB ada "minor")
    m: "minor",
    min: "minor",

    // Emaj7 → maj7 (DB pakai "maj7")
    maj: "major",
    maj7: "maj7",

    // Em7 → m7 (DB pakai "m7")
    m7: "m7",
    min7: "m7",

    "7": "7",
    sus2: "sus2",
    sus4: "sus4",
    "7sus4": "7sus4",
    add9: "add9",
    dim: "dim",
    dim7: "dim7",
  };

  return table[suffix] ?? suffix;
};

const parseChordName = (
  rawChord?: string
): { key: string; suffix: string } | null => {
  if (!rawChord) return null;

  const cleaned = cleanChordLabel(rawChord);
  if (!cleaned) return null;

  if (!/[A-G]/.test(cleaned[0])) return null;

  const match = cleaned.match(/^([A-G][b#]?)(.*)$/);
  if (!match) return null;

  const [, key, suffixRaw] = match;
  const suffix = mapSuffix((suffixRaw || "").trim());

  return { key, suffix };
};

// ambil 1 posisi chord dari database (positions[0])
const getGuitarChordShape = (rawChord: string): DbPosition | null => {
  const parsed = parseChordName(rawChord);
  if (!parsed) return null;

  const { key, suffix } = parsed;
  const db = getGuitarDb();

  const variants = db.chords[key];
  if (!Array.isArray(variants) || variants.length === 0) return null;

  const variant = variants.find((v) => v.suffix === suffix) ?? variants[0]; // fallback posisi pertama kalau suffix ga ketemu

  if (!variant.positions || variant.positions.length === 0) return null;

  return variant.positions[0];
};

// --- Komponen utama ---

export const ChordHover = ({ rawChord }: ChordHoverProps) => {
  const label = cleanChordLabel(rawChord);

  if (!label) {
    // bukan chord valid → render plain text
    return <span>{rawChord}</span>;
  }

  const chordShape = getGuitarChordShape(label);

  const trigger = (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 text-xs font-semibold hover:bg-muted/80"
    >
      {label}
    </button>
  );

  // kalau shape nggak ketemu di database → cuma pill saja, tanpa diagram
  if (!chordShape) {
    return trigger;
  }

  return (
    <HoverCard openDelay={80} closeDelay={80}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>

      <HoverCardContent className="w-[200px] min-w-0 p-1 rounded-md bg-white text-slate-900 border border-slate-200 shadow-xl dark:bg-white dark:text-slate-900 dark:border-slate-200">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold text-slate-900">{label}</span>

          <ChordDiagram
            chord={chordShape as any}
            instrument={GUITAR_INSTRUMENT as any}
            lite={false}
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
