import { useEffect, useRef, useState, useCallback } from "react";
import profilePhoto from "../imports/1739585984022.jpg";

// ── Types ──────────────────────────────────────────────────────────────────

interface Petal {
  x: number; y: number; vx: number; vy: number;
  angle: number; spin: number;
  size: number; alpha: number;
  colorIdx: number;
}

// ── Data ──────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    num: "01 / Finance",
    name: "Centsible",
    desc: "A financial tracking web app with clean dashboards, budget visualizations, and intuitive expense management.",
    tags: ["React", "TailwindCSS", "JavaScript"],
    href: "https://centsible-app-j6a9.vercel.app/?fbclid=IwY2xjawR_nYpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEep-siCYwSDiArIOnt34FDcSrKrbtGOjS_RsfhULZHtsHoYs24o1tEvJfQMG8_aem_BRAwa-NSPcQ-LiJmfP8waQ",
    thumbClass: "thumb-centsible",
    thumb: "centsible",
  },
  {
    num: "02 / Productivity",
    name: "TaskFlow",
    desc: "A student task tracker with a sidebar layout, priority tagging, and clean status management for academic workflows.",
    tags: ["React", "CSS", "JavaScript"],
    href: "https://student-task-tracker-gamma.vercel.app/",
    thumbClass: "thumb-taskflow",
    thumb: "taskflow",
  },
  {
    num: "03 / Archiving",
    name: "Capsort",
    desc: "A capstone archiving system for organizing student research, with search, filtering, and document management.",
    tags: ["React", "CSS", "Git"],
    href: "https://capsortustpcdo.vercel.app/?fbclid=IwY2xjawR_nihleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEebyZ3dY8On-laS6suUZ2ajsCTHIoTB_EBZCGx2MFlXkmpk4PXgDpNzDpwTvI_aem_lKPlopM5VkhFDE6RSlUKww",
    thumbClass: "thumb-capsort",
    thumb: "capsort",
  },
  {
    num: "04 / Booking",
    name: "Lumiere",
    desc: "A photography booking system with an elegant gallery UI, appointment scheduling, and client management.",
    tags: ["HTML/CSS", "JavaScript", "Figma"],
    href: "https://lumierelens.web.app/",
    thumbClass: "thumb-lumiere",
    thumb: "lumiere",
  },
  {
    num: "05 / Creative",
    name: "Web Invitation",
    desc: "A delicate animated web invitation with soft transitions, floral motifs, and responsive elegant design.",
    tags: ["HTML/CSS", "CSS Animations", "JS"],
    href: "https://birthday-invitation-snowy.vercel.app/",
    thumbClass: "thumb-invite",
    thumb: "invite",
  },
  {
    num: "06 / Career",
    name: "Aureva",
    desc: "A smart job platform for students and young job seekers — matching opportunities to schedules and skills.",
    tags: ["Web App", "UI Design", "JavaScript"],
    href: "https://aureva.servbase.site/",
    thumbClass: "thumb-aureva",
    thumb: "aureva",
  },
];

const SKILLS = [
  { icon: "⚛️", label: "React" },
  { icon: "🌊", label: "TailwindCSS" },
  { icon: "🎨", label: "HTML / CSS" },
  { icon: "⚡", label: "JavaScript" },
  { icon: "✏️", label: "Figma" },
  { icon: "🖌️", label: "Canva" },
  { icon: "🐙", label: "Git / GitHub" },
  { icon: "📱", label: "Responsive Design" },
];

const INTERESTS = [
  { icon: "🖥️", label: "UI/UX Design", sub: "Crafting interfaces that feel human and alive" },
  { icon: "🌿", label: "Creative Storytelling", sub: "Every pixel can carry meaning and emotion" },
];

// ── SVG Thumbnails ─────────────────────────────────────────────────────────

function ThumbCentsible() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE8EC" /><stop offset="100%" stopColor="#FDE0C4" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#cg1)" />
      <rect x="12" y="12" width="130" height="70" rx="12" fill="rgba(255,255,255,0.55)" />
      <rect x="22" y="22" width="50" height="8" rx="4" fill="rgba(122,92,110,0.25)" />
      <rect x="22" y="36" width="100" height="22" rx="6" fill="rgba(248,196,204,0.45)" />
      <rect x="22" y="64" width="70" height="8" rx="4" fill="rgba(168,143,160,0.3)" />
      <rect x="158" y="12" width="130" height="70" rx="12" fill="rgba(255,255,255,0.55)" />
      <rect x="168" y="22" width="50" height="8" rx="4" fill="rgba(122,92,110,0.25)" />
      <rect x="168" y="36" width="100" height="22" rx="6" fill="rgba(216,200,236,0.45)" />
      <rect x="168" y="64" width="70" height="8" rx="4" fill="rgba(168,143,160,0.3)" />
      <rect x="12" y="96" width="276" height="62" rx="12" fill="rgba(255,255,255,0.5)" />
      <rect x="22" y="106" width="80" height="8" rx="4" fill="rgba(122,92,110,0.2)" />
      <circle cx="244" cy="124" r="22" fill="none" stroke="rgba(248,196,204,0.9)" strokeWidth="12" strokeDasharray="69 139" strokeDashoffset="0" />
      <circle cx="244" cy="124" r="22" fill="none" stroke="rgba(216,200,236,0.9)" strokeWidth="12" strokeDasharray="42 139" strokeDashoffset="-69" />
      <circle cx="244" cy="124" r="22" fill="none" stroke="rgba(196,224,248,0.9)" strokeWidth="12" strokeDasharray="28 139" strokeDashoffset="-111" />
      <circle cx="244" cy="124" r="10" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

function ThumbTaskFlow() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4E0F8" /><stop offset="100%" stopColor="#D8C8EC" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#tg1)" />
      <rect x="0" y="0" width="68" height="170" fill="rgba(216,200,236,0.45)" />
      <circle cx="34" cy="22" r="10" fill="rgba(255,255,255,0.5)" />
      <rect x="14" y="42" width="40" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="14" y="56" width="40" height="7" rx="3.5" fill="rgba(196,224,248,0.6)" />
      <rect x="14" y="70" width="40" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="14" y="84" width="40" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="80" y="10" width="120" height="10" rx="5" fill="rgba(122,92,110,0.3)" />
      <rect x="80" y="32" width="208" height="26" rx="8" fill="rgba(255,255,255,0.58)" />
      <rect x="90" y="41" width="10" height="10" rx="2" fill="rgba(248,196,204,0.8)" stroke="rgba(200,112,144,0.4)" strokeWidth="1" />
      <rect x="108" y="43" width="80" height="6" rx="3" fill="rgba(122,92,110,0.3)" />
      <rect x="240" y="41" width="36" height="8" rx="4" fill="rgba(196,224,248,0.7)" />
      <rect x="80" y="64" width="208" height="26" rx="8" fill="rgba(255,255,255,0.58)" />
      <rect x="90" y="73" width="10" height="10" rx="2" fill="rgba(216,200,236,0.8)" stroke="rgba(168,143,160,0.4)" strokeWidth="1" />
      <rect x="108" y="75" width="64" height="6" rx="3" fill="rgba(168,143,160,0.25)" />
      <rect x="240" y="73" width="36" height="8" rx="4" fill="rgba(248,196,204,0.6)" />
      <rect x="80" y="96" width="208" height="26" rx="8" fill="rgba(255,255,255,0.58)" />
      <rect x="90" y="105" width="10" height="10" rx="2" fill="rgba(248,196,204,0.8)" stroke="rgba(200,112,144,0.4)" strokeWidth="1" />
      <rect x="108" y="107" width="96" height="6" rx="3" fill="rgba(122,92,110,0.3)" />
      <rect x="240" y="105" width="36" height="8" rx="4" fill="rgba(216,200,236,0.65)" />
      <rect x="80" y="128" width="208" height="26" rx="8" fill="rgba(255,255,255,0.45)" />
      <rect x="90" y="137" width="10" height="10" rx="2" fill="rgba(196,224,248,0.8)" stroke="rgba(140,170,200,0.4)" strokeWidth="1" />
      <rect x="108" y="139" width="50" height="6" rx="3" fill="rgba(168,143,160,0.2)" />
    </svg>
  );
}

function ThumbCapsort() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="cpg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE0C4" /><stop offset="100%" stopColor="#D8C8EC" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#cpg1)" />
      <rect x="12" y="10" width="276" height="22" rx="8" fill="rgba(255,255,255,0.5)" />
      <rect x="20" y="16" width="80" height="10" rx="5" fill="rgba(122,92,110,0.25)" />
      <rect x="240" y="14" width="40" height="14" rx="7" fill="rgba(248,196,204,0.65)" />
      <rect x="12" y="42" width="90" height="118" rx="10" fill="rgba(255,255,255,0.45)" />
      <rect x="22" y="52" width="70" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="22" y="66" width="70" height="7" rx="3.5" fill="rgba(196,224,248,0.6)" />
      <rect x="22" y="80" width="70" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="22" y="94" width="70" height="7" rx="3.5" fill="rgba(122,92,110,0.2)" />
      <rect x="22" y="108" width="70" height="7" rx="3.5" fill="rgba(216,200,236,0.6)" />
      <rect x="114" y="42" width="174" height="52" rx="10" fill="rgba(255,255,255,0.52)" />
      <rect x="124" y="52" width="90" height="8" rx="4" fill="rgba(122,92,110,0.25)" />
      <rect x="124" y="66" width="154" height="6" rx="3" fill="rgba(168,143,160,0.2)" />
      <rect x="124" y="76" width="120" height="6" rx="3" fill="rgba(168,143,160,0.15)" />
      <rect x="114" y="104" width="174" height="52" rx="10" fill="rgba(255,255,255,0.45)" />
      <rect x="124" y="114" width="80" height="8" rx="4" fill="rgba(122,92,110,0.2)" />
      <rect x="124" y="128" width="154" height="6" rx="3" fill="rgba(168,143,160,0.18)" />
      <rect x="124" y="138" width="100" height="6" rx="3" fill="rgba(168,143,160,0.13)" />
    </svg>
  );
}

function ThumbLumiere() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8C8EC" /><stop offset="100%" stopColor="#C4E0F8" />
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8C4CC" /><stop offset="100%" stopColor="#FDE0C4" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#lg1)" />
      <rect x="0" y="0" width="300" height="80" fill="rgba(216,200,236,0.4)" />
      <rect x="0" y="0" width="300" height="80" fill="url(#lg2)" opacity="0.25" />
      <rect x="128" y="22" width="44" height="32" rx="6" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="150" cy="38" r="9" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="150" cy="38" r="5" fill="rgba(255,255,255,0.45)" />
      <rect x="136" y="19" width="14" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
      <rect x="88" y="60" width="124" height="14" rx="7" fill="rgba(255,255,255,0.35)" />
      <rect x="12" y="90" width="60" height="38" rx="7" fill="rgba(248,196,204,0.4)" />
      <rect x="78" y="90" width="60" height="38" rx="7" fill="rgba(216,200,236,0.4)" />
      <rect x="144" y="90" width="60" height="38" rx="7" fill="rgba(196,224,248,0.35)" />
      <rect x="210" y="90" width="78" height="38" rx="7" fill="rgba(253,224,196,0.35)" />
      <rect x="88" y="138" width="124" height="22" rx="11" fill="rgba(248,196,204,0.75)" />
      <rect x="118" y="145" width="64" height="8" rx="4" fill="rgba(122,92,110,0.35)" />
    </svg>
  );
}

function ThumbInvite() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBF4EE" /><stop offset="100%" stopColor="#FDE8EC" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#ig1)" />
      <ellipse cx="30" cy="25" rx="7" ry="11" transform="rotate(-30 30 25)" fill="rgba(248,196,204,0.45)" />
      <ellipse cx="265" cy="40" rx="6" ry="9" transform="rotate(20 265 40)" fill="rgba(216,200,236,0.45)" />
      <ellipse cx="50" cy="145" rx="5" ry="8" transform="rotate(15 50 145)" fill="rgba(196,224,248,0.4)" />
      <ellipse cx="280" cy="130" rx="6" ry="9" transform="rotate(-25 280 130)" fill="rgba(248,196,204,0.4)" />
      <rect x="54" y="18" width="192" height="134" rx="14" fill="rgba(255,255,255,0.7)" stroke="rgba(248,196,204,0.5)" strokeWidth="1.5" />
      <rect x="54" y="18" width="192" height="22" rx="14" fill="rgba(248,196,204,0.35)" />
      <rect x="54" y="30" width="192" height="10" fill="rgba(248,196,204,0.35)" />
      <ellipse cx="110" cy="26" rx="8" ry="6" fill="rgba(248,196,204,0.55)" />
      <ellipse cx="150" cy="24" rx="10" ry="7" fill="rgba(253,224,196,0.55)" />
      <ellipse cx="190" cy="26" rx="8" ry="6" fill="rgba(216,200,236,0.55)" />
      <rect x="100" y="50" width="100" height="10" rx="5" fill="rgba(122,92,110,0.2)" />
      <rect x="82" y="68" width="136" height="18" rx="7" fill="rgba(122,92,110,0.15)" />
      <rect x="108" y="94" width="84" height="7" rx="3.5" fill="rgba(168,143,160,0.25)" />
      <rect x="116" y="106" width="68" height="6" rx="3" fill="rgba(168,143,160,0.2)" />
      <line x1="90" y1="120" x2="210" y2="120" stroke="rgba(248,196,204,0.6)" strokeWidth="1" />
      <rect x="106" y="128" width="88" height="16" rx="8" fill="rgba(248,196,204,0.65)" />
      <rect x="124" y="133" width="52" height="6" rx="3" fill="rgba(122,92,110,0.3)" />
    </svg>
  );
}

function ThumbAureva() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="aurg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE0C4" /><stop offset="100%" stopColor="#F8C4CC" />
        </linearGradient>
      </defs>
      <rect width="300" height="170" fill="url(#aurg1)" />
      <rect x="0" y="0" width="300" height="26" fill="rgba(255,255,255,0.45)" />
      <rect x="12" y="8" width="44" height="10" rx="5" fill="rgba(122,92,110,0.3)" />
      <rect x="208" y="7" width="38" height="12" rx="6" fill="rgba(248,196,204,0.75)" />
      <rect x="252" y="7" width="38" height="12" rx="6" fill="rgba(216,200,236,0.65)" />
      <rect x="30" y="34" width="240" height="20" rx="10" fill="rgba(255,255,255,0.6)" />
      <circle cx="46" cy="44" r="5" fill="none" stroke="rgba(168,143,160,0.5)" strokeWidth="1.5" />
      <rect x="56" y="40" width="90" height="8" rx="4" fill="rgba(168,143,160,0.2)" />
      <rect x="222" y="36" width="40" height="16" rx="8" fill="rgba(248,196,204,0.75)" />
      <rect x="30" y="62" width="52" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
      <rect x="88" y="62" width="52" height="10" rx="5" fill="rgba(248,196,204,0.5)" />
      <rect x="146" y="62" width="52" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
      <rect x="204" y="62" width="52" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
      <rect x="12" y="80" width="130" height="52" rx="10" fill="rgba(255,255,255,0.58)" />
      <circle cx="30" cy="96" r="9" fill="rgba(248,196,204,0.55)" />
      <rect x="44" y="90" width="64" height="7" rx="3.5" fill="rgba(122,92,110,0.3)" />
      <rect x="44" y="101" width="42" height="5" rx="2.5" fill="rgba(168,143,160,0.25)" />
      <rect x="16" y="114" width="36" height="8" rx="4" fill="rgba(196,224,248,0.6)" />
      <rect x="58" y="114" width="40" height="8" rx="4" fill="rgba(216,200,236,0.6)" />
      <rect x="158" y="80" width="130" height="52" rx="10" fill="rgba(255,255,255,0.58)" />
      <circle cx="176" cy="96" r="9" fill="rgba(216,200,236,0.55)" />
      <rect x="190" y="90" width="64" height="7" rx="3.5" fill="rgba(122,92,110,0.3)" />
      <rect x="190" y="101" width="42" height="5" rx="2.5" fill="rgba(168,143,160,0.25)" />
      <rect x="162" y="114" width="36" height="8" rx="4" fill="rgba(248,196,204,0.6)" />
      <rect x="204" y="114" width="40" height="8" rx="4" fill="rgba(196,224,248,0.5)" />
    </svg>
  );
}

const THUMB_MAP: Record<string, React.FC> = {
  centsible: ThumbCentsible,
  taskflow: ThumbTaskFlow,
  capsort: ThumbCapsort,
  lumiere: ThumbLumiere,
  invite: ThumbInvite,
  aureva: ThumbAureva,
};

const THUMB_BG: Record<string, string> = {
  centsible: "linear-gradient(135deg, #FDE8EC, #F8C4CC, #FDE0C4)",
  taskflow:  "linear-gradient(135deg, #C4E0F8, #D8C8EC, #FDE8EC)",
  capsort:   "linear-gradient(135deg, #FDE0C4, #FBF4EE, #D8C8EC)",
  lumiere:   "linear-gradient(135deg, #D8C8EC, #F8C4CC, #C4E0F8)",
  invite:    "linear-gradient(135deg, #FBF4EE, #FDE8EC, #F8C4CC)",
  aureva:    "linear-gradient(135deg, #FDE0C4, #F8C4CC, #FBF4EE)",
};

// ── Reveal hook ────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// ── Reveal wrapper ─────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.85s cubic-bezier(.23,1,.32,1) ${delay}ms, transform 0.85s cubic-bezier(.23,1,.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const animRef   = useRef<number>(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  // Custom cursor
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    function animRing() {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      raf = requestAnimationFrame(animRing);
    }
    raf = requestAnimationFrame(animRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Petal canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLORS = ["#F8C4CC", "#D8C8EC", "#FDE0C4", "#C4E0F8", "#FBF4EE"];
    let W = 0, H = 0;
    const petals: Petal[] = [];

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 38; i++) {
      petals.push({
        x: Math.random() * (W || 1200),
        y: Math.random() * (H || 800),
        vx: (Math.random() - 0.5) * 0.45,
        vy: Math.random() * 0.55 + 0.2,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.03,
        size: Math.random() * 10 + 5,
        alpha: Math.random() * 0.35 + 0.1,
        colorIdx: Math.floor(Math.random() * COLORS.length),
      });
    }

    function drawPetal(p: Petal) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.angle);
      ctx!.globalAlpha = p.alpha;
      ctx!.fillStyle = COLORS[p.colorIdx];
      ctx!.beginPath();
      ctx!.ellipse(0, 0, p.size * 0.5, p.size, 0, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);
      petals.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        drawPetal(p);
      });
      animRef.current = requestAnimationFrame(tick);
    }
    animRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#FBF4EE", color: "#4A3A45", overflowX: "hidden", cursor: "none" }}>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999,
          width: hovering ? 26 : 18, height: hovering ? 26 : 18,
          borderRadius: "50%",
          background: "radial-gradient(circle, #F8C4CC 0%, #D8C8EC 100%)",
          transform: `translate(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%))`,
          transition: "width 0.2s ease, height 0.2s ease",
          mixBlendMode: "multiply",
          opacity: 0.85,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9998,
          width: hovering ? 54 : 38, height: hovering ? 54 : 38,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "rgba(216,200,236,0.6)" : "rgba(248,196,204,0.5)"}`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
        }}
      />

      {/* Petal canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.55 }}
      />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 4rem",
        background: "rgba(251,244,238,0.72)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(248,196,204,0.25)",
      }}>
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo("hero"); }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 500, color: "#7A5C6E", letterSpacing: "0.04em", textDecoration: "none", cursor: "none" }}
          onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
        >
          Charesh Angeline
        </a>
        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {["about", "projects", "skills", "interests", "contact"].map(id => (
            <li key={id}>
              <NavLink id={id} label={id.charAt(0).toUpperCase() + id.slice(1)} scrollTo={scrollTo} setHovering={setHovering} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(145deg, #FDE8EC 0%, #FBF4EE 35%, #FDE0C4 60%, #D8C8EC 90%, #C4E0F8 100%)",
        overflow: "hidden", position: "relative", zIndex: 1,
      }}>
        {/* blobs */}
        <div className="blob-b1" style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: "#F8C4CC", top: "-10%", left: "-8%", filter: "blur(70px)", opacity: 0.45 }} />
        <div className="blob-b2" style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: "#D8C8EC", top: "30%", right: "-5%", filter: "blur(70px)", opacity: 0.45 }} />
        <div className="blob-b3" style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#FDE0C4", bottom: 0, left: "25%", filter: "blur(70px)", opacity: 0.45 }} />

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "4.5rem", zIndex: 2, padding: "2rem 3rem", maxWidth: 1100, width: "100%",
          animation: "fadeUp 1.2s cubic-bezier(.23,1,.32,1) both",
        }}>
          {/* Photo */}
          <div style={{ flexShrink: 0, position: "relative", animation: "fadeUp 1.2s 0.15s both" }}>
            <div style={{ position: "absolute", inset: -10, borderRadius: "50%", border: "1.5px solid rgba(248,196,204,0.5)", animation: "ringPulse 3.5s ease-in-out infinite" }} />
            <div style={{ position: "absolute", inset: -22, borderRadius: "50%", border: "1px solid rgba(216,200,236,0.3)", animation: "ringPulse 3.5s 0.8s ease-in-out infinite" }} />
            <div style={{
              width: 220, height: 220, borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.75)",
              boxShadow: "0 12px 50px rgba(180,130,150,0.28), 0 0 0 8px rgba(253,232,236,0.4)",
              overflow: "hidden",
            }}>
              <img
                src={profilePhoto}
                alt="Charesh Angeline P. Rapirap"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
            <span className="photo-petal" style={{ position: "absolute", top: -12, right: 18, fontSize: "1.1rem", opacity: 0.6, animation: "petalOrbit 6s ease-in-out infinite" }}>🌸</span>
            <span className="photo-petal" style={{ position: "absolute", bottom: 10, left: -10, fontSize: "1.1rem", opacity: 0.6, animation: "petalOrbit 6s 2s ease-in-out infinite" }}>🌺</span>
            <span className="photo-petal" style={{ position: "absolute", top: "50%", right: -14, fontSize: "1.1rem", opacity: 0.6, animation: "petalOrbit 6s 4s ease-in-out infinite" }}>✿</span>
          </div>

          {/* Text */}
          <div style={{ textAlign: "left" }}>
            <span style={{
              display: "inline-block", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#A88FA0",
              background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(248,196,204,0.4)", padding: "0.4rem 1.2rem", borderRadius: 100,
              marginBottom: "1.8rem", animation: "fadeUp 1.2s 0.2s both",
            }}>
              Frontend Developer &amp; UI Designer
            </span>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
              fontWeight: 300, lineHeight: 1.08, color: "#7A5C6E", marginBottom: "0.6rem",
              animation: "fadeUp 1.2s 0.35s both",
            }}>
              Charesh <em style={{ fontStyle: "italic", color: "#B87890" }}>Angeline</em><br />P. Rapirap
            </h1>
            <p style={{
              fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", fontWeight: 400, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#A88FA0", marginBottom: "1.8rem",
              animation: "fadeUp 1.2s 0.5s both",
            }}>
              <em> CS Student </em><br /> University of Science and Technology of the Southern Philippines 

            </p>
            <p style={{
              maxWidth: 420, fontSize: "0.97rem", lineHeight: 1.85, color: "#7A6070",
              fontWeight: 300, marginBottom: "2.8rem", animation: "fadeUp 1.2s 0.65s both",
            }}>
              Designing thoughtful and interactive web experiences inspired by storytelling, games, and visual media.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 1.2s 0.8s both" }}>
              <button
                onClick={() => scrollTo("projects")}
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "0.85rem 2.2rem", borderRadius: 100, border: "none", cursor: "none",
                  background: "linear-gradient(135deg, #F8C4CC 0%, #D8C8EC 100%)",
                  color: "#7A5C6E", boxShadow: "0 4px 22px rgba(248,196,204,0.5)",
                  transition: "transform 0.28s cubic-bezier(.23,1,.32,1), box-shadow 0.28s",
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "0.85rem 2.2rem", borderRadius: 100, cursor: "none",
                  background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(248,196,204,0.5)", color: "#7A5C6E",
                  boxShadow: "0 2px 16px rgba(180,130,150,0.10)",
                  transition: "transform 0.28s cubic-bezier(.23,1,.32,1), box-shadow 0.28s",
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#A88FA0", opacity: 0.7, animation: "fadeUp 1.2s 1.2s both",
        }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #F8C4CC, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "9rem 2rem", background: "linear-gradient(180deg, #FBF4EE 0%, #FDE8EC 100%)", position: "relative", zIndex: 1 }}>
        <Reveal><p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A88FA0", textAlign: "center", marginBottom: "0.8rem" }}>A little about me</p></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, textAlign: "center", color: "#7A5C6E", marginBottom: "4rem", lineHeight: 1.2 }}>
            Crafting <em style={{ fontStyle: "italic", color: "#C87090" }}>stories</em><br />through interfaces
          </h2>
        </Reveal>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div style={{ gridColumn: "1 / -1" }}>
            <Reveal delay={0}>
              <GlassCard style={{ background: "linear-gradient(135deg, rgba(253,232,236,0.7) 0%, rgba(216,200,236,0.45) 100%)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>🌸</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 500, color: "#7A5C6E", marginBottom: "0.7rem" }}>Hello, I'm Charesh</h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#7A6070", fontWeight: 300 }}>I'm a Computer Science student with a deep fondness for frontend development and UI/UX design. I believe that the best interfaces are the ones that feel alive — interfaces that tell a story, evoke an emotion, and make someone pause for a moment.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginTop: "1.2rem" }}>
                  {["Frontend Dev", "UI/UX Design", "Visual Design"].map(c => (
                    <span key={c} style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em", padding: "0.35rem 1rem", borderRadius: 100, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(248,196,204,0.45)", color: "#A88FA0" }}>{c}</span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <GlassCard style={{ background: "linear-gradient(135deg, rgba(196,224,248,0.4) 0%, rgba(253,232,236,0.4) 100%)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>✨</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 500, color: "#7A5C6E", marginBottom: "0.7rem" }}>What I do</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#7A6070", fontWeight: 300 }}>I build interfaces that breathe — from pixel-perfect UI components to full web experiences. I love turning design concepts into smooth, responsive, and immersive code.</p>
            </GlassCard>
          </Reveal>
          <Reveal delay={200}>
            <GlassCard style={{ background: "linear-gradient(135deg, rgba(216,200,236,0.4) 0%, rgba(253,224,196,0.4) 100%)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>🎨</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 500, color: "#7A5C6E", marginBottom: "0.7rem" }}>About me</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#7A6070", fontWeight: 300 }}>I'm a 3rd-year Computer Science student at USTP-CDO. I believe that each project is an opportunity to blend creativity with technology and make something that feels alive.</p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "9rem 2rem", background: "linear-gradient(180deg, #FDE8EC 0%, #FBF4EE 50%, #FDE0C4 100%)", position: "relative", zIndex: 1 }}>
        <Reveal><p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A88FA0", textAlign: "center", marginBottom: "0.8rem" }}>Things I've built</p></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, textAlign: "center", color: "#7A5C6E", marginBottom: "4rem", lineHeight: 1.2 }}>
            Selected <em style={{ fontStyle: "italic", color: "#C87090" }}>Work</em>
          </h2>
        </Reveal>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.8rem" }}>
          {PROJECTS.map((p, i) => {
            const ThumbComp = THUMB_MAP[p.thumb];
            return (
              <Reveal key={p.name} delay={(i % 3) * 100}>
                <ProjectCard project={p} ThumbComp={ThumbComp} bg={THUMB_BG[p.thumb]} setHovering={setHovering} />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "9rem 2rem", background: "linear-gradient(180deg, #FDE0C4 0%, #FBF4EE 60%, #FDE8EC 100%)", position: "relative", zIndex: 1 }}>
        <Reveal><p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A88FA0", textAlign: "center", marginBottom: "0.8rem" }}>Tools of the trade</p></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, textAlign: "center", color: "#7A5C6E", marginBottom: "4rem", lineHeight: 1.2 }}>
            Skills &amp; <em style={{ fontStyle: "italic", color: "#C87090" }}>Technologies</em>
          </h2>
        </Reveal>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <SkillPill icon={s.icon} label={s.label} setHovering={setHovering} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section id="interests" style={{ padding: "9rem 2rem", background: "linear-gradient(180deg, #FDE8EC 0%, #D8C8EC 50%, #C4E0F8 100%)", position: "relative", zIndex: 1 }}>
        <Reveal><p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A88FA0", textAlign: "center", marginBottom: "0.8rem" }}>What inspires me</p></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, textAlign: "center", color: "#7A5C6E", marginBottom: "4rem", lineHeight: 1.2 }}>
            Inspirations &amp; <em style={{ fontStyle: "italic", color: "#C87090" }}>Passions</em>
          </h2>
        </Reveal>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.4rem", justifyItems: "center" }}>
          {INTERESTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                style={{
                  background: "rgba(255,255,255,0.28)", backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.55)", borderRadius: 20,
                  padding: "2rem 1.5rem", textAlign: "center",
                  boxShadow: "0 2px 16px rgba(180,130,150,0.10)",
                  transition: "transform 0.35s cubic-bezier(.23,1,.32,1), box-shadow 0.35s",
                  cursor: "none", width: "100%",
                }}
              >
                <span style={{ fontSize: "2.4rem", marginBottom: "0.9rem", display: "block" }}>{item.icon}</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 500, color: "#7A5C6E", marginBottom: "0.35rem" }}>{item.label}</p>
                <p style={{ fontSize: "0.75rem", color: "#A88FA0", fontWeight: 300 }}>{item.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "9rem 2rem", background: "linear-gradient(180deg, #C4E0F8 0%, #FDE8EC 50%, #FBF4EE 100%)", position: "relative", zIndex: 1 }}>
        <Reveal><p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A88FA0", textAlign: "center", marginBottom: "0.8rem" }}>{"Let's connect"}</p></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, textAlign: "center", color: "#7A5C6E", marginBottom: "4rem", lineHeight: 1.2 }}>
            Say <em style={{ fontStyle: "italic", color: "#C87090" }}>Hello</em>
          </h2>
        </Reveal>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Reveal delay={100}>
            <div style={{
              background: "rgba(255,255,255,0.45)", backdropFilter: "blur(22px)",
              border: "1px solid rgba(255,255,255,0.7)", borderRadius: 28,
              padding: "3.5rem 3rem", boxShadow: "0 12px 50px rgba(180,130,150,0.15)", marginTop: "3rem",
            }}>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.8, color: "#7A6070", fontWeight: 300, marginBottom: "2.2rem" }}>
                {"I'm always happy to connect, collaborate, or just share something beautiful we both love. Whether it's a project idea or a Ghibli film recommendation — my inbox is open."}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", justifyContent: "center", marginBottom: "2.5rem" }}>
                <ContactLink href="mailto:rapirap.chareshangeline@gmail.com" label="✉️  Email" setHovering={setHovering} />
                <ContactLink href="https://github.com/Ayeshaaaaahhh" label="🐙  GitHub" setHovering={setHovering} />
              </div>
              <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(248,196,204,0.5), transparent)", margin: "1.5rem 0" }} />
              <a
                href="mailto:rapirap.chareshangeline@gmail.com"
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#7A5C6E", textDecoration: "none", cursor: "none", transition: "color 0.2s" }}
              >
                rapirap.chareshangeline@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "2.5rem",
        fontSize: "0.72rem", fontWeight: 300, letterSpacing: "0.08em",
        color: "#A88FA0", background: "#FBF4EE",
        borderTop: "1px solid rgba(248,196,204,0.2)", position: "relative", zIndex: 1,
      }}>
        <p>✦ &nbsp; Crafted with care by Charesh Angeline P. Rapirap &nbsp; · &nbsp; Frontend Developer &amp; UI Designer &nbsp; ✦</p>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(18px, -22px) scale(1.07); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.03); }
        }
        @keyframes petalOrbit {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-8px) rotate(18deg); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .blob-b1 { animation: blobFloat 8s ease-in-out infinite alternate; }
        .blob-b2 { animation: blobFloat 8s 3s ease-in-out infinite alternate; }
        .blob-b3 { animation: blobFloat 8s 5s ease-in-out infinite alternate; }
        html { scroll-behavior: smooth; }
        * { cursor: none !important; }
      `}</style>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function NavLink({ id, label, scrollTo, setHovering }: { id: string; label: string; scrollTo: (id: string) => void; setHovering: (v: boolean) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`#${id}`}
      onClick={e => { e.preventDefault(); scrollTo(id); }}
      onMouseEnter={() => { setHovered(true); setHovering(true); }}
      onMouseLeave={() => { setHovered(false); setHovering(false); }}
      style={{
        fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.09em",
        textTransform: "uppercase", color: hovered ? "#7A5C6E" : "#A88FA0",
        textDecoration: "none", position: "relative", transition: "color 0.25s", cursor: "none",
      }}
    >
      {label}
      <span style={{
        content: "''", position: "absolute", bottom: -3, left: 0,
        width: hovered ? "100%" : 0, height: 1,
        background: "linear-gradient(90deg, #F8C4CC, #D8C8EC)",
        transition: "width 0.3s ease", display: "block",
      }} />
    </a>
  );
}

function GlassCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.45)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.6)",
        borderRadius: 24, padding: "2.2rem 2.4rem",
        boxShadow: hovered ? "0 16px 50px rgba(180,130,150,0.2)" : "0 8px 40px rgba(180,130,150,0.13)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(.23,1,.32,1), box-shadow 0.35s",
        cursor: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, ThumbComp, bg, setHovering }: {
  project: typeof PROJECTS[0];
  ThumbComp: React.FC;
  bg: string;
  setHovering: (v: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => { setHovered(true); setHovering(true); }}
      onMouseLeave={() => { setHovered(false); setHovering(false); }}
      style={{
        display: "block", textDecoration: "none", color: "inherit",
        background: "rgba(255,255,255,0.45)", backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.65)", borderRadius: 20,
        overflow: "hidden", cursor: "none",
        boxShadow: hovered ? "0 22px 55px rgba(180,130,150,0.22)" : "0 2px 16px rgba(180,130,150,0.10)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.38s cubic-bezier(.23,1,.32,1), box-shadow 0.38s",
      }}
    >
      <div style={{ height: 170, background: bg, position: "relative", overflow: "hidden" }}>
        <ThumbComp />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.28))", pointerEvents: "none" }} />
      </div>
      <div style={{ padding: "1.5rem 1.7rem 1.8rem" }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A88FA0", marginBottom: "0.4rem" }}>{project.num}</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "#7A5C6E", marginBottom: "0.5rem" }}>{project.name}</h3>
        <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "#8A7080", fontWeight: 300, marginBottom: "1rem" }}>{project.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.06em",
              padding: "0.2rem 0.7rem", borderRadius: 100,
              background: hovered ? "rgba(216,200,236,0.3)" : "rgba(248,196,204,0.25)",
              border: `1px solid ${hovered ? "rgba(216,200,236,0.5)" : "rgba(248,196,204,0.4)"}`,
              color: "#A88FA0", transition: "background 0.2s, border-color 0.2s",
            }}>{t}</span>
          ))}
        </div>
        <p style={{
          marginTop: "1rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em",
          textTransform: "uppercase", color: hovered ? "#C87090" : "#A88FA0",
          opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.3s, transform 0.3s, color 0.3s",
        }}>
          Visit Project ↗
        </p>
      </div>
    </a>
  );
}

function SkillPill({ icon, label, setHovering }: { icon: string; label: string; setHovering: (v: boolean) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => { setHovered(true); setHovering(true); }}
      onMouseLeave={() => { setHovered(false); setHovering(false); }}
      style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        padding: "0.8rem 1.6rem", borderRadius: 100,
        background: hovered ? "rgba(248,196,204,0.45)" : "rgba(255,255,255,0.45)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: hovered ? "0 10px 30px rgba(248,196,204,0.4)" : "0 2px 16px rgba(180,130,150,0.10)",
        fontSize: "0.88rem", fontWeight: 500, color: "#7A5C6E", cursor: "none",
        transform: hovered ? "translateY(-5px) scale(1.06)" : "translateY(0) scale(1)",
        transition: "transform 0.3s cubic-bezier(.23,1,.32,1), box-shadow 0.3s, background 0.3s",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      {label}
    </div>
  );
}

function ContactLink({ href, label, setHovering }: { href: string; label: string; setHovering: (v: boolean) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => { setHovered(true); setHovering(true); }}
      onMouseLeave={() => { setHovered(false); setHovering(false); }}
      style={{
        display: "flex", alignItems: "center", gap: "0.5rem",
        padding: "0.75rem 1.6rem", borderRadius: 100,
        fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.06em",
        textDecoration: "none", cursor: "none",
        background: hovered ? "rgba(248,196,204,0.4)" : "rgba(255,255,255,0.5)",
        border: "1px solid rgba(248,196,204,0.4)", color: "#7A5C6E",
        boxShadow: hovered ? "0 8px 28px rgba(248,196,204,0.45)" : "0 2px 16px rgba(180,130,150,0.10)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(.23,1,.32,1)",
      }}
    >
      {label}
    </a>
  );
}
