export interface ChordPart {
  part?: string;
  chordLyric: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  chords: ChordPart[];
}

export const mockSongs: Song[] = [
  // 1. Perfect
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    chords: [
      // Intro
      { part: "Intro", chordLyric: "[G]" },

      // Verse 1
      {
        part: "Verse 1",
        chordLyric: "I found a [G]love for [Em]me",
      },
      {
        chordLyric: "Darling, just [C]dive right in, and follow my [D]lead",
      },
      {
        chordLyric: "Well, I found a [G]girl beauti[Em]ful and sweet",
      },
      {
        chordLyric: "I never [C]knew you were the someone waiting for [D]me",
      },

      // Pre-Chorus 1
      {
        part: "Pre-Chorus",
        chordLyric: "Cause we were just kids when we [G]fell in love",
      },
      {
        chordLyric:
          "Not knowing [Em]what it was, I will not [C]give you up this [G]ti-[D]ime",
      },
      {
        chordLyric: "Darling just [G]kiss me slow, your heart is [Em]all I own",
      },
      {
        chordLyric: "And in your [C]eyes you're holding mi[D]ne",
      },

      // Chorus 1
      {
        part: "Chorus",
        chordLyric:
          "Baby, [Em]I'm d[C]ancing in the [G]dark, with [D]you between my [Em]arms",
      },
      {
        chordLyric:
          "[C]Barefoot on the [G]grass, [D]listening to our [Em]favourite song",
      },
      {
        chordLyric:
          "When you [C]said you looked a [G]mess, I whispered [D]underneath my [Em]breath",
      },
      {
        chordLyric:
          "But you h[C]eard it, darling, [G]you look [D]perfect ton[G]ight",
      },

      // Instrumental
      {
        part: "Instrumental",
        chordLyric: "[(G) D/F# Em D | C  D]",
      },

      // Verse 2
      {
        part: "Verse 2",
        chordLyric: "Well, I found a [G]woman, stronger than [Em]anyone I know",
      },
      {
        chordLyric:
          "She shares my [C]dreams, I hope that someday I'll share her [D]home",
      },
      {
        chordLyric: "I found a [G]love, to carry [Em]more than just my secrets",
      },
      {
        chordLyric: "To carry [C]love, to carry children of our [D]own",
      },

      // Pre-Chorus 2
      {
        part: "Pre-Chorus",
        chordLyric:
          "We are still kids, but we're [G]so in love, fighting a[Em]gainst all odds",
      },
      {
        chordLyric: "I know we'll [C]be alright this [G]ti-[D]ime",
      },
      {
        chordLyric:
          "Darling just [G]hold my hand, be my girl, I'll [Em]be your man",
      },
      {
        chordLyric: "I see my [C]future in your e[D]yes",
      },

      // Chorus 2
      {
        part: "Chorus",
        chordLyric:
          "Baby, [Em]I'm d[C]ancing in the d[G]ark, with [D]you between my [Em]arms",
      },
      {
        chordLyric:
          "[C]Barefoot on the [G]grass, [D]listening to our [Em]favourite song",
      },
      {
        chordLyric:
          "When I [C]saw you in that [G]dress, looking so [D]beautiful",
      },
      {
        chordLyric:
          "I [Em]don't de[C]serve this, darling, [G]you look [D]perfect to[G]night",
      },

      // Interlude
      {
        part: "Interlude",
        chordLyric: "[|(G) | G | Em | % |]",
      },
      {
        chordLyric: "[| C | % | D | % |]",
      },

      // Chorus 3
      {
        part: "Chorus",
        chordLyric:
          "Baby, [Em]I'm d[C]ancing in the [G]dark, with [D]you between my [Em]arms",
      },
      {
        chordLyric:
          "[C]Barefoot on the [G]grass, [D]listening to our [Em]favourite song",
      },
      {
        chordLyric:
          "I have f[C]aith in what I [G]see, now I [D]know I have met an [Em]angel",
      },
      {
        chordLyric: "[C]In person, and [G]she looks [D]perfect",
      },

      // Outro
      {
        part: "Outro",
        chordLyric:
          "I [G/B]don't de[C]serve this, [Dsus4]you look [D]perfect ton[G]ight",
      },
    ],
  },

  // 2. Gone, Gone, Gone
  {
    id: 2,
    title: "Gone, Gone, Gone",
    artist: "Phillip Phillips",
    chords: [
      // Intro
      { part: "Intro", chordLyric: "[G]" },

      // Verse 1
      {
        part: "Verse 1",
        chordLyric: "When [G]life leaves you high and dry",
      },
      {
        chordLyric: "I'll be at your door tonight",
      },
      {
        chordLyric: "If [Dsus4]you need help, if you need help",
      },
      {
        chordLyric: "I'll [Em7]shut down the city lights",
      },
      {
        chordLyric: "I'll lie, cheat, I'll beg and bribe",
      },
      {
        chordLyric: "To [Cadd9]make you well, to make you well",
      },
      {
        chordLyric: "When [G]enemies are at your door",
      },
      {
        chordLyric: "I'll [G]carry you away from war",
      },
      {
        chordLyric: "If [Dsus4]you need help, if you need help",
      },
      {
        chordLyric: "[Em7]Your hope dangling by a string",
      },
      {
        chordLyric: "I'll share in your suffering",
      },
      {
        chordLyric: "To [Cadd9]make you well, to make you well",
      },

      // Pre-Chorus 1
      {
        part: "Pre-Chorus",
        chordLyric: "Give [Cadd9]me reasons [G]to be[D]lieve",
      },
      {
        chordLyric: "That you would [Cadd9]do the [G]same for [D]me",
      },

      // Chorus 1
      {
        part: "Chorus",
        chordLyric:
          "And I would do it for [Cadd9]youuu[G]uu, for [Em7]youuuu[D]uu",
      },
      {
        chordLyric: "Baby [Cadd9]I'm not moving [G]on",
      },
      {
        chordLyric: "I love you [Em7]long after you're [D]gone",
      },
      {
        chordLyric: "For [Cadd9]yooooouuuuu[G]uu, for yo[Em7]oooouuu[D]uu ",
      },
      {
        chordLyric: "You would [Cadd9]never sleep al[G]one",
      },
      {
        chordLyric: "I love you [Em7]long after you're [D]gone",
      },
      {
        chordLyric: "And [(G)]long after you're gone gone go[Em7]ne",
      },

      // Verse 2
      {
        part: "Verse 2",
        chordLyric: "When you [G]fall like a statue",
      },
      {
        chordLyric: "I'm gon' be there to catch you",
      },
      {
        chordLyric: "Put you [Dsus4]on your feet, you on your feet",
      },
      {
        chordLyric: "And if [Em7]your well is empty",
      },
      {
        chordLyric: "Not a thing will prevent me",
      },
      {
        chordLyric: "Tell me [Cadd9]what you need, what do you need",
      },

      // Pre-Chorus 2
      {
        part: "Pre-Chorus",
        chordLyric: "I surr[Cadd9]ender [G]honest[D]ly",
      },
      {
        chordLyric: "You've always [Cadd9]done the [G]same for [D]me",
      },

      // Chorus 2
      {
        part: "Chorus",
        chordLyric:
          "And I would do it for [Cadd9]yooooouuu[G]uu, for yo[Em7]oooouuuu[D]uu",
      },
      {
        chordLyric: "Baby [Cadd9]I'm not moving [G]on",
      },
      {
        chordLyric: "I love you [Em7]long after you're [D]gone",
      },
      {
        chordLyric: "For y[Cadd9]ooooouuuu[G]uu, for [Em7]youuuuuu [D]",
      },
      {
        chordLyric: "You would [Cadd9]never sleep al[G]one",
      },
      {
        chordLyric: "I love you [Em7]long after you're [D]gone",
      },
      {
        chordLyric: "And [(G)]long after you're gone gone go[Em7]ne",
      },

      // Bridge
      {
        part: "Bridge",
        chordLyric: "You're my back b[G]one, you're my corner[Cadd9]stone",
      },
      {
        chordLyric: "You're my crutch when my legs stop moving[Em7]",
      },
      {
        chordLyric: "You're my headst[G]art, you're my rugged [Cadd9]heart",
      },
      {
        chordLyric: "You're the pokes that I've always needed",
      },
      {
        chordLyric: "Like a [G]drum baby [Em7]don't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric: "Like a [G]drum baby [Em7]don't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric: "Like a [G]drum baby [Em7]don't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric: "[G]Like a drum my heart [Em7]never stops b[D]eating",
      },

      // Chorus 3
      {
        part: "Chorus",
        chordLyric: "For [Cadd9]yoooouuu[G]uuu, for y[Em7]oooouuuu[D]uu",
      },
      {
        chordLyric: "Baby [Cadd9]I'm not moving [G]on",
      },
      {
        chordLyric: "I love you [Em7]long after you're g[D]one",
      },
      {
        chordLyric: "For y[Cadd9]ooooouuuu[G]uu, for yo[Em7]oooouuu[D]uu",
      },
      {
        chordLyric: "You would [Cadd9]never sleep al[G]one",
      },
      {
        chordLyric: "I love you [Em7]long after you're g[D]one",
      },
      {
        chordLyric: "For y[Cadd9]ooooouuuu[G]uu, for yo[Em7]oooouuu[D]uu",
      },
      {
        chordLyric: "Baby [Cadd9]I'm not moving [G]on",
      },
      {
        chordLyric: "I love you [Em7]long after you're g[D]one",
      },
      {
        chordLyric: "For y[Cadd9]ooooouuuu[G]uu, for yo[Em7]oooouuu[D]uu",
      },
      {
        chordLyric: "You would [Cadd9]never sleep al[G]one",
      },
      {
        chordLyric: "[Em7]I love you [D]long, long after you're [Cadd9]gone",
      },
      {
        chordLyric: "Like a dr[G]um baby d[Em7]on't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric: "Like a dr[G]um baby d[Em7]on't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric: "Like a dr[G]um baby d[Em7]on't stop b[D]eating [Cadd9]",
      },
      {
        chordLyric:
          "Like a dr[G]um my heart [Em7]never stops b[D]eating for y[G]ou",
      },
      {
        chordLyric: "And long after you're [(Em7)]gone g[(D)]one g[G]one",
      },
      {
        chordLyric:
          "I love you long after you're [(Em7)]gone g[(D)]one g[G]one",
      },
    ],
  },

  // 3. If I Had a Gun
  {
    id: 3,
    title: "If I Had a Gun",
    artist: "Noel Gallagher",
    chords: [
      // Intro
      {
        part: "Intro",
        chordLyric: "[G   A7sus4   Em7   (x2)]",
      },

      // Verse 1
      {
        part: "Verse 1",
        chordLyric: "[G]If I had a gun, I'd s[Em7]hoot a hole into the sun",
      },
      {
        chordLyric:
          "And [G]love would burn this c[A7sus4]ity down for y[Em7]ou",
      },
      {
        chordLyric:
          "[G]If I had the time, [Em7]I'd stop the world and make you mine",
      },
      {
        chordLyric: "And [G]everyday would [A7sus4]stay the same with [Em7]you",
      },

      // Interlude
      {
        part: "Interlude",
        chordLyric: "[G]Aaahhh [A7sus4]aaahhh aa[Em7]ahhhhh (x2)",
      },

      // Verse 2
      {
        part: "Verse 2",
        chordLyric:
          "[G]I'd give you back a dream, [Em7]show you now what might have been",
      },
      {
        chordLyric:
          "If [G]all the tears you [A7sus4]cried would fade a[Em7]way",
      },
      {
        chordLyric:
          "[G]I'll be by your side, w[Em7]hen they come to say goodbye",
      },
      {
        chordLyric: "[G]We will live to [A7sus4]fight another [Em7]day",
      },

      // Chorus 1
      {
        part: "Chorus",
        chordLyric: "[Cadd9]Excuse me if I've spoke too [G]soon",
      },
      {
        chordLyric:
          "My eyes have always [Cadd9]followed you around the [Em7]room",
      },
      {
        chordLyric: "Cos you're the onl[Cadd9]y God that I will ever [G]need",
      },
      {
        chordLyric:
          "I'm [Dsus2]holding on and [Am]waiting for the moment to [C/G]find me",
      },

      // Interlude (extended)
      {
        part: "Interlude",
        chordLyric: "[G]Aaahhh [A7sus4]aaahhh aa[Em7]ahhhhh (x4)",
      },

      // Chorus 2
      {
        part: "Chorus",
        chordLyric: "[Cadd9]Hope I didn't speak too [G]soon",
      },
      {
        chordLyric:
          "My eyes have always [Cadd9]followed you around the [Em7]room",
      },
      {
        chordLyric: "Cos you're the onl[Cadd9]y God that I will ever [G]need",
      },
      {
        chordLyric: "I'm [Dsus2]holding on and [Am]waiting for the moment",
      },
      {
        chordLyric: "for m[C/G]y heart to be unbroken by the [G]sea [D]",
      },

      // Bridge
      {
        part: "Bridge",
        chordLyric: "[Am]Aaahhhhh[C/G]hhh [G]aaahhhh[D]h (x4)",
      },

      // Chorus 3
      {
        part: "Chorus",
        chordLyric: "[Am]Let me [C/G]fly you to the [G]moon",
      },
      {
        chordLyric:
          "My [Dsus2]eyes have al[Am]ways followed [C/G]you around the [G]room",
      },
      {
        chordLyric:
          "Cos [Dsus2]you're the only [Am]God that [C/G]I will ever [G]need",
      },
      {
        chordLyric:
          "I'm [Dsus2]holding on and [Am]waiting for the moment to [C/G]find me",
      },

      // Interlude
      {
        part: "Interlude",
        chordLyric: "[G]Aaahhh [A7sus4]aaahhh aa[Em7]ahhhhh (x2)",
      },

      // Outro
      {
        part: "Outro",
        chordLyric: "[G]If I had a gun, I'd [Em7]shoot a hole into the sun",
      },
      {
        chordLyric:
          "And [G]love would burn this [A7sus4]city down for [Em7]you",
      },
    ],
  },

  // 4. You're Gonna Live Forever in Me
  {
    id: 4,
    title: "You're Gonna Live Forever in Me",
    artist: "John Mayer",
    chords: [
      // Intro
      {
        part: "Intro",
        chordLyric: "[G   C   Em   A]",
      },
      {
        chordLyric: "[C   G   Am   D]",
      },

      // Verse 1
      {
        part: "Verse",
        chordLyric: "A [G]great big bang and dinosaurs",
      },
      {
        chordLyric: "[C]Fiery rain and meteors",
      },
      {
        chordLyric: "It [Em]all ends unfortunately[A]",
      },
      {
        chordLyric: "But [C]you're gonna live forever in me[G]",
      },
      {
        chordLyric: "I guaran[Am]tee, just wait and [D]see",
      },

      // Verse 2
      {
        part: "Verse",
        chordLyric: "[G]Parts of me were made by you",
      },
      {
        chordLyric: "And [C]planets keep their distance too",
      },
      {
        chordLyric: "The [Em]moon's got a grip on the [A]sea",
      },
      {
        chordLyric: "And [C]you're gonna live forever in me[G]",
      },
      {
        chordLyric: "I guaran[Am]tee, it's your destiny[D]",
      },

      // Verse 3
      {
        part: "Verse",
        chordLyric: "[G]Life is full of sweet mistakes",
      },
      {
        chordLyric: "And [C]love's an honest one to make",
      },
      {
        chordLyric: "[Em]Time leaves no fruit on the [A]tree",
      },
      {
        chordLyric: "But [C]you're gonna live forever in [G]me",
      },
      {
        chordLyric: "I guaran[Am]tee, it's just meant to be[D]",
      },

      // Break
      {
        part: "Break",
        chordLyric: "[G   C   Em   A]",
      },
      {
        chordLyric: "[C   G   Am   D]",
      },

      // Verse 4
      {
        part: "Verse",
        chordLyric: "And [G]when the pastor asks the pews",
      },
      {
        chordLyric: "For [C]reasons he can't marry you",
      },
      {
        chordLyric: "[Em]I'll keep my word and my [A]seat",
      },
      {
        chordLyric: "But [C]you're gonna live forever in [G]me",
      },
      {
        chordLyric: "I guaran[Am]tee, just wait and [D]see",
      },

      // Outro
      {
        part: "Outro",
        chordLyric: "[D]",
      },
    ],
  },

  // 5. I Love You, I'm Sorry
  {
    id: 5,
    title: "I Love You, I'm Sorry",
    artist: "Gracie Abrams",
    chords: [
      // Verse 1
      {
        part: "Verse 1",
        chordLyric: "[G]Two Augusts a[D]go",
      },
      {
        chordLyric: "I told the [Am7]truth, oh, but you didn't",
      },
      {
        chordLyric: "[C]like it, you went home",
      },
      {
        chordLyric: "[G]You're in your [D]Benz, I'm by the [Am7]gate [C]",
      },
      {
        chordLyric: "[G]Now you go a[D]lone",
      },
      {
        chordLyric:
          "Charm all the [Am7]people you train for, you [C]mean well but aim low",
      },
      {
        chordLyric:
          "[G]And I'll make it [D]known like I'm getting [Am7]paid [C]",
      },

      // Chorus 1
      {
        part: "Chorus",
        chordLyric: "That's just the [G]way life [D]goes",
      },
      {
        chordLyric: "I like to [Am7]slam doors [C]closed",
      },
      {
        chordLyric: "Trust me, I [G]know it's [D]always about me[Am7]",
      },
      {
        chordLyric: "I [C]love you, I'm sorry",
      },

      // Verse 2
      {
        part: "Verse 2",
        chordLyric: "[G]Two summers from [D]now",
      },
      {
        chordLyric:
          "[Am7]We'll have been talking, but not all that [C]often, we're cool now",
      },
      {
        chordLyric:
          "[G]I'll be on a [D]boat, you're on a [Am7]plane going [C]somewhere, [G]same",
      },
      {
        chordLyric: "[D]And I'll have a drink",
      },
      {
        chordLyric:
          "[Am7]Wistfully lean out my [C]window and watch the sun set on the [G]lake",
      },
      {
        chordLyric: "[D]I might not feel [Am7]real, but it's [C]okay, mmm",
      },

      // Chorus 2
      {
        part: "Chorus",
        chordLyric: "[G]'Cause that's just the [D]way life goes",
      },
      {
        chordLyric: "[Am7]I push my luck, it [C]shows",
      },
      {
        chordLyric: "[G]Thankful you [D]don't send someone to kill [Am7]me",
      },
      {
        chordLyric: "[C]I love you, I'm sorry",
      },

      // Bridge
      {
        part: "Bridge",
        chordLyric: "[G]You were the best but you were the worst",
      },
      {
        chordLyric: "[D]As sick as it sounds, I loved you first",
      },
      {
        chordLyric: "[Am7]I was a dick, it is what it is",
      },
      {
        chordLyric: "[C]A habit to kick the age-old curse",
      },
      {
        chordLyric: "[Em]I tend to laugh whenever I'm sad",
      },
      {
        chordLyric: "[D]I stare at the crash, it actually works",
      },
      {
        chordLyric: "[Am7]Making amends, this shit never ends",
      },
      {
        chordLyric: "[C]I'm wrong again, wrong again",
      },

      // Chorus 3
      {
        part: "Chorus",
        chordLyric: "[G]The way life [D]goes",
      },
      {
        chordLyric: "[Am7]Joyriding down our [C]road",
      },
      {
        chordLyric:
          "[G]Lay on the [D]horn to prove that it haunts [Am7]me (I'm wrong again, wrong again)",
      },
      {
        chordLyric: "[C]I love you, I'm sorry",
      },
      {
        chordLyric:
          "[G]The way life [D]goes (You were the best but you were the worst) (As sick as it sounds, I loved you first)",
      },
      {
        chordLyric:
          "[Am7]I wanna speak in [C]code (I was a dick, it is what it is) (A habit to kick, the age-old curse)",
      },
      {
        chordLyric:
          "[G]Hope that I [D]don't, won't make it about [Am7]me (I tend to laugh whenever I'm sad)",
      },
      {
        chordLyric: "[C]I love you, I'm sorry",
      },
    ],
  },
];
