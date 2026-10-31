import Image from "next/image";
import {
  ContactLink,
  MobileMenu,
  PortfolioGallery,
  ProjectDetails,
} from "@/components/portfolio-interactions";
import {
  customItems,
  faqs,
  plans,
  projects,
  services,
  stack,
} from "@/lib/portfolio";

function Asset({
  file,
  mobileFile,
  className = "",
}: {
  file: string;
  mobileFile?: string;
  className?: string;
}) {
  // SVGs retain their exported root dimensions. Raster crops belong to their slot.
  return mobileFile ? (
    <>
      <span className={`desktop-asset ${className}`}>
        <Asset file={file} />
      </span>
      <span className={`mobile-asset ${className}`}>
        <Asset file={mobileFile} />
      </span>
    </>
  ) : (
    <span className={`figma-asset ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/figma/${file}`} alt="" loading="lazy" />
    </span>
  );
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#home"
      className={footer ? "logo footer-logo" : "logo"}
      aria-label="Yousef Shehab — back to top"
    >
      <Image
        src="/figma/bd1c8.png"
        alt=""
        width={512}
        height={224}
        priority={!footer}
      />
    </a>
  );
}

function Heading({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{label}</p>
      <h2>{children}</h2>
    </div>
  );
}

const previews = [
  {
    file: "76c8c.png",
    width: 796,
    height: 455,
    alt: "Dark Arabic website design",
  },
  {
    file: "790b6.png",
    width: 220,
    height: 454,
    alt: "Mobile application interface",
  },
  { file: "e3a65.png", width: 848, height: 455, alt: "Web platform interface" },
  {
    file: "20ca0.png",
    width: 220,
    height: 454,
    alt: "Fashion shopping mobile application",
  },
  {
    file: "2646e.png",
    width: 794,
    height: 454,
    alt: "Finance dashboard interface",
  },
  {
    file: "a3457.png",
    width: 218,
    height: 450,
    alt: "Purple mobile application design",
  },
  {
    file: "abaf8.png",
    width: 806,
    height: 478,
    alt: "Editorial website design",
  },
  { file: "557a1.png", width: 220, height: 454, alt: "Mobile product design" },
  {
    file: "25a21.png",
    width: 220,
    height: 454,
    alt: "Mobile application screens",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Logo />
        <div className="header-actions">
          <nav className="desktop-navigation" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#plans">Plans</a>
          </nav>
          <ContactLink className="button header-hire">Hire me ↗</ContactLink>
          <MobileMenu />
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true">
            <Asset file="6f696.svg" />
          </div>
          <div className="hero-glow" />
          <div className="hand hand-left" aria-hidden="true">
            <Image
              src="/figma/a2340.png"
              alt=""
              width={800}
              height={800}
              loading="eager"
            />
          </div>
          <h1 id="hero-heading">
            <span className="desktop-copy">Crafting Digital Experiences</span>
            <span className="mobile-copy">Crafing Digital Experiences</span>
            <span className="muted">That Define The Future.</span>
          </h1>
          <div className="hero-portrait">
            <Image
              src="/figma/fb822.png"
              alt="Portrait of the portfolio designer"
              width={1536}
              height={1536}
              loading="lazy"
              sizes="(max-width: 767px) 1px, 65vw"
            />
          </div>
          <div className="hand hand-right" aria-hidden="true">
            <Image
              src="/figma/a9e5d.png"
              alt=""
              width={800}
              height={800}
              loading="eager"
            />
          </div>
          <p className="hero-description">
            UI/UX Designer based in Cairo — crafting digital products since
            2021. 3 years of sharp, intentional design.
          </p>
          <div className="hero-buttons">
            <a className="button" href="#projects">
              View work <span>↗</span>
            </a>
            <ContactLink className="button button-purple">
              <span className="desktop-copy">Hire Me</span>
              <span className="mobile-copy">Get in touch ↗</span>
            </ContactLink>
          </div>
          <span className="behance-side">Behance ✦</span>
          <span className="side-label side-label-left">UI/UX Designer</span>
          <span className="side-label side-label-right">Cairo, Egypt</span>
        </section>
        <div className="marquee" aria-label="Design specialties">
          <div>
            {[
              "Mobile Apps",
              "Web Design",
              "Design Systems",
              "Prototyping",
              "UI/UX Strategy",
              "Figma Expert",
              "User Research",
              "Wireframing",
            ].map((item) => (
              <span key={item}>
                {item}
                <i aria-hidden="true">◆</i>
              </span>
            ))}
          </div>
        </div>
        <section
          id="about"
          className="about section"
          aria-labelledby="about-title"
        >
          <div className="profile-card">
            <div className="profile-monogram" aria-hidden="true">
              Y
            </div>
            <div className="experience">
              <strong>3+</strong>
              <span>Yrs</span>
            </div>
            <div className="profile-caption">
              <strong>
                <span className="desktop-copy">Youssef Shehab</span>
                <span className="mobile-copy">Yousef Shehab</span>
              </strong>
              <span>UI/UX Designer · Since 2021</span>
            </div>
          </div>
          <div className="about-content">
            <div className="about-heading">
              <p className="eyebrow">About Me</p>
              <h2 id="about-title">
                <span>
                  My journey began
                  <br /> with <span className="muted">visual design,</span>
                  <br /> shaping the creative
                  <br /> mindset I apply today.
                </span>
              </h2>
            </div>
            <div className="about-description">
              <p>
                With 3 years of experience as a UI/UX designer, I bridge design
                vision and product logic seamlessly. I focus on creating
                interfaces that are not only beautiful but genuinely useful.
              </p>
              <p>
                I believe great design lives at the intersection of empathy,
                logic, and craft. Whether it&apos;s a complex fintech app or a
                simple onboarding flow, I obsess over every detail until it
                feels right.
              </p>
            </div>
            <div className="skills">
              {[
                "Figma",
                "UX Research",
                "Design Systems",
                "Mobile Design",
                "Interaction Design",
                "Web Design",
                "Prototyping",
                "Adobe XD",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="about-buttons">
              <ContactLink channel="behance" className="button button-light">
                View Behance ↗
              </ContactLink>
              <ContactLink className="button button-round">
                Email me
              </ContactLink>
            </div>
          </div>
        </section>
        <section
          className="portfolio-strip section"
          aria-label="Portfolio previews"
        >
          <Heading label="Portfolio">
            <span className="desktop-copy">
              Turning Ideas Into Intuitive{" "}
              <span className="muted">Digital Products</span>
            </span>
            <span className="mobile-copy">
              My Latest Project <span className="muted">Always my Best</span>
            </span>
          </Heading>
          <p className="section-intro">
            A selection of work across mobile apps, web platforms
            <br className="desktop-copy" /> and design systems.
          </p>
          <PortfolioGallery>
            <div className="preview-track">
              {previews.map((item) => (
                <Image
                  key={item.file}
                  src={`/figma/${item.file}`}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 767px) 500px, 850px"
                  className={`preview-${item.width < 300 ? "phone" : "web"}`}
                />
              ))}
            </div>
          </PortfolioGallery>
        </section>
        <section className="services section" id="services">
          <Heading label="Services">
            Expertise in What
            <br /> <span className="muted">I Build and Design</span>
          </Heading>
          <p className="mobile-copy section-intro">
            A selection of work across mobile apps, web platforms and design
            systems.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Asset file={service.icon} mobileFile={service.mobileIcon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="service-tag">{service.tag}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="projects section" id="projects">
          <Heading label="Selected work">
            WORK THAT SPEAKS
            <br />
            FOR ITSELF
          </Heading>
          <div
            className="projects-grid"
            role="region"
            aria-label="Selected projects"
          >
            {projects.map((project) => (
              <article
                className={`project-card ${project.type === "Website" ? "website-project" : ""} project-${project.name.toLowerCase()}`}
                key={project.name}
              >
                <ProjectDetails name={project.name}>
                  <div
                    className={`project-preview ${project.type === "Website" ? "browser-preview" : "phones-preview"}`}
                    aria-hidden="true"
                  >
                    {project.type === "Website" ? (
                      <div className="browser-window">
                        <div className="browser-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="browser-lines">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="browser-banner" />
                      </div>
                    ) : (
                      [0, 1, 2].map((item) => (
                        <div className="phone" key={item}>
                          <i />
                          <span>📱</span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="project-copy">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <span
                        className={`status status-${project.status.toLowerCase()}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </ProjectDetails>
              </article>
            ))}
          </div>
        </section>
        <section className="plans section" id="plans">
          <Heading label="Plans">
            Choose the Perfect
            <br /> Fit for Your Project
          </Heading>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article
                key={plan.title}
                className={`plan-card ${index === 1 ? "featured-plan" : ""}`}
              >
                <p className="eyebrow">{plan.label}</p>
                <h3>{plan.title}</h3>
                <p className="plan-description">{plan.description}</p>
                <span className="plan-tag">{plan.tag}</span>
                <ContactLink
                  className={`button button-round plan-button ${index === 1 ? "button-purple" : ""}`}
                  subject={plan.title}
                >
                  {plan.action}
                </ContactLink>
                <div className="plan-includes">
                  <h4>What&apos;s included:</h4>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            <article className="plan-card custom-plan">
              <div>
                <p className="eyebrow">Custom Plan</p>
                <h3>Fully Adaptable</h3>
                <p className="plan-description">
                  A completely flexible plan for any product combination — apps,
                  websites, dashboards, or design systems.
                </p>
                <ContactLink
                  className="button button-light button-round"
                  subject="Custom Plan"
                >
                  Start your Custom Plan →
                </ContactLink>
              </div>
              <div className="custom-includes">
                <h4 className="mobile-copy">What&apos;s included:</h4>
                <ul>
                  {customItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <span className="custom-watermark" aria-hidden="true">
                Custom
              </span>
            </article>
          </div>
        </section>
        <section className="tools section" id="tools">
          <Heading label="My Stack">
            <span className="desktop-copy">
              Each Tool Shapes
              <br />
              My Process
            </span>
            <span className="mobile-copy">Each Tool Shapes My Process</span>
          </Heading>
          <div className="tools-grid" role="region" aria-label="Design tools">
            {stack.map((tool) => (
              <article
                key={tool.name}
                className={`tool-card ${tool.mobileOnly ? "mobile-only-tool" : ""}`}
              >
                <span className="tool-icon">
                  <Asset file={tool.icon} mobileFile={tool.mobileIcon} />
                  {tool.name === "Webflow" && (
                    <span className="webflow-letter" aria-hidden="true">
                      Wf
                    </span>
                  )}
                </span>
                <h3>{tool.name}</h3>
                <p>{tool.level}</p>
                <div
                  className="tool-progress"
                  aria-label={`${tool.name}: ${tool.level}`}
                >
                  <span style={{ width: `${tool.progress}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="faq section" id="faq">
          <Heading label="FAQ">
            <span className="desktop-copy">
              Questions You
              <br />
              Might Have
            </span>
            <span className="mobile-copy">Questions You Might Have</span>
          </Heading>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className={`faq-item faq-${index}`}
                name="portfolio-faq"
              >
                <summary>
                  <span>
                    <span className="desktop-copy">{faq.question}</span>
                    <span className="mobile-copy">{faq.mobileQuestion}</span>
                  </span>
                  <span className="faq-symbol" aria-hidden="true">
                    +
                  </span>
                  <Asset className="mobile-faq-icon" file="c3454.svg" />
                </summary>
                <div className="faq-answer">
                  <p className="desktop-copy">{faq.answer}</p>
                  <p className="mobile-copy">
                    {faq.mobileAnswer || faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section className="contact section" id="contact">
          <h2 aria-label="Your business will never be the same.">
            Your
            <br />
            business
            <br />
            will
            <br />
            <span className="dimmed">never be</span>
            <br />
            <span className="desktop-copy">the same.</span>
            <span className="mobile-copy dimmed">
              the
              <br />
              same.
            </span>
          </h2>
          <p className="contact-description desktop-copy">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            <br />
            create something that stands out.
          </p>
          <p className="contact-description mobile-copy">
            Ready to elevate your digital product? Let&apos;s build
            <br />
            something extraordinary together.
          </p>
          <ContactLink className="button button-purple start-project">
            Start a Project →
          </ContactLink>
          <div className="social-links">
            {[
              {
                name: "Behance",
                channel: "behance" as const,
                icon: "990d5.svg",
                mobile: "04b59.svg",
              },
              {
                name: "whatsapp",
                channel: "whatsapp" as const,
                icon: "a9133.svg",
                mobile: "afdbe.svg",
              },
              {
                name: "facebook",
                channel: "facebook" as const,
                icon: "97996.svg",
                mobile: "e24aa.svg",
              },
              {
                name: "email",
                channel: "email" as const,
                icon: "d1d56.svg",
                mobile: "3147d.svg",
              },
            ].map((social) => (
              <ContactLink
                channel={social.channel}
                className={`social-link social-${social.channel}`}
                key={social.name}
              >
                <span className="social-icon">
                  <Asset file={social.icon} mobileFile={social.mobile} />
                </span>
                <span>{social.name}</span>
              </ContactLink>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <Logo footer />
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#plans">Plans</a>
          <ContactLink channel="behance">Behance</ContactLink>
        </nav>
        <p>© 2026 Yousef Shehab</p>
      </footer>
    </>
  );
}
