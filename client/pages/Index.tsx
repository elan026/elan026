import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";

export default function Index() {
  const highlights = useMemo(
    () => [
      "Director & CTO — Levroun Enterprise (2025–Present)",
      "3rd Place — Innovation Day 2025 (Speech‑to‑Text App)",
      "Live Speech‑to‑Text DL project (Intern @ ShenAi, 2024)",
    ],
    [],
  );

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-16 md:pt-24" aria-label="Hero">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
          <div className="mb-6 md:mb-0 mt-[-2px] flex justify-center md:justify-start md:w-1/3">
            <Avatar className="h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 ring-2 ring-[rgba(21,21,20,0.3)]">
              <AvatarImage
                className="aspect-square h-full w-full object-cover"
                src="https://cdn.builder.io/api/v1/image/assets%2F0ed8e9bc909d4c8aa09baf97ce6acf9c%2F6e5b561e8183496f8228a8b990c17146?format=webp&width=800"
                alt="Elango Kandhasamy"
              />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                EK
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left md:w-2/3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BDBBB2] px-3 py-1 text-xs text-[#5b5b57] mb-6">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Open to internships, freelance & collaborations
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Elango Kandhasamy
            </h1>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">
              AI/ML and Full Stack Developer specializing in Computer Vision,
              NLP, and end‑to‑end product development. Currently Director & CTO
              at Levroun Enterprise; pursuing B.Tech in AI & Data Science (NEC
              Erode, 2027).
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs md:text-sm"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition"
              >
                Contact me
              </a>
              <a
                href="https://www.linkedin.com/in/elango-kandhasamy-7a8a40347"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/elan026"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://cdn.builder.io/o/assets%2F0ed8e9bc909d4c8aa09baf97ce6acf9c%2F1799642d2ea7428d95afcdf196e5afee?alt=media&token=53f9e8bf-6bda-4326-a021-9e6fd359361a&apiKey=0ed8e9bc909d4c8aa09baf97ce6acf9c"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Resume"
                title="Download Resume"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-20 md:mt-28" aria-label="About me">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-muted-foreground max-w-6xl">
          I design and build intelligent, scalable applications that combine
          deep‑learning systems with modern web stacks. My background spans
          machine learning (TensorFlow, PyTorch, scikit‑learn, YOLOv5) and
          full‑stack development (React, Node/Express, Flask/FastAPI,
          PostgreSQL, MongoDB). I enjoy shipping production‑ready features,
          mentoring peers, and translating real‑world problems into robust AI
          products.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-6xl pb-5">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              <li>
                B.Tech — Artificial Intelligence & Data Science, Nandha
                Engineering College, Erode, Tamil Nadu (Expected Sep 2027)
              </li>
              <li>High School Diploma — LMHSS, Erode, Tamil Nadu</li>
              <li>Relevant: ML, DL, CV, DS, Algorithms, Cloud, Web Dev</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">Core Tools</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Python, Java, JavaScript, SQL, TensorFlow, Keras, PyTorch, OpenCV,
              scikit‑learn, YOLOv5, LangChain, React, Node.js, Express, Flask,
              FastAPI, PostgreSQL, MongoDB, Django, Streamlit, Docker, Git,
              Power BI, Tableau, AWS, Heroku, n8n, CrewAI, Hugging Face.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mt-20 md:mt-28"
        aria-label="Experience"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ExperienceCard
            company="Levroun Enterprise"
            role="Director & Chief Technology Officer"
            location="Erode, Tamil Nadu"
            period="Apr 2025 – Present"
            bullets={[
              "Defined tech vision and strategic direction.",
              "Led product development and innovation initiatives.",
              "Collaborated cross��functionally to ship scalable solutions.",
            ]}
          />
          <ExperienceCard
            company="ShenAi Private Solutions"
            role="AI/ML Intern"
            location="Erode, Tamil Nadu"
            period="Aug 2024 – Oct 2024"
            bullets={[
              "Contributed to a live Speech‑to‑Text project using DL.",
              "Curated datasets to improve model performance.",
              "Ran experiments and model training to enhance accuracy.",
            ]}
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 md:mt-28" aria-label="Projects">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Speech‑to‑Text Web Application"
            subtitle="Real‑time transcription in the browser"
            tech={["Flask", "Web Speech API", "DL"]}
            description="Built a web app that captures speech and converts it to accurate text with deep‑learning‑driven improvements."
          />
          <ProjectCard
            title="Plate Vision: ALPR"
            subtitle="AI‑Driven License Plate Recognition"
            tech={["YOLOv5", "CNN", "Flask", "Python"]}
            description="Implemented detection and recognition pipeline for license plates using YOLOv5 and CNN‑based OCR."
          />
          <ProjectCard
            title="AI‑Based M‑Sand Quality Monitoring"
            subtitle="Vision for construction material grading"
            tech={["CNN", "React", "Flask"]}
            description="End‑to‑end system to classify M‑Sand quality from soil datasets with a React frontend and Flask backend."
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-20 md:mt-28" aria-label="Skills">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup
            title="Languages"
            items={["Python", "Java", "JavaScript", "SQL"]}
          />
          <SkillGroup
            title="ML/DL"
            items={[
              "TensorFlow",
              "Keras",
              "PyTorch",
              "OpenCV",
              "scikit‑learn",
              "YOLOv5",
              "LangChain",
            ]}
          />
          <SkillGroup
            title="Web & DB"
            items={[
              "React",
              "Express.js",
              "Node.js",
              "Flask",
              "FastAPI",
              "PostgreSQL",
              "MongoDB",
              "Django",
              "Streamlit",
            ]}
          />
          <SkillGroup
            title="Tools"
            items={[
              "Git/GitHub",
              "Docker",
              "Power BI",
              "Tableau",
              "Replit",
              "n8n",
              "CrewAI",
              "Hugging Face",
            ]}
          />
          <SkillGroup
            title="Other"
            items={["Data Visualization", "Cloud (AWS, Heroku)"]}
          />
          <SkillGroup
            title="Leadership & Activities"
            items={[
              "Innovation Day 2025 — 3rd Place",
              "Organized Film Workshop 2025 (70+)",
              "Joint Secretary — Cultural Club (2025‑26)",
              "Football, art & poster designing",
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-20 md:mt-28" aria-label="Contact">
        <div className="rounded-2xl border p-6 md:p-8 bg-gradient-to-br from-primary/10 to-transparent mt-9">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Let’s build something great
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Reach out for internships, freelance projects, or
                collaborations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
              <ContactLink
                href="mailto:elangokandhasamy76@gmail.com"
                label="elangokandhasamy76@gmail.com"
              />
              <ContactLink
                href="tel:+919123578496"
                label="Ph no: +91 9123578496"
              />
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/elango-kandhasamy-7a8a40347"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/elan026"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576269130739"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576269130739"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-accent/60 transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({
  company,
  role,
  location,
  period,
  bullets,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-xl border p-5 h-full bg-card">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{role}</h3>
          <p className="text-sm text-muted-foreground">
            {company} • {location}
          </p>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {period}
        </span>
      </header>
      <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1.5">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({
  title,
  subtitle,
  description,
  tech,
}: {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}) {
  return (
    <article className="rounded-xl border p-5 h-full bg-card flex flex-col">
      <header>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </header>
      <p className="mt-3 text-sm text-muted-foreground flex-1">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className={cn(
              "rounded-full border px-2.5 py-1 text-xs",
              "bg-primary/5 border-primary/20 text-primary",
            )}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 text-sm text-muted-foreground flex flex-wrap gap-2">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-md bg-muted/40 px-2.5 py-1 border text-foreground/90"
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/60 transition"
    >
      {label}
    </a>
  );
}
