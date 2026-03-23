"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const experience = [
  {
    company: "Paytm",
    role: "Team Lead - Senior Product Analyst (UPI P2P)",
    time: "May 2022 - Present",
    place: "Delhi, India",
    banner: "Leading high-scale UPI P2P product strategy and execution across Android and iOS.",
    points: [
      "Own core UPI P2P journeys at ~80M+ MAU scale with direct responsibility for reliability, conversion, and GMV outcomes.",
      "Scaled instrumentation on 15M+ daily events using Python and SQL for drop-offs, retries, API latency, and NPCI response code diagnostics.",
      "Drove major flow revamps across To Mobile, Bank, Self, and Chat Send, delivering strong uplifts in initiation and PPS conversion.",
      "Shipped AI reminder suggestions and personalized favorites to improve repeat retention and reduce re-entry time.",
      "Built mapper failover diagnostics with BIN/PSP/bank-level tracking and reduced mapper-related failures."
    ]
  },
  {
    company: "Socio Global Brands Inc.",
    role: "Manager - Technology",
    time: "Mar 2021 - Oct 2021",
    place: "Canada",
    banner: "Built a production donation platform across North American institutions.",
    points: [
      "Developed centralized workflows for donation sending and receiving across the US and Canada.",
      "Implemented Flask + PostgreSQL backend and integrated Stripe with secure transaction handling.",
      "Delivered operational features including personalized pages, mailing workflows, and encryption controls."
    ]
  },
  {
    company: "Let the Data Confess / AnalytixWare",
    role: "Data Science Intern",
    time: "Mar 2021 - Jan 2022",
    place: "India",
    banner: "Hands-on NLP experimentation and technical content impact.",
    points: [
      "Built and evaluated topic-based document similarity pipelines using cosine and model-based NLP methods.",
      "Published data science explainers and solved high-volume community technical queries."
    ]
  }
];

const projects = [
  {
    title: "Legal Text Summarizer",
    description:
      "NLP summarization system with HuggingFace fine-tuning and MLOps using MLflow, Docker, and Prometheus.",
    href: "https://github.com/manan-bedi2908/Legal-Text-Summarizer"
  },
  {
    title: "Customer Churn Prediction",
    description:
      "End-to-end churn pipeline with Flask deployment and >90% accuracy for retention interventions.",
    href: "https://github.com/manan-bedi2908/Customer_Churn-Deployment"
  },
  {
    title: "Flipkart Review Scraper",
    description:
      "BeautifulSoup-driven scraper + Flask app for clean, user-friendly review extraction workflows.",
    href: "https://github.com/manan-bedi2908/Review-Scraper-MongoDB"
  },
  {
    title: "Multi-Agent AI Sales Automation",
    description:
      "Hierarchical agents via n8n, Firecrawl, Hunter.io, Pipedrive, and ElevenLabs voice workflows for CRM automation."
  },
  {
    title: "Self-Driving Car Agent",
    description:
      "PPO reinforcement learning model in OpenAI Gym trained over 1.5M timesteps with high performance.",
    href: "https://www.linkedin.com/posts/manan-bedi2908_ai-artificialintelligence-reinforcementlearning-activity-6928949613810835456-pO1_?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "YouTube Script Generator",
    description:
      "LangChain + prompt templates + few-shot flow with model flexibility across OpenAI and Hugging Face.",
    href: "https://www.linkedin.com/posts/manan-bedi2908_contentcreation-youtubescripts-openai-activity-7147859325011582977-Tq7F?utm_source=share&utm_medium=member_desktop"
  }
];

const publications = [
  {
    title: "Application of Deep Learning Techniques for COVID-19 Management",
    venue: "Springer",
    href: "https://link.springer.com/chapter/10.1007/978-3-030-74761-9_8"
  },
  {
    title: "Analysis of COVID-19 Tracking Tool in India: Aarogya-Setu",
    venue: "ACM Journal",
    href: "https://dl.acm.org/doi/10.1145/3416088"
  },
  {
    title: "Spatiotemporal GCNs for VANETs",
    venue: "Under Review",
    href: "https://scholarscolab.com/research-mentor-list/manan-bedi-2/"
  },
  {
    title: "YouTube Videos Clickbait Detection",
    venue: "Under Review"
  }
];

const talks = [
  "Developers Week, Santa Clara (Selected 30/500+)",
  "TDWI Conference, Munich (Selected 50/700+)",
  "React Delhi Conference, Gurugram",
  "ACM Chapter, University of Delhi",
  "GDG SRMIST and GDSC SRCSAW"
];

const achievements = [
  "Academic Excellence Award - 1st Position, B.Sc. Hons CS (GPA 9.77/10)",
  "Rising Star of the Month at Paytm",
  "Most Innovative Project winner at SGGSCC Hackathon",
  "ML Contributor with Omdena Pennsylvania",
  "Judge and mentor at global hackathons including Hack the North and NASA Space Apps",
  "Co-founded ACM-SSCBS and led a 12-member student chapter as President"
];

const photos = [
  {
    src: "/photos/1.jpg",
    title: "Golden Gate Glow",
    caption: "Crisp winter light at the Golden Gate Bridge, San Francisco.",
    alt: "Manan Bedi standing by the Golden Gate Bridge on a clear day"
  },
  {
    src: "/photos/10.jpg",
    title: "Hollywood Ridge",
    caption: "View from Griffith Park with the Hollywood sign in the backdrop.",
    alt: "Manan Bedi near Griffith Observatory with the Hollywood sign behind"
  },
  {
    src: "/photos/6.jpg",
    title: "Builders at DevWeek",
    caption: "On the expo floor chatting about production AI workflows.",
    alt: "Manan Bedi with another attendee at a DeveloperWeek expo booth"
  },
  {
    src: "/photos/WhatsApp Image 2024-06-08 at 23.25.31 (2).jpeg",
    title: "Evening Snapshot",
    caption: "Candid moment from the June 2024 album.",
    alt: "Personal photo from June 2024 album"
  },
  {
    src: "/photos/WhatsApp Image 2024-06-08 at 23.25.31 (3).jpeg",
    title: "City Lights",
    caption: "Another capture from the June 2024 set.",
    alt: "Personal photo with city backdrop from June 2024 album"
  },
  {
    src: "/photos/WhatsApp Image 2024-06-08 at 23.25.32 (1).jpeg",
    title: "Night Walk",
    caption: "Street-side shot from the same June 2024 sequence.",
    alt: "Personal photo taken at night from June 2024 album"
  },
  {
    src: "/photos/WhatsApp Image 2024-06-08 at 23.25.32 (3).jpeg",
    title: "Close-Up Frame",
    caption: "Final pick from the June 2024 uploads.",
    alt: "Personal close-up photo from June 2024 album"
  }
];

const navItems = [
  { label: "Home", href: "#home", hint: "Jump to hero" },
  { label: "Experience", href: "#experience", hint: "Work timeline" },
  { label: "Projects", href: "#projects", hint: "Build log" },
  { label: "Photos", href: "#photos", hint: "Photo highlights" },
  { label: "Terminal", href: "#terminal", hint: "Try live commands" },
  { label: "Research", href: "#research", hint: "Papers and talks" },
  { label: "Contact", href: "#contact", hint: "Get in touch" }
];

const metricDefs = [
  { key: "scale", label: "Scale", target: 80, suffix: "M+", detail: "MAUs impacted" },
  { key: "throughput", label: "Throughput", target: 15, suffix: "M+", detail: "Daily events instrumented" },
  { key: "accuracy", label: "ML Outcome", target: 90, suffix: "%+", detail: "Churn model accuracy" },
  { key: "savings", label: "Savings", target: 1, prefix: "INR ", suffix: "Cr+", detail: "AWS optimization impact" }
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function formatMetricValue(def, value) {
  return `${def.prefix ?? ""}${value}${def.suffix ?? ""}`;
}

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedTile, setExpandedTile] = useState(null);
  const [counterValues, setCounterValues] = useState(metricDefs.map(() => 0));
  const [terminalLines, setTerminalLines] = useState([
    "Live shell ready. Type `help` to see available commands."
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const terminalScrollRef = useRef(null);
  const liveFeed = useMemo(
    () => [
      "Now playing: mellow lo-fi on loop.",
      "Reading: “Project Hail Mary” — paused at chapter 9.",
      "Next break: brewing a V60 and planning a sunset walk.",
      "Snack queue: pesto pasta + crisp salad.",
      "Queued audiobook sample: “The Midnight Library”.",
      "Reminder: call parents tonight before dinner.",
      "Stretch timer: 20 pushups + 1 min plank on the hour."
    ],
    []
  );
  const liveRows = 4;
  const [liveIndex, setLiveIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frameId = 0;
    const durationMs = 1800;

    const animate = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = easeOutCubic(progress);
      setCounterValues(metricDefs.map((def) => Math.round(def.target * eased)));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setLiveIndex((prev) => (prev + 1) % liveFeed.length);
    }, 3400);
    return () => clearInterval(id);
  }, [liveFeed.length]);

  const displayFeed = useMemo(
    () => Array.from({ length: liveRows }, (_, i) => liveFeed[(liveIndex + i) % liveFeed.length]),
    [liveFeed, liveIndex]
  );

  const terminalPrompt = "visitor@mac-shell ~ %";
  const terminalInputRef = useRef(null);

  const runCommand = (raw) => {
    const input = raw.trim();
    if (!input) return;

    setTerminalLines((prev) => [...prev, `${terminalPrompt} ${input}`]);
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);

    const [cmd] = input.split(" ").filter(Boolean);
    const cmdLower = (cmd ?? "").toLowerCase();

    const push = (lines) =>
      setTerminalLines((prev) => [...prev, ...(Array.isArray(lines) ? lines : [lines])]);

    switch (cmdLower) {
      case "help":
        push([
          "Available commands:",
          "help, clear, ls, about, experience, projects, photos, contact, links, download-cv"
        ]);
        break;
      case "clear":
        setTerminalLines([]);
        break;
      case "ls":
        push("home  experience  projects  photos  research  contact  assets");
        break;
      case "about":
        push("Manan Bedi — product + data leader building reliable, AI-enabled payment journeys.");
        break;
      case "experience":
        push("Recent: Paytm (Team Lead - Sr. Product Analyst, UPI P2P) | Previously: Socio Global Brands, AnalytixWare.");
        break;
      case "projects":
        push(projects.map((p) => `• ${p.title}${p.href ? ` → ${p.href}` : ""}`));
        break;
      case "photos":
        push(photos.map((p) => `• ${p.title} (${p.src})`));
        break;
      case "contact":
        push("Email: mananbedi.tech@gmail.com | LinkedIn: linkedin.com/in/manan-bedi2908/");
        break;
      case "links":
        push([
          "GitHub: https://github.com/manan-bedi2908",
          "LinkedIn: https://www.linkedin.com/in/manan-bedi2908/",
          "CV: /Manan_Bedi_CV.pdf"
        ]);
        break;
      case "download-cv":
        push("Grab it here: /Manan_Bedi_CV.pdf");
        break;
      default:
        push(`zsh: command not found: ${cmdLower || input}`);
        break;
    }

    setTerminalInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(terminalInput);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHistoryIndex((prev) => {
        const next = prev === -1 ? history.length - 1 : Math.max(prev - 1, 0);
        setTerminalInput(history[next] ?? terminalInput);
        return next;
      });
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHistoryIndex((prev) => {
        if (prev === -1) return -1;
        const next = prev + 1;
        if (next >= history.length) {
          setTerminalInput("");
          return -1;
        }
        setTerminalInput(history[next]);
        return next;
      });
    }
  };

  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  useEffect(() => {
    const focusInput = () => terminalInputRef.current?.focus();
    if (terminalRef.current) terminalRef.current.addEventListener("click", focusInput);
    return () => terminalRef.current?.removeEventListener("click", focusInput);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      const isCmdK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isCmdK) {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!paletteOpen) setPaletteQuery("");
  }, [paletteOpen]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    return () => document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const filteredNavItems = useMemo(() => {
    const q = paletteQuery.trim().toLowerCase();
    if (!q) return navItems;
    return navItems.filter((item) => {
      return item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q);
    });
  }, [paletteQuery]);

  return (
    <div className={`app-shell ${crtEnabled ? "crt-on" : ""}`}>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />

      {paletteOpen && (
        <div className="palette-backdrop" onClick={() => setPaletteOpen(false)}>
          <div className="palette" onClick={(event) => event.stopPropagation()}>
            <input
              autoFocus
              type="text"
              value={paletteQuery}
              onChange={(event) => setPaletteQuery(event.target.value)}
              placeholder="Type a section name..."
              className="palette-input"
            />
            <div className="palette-results">
              {filteredNavItems.length === 0 && <p className="palette-empty">No matches found.</p>}
              {filteredNavItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setPaletteOpen(false)}>
                  <span>{item.label}</span>
                  <em>{item.hint}</em>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="topbar">
        <a href="#home" className="monogram" aria-label="Go to top">
          MB
        </a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#photos">Photos</a>
          <a href="#terminal">Terminal</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="topbar-controls">
          <button
            type="button"
            className="ctrl-btn"
            onClick={() => {
              setCrtEnabled((prev) => {
                const next = !prev;
                setDarkMode(!next);
                return next;
              });
            }}
          >
            CRT: {crtEnabled ? "ON" : "OFF"}
          </button>
          <button type="button" className="ctrl-btn" onClick={() => setPaletteOpen(true)}>
            CMD/CTRL + K
          </button>
        </div>
      </header>

      <main id="home" className="shell">
        <section className="hero glass reveal">
          <div className="hero-ornament hero-ornament-1" aria-hidden />
          <div className="hero-ornament hero-ornament-2" aria-hidden />
          <div className="hero-grid">
            <div>
              <p className="kicker">System Profile</p>
              <h1>
                Manan Bedi
                <span>
                  Building reliable product systems and intelligent automation for high-scale digital journeys.
                </span>
              </h1>
              <div className="chip-row">
                <a href="mailto:mananbedi.tech@gmail.com" className="chip chip-primary">
                  Open Channel
                </a>
                <a href="/Manan_Bedi_CV.pdf" target="_blank" rel="noreferrer" className="chip">
                  View CV
                </a>
                <a href="https://github.com/manan-bedi2908" target="_blank" rel="noreferrer" className="chip">
                  Repo
                </a>
                <a
                  href="https://www.linkedin.com/in/manan-bedi2908/"
                  target="_blank"
                  rel="noreferrer"
                  className="chip"
                >
                  Network
                </a>
              </div>
            </div>

            <article className="profile-card">
              <img src="/manan-profile.jpg" alt="Manan Bedi at Hollywood sign" className="profile-image" />
              <div className="profile-meta">
                <p>Based in Delhi, India</p>
                <span>Team Lead - Senior Product Analyst, Paytm</span>
              </div>
            </article>
          </div>

          <div className="metrics">
            {metricDefs.map((def, index) => (
              <article className="metric" key={def.key}>
                <p>{def.label}</p>
                <h3>{formatMetricValue(def, counterValues[index])}</h3>
                <span>{def.detail}</span>
              </article>
            ))}
          </div>

          <div className="hero-badges">
            <div className="badge-pill">
              <span className="dot dot-green" aria-hidden />
              <div>
                <p className="badge-eyebrow">Reliability Track</p>
                <strong>99.95% UPI availability</strong>
              </div>
            </div>
            <div className="badge-pill">
              <span className="dot dot-cyan" aria-hidden />
              <div>
                <p className="badge-eyebrow">Automation</p>
                <strong>30+ AI agent flows in prod</strong>
              </div>
            </div>
            <div className="badge-pill">
              <span className="dot dot-purple" aria-hidden />
              <div>
                <p className="badge-eyebrow">Impact</p>
                <strong>INR 1 Cr+ infra savings</strong>
              </div>
            </div>
          </div>

          <div className="marquee" aria-label="Highlights ticker">
            <div className="marquee-track">
              <span>Shipping resilient payments · </span>
              <span>LLM agents for CRM · </span>
              <span>Data-led product decisions · </span>
              <span>Edge-safe rollouts · </span>
              <span>Observability first · </span>
            </div>
          </div>

          <article className="log-console">
            <div className="log-head">
              <p>Live Stream</p>
              <span>Status: ONLINE</span>
            </div>
            <div className="log-body">
              {displayFeed.map((entry, idx) => (
                <div className="log-line" key={`${liveIndex}-${idx}`}>
                  <span className="log-dot" aria-hidden />
                  <div className="log-copy">
                    <span className="log-text">{entry}</span>
                    <span className="log-time">
                      {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="terminal" className="pane reveal">
          <div className="section-head">
            <p>Live Terminal</p>
            <h2>Interact with quick commands</h2>
          </div>

          <article className="glass terminal" ref={terminalRef}>
            <div className="terminal-head">
              <span className="traffic traffic-red" aria-hidden />
              <span className="traffic traffic-yellow" aria-hidden />
              <span className="traffic traffic-green" aria-hidden />
              <span className="terminal-title">zsh — portfolio</span>
            </div>

            <div className="terminal-screen" ref={terminalScrollRef} onClick={() => terminalInputRef.current?.focus()}>
              {terminalLines.map((line, idx) => (
                <div key={`${line}-${idx}`} className="terminal-line">
                  {line}
                </div>
              ))}
              <div className="terminal-input-row">
                <span className="prompt">{terminalPrompt}</span>
                <input
                  ref={terminalInputRef}
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input"
                  spellCheck="false"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="none"
                  placeholder="Type a command, e.g., help"
                />
              </div>
            </div>

            <div className="terminal-shortcuts">
              {["help", "ls", "projects", "photos", "contact", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  className="chip"
                  onClick={() => {
                    setTerminalInput(cmd);
                    setTimeout(() => runCommand(cmd), 0);
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </article>
        </section>

        <section id="experience" className="pane reveal">
          <div className="section-head">
            <p>Experience</p>
            <h2>Operational Timeline</h2>
          </div>

          <article className="glass experience-banner">
            <div>
              <p className="banner-label">Live Priority</p>
              <h3>UPI P2P Growth, Reliability, and AI-led Retention</h3>
            </div>
            <span>Paytm · 2022 - Present</span>
          </article>

          <div className="work-grid">
            {experience.map((item) => (
              <article key={item.company} className="glass card work-card">
                <div className="title-row">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <div className="meta">
                    <span>{item.time}</span>
                    <span>{item.place}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="pane reveal">
          <div className="section-head">
            <p>Projects</p>
            <h2>Build Log and Deployments</h2>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`glass tile ${expandedTile === project.title ? "tile-expanded" : ""}`}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedTile((prev) => (prev === project.title ? null : project.title))
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setExpandedTile((prev) => (prev === project.title ? null : project.title));
                  }
                }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Open Project
                  </a>
                ) : (
                  <span className="label">Private Build</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="photos" className="pane reveal">
          <div className="section-head">
            <p>Photo Highlights</p>
            <h2>Field Notes and Snapshots</h2>
          </div>

          <div className="photo-grid">
            {photos.map((photo) => (
              <article key={photo.src} className="glass photo-card">
                <div className="photo-frame">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
                <div className="photo-meta">
                  <h3>{photo.title}</h3>
                  <p>{photo.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="pane reveal">
          <div className="section-head">
            <p>Research & Talks</p>
            <h2>Research Artifacts and Speaker Nodes</h2>
          </div>

          <div className="dual-grid">
            <article className="glass card">
              <h3>Publications</h3>
              <ul className="compact">
                {publications.map((publication) => (
                  <li key={publication.title}>
                    <span>{publication.title}</span>
                    <em>{publication.venue}</em>
                    {publication.href && (
                      <a href={publication.href} target="_blank" rel="noreferrer">
                        Read
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass card speaking-card">
              <div className="speaking-grid">
                <div>
                  <h3>Speaker Sessions</h3>
                  <ul className="compact">
                    {talks.map((talk) => (
                      <li key={talk}>{talk}</li>
                    ))}
                  </ul>
                  <div className="link-row">
                    <a
                      href="https://www.developerweek.com/conference/speakers/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Developers Week
                    </a>
                    <a
                      href="https://www.tdwi-konferenz.de/de/programm/konferenzprogramm/detail/mi-55"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TDWI Session
                    </a>
                  </div>
                </div>
                <div className="speaking-visual-wrap">
                  <img
                    src="/speaking-stage.svg"
                    alt="Conference speaking visual"
                    className="speaking-visual"
                  />
                </div>
              </div>
            </article>
          </div>

          <article className="glass card">
            <h3>Awards & Leadership</h3>
            <ul className="compact">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="pane reveal">
          <div className="section-head">
            <p>Education & Skillset</p>
            <h2>Education and Capability Matrix</h2>
          </div>

          <div className="dual-grid">
            <article className="glass card">
              <h3>Education</h3>
              <p className="single">
                Shaheed Sukhdev College of Business Studies, University of Delhi
              </p>
              <p className="single">B.Sc. (Hons.) Computer Science - Graduated July 2022</p>
              <p className="single">Academic Excellence Award - 1st Position, GPA 9.77/10</p>
            </article>

            <article className="glass card">
              <h3>Core Skills</h3>
              <p className="single">
                Python, R, Advanced SQL, Flask, TensorFlow, PyTorch, NLP, LLMs, GenAI, Reinforcement Learning, MLflow, Docker,
                Grafana, Prometheus, Kubeflow, AWS, Looker Studio, Power BI
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact reveal">
        <div className="glass contact-card">
          <p>Open to product, AI, and data leadership conversations.</p>
          <h2>Let&apos;s build high-impact systems.</h2>
          <div className="chip-row">
            <a href="mailto:mananbedi.tech@gmail.com" className="chip chip-primary">
              mananbedi.tech@gmail.com
            </a>
            <a href="/Manan_Bedi_CV.pdf" target="_blank" rel="noreferrer" className="chip">
              Download CV
            </a>
            <a href="https://github.com/manan-bedi2908" target="_blank" rel="noreferrer" className="chip">
              github.com/manan-bedi2908
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
