import { useState, useEffect } from "react";

// ━━━━ PALETTE ━━━━
const BG = "#0A0A0A";
const BG2 = "#111";
const CARD = "#1A1A1A";
const CARD2 = "#252525";
const R = "#C45B28";
const GO = "#D4915C";
const GR = "#5BA85B";
const RD = "#C44B4B";
const CR = "#FFF8F0";
const MT = "#888";
const AM = "#E8A050";
const GOLD_BAR = "#D4A840";

// ━━━━ SHARED COMPONENTS ━━━━
const TopBar = ({ date = "Tue, 3 Mar" }) => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 14px", borderBottom:`1px solid #1a1a1a`, background:"#0e0e0e" }}>
    <div style={{ fontSize:"10px", color:MT, fontStyle:"italic" }}>The Pressure Planner</div>
    <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
      <span style={{ fontSize:"9px", color:MT }}>{date} · NIGHT</span>
      <div style={{ width:"18px", height:"10px", borderRadius:"5px", background:R }}/>
      <span style={{ fontSize:"8px" }}>🌙</span>
      <span style={{ fontSize:"7px", fontWeight:700, color:CR, background:"#333", padding:"1px 4px", borderRadius:"3px" }}>NIGHT</span>
    </div>
  </div>
);

const TabBar = ({ active = "Today" }) => (
  <div style={{ display:"flex", gap:"2px", padding:"6px 8px", borderBottom:`1px dashed ${R}30` }}>
    {["📊 Today","🔪 Log","🏗 Blueprint","📓 Journal","⏱ Timer","💬"].map((t,i) => {
      const name = ["Today","Log","Blueprint","Journal","Timer","Coach"][i];
      const isActive = active === name;
      return <div key={i} style={{ padding:"4px 8px", borderRadius:"5px", fontSize:"9px", fontWeight:600, background:isActive?R:"transparent", color:isActive?CR:MT, whiteSpace:"nowrap" }}>{t}</div>;
    })}
  </div>
);

const BottomNav = ({ active = "Today" }) => (
  <div style={{ display:"flex", justifyContent:"space-around", padding:"8px 0 6px", borderTop:`1px solid #1a1a1a`, background:"#080808" }}>
    {[
      { icon:"📊", label:"Today" },{ icon:"🔪", label:"Log" },{ icon:"🥋", label:"BJJ" },{ icon:"💬", label:"Coach" },{ icon:"⚙️", label:"More" }
    ].map((n,i) => (
      <div key={i} style={{ textAlign:"center", opacity: n.label===active?1:0.4 }}>
        <div style={{ fontSize:"14px" }}>{n.icon}</div>
        <div style={{ fontSize:"7px", color: n.label===active?R:MT, fontWeight:600 }}>{n.label}</div>
      </div>
    ))}
  </div>
);

const SpotifyBar = () => (
  <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"6px", background:"#151515", margin:"4px 12px", borderRadius:"8px" }}>
    <div style={{ width:"22px", height:"22px", borderRadius:"50%", background:"#333", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <span style={{ fontSize:"10px", color:R }}>▶</span>
    </div>
    <div>
      <div style={{ fontSize:"9px", fontWeight:700, color:CR }}>Pressure Over Force</div>
      <div style={{ fontSize:"7px", color:MT }}>Hay-Zell × HNT · Spotify</div>
    </div>
  </div>
);

const Slider = ({ label, sub, value, max=5 }) => {
  const pct = (value/max)*100;
  return (
    <div style={{ marginBottom:"10px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
        <div>
          <div style={{ fontSize:"11px", fontWeight:700, color:CR }}>{label}</div>
          <div style={{ fontSize:"8px", color:R }}>{sub}</div>
        </div>
        <div style={{ fontSize:"16px", fontWeight:700, color:R }}>{value}</div>
      </div>
      <div style={{ position:"relative", height:"14px", marginTop:"2px" }}>
        <div style={{ position:"absolute", top:"6px", left:0, right:0, height:"2px", background:"#333", borderRadius:"1px" }}/>
        <div style={{ position:"absolute", top:"6px", left:0, width:`${pct}%`, height:"2px", background:`${R}60`, borderRadius:"1px" }}/>
        <div style={{ position:"absolute", top:"2px", left:`calc(${pct}% - 5px)`, width:"10px", height:"10px", borderRadius:"50%", background:R }}/>
      </div>
    </div>
  );
};

// ━━━━ SCREEN 1: TODAY DASHBOARD ━━━━
const ScreenToday = () => (
  <div style={{ background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif", display:"flex", flexDirection:"column" }}>
    {/* Date nav */}
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 14px", background:CARD }}>
      <div style={{ width:"22px", height:"22px", borderRadius:"6px", background:"#333", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px", color:MT }}>◀</div>
      <div style={{ fontSize:"12px", fontWeight:700, color:CR }}>Sun, 1 Mar (Past)</div>
      <div style={{ width:"22px", height:"22px", borderRadius:"6px", background:"#333", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px", color:MT }}>▶</div>
    </div>

    <div style={{ padding:"12px 14px", flex:1 }}>
      {/* Score card */}
      <div style={{ background:CARD, borderRadius:"12px", padding:"16px", textAlign:"center", border:`1px solid ${R}20`, marginBottom:"10px" }}>
        <div style={{ fontSize:"9px", fontWeight:700, color:GO, letterSpacing:"0.1em" }}>UNDER PRESSURE SCORE</div>
        {/* Score ring */}
        <div style={{ position:"relative", width:"100px", height:"100px", margin:"10px auto" }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#222" strokeWidth="6" fill="none"/>
            <circle cx="50" cy="50" r="40" stroke={GO} strokeWidth="6" fill="none"
              strokeDasharray={`${67/100*251.2} 251.2`} strokeLinecap="round"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:"32px", fontWeight:800, color:GO }}>67</div>
        </div>
        <div style={{ fontSize:"11px", fontWeight:800, color:GO, letterSpacing:"0.1em" }}>UNDER PRESSURE</div>
        <div style={{ fontSize:"9px", color:MT }}>7-day: 64</div>
      </div>

      {/* Stats row */}
      <div style={{ display:"flex", gap:"6px", marginBottom:"10px" }}>
        {[{ icon:"⭐", val:"1", label:"Streak" },{ icon:"🥋", val:"2.5", label:"Mat Hrs" },{ icon:"💧", val:"3.5", label:"Litres" }].map((s,i) => (
          <div key={i} style={{ flex:1, background:CARD, borderRadius:"8px", padding:"8px 6px", display:"flex", alignItems:"center", gap:"4px" }}>
            <span style={{ fontSize:"12px" }}>{s.icon}</span>
            <span style={{ fontSize:"16px", fontWeight:800, color:CR }}>{s.val}</span>
            <span style={{ fontSize:"8px", color:MT }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Non-negotiables */}
      <div style={{ background:CARD, borderRadius:"10px", padding:"10px 12px", border:`1px solid ${R}15` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
          <div style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.08em" }}>🎯 NON-NEGOTIABLES</div>
          <span style={{ fontSize:"9px", color:GR, fontWeight:700 }}>6/6</span>
        </div>
        <div style={{ height:"3px", background:"#222", borderRadius:"2px", marginBottom:"6px" }}>
          <div style={{ width:"100%", height:"3px", background:GR, borderRadius:"2px" }}/>
        </div>
        {["BJJ drill before shift","Hit protein target + meal prep","3L water minimum","10min mobility / stretching","30min brand / business work","15min learning / reading"].map((item,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", padding:"3px 0", fontSize:"10px", color:MT, textDecoration:"line-through", opacity:0.6 }}>
            <span style={{ fontSize:"11px" }}>✅</span>{item}
          </div>
        ))}
      </div>

      {/* 7-day bars */}
      <div style={{ background:CARD, borderRadius:"10px", padding:"10px 12px", marginTop:"8px" }}>
        <div style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.08em", marginBottom:"6px" }}>📈 7-DAY</div>
        <div style={{ display:"flex", gap:"4px" }}>
          <div style={{ flex:1, textAlign:"center" }}>
            <div style={{ fontSize:"8px", color:MT, marginBottom:"2px" }}>60</div>
            <div style={{ height:"8px", background:GOLD_BAR, borderRadius:"3px" }}/>
          </div>
          <div style={{ flex:1, textAlign:"center" }}>
            <div style={{ fontSize:"8px", color:MT, marginBottom:"2px" }}>67</div>
            <div style={{ height:"8px", background:GOLD_BAR, borderRadius:"3px" }}/>
          </div>
        </div>
      </div>
    </div>
    <SpotifyBar/>
    <BottomNav active="Today"/>
  </div>
);

// ━━━━ SCREEN 2: DAILY LOG ━━━━
const ScreenLog = () => (
  <div style={{ background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif" }}>
    <TopBar/>
    <TabBar active="Log"/>
    <div style={{ padding:"14px 16px" }}>
      <div style={{ fontSize:"16px", fontWeight:700, color:AM, marginBottom:"14px" }}>Log — Tue, 3 Mar</div>
      <Slider label="Sleep Quality" sub="Average" value={3}/>
      <Slider label="Stress Level" sub="Noticeable" value={5}/>
      <Slider label="Training Intensity" sub="Solid Session" value={3}/>
      <Slider label="Nutrition" sub="Okay" value={3}/>
      <Slider label="Hydration (L)" sub="Optimal" value={3.5}/>
      <Slider label="Family/Social" sub="Good Time" value={4}/>
      <div style={{ fontSize:"11px", fontWeight:700, color:CR, marginTop:"4px", marginBottom:"3px" }}>Pain / Injury</div>
      <div style={{ background:CARD, borderRadius:"6px", padding:"8px 10px", fontSize:"10px", color:CR, marginBottom:"10px" }}>Left Shoulder playing up, very tight.</div>
      <div style={{ fontSize:"11px", fontWeight:700, color:CR, marginBottom:"3px" }}>Notes</div>
      <div style={{ background:CARD, borderRadius:"6px", padding:"8px 10px", fontSize:"10px", color:CR, marginBottom:"12px", border:`1px solid ${R}40` }}>Thus far, it has been productive.</div>
      <div style={{ background:R, borderRadius:"8px", padding:"10px", textAlign:"center", fontSize:"12px", fontWeight:700, color:CR }}>💾 SAVE</div>
    </div>
  </div>
);

// ━━━━ SCREEN 3: PAST DATE LOG ━━━━
const ScreenPastLog = () => (
  <div style={{ background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif" }}>
    <div style={{ padding:"14px 16px" }}>
      <div style={{ fontSize:"16px", fontWeight:700, color:AM, marginBottom:"2px", fontStyle:"italic" }}>Log — Sun, 1 Mar (Past Date)</div>
      <div style={{ fontSize:"9px", color:"#E8A040", marginBottom:"12px" }}>⚠ You are editing a past date</div>
      <Slider label="Sleep Quality" sub="Good" value={4}/>
      <Slider label="Stress Level" sub="Mild" value={3}/>
      <Slider label="Training Intensity" sub="Comp Intensity" value={5}/>
      <Slider label="Nutrition" sub="On Plan" value={4}/>
      <Slider label="Hydration (L)" sub="Optimal" value={3.5}/>
      <Slider label="Family/Social" sub="N/A" value={0}/>
      <div style={{ fontSize:"11px", fontWeight:700, color:CR, marginTop:"2px", marginBottom:"3px" }}>Pain / Injury</div>
      <div style={{ background:CARD, borderRadius:"6px", padding:"8px 10px", fontSize:"10px", color:CR, marginBottom:"10px" }}>Mild migraine most of the day, it was extremely hot though.</div>
      <div style={{ fontSize:"11px", fontWeight:700, color:CR, marginBottom:"3px" }}>Notes</div>
      <div style={{ background:CARD, borderRadius:"6px", padding:"8px 10px", fontSize:"10px", color:CR, marginBottom:"12px", border:`1px solid ${R}40` }}>Awesome No-Gi session! Kimura trap details were black belt level</div>
      <div style={{ background:R, borderRadius:"8px", padding:"10px", textAlign:"center", fontSize:"12px", fontWeight:700, color:CR }}>💾 SAVE</div>
    </div>
  </div>
);

// ━━━━ SCREEN 4: JOURNAL ━━━━
const ScreenJournal = () => (
  <div style={{ background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif" }}>
    <TopBar/>
    <TabBar active="Journal"/>
    <div style={{ padding:"10px 14px" }}>
      <div style={{ border:`1.5px dashed ${R}50`, borderRadius:"10px", padding:"12px", marginBottom:"12px" }}>
        <div style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.06em", marginBottom:"1px" }}>📓 TECHNIQUE JOURNAL</div>
        <div style={{ fontSize:"8px", color:MT, marginBottom:"8px" }}>Log notes. AI analyses positions + mechanics.</div>
        <div style={{ background:CARD, borderRadius:"6px", padding:"10px", fontSize:"10px", color:"#555", minHeight:"36px", marginBottom:"8px" }}>e.g. Knee shield worked for backward control...</div>
        <div style={{ background:R, borderRadius:"6px", padding:"8px", textAlign:"center", fontSize:"10px", fontWeight:700, color:CR }}>📊 LOG & ANALYSE</div>
      </div>
      <div style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.08em", marginBottom:"6px" }}>ENTRIES</div>
      <div style={{ background:CARD, borderRadius:"8px", padding:"12px" }}>
        <div style={{ fontSize:"9px", color:MT, marginBottom:"3px" }}>Tue, 3 Mar</div>
        <div style={{ fontSize:"11px", color:CR, lineHeight:1.5 }}>We drilled bolo variations back takes this morning, using leg weave systems – I need to remember to monitor my neck position during the roll.</div>
        <div style={{ fontSize:"8px", color:GR, marginTop:"4px" }}>📊 Logged. Add detail for better analysis.</div>
      </div>
    </div>
  </div>
);

// ━━━━ SCREEN 5: BLUEPRINT KNEE-CUT ━━━━
const ScreenKneeCut = () => (
  <div style={{ padding:"16px 14px", background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif" }}>
    <div style={{ fontSize:"9px", fontWeight:700, color:R, letterSpacing:"0.08em", marginBottom:"2px" }}>HUB 2</div>
    <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
      <span style={{ fontSize:"18px" }}>🔪</span>
      <span style={{ fontSize:"18px", fontWeight:800, color:CR }}>Knee-Cut</span>
    </div>
    <div style={{ fontSize:"12px", fontStyle:"italic", color:MT, marginBottom:"14px" }}>"Slice + underhook."</div>
    <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"10px" }}>
      <span style={{ fontSize:"12px" }}>⚙️</span>
      <span style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.1em" }}>CHAINS</span>
    </div>
    <div style={{ borderLeft:`2.5px solid #4A9B8E`, paddingLeft:"12px" }}>
      <div style={{ fontSize:"9px", fontWeight:700, color:GO, letterSpacing:"0.06em", marginBottom:"4px" }}>PRESSURE</div>
      <div style={{ fontSize:"8px", fontWeight:700, color:GR, letterSpacing:"0.04em", marginBottom:"1px" }}>ACTION</div>
      <div style={{ fontSize:"13px", color:CR, marginBottom:"10px" }}>Knee between, underhook.</div>
      <div style={{ background:CARD2, borderRadius:"8px", padding:"10px 12px", marginBottom:"6px" }}>
        <div style={{ fontSize:"11px", fontWeight:700, color:GR }}>IF: Flat</div>
        <div style={{ fontSize:"11px", color:"#6CB4EE", marginTop:"2px" }}>→ Side Control</div>
        <div style={{ fontSize:"9px", color:"#6CB4EE", marginTop:"1px", paddingLeft:"10px", opacity:0.7 }}>→ Side Control ↗</div>
      </div>
      <div style={{ background:CARD2, borderRadius:"8px", padding:"10px 12px" }}>
        <div style={{ fontSize:"11px", fontWeight:700, color:GR }}>IF: Turn</div>
        <div style={{ fontSize:"11px", color:"#6CB4EE", marginTop:"2px" }}>→ Mount/guillotine</div>
        <div style={{ fontSize:"8px", fontWeight:700, color:GO, letterSpacing:"0.04em", marginTop:"4px" }}>SCORE</div>
      </div>
    </div>
  </div>
);

// ━━━━ SCREEN 6: BLUEPRINT TOE HOLD ━━━━
const ScreenToeHold = () => (
  <div style={{ padding:"16px 14px", background:BG, minHeight:"100%", fontFamily:"'Inter',sans-serif" }}>
    <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"8px" }}>
      <span style={{ fontSize:"18px" }}>🔬</span>
      <span style={{ fontSize:"18px", fontWeight:800, color:AM }}>Toe Hold</span>
    </div>
    <div style={{ fontSize:"9px", fontWeight:600, color:GO, marginBottom:"4px" }}>Inversion/rotation</div>
    <div style={{ fontSize:"10px", color:GO, marginBottom:"6px" }}>Target: Ankle — ATFL, CFL</div>
    <div style={{ fontSize:"12px", color:CR, lineHeight:1.4, marginBottom:"14px" }}>Figure-four on foot. Force inversion stresses ATFL and CFL. Straight leg transfers to knee.</div>
    <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"8px" }}>
      <span style={{ fontSize:"11px" }}>🔑</span>
      <span style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.1em" }}>KEYS</span>
    </div>
    {["Grip on toes/ball, not ankle","Rotate inward (toward midline)","Body rotation, not just arms","Straight leg = more danger","Combine with entanglement"].map((k,i) => (
      <div key={i} style={{ fontSize:"11px", color:CR, padding:"2px 0 2px 6px", display:"flex", gap:"5px" }}>
        <span style={{ color:MT, fontSize:"6px", marginTop:"4px" }}>•</span>{k}
      </div>
    ))}
    <div style={{ display:"flex", alignItems:"center", gap:"5px", marginTop:"10px", marginBottom:"6px" }}>
      <span style={{ fontSize:"11px" }}>❌</span>
      <span style={{ fontSize:"9px", fontWeight:700, color:MT, letterSpacing:"0.1em" }}>ERRORS</span>
    </div>
    {["Gripping too high","Not using body weight","Bent knee reduces effect"].map((e,i) => (
      <div key={i} style={{ fontSize:"11px", color:CR, padding:"1px 0 1px 6px", display:"flex", gap:"5px", opacity:0.85 }}>
        <span style={{ color:RD, fontSize:"6px", marginTop:"4px" }}>•</span>{e}
      </div>
    ))}
  </div>
);

// ━━━━ SCREEN 7: COACH — ERRORS + NUTRITION ━━━━
const ScreenCoachNutrition = () => (
  <div style={{ background:"#FAF6F0", minHeight:"100%", fontFamily:"'Inter',sans-serif", display:"flex", flexDirection:"column" }}>
    <TopBar/>
    <TabBar active="Coach"/>
    <div style={{ flex:1, padding:"10px 14px" }}>
      <div style={{ background:"#f0ebe4", borderRadius:"12px", padding:"12px", border:`1px solid #ddd`, marginBottom:"10px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"2px" }}>
          <span style={{ fontSize:"11px" }}>🤖</span>
          <span style={{ fontSize:"10px", fontWeight:700, color:"#333", letterSpacing:"0.06em" }}>PRESSURE COACH</span>
        </div>
        <div style={{ fontSize:"8px", color:"#888", marginBottom:"8px" }}>BJJ, nutrition, biomechanics, mental health. Gets smarter daily.</div>
        
        {/* Errors response */}
        <div style={{ background:"#e5dfd8", borderRadius:"8px", padding:"10px", marginBottom:"8px" }}>
          <div style={{ fontSize:"11px", fontWeight:700, color:"#333", marginBottom:"4px" }}>❌ Errors:</div>
          {["Attacking without entanglement","Arms only, no hip rotation","Ignoring tap","Not knowing inside vs outside","Heel grip too low"].map((e,i) => (
            <div key={i} style={{ fontSize:"10px", color:"#333", padding:"1px 0" }}>• {e}</div>
          ))}
        </div>
        
        {/* User message */}
        <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:"8px" }}>
          <div style={{ background:R, borderRadius:"8px", padding:"6px 10px", fontSize:"10px", color:CR, fontWeight:600 }}>Nutrition split</div>
        </div>
        
        {/* Nutrition response */}
        <div style={{ background:"#e5dfd8", borderRadius:"8px", padding:"10px" }}>
          <div style={{ fontSize:"11px", fontWeight:700, color:"#333", marginBottom:"4px" }}>Night Shift (~2,400cal / 180g P):</div>
          {["🕐 Pre-shift: 600cal (40g P) — oats + protein","🕑 Mid-shift 1: 500cal (35g P) — chicken + rice","🕒 Mid-shift 2: 700cal (45g P) — steak + veg","🕓 Post-shift: 400cal (25g P) — shake","🕔 Before sleep: 200cal casein"].map((m,i) => (
            <div key={i} style={{ fontSize:"9px", color:"#444", padding:"1px 0" }}>{m}</div>
          ))}
        </div>
        
        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"8px" }}>
          <div style={{ flex:1, fontSize:"9px", color:"#aaa", padding:"6px 8px", background:"#f5f0ea", borderRadius:"6px" }}>Ask anything...</div>
          <div style={{ background:R, borderRadius:"6px", padding:"5px 10px", fontSize:"9px", fontWeight:700, color:CR }}>Send</div>
        </div>
      </div>
      
      {/* Quick chips */}
      <div style={{ background:"#f0ebe4", borderRadius:"10px", padding:"8px 10px", border:`1px solid #ddd` }}>
        <div style={{ fontSize:"8px", fontWeight:700, color:"#666", letterSpacing:"0.06em", marginBottom:"4px" }}>QUICK</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
          {["How am I doing?","Nutrition split","I have chicken","RNC mechanics","Armbar","Heel hook danger","Sleep help","Stress tips"].map((c,i) => (
            <div key={i} style={{ fontSize:"8px", color:"#555", padding:"3px 7px", background:"#e8e2db", borderRadius:"4px" }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
    <SpotifyBar/>
    <BottomNav active="Coach"/>
  </div>
);

// ━━━━ SCREEN 8: COACH — RECIPE ━━━━
const ScreenCoachRecipe = () => (
  <div style={{ background:"#FAF6F0", minHeight:"100%", fontFamily:"'Inter',sans-serif", display:"flex", flexDirection:"column" }}>
    <TopBar/>
    <TabBar active="Coach"/>
    <div style={{ flex:1, padding:"10px 14px" }}>
      <div style={{ background:"#f0ebe4", borderRadius:"12px", padding:"12px", border:`1px solid #ddd` }}>
        <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"2px" }}>
          <span style={{ fontSize:"11px" }}>🤖</span>
          <span style={{ fontSize:"10px", fontWeight:700, color:"#333", letterSpacing:"0.06em" }}>PRESSURE COACH</span>
        </div>
        <div style={{ fontSize:"8px", color:"#888", marginBottom:"8px" }}>BJJ, nutrition, biomechanics, mental health. Gets smarter daily.</div>

        {/* Previous response tail */}
        <div style={{ background:"#e5dfd8", borderRadius:"8px", padding:"10px", marginBottom:"8px" }}>
          <div style={{ fontSize:"10px", color:"#333" }}>📊 450cal · 45gP · 30gC · 12gF</div>
          <div style={{ fontSize:"10px", color:"#333", marginTop:"6px" }}>Paprika+garlic. Grill 6min/side. Sweet potato + broccoli.</div>
          <div style={{ fontSize:"10px", color:"#333", fontWeight:600, marginTop:"6px" }}>Fits night shift.</div>
        </div>

        {/* User message */}
        <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:"8px" }}>
          <div style={{ background:R, borderRadius:"8px", padding:"6px 10px", fontSize:"10px", color:CR, fontWeight:600, maxWidth:"80%" }}>I have steak, whats a good recipe</div>
        </div>

        {/* Steak recipe */}
        <div style={{ background:"#e5dfd8", borderRadius:"8px", padding:"10px" }}>
          <div style={{ fontSize:"11px", fontWeight:700, color:"#333" }}>🍽 Steak & veg</div>
          <div style={{ fontSize:"10px", color:"#333", marginTop:"2px" }}>📊 520cal · 50gP · 20gC · 28gF</div>
          <div style={{ fontSize:"10px", color:"#333", marginTop:"6px" }}>200g rump, 2min/side. Rest 5min. Broccolini.</div>
          <div style={{ fontSize:"10px", color:"#333", fontWeight:600, marginTop:"6px" }}>Fits night shift.</div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"8px" }}>
          <div style={{ flex:1, fontSize:"9px", color:"#aaa", padding:"6px 8px", background:"#f5f0ea", borderRadius:"6px" }}>Ask anything...</div>
          <div style={{ background:R, borderRadius:"6px", padding:"5px 10px", fontSize:"9px", fontWeight:700, color:CR }}>Send</div>
        </div>
      </div>

      {/* Quick chips */}
      <div style={{ background:"#f0ebe4", borderRadius:"10px", padding:"8px 10px", border:`1px solid #ddd`, marginTop:"8px" }}>
        <div style={{ fontSize:"8px", fontWeight:700, color:"#666", letterSpacing:"0.06em", marginBottom:"4px" }}>QUICK</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
          {["How am I doing?","Nutrition split","I have chicken","RNC mechanics","Armbar","Heel hook danger","Sleep help","Stress tips"].map((c,i) => (
            <div key={i} style={{ fontSize:"8px", color:"#555", padding:"3px 7px", background:"#e8e2db", borderRadius:"4px" }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
    <SpotifyBar/>
    <BottomNav active="Coach"/>
  </div>
);

// ━━━━ SCREEN DATA ━━━━
const screens = [
  { Component: ScreenToday, label: "Today — Dashboard", sub: "Under Pressure Score, streaks, non-negotiables, 7-day trend" },
  { Component: ScreenLog, label: "Daily Log", sub: "Track sleep, stress, training, nutrition, hydration, pain" },
  { Component: ScreenPastLog, label: "Past Date Log", sub: "Edit missed days seamlessly — your data, your timeline" },
  { Component: ScreenJournal, label: "Technique Journal", sub: "AI-analysed training notes with position recognition" },
  { Component: ScreenKneeCut, label: "Blueprint — Chains", sub: "IF→THEN decision trees for every position" },
  { Component: ScreenToeHold, label: "Blueprint — Technique", sub: "Keys, errors, and anatomical targets for submissions" },
  { Component: ScreenCoachNutrition, label: "Pressure Coach — Nutrition", sub: "Shift-aware meal plans with macro breakdowns" },
  { Component: ScreenCoachRecipe, label: "Pressure Coach — Recipes", sub: "Quick recipes with macros that fit your shift pattern" },
];

// ━━━━ MAIN ━━━━
export default function PlannerMockupV2() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setActive(p => (p+1)%screens.length); setFade(false); }, 350);
    }, 4500);
    return () => clearInterval(t);
  }, [paused]);

  const cur = screens[active];

  return (
    <div style={{ background:"#030303", minHeight:"100vh", fontFamily:"'Inter',-apple-system,sans-serif", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 16px", color:CR }}>
      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:"24px" }}>
        <div style={{ fontSize:"9px", letterSpacing:"0.14em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:"6px" }}>The Pressure Planner — Live App Screenshots</div>
        <h2 style={{ fontSize:"22px", fontWeight:800, margin:"0 0 4px", letterSpacing:"-0.02em" }}>Real screens. Real data. Real system.</h2>
        <p style={{ fontSize:"12px", color:MT, margin:0 }}>Not a fitness tracker. A pressure management system built for shift workers, grapplers, and families.</p>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:"32px" }}>
        {/* Phone */}
        <div onClick={() => setPaused(!paused)} style={{
          width:"260px", height:"540px", borderRadius:"32px", overflow:"hidden",
          border:"3px solid #333", background:BG, cursor:"pointer", position:"relative",
          boxShadow:"0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px #222"
        }}>
          {/* Notch */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 16px 2px", background:"#0e0e0e" }}>
            <div style={{ fontSize:"9px", fontWeight:600, color:CR }}>5:10</div>
            <div style={{ width:"60px", height:"16px", borderRadius:"10px", background:"#000" }}/>
            <div style={{ display:"flex", gap:"2px", alignItems:"center" }}>
              <span style={{ fontSize:"7px", color:MT }}>5G</span>
              <div style={{ width:"14px", height:"8px", borderRadius:"2px", border:"1px solid #555", padding:"1px" }}>
                <div style={{ width:"65%", height:"100%", background:"#4ade80", borderRadius:"1px" }}/>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{
            height:"calc(100% - 24px)", overflowY:"auto",
            opacity: fade ? 0 : 1, transform: fade ? "translateY(6px)" : "translateY(0)",
            transition:"opacity 0.35s ease, transform 0.35s ease"
          }}>
            <cur.Component/>
          </div>

          {paused && (
            <div style={{ position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)", background:"#000c", padding:"3px 10px", borderRadius:"5px", fontSize:"8px", color:CR, fontWeight:600 }}>PAUSED — tap to resume</div>
          )}
        </div>

        {/* Side panel */}
        <div style={{ maxWidth:"260px" }}>
          <div style={{ padding:"16px", background:BG2, borderRadius:"14px", border:`1px solid ${R}20`, marginBottom:"12px" }}>
            <div style={{ fontSize:"8px", color:R, fontWeight:700, letterSpacing:"0.08em", marginBottom:"4px" }}>SCREEN {active+1} OF {screens.length}</div>
            <div style={{ fontSize:"15px", fontWeight:700, color:CR, marginBottom:"3px" }}>{cur.label}</div>
            <div style={{ fontSize:"11px", color:MT, lineHeight:1.5 }}>{cur.sub}</div>
          </div>

          {/* Dots */}
          <div style={{ display:"flex", gap:"4px", justifyContent:"center", marginBottom:"12px", flexWrap:"wrap" }}>
            {screens.map((s,i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); setPaused(true); }} style={{
                width: i===active?"24px":"7px", height:"7px", borderRadius:"4px", border:"none", cursor:"pointer",
                background: i===active?R:"#333", transition:"all 0.3s"
              }}/>
            ))}
          </div>

          {/* Features */}
          <div style={{ display:"flex", flexDirection:"column", gap:"4px" }}>
            {[
              "Under Pressure daily scoring system",
              "Danaher-style IF→THEN chains",
              "AI Coach: BJJ, nutrition, mental health",
              "Shift-aware day/night protocols",
              "Past date editing for missed days",
              "Pain & injury tracking",
              "Technique journal with AI analysis",
              "Pressure Over Force music integration"
            ].map((f,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"10px", color:"#666" }}>
                <div style={{ width:"3px", height:"3px", borderRadius:"50%", background:R, flexShrink:0 }}/>{f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
