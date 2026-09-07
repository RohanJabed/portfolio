import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  Award,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Pawsitive",
    subtitle: "Pet Adoption Platform",
    stack: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Google OAuth"],
    summary:
      "A full-stack platform connecting people with pets in need of adoption through searchable listings, adoption requests, and owner dashboards.",
    highlights: [
      "Implemented JWT authentication and Google OAuth with protected routes for secure access.",
      "Built pet search and filtering with wishlist management and an adoption-request workflow.",
      "Developed owner dashboards for managing pet listings and adoption requests with a responsive, mobile-first UI.",
      "Deployed frontend and backend on Vercel with MongoDB Atlas for persistent data storage.",
    ],
    accent: "lime",
    links: [
      { label: "Live Demo", href: "https://pawsitive-demo.vercel.app" },
      { label: "Client/Server GitHub", href: "https://github.com/RohanJabed/Pawsitive" },
      { label: "Backend API", href: "https://github.com/RohanJabed/Pawsitive-API" },
    ],
  },
  {
    number: "02",
    title: "LifeShare",
    subtitle: "Blood Donation Platform",
    stack: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT", "Bcrypt", "RBAC"],
    summary:
      "A blood donation platform connecting donors and recipients across Bangladesh with role-based dashboards, donor search, and donation requests.",
    highlights: [
      "Implemented JWT authentication, bcrypt password hashing, and Admin/Donor/Volunteer role permissions.",
      "Built CRUD operations and protected dashboards for managing donation requests.",
      "Added donor search with Bangladesh district/upazila filters for faster matching.",
      "Integrated Stripe for funding and deployed the frontend and backend on Vercel.",
    ],
    accent: "violet",
    links: [
      { label: "Live Demo", href: "https://lifeshare-demo.vercel.app" },
      { label: "Client GitHub", href: "https://github.com/RohanJabed/LifeShare-Client" },
      { label: "Server GitHub", href: "https://github.com/RohanJabed/LifeShare-Server" },
      { label: "Backend API", href: "https://github.com/RohanJabed/LifeShare-API" },
    ],
  },
];

const githubProjects = [
  { name: "BrightAid-main", label: "Donation & school support platform", lang: "JavaScript" },
  { name: "GitHub-Issues-Tracker", label: "Issue tracking application", lang: "HTML" },
  { name: "Job-tracker", label: "Job application tracker", lang: "HTML" },
  { name: "joddha-platformer-game", label: "Platformer game", lang: "Java" },
];

const skillCategories = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control"],
  },
  {
    category: "Database & Payments",
    items: ["MongoDB", "Mongoose", "MySQL", "Stripe"],
  },
  {
    category: "Tools & Concepts",
    items: ["Git", "GitHub", "Vercel", "OAuth 2.0", "CRUD", "API Integration", "Agile/Scrum Basics"],
  },
  {
    category: "Interpersonal",
    items: ["Problem Solving", "Research", "Technical Writing", "Team Collaboration"],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Global Nominee",
    organization: "NASA Space Apps Challenge",
    description: "Nominated globally for creating innovative space data solutions.",
  },
  {
    icon: Award,
    title: "Finalist",
    organization: "Hult Prize",
    description: "Recognized as a finalist for impact-driven social entrepreneurship solutions.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Md. Rohan Jabed home">
          <span className="brand-mark">RJ</span>
          <span>MD. ROHAN<span className="muted">/</span>JABED</span>
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#research">Research</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/Rohan_Jabed_Resume.pdf" target="_blank" rel="noreferrer" download="Md_Rohan_Jabed_Resume.pdf">
          Resume <ArrowDownRight size={16} />
        </a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> JUNIOR FULL STACK DEVELOPER
          </div>
          <h1>
            Building scalable,
            <span className="outline"> user-focused</span>
            <br />
            web <span className="accent-text">solutions.</span>
          </h1>
          <p className="hero-sub">
            Junior Full Stack Developer · CSE Student · Problem Solver
          </p>
          <p className="hero-description">
            Ambitious Computer Science and Engineering student at United International University with hands-on experience in full-stack development using React.js, Next.js, Node.js, Express.js, and MongoDB. Fast learner who enjoys solving challenging problems and turning ideas into practical, real-world solutions.
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
            <div className="code-line indent"><span className="green">name</span>: <span className="yellow">&quot;Md. Rohan Jabed&quot;</span>,</div>
            <div className="code-line indent"><span className="green">role</span>: <span className="yellow">&quot;Junior Full Stack Developer&quot;</span>,</div>
            <div className="code-line indent"><span className="green">stack</span>: <span className="yellow">&quot;React · Next.js · Node · MongoDB&quot;</span>,</div>
            <div className="code-line indent"><span className="green">status</span>: <span className="yellow">&quot;building & solving...&quot;</span></div>
            <div className="code-line">{"}"}</div>
            <div className="cursor" />
          </div>
          <div className="floating-tag tag-one">NEXT.JS</div>
          <div className="floating-tag tag-two">EXPRESS.JS</div>
          <div className="floating-tag tag-three">MONGODB</div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>REACT.JS</span><b>✦</b><span>NEXT.JS</span><b>✦</b><span>NODE.JS</span><b>✦</b>
          <span>EXPRESS.JS</span><b>✦</b><span>MONGODB</span><b>✦</b><span>REST APIs</span><b>✦</b>
          <span>STRIPE</span><b>✦</b><span>JWT AUTH</span><b>✦</b><span>PROBLEM SOLVING</span><b>✦</b>
        </div>
      </div>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SELECTED PROJECTS / 01</span>
            <h2>Featured Work.</h2>
          </div>
          <p>Full-stack web applications built with modern architectures, secure authentication, and database integrations.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.subtitle}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="project-bullets">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a key={idx} href={link.href} target="_blank" rel="noreferrer" className="action-link">
                      {link.label} <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
              <a href={project.links[0].href} target="_blank" rel="noreferrer" className="circle-link" aria-label={`View ${project.title}`}>
                <ArrowUpRight size={22} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div>
            <span className="section-kicker">CAREER OBJECTIVE / 02</span>
            <h2 className="big-statement">Turning complex challenges into scalable, real-world solutions.</h2>
          </div>
          <div className="about-copy">
            <p>
              I am an ambitious, problem-solving-oriented Computer Science and Engineering student at United International University (UIU), Dhaka, currently in my final year with 1 trimester remaining.
            </p>
            <p>
              My expertise lies in full-stack web development using React.js, Next.js, Node.js, Express.js, and MongoDB. I am passionate about building scalable, user-focused applications with secure authentication (JWT, OAuth 2.0), role-based access control, and seamless payment gateways like Stripe.
            </p>
            <div className="mini-stats">
              <div><strong>Final Year</strong><span>UIU CSE (1 Trimester Left)</span></div>
              <div><strong>2+</strong><span>Major Full Stack Platforms</span></div>
              <div><strong>Global</strong><span>NASA Space Apps Nominee</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TECHNICAL SKILLS / 03</span>
            <h2>Toolkit & Competencies.</h2>
          </div>
          <Code2 className="section-icon" size={42} />
        </div>
        <div className="skills-grid-5">
          {skillCategories.map((group) => (
            <div className="skill-block" key={group.category}>
              <span className="skill-title">{group.category}</span>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
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
            <h2>Perception of AI-Generated Uncertainty in Neurodivergent Users</h2>
            <p>
              A comprehensive 3-phase research study involving qualitative interviews, prototype development, and practitioner toolkit creation, rigorously applying WCAG 2.1 AA accessibility standards, GDPR data privacy compliance, and ACM Ethics guidelines.
            </p>
            <div className="research-meta">
              <span><GraduationCap size={16} /> UIU · Final Year Design Project</span>
              <span>WCAG 2.1 AA</span>
              <span>GDPR</span>
              <span>ACM Ethics</span>
              <span>Qualitative & Prototyping</span>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-kicker">HONORS & EDUCATION / 05</span>
              <h2>Awards & Academic Background.</h2>
            </div>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="achievement-card" key={idx}>
                  <div className="achievement-badge"><Icon size={16} /> {item.organization}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
            <div className="achievement-card">
              <div className="achievement-badge"><GraduationCap size={16} /> B.Sc. in CSE</div>
              <h3>United International University (UIU), Dhaka</h3>
              <p>Final Year Student (1 Trimester Remaining). Specializing in Software Engineering & Full-Stack Application Architecture.</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-badge"><Globe size={16} /> Languages</div>
              <h3>Language Proficiency</h3>
              <p><strong>Bangla:</strong> Native speaker <br /><strong>English:</strong> Professional Working Proficiency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell github-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">GITHUB REPOSITORIES / 06</span>
            <h2>More Open-Source Projects.</h2>
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
          <span className="section-kicker">GET IN TOUCH / 07</span>
          <h2>Let&apos;s build something<br /><span>exceptional together.</span></h2>
          <p>Open to Junior Full Stack Developer roles, software engineering opportunities, and technical collaborations.</p>
          <div className="contact-meta-info">
            <span><MapPin size={15} /> Khilkhet, Purbo Namapara, Dhaka-1229, Bangladesh</span>
            <span><Phone size={15} /> +880 1307-188469</span>
            <span><Mail size={15} /> rohanjabed001@gmail.com</span>
          </div>
          <div className="contact-actions">
            <a className="button primary large" href="mailto:rohanjabed001@gmail.com"><Mail size={19} /> Email Me</a>
            <a className="button ghost large" href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div><span className="brand-mark small">RJ</span> © 2026 Md. Rohan Jabed</div>
        <div className="footer-links">
          <a href="mailto:rohanjabed001@gmail.com">Email</a>
          <a href="https://github.com/RohanJabed" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rohan-jabed-116b1b3b5/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Rohan_Jabed_Resume.pdf" target="_blank" rel="noreferrer" download="Md_Rohan_Jabed_Resume.pdf">Download Resume</a>
        </div>
      </footer>
    </main>
  );
}