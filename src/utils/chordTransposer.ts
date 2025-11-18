const chordMap = [
  ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
];

const chordRegex = /([A-G][#b]?)(maj|min|m|sus|aug|dim|add)?([0-9])?/g;

export const transposeChord = (chord: string, semitones: number): string => {
  if (!chord.trim()) return chord;

  return chord.replace(
    chordRegex,
    (match, root, modifier = "", number = "") => {
      // Find the root note in either sharp or flat notation
      let index = -1;
      let useSharp = true;

      for (let i = 0; i < chordMap[0].length; i++) {
        if (chordMap[0][i] === root) {
          index = i;
          useSharp = true;
          break;
        }
        if (chordMap[1][i] === root) {
          index = i;
          useSharp = false;
          break;
        }
      }

      if (index === -1) return match;

      // Transpose
      let newIndex = (index + semitones) % 12;
      if (newIndex < 0) newIndex += 12;

      // Return the transposed chord with modifier
      const notation = useSharp ? 0 : 1;
      return chordMap[notation][newIndex] + modifier + number;
    }
  );
};

export const transposeChordLine = (line: string, semitones: number): string => {
  return transposeChord(line, semitones);
};
