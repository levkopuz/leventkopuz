"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "hello@leventkopuz.com";
const LINKEDIN = "https://www.linkedin.com/";
const INSTAGRAM = "https://www.instagram.com/";
const YOUTUBE = "https://www.youtube.com/";

type WorkKey = "garanti" | "beko" | "aviv";

const workItems: Array<{
  key: WorkKey;
  company: string;
  logo: string;
  label: string;
  title: string;
  context: string;
  focus: string[];
  scale: string;
  impact: string;
}> = [
  {
    key: "garanti",
    company: "Garanti BBVA",
    logo: "/logos/garanti-bbva.svg",
    label: "BANKING · CX TRANSFORMATION",
    title: "Building customer-centric banking experiences at scale.",
    context:
      "Product and experience work across a large-scale banking transformation, connecting customer perspective with digital delivery.",
    focus: ["Experience Strategy", "Digital Banking", "Product Thinking", "Cross-functional Facilitation"],
    scale: "Mobile · Web · ATM",
    impact:
      "Helped move experience work beyond isolated screens toward connected journeys, customer context and stronger decision systems.",
  },
  {
    key: "beko",
    company: "Beko Global",
    logo: "/logos/beko.png",
    label: "GLOBAL DIGITAL EXPERIENCE",
    title: "Building digital experiences across markets, brands and cultures.",
    context:
      "A global digital ecosystem where consistency, localization and operational scale had to work together.",
    focus: ["Global Experience", "Digital Platforms", "Product Experience", "Scalable Systems"],
    scale: "22 Brands · 57 Countries · 118 Subsidiaries",
    impact:
      "Built more consistent and scalable digital experience structures while leaving room for market-level adaptation.",
  },
  {
    key: "aviv",
    company: "AVIV Group",
    logo: "/logos/aviv.webp",
    label: "EUROPEAN PROPTECH",
    title: "Turning complex product ecosystems into clearer experiences.",
    context:
      "A multi-country, multi-brand digital product environment with a shared core experience and local market requirements.",
    focus: ["Product Experience", "UX", "Customer Journeys", "Shared Product Layer"],
    scale: "3 Countries · 3 Brands · Shared Core",
    impact:
      "Translated complex product and business requirements into clearer experiences while supporting a scalable core and localized execution.",
  },
];

const arenas = [
  {
    n: "01",
    verb: "BUILD",
    title: "Product Innovation & Experience",
    copy: "My core professional arena: turning customer, business and technology signals into scalable products and experiences.",
    href: "#product",
  },
  {
    n: "02",
    verb: "ENABLE",
    title: "Mentorship & Program Management",
    copy: "Helping founders and teams sharpen product thinking, validate ideas and move from insight to execution.",
    href: "#ecosystem",
  },
  {
    n: "03",
    verb: "CONNECT",
    title: "Community Building",
    copy: "Creating spaces where people, disciplines and emerging ideas can meet — from Berlin Design Events to Trendzone.",
    href: "#community",
  },
];

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Community", href: "#community" },
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
    <span className={"menu-icon " + (open ? "is-open" : "")} aria-hidden="true">
      <i />
      <i />
    </span>
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
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section dark-section impact-section" id="impact" ref={ref}>
      <div className="section-shell">
        <div className="section-kicker light-kicker"><span>06.</span> IMPACT ACROSS THE SYSTEM</div>
        <div className="section-intro reveal">
          <h2>Scale across<br /><em>three arenas.</em></h2>
          <p>
            The common thread is leverage: products, founders and communities that can create value beyond a single project.
          </p>
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
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [activeWork, setActiveWork] = useState<WorkKey | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeWorkItem = workItems.find((item) => item.key === activeWork) ?? null;

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/");
    setMenuOpen(false);
  };


  useEffect(() => {
    if (window.location.pathname !== "/" || window.location.search || window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

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
      const progress = max > 0 ? window.scrollY / max : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
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
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeWork ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, activeWork]);

  useEffect(() => {
    if (!activeWork) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveWork(null);
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  };

  return (
    <main>
      <div
        className="scroll-progress"
        style={{ transform: "scaleX(" + scrollProgress + ")" }}
        aria-hidden="true"
      />

      <header className="site-header">
        <button className="brand brand-button" type="button" onClick={() => scrollToSection("top")} aria-label="Levent Kopuz home">LEVENT KOPUZ</button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href.slice(1))}
              className={activeSection === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </button>
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

      <div className={"mobile-menu " + (menuOpen ? "is-open" : "")} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <button key={item.href} type="button" onClick={() => scrollToSection(item.href.slice(1))}>
              <span>0{i + 1}</span>{item.label}
            </button>
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
              <span>PRODUCT INNOVATION</span>
              <span>EXPERIENCE</span>
              <span>AI</span>
            </div>

            <h1 className="reveal">
              I build products, <em>enable founders</em> and connect communities.
            </h1>

            <p className="hero-lead reveal">
              My core is <strong>Product Innovation &amp; Experience</strong>. Around it, I mentor startups,
              design and run programs, and co-organize Berlin Design Events.
            </p>

            <div className="hero-actions reveal">
              <button className="button button-primary" type="button" onClick={() => scrollToSection("work")}>
                Selected Work <ArrowIcon down />
              </button>
              <button className="button button-secondary" type="button" onClick={() => scrollToSection("arenas")}>
                Three Arenas <ArrowIcon down />
              </button>
            </div>

            <div className="hero-identity reveal">
              <span>Product Innovation &amp; Experience</span>
              <span>Mentor &amp; Program Lead</span>
              <span>BDE Co-Organizer</span>
            </div>
          </div>

          <div className="hero-portrait reveal">
            <img src="/images/levent-color.webp" alt="Levent Kopuz portrait" />

          </div>
        </div>
      </section>

      <section className="section light-section arenas-section" id="arenas">
        <div className="section-shell">
          <div className="section-kicker"><span>01.</span> THREE ARENAS</div>
          <div className="section-intro reveal">
            <h2>One career.<br /><em>Three arenas.</em></h2>
            <p>
              They are not separate identities. They are three ways I create leverage around products, people and ideas.
            </p>
          </div>

          <div className="arena-grid">
            {arenas.map((arena) => (
              <button
                className="arena-card reveal"
                type="button"
                onClick={() => scrollToSection(arena.href.slice(1))}
                key={arena.verb}
              >
                <div className="arena-top">
                  <span>{arena.n}</span>
                  <strong>{arena.verb}</strong>
                </div>
                <div>
                  <h3>{arena.title}</h3>
                  <p>{arena.copy}</p>
                </div>
                <ArrowIcon />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section product-section" id="product">
        <div className="section-shell">
          <div className="section-kicker light-kicker"><span>02.</span> PRODUCT INNOVATION &amp; EXPERIENCE</div>
          <div className="product-grid">
            <div className="product-statement reveal">
              <h2>The core of<br />my <em>professional work.</em></h2>
              <p>
                I turn customer, business and technology signals into clearer product directions,
                scalable experience systems and new forms of value.
              </p>
            </div>

            <div className="capability-list reveal">
              <article>
                <span>01</span>
                <h3>Experience Systems</h3>
                <p>Connected journeys, services and interaction models — not isolated screens.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Product Strategy</h3>
                <p>Turning opportunities into focused directions, priorities and scalable roadmaps.</p>
              </article>
              <article>
                <span>03</span>
                <h3>AI-Enabled Experiences</h3>
                <p>Using intelligence to reduce complexity, improve decisions and create adaptive experiences.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Innovation Programs</h3>
                <p>Moving teams from signals and assumptions toward prototypes, validation and real outcomes.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-shell">
          <div className="section-kicker"><span>03.</span> SELECTED WORK</div>
          <div className="section-intro work-intro reveal">
            <h2>Product thinking<br /><em>in practice.</em></h2>
            <p>
              Different industries and markets, with the same underlying challenge: make complexity useful, coherent and scalable.
            </p>
          </div>

          <div className="work-list">
            {workItems.map((item, i) => (
              <article className={"work-card reveal " + (i % 2 ? "reverse" : "")} key={item.key}>
                <button className="work-visual-card" type="button" onClick={() => setActiveWork(item.key)}>
                  <div className="company-logo-wrap">
                    <img src={item.logo} alt={item.company + " logo"} />
                  </div>
                  <span className="visual-index">0{i + 1} / {item.label}</span>
                  <span className="visual-open">View case ↗</span>
                </button>

                <div className="work-copy">
                  <div className="work-heading">
                    <span className="work-number">0{i + 1}</span>
                    <h3>{item.company}</h3>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.context}</p>
                  <div className="work-scale">{item.scale}</div>
                  <button className="case-link" type="button" onClick={() => setActiveWork(item.key)}>
                    View case <ArrowIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section ecosystem-section" id="ecosystem">
        <div className="section-shell">
          <div className="section-kicker"><span>04.</span> MENTORSHIP &amp; PROGRAM MANAGEMENT</div>
          <div className="section-intro reveal">
            <h2>I don&apos;t only build products.<br /><em>I help others build better ones.</em></h2>
            <p>
              My entrepreneurship work sits at the intersection of mentoring, program design and applied learning.
            </p>
          </div>

          <div className="ecosystem-grid">
            <article className="ecosystem-card reveal">
              <span>01 / MENTOR</span>
              <h3>Sharper product thinking for founders.</h3>
              <p>
                Working with early-stage teams on problem framing, customer value, proposition, product direction and execution.
              </p>
            </article>
            <article className="ecosystem-card reveal">
              <span>02 / PROGRAM LEAD</span>
              <h3>Programs that turn learning into output.</h3>
              <p>
                Designing and running structured journeys across innovation, entrepreneurship, product and AI — from discovery to application.
              </p>
            </article>
            <article className="ecosystem-card reveal">
              <span>03 / EDUCATOR &amp; FACILITATOR</span>
              <h3>Frameworks teams can actually use.</h3>
              <p>
                Workshops and learning experiences around AI × EI, product innovation, experience strategy and the future of banking.
              </p>
            </article>
          </div>

          <div className="ecosystem-foot reveal">
            <span>Boğaziçi University</span>
            <span>Brick Institute</span>
            <span>Entertech</span>
            <span>Üretken Akademi</span>
          </div>
        </div>
      </section>

      <section className="section community-section" id="community">
        <div className="section-shell community-shell">
          <div className="community-copy">
            <div className="section-kicker"><span>05.</span> COMMUNITY BUILDING</div>
            <div className="community-eyebrow reveal">BERLIN · CO-ORGANIZER</div>
            <h2 className="reveal">Berlin<br />Design Events</h2>
            <p className="community-lead reveal">
              Community work is where I connect people, disciplines and emerging signals — creating spaces where knowledge can circulate faster.
            </p>

            <div className="community-points reveal">
              <div>
                <span>01</span>
                <strong>Curate</strong>
                <p>Signals, topics and conversations that matter to designers.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Connect</strong>
                <p>People across design, product, technology and innovation.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Activate</strong>
                <p>Formats like Trendzone that keep the community learning between events.</p>
              </div>
            </div>
          </div>

          <div className="community-visual reveal">
            <img className="bde-logo-image" src="/logos/bde.webp" alt="Berlin Design Events logo" />
          </div>
        </div>
      </section>

      <ImpactSection />

      <section className="section about-section" id="about">
        <div className="section-shell about-shell">
          <div className="about-photo reveal">
            <img src="/images/levent-bw.webp" alt="Levent Kopuz black and white portrait" />
          </div>

          <div className="about-copy">
            <div className="section-kicker"><span>07.</span> ABOUT</div>
            <h2 className="reveal">The connecting<br /><em>thread.</em></h2>
            <div className="about-body reveal">
              <p>
                Products taught me how to build. Mentoring taught me how to enable.
                Communities taught me how ideas spread.
              </p>
              <p>
                Today, I bring those perspectives together across product innovation, experience,
                entrepreneurship and community building.
              </p>
            </div>
            <p className="about-note reveal">
              Based in Istanbul. Connected to Berlin. Designer by background. Strategist by evolution. Builder by mindset.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-shell">
          <div className="section-kicker"><span>08.</span> GET IN TOUCH</div>
          <div className="contact-grid">
            <div className="reveal">
              <h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2>
              <p>
                Product and experience, innovation programs, mentorship or community collaboration — these are the conversations I am open to.
              </p>
            </div>

            <div className="contact-actions reveal">
              <a className="button button-primary large" href={"mailto:" + EMAIL}>
                Email <ArrowIcon />
              </a>
              <button className="button button-secondary large copy-button" type="button" onClick={copyEmail}>
                {copied ? "Copied" : "Copy email"}
              </button>
              <a className="button button-secondary large" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>

              <div className="conversation-routes">
                <span>Product &amp; Experience</span>
                <span>Programs &amp; Mentorship</span>
                <span>Community &amp; Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <button className="brand brand-button" type="button" onClick={() => scrollToSection("top")}>LEVENT KOPUZ</button>
          <div className="footer-links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Levent Kopuz. All rights reserved.</span>
          <span>Build · Enable · Connect</span>
        </div>
      </footer>

      {activeWorkItem && (
        <div
          className="work-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveWork(null);
          }}
        >
          <div
            className="work-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
          >
            <div className="modal-topbar">
              <span>SELECTED WORK / {activeWorkItem.company.toUpperCase()}</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveWork(null)}
                aria-label="Close case study"
              >
                Close ×
              </button>
            </div>

            <div className="modal-logo-stage">
              <img src={activeWorkItem.logo} alt={activeWorkItem.company + " logo"} />
            </div>

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
                  <span>SCALE</span>
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
