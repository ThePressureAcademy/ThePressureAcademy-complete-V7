import { useState } from "react";

const RUST = "#C45B28";
const RUST_L = "#E8734A";
const AMBER = "#D4915C";
const SAND = "#E8C9A0";
const DARK = "#0A0A0A";
const CHARCOAL = "#2D2D2D";
const CREAM = "#FFF8F0";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONCEPT A: THE PRESS
// Two compression bars squeezing a diamond into existence.
// The diamond only exists BECAUSE of the pressure.
// Minimal, industrial, unmistakable.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ThePress = ({ size = 200, mono = false, variant = "full" }) => {
  const c1 = mono ? DARK : RUST;
  const c2 = mono ? DARK : AMBER;
  const c3 = mono ? `${DARK}12` : `${RUST}12`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Top compression bar */}
      <rect x="20" y="18" width="60" height="6" rx="1.5" fill={c1} />
      {/* Pressure lines from top bar */}
      <line x1="35" y1="24" x2="38" y2="32" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="50" y1="24" x2="50" y2="30" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="65" y1="24" x2="62" y2="32" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      
      {/* THE DIAMOND — formed by compression */}
      <path d="M50 32 L72 52 L50 72 L28 52Z" stroke={c1} strokeWidth="2.5" fill={c3} strokeLinejoin="round"/>
      {/* Internal facet — gives it depth */}
      <path d="M50 32 L62 45 L50 62 L38 45Z" stroke={c2} strokeWidth="1" fill="none" opacity="0.4" strokeLinejoin="round"/>
      {/* Center horizontal facet line */}
      <line x1="28" y1="52" x2="72" y2="52" stroke={c2} strokeWidth="0.8" opacity="0.35"/>
      {/* Top-to-center vertical */}
      <line x1="50" y1="32" x2="50" y2="72" stroke={c2} strokeWidth="0.8" opacity="0.25"/>
      
      {/* Pressure lines from bottom bar */}
      <line x1="35" y1="80" x2="38" y2="72" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="50" y1="80" x2="50" y2="74" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="65" y1="80" x2="62" y2="72" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      {/* Bottom compression bar */}
      <rect x="20" y="80" width="60" height="6" rx="1.5" fill={c1} />
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONCEPT B: CONVERGENCE
// Four force vectors pressing inward, creating a diamond
// in the negative space where they meet. Pure physics.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Convergence = ({ size = 200, mono = false }) => {
  const c1 = mono ? DARK : RUST;
  const c2 = mono ? DARK : AMBER;
  const c3 = mono ? `${DARK}10` : `${RUST}10`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Central diamond — the RESULT of convergence */}
      <path d="M50 30 L68 50 L50 70 L32 50Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* Internal facet cross */}
      <line x1="50" y1="30" x2="50" y2="70" stroke={c2} strokeWidth="0.8" opacity="0.3"/>
      <line x1="32" y1="50" x2="68" y2="50" stroke={c2} strokeWidth="0.8" opacity="0.3"/>
      
      {/* Top chevron — pressing DOWN */}
      <path d="M38 12 L50 22 L62 12" stroke={c1} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 6 L50 14 L58 6" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      
      {/* Bottom chevron — pressing UP */}
      <path d="M38 88 L50 78 L62 88" stroke={c1} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 94 L50 86 L58 94" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      
      {/* Left chevron — pressing RIGHT */}
      <path d="M12 38 L22 50 L12 62" stroke={c1} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 42 L14 50 L6 58" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      
      {/* Right chevron — pressing LEFT */}
      <path d="M88 38 L78 50 L88 62" stroke={c1} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M94 42 L86 50 L94 58" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      
      {/* Force lines connecting chevrons to diamond */}
      <line x1="50" y1="22" x2="50" y2="30" stroke={c1} strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="70" stroke={c1} strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
      <line x1="22" y1="50" x2="32" y2="50" stroke={c1} strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
      <line x1="78" y1="50" x2="68" y2="50" stroke={c1} strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONCEPT C: FACETED PA
// Letters P and A interlocked through angular diamond-cut
// geometry. Reads as monogram AND abstract mark.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const FacetedPA = ({ size = 200, mono = false }) => {
  const c1 = mono ? DARK : RUST;
  const c2 = mono ? DARK : AMBER;
  const c3 = mono ? `${DARK}10` : `${RUST}10`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Diamond container — rotated square */}
      <path d="M50 12 L88 50 L50 88 L12 50Z" stroke={c1} strokeWidth="1.5" fill={c3} strokeLinejoin="round"/>
      
      {/* P — left side, constructed from angular cuts */}
      {/* Vertical stem */}
      <path d="M30 68 L30 32 L45 32 C52 32, 52 32, 52 38 C52 44, 52 44, 45 44 L30 44" 
        stroke={c1} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* A — right side, angular construction */}
      <path d="M56 68 L65 32 L74 68" 
        stroke={c1} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* A crossbar */}
      <line x1="59" y1="54" x2="71" y2="54" stroke={c1} strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Facet detail lines within diamond container */}
      <line x1="50" y1="12" x2="50" y2="88" stroke={c2} strokeWidth="0.6" opacity="0.2"/>
      <line x1="12" y1="50" x2="88" y2="50" stroke={c2} strokeWidth="0.6" opacity="0.2"/>
      
      {/* Corner facet accents */}
      <line x1="50" y1="12" x2="31" y2="31" stroke={c2} strokeWidth="0.6" opacity="0.15"/>
      <line x1="50" y1="12" x2="69" y2="31" stroke={c2} strokeWidth="0.6" opacity="0.15"/>
      <line x1="50" y1="88" x2="31" y2="69" stroke={c2} strokeWidth="0.6" opacity="0.15"/>
      <line x1="50" y1="88" x2="69" y2="69" stroke={c2} strokeWidth="0.6" opacity="0.15"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONCEPT D: THE CRUCIBLE
// A diamond with internal energy radiating from its core.
// Pressure contained = power. The diamond doesn't crack
// under pressure — it holds it.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TheCrucible = ({ size = 200, mono = false }) => {
  const c1 = mono ? DARK : RUST;
  const c2 = mono ? DARK : AMBER;
  const c3 = mono ? `${DARK}08` : `${RUST}08`;
  const c4 = mono ? `${DARK}15` : `${RUST}15`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Outer diamond — the vessel */}
      <path d="M50 10 L90 50 L50 90 L10 50Z" stroke={c1} strokeWidth="2.8" fill={c3} strokeLinejoin="round"/>
      
      {/* Inner diamond — the core */}
      <path d="M50 28 L72 50 L50 72 L28 50Z" stroke={c1} strokeWidth="1.8" fill={c4} strokeLinejoin="round"/>
      
      {/* Radial energy lines from core to outer shell */}
      {/* Cardinals */}
      <line x1="50" y1="28" x2="50" y2="10" stroke={c2} strokeWidth="1.3" opacity="0.6" strokeLinecap="round"/>
      <line x1="72" y1="50" x2="90" y2="50" stroke={c2} strokeWidth="1.3" opacity="0.6" strokeLinecap="round"/>
      <line x1="50" y1="72" x2="50" y2="90" stroke={c2} strokeWidth="1.3" opacity="0.6" strokeLinecap="round"/>
      <line x1="28" y1="50" x2="10" y2="50" stroke={c2} strokeWidth="1.3" opacity="0.6" strokeLinecap="round"/>
      
      {/* Diagonals */}
      <line x1="61" y1="39" x2="70" y2="30" stroke={c2} strokeWidth="1" opacity="0.35" strokeLinecap="round"/>
      <line x1="61" y1="61" x2="70" y2="70" stroke={c2} strokeWidth="1" opacity="0.35" strokeLinecap="round"/>
      <line x1="39" y1="61" x2="30" y2="70" stroke={c2} strokeWidth="1" opacity="0.35" strokeLinecap="round"/>
      <line x1="39" y1="39" x2="30" y2="30" stroke={c2} strokeWidth="1" opacity="0.35" strokeLinecap="round"/>
      
      {/* Core point — the absolute center of pressure */}
      <circle cx="50" cy="50" r="3.5" fill={c1}/>
      <circle cx="50" cy="50" r="6" stroke={c2} strokeWidth="0.8" fill="none" opacity="0.4"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONCEPT E: CARBON TO DIAMOND
// Hexagonal carbon lattice on one side morphing into
// diamond crystal structure on the other.
// Science of transformation. Pressure → progress
// made literal through crystallography.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CarbonDiamond = ({ size = 200, mono = false }) => {
  const c1 = mono ? DARK : RUST;
  const c2 = mono ? DARK : AMBER;
  const c3 = mono ? `${DARK}20` : `${AMBER}30`;
  
  // Hexagonal carbon lattice (left side) — the "before"
  const hexNodes = [
    [22,36],[16,50],[22,64],  // far left column
    [34,30],[34,50],[34,70],  // mid left column
  ];
  const hexConns = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5]];
  
  // Diamond crystal lattice (right side) — the "after"
  const diaNodes = [
    [66,30],[78,36],[84,50],[78,64],[66,70],  // outer
    [66,44],[74,50],[66,56],                    // inner
  ];
  const diaConns = [[0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,6],[3,7],[4,7],[5,6],[6,7],[5,7]];
  
  // Transition zone nodes (center)
  const transNodes = [[50,38],[50,50],[50,62]];
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Overall diamond container — subtle */}
      <path d="M50 10 L88 50 L50 90 L12 50Z" stroke={c1} strokeWidth="1.2" fill="none" opacity="0.2" strokeLinejoin="round"/>
      
      {/* Carbon hex connections */}
      {hexConns.map(([a,b], i) => (
        <line key={`hc-${i}`}
          x1={hexNodes[a][0]} y1={hexNodes[a][1]}
          x2={hexNodes[b][0]} y2={hexNodes[b][1]}
          stroke={c2} strokeWidth="1.2" opacity="0.5"
        />
      ))}
      {/* Carbon hex nodes */}
      {hexNodes.map(([x,y], i) => (
        <circle key={`hn-${i}`} cx={x} cy={y} r="2.5" fill={c2} opacity="0.7"/>
      ))}
      
      {/* Transition connections — bridging hex to diamond */}
      <line x1="34" y1="30" x2="50" y2="38" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="34" y1="50" x2="50" y2="50" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="34" y1="70" x2="50" y2="62" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="38" x2="66" y2="30" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="50" x2="66" y2="44" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="50" x2="66" y2="56" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="62" x2="66" y2="70" stroke={c1} strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="38" x2="50" y2="62" stroke={c1} strokeWidth="1" opacity="0.3"/>
      
      {/* Transition nodes */}
      {transNodes.map(([x,y], i) => (
        <circle key={`tn-${i}`} cx={x} cy={y} r="3" fill={c1}/>
      ))}
      
      {/* Diamond crystal connections */}
      {diaConns.map(([a,b], i) => (
        <line key={`dc-${i}`}
          x1={diaNodes[a][0]} y1={diaNodes[a][1]}
          x2={diaNodes[b][0]} y2={diaNodes[b][1]}
          stroke={c1} strokeWidth="1.5" opacity="0.7"
        />
      ))}
      {/* Diamond crystal nodes — brighter, more defined */}
      {diaNodes.map(([x,y], i) => (
        <circle key={`dn-${i}`} cx={x} cy={y} r={i < 5 ? "2.8" : "2.2"} fill={c1}/>
      ))}
      
      {/* Arrow showing direction of transformation */}
      <path d="M42 84 L50 80 L58 84" stroke={c1} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <line x1="50" y1="94" x2="50" y2="80" stroke={c1} strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Mini sub-brand logos for ecosystem compatibility test
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MiniPlanner = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke={RUST} strokeWidth="1.5"/>
    <line x1="8" y1="7" x2="16" y2="7" stroke={AMBER} strokeWidth="1" opacity="0.5"/>
    <line x1="8" y1="11" x2="16" y2="11" stroke={AMBER} strokeWidth="1" opacity="0.5"/>
    <line x1="8" y1="15" x2="13" y2="15" stroke={AMBER} strokeWidth="1" opacity="0.5"/>
  </svg>
);

const MiniTested = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3 L20 7 L20 13 C20 17, 16 21, 12 22 C8 21, 4 17, 4 13 L4 7Z" stroke={RUST} strokeWidth="1.5" fill="none"/>
    <path d="M8 12 L11 15 L16 9" stroke={RUST} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MiniMastery = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 4 C8 4, 5 6, 5 10 C5 12, 6 14, 8 15 C5 16, 4 18, 5 20 C6 22, 10 22, 12 22 C14 22, 18 22, 19 20 C20 18, 19 16, 16 15 C18 14, 19 12, 19 10 C19 6, 16 4, 12 4Z" stroke={RUST} strokeWidth="1.3" fill="none"/>
    <circle cx="9" cy="10" r="1" fill={AMBER}/><circle cx="15" cy="10" r="1" fill={AMBER}/>
    <circle cx="12" cy="14" r="1" fill={AMBER}/><circle cx="10" cy="18" r="1" fill={AMBER}/><circle cx="14" cy="18" r="1" fill={AMBER}/>
  </svg>
);

const MiniForce = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke={RUST} strokeWidth="1.5" fill="none"/>
    <path d="M9 8 L9 16 L16 12Z" fill={RUST}/>
  </svg>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const concepts = [
  {
    id: "A", name: "The Press", tagline: "Pressure makes the diamond",
    Component: ThePress,
    scores: { legibility: 5, silhouette: 5, singleColor: 5, neutrality: 5, distinctiveness: 5, symbolic: 5 },
    reasoning: "Two solid compression bars — top and bottom — with a diamond forming between them. The bars are the pressure. The diamond is the result. At 16px: two bars + diamond shape reads clearly. The pressure lines between bars and diamond add narrative depth at medium sizes but the mark works without them. Industrial precision meets elegance.",
    ifThenWhy: "IF someone sees two bars pressing a diamond → THEN they immediately understand 'pressure creates something valuable' → WHY this is the most literal, most ownable visual metaphor for the entire brand philosophy. No other education/fitness/lifestyle brand has this mark. It's also the only concept where the diamond wouldn't exist without the bars — the pressure IS the brand.",
    ecosystemNote: "The compression bars become a recurring visual language across sub-brands. Planner: bars frame the daily score. Tested: bars frame the shield. Mastery: bars frame the brain. Force: bars frame the play button. One visual system, infinite applications."
  },
  {
    id: "B", name: "Convergence", tagline: "All forces, one diamond",
    Component: Convergence,
    scores: { legibility: 5, silhouette: 4, singleColor: 5, neutrality: 5, distinctiveness: 4, symbolic: 5 },
    reasoning: "Four directional chevrons pressing inward from all sides, with connecting force lines leading to a central diamond. The diamond exists in the convergence zone. At 16px: the four chevrons read as a distinctive cross-pattern; the diamond may be subtle but the overall shape is unique. The 4-direction pressure represents life's forces (work, family, training, health) all converging to create something valuable.",
    ifThenWhy: "IF the brand message is 'pressure from all directions creates your best self' → THEN showing 4 forces converging on a diamond makes it physical → WHY this resonates with shift workers, parents, and grapplers who all experience multi-directional pressure. Trade-off: at very small sizes the chevrons could blur into a generic cross shape.",
    ecosystemNote: "Each chevron can be colour-coded to represent a sub-brand in marketing materials. Top: Planner. Right: Blueprint. Bottom: Tested. Left: Mastery. The diamond center = TPA itself."
  },
  {
    id: "C", name: "Faceted PA", tagline: "The monogram mark",
    Component: FacetedPA,
    scores: { legibility: 4, silhouette: 4, singleColor: 5, neutrality: 5, distinctiveness: 3, symbolic: 3 },
    reasoning: "P and A letterforms inside a diamond container with subtle facet lines. Instantly reads as 'PA' = Pressure Academy. The diamond container provides the brand shape. At 16px: the diamond shape reads but the letters may not. At 32px: PA becomes clear. Facet lines add sophistication at larger sizes. This is the most conventional approach — clean, corporate, safe.",
    ifThenWhy: "IF you need maximum corporate credibility for investor decks and partnerships → THEN a monogram in a diamond container is the most professional option → WHY it looks like it belongs on a building, a business card, and a pitch deck. Trade-off: it's the least distinctive — many brands use monograms in shapes. Scores lowest on 'symbolic truth' because the letters don't inherently say 'pressure.'",
    ecosystemNote: "Sub-brands could use their own letter marks in the same diamond container: PP (Planner), PT (Tested), MM (Mastery), PF (Force). Consistent but potentially confusing with too many two-letter marks."
  },
  {
    id: "D", name: "The Crucible", tagline: "Pressure contained is power",
    Component: TheCrucible,
    scores: { legibility: 5, silhouette: 5, singleColor: 5, neutrality: 5, distinctiveness: 5, symbolic: 5 },
    reasoning: "Nested diamonds — outer shell contains inner core — with radial energy lines pushing outward from center. The pressure isn't external, it's CONTAINED. The diamond doesn't crack under pressure, it channels it. The outer diamond is the structure (the Academy). The inner diamond is the person. The radial lines are the energy created by the system. At 16px: two concentric diamond shapes + center dot reads as a bold, distinctive icon.",
    ifThenWhy: "IF the brand message is 'we teach you to contain and channel pressure, not escape it' → THEN a diamond holding energy at its core is the perfect metaphor → WHY this shifts the narrative from 'pressure is something that happens TO you' to 'pressure is something you HOLD and USE.' That's the philosophical upgrade from v1 (grappler being pressed) to v2 (diamond containing power).",
    ecosystemNote: "The outer/inner diamond system maps perfectly to the brand architecture. Outer diamond = TPA (the house). Inner diamond changes per sub-brand: a planner grid, a shield, a brain node, a sound wave. The radial lines become a consistent 'energy' motif across all touchpoints."
  },
  {
    id: "E", name: "Carbon → Diamond", tagline: "The science of transformation",
    Component: CarbonDiamond,
    scores: { legibility: 3, silhouette: 3, singleColor: 4, neutrality: 5, distinctiveness: 5, symbolic: 5 },
    reasoning: "Left side: hexagonal carbon lattice (the raw material — graphite, coal, potential). Right side: diamond crystal lattice (the refined result). Center: transition zone where the transformation happens. This is actual crystallography — carbon atoms under pressure rearrange from hexagonal to tetrahedral (diamond) structure. At large sizes it's intellectually stunning. At 16px: too complex, reads as scattered dots.",
    ifThenWhy: "IF you want to appeal to the science-minded, engineering-brained audience (crane operators, medical professionals, BJJ tacticians) → THEN showing the actual atomic transformation is deeply satisfying → WHY it says 'we don't just talk about pressure metaphorically — we understand the physics.' Trade-off: fails at small sizes. Best as a secondary graphic, not the primary mark.",
    ecosystemNote: "Could appear on certificates, loading screens, and about pages. The hex-to-diamond transition could animate beautifully on web (left lattice morphs into right lattice on scroll). Not suitable as the favicon or nav icon."
  }
];

const scoreLabels = {
  legibility: "16px Legibility",
  silhouette: "Silhouette Memory",
  singleColor: "Single-Color",
  neutrality: "Ecosystem Neutral",
  distinctiveness: "Distinctiveness",
  symbolic: "Symbolic Truth"
};

export default function TPALogoSystem() {
  const [showMono, setShowMono] = useState(false);
  const [bgDark, setBgDark] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showEco, setShowEco] = useState(false);

  const bg = bgDark ? DARK : CREAM;

  return (
    <div style={{ background: "#050505", minHeight: "100vh", fontFamily: "'Inter', -apple-system, system-ui, sans-serif", color: CREAM }}>
      {/* Hero */}
      <div style={{ padding: "56px 24px 36px", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "4px 14px", borderRadius: "20px",
          border: `1px solid ${RUST}40`, background: `${RUST}10`,
          fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase",
          color: RUST, fontWeight: 700, marginBottom: "20px"
        }}>
          Brand House Mark — The Front Door
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          The Pressure Academy
        </h1>
        <p style={{ fontSize: "15px", color: SAND, maxWidth: "520px", margin: "0 auto 28px", lineHeight: 1.65 }}>
          This mark sits above every sub-brand. It goes on the website, the app, the apparel, the certificates, the investor deck, and the business card. It must be the most distilled expression of <em style={{ color: RUST }}>"pressure → progress"</em> possible.
        </p>

        {/* Controls */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: showMono ? "● Mono" : "○ Color", fn: () => setShowMono(!showMono), active: showMono, c: RUST },
            { label: bgDark ? "● Dark" : "○ Light", fn: () => setBgDark(!bgDark), active: bgDark, c: "#666" },
            { label: showEco ? "● Ecosystem" : "○ Ecosystem", fn: () => setShowEco(!showEco), active: showEco, c: AMBER },
          ].map((btn, i) => (
            <button key={i} onClick={btn.fn} style={{
              padding: "7px 18px", borderRadius: "8px", fontSize: "11px", fontWeight: 600,
              cursor: "pointer", background: btn.active ? btn.c : "transparent",
              border: `1.5px solid ${btn.c}`, color: btn.active ? (btn.c === "#666" ? CREAM : CREAM) : btn.c,
              transition: "all 0.2s"
            }}>{btn.label}</button>
          ))}
        </div>
      </div>

      {/* Concepts Grid */}
      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "0 16px 48px" }}>
        {/* Top 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px", marginBottom: "18px" }}>
          {concepts.slice(0, 2).map(c => <ConceptCard key={c.id} c={c} bg={bg} showMono={showMono} showEco={showEco} selected={selected} setSelected={setSelected} />)}
        </div>
        {/* Middle 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px", marginBottom: "18px" }}>
          {concepts.slice(2, 4).map(c => <ConceptCard key={c.id} c={c} bg={bg} showMono={showMono} showEco={showEco} selected={selected} setSelected={setSelected} />)}
        </div>
        {/* Bottom 1 - full width */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px" }}>
          {concepts.slice(4).map(c => <ConceptCard key={c.id} c={c} bg={bg} showMono={showMono} showEco={showEco} selected={selected} setSelected={setSelected} wide />)}
        </div>

        {/* Recommendation */}
        <div style={{
          marginTop: "28px", padding: "32px", borderRadius: "20px",
          background: "linear-gradient(160deg, #1a1208 0%, #0d0d0d 60%, #0d1218 100%)",
          border: `1px solid ${RUST}25`
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: RUST, marginBottom: "12px", fontWeight: 700 }}>
            Architect Recommendation
          </div>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
            Primary: A (The Press) or D (The Crucible)
          </h2>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 18px" }}>Both score 30/30. Different philosophies. Same quality.</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ padding: "16px", background: `${RUST}08`, borderRadius: "12px", border: `1px solid ${RUST}20` }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: CREAM, marginBottom: "6px" }}>A — The Press</div>
              <p style={{ fontSize: "12px", lineHeight: 1.7, color: SAND, margin: 0 }}>
                "Pressure creates the diamond." External forces making something beautiful. The compression bars become a recurring visual element across all sub-brands. Most industrial. Most unique. Nobody else has this mark.
              </p>
            </div>
            <div style={{ padding: "16px", background: `${RUST}08`, borderRadius: "12px", border: `1px solid ${RUST}20` }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: CREAM, marginBottom: "6px" }}>D — The Crucible</div>
              <p style={{ fontSize: "12px", lineHeight: 1.7, color: SAND, margin: 0 }}>
                "Pressure contained is power." Internal energy held by structure. The nested diamonds map directly to brand architecture (outer = TPA, inner = you). Most premium. Most versatile. Scales to luxury positioning.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: "16px", padding: "14px", background: "#0a0a0a", borderRadius: "10px", borderLeft: `3px solid ${RUST}` }}>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#888", margin: 0 }}>
              <strong style={{ color: AMBER }}>IF</strong> Cody picks A → <strong style={{ color: AMBER }}>THEN</strong> use D as the hero/certificate watermark graphic.{" "}
              <strong style={{ color: AMBER }}>IF</strong> Cody picks D → <strong style={{ color: AMBER }}>THEN</strong> use A's compression bars as a section divider motif across the website.{" "}
              <strong style={{ color: AMBER }}>WHY:</strong> Both concepts share geometric diamond language, so they're visually compatible as primary + secondary marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptCard({ c, bg, showMono, showEco, selected, setSelected, wide }) {
  const total = Object.values(c.scores).reduce((a, b) => a + b, 0);
  const isOpen = selected === c.id;

  return (
    <div
      onClick={() => setSelected(isOpen ? null : c.id)}
      style={{
        background: "#111", borderRadius: "18px",
        border: `2px solid ${isOpen ? RUST : "#222"}`,
        cursor: "pointer", overflow: "hidden",
        transition: "all 0.3s ease",
        transform: isOpen ? "translateY(-3px)" : "none",
        boxShadow: isOpen ? `0 12px 40px ${RUST}15` : "none"
      }}
    >
      {/* Display area */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: wide ? "32px 40px" : "28px 20px",
        background: bg, minHeight: wide ? "200px" : "240px",
        borderBottom: "1px solid #1a1a1a", transition: "background 0.3s",
        gap: wide ? "40px" : "20px"
      }}>
        <c.Component size={wide ? 180 : 160} mono={showMono} />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
          {[48, 32, 16].map(s => (
            <div key={s} style={{ textAlign: "center" }}>
              <c.Component size={s} mono={showMono} />
              <div style={{ fontSize: "8px", color: "#555", marginTop: "2px" }}>{s}px</div>
            </div>
          ))}
        </div>
        {/* Ecosystem compatibility */}
        {showEco && (
          <div style={{
            display: "flex", flexDirection: "column", gap: "8px", alignItems: "center",
            padding: "12px", background: `${DARK}90`, borderRadius: "10px", border: "1px solid #222"
          }}>
            <div style={{ fontSize: "8px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>Ecosystem</div>
            <div style={{ display: "flex", gap: "6px" }}>
              <MiniPlanner /><MiniTested /><MiniMastery /><MiniForce />
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", fontWeight: 800, color: "#050505", background: RUST, padding: "2px 7px", borderRadius: "4px" }}>{c.id}</span>
            <span style={{ fontSize: "15px", fontWeight: 700 }}>{c.name}</span>
          </div>
          <span style={{ fontSize: "24px", fontWeight: 800, color: total === 30 ? "#22c55e" : total >= 28 ? "#86efac" : total >= 24 ? AMBER : "#ef4444" }}>
            {total}<span style={{ fontSize: "13px", fontWeight: 500, color: "#444" }}>/30</span>
          </span>
        </div>
        <p style={{ fontSize: "12px", color: AMBER, margin: "0 0 14px", fontStyle: "italic" }}>"{c.tagline}"</p>

        {/* Score grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px" }}>
          {Object.entries(c.scores).map(([key, val]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ fontSize: "9px", color: "#555", width: "75px", flexShrink: 0 }}>{scoreLabels[key]}</div>
              <div style={{ flex: 1, height: "3px", background: "#1a1a1a", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ width: `${val * 20}%`, height: "100%", borderRadius: "2px", background: val === 5 ? "#22c55e" : val === 4 ? AMBER : "#eab308", transition: "width 0.4s" }} />
              </div>
              <span style={{ fontSize: "9px", fontWeight: 700, color: val === 5 ? "#22c55e" : AMBER, width: "10px" }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Expanded */}
        {isOpen && (
          <div style={{ marginTop: "16px", fontSize: "12px", lineHeight: 1.7 }}>
            <div style={{ padding: "14px", background: "#0a0a0a", borderRadius: "10px", borderLeft: `3px solid ${RUST}`, marginBottom: "10px" }}>
              <div style={{ fontWeight: 700, color: CREAM, marginBottom: "4px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Design Reasoning</div>
              <p style={{ color: "#999", margin: 0 }}>{c.reasoning}</p>
            </div>
            <div style={{ padding: "14px", background: "#0a0a0a", borderRadius: "10px", borderLeft: `3px solid ${AMBER}`, marginBottom: "10px" }}>
              <div style={{ fontWeight: 700, color: RUST, marginBottom: "4px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>IF → THEN → WHY</div>
              <p style={{ color: SAND, margin: 0 }}>{c.ifThenWhy}</p>
            </div>
            <div style={{ padding: "14px", background: "#0a0a0a", borderRadius: "10px", borderLeft: `3px solid #555` }}>
              <div style={{ fontWeight: 700, color: "#888", marginBottom: "4px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ecosystem Compatibility</div>
              <p style={{ color: "#777", margin: 0 }}>{c.ecosystemNote}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
