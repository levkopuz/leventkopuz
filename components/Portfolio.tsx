"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const EMAIL = "hello@leventkopuz.com";
const LINKEDIN = "https://www.linkedin.com/";
const INSTAGRAM = "https://www.instagram.com/";
const YOUTUBE = "https://www.youtube.com/";

type WorkKey = "garanti" | "beko" | "aviv";

const workItems: Array<{
  key: WorkKey;
  company: string;
  title: string;
  meta: string;
  detail: string;
  context: string;
  focus: string[];
  scale: string;
  impact: string;
}> = [
  {
    key: "garanti",
    company: "Garanti BBVA",
    title: "Building customer-centric banking experiences at scale.",
    meta: "Experience Strategy · Digital Banking · Customer Experience",
    detail:
      "Built across mobile, web and ATM. Helped shift experience work toward connected journeys and decision systems.",
    context:
      "A large-scale customer experience transformation across digital banking touchpoints.",
    focus: [
      "Experience Strategy",
      "Digital Banking",
      "Customer Experience",
      "Cross-functional Alignment",
    ],
    scale: "Mobile · Web · ATM",
    impact:
      "Helped move experience work beyond isolated screens toward connected journeys, stronger customer context and more coherent decision systems.",
  },
  {
    key: "beko",
    company: "Beko Global",
    title: "Building digital experiences across markets, brands and cultures.",
    meta: "Global Experience · Product · Digital Platforms",
    detail:
      "22 Brands · 57 Countries · 118 Subsidiaries. Built more consistent and scalable digital experience structures across markets.",
    context:
      "A global digital ecosystem balancing brand consistency, local market needs and operational scale.",
    focus: [
      "Global Experience",
      "Product Thinking",
      "Digital Platforms",
      "Scalable Experience Architecture",
    ],
    scale: "22 Brands · 57 Countries · 118 Subsidiaries",
    impact:
      "Built more consistent, reusable and scalable digital experience structures while preserving room for market-level adaptation.",
  },
  {
    key: "aviv",
    company: "AVIV",
    title: "Turning complex product ecosystems into clearer experiences.",
    meta: "Product Experience · UX · Digital Product",
    detail:
      "Translated complex business and product requirements into clearer, more usable digital experiences.",
    context:
      "A multi-country, multi-brand European PropTech environment with shared product capabilities and local requirements.",
    focus: [
      "Product Experience",
      "UX",
      "Digital Product",
      "Customer Journeys",
    ],
    scale: "3 Countries · 3 Brands · Shared Product Layer",
    impact:
      "Helped translate complex product and business requirements into clearer experiences while supporting a scalable core and localized execution.",
  },
];

const pointOfView = [
  {
    n: "01",
    title: "Think in Systems",
    body: "Experience is not an interface. It is a connected system of people, technology and decisions.",
    capabilities: ["Experience Systems", "Decision Architecture"],
  },
  {
    n: "02",
    title: "Build with Strategy",
    body: "Every experience decision should create value for both people and business.",
    capabilities: ["Product Strategy", "Innovation Programs"],
  },
  {
    n: "03",
    title: "Scale with Intelligence",
    body: "AI should reduce complexity, improve decisions and make experiences more adaptive.",
    capabilities: ["AI-Enabled Experiences", "Adaptive Products"],
  },
];

const navItems = [
  { label: "How I Build", href: "#build" },
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={down ? "M12 4v14m0 0 5-5m-5 5-5-5" : "M5 19 19 5m0 0H8m11 0v11"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

function SystemSculpture() {
  const rings = useMemo(() => Array.from({ length: 24 }), []);
  const sculptureRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = sculptureRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--sculpture-x", `${x * 9}deg`);
    node.style.setProperty("--sculpture-y", `${y * -7}deg`);
  };

  const resetPointer = () => {
    const node = sculptureRef.current;
    if (!node) return;
    node.style.setProperty("--sculpture-x", "0deg");
    node.style.setProperty("--sculpture-y", "0deg");
  };

  return (
    <div
      ref={sculptureRef}
      className="system-sculpture"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <svg viewBox="0 0 420 620" className="sculpture-svg">
        <defs>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity=".12" />
          </filter>
        </defs>
        <g filter="url(#softShadow)">
          {rings.map((_, i) => {
            const y = 105 + i * 17;
            const rx = 86 + Math.sin(i * 0.52) * 28 + i * 1.8;
            const ry = 15 + Math.cos(i * 0.37) * 4;
            const rotation = -17 + i * 1.55;
            return (
              <ellipse
                key={i}
                cx="210"
                cy={y}
                rx={rx}
                ry={ry}
                transform={`rotate(${rotation} 210 ${y})`}
                fill="none"
                stroke={i % 5 === 0 ? "#ff4b24" : "#6f675d"}
                strokeOpacity={i % 5 === 0 ? ".72" : ".42"}
                strokeWidth={i % 5 === 0 ? "1.4" : "1"}
              />
            );
          })}
        </g>
        <circle cx="103" cy="173" r="4.5" fill="#ff4b24" />
        <circle cx="326" cy="327" r="3" fill="#ff4b24" />
        <circle cx="137" cy="475" r="3" fill="#151514" />
      </svg>
      <span className="sculpture-label label-a">SYSTEM</span>
      <span className="sculpture-label label-b">SIGNAL</span>
      <span className="sculpture-label label-c">SCALE</span>
    </div>
  );
}

function CaseVisual({ variant }: { variant: WorkKey }) {
  if (variant === "garanti") {
    return (
      <div className="case-visual garanti-visual" aria-hidden="true">
        <div className="ribs">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
        </div>
        <div className="visual-wordmark">GARANTI BBVA</div>
        <span className="visual-index">01 / BANKING</span>
      </div>
    );
  }

  if (variant === "beko") {
    return (
      <div className="case-visual beko-visual" aria-hidden="true">
        <div className="modules">
          {Array.from({ length: 12 }).map((_, i) => <span key={i} className={`module module-${i + 1}`} />)}
        </div>
        <div className="visual-wordmark">BEKO GLOBAL</div>
        <span className="visual-index">02 / GLOBAL</span>
      </div>
    );
  }

  return (
    <div className="case-visual aviv-visual" aria-hidden="true">
      <div className="aviv-frame frame-a" />
      <div className="aviv-frame frame-b" />
      <div className="aviv-frame frame-c" />
      <div className="visual-wordmark">AVIV</div>
      <span className="visual-index">03 / PROPTECH</span>
    </div>
  );
}

function MetricCount({
  end,
  suffix = "",
  active,
}: {
  end: number;
  suffix?: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 850;
    const started = performance.now();
    let raf = 0;

    const frame = (now: number) => {
      const p = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, end]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

function ImpactSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section impact-section dark-section" id="impact" ref={ref}>
      <div className="section-shell">
        <div className="section-kicker light-kicker"><span>03.</span> IMPACT</div>
        <div className="section-intro reveal">
          <h2>Impact<br />at Scale</h2>
          <p>I scale impact through products, teams, communities and knowledge.</p>
        </div>

        <div className="metrics-grid">
          <article className="metric reveal">
            <strong><MetricCount end={300} suffix="+" active={active} /></strong>
            <span>Startups mentored</span>
          </article>
          <article className="metric reveal">
            <strong><MetricCount end={350} suffix="+" active={active} /></strong>
            <span>Community members connected</span>
          </article>
          <article className="metric reveal">
            <strong className="triple">
              <MetricCount end={22} active={active} /> / <MetricCount end={57} active={active} /> / <MetricCount end={118} active={active} />
            </strong>
            <span>Brands · Countries · Subsidiaries</span>
          </article>
          <article className="metric reveal">
            <strong><MetricCount end={10} suffix="+ Years" active={active} /></strong>
            <span>Building digital products and experiences</span>
          </article>
        </div>

        <div className="impact-roles">
          <article className="impact-role reveal">
            <span>01 / MENTOR</span>
            <h3>Helping founders and teams sharpen product strategy, innovation and customer value.</h3>
          </article>
          <article className="impact-role reveal">
            <span>02 / SPEAKER &amp; EDUCATOR</span>
            <h3>Exploring AI × EI, product innovation, experience strategy and the future of banking.</h3>
          </article>
          <article className="impact-role reveal">
            <span>03 / COMMUNITY BUILDER</span>
            <h3>Creating spaces where people, ideas and disciplines can collide.</h3>
          </article>
        </div>

        <div className="institution-row impact-institutions reveal">
          Boğaziçi University · Berlin Design Events · Brick Institute · Entertech · Üretken Akademi
        </div>

        <div className="impact-horizon reveal" aria-hidden="true">
          <div className="planet" />
          <div className="impact-node node-1" />
          <div className="impact-node node-2" />
          <div className="impact-node node-3" />
          <div className="impact-words">
            <span>PEOPLE</span>
            <span>IDEAS</span>
            <span>TECHNOLOGY</span>
            <span>A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("build");
  const [activePov, setActivePov] = useState(0);
  const [activeWork, setActiveWork] = useState<WorkKey | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeWorkItem = workItems.find((item) => item.key === activeWork) ?? null;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.05, 0.25, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const locked = menuOpen || Boolean(activeWork);
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, activeWork]);

  useEffect(() => {
    if (!activeWork) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveWork(null);
        return;
      }
      if (event.key !== "Tab") return;

      const modal = document.querySelector(".work-modal-panel");
      if (!modal) return;
      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((node) => !node.hasAttribute("disabled"));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeWork]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleAnchor = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Levent Kopuz home">
          LEVENT KOPUZ
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} onClick={handleAnchor}>
              <span>0{i + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <span>Istanbul · Berlin</span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <section className="hero section" id="top">
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="hero-taxonomy reveal">
              <span className="orange-dot" />
              <span>EXPERIENCE</span>
              <span>PRODUCT</span>
              <span>STRATEGY</span>
              <span>AI</span>
            </div>
            <h1 className="reveal">
              I build <em>scalable experiences</em> through strategy, product thinking and AI.
            </h1>
            <p className="hero-lead reveal">
              I turn complexity into systems that help people make better decisions and organizations innovate faster.
            </p>
            <p className="taxonomy-line reveal">Experience · Product · Strategy · AI</p>
            <div className="hero-actions reveal">
              <a className="button button-primary" href="#work">
                Selected Work <ArrowIcon down />
              </a>
              <a className="button button-secondary" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <SystemSculpture />
          </div>
        </div>
        <a className="scroll-cue" href="#build" aria-label="Scroll to how I build">
          <span />
          SCROLL DOWN
        </a>
      </section>

      <section className="section dark-section pov-section" id="build">
        <div className="section-shell">
          <div className="section-kicker light-kicker"><span>01.</span> HOW I BUILD</div>
          <div className="section-intro wide reveal">
            <h2>Systems. Strategy. <em>Intelligence.</em></h2>
          </div>

          <div className="pov-grid">
            {pointOfView.map((item, i) => (
              <button
                type="button"
                className={`pov-card reveal ${activePov === i ? "active" : ""}`}
                key={item.title}
                onClick={() => setActivePov(i)}
                aria-pressed={activePov === i}
              >
                <div className="pov-icon"><span>{item.n}</span></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="pov-tags" aria-label="Capabilities">
                  {item.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-shell">
          <div className="section-kicker"><span>02.</span> SELECTED WORK</div>
          <div className="section-intro work-intro reveal">
            <h2>Selected<br />Work</h2>
            <p>Different industries. Same principle: turning complexity into better experiences.</p>
          </div>

          <div className="work-list">
            {workItems.map((item, i) => (
              <article className={`work-card reveal ${i % 2 ? "reverse" : ""}`} key={item.key} data-work={item.key}>
                <div className="work-visual-wrap">
                  <CaseVisual variant={item.key} />
                </div>
                <div className="work-copy">
                  <div className="work-heading">
                    <span className="work-number">0{i + 1}</span>
                    <h3>{item.company}</h3>
                  </div>
                  <h4>{item.title}</h4>
                  <p className="work-meta">{item.meta}</p>
                  <p>{item.detail}</p>
                  <button className="case-link" type="button" onClick={() => setActiveWork(item.key)}>
                    View case <ArrowIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactSection />

      <section className="section about-section dark-section" id="about">
        <div className="section-shell about-shell">
          <div className="about-copy">
            <div className="section-kicker light-kicker"><span>04.</span> ABOUT</div>
            <h2 className="reveal">From interfaces<br /><em>to systems.</em></h2>
            <div className="about-body reveal">
              <p>
                I started in digital design and gradually moved upstream — from interfaces to product decisions, organizational systems and innovation.
              </p>
              <p>
                Today, my work moves across disciplines, industries and cultures, with one constant: making complex things clearer and useful enough to scale.
              </p>
            </div>
            <p className="about-note reveal">Based in Istanbul. Connected to Berlin. Designer by background. Strategist by evolution. Builder by mindset.</p>
          </div>

          <div className="profile-art reveal" aria-hidden="true">
            <div className="profile-orbit orbit-1" />
            <div className="profile-orbit orbit-2" />
            <div className="profile-head" />
            <div className="profile-neck" />
            <span className="profile-label p1">CURIOSITY</span>
            <span className="profile-label p2">SYSTEMS</span>
            <span className="profile-label p3">PEOPLE</span>
            <span className="profile-label p4">A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-shell">
          <div className="section-kicker"><span>05.</span> GET IN TOUCH</div>
          <div className="contact-grid">
            <div className="reveal">
              <h2>Get In<br />Touch</h2>
              <p>If you would like to talk about product, experience, strategy, AI or innovation, feel free to get in touch.</p>
            </div>

            <div className="contact-actions reveal">
              <a className="button button-primary large" href={`mailto:${EMAIL}`}>
                Email <ArrowIcon />
              </a>
              <button className="button button-secondary large copy-button" type="button" onClick={copyEmail}>
                {copied ? "Copied" : "Copy email"}
              </button>
              <a className="button button-secondary large" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>
              <div className="location-row">Istanbul · Berlin</div>
            </div>
          </div>

          <div className="closing-statement reveal">
            Let&apos;s build what&apos;s next.
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand" href="#top">LEVENT KOPUZ</a>
          <div className="footer-links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Levent Kopuz. All rights reserved.</span>
          <span>Experience · Product · Strategy · AI</span>
        </div>
      </footer>

      {activeWorkItem && (
        <div className="work-modal" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setActiveWork(null);
        }}>
          <div
            className="work-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
          >
            <div className="modal-topbar">
              <span>SELECTED WORK / {activeWorkItem.company.toUpperCase()}</span>
              <button ref={closeButtonRef} type="button" onClick={() => setActiveWork(null)} aria-label="Close case study">
                Close ×
              </button>
            </div>
            <CaseVisual variant={activeWorkItem.key} />
            <div className="modal-content">
              <div>
                <p className="modal-label">CONTEXT</p>
                <h2 id="case-title">{activeWorkItem.title}</h2>
                <p>{activeWorkItem.context}</p>
              </div>
              <div className="modal-facts">
                <div>
                  <span>MY FOCUS</span>
                  <ul>
                    {activeWorkItem.focus.map((focus) => <li key={focus}>{focus}</li>)}
                  </ul>
                </div>
                <div>
                  <span>BUILT / SCALE</span>
                  <p>{activeWorkItem.scale}</p>
                </div>
                <div>
                  <span>IMPACT</span>
                  <p>{activeWorkItem.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
