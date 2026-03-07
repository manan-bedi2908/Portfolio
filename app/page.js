"use client";

import { useEffect, useMemo, useState } from "react";

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

const navItems = [
  { label: "Home", href: "#home", hint: "Jump to hero" },
  { label: "Experience", href: "#experience", hint: "Work timeline" },
  { label: "Projects", href: "#projects", hint: "Build log" },
  { label: "Research", href: "#research", hint: "Papers and talks" },
  { label: "Contact", href: "#contact", hint: "Get in touch" }
];

const metricDefs = [
  { key: "scale", label: "Scale", target: 80, suffix: "M+", detail: "MAUs impacted" },
  { key: "throughput", label: "Throughput", target: 15, suffix: "M+", detail: "Daily events instrumented" },
  { key: "accuracy", label: "ML Outcome", target: 90, suffix: "%+", detail: "Churn model accuracy" },
  { key: "savings", label: "Savings", target: 1, prefix: "INR ", suffix: "Cr+", detail: "AWS optimization impact" }
];

const logTemplates = [
  "[ingest] p2p.events.window=15m status=healthy",
  "[retry-guard] npci.mapper.failures trend=down",
  "[ml-inference] reminder_suggestions latency=41ms",
  "[funnel] send.money.entry uplift=+14.3%",
  "[alerts] bin-level anomalies auto-tagged",
  "[scheduler] retention.model.refresh completed"
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
  const [counterValues, setCounterValues] = useState(metricDefs.map(() => 0));
  const [logs, setLogs] = useState([]);

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
    setLogs([
      `${new Date().toLocaleTimeString("en-GB")} ${logTemplates[0]}`,
      `${new Date().toLocaleTimeString("en-GB")} ${logTemplates[1]}`,
      `${new Date().toLocaleTimeString("en-GB")} ${logTemplates[2]}`
    ]);

    let index = 3;
    const timer = setInterval(() => {
      const next = `${new Date().toLocaleTimeString("en-GB")} ${logTemplates[index % logTemplates.length]}`;
      setLogs((prev) => [...prev.slice(-5), next]);
      index += 1;
    }, 1400);

    return () => clearInterval(timer);
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
                <a href="tel:+919354510116" className="chip">
                  Voice Line
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

          <article className="log-console">
            <div className="log-head">
              <p>Live Stream</p>
              <span>Status: ONLINE</span>
            </div>
            <div className="log-body">
              {logs.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
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
                <p className="work-banner">{item.banner}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
              <article key={project.title} className="glass tile">
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
            <a href="tel:+919354510116" className="chip">
              +91 9354510116
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
