import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Pawsitive",
    type: "Pet Adoption Platform",
    stack: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "JWT", "Google OAuth"],
    description:
      "A full-stack adoption platform with pet discovery, filtering, adoption requests, owner dashboards, wishlists and protected routes.",
    accent: "lime",
    href: "https://github.com/RohanJabed",
  },
  {
    number: "02",
    title: "LifeShare",
    type: "Blood Donation Platform",
    stack: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT"],
    description:
      "A donor-recipient platform with donation requests, donor search, role-based dashboards, district/upazila filtering and payment integration.",
    accent: "violet",
    href: "https://github.com/RohanJabed",
  },
  {
    number: "03",
    title: "SkillSphere",
    type: "Online Learning Platform",
    stack: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Better Auth"],
    description:
      "A responsive course experience using the Next.js App Router, dynamic course pages, API fetching and middleware-based route protection.",
    accent: "cyan",
    href: "https://github.com/RohanJabed",
  },
];

const githubProjects = [
  { name: "BrightAid-main", label: "Donation & school support platform", lang: "JavaScript" },
  { name: "GitHub-Issues-Tracker", label: "Issue tracking application", lang: "HTML" },
  { name: "Job-tracker", label: "Job application tracker", lang: "HTML" },
  { name: "joddha-platformer-game", label: "Platformer game", lang: "Java" },
];

const skills = [
  ["Frontend", "React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  ["Backend", "Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  ["Data & Payments", "MongoDB", "Mongoose", "MySQL", "Stripe"],
  ["Tools", "Git", "GitHub", "Vercel", "OAuth 2.0", "CRUD", "API Integration"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Rohan Jabed home">
          <span className="brand-mark">RJ</span>
          <span>ROHAN<span className="muted">/</span>JABED</span>
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/Rohan_Jabed_Resume.pdf" download>
          Resume <ArrowDownRight size={16} />
        </a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR SOFTWARE ENGINEERING INTERNSHIPS</div>
          <h1>
            I build digital
            <span className="outline"> products</span>
            <br />
            that feel <span className="accent-text">alive.</span>
          </h1>
          <p className="hero-sub">
            Full Stack Web Developer · Problem Solver · AI/ML Enthusiast
          </p>
          <p className="hero-description">
            Final-year CSE student at United International University, building modern
            full-stack applications with React, Next.js, Node.js and MongoDB.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowUpRight size={18} /></a>
            <a className="button ghost" href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-grid" />
          <div className="code-card">
            <div className="window-dots"><i /><i /><i /></div>
            <div className="code-line"><span className="pink">const</span> <span className="blue">developer</span> = {"{"}</div>
            <div className="code-line indent"><span className="green">name</span>: <span className="yellow">&quot;Rohan Jabed&quot;</span>,</div>
            <div className="code-line indent"><span className="green">focus</span>: <span className="yellow">&quot;Full Stack&quot;</span>,</div>
            <div className="code-line indent"><span className="green">curiosity</span>: <span className="yellow">&quot;AI × Web&quot;</span>,</div>
            <div className="code-line indent"><span className="green">status</span>: <span className="yellow">&quot;building...&quot;</span></div>
            <div className="code-line">{"}"}</div>
            <div className="cursor" />
          </div>
          <div className="floating-tag tag-one">NEXT.JS</div>
          <div className="floating-tag tag-two">NODE.JS</div>
          <div className="floating-tag tag-three">AI / ML</div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>FULL STACK</span><b>✦</b><span>REACT</span><b>✦</b><span>NEXT.JS</span><b>✦</b>
          <span>NODE.JS</span><b>✦</b><span>AI / ML</span><b>✦</b><span>PROBLEM SOLVING</span><b>✦</b>
          <span>FULL STACK</span><b>✦</b><span>REACT</span><b>✦</b><span>NEXT.JS</span><b>✦</b>
        </div>
      </div>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SELECTED WORK / 01</span>
            <h2>Things I&apos;ve built.</h2>
          </div>
          <p>Real products, real systems, and a lot of curiosity behind each one.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <a href={project.href} target="_blank" rel="noreferrer" className="circle-link" aria-label={`View ${project.title} on GitHub`}>
                <ArrowUpRight size={22} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div>
            <span className="section-kicker">ABOUT / 02</span>
            <h2 className="big-statement">Code is how I turn curiosity into something people can use.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Rohan, a final-year Computer Science and Engineering student at
              United International University. I enjoy taking an idea from a rough
              concept to a working, polished product.
            </p>
            <p>
              My strongest lane is full-stack JavaScript: responsive interfaces,
              REST APIs, authentication, role-based access control and database-backed
              applications. I&apos;m also exploring AI/ML and research around how people
              interact with uncertain AI-generated information.
            </p>
            <div className="mini-stats">
              <div><strong>17+</strong><span>GitHub repositories</span></div>
              <div><strong>3</strong><span>Featured full-stack builds</span></div>
              <div><strong>2</strong><span>Major achievements</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TOOLKIT / 03</span>
            <h2>My stack.</h2>
          </div>
          <Code2 className="section-icon" size={42} />
        </div>
        <div className="skills-grid">
          {skills.map(([title, ...items]) => (
            <div className="skill-block" key={title}>
              <span className="skill-title">{title}</span>
              <div className="skill-items">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="shell research-grid">
          <div className="research-badge"><Sparkles size={22} /> FINAL YEAR DESIGN PROJECT</div>
          <div>
            <span className="section-kicker">RESEARCH / 04</span>
            <h2>Perception of AI-Generated Uncertainty</h2>
            <p>
              A three-phase study at United International University exploring how
              users perceive and evaluate uncertain or hallucinated information from
              LLM-based AI tools, combining qualitative interviews, prototype
              development and a practitioner toolkit.
            </p>
            <div className="research-meta">
              <span><GraduationCap size={16} /> UIU · Team of 5</span>
              <span>WCAG 2.1 AA</span>
              <span>GDPR</span>
              <span>ACM Ethics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell github-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">GITHUB / 05</span>
            <h2>More from the lab.</h2>
          </div>
          <a className="text-link" href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">
            See all repositories <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="repo-grid">
          {githubProjects.map((repo) => (
            <a className="repo-card" href={`https://github.com/RohanJabed/${repo.name}`} target="_blank" rel="noreferrer" key={repo.name}>
              <div className="repo-top"><Github size={19} /><ExternalLink size={15} /></div>
              <h3>{repo.name}</h3>
              <p>{repo.label}</p>
              <span className="repo-lang"><i /> {repo.lang}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <span className="section-kicker">CONTACT / 06</span>
          <h2>Let&apos;s build something<br /><span>worth shipping.</span></h2>
          <p>Open to software engineering internships, collaborations and interesting product ideas.</p>
          <div className="contact-actions">
            <a className="button primary large" href="mailto:rohanjabed001@gmail.com"><Mail size={19} /> Email me</a>
            <a className="button ghost large" href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div><span className="brand-mark small">RJ</span> © 2026 Rohan Jabed</div>
        <div className="footer-links">
          <a href="mailto:rohanjabed001@gmail.com">Email</a>
          <a href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Rohan_Jabed_Resume.pdf" download>Download Resume</a>
        </div>
      </footer>
    </main>
  );
}