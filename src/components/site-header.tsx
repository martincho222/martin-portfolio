"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { portfolio } from "@/data/portfolio";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleNavigationClick() {
    closeMenu();
    if (window.matchMedia("(max-width: 680px)").matches) {
      menuButtonRef.current?.focus();
    }
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className={`site-header${isMenuOpen ? " menu-open" : ""}`} onKeyDown={handleMenuKeyDown}>
      <a className="wordmark" href="#top" aria-label={`${portfolio.name || "Portfolio"}, home`} onClick={handleNavigationClick}>
        {portfolio.monogram}<span className="wordmark-period">/</span>
      </a>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span className="sr-only">Menu</span>
      </button>
      <div className="nav-group">
        <nav className="main-nav" id="primary-navigation" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href} onClick={handleNavigationClick}>{label}</a>
          ))}
        </nav>
        <div className="header-end">
          {portfolio.availableForOpportunities && (
            <span className="availability"><span />Available for opportunities</span>
          )}
          {portfolio.resumeUrl && <a className="resume-link" href={portfolio.resumeUrl} onClick={handleNavigationClick}>Resume ↗</a>}
        </div>
      </div>
    </header>
  );
}
