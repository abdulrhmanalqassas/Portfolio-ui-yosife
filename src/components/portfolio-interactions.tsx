"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { contact, projects } from "@/lib/portfolio";

export function PortfolioGallery({ children }: { children: ReactNode }) {
  const gallery = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(true);
  function move(direction: -1 | 1) {
    const element = gallery.current;
    if (!element) return;
    element.scrollBy({
      left: direction * Math.max(240, element.clientWidth * 0.75),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const element = gallery.current;
    if (!element) return;
    function updateControls() {
      if (!element) return;
      setCanGoBack(element.scrollLeft > 1);
      setCanGoForward(
        element.scrollLeft + element.clientWidth < element.scrollWidth - 1,
      );
    }
    function position() {
      if (element) element.scrollLeft = mobile.matches ? 1599 : 1575;
      updateControls();
    }
    position();
    element.addEventListener("scroll", updateControls, { passive: true });
    const observer = new ResizeObserver(updateControls);
    observer.observe(element);
    mobile.addEventListener("change", position);
    return () => {
      mobile.removeEventListener("change", position);
      element.removeEventListener("scroll", updateControls);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="portfolio-gallery">
      <div
        ref={gallery}
        className="preview-viewport"
        tabIndex={0}
        role="region"
        aria-label="Portfolio image gallery"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {children}
      </div>
      <div className="gallery-controls" aria-label="Portfolio gallery controls">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={!canGoBack}
          aria-label="Previous portfolio previews"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={!canGoForward}
          aria-label="Next portfolio previews"
        >
          →
        </button>
      </div>
    </div>
  );
}

export function ContactLink({
  children,
  className = "",
  channel = "email",
  subject = "Let's work together",
}: {
  children: ReactNode;
  className?: string;
  channel?: keyof typeof contact;
  subject?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const value = contact[channel];
  const href = value
    ? channel === "email"
      ? `mailto:${value}?subject=${encodeURIComponent(subject)}`
      : channel === "whatsapp"
        ? `https://wa.me/${value.replace(/\D/g, "")}?text=${encodeURIComponent(subject)}`
        : value
    : "";
  if (href)
    return (
      <a
        className={className}
        href={href}
        {...(channel !== "email"
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        className="contact-dialog"
        ref={dialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-label="Contact information"
      >
        <h2>Let’s connect</h2>
        <p>Contact details will be available soon. Please check back.</p>
        <form method="dialog">
          <button className="button button-purple" autoFocus>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <div
      className="mobile-menu"
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/2eab7.svg" alt="" />
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          {[
            ["About", "about"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Plans", "plans"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export function ProjectDetails({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const project = projects.find((item) => item.name === name)!;
  return (
    <>
      <button
        type="button"
        className="project-open"
        aria-label={`View ${name} project details`}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={`project-${name}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <p className="eyebrow">{project.type}</p>
        <h2 id={`project-${name}`}>{name}</h2>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ContactLink
          className="button button-purple"
          subject={`Tell me about ${name}`}
        >
          Discuss this project ↗
        </ContactLink>
        <form method="dialog">
          <button className="button" autoFocus>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
}
