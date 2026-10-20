import Image from "next/image";
import { portfolio, type Project } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";

const coreTechnologies = portfolio.expertise.find(
  (group) => group.category === "Core",
)?.items;

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual--${project.number}`} aria-hidden={!project.image}>
      {project.image ? (
        <Image
          className="project-image"
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 620px"
        />
      ) : (
        <>
          <div className="visual-index">SELECTED WORK / {project.number}</div>
          <div className="visual-orbit">
            <span className="orbit orbit--outer" />
            <span className="orbit orbit--inner" />
            <span className="orbit-core">{project.number}</span>
          </div>
          <span className="visual-caption">A study in thoughtful interfaces</span>
        </>
      )}
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className={`project project--${project.number}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number} / CASE STUDY</span>
          <span className="placeholder-label">{project.label}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.name} technology stack`}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <details className="project-details">
          <summary>Case study notes <span aria-hidden="true">＋</span></summary>
          <dl>
            <div><dt>Problem</dt><dd>{project.problem}</dd></div>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Engineering decision</dt><dd>{project.decision}</dd></div>
            <div><dt>Challenge</dt><dd>{project.challenge}</dd></div>
            <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
          </dl>
        </details>
        {(project.demoUrl || project.sourceUrl) && (
          <div className="project-links">
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live project ↗</a>}
            {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">Source code ↗</a>}
          </div>
        )}
      </div>
    </article>
  );
}

export function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section
          className="hero section-shell"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-kicker">
            <span className="kicker-line" />
            <span>{portfolio.hero.eyebrow.split("/")[0].trim()}</span>
            <span className="kicker-since">
              / {portfolio.hero.eyebrow.split("/").slice(1).join("/").trim()}
            </span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                {portfolio.hero.headline}
                <br />
                <em>{portfolio.hero.headlineAccent}</em>
              </h1>
              <p className="hero-intro">{portfolio.hero.introduction}</p>
              <p className="hero-summary">{portfolio.hero.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work <span aria-hidden="true">↓</span>
                </a>
                <a className="text-link" href="#contact">
                  Let’s talk <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-topline">
                <span>INDEPENDENT THINKING</span>
                <span>EST. 2020</span>
              </div>
              <div className="art-field">
                <div className="art-cross art-cross--one" />
                <div className="art-cross art-cross--two" />
                <div className="art-disc">
                  <span>{portfolio.monogram.replace(".", "")}</span>
                </div>
                <div className="art-square" />
                <div className="art-orbit" />
                <span className="art-coordinate">R / 01</span>
              </div>
              <div className="art-bottomline">
                <span>PRODUCT-MINDED ENGINEERING</span>
                <span>↘</span>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <span>{coreTechnologies?.join(" · ")}</span>
            <a href="#work">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-index">01 — SELECTED WORK</p>
              <h2 id="work-title">
                Proof in the
                <br />
                <em>details.</em>
              </h2>
            </div>
            <p className="section-aside">
              A few places to make the thinking visible.
              <br />
              Case studies are intentionally marked as placeholders until real
              work is added.
            </p>
          </div>
          <div className="project-list">
            {portfolio.projects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section
          className="approach-section section-shell"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="section-heading approach-heading">
            <div>
              <p className="section-index">02 — ENGINEERING APPROACH</p>
              <h2 id="approach-title">
                Good work is
                <br />
                <em>intentional.</em>
              </h2>
            </div>
            <p className="section-aside">
              Principles for making interfaces easier to use, change, and trust.
            </p>
          </div>
          <div className="principle-list">
            {portfolio.principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <span className="principle-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="expertise-section section-shell"
          aria-labelledby="expertise-title"
        >
          <div className="expertise-intro">
            <p className="section-index">03 — TOOLKIT</p>
            <h2 id="expertise-title">
              The right tools.
              <br />
              <em>Used with intent.</em>
            </h2>
            <p>
              Explore the technologies, tools, and skills I use to build modern,
              high-performance web experiences with clean, maintainable code.
            </p>
          </div>
          <div className="expertise-groups">
            {portfolio.expertise.map((group) => (
              <div className="expertise-row" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          className="experience-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-heading">
            <div>
              <p className="section-index">04 — EXPERIENCE</p>
              <h2 id="experience-title">
                Work shaped by
                <br />
                <em>real-world tools.</em>
              </h2>
            </div>
            <p className="section-aside">
              Building and evolving internal applications across different teams and products.
            </p>
          </div>
          <ol className="experience-list">
            {portfolio.experience.map((item, index) => (
              <li className="experience-item" key={`${item.company}-${item.period}`}>
                <span className="experience-number">0{index + 1}</span>
                <div className="experience-main">
                  <div className="experience-company-line">
                    <h3>{item.company}</h3>
                    {item.affiliation && <span className="experience-affiliation">{item.affiliation}</span>}
                  </div>
                  <p className="experience-description">{item.description}</p>
                </div>
                <div className="experience-meta">
                  <span>{item.role}</span>
                  <span>{item.period}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-marker" aria-hidden="true">
            <span>ABOUT</span>
            <span>05 / 06</span>
          </div>
          <div className="about-copy">
            <p className="section-index">05 — A LITTLE ABOUT ME</p>
            <h2 id="about-title">
              {portfolio.about.heading}{" "}
              <br />
              <em>{portfolio.about.headingAccent}</em>
            </h2>
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-topline">
            <p className="section-index">06 — CONTACT</p>
            <span>GOOD THINGS START WITH A CONVERSATION</span>
          </div>
          <h2 id="contact-title">
            Have a good
            <br />
            problem? <em>Let’s talk.</em>
          </h2>
          {portfolio.email ? (
            <a className="contact-email" href={`mailto:${portfolio.email}`}>
              {portfolio.email} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="contact-placeholder">
              [Add your email address in src/data/portfolio.ts before
              publishing]
            </p>
          )}
          <div className="contact-links">
            {portfolio.linkedinUrl ? (
              <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
            ) : (
              <p className="contact-link-placeholder">
                LinkedIn <span>[add profile URL]</span>
              </p>
            )}
            {portfolio.githubUrl ? (
              <a href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
            ) : (
              <p className="contact-link-placeholder">
                GitHub <span>[add profile URL]</span>
              </p>
            )}
            {portfolio.resumeUrl && (
              <a href={portfolio.resumeUrl}>
                Resume <span>↗</span>
              </a>
            )}
          </div>
          <div className="contact-note">
            {portfolio.availableForOpportunities
              ? "Currently open to opportunities."
              : "Open to thoughtful conversations."}
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="wordmark"
              href="#top"
              aria-label={`${portfolio.footer.backToTopLabel}${portfolio.name ? ` — ${portfolio.name}` : ""}`}
            >
              {portfolio.monogram}
              <span className="wordmark-period">/</span>
            </a>
            <div className="footer-brand-copy">
              {portfolio.name && <span className="footer-name">{portfolio.name}</span>}
              <p className="footer-note">{portfolio.footer.note}</p>
            </div>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            {portfolio.email && <a href={`mailto:${portfolio.email}`}>Email <span aria-hidden="true">↗</span></a>}
            {portfolio.linkedinUrl && <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
            {portfolio.githubUrl && <a href={portfolio.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
            {portfolio.resumeUrl && <a href={portfolio.resumeUrl}>Resume <span aria-hidden="true">↗</span></a>}
          </nav>
          <a className="footer-top-link" href="#top">
            {portfolio.footer.backToTopLabel} <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-meta">
          <span className="location-style">{portfolio.location}</span>
          <p className="footer-copyright">
            © {portfolio.name ? `${portfolio.name}. ` : ""}{portfolio.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
