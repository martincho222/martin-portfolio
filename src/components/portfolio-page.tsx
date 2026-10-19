import Image from "next/image";
import { portfolio, type Project } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";

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
            <span className="kicker-line" /> FRONTEND ENGINEER{" "}
            <span className="kicker-since">/ SINCE 2020</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                {portfolio.name} <span>— {portfolio.location}</span>
              </p>
              <h1 id="hero-title">
                Building <br />
                interfaces.
                <br />
                <em>that make a difference</em>
              </h1>
              <p className="hero-intro">{portfolio.introduction}</p>
              <p className="hero-summary">{portfolio.summary}</p>
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
                  <span>M</span>
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
            <span>REACT · NEXT.JS · TYPESCRIPT</span>
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
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-marker" aria-hidden="true">
            <span>ABOUT</span>
            <span>04 / 05</span>
          </div>
          <div className="about-copy">
            <p className="section-index">04 — A LITTLE ABOUT ME</p>
            <h2 id="about-title">
              Care about the
              <br />
              craft. <em>Always.</em>
            </h2>
            <p>
              I’m a Frontend Engineer working in the field since 2020. I care
              about the details people feel: clear interactions, thoughtful
              visual rhythm, and code that stays understandable as a product
              grows.
            </p>
            <p>
              This space is yours to make personal. Add your background,
              location, and the specifics of how you work—only what’s true to
              you.
            </p>
          </div>
        </section>

        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-topline">
            <p className="section-index">05 — CONTACT</p>
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
        <a className="wordmark" href="#top" aria-label="Back to top">
          {portfolio.monogram}
          <span className="wordmark-period">/</span>
        </a>
        <span>DESIGNED TO BE MADE YOURS</span>
        <a href="#top">BACK TO TOP ↑</a>
        <span>© {portfolio.name}</span>
      </footer>
    </>
  );
}
