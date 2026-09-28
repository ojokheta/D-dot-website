import { footerLinks, navItems, siteContact } from "../data";
import type { PageId } from "../types";
import { escapeHtml } from "./html";

type LayoutOptions = {
  active: PageId;
  content: string;
  mainId?: string | undefined;
};

function renderNav(active: PageId): string {
  const links = navItems
    .map((item) => {
      if (item.cta) {
        return `<li><a href="${item.href}" class="btn btn--small">${escapeHtml(item.label)}</a></li>`;
      }

      const isActive = item.id === active;
      const className = isActive ? "navbar__link navbar__link--active" : "navbar__link";
      return `<li><a href="${item.href}" class="${className}">${escapeHtml(item.label)}</a></li>`;
    })
    .join("");

  return `
    <header class="topbar">
      <div class="container topbar__inner">
        <span class="topbar__tagline">${escapeHtml(siteContact.tagline)}</span>
        <a href="${siteContact.phoneHref}" class="topbar__phone">Call: ${escapeHtml(siteContact.phoneDisplay)}</a>
      </div>
    </header>

    <nav class="navbar">
      <div class="container navbar__inner">
        <a href="index.html" class="logo">D.dot</a>
        <button class="navbar__toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="navbar__links">
          ${links}
        </ul>
      </div>
    </nav>
  `;
}

function renderFooter(): string {
  const links = footerLinks
    .map((link) => `<li><a href="${link.href}">${escapeHtml(link.label)}</a></li>`)
    .join("");

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="logo">D.dot</span>
          <p>Premium Nigerian catering &amp; eatery serving hot, trending meals for every occasion.</p>
        </div>
        <div class="footer__cols">
          <div>
            <h4>Contact</h4>
            <p>Phone: <a href="${siteContact.phoneHref}">${escapeHtml(siteContact.phoneDisplay)}</a></p>
            <p>Email: <a href="mailto:${siteContact.email}">${escapeHtml(siteContact.email)}</a></p>
            <p>${escapeHtml(siteContact.city)}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul class="list list--plain">
              ${links}
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container footer__bottom-inner">
          <p>&copy; <span data-year></span> D.dot. All rights reserved.</p>
          <p class="footer__credit">Website concept created for D.dot catering &amp; eatery.</p>
        </div>
      </div>
    </footer>
  `;
}

export function renderLayout({ active, content, mainId }: LayoutOptions): string {
  const mainAttrs = mainId ? ` id="${mainId}"` : "";

  return `
    ${renderNav(active)}
    <main${mainAttrs}>
      ${content}
    </main>
    ${renderFooter()}
  `;
}
