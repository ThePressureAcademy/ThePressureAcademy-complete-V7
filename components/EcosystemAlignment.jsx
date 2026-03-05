import { useState } from "react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BRAND PALETTE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const R = "#C45B28";
const RL = "#E8734A";
const AM = "#D4915C";
const SA = "#E8C9A0";
const DK = "#0A0A0A";
const CH = "#2D2D2D";
const CR = "#FFF8F0";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THE PRESS — Parent Mark (decided)
// Two compression bars + diamond formed between them
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TPAMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}12` : `${R}12`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="20" y="18" width="60" height="6" rx="1.5" fill={c1}/>
      <line x1="35" y1="24" x2="38" y2="32" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="50" y1="24" x2="50" y2="30" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="65" y1="24" x2="62" y2="32" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <path d="M50 32 L72 52 L50 72 L28 52Z" stroke={c1} strokeWidth="2.5" fill={c3} strokeLinejoin="round"/>
      <path d="M50 32 L62 45 L50 62 L38 45Z" stroke={c2} strokeWidth="1" fill="none" opacity="0.4" strokeLinejoin="round"/>
      <line x1="28" y1="52" x2="72" y2="52" stroke={c2} strokeWidth="0.8" opacity="0.35"/>
      <line x1="50" y1="32" x2="50" y2="72" stroke={c2} strokeWidth="0.8" opacity="0.25"/>
      <line x1="35" y1="80" x2="38" y2="72" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="50" y1="80" x2="50" y2="74" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <line x1="65" y1="80" x2="62" y2="72" stroke={c2} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <rect x="20" y="80" width="60" height="6" rx="1.5" fill={c1}/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRESSURE PLANNER
// Compression bars + diamond with internal score ring
// and daily tracking lines
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const PlannerMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Compression bars */}
      <rect x="24" y="20" width="52" height="5" rx="1.2" fill={c1}/>
      <rect x="24" y="78" width="52" height="5" rx="1.2" fill={c1}/>
      {/* Pressure lines */}
      <line x1="40" y1="25" x2="42" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="29" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="25" x2="58" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="40" y1="78" x2="42" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="74" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="78" x2="58" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      {/* Diamond outline */}
      <path d="M50 30 L70 51.5 L50 73 L30 51.5Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* Score ring — the daily pressure score */}
      <circle cx="50" cy="51.5" r="13" stroke={c1} strokeWidth="2" fill="none"/>
      {/* Score arc — showing ~75% */}
      <path d="M50 38.5 A13 13 0 1 1 39.5 59" stroke={c2} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Score number hint */}
      <circle cx="50" cy="51.5" r="2" fill={c1}/>
      {/* Tracking lines inside diamond */}
      <line x1="36" y1="44" x2="44" y2="44" stroke={c2} strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
      <line x1="56" y1="44" x2="64" y2="44" stroke={c2} strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
      <line x1="36" y1="60" x2="44" y2="60" stroke={c2} strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
      <line x1="56" y1="60" x2="64" y2="60" stroke={c2} strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRESSURE BLUEPRINT
// Compression bars + diamond with IF→THEN pathway
// nodes inside — the decision tree system
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const BlueprintMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;
  // Decision tree nodes inside diamond
  const nodes = [[50,35],[40,46],[60,46],[35,57],[50,57],[65,57],[50,68]];
  const conns = [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[5,6]];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="24" y="20" width="52" height="5" rx="1.2" fill={c1}/>
      <rect x="24" y="78" width="52" height="5" rx="1.2" fill={c1}/>
      <line x1="40" y1="25" x2="42" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="29" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="25" x2="58" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="40" y1="78" x2="42" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="74" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="78" x2="58" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <path d="M50 30 L70 51.5 L50 73 L30 51.5Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* IF→THEN pathway connections */}
      {conns.map(([a,b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={c2} strokeWidth="1" opacity="0.5"/>
      ))}
      {/* Decision nodes — top is IF, branches are THEN */}
      {nodes.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 3.5 : i === 6 ? 3 : 2.2} fill={i === 0 ? c1 : c2} opacity={i === 0 || i === 6 ? 1 : 0.7}/>
      ))}
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRESSURE TESTED
// Compression bars + diamond with shield/check inside
// Certification and apparel sub-brand
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TestedMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="24" y="20" width="52" height="5" rx="1.2" fill={c1}/>
      <rect x="24" y="78" width="52" height="5" rx="1.2" fill={c1}/>
      <line x1="40" y1="25" x2="42" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="29" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="25" x2="58" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="40" y1="78" x2="42" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="74" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="78" x2="58" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <path d="M50 30 L70 51.5 L50 73 L30 51.5Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* Shield inside diamond */}
      <path d="M50 38 L61 44 L61 54 C61 60, 56 65, 50 67 C44 65, 39 60, 39 54 L39 44Z" stroke={c1} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      {/* Checkmark — certified */}
      <path d="M43 52 L48 57 L57 47" stroke={c1} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MASTERY METHOD
// Compression bars + diamond with brain/nodes inside
// PLACEHOLDER — awaiting Kirsty's input on direction
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MasteryMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;
  // Brain nodes inside diamond
  const nodes = [[42,40],[50,36],[58,40],[38,50],[50,48],[62,50],[42,60],[50,56],[58,60],[50,66]];
  const conns = [[0,1],[1,2],[0,3],[0,4],[2,4],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8],[6,9],[7,9],[8,9]];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="24" y="20" width="52" height="5" rx="1.2" fill={c1}/>
      <rect x="24" y="78" width="52" height="5" rx="1.2" fill={c1}/>
      <line x1="40" y1="25" x2="42" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="29" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="25" x2="58" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="40" y1="78" x2="42" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="74" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="78" x2="58" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <path d="M50 30 L70 51.5 L50 73 L30 51.5Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* Brain outline hint within diamond */}
      <path d="M50 36 C44 36, 38 40, 38 47 C38 50, 39 52, 40 53 C38 55, 38 58, 40 61 C42 64, 46 66, 50 66 C54 66, 58 64, 60 61 C62 58, 62 55, 60 53 C61 52, 62 50, 62 47 C62 40, 56 36, 50 36Z"
        stroke={c2} strokeWidth="1" fill="none" opacity="0.3"/>
      {/* Neural connections */}
      {conns.map(([a,b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={c2} strokeWidth="0.8" opacity="0.35"/>
      ))}
      {/* Neural nodes */}
      {nodes.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={[1,4,9].includes(i) ? 2.8 : 1.8} fill={[1,4,9].includes(i) ? c1 : c2} opacity={[1,4,9].includes(i) ? 1 : 0.6}/>
      ))}
      {/* "Pending" indicator */}
      <text x="50" y="96" textAnchor="middle" fontSize="5" fill={c2} opacity="0.5" fontFamily="Inter, sans-serif">DRAFT — KIRSTY INPUT PENDING</text>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRESSURE OVER FORCE
// Compression bars + diamond with sound wave / frequency
// Music and content sub-brand
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ForceMark = ({ size = 100, mono = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}90` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="24" y="20" width="52" height="5" rx="1.2" fill={c1}/>
      <rect x="24" y="78" width="52" height="5" rx="1.2" fill={c1}/>
      <line x1="40" y1="25" x2="42" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="29" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="25" x2="58" y2="30" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="40" y1="78" x2="42" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="50" y1="78" x2="50" y2="74" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <line x1="60" y1="78" x2="58" y2="73" stroke={c2} strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      <path d="M50 30 L70 51.5 L50 73 L30 51.5Z" stroke={c1} strokeWidth="2" fill={c3} strokeLinejoin="round"/>
      {/* Sound wave / pressure wave inside diamond */}
      <path d="M35 51.5 C37 51.5, 38 44, 40 44 C42 44, 43 58, 45 58 C47 58, 48 42, 50 42 C52 42, 53 62, 55 62 C57 62, 58 44, 60 44 C62 44, 63 51.5, 65 51.5"
        stroke={c1} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Bass frequency hint — wider wave */}
      <path d="M38 51.5 C40 47, 44 47, 50 51.5 C56 56, 60 56, 62 51.5"
        stroke={c2} strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const brands = [
  {
    id: "tpa", name: "The Pressure Academy", role: "Brand House",
    tagline: "Plan your life. Train with intent. Turn pressure into progress.",
    Component: TPAMark, primary: true,
    dna: "Two compression bars + faceted diamond. The bars ARE the pressure. The diamond IS the progress.",
    interior: "Faceted diamond with internal geometric cuts — raw carbon becoming precious stone.",
    usage: "Website header, app splash, business cards, investor deck, social profiles, apparel tag, certificates."
  },
  {
    id: "planner", name: "The Pressure Planner", role: "Product — App",
    tagline: "Your daily score. Your shift. Your system.",
    Component: PlannerMark,
    dna: "Same compression bars. Diamond contains a score ring — the daily Under Pressure Score.",
    interior: "Circular progress arc (representing daily score) centered in diamond. Tracking lines in corners show data structure.",
    usage: "App icon, Play Store listing, in-app header, Planner-specific marketing."
  },
  {
    id: "blueprint", name: "The Pressure Blueprint", role: "Module — Training System",
    tagline: "IF this, THEN that. Every position. Every answer.",
    Component: BlueprintMark,
    dna: "Same compression bars. Diamond contains IF→THEN decision tree nodes — the curriculum pathways.",
    interior: "Hierarchical node tree: single root node (IF) branching to decision points (THEN) converging to outcome node. The structured thinking made visual.",
    usage: "Blueprint section within Planner, training curriculum pages, BJJ-specific marketing."
  },
  {
    id: "tested", name: "Pressure Tested", role: "Product — Apparel & Certification",
    tagline: "Earned under pressure. Certified by the system.",
    Component: TestedMark,
    dna: "Same compression bars. Diamond contains a shield with checkmark — the certification stamp.",
    interior: "Shield shape (protection, earned status) with bold checkmark (verified, completed). The only sub-brand mark that implies achievement/completion.",
    usage: "Clothing labels, embroidery, belt-rank certificates, stickers, merch tags."
  },
  {
    id: "mastery", name: "Mastery Method", role: "Service — Education",
    tagline: "Structured learning for unstructured minds.",
    Component: MasteryMark, pending: true,
    dna: "Same compression bars. Diamond contains neural network brain nodes — structured thinking under pressure.",
    interior: "Brain silhouette hint with neural pathway nodes. Primary nodes mark the learning pathway. DRAFT — Kirsty's input will refine direction (v2 concepts A-D available).",
    usage: "Tutoring landing page, parent-facing materials, student certificates, educational content."
  },
  {
    id: "force", name: "Pressure Over Force", role: "Culture — Music & Content",
    tagline: "Sound under pressure. Frequency over volume.",
    Component: ForceMark,
    dna: "Same compression bars. Diamond contains a sound wave / pressure frequency — energy made audible.",
    interior: "Audio waveform with varying amplitude. Bass frequency undertone adds depth. The pressure is felt, not just seen.",
    usage: "Spotify artist profile, music videos, BTS content watermark, culture-side marketing."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function EcosystemAlignment() {
  const [mono, setMono] = useState(false);
  const [bgDark, setBgDark] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [view, setView] = useState("family"); // family | detail | lockups

  const bg = bgDark ? DK : CR;
  const fg = bgDark ? CR : DK;
  const muted = bgDark ? "#555" : "#999";

  return (
    <div style={{ background: "#050505", minHeight: "100vh", fontFamily: "'Inter', -apple-system, system-ui, sans-serif", color: CR }}>
      
      {/* ──── HEADER ──── */}
      <div style={{ padding: "48px 24px 20px", textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <TPAMark size={28} />
          <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: R, fontWeight: 700 }}>
            Ecosystem Logo Alignment
          </span>
        </div>
        <h1 style={{ fontSize: "34px", fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          One DNA. Five Rooms.
        </h1>
        <p style={{ fontSize: "14px", color: SA, maxWidth: "520px", margin: "0 auto 24px", lineHeight: 1.65 }}>
          Every sub-brand inherits the compression bars. Every diamond interior tells a different story. Same house, different rooms.
        </p>

        {/* Controls */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {["family", "detail", "lockups"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              padding: "7px 18px", borderRadius: "8px", fontSize: "11px", fontWeight: 600,
              cursor: "pointer", background: view === v ? R : "transparent",
              border: `1.5px solid ${view === v ? R : "#333"}`,
              color: view === v ? CR : "#777", transition: "all 0.2s", textTransform: "capitalize"
            }}>{v === "family" ? "Full Family" : v === "lockups" ? "Text Lockups" : "Detail View"}</button>
          ))}
          <div style={{ width: "1px", background: "#222", margin: "0 4px" }}/>
          <button onClick={() => setMono(!mono)} style={{
            padding: "7px 18px", borderRadius: "8px", fontSize: "11px", fontWeight: 600,
            cursor: "pointer", background: mono ? "#333" : "transparent",
            border: "1.5px solid #444", color: mono ? CR : "#666", transition: "all 0.2s"
          }}>{mono ? "● Mono" : "○ Mono"}</button>
          <button onClick={() => setBgDark(!bgDark)} style={{
            padding: "7px 18px", borderRadius: "8px", fontSize: "11px", fontWeight: 600,
            cursor: "pointer", background: !bgDark ? "#666" : "transparent",
            border: "1.5px solid #444", color: !bgDark ? CR : "#666", transition: "all 0.2s"
          }}>{bgDark ? "○ Light" : "● Light"}</button>
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "24px 16px 56px" }}>

        {/* ──── FAMILY VIEW ──── */}
        {view === "family" && (
          <>
            {/* Parent mark — hero */}
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "40px 24px 32px", background: bg, borderRadius: "20px",
              border: `2px solid ${R}30`, marginBottom: "12px", transition: "background 0.3s"
            }}>
              <TPAMark size={140} mono={mono}/>
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: fg, letterSpacing: "-0.02em" }}>THE PRESSURE ACADEMY</div>
                <div style={{ fontSize: "11px", color: bgDark ? AM : R, marginTop: "4px", letterSpacing: "0.06em" }}>BRAND HOUSE</div>
              </div>
            </div>
            
            {/* Connector line */}
            <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
              <div style={{ width: "2px", height: "24px", background: `${R}40` }}/>
            </div>

            {/* Sub-brands grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
              {brands.filter(b => !b.primary).map(b => (
                <div key={b.id} style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "20px 8px 16px", background: bg, borderRadius: "14px",
                  border: `1px solid ${b.pending ? `${AM}30` : "#222"}`,
                  transition: "background 0.3s", position: "relative"
                }}>
                  {b.pending && (
                    <div style={{
                      position: "absolute", top: "6px", right: "6px",
                      fontSize: "7px", color: AM, background: `${AM}15`,
                      padding: "1px 5px", borderRadius: "3px", fontWeight: 600
                    }}>DRAFT</div>
                  )}
                  <b.Component size={70} mono={mono}/>
                  <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: fg, lineHeight: 1.3 }}>{b.name.replace("The Pressure ", "").replace("Pressure ", "")}</div>
                    <div style={{ fontSize: "7px", color: muted, marginTop: "2px" }}>{b.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* DNA explanation */}
            <div style={{
              marginTop: "24px", padding: "24px", background: "#111", borderRadius: "16px",
              border: "1px solid #1a1a1a"
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: R, fontWeight: 700, marginBottom: "12px" }}>
                Visual DNA Rules
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { rule: "Compression bars", detail: "Every sub-brand mark has the same top + bottom bars. Same width, same radius, same weight. Non-negotiable." },
                  { rule: "Diamond container", detail: "Every sub-brand uses the same diamond outline (rotated square). The shape is the house. What's inside is the room." },
                  { rule: "Pressure lines", detail: "The lines between bars and diamond represent force. Same angles, same opacity. They tie the family together at medium+ sizes." },
                  { rule: "Interior tells the story", detail: "Score ring (Planner), decision tree (Blueprint), shield (Tested), brain nodes (Mastery), waveform (Force). Only the interior changes." },
                ].map((r, i) => (
                  <div key={i} style={{ padding: "12px", background: "#0a0a0a", borderRadius: "10px" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: CR, marginBottom: "4px" }}>{r.rule}</div>
                    <div style={{ fontSize: "11px", color: "#777", lineHeight: 1.6 }}>{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ──── DETAIL VIEW ──── */}
        {view === "detail" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {brands.map(b => {
              const isOpen = expanded === b.id;
              return (
                <div key={b.id} onClick={() => setExpanded(isOpen ? null : b.id)} style={{
                  background: "#111", borderRadius: "16px",
                  border: `2px solid ${isOpen ? R : b.pending ? `${AM}20` : "#1a1a1a"}`,
                  cursor: "pointer", overflow: "hidden", transition: "all 0.3s ease",
                  boxShadow: isOpen ? `0 8px 32px ${R}12` : "none"
                }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "20px",
                    padding: "20px 24px", background: isOpen ? bg : "transparent",
                    transition: "background 0.3s"
                  }}>
                    <b.Component size={72} mono={mono}/>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontSize: "16px", fontWeight: 700, color: fg }}>{b.name}</span>
                        {b.primary && <span style={{ fontSize: "8px", fontWeight: 700, color: DK, background: R, padding: "1px 6px", borderRadius: "3px" }}>PARENT</span>}
                        {b.pending && <span style={{ fontSize: "8px", fontWeight: 600, color: AM, background: `${AM}15`, padding: "1px 6px", borderRadius: "3px" }}>DRAFT</span>}
                      </div>
                      <div style={{ fontSize: "11px", color: muted }}>{b.role}</div>
                      <div style={{ fontSize: "12px", color: bgDark ? SA : CH, marginTop: "4px", fontStyle: "italic" }}>"{b.tagline}"</div>
                    </div>
                    {/* Size tests */}
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
                      {[32, 16].map(s => (
                        <div key={s} style={{ textAlign: "center" }}>
                          <b.Component size={s} mono={mono}/>
                          <div style={{ fontSize: "7px", color: "#444", marginTop: "2px" }}>{s}px</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                      {[
                        { label: "Shared DNA", text: b.dna },
                        { label: "Interior Element", text: b.interior },
                        { label: "Usage Contexts", text: b.usage },
                      ].map((panel, i) => (
                        <div key={i} style={{
                          padding: "14px", background: "#0a0a0a", borderRadius: "10px",
                          borderLeft: `3px solid ${i === 0 ? R : i === 1 ? AM : "#444"}`
                        }}>
                          <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: i === 0 ? R : i === 1 ? AM : "#666", marginBottom: "6px" }}>{panel.label}</div>
                          <p style={{ fontSize: "11px", color: "#999", lineHeight: 1.6, margin: 0 }}>{panel.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ──── LOCKUPS VIEW ──── */}
        {view === "lockups" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Horizontal lockup */}
            <div style={{
              padding: "32px", background: bg, borderRadius: "16px",
              border: "1px solid #222", transition: "background 0.3s"
            }}>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: muted, marginBottom: "16px", fontWeight: 600 }}>Horizontal Lockup</div>
              {brands.map(b => (
                <div key={b.id} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "12px 0", borderBottom: `1px solid ${bgDark ? "#1a1a1a" : "#eee"}`
                }}>
                  <b.Component size={40} mono={mono}/>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: fg, letterSpacing: "-0.01em" }}>{b.name}</div>
                    {!b.primary && <div style={{ fontSize: "9px", color: muted, marginTop: "1px" }}>by The Pressure Academy</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Stacked lockup */}
            <div style={{
              padding: "32px", background: bg, borderRadius: "16px",
              border: "1px solid #222", transition: "background 0.3s"
            }}>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: muted, marginBottom: "20px", fontWeight: 600 }}>Stacked Lockup</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {brands.filter(b => !b.primary).map(b => (
                  <div key={b.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <b.Component size={56} mono={mono}/>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: fg, marginTop: "8px", lineHeight: 1.3 }}>{b.name}</div>
                    <div style={{ fontSize: "8px", color: muted, marginTop: "2px" }}>by The Pressure Academy</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum size reference */}
            <div style={{
              padding: "24px", background: "#111", borderRadius: "16px",
              border: "1px solid #1a1a1a"
            }}>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: R, marginBottom: "14px", fontWeight: 600 }}>Minimum Size Reference</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", justifyContent: "center" }}>
                {[64, 48, 40, 32, 24, 16].map(s => (
                  <div key={s} style={{ textAlign: "center" }}>
                    <TPAMark size={s} mono={mono}/>
                    <div style={{ fontSize: "8px", color: "#555", marginTop: "4px" }}>{s}px</div>
                    {s === 16 && <div style={{ fontSize: "7px", color: R, marginTop: "2px" }}>MIN</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ──── IF→THEN→WHY ──── */}
        <div style={{
          marginTop: "24px", padding: "28px", borderRadius: "16px",
          background: "linear-gradient(160deg, #1a1208, #0d0d0d 60%)",
          border: `1px solid ${R}20`
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: R, fontWeight: 700, marginBottom: "14px" }}>
            Ecosystem Alignment — IF → THEN → WHY
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { if: "a new sub-brand is created", then: "it gets the same compression bars + diamond container, with a unique interior element", why: "visual consistency = brand trust. A customer who sees the Planner logo should instantly recognise the Tested logo as family." },
              { if: "a sub-brand mark appears WITHOUT compression bars", then: "it's wrong and must be corrected before publishing", why: "the bars are the non-negotiable DNA. Remove them and the sub-brand looks orphaned — a separate company, not a room in the house." },
              { if: "someone needs a simplified mark (e.g. social avatar at 16px)", then: "use the TPA parent mark (bars + diamond), not a sub-brand mark", why: "sub-brand interiors get noisy at tiny sizes. The parent mark is the cleanest at all scales." },
              { if: "Mastery Method direction changes after Kirsty's input", then: "the compression bars + diamond container stay fixed — only the interior brain/node treatment gets revised", why: "the container is the system. The interior is the conversation. Changing the interior doesn't break ecosystem alignment." },
              { if: "an AI agent builds a page for any sub-brand", then: "it must include the correct sub-brand mark from this system, not a placeholder or the parent mark", why: "each mark tells the story of its sub-brand. Using the wrong mark dilutes meaning and confuses the audience." },
            ].map((chain, i) => (
              <div key={i} style={{ padding: "14px", background: "#0a0a0a", borderRadius: "10px", fontSize: "12px", lineHeight: 1.7 }}>
                <span style={{ color: R, fontWeight: 700 }}>IF </span>
                <span style={{ color: CR }}>{chain.if} → </span>
                <span style={{ color: AM, fontWeight: 700 }}>THEN </span>
                <span style={{ color: CR }}>{chain.then} → </span>
                <span style={{ color: "#666", fontWeight: 700 }}>WHY </span>
                <span style={{ color: "#888" }}>{chain.why}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
