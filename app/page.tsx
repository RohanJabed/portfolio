import {
  ArrowUpRight,
  ArrowDownToLine,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Award,
  GraduationCap,
  Globe,
  Sparkles,
  BookOpen,
  Code2,
  Database,
  Wrench,
  Users,
  ExternalLink,
  Layers,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Pawsitive",
    sub: "Pet Adoption Platform",
    accent: "violet",
    stack: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Google OAuth"],
    desc: "A full-stack platform connecting people with pets in need of adoption through searchable listings, adoption requests, and owner dashboards.",
    bullets: [
      "Implemented JWT authentication and Google OAuth with protected routes for secure access.",
      "Built pet search and filtering with wishlist management and an adoption-request workflow.",
      "Developed owner dashboards for managing pet listings and adoption requests with a responsive, mobile-first UI.",
      "Deployed frontend and backend on Vercel with MongoDB Atlas for persistent data storage.",
    ],
    links: [
      { label: "Live Demo", href: "https://pawsitive-demo.vercel.app", primary: true },
      { label: "GitHub", href: "https://github.com/RohanJabed/Pawsitive" },
    ],
  },
  {
    num: "02",
    title: "LifeShare",
    sub: "Blood Donation Platform",
    accent: "green",
    stack: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT", "Bcrypt", "RBAC"],
    desc: "A blood donation platform connecting donors and recipients across Bangladesh with role-based dashboards, donor search, and donation requests.",
    bullets: [
      "Implemented JWT authentication, bcrypt password hashing, and Admin/Donor/Volunteer role permissions.",
      "Built CRUD operations and protected dashboards for managing donation requests.",
      "Added donor search with Bangladesh district/upazila filters for faster matching.",
      "Integrated Stripe for funding and deployed the frontend and backend on Vercel.",
    ],
    links: [
      { label: "Live Demo", href: "https://lifeshare-demo.vercel.app", primary: true },
      { label: "Client", href: "https://github.com/RohanJabed/LifeShare-Client" },
      { label: "Server", href: "https://github.com/RohanJabed/LifeShare-Server" },
    ],
  },
  {
    num: "03",
    title: "SkillSphere",
    sub: "Skill Learning Platform",
    accent: "pink",
    stack: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "JWT"],
    desc: "A full-stack learning platform for browsing courses, managing learning content, and user authentication.",
    bullets: [
      "Developed a responsive course-focused interface using Next.js and Tailwind CSS.",
      "Implemented authentication and protected routes with role-aware access control.",
      "Integrated MongoDB for persistent course and user data storage.",
    ],
    links: [
      { label: "Live Demo", href: "https://github.com/RohanJabed", primary: true },
      { label: "GitHub", href: "https://github.com/RohanJabed" },
    ],
  },
];

const repos = [
  { name: "BrightAid-main", desc: "Donation & school support platform", lang: "JavaScript", langClass: "lang-js" },
  { name: "GitHub-Issues-Tracker", desc: "Issue tracking application", lang: "HTML", langClass: "lang-html" },
  { name: "Job-tracker", desc: "Job application tracker", lang: "HTML", langClass: "lang-html" },
  { name: "joddha-platformer-game", desc: "2D platformer game built in Java", lang: "Java", langClass: "lang-java" },
  { name: "Pawsitive", desc: "Full-stack pet adoption platform", lang: "JavaScript", langClass: "lang-js" },
  { name: "LifeShare-Client", desc: "Blood donation platform — frontend", lang: "JavaScript", langClass: "lang-js" },
  { name: "LifeShare-Server", desc: "Blood donation platform — backend API", lang: "JavaScript", langClass: "lang-js" },
  { name: "portfolio", desc: "Personal developer portfolio site", lang: "TypeScript", langClass: "lang-ts" },
];

const skills = [
  { label: "Frontend", icon: Code2, items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
  { label: "Backend", icon: Layers, items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC"] },
  { label: "Database", icon: Database, items: ["MongoDB", "Mongoose", "MySQL", "Stripe"] },
  { label: "Tools", icon: Wrench, items: ["Git", "GitHub", "Vercel", "OAuth 2.0", "CRUD", "API Integration", "Agile/Scrum"] },
  { label: "Soft Skills", icon: Users, items: ["Problem Solving", "Research", "Technical Writing", "Team Collaboration"] },
];

const achievements = [
  { icon: Trophy, color: "gold", org: "NASA Space Apps Challenge", title: "Global Nominee", desc: "Nominated globally for creating innovative space data solutions." },
  { icon: Award, color: "purple", org: "Hult Prize", title: "Finalist", desc: "Recognized as a finalist for impact-driven social entrepreneurship solutions." },
  { icon: GraduationCap, color: "blue", org: "B.Sc. in CSE · Expected 2027", title: "United International University", desc: "Final year student at UIU, Dhaka. Specializing in Software Engineering & Full-Stack Application Architecture." },
  { icon: Globe, color: "green", org: "Languages", title: "Bangla & English", desc: "Bangla — Native speaker. English — Professional Working Proficiency." },
];

export default function Home() {
  return (
    <>
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* NAV */}
      <nav className="topnav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="logo-mark">RJ</span>
            <span>Rohan Jabed</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="/Md_Rohan_Jabed_Junior_Full_Stack_Developer_Resume .pdf" target="_blank" rel="noreferrer" download>
            <ArrowDownToLine size={14} /> Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="shell">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-tag">
                <span className="dot" />
                Junior Full Stack Developer
              </div>
              <h1>
                Hi, I&apos;m<br />
                <span className="line2">Md. Rohan</span><br />
                <span className="highlight">Jabed.</span>
              </h1>
              <p className="hero-desc">
                Ambitious CSE student at United International University building scalable, user-focused web applications with React, Next.js, Node.js, and MongoDB. Turning ideas into real-world solutions.
              </p>
              <div className="hero-btns">
                <a className="btn-primary" href="#work">
                  View My Work <ArrowUpRight size={16} />
                </a>
                <a className="btn-ghost" href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
                <a className="btn-ghost" href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>3+</strong>
                  <span>Full-Stack Projects</span>
                </div>
                <div className="stat">
                  <strong>2</strong>
                  <span>Global Awards</span>
                </div>
                <div className="stat">
                  <strong>Final</strong>
                  <span>Year at UIU</span>
                </div>
              </div>
            </div>

            <div className="hero-photo-card">
              <div className="deco-ring" />
              <div className="deco-ring2" />
              <div className="deco-dot" />
              <div className="photo-frame">
                <Image
                  src="/rohan.jpg"
                  alt="Md. Rohan Jabed"
                  width={420}
                  height={520}
                  style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
                <div className="photo-overlay" />
                <div className="photo-badge-wrap">
                  <div className="photo-chip">
                    <span className="c-green">●</span> Available for hire
                  </div>
                  <div className="photo-chip">
                    <span className="c-accent">◆</span> Full Stack Dev
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {["REACT.JS","NEXT.JS","NODE.JS","EXPRESS.JS","MONGODB","TAILWIND CSS","JWT AUTH","STRIPE","REST APIs","VERCEL","OAUTH 2.0","PROBLEM SOLVING",
            "REACT.JS","NEXT.JS","NODE.JS","EXPRESS.JS","MONGODB","TAILWIND CSS","JWT AUTH","STRIPE","REST APIs","VERCEL","OAUTH 2.0","PROBLEM SOLVING"].map((t, i) => (
            <span key={i}>{i % 2 === 1 ? <b>✦</b> : null}{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="shell">
          <div className="about-grid">
            <div className="about-img-wrap">
              <Image
                src="/rohan.jpg"
                alt="Md. Rohan Jabed"
                width={400}
                height={500}
                className="about-img"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="about-img-deco" />
              <div className="about-img-tag">
                <strong>UIU</strong>
                CSE · Final Year
              </div>
            </div>
            <div className="about-text">
              <div className="section-label">About Me</div>
              <h2 className="section-title">Turning complex challenges into scalable solutions.</h2>
              <p>
                I&apos;m an ambitious, problem-solving-oriented Computer Science and Engineering student at United International University (UIU), Dhaka, currently in my final year with 1 trimester remaining.
              </p>
              <p>
                My expertise lies in full-stack web development using React.js, Next.js, Node.js, Express.js, and MongoDB. I&apos;m passionate about building scalable, user-focused applications with secure authentication (JWT, OAuth 2.0), role-based access control, and seamless payment gateways like Stripe.
              </p>
              <p>
                A fast learner who enjoys solving challenging problems and turning ideas into practical, real-world solutions. I&apos;ve been recognized globally at NASA Space Apps Challenge and as a Hult Prize finalist.
              </p>
              <div className="about-pills">
                <span className="pill">📍 Dhaka, Bangladesh</span>
                <span className="pill">🎓 B.Sc. CSE · UIU</span>
                <span className="pill">🚀 Open to Opportunities</span>
                <span className="pill">🌐 NASA Space Apps Nominee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="work" className="section">
        <div className="shell">
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Projects I&apos;ve Built.</h2>
          <p className="section-sub" style={{ marginBottom: "48px" }}>
            Full-stack web applications built with modern architectures, secure authentication, and real-world database integrations.
          </p>
          <div className="projects-grid">
            {projects.map((p) => (
              <article className={`project-card ${p.accent}`} key={p.num}>
                <div>
                  <div className="project-num">{p.num} / 0{projects.length}</div>
                  <div className="project-sub">{p.sub}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <ul className="project-bullets">
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="tech-chips">
                    {p.stack.map((s) => <span className="tech-chip" key={s}>{s}</span>)}
                  </div>
                  <div className="project-links">
                    {p.links.map((l, i) => (
                      <a key={i} href={l.href} target="_blank" rel="noreferrer" className={`proj-link${l.primary ? " primary" : ""}`}>
                        {l.primary ? <ExternalLink size={12} /> : <Github size={12} />} {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                <a href={p.links[0].href} target="_blank" rel="noreferrer" className="project-arrow" aria-label={`View ${p.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="shell">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">My Toolkit.</h2>
          <p className="section-sub" style={{ marginBottom: "48px" }}>
            Technologies and tools I use to build modern, scalable web applications.
          </p>
          <div className="skills-wrap">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <div className="skill-card" key={s.label}>
                  <div className="skill-card-icon"><Icon size={18} /></div>
                  <div className="skill-card-label">{s.label}</div>
                  <div className="skill-list">
                    {s.items.map((item) => (
                      <div className="skill-item" key={item}>
                        <span className="skill-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* RESEARCH */}
      <section id="research" className="section">
        <div className="shell">
          <div className="research-card">
            <div className="research-grid">
              <div>
                <div className="section-label"><Sparkles size={12} /> Final Year Design Project</div>
                <h2 className="research-title">Perception of AI-Generated Uncertainty in Neurodivergent Users</h2>
                <p className="research-desc">
                  A comprehensive 3-phase research study involving qualitative interviews, prototype development, and practitioner toolkit creation — rigorously applying WCAG 2.1 AA accessibility standards, GDPR data privacy compliance, and ACM Ethics guidelines.
                </p>
                <div className="research-tags">
                  <span className="research-tag">WCAG 2.1 AA</span>
                  <span className="research-tag">GDPR</span>
                  <span className="research-tag">ACM Ethics</span>
                  <span className="research-tag">Qualitative Research</span>
                  <span className="research-tag">Prototyping</span>
                  <span className="research-tag">UIU · 2027</span>
                </div>
              </div>
              <div className="research-stats">
                <div className="r-stat">
                  <strong style={{ color: "var(--accent2)" }}>3 Phases</strong>
                  <span>Interviews → Prototype → Toolkit</span>
                </div>
                <div className="r-stat">
                  <strong style={{ color: "var(--green)" }}>WCAG 2.1 AA</strong>
                  <span>Full accessibility compliance</span>
                </div>
                <div className="r-stat">
                  <strong style={{ color: "var(--pink)" }}>AI + UX</strong>
                  <span>Neurodivergent user research focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="shell">
          <div className="section-label">Honors & Education</div>
          <h2 className="section-title">Awards & Background.</h2>
          <p className="section-sub" style={{ marginBottom: "48px" }}>
            Recognition, academic milestones, and the experiences that shaped my journey.
          </p>
          <div className="achievements-grid">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <div className="ach-card" key={i}>
                  <div className={`ach-icon ${a.color}`}><Icon size={20} /></div>
                  <div className="ach-org">{a.org}</div>
                  <div className="ach-title">{a.title}</div>
                  <p className="ach-desc">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* GITHUB REPOS */}
      <section className="section">
        <div className="shell">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="section-label">Open Source</div>
              <h2 className="section-title">GitHub Repositories.</h2>
            </div>
            <a href="https://github.com/RohanJabed" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 18px" }}>
              View All <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="repos-grid">
            {repos.map((r) => (
              <a className="repo-card" href={`https://github.com/RohanJabed/${r.name}`} target="_blank" rel="noreferrer" key={r.name}>
                <Github size={18} className="repo-icon" />
                <div className="repo-name">{r.name}</div>
                <div className="repo-desc">{r.desc}</div>
                <div className="repo-lang">
                  <span className={`repo-lang-dot ${r.langClass}`} />
                  {r.lang}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="shell">
          <div className="contact-inner">
            <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
            <h2 className="contact-title">
              Let&apos;s build something<br /><span>exceptional.</span>
            </h2>
            <p className="contact-sub">
              Open to Junior Full Stack Developer roles, software engineering opportunities, and technical collaborations. Let&apos;s connect!
            </p>
            <div className="contact-info">
              <span className="contact-info-item"><MapPin size={14} /> Khilkhet, Dhaka-1229, Bangladesh</span>
              <span className="contact-info-item"><Phone size={14} /> +880 1307-188469</span>
              <span className="contact-info-item"><Mail size={14} /> rohanjabed001@gmail.com</span>
            </div>
            <div className="contact-btns">
              <a className="btn-primary" href="mailto:rohanjabed001@gmail.com">
                <Mail size={16} /> Email Me
              </a>
              <a className="btn-ghost" href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a className="btn-ghost" href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="shell">
          <div className="footer-inner">
            <div className="footer-copy">
              <span className="logo-mark" style={{ width: "28px", height: "28px", fontSize: "11px", borderRadius: "6px" }}>RJ</span>
              © 2026 Md. Rohan Jabed
            </div>
            <div className="footer-links">
              <a href="mailto:rohanjabed001@gmail.com">Email</a>
              <a href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="/Md_Rohan_Jabed_Junior_Full_Stack_Developer_Resume .pdf" target="_blank" rel="noreferrer" download>Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
