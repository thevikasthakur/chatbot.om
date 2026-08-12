/**
 * Inline SVG illustrations for the product pages.
 *
 * All of them are server-rendered, decorative, and driven by the design tokens
 * in globals.css, so a palette change carries through without touching this
 * file. Every one is marked aria-hidden: the prose beside an illustration
 * always states the same thing, so repeating it to a screen reader would only
 * add noise.
 *
 * Convention: viewBox coordinates, `w-full h-auto` sizing, 2px corners to match
 * the rest of the system, lime reserved for the one thing the reader should
 * look at first.
 */

const LIME = "var(--accent-raw)";
const INK = "var(--ink)";
const PANEL = "var(--ink-2)";
const PANEL_2 = "var(--ink-3)";
const LINE = "var(--line-strong)";
const DIM = "var(--fg-dim)";
const DIMMER = "var(--fg-dimmer)";

type Props = { className?: string };

/**
 * Wide diagrams carry small mono labels. Scaled down to a phone they would
 * shrink to about six pixels, so below md they scroll sideways at a legible
 * size instead, bleeding to the viewport edges the way the comparison table
 * does.
 */
function Wide({ min, children }: { min: string; children: React.ReactNode }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0">
      <div className={`${min} md:min-w-0`}>{children}</div>
    </div>
  );
}

const svg = (className?: string) => ({
  className: `h-auto w-full ${className ?? ""}`.trim(),
  "aria-hidden": true as const,
  xmlns: "http://www.w3.org/2000/svg",
});

/* ── Automated Support Tickets ─────────────────────────────────────────── */

/** A support issue recognised inside an ordinary conversation. */
export function SpotIssue({ className }: Props) {
  return (
    <svg viewBox="0 0 220 124" {...svg(className)}>
      {/* two ordinary messages */}
      <rect x="4" y="6" width="112" height="30" rx="2" fill={PANEL_2} stroke={LINE} />
      <rect x="16" y="15" width="76" height="4" rx="2" fill={DIMMER} />
      <rect x="16" y="24" width="52" height="4" rx="2" fill={DIMMER} />

      <rect x="94" y="44" width="112" height="30" rx="2" fill={PANEL_2} stroke={LINE} />
      <rect x="106" y="53" width="64" height="4" rx="2" fill={DIMMER} />
      <rect x="106" y="62" width="82" height="4" rx="2" fill={DIMMER} />

      {/* the one that is actually a problem */}
      <rect
        x="4"
        y="82"
        width="146"
        height="36"
        rx="2"
        fill="rgba(212,255,79,0.08)"
        stroke={LIME}
      />
      <rect x="16" y="93" width="98" height="4" rx="2" fill={LIME} opacity="0.85" />
      <rect x="16" y="103" width="72" height="4" rx="2" fill={LIME} opacity="0.5" />

      <rect x="158" y="90" width="58" height="20" rx="2" fill={LIME} />
      <text x="187" y="104" textAnchor="middle" className="font-mono" fontSize="9" fill={INK}>
        ISSUE
      </text>
    </svg>
  );
}

/** The record writing itself: fields filling in without a form. */
export function WriteUp({ className }: Props) {
  return (
    <svg viewBox="0 0 220 124" {...svg(className)}>
      <rect x="14" y="6" width="192" height="112" rx="2" fill={PANEL} stroke={LINE} />

      {/* id + priority chip */}
      <rect x="26" y="18" width="54" height="6" rx="2" fill={LIME} />
      <rect x="146" y="15" width="48" height="16" rx="2" fill="rgba(212,255,79,0.16)" stroke={LIME} />
      <text x="170" y="26" textAnchor="middle" className="font-mono" fontSize="8" fill={LIME}>
        HIGH
      </text>

      <line x1="26" y1="38" x2="194" y2="38" stroke={LINE} />

      {/* filled fields */}
      {[
        { y: 50, label: 30, value: 96 },
        { y: 66, label: 38, value: 74 },
        { y: 82, label: 26, value: 108 },
      ].map((row) => (
        <g key={row.y}>
          <rect x="26" y={row.y} width={row.label} height="5" rx="2" fill={DIMMER} />
          <rect x="74" y={row.y} width={row.value} height="5" rx="2" fill={DIM} />
        </g>
      ))}

      {/* the field currently being written */}
      <rect x="26" y="98" width="34" height="5" rx="2" fill={DIMMER} />
      <rect x="74" y="98" width="58" height="5" rx="2" fill={LIME} />
      <rect x="136" y="95" width="2" height="11" fill={LIME} />
    </svg>
  );
}

/** Routing: one record, three possible owners, one correct answer. */
export function RouteOwner({ className }: Props) {
  const lanes = [
    { y: 22, lit: false },
    { y: 52, lit: true },
    { y: 82, lit: false },
  ];
  return (
    <svg viewBox="0 0 220 124" {...svg(className)}>
      <rect x="4" y="46" width="42" height="32" rx="2" fill={PANEL_2} stroke={LINE} />
      <rect x="13" y="56" width="24" height="4" rx="2" fill={LIME} />
      <rect x="13" y="65" width="16" height="4" rx="2" fill={DIMMER} />

      {lanes.map((lane) => (
        <path
          key={lane.y}
          d={`M46 62 C 82 62, 82 ${lane.y + 14}, 118 ${lane.y + 14}`}
          fill="none"
          stroke={lane.lit ? LIME : LINE}
          strokeWidth={lane.lit ? 2 : 1}
          strokeDasharray={lane.lit ? undefined : "3 3"}
        />
      ))}

      {lanes.map((lane) => (
        <g key={`chip-${lane.y}`}>
          <rect
            x="118"
            y={lane.y}
            width="98"
            height="28"
            rx="2"
            fill={lane.lit ? "rgba(212,255,79,0.10)" : PANEL_2}
            stroke={lane.lit ? LIME : LINE}
          />
          <circle cx="134" cy={lane.y + 14} r="7" fill={lane.lit ? LIME : DIMMER} />
          <rect
            x="148"
            y={lane.y + 8}
            width="52"
            height="4"
            rx="2"
            fill={lane.lit ? DIM : DIMMER}
          />
          <rect
            x="148"
            y={lane.y + 17}
            width="34"
            height="4"
            rx="2"
            fill={DIMMER}
          />
        </g>
      ))}
    </svg>
  );
}

/** One ticket with its parts called out, as a legend for the capability list. */
export function TicketAnatomy({ className }: Props) {
  const callouts = [
    { label: "SUMMARY", y: 74, side: "left" as const },
    { label: "PRIORITY", y: 118, side: "right" as const },
    { label: "OWNER", y: 168, side: "left" as const },
    { label: "DUE", y: 212, side: "right" as const },
  ];
  return (
    <svg viewBox="0 0 460 320" {...svg(className)}>
      {/* the card */}
      <rect x="130" y="26" width="200" height="268" rx="2" fill={PANEL} stroke={LINE} />

      <rect x="146" y="42" width="56" height="7" rx="2" fill={LIME} />
      <text x="314" y="49" textAnchor="end" className="font-mono" fontSize="10" fill={DIMMER}>
        OPEN
      </text>
      <line x1="146" y1="60" x2="314" y2="60" stroke={LINE} />

      {/* summary */}
      <rect x="146" y="70" width="150" height="6" rx="2" fill={DIM} />
      <rect x="146" y="82" width="112" height="6" rx="2" fill={DIM} />

      {/* category + priority chips */}
      <rect x="146" y="106" width="66" height="20" rx="2" fill={PANEL_2} stroke={LINE} />
      <text x="179" y="120" textAnchor="middle" className="font-mono" fontSize="9.5" fill={DIM}>
        BILLING
      </text>
      <rect x="220" y="106" width="52" height="20" rx="2" fill="rgba(212,255,79,0.16)" stroke={LIME} />
      <text x="246" y="120" textAnchor="middle" className="font-mono" fontSize="9.5" fill={LIME}>
        HIGH
      </text>

      {/* owner */}
      <circle cx="158" cy="168" r="11" fill={LIME} />
      <rect x="176" y="160" width="74" height="5" rx="2" fill={DIM} />
      <rect x="176" y="171" width="48" height="5" rx="2" fill={DIMMER} />

      {/* due */}
      <circle cx="158" cy="212" r="10" fill="none" stroke={LIME} strokeWidth="1.5" />
      <path d="M158 206 L158 212 L163 215" fill="none" stroke={LIME} strokeWidth="1.5" />
      <rect x="176" y="209" width="86" height="5" rx="2" fill={DIM} />

      {/* activity log */}
      <line x1="146" y1="240" x2="314" y2="240" stroke={LINE} />
      {[252, 264, 276].map((y, i) => (
        <g key={y}>
          <circle cx="150" cy={y} r="2.5" fill={i === 0 ? LIME : DIMMER} />
          <rect x="160" y={y - 2} width={i === 0 ? 118 : 92 - i * 18} height="4" rx="2" fill={DIMMER} />
        </g>
      ))}

      {/* callouts */}
      {callouts.map((c) => {
        const left = c.side === "left";
        return (
          <g key={c.label}>
            <line
              x1={left ? 60 : 400}
              y1={c.y}
              x2={left ? 130 : 330}
              y2={c.y}
              stroke={LINE}
              strokeDasharray="3 3"
            />
            <circle cx={left ? 130 : 330} cy={c.y} r="3" fill={LIME} />
            <text
              x={left ? 56 : 404}
              y={c.y + 3}
              textAnchor={left ? "end" : "start"}
              className="font-mono"
              fontSize="11"
              fill={DIM}
            >
              {c.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Volume arriving versus the handful of people who could ever answer it. */
export function TeamLoad({ className }: Props) {
  const incoming = Array.from({ length: 32 }, (_, i) => ({
    x: 18 + (i % 8) * 20,
    y: 42 + Math.floor(i / 8) * 26,
    // the four that genuinely need a person
    lit: [5, 11, 20, 30].includes(i),
  }));
  return (
    <svg viewBox="0 0 460 230" {...svg(className)}>
      <text x="18" y="24" className="font-mono" fontSize="9" fill={DIMMER}>
        WHAT ARRIVES
      </text>
      {incoming.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.lit ? 6 : 5}
          fill={d.lit ? LIME : "none"}
          stroke={d.lit ? LIME : LINE}
        />
      ))}

      {/* the chatbot absorbing the routine */}
      <rect x="196" y="30" width="46" height="170" rx="2" fill={PANEL} stroke={LIME} />
      <text
        x="219"
        y="122"
        textAnchor="middle"
        className="font-mono"
        fontSize="9"
        fill={LIME}
        transform="rotate(-90 219 122)"
      >
        HANDLED IN CHAT
      </text>

      {/* only the flagged few continue */}
      {[52, 92, 132, 172].map((y) => (
        <path
          key={y}
          d={`M242 ${y} L296 ${y}`}
          stroke={LIME}
          strokeWidth="1.5"
          markerEnd=""
        />
      ))}

      <text x="308" y="24" className="font-mono" fontSize="9" fill={DIMMER}>
        WHAT REACHES YOU
      </text>
      {[40, 80, 120, 160].map((y) => (
        <g key={y}>
          <rect x="308" y={y} width="134" height="26" rx="2" fill={PANEL_2} stroke={LINE} />
          <circle cx="322" cy={y + 13} r="6" fill={LIME} />
          <rect x="336" y={y + 10} width="72" height="5" rx="2" fill={DIM} />
        </g>
      ))}
    </svg>
  );
}

/* ── Smart Follow-Ups ──────────────────────────────────────────────────── */

/** The covered ends of a ticket, and the long unwatched middle. */
export function TicketLifeGap({ className }: Props) {
  return (
    <Wide min="min-w-[600px]">
      <svg viewBox="0 0 640 210" {...svg(className)}>
        {/* row 1: what most systems cover */}
        <text x="20" y="26" className="font-mono" fontSize="9" fill={DIMMER}>
          WHAT MOST SYSTEMS COVER
        </text>
        <rect x="20" y="42" width="118" height="14" rx="2" fill={LIME} />
        <rect
          x="146"
          y="42"
          width="348"
          height="14"
          rx="2"
          fill="none"
          stroke={LINE}
          strokeDasharray="4 4"
        />
        <rect x="502" y="42" width="118" height="14" rx="2" fill={LIME} />
        <text x="320" y="53" textAnchor="middle" className="font-mono" fontSize="9" fill={DIMMER}>
          NOTHING
        </text>

        {/* row 2: what the customer is living through */}
        <text x="20" y="110" className="font-mono" fontSize="9" fill={DIMMER}>
          WHAT THE CUSTOMER IS LIVING THROUGH
        </text>
        <rect x="20" y="126" width="600" height="14" rx="2" fill="rgba(212,255,79,0.16)" />
        <rect x="20" y="126" width="600" height="14" rx="2" fill="none" stroke={LIME} />

        {/* markers */}
        <line x1="79" y1="42" x2="79" y2="170" stroke={LIME} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="79" cy="133" r="5" fill={LIME} />
        <text x="79" y="188" textAnchor="middle" className="font-mono" fontSize="9" fill={DIM}>
          RAISED
        </text>

        <line x1="561" y1="42" x2="561" y2="170" stroke={LIME} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="561" cy="133" r="5" fill={INK} stroke={LIME} strokeWidth="2" />
        <text x="561" y="188" textAnchor="middle" className="font-mono" fontSize="9" fill={DIM}>
          CLOSED
        </text>

        <text x="320" y="188" textAnchor="middle" className="font-mono" fontSize="9" fill={LIME}>
          THIS IS WHERE TRUST IS WON OR LOST
        </text>
      </svg>
    </Wide>
  );
}

/** Three quiet internal chases, then the one message the customer receives. */
export function EscalationLadder({ className }: Props) {
  // Kept narrow enough that step 04, which is the whole point, is still on
  // screen on a phone rather than parked beyond a horizontal scroll.
  const steps = [
    { n: "01", x: 6, y: 224, lit: false },
    { n: "02", x: 118, y: 188, lit: false },
    { n: "03", x: 230, y: 152, lit: false },
    { n: "04", x: 342, y: 40, lit: true },
  ];
  return (
    <Wide min="min-w-[440px]">
      <svg viewBox="0 0 470 300" {...svg(className)}>
        {/* the visibility boundary */}
        <line x1="0" y1="112" x2="470" y2="112" stroke={LIME} strokeDasharray="5 5" opacity="0.6" />
        <text x="6" y="102" className="font-mono" fontSize="10" fill={LIME}>
          CUSTOMER SEES
        </text>
        <text x="6" y="132" className="font-mono" fontSize="10" fill={DIMMER}>
          INSIDE YOUR TEAM
        </text>

        {/* connectors */}
        {steps.slice(0, -1).map((s, i) => (
          <path
            key={s.n}
            d={`M${s.x + 106} ${s.y + 20} L${steps[i + 1].x} ${steps[i + 1].y + 20}`}
            stroke={LINE}
            strokeDasharray="3 3"
          />
        ))}

        {steps.map((s) => (
          <g key={s.n}>
            <rect
              x={s.x}
              y={s.y}
              width="134"
              height={s.lit ? 92 : 40}
              rx="2"
              fill={s.lit ? "rgba(212,255,79,0.10)" : PANEL}
              stroke={s.lit ? LIME : LINE}
            />
            <text
              x={s.x + 14}
              y={s.y + 25}
              className="font-mono"
              fontSize="11"
              fill={s.lit ? LIME : DIMMER}
            >
              {s.n}
            </text>
            <rect
              x={s.x + 42}
              y={s.y + 17}
              width={s.lit ? 74 : 62}
              height="5"
              rx="2"
              fill={s.lit ? LIME : DIM}
            />
            {s.lit && (
              <>
                <rect x={s.x + 14} y={s.y + 44} width="106" height="4" rx="2" fill={DIM} />
                <rect x={s.x + 14} y={s.y + 56} width="82" height="4" rx="2" fill={DIM} />
                <rect x={s.x + 14} y={s.y + 70} width="58" height="10" rx="2" fill={LIME} />
              </>
            )}
          </g>
        ))}
      </svg>
    </Wide>
  );
}

/* ── WhatsApp ──────────────────────────────────────────────────────────── */

/** The 24-hour service window, and what may be sent on either side of it. */
export function ServiceWindow({ className }: Props) {
  return (
    <Wide min="min-w-[600px]">
      <svg viewBox="0 0 640 220" {...svg(className)}>
        {/* free-form band */}
        <rect x="70" y="88" width="270" height="44" rx="2" fill="rgba(212,255,79,0.14)" stroke={LIME} />
        <text x="205" y="115" textAnchor="middle" className="font-mono" fontSize="10" fill={LIME}>
          24 HOURS · REPLY FREELY
        </text>

        {/* template-only band */}
        <rect x="340" y="88" width="280" height="44" rx="2" fill={PANEL} stroke={LINE} />
        <text x="480" y="115" textAnchor="middle" className="font-mono" fontSize="10" fill={DIM}>
          APPROVED TEMPLATES ONLY
        </text>

        {/* the moment the window opens */}
        <path d="M70 52 L70 88" stroke={LIME} strokeWidth="1.5" />
        <circle cx="70" cy="48" r="5" fill={LIME} />
        <text x="70" y="34" textAnchor="middle" className="font-mono" fontSize="9" fill={DIM}>
          THEY MESSAGE YOU
        </text>

        {/* the moment it closes */}
        <path d="M340 52 L340 88" stroke={LINE} strokeDasharray="3 3" />
        <circle cx="340" cy="48" r="5" fill={INK} stroke={LINE} strokeWidth="1.5" />
        <text x="340" y="34" textAnchor="middle" className="font-mono" fontSize="9" fill={DIMMER}>
          WINDOW CLOSES
        </text>

        {/* free conversation inside the window */}
        {[
          { x: 86, w: 92 },
          { x: 190, w: 68 },
          { x: 266, w: 58 },
        ].map((b) => (
          <rect key={b.x} x={b.x} y="150" width={b.w} height="18" rx="2" fill={LIME} opacity="0.55" />
        ))}
        <text x="205" y="192" textAnchor="middle" className="font-mono" fontSize="9" fill={DIMMER}>
          ORDINARY CONVERSATION
        </text>

        {/* templates outside it */}
        {[356, 464, 572].map((x) => (
          <g key={x}>
            <rect x={x} y="150" width="48" height="18" rx="2" fill="none" stroke={LINE} />
            <rect x={x + 6} y="157" width="26" height="4" rx="2" fill={DIMMER} />
          </g>
        ))}
        <text x="480" y="192" textAnchor="middle" className="font-mono" fontSize="9" fill={DIMMER}>
          REMINDERS · CONFIRMATIONS · UPDATES
        </text>
      </svg>
    </Wide>
  );
}

/** A voice note treated as conversation rather than as an attachment. */
export function VoiceNoteFlow({ className }: Props) {
  const bars = [8, 16, 26, 14, 30, 20, 11, 24, 15, 9, 19, 27, 12, 7];
  return (
    <svg viewBox="0 0 560 130" {...svg(className)}>
      {/* the voice note */}
      <rect x="4" y="30" width="176" height="66" rx="2" fill={PANEL_2} stroke={LINE} />
      <circle cx="28" cy="63" r="10" fill={LIME} />
      <path d="M25 59 h6 v8 h-6 z" fill={INK} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={48 + i * 9}
          y={63 - h / 2}
          width="4"
          height={h}
          rx="2"
          fill={DIM}
        />
      ))}

      <path d="M188 63 L214 63" stroke={LIME} strokeWidth="1.5" />
      <path d="M208 58 L214 63 L208 68" fill="none" stroke={LIME} strokeWidth="1.5" />

      {/* understood, in place */}
      <rect x="222" y="30" width="150" height="66" rx="2" fill={PANEL} stroke={LIME} />
      <rect x="236" y="46" width="118" height="5" rx="2" fill={DIM} />
      <rect x="236" y="58" width="94" height="5" rx="2" fill={DIM} />
      <rect x="236" y="72" width="62" height="10" rx="2" fill={LIME} />

      <path d="M380 63 L406 63" stroke={LIME} strokeWidth="1.5" />
      <path d="M400 58 L406 63 L400 68" fill="none" stroke={LIME} strokeWidth="1.5" />

      {/* the answer */}
      <rect x="414" y="38" width="142" height="50" rx="2" fill={LIME} />
      <rect x="428" y="52" width="106" height="5" rx="2" fill={INK} opacity="0.75" />
      <rect x="428" y="65" width="74" height="5" rx="2" fill={INK} opacity="0.45" />
    </svg>
  );
}

/* ── AI Chatbot for Websites ───────────────────────────────────────────── */

/** Three channels, one memory, one continuous thread. */
export function ChannelsConverge({ className }: Props) {
  const nodes = [
    { y: 20, label: "WEBSITE" },
    { y: 100, label: "WHATSAPP" },
    { y: 180, label: "EMAIL" },
  ];
  return (
    <Wide min="min-w-[540px]">
      <svg viewBox="0 0 560 250" {...svg(className)}>
        {nodes.map((n) => (
          <g key={n.label}>
            <rect x="4" y={n.y} width="124" height="44" rx="2" fill={PANEL_2} stroke={LINE} />
            <circle cx="26" cy={n.y + 22} r="7" fill={LIME} />
            <text x="44" y={n.y + 26} className="font-mono" fontSize="9" fill={DIM}>
              {n.label}
            </text>
            <path
              d={`M128 ${n.y + 22} C 190 ${n.y + 22}, 190 122, 244 122`}
              fill="none"
              stroke={LIME}
              strokeWidth="1.5"
              opacity="0.75"
            />
          </g>
        ))}

        {/* the shared memory */}
        <rect x="244" y="80" width="128" height="84" rx="2" fill="rgba(212,255,79,0.10)" stroke={LIME} />
        <ellipse cx="308" cy="104" rx="34" ry="10" fill="none" stroke={LIME} />
        <path d="M274 104 v22 a34 10 0 0 0 68 0 v-22" fill="none" stroke={LIME} />
        <text x="308" y="154" textAnchor="middle" className="font-mono" fontSize="10.5" fill={LIME}>
          ONE MEMORY
        </text>

        <path d="M372 122 L412 122" stroke={LIME} strokeWidth="1.5" />
        <path d="M406 117 L412 122 L406 127" fill="none" stroke={LIME} strokeWidth="1.5" />

        {/* one continuous thread */}
        <rect x="420" y="52" width="136" height="140" rx="2" fill={PANEL} stroke={LINE} />
        {[70, 100, 130, 160].map((y, i) => (
          <rect
            key={y}
            x={i % 2 === 0 ? 432 : 468}
            y={y}
            width={i % 2 === 0 ? 78 : 76}
            height="18"
            rx="2"
            fill={i % 2 === 0 ? PANEL_2 : LIME}
            opacity={i % 2 === 0 ? 1 : 0.8}
          />
        ))}
      </svg>
    </Wide>
  );
}

/** Where an answer comes from, and what happens when it does not exist. */
export function GroundedAnswer({ className }: Props) {
  return (
    <Wide min="min-w-[540px]">
      <svg viewBox="0 0 560 270" {...svg(className)}>
        {/* sources */}
        {[
          { y: 16, label: "YOUR SITE" },
          { y: 82, label: "YOUR DOCS" },
        ].map((s) => (
          <g key={s.label}>
            <rect x="4" y={s.y} width="128" height="52" rx="2" fill={PANEL_2} stroke={LINE} />
            <rect x="18" y={s.y + 14} width="42" height="24" rx="2" fill="none" stroke={LIME} />
            <rect x="24" y={s.y + 20} width="30" height="3" rx="1.5" fill={LIME} />
            <rect x="24" y={s.y + 27} width="20" height="3" rx="1.5" fill={LIME} opacity="0.5" />
            <text x="70" y={s.y + 30} className="font-mono" fontSize="9" fill={DIM}>
              {s.label}
            </text>
            <path
              d={`M132 ${s.y + 26} C 168 ${s.y + 26}, 168 96, 202 96`}
              fill="none"
              stroke={LIME}
              strokeWidth="1.5"
              opacity="0.75"
            />
          </g>
        ))}

        {/* grounded knowledge */}
        <rect x="202" y="62" width="128" height="68" rx="2" fill="rgba(212,255,79,0.10)" stroke={LIME} />
        <text x="266" y="101" textAnchor="middle" className="font-mono" fontSize="9" fill={LIME}>
          GROUNDED
        </text>

        {/* the answer it can give */}
        <path d="M330 96 L364 96" stroke={LIME} strokeWidth="1.5" />
        <path d="M358 91 L364 96 L358 101" fill="none" stroke={LIME} strokeWidth="1.5" />
        <rect x="372" y="66" width="184" height="60" rx="2" fill={LIME} />
        <rect x="388" y="84" width="140" height="6" rx="2" fill={INK} opacity="0.75" />
        <rect x="388" y="98" width="96" height="6" rx="2" fill={INK} opacity="0.45" />

        {/* and the honest fallback */}
        <path d="M266 130 L266 176" stroke={LINE} strokeDasharray="3 3" />
        <path d="M266 176 L364 176" stroke={LINE} strokeDasharray="3 3" />
        <path d="M358 171 L364 176 L358 181" fill="none" stroke={LINE} />
        <text x="272" y="156" className="font-mono" fontSize="9" fill={DIMMER}>
          NOT COVERED
        </text>

        <rect x="372" y="152" width="184" height="52" rx="2" fill={PANEL} stroke={LINE} />
        <circle cx="396" cy="178" r="10" fill={DIMMER} />
        <rect x="414" y="168" width="86" height="5" rx="2" fill={DIM} />
        <rect x="414" y="180" width="120" height="5" rx="2" fill={DIMMER} />
        <text x="372" y="224" className="font-mono" fontSize="9" fill={DIM}>
          HANDED TO A PERSON, WITH THE THREAD
        </text>
      </svg>
    </Wide>
  );
}

/* ── Automated Lead Pipeline ───────────────────────────────────────────── */

/** The handful of real buyers hiding inside a morning's worth of enquiries. */
export function EnquiryFunnel({ className }: Props) {
  const cols = 15;
  const rows = 6;
  // fixed, not random: the nine that are actually worth a salesperson's time
  const buyers = new Set([4, 19, 27, 38, 46, 55, 61, 74, 83]);
  const dots = Array.from({ length: cols * rows }, (_, i) => ({
    x: 22 + (i % cols) * 34,
    y: 24 + Math.floor(i / cols) * 26,
    buyer: buyers.has(i),
  }));
  return (
    <Wide min="min-w-[520px]">
      <svg viewBox="0 0 540 300" {...svg(className)}>
        <text x="22" y="14" className="font-mono" fontSize="9" fill={DIMMER}>
          A WEEK OF ENQUIRIES
        </text>
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.buyer ? 6 : 4}
            fill={d.buyer ? LIME : "none"}
            stroke={d.buyer ? LIME : LINE}
          />
        ))}

        {/* the funnel */}
        <path
          d="M14 190 L200 250 L340 250 L526 190"
          fill="none"
          stroke={LIME}
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path d="M14 190 L526 190" stroke={LINE} strokeDasharray="4 4" />
        <text x="270" y="216" textAnchor="middle" className="font-mono" fontSize="9" fill={LIME}>
          QUALIFIED · ENRICHED · ASSIGNED
        </text>

        {/* what comes out */}
        {Array.from({ length: 9 }, (_, i) => (
          <rect
            key={i}
            x={202 + i * 15}
            y="266"
            width="10"
            height="22"
            rx="2"
            fill={LIME}
          />
        ))}
        <text x="192" y="282" textAnchor="end" className="font-mono" fontSize="9" fill={DIM}>
          WORTH CALLING
        </text>
      </svg>
    </Wide>
  );
}

/* ── Dashboard & Reporting ─────────────────────────────────────────────── */

/** Every figure opens into the conversations that produced it. */
export function DrillThrough({ className }: Props) {
  return (
    <Wide min="min-w-[500px]">
      <svg viewBox="0 0 520 210" {...svg(className)}>
        {/* the headline number */}
        <rect x="4" y="52" width="150" height="102" rx="2" fill={PANEL} stroke={LIME} />
        <text x="79" y="106" textAnchor="middle" className="font-display" fontSize="34" fill={LIME}>
          11
        </text>
        <text x="79" y="128" textAnchor="middle" className="font-mono" fontSize="9" fill={DIM}>
          NEGATIVE
        </text>

        {/* opening out */}
        <path d="M154 82 L214 30" stroke={LINE} strokeDasharray="3 3" />
        <path d="M154 124 L214 180" stroke={LINE} strokeDasharray="3 3" />

        {/* the conversations behind it */}
        {[18, 62, 106, 150].map((y, i) => (
          <g key={y}>
            <rect x="214" y={y} width="302" height="36" rx="2" fill={PANEL_2} stroke={LINE} />
            <circle cx="234" cy={y + 18} r="8" fill={i === 0 ? LIME : DIMMER} />
            <rect x="250" y={y + 11} width={130 - i * 12} height="5" rx="2" fill={DIM} />
            <rect x="250" y={y + 22} width={92 - i * 8} height="4" rx="2" fill={DIMMER} />
            <rect
              x="452"
              y={y + 12}
              width="48"
              height="14"
              rx="2"
              fill="none"
              stroke={i === 0 ? LIME : LINE}
            />
          </g>
        ))}
      </svg>
    </Wide>
  );
}
