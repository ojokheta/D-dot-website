import type { MenuCategory, PackageCard, Review, ServiceCard } from "../types";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function list(items: readonly string[], className = "list"): string {
  const itemsHtml = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `<ul class="${className}">${itemsHtml}</ul>`;
}

export function reviewCard(review: Review): string {
  return `
    <article class="card">
      <div class="stars">★★★★★</div>
      <p>"${escapeHtml(review.quote)}"</p>
      <p>
        <strong>${escapeHtml(review.name)}</strong><br />
        <span class="muted">${escapeHtml(review.context)}</span>
      </p>
    </article>
  `;
}

export function menuCard(category: MenuCategory, extraClass = "card card--menu"): string {
  return `
    <article class="${extraClass}">
      <h3>${escapeHtml(category.title)}</h3>
      ${list(category.items)}
    </article>
  `;
}

export function serviceCard(service: ServiceCard): string {
  return `
    <article class="card">
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.description)}</p>
      ${list(service.items, "list list--check")}
    </article>
  `;
}

export function packageCard(pkg: PackageCard): string {
  return `
    <article class="card">
      <h3>${escapeHtml(pkg.title)}</h3>
      ${list(pkg.items)}
      <p class="muted">${escapeHtml(pkg.note)}</p>
    </article>
  `;
}
