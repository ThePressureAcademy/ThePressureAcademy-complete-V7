import { useState } from "react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PALETTE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const R = "#C45B28";
const RL = "#E8734A";
const AM = "#D4915C";
const SA = "#E8C9A0";
const DK = "#0A0A0A";
const CH = "#2D2D2D";
const CR = "#FFF8F0";

// Mastery Method exclusive node colors
const TEAL = "#4A9B8E";    // Focus / Logic
const GOLD = "#E8A838";    // Achievement / Progress
const VIOLET = "#8B6AAE";  // Creativity / Problem-Solving
const CORAL = "#D4726A";   // Connection / Social

// Brain path — anatomically correct
const BRAIN = "M52 18 C46 17, 38 18, 32 22 C26 26, 22 32, 21 38 C20 44, 22 48, 24 52 C20 54, 18 58, 18 63 C18 68, 22 72, 28 74 C30 75, 33 76, 36 76 L38 78 C40 82, 44 85, 50 85 C56 85, 60 82, 62 78 L64 76 C68 76, 72 74, 76 71 C80 68, 82 63, 81 58 C80 54, 78 52, 76 50 C79 46, 80 42, 80 38 C80 32, 76 26, 70 22 C64 18, 58 17, 52 18Z";
const SULCUS = "M50 19 C48 28, 52 36, 48 44 C44 52, 52 60, 50 68 C49 72, 50 76, 50 76";

// Node definitions — [x, y, domain, isPrimary]
// Domains: "core"=rust, "focus"=teal, "achieve"=gold, "create"=violet, "connect"=coral
const NODES = [
  [38, 28, "focus", false],     // 0 - left frontal (focus)
  [52, 22, "core", true],       // 1 - superior frontal (PRIMARY - top)
  [66, 28, "focus", false],     // 2 - right frontal (focus)
  [30, 42, "create", false],    // 3 - left motor (creativity)
  [50, 38, "core", true],       // 4 - central (PRIMARY - cingulate)
  [70, 42, "create", false],    // 5 - right motor (creativity)
  [26, 58, "connect", false],   // 6 - left temporal (connection)
  [42, 52, "achieve", false],   // 7 - left parietal (achievement)
  [58, 52, "achieve", false],   // 8 - right parietal (achievement)
  [74, 58, "connect", false],   // 9 - right temporal (connection)
  [36, 68, "coral", false],     // 10 - left inferior (connection)
  [50, 64, "core", true],       // 11 - central deep (PRIMARY)
  [64, 68, "coral", false],     // 12 - right inferior (connection)
  [50, 78, "core", true],       // 13 - brain stem (PRIMARY - base)
];

const CONNECTIONS = [
  [0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],
  [3,6],[3,7],[4,7],[4,8],[5,8],[5,9],
  [6,7],[7,8],[8,9],[6,10],[7,11],[8,11],[9,12],
  [10,11],[11,12],[10,13],[11,13],[12,13]
];

const domainColor = (domain, mono) => {
  if (mono) return DK;
  switch(domain) {
    case "core": return R;
    case "focus": return TEAL;
    case "achieve": return GOLD;
    case "create": return VIOLET;
    case "connect": case "coral": return CORAL;
    default: return AM;
  }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MASTERY METHOD — STANDALONE (brain + chevrons only)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MasteryStandalone = ({ size = 200, mono = false, rusted = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}80` : AM;
  const c3 = mono ? `${DK}08` : `${R}08`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d={BRAIN} stroke={c1} strokeWidth="2.2" fill={c3} strokeLinejoin="round"/>
      <path d={SULCUS} stroke={c2} strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.25"/>
      {CONNECTIONS.map(([a,b], i) => (
        <line key={`c-${i}`} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]}
          stroke={c2} strokeWidth="0.9" opacity="0.4"/>
      ))}
      {NODES.map(([x,y,domain,isPrimary], i) => (
        <circle key={`n-${i}`} cx={x} cy={y}
          r={isPrimary ? 3.2 : 2.2}
          fill={rusted ? (isPrimary ? R : AM) : domainColor(domain, mono)}
          opacity={isPrimary || !mono ? 1 : 0.8}/>
      ))}
      <path d="M8 46 L14 52 L8 58" stroke={c1} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 46 L9 52 L3 58" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M92 46 L86 52 L92 58" stroke={c1} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M97 46 L91 52 L97 58" stroke={c2} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MASTERY METHOD — ECOSYSTEM (bars + diamond + brain)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MasteryEcosystem = ({ size = 200, mono = false, rusted = false }) => {
  const c1 = mono ? DK : R;
  const c2 = mono ? `${DK}80` : AM;
  const c3 = mono ? `${DK}10` : `${R}10`;

  // Brain nodes scaled & repositioned to fit inside diamond
  const ecoNodes = NODES.map(([x, y, domain, isPrimary]) => {
    const nx = 50 + (x - 50) * 0.52;
    const ny = 51.5 + (y - 50) * 0.52;
    return [nx, ny, domain, isPrimary];
  });

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
      {/* Brain hint outline inside diamond */}
      <path d="M50 35 C46 35, 40 38, 39 43 C38 46, 39 48, 40 49 C38 50, 38 53, 39 55 C40 58, 44 60, 48 60 L49 62 C49 63, 50 64, 50 64 C50 64, 51 63, 51 62 L52 60 C56 60, 60 58, 61 55 C62 53, 62 50, 60 49 C61 48, 62 46, 61 43 C60 38, 54 35, 50 35Z"
        stroke={c2} strokeWidth="0.6" fill="none" opacity="0.2"/>
      {/* Scaled connections */}
      {CONNECTIONS.map(([a,b], i) => (
        <line key={`c-${i}`} x1={ecoNodes[a][0]} y1={ecoNodes[a][1]} x2={ecoNodes[b][0]} y2={ecoNodes[b][1]}
          stroke={c2} strokeWidth="0.6" opacity="0.3"/>
      ))}
      {/* Scaled nodes */}
      {ecoNodes.map(([x,y,domain,isPrimary], i) => (
        <circle key={`n-${i}`} cx={x} cy={y}
          r={isPrimary ? 2.2 : 1.5}
          fill={rusted ? (isPrimary ? c1 : c2) : domainColor(domain, mono)}
          opacity={isPrimary || !mono ? 1 : 0.7}/>
      ))}
    </svg>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TPA PARENT MARK (for ecosystem comparison)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TPAMark = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="18" width="60" height="6" rx="1.5" fill={R}/>
    <path d="M50 32 L72 52 L50 72 L28 52Z" stroke={R} strokeWidth="2.5" fill={`${R}12`} strokeLinejoin="round"/>
    <path d="M50 32 L62 45 L50 62 L38 45Z" stroke={AM} strokeWidth="1" fill="none" opacity="0.4" strokeLinejoin="round"/>
    <line x1="28" y1="52" x2="72" y2="52" stroke={AM} strokeWidth="0.8" opacity="0.35"/>
    <rect x="20" y="80" width="60" height="6" rx="1.5" fill={R}/>
  </svg>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STRATEGY ANALYSIS DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const strategyPoints = [
  {
    title: "Instant Audience Signal",
    icon: "👁",
    analysis: "When a parent scrolls past 50 monochrome EdTech logos, the warm multi-color brain STOPS them. The color says 'this is for my kid' before they read a single word. The rust compression bars say 'this is part of a serious system.' Both messages in one glance.",
    strength: 5,
    risk: "None. This is pure upside."
  },
  {
    title: "Neurodivergent Design as Brand Truth",
    icon: "🧠",
    analysis: "Color-coded cognitive domains (teal=focus, gold=achievement, violet=creativity, coral=connection) aren't decorative — they're functional. ADHD/ASD learners respond to color-coded systems. The logo itself becomes a teaching framework. When a kid sees their 'creativity node' light up, they feel seen.",
    strength: 5,
    risk: "Must document the domain-to-color mapping. If colors become arbitrary, you lose the functional meaning."
  },
  {
    title: "Ecosystem Differentiation Without Disconnection",
    icon: "🏠",
    analysis: "This is the key insight: the compression bars and diamond container stay rust. The brain outline stays rust. Only the INTERIOR nodes get color. The DNA is preserved. But anyone looking at the full brand family instantly knows 'that one's different — that's the education arm.' It's the only room in the house with a painted ceiling.",
    strength: 5,
    risk: "Other sub-brands may request color. Must hold the line — color is Mastery Method's exclusive differentiator."
  },
  {
    title: "App Store & Social Standout",
    icon: "📱",
    analysis: "Education app stores are a sea of blue gradients and green checkmarks. A geometric brain with warm teal/gold/violet/coral nodes in a rust diamond is visually unique. At 512px app icon size, the individual node colors are clearly visible and beautiful.",
    strength: 4,
    risk: "At 16px favicon, colors collapse. Need a mono fallback (all rust) for tiny sizes."
  },
  {
    title: "Merchandise & Physical Materials",
    icon: "👕",
    analysis: "Multi-color embroidery costs more than single-color. But for Mastery Method specifically — student notebooks, certificates, reward stickers — the color IS the product. Kids want to collect all the domain colors. Parents see quality investment, not cheap print.",
    strength: 4,
    risk: "Budget for 5-color embroidery/print. Don't cheap out to 2-color — it defeats the purpose."
  },
  {
    title: "Curriculum-Integrated Branding",
    icon: "📚",
    analysis: "Each cognitive domain gets its own color throughout the learning experience: teal worksheets for focus tasks, gold certificates for achievements, violet projects for creative work, coral activities for group sessions. The logo isn't separate from the method — it IS the method's visual language.",
    strength: 5,
    risk: "Must build the curriculum around the color system, not bolt it on after. Inconsistency kills the magic."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function MasteryMethodFinal() {
  const [mode, setMode] = useState("color"); // color | rusted | mono
  const [bgDark, setBgDark] = useState(true);
  const [tab, setTab] = useState("logo"); // logo | strategy | domains | ecosystem

  const bg = bgDark ? DK : CR;
  const fg = bgDark ? CR : DK;
  const muted = bgDark ? "#555" : "#aaa";
  const isMono = mode === "mono";
  const isRusted = mode === "rusted";

  return (
    <div style={{ background: "#050505", minHeight: "100vh", fontFamily: "'Inter', -apple-system, system-ui, sans-serif", color: CR }}>

      {/* Header */}
      <div style={{ padding: "48px 24px 20px", textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <MasteryStandalone size={32} mono={false}/>
          <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: R, fontWeight: 700 }}>
            Mastery Method — Final Logo & Strategy
          </span>
        </div>
        <h1 style={{ fontSize: "34px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Concept D: Pressure Node
        </h1>
        <p style={{ fontSize: "13px", color: SA, margin: "0 0 4px" }}>
          Kirsty's direction: multi-color nodes for education differentiation
        </p>
        <p style={{ fontSize: "14px", color: AM, fontStyle: "italic" }}>
          "Structured learning for unstructured minds."
        </p>

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: "6px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
          {[
            { id: "logo", label: "Logo Variants" },
            { id: "strategy", label: "Color Strategy Analysis" },
            { id: "domains", label: "Domain Map" },
            { id: "ecosystem", label: "Ecosystem Fit" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "8px 20px", borderRadius: "8px", fontSize: "11px", fontWeight: 600,
              cursor: "pointer", background: tab === t.id ? R : "transparent",
              border: `1.5px solid ${tab === t.id ? R : "#333"}`,
              color: tab === t.id ? CR : "#666", transition: "all 0.2s"
            }}>{t.label}</button>
          ))}
        </div>

        {/* Mode controls */}
        {(tab === "logo" || tab === "ecosystem") && (
          <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "12px" }}>
            {[
              { id: "color", label: "Multi-Color" },
              { id: "rusted", label: "Rust Only" },
              { id: "mono", label: "Mono (Black)" },
            ].map(m => (
              <button key={m.id} onClick={() => setMode(m.id)} style={{
                padding: "6px 14px", borderRadius: "6px", fontSize: "10px", fontWeight: 600,
                cursor: "pointer", background: mode === m.id ? "#333" : "transparent",
                border: "1px solid #333", color: mode === m.id ? CR : "#555", transition: "all 0.2s"
              }}>{m.label}</button>
            ))}
            <div style={{ width: "1px", background: "#222", margin: "0 2px" }}/>
            <button onClick={() => setBgDark(!bgDark)} style={{
              padding: "6px 14px", borderRadius: "6px", fontSize: "10px", fontWeight: 600,
              cursor: "pointer", background: !bgDark ? "#555" : "transparent",
              border: "1px solid #333", color: !bgDark ? CR : "#555", transition: "all 0.2s"
            }}>{bgDark ? "○ Light BG" : "● Light BG"}</button>
          </div>
        )}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px 56px" }}>

        {/* ──── LOGO TAB ──── */}
        {tab === "logo" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Hero display */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "40px",
              padding: "48px 32px", background: bg, borderRadius: "20px",
              border: "1px solid #222", transition: "background 0.3s"
            }}>
              {/* Standalone mark */}
              <div style={{ textAlign: "center" }}>
                <MasteryStandalone size={200} mono={isMono} rusted={isRusted}/>
                <div style={{ fontSize: "10px", color: muted, marginTop: "8px" }}>Standalone Mark</div>
              </div>
              {/* Size strip */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                {[80, 48, 32, 16].map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <MasteryStandalone size={s} mono={isMono || s <= 16} rusted={isRusted}/>
                    <span style={{ fontSize: "9px", color: "#444", width: "30px" }}>{s}px{s <= 16 ? " ⚠" : ""}</span>
                  </div>
                ))}
                <div style={{ fontSize: "8px", color: "#555", maxWidth: "100px", textAlign: "center", lineHeight: 1.4, marginTop: "4px" }}>
                  ⚠ At 16px: nodes collapse to rust (mono fallback)
                </div>
              </div>
            </div>

            {/* Ecosystem mark */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "40px",
              padding: "40px 32px", background: bg, borderRadius: "20px",
              border: "1px solid #222", transition: "background 0.3s"
            }}>
              <div style={{ textAlign: "center" }}>
                <MasteryEcosystem size={180} mono={isMono} rusted={isRusted}/>
                <div style={{ fontSize: "10px", color: muted, marginTop: "8px" }}>Ecosystem Mark (bars + diamond)</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                {[64, 40, 24].map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <MasteryEcosystem size={s} mono={isMono || s <= 24} rusted={isRusted}/>
                    <span style={{ fontSize: "9px", color: "#444" }}>{s}px</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage note */}
            <div style={{ padding: "16px 20px", background: "#111", borderRadius: "12px", fontSize: "12px", lineHeight: 1.7, color: "#888", borderLeft: `3px solid ${R}` }}>
              <strong style={{ color: CR }}>When to use which:</strong> Standalone mark (brain + chevrons) for Mastery Method's own pages, app icon, and social. Ecosystem mark (bars + diamond + brain) when appearing alongside other TPA sub-brands in family layouts, the website footer, or investor materials.
            </div>
          </div>
        )}

        {/* ──── STRATEGY TAB ──── */}
        {tab === "strategy" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ padding: "20px", background: "#111", borderRadius: "16px", border: `1px solid ${R}25`, marginBottom: "4px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: R, fontWeight: 700, marginBottom: "8px" }}>Strategic Assessment</div>
              <p style={{ fontSize: "14px", color: CR, margin: "0 0 6px", fontWeight: 600 }}>
                Kirsty's multi-color direction: strong strategy, not just aesthetic preference.
              </p>
              <p style={{ fontSize: "12px", color: SA, margin: 0, lineHeight: 1.7 }}>
                The insight is that color isn't decoration — it's a signal. In a brand ecosystem built on industrial rust/amber discipline, deliberately giving ONE sub-brand a warm multi-color palette creates instant audience recognition AND preserves ecosystem integrity. It works because it's the exception, not the rule.
              </p>
            </div>

            {strategyPoints.map((s, i) => (
              <div key={i} style={{
                padding: "18px 20px", background: "#111", borderRadius: "14px",
                border: "1px solid #1a1a1a"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>{s.icon}</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: CR }}>{s.title}</span>
                  </div>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[1,2,3,4,5].map(n => (
                      <div key={n} style={{
                        width: "8px", height: "8px", borderRadius: "2px",
                        background: n <= s.strength ? "#22c55e" : "#222"
                      }}/>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: "12px", color: "#999", lineHeight: 1.7, margin: "0 0 8px" }}>{s.analysis}</p>
                <div style={{ fontSize: "11px", color: CORAL, padding: "6px 10px", background: `${CORAL}10`, borderRadius: "6px", display: "inline-block" }}>
                  ⚡ Risk: {s.risk}
                </div>
              </div>
            ))}

            {/* Verdict */}
            <div style={{
              padding: "24px", borderRadius: "16px",
              background: `linear-gradient(160deg, #0d1a12, #0d0d0d 60%)`,
              border: "1px solid #22c55e30"
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#22c55e", fontWeight: 700, marginBottom: "8px" }}>VERDICT</div>
              <p style={{ fontSize: "16px", fontWeight: 700, color: CR, margin: "0 0 8px" }}>
                Strategy approved. Average strength: 4.7/5. No blocking risks.
              </p>
              <p style={{ fontSize: "12px", color: "#888", margin: 0, lineHeight: 1.7 }}>
                The one condition: color must stay FUNCTIONAL, not decorative. Every node color maps to a cognitive domain. Every domain maps to curriculum materials. If the colors become random, you lose the strategic advantage and it just looks like another rainbow.
              </p>
            </div>
          </div>
        )}

        {/* ──── DOMAINS TAB ──── */}
        {tab === "domains" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Brain with labeled nodes */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "40px", background: bg, borderRadius: "20px", border: "1px solid #222",
              transition: "background 0.3s"
            }}>
              <MasteryStandalone size={240} mono={false}/>
            </div>

            {/* Domain legend */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { domain: "System / Core", color: R, hex: "#C45B28", nodes: "Top, Center, Deep, Stem", desc: "The learning pathway spine. These 4 primary nodes are ALWAYS rust — they anchor the mark to TPA. They represent the METHOD itself: the structured system that connects everything.", region: "Superior frontal → Cingulate → Deep → Brain stem" },
                { domain: "Focus / Logic", color: TEAL, hex: "#4A9B8E", nodes: "Left & Right Frontal", desc: "Concentration, reasoning, working memory. The executive functions that ADHD learners are building. Teal is calming but alert — it says 'attention' without screaming.", region: "Prefrontal cortex (bilateral)" },
                { domain: "Achievement / Progress", color: GOLD, hex: "#E8A838", nodes: "Left & Right Parietal", desc: "Milestones earned, skills mastered, progress measured. Gold = reward. These nodes light up when a student hits a checkpoint. Aspirational but warm.", region: "Parietal lobe (bilateral)" },
                { domain: "Creativity / Problem-Solving", color: VIOLET, hex: "#8B6AAE", nodes: "Left & Right Motor", desc: "Lateral thinking, pattern recognition, 'what if' exploration. Violet = imagination with structure. Not chaotic — creative within the method.", region: "Premotor / supplementary motor area" },
                { domain: "Connection / Social", color: CORAL, hex: "#D4726A", nodes: "Temporal + Inferior", desc: "Collaboration, communication, group learning. The nodes that bridge hemispheres. Coral = warmth, human connection, the social side of structured learning.", region: "Temporal lobe + inferior regions" },
              ].map((d, i) => (
                <div key={i} style={{
                  padding: "18px", background: "#111", borderRadius: "14px",
                  border: `1px solid ${d.color}20`, gridColumn: i === 0 ? "1 / -1" : undefined
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: d.color, flexShrink: 0 }}/>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: CR }}>{d.domain}</span>
                    <span style={{ fontSize: "10px", color: "#555", fontFamily: "monospace" }}>{d.hex}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#999", lineHeight: 1.6, margin: "0 0 6px" }}>{d.desc}</p>
                  <div style={{ fontSize: "10px", color: "#555" }}>
                    <strong style={{ color: "#777" }}>Nodes:</strong> {d.nodes} · <strong style={{ color: "#777" }}>Brain region:</strong> {d.region}
                  </div>
                </div>
              ))}
            </div>

            {/* Usage rules */}
            <div style={{ padding: "20px", background: "#111", borderRadius: "14px", border: "1px solid #1a1a1a" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: R, fontWeight: 700, marginBottom: "12px" }}>
                Color Rules — IF → THEN → WHY
              </div>
              {[
                { if: "a node color isn't in the 5 approved values", then: "reject it", why: "'warm spectrum' means curated, not random. Every color maps to a cognitive domain." },
                { if: "the mark appears at 16px or smaller", then: "all nodes collapse to rust", why: "color isn't legible below 24px. Mono fallback preserves recognition." },
                { if: "embroidery, stamp, or single-color context", then: "primary nodes rust, secondary nodes amber", why: "the mark must work without color. Color is enhancement, not dependency." },
                { if: "curriculum materials use a domain color", then: "it must match the logo node exactly", why: "teal worksheet = focus task. Gold certificate = achievement. Break the mapping and you break the system." },
              ].map((chain, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "#0a0a0a", borderRadius: "8px", fontSize: "11px", lineHeight: 1.7, marginBottom: i < 3 ? "6px" : 0 }}>
                  <span style={{ color: R, fontWeight: 700 }}>IF </span><span style={{ color: CR }}>{chain.if} → </span>
                  <span style={{ color: AM, fontWeight: 700 }}>THEN </span><span style={{ color: CR }}>{chain.then} → </span>
                  <span style={{ color: "#555", fontWeight: 700 }}>WHY </span><span style={{ color: "#888" }}>{chain.why}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ──── ECOSYSTEM TAB ──── */}
        {tab === "ecosystem" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Side by side: TPA parent + Mastery Method */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "48px",
              padding: "40px", background: bg, borderRadius: "20px", border: "1px solid #222",
              transition: "background 0.3s"
            }}>
              <div style={{ textAlign: "center" }}>
                <TPAMark size={120}/>
                <div style={{ fontSize: "12px", fontWeight: 700, color: fg, marginTop: "8px" }}>The Pressure Academy</div>
                <div style={{ fontSize: "9px", color: muted }}>Brand House</div>
              </div>
              <div style={{ fontSize: "28px", color: "#333" }}>→</div>
              <div style={{ textAlign: "center" }}>
                <MasteryEcosystem size={120} mono={isMono} rusted={isRusted}/>
                <div style={{ fontSize: "12px", fontWeight: 700, color: fg, marginTop: "8px" }}>Mastery Method</div>
                <div style={{ fontSize: "9px", color: muted }}>by The Pressure Academy</div>
              </div>
            </div>

            {/* What's shared vs what's unique */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ padding: "20px", background: "#111", borderRadius: "14px", borderLeft: `3px solid ${R}` }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: R, fontWeight: 700, marginBottom: "10px" }}>Shared DNA (fixed)</div>
                {["Compression bars (top + bottom)", "Diamond container outline", "Pressure lines (bar → diamond)", "Rust as primary structural color", "Amber as secondary / opacity layer"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px 0", fontSize: "12px", color: "#999" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "2px", background: R, flexShrink: 0 }}/>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ padding: "20px", background: "#111", borderRadius: "14px", borderLeft: `3px solid ${TEAL}` }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, fontWeight: 700, marginBottom: "10px" }}>Mastery Method Exclusive</div>
                {["Multi-color neural nodes (5 domain colors)", "Brain silhouette outline within diamond", "Compression chevrons (standalone mark)", "Warm spectrum: teal, gold, violet, coral", "16px mono fallback rule"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px 0", fontSize: "12px", color: "#999" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "2px", background: [TEAL, GOLD, VIOLET, CORAL, AM][i], flexShrink: 0 }}/>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "18px 20px", background: "#111", borderRadius: "12px", fontSize: "12px", lineHeight: 1.7, color: "#888", borderLeft: `3px solid ${GOLD}` }}>
              <strong style={{ color: CR }}>The painted ceiling rule:</strong> Mastery Method is the only room in the house with a coloured ceiling. Every other sub-brand (Planner, Blueprint, Tested, Force) stays in rust/amber. This isn't a limitation — it's a FEATURE. When everything else is monochrome, the one room with colour draws the eye. That's Kirsty's insight: differentiation through restraint everywhere else.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
