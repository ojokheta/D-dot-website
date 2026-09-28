import { eateryFavourites, eateryReviews, siteContact } from "../data";
import { escapeHtml, list, menuCard, reviewCard } from "../lib/html";

export function renderEatery(): string {
  return `
    <section class="section section--soft reveal">
      <div class="container grid grid--2-cols">
        <div>
          <p class="eyebrow">Eatery</p>
          <h1>Dine In, Take Away, or Grab Lunch On the Go.</h1>
          <p>
            The D.dot eatery located in Irawo is a bright, relaxed space where you can enjoy hot Nigerian meals in between meetings, after work or
            on weekends with friends and family.
          </p>
          ${list(
            [
              "Daily specials inspired by trending Nigerian dishes",
              "Balanced portions for light and heavy eaters",
              "Friendly, fast service and clean space",
            ],
            "list list--check",
          )}
        </div>
        <div class="card card--accent">
          <h2>Location &amp; Hours</h2>
          <p class="muted">Replace with your exact address and opening times.</p>
          <p><strong>Address:</strong><br />${escapeHtml(siteContact.city)}</p>
          <p><strong>Eatery Hours:</strong><br />${siteContact.eateryHours.map(escapeHtml).join("<br />")}</p>
          <p><strong>Takeaway &amp; Delivery:</strong><br />Call or send us a message to place an order.</p>
        </div>
      </div>
    </section>

    <section class="section reveal">
      <div class="container grid grid--3-cols cards">
        ${eateryFavourites.map((category) => menuCard(category, "card")).join("")}
      </div>
    </section>

    <section class="section section--light reveal">
      <div class="container">
        <header class="section__header">
          <h2>What Guests Love About the Eatery</h2>
        </header>
        <div class="grid grid--3-cols cards">
          ${eateryReviews.map(reviewCard).join("")}
        </div>
      </div>
    </section>
  `;
}
