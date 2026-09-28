import { siteContact } from "../data";
import { escapeHtml, list } from "../lib/html";

export function renderAbout(): string {
  return `
    <section class="section section--light reveal">
      <div class="container grid grid--2-cols">
        <div>
          <p class="eyebrow">About D.dot</p>
          <h1>Modern Nigerian Flavours, Professional Service.</h1>
          <p>
            D.dot is a Lagos-based catering company and eatery dedicated to serving the hottest and most trending Nigerian meals
            with a polished, contemporary touch. From signature party jollof to curated small chops, we blend authentic recipes
            with modern presentation and hospitality.
          </p>
          <p>
            Our team is made up of experienced chefs, food stylists, and coordinators who understand what it takes to deliver
            stress-free events and consistently great food — every single time.
          </p>
          ${list(
            [
              "Event catering for weddings, corporate events, private parties, and house gatherings",
              "Everyday dining at our eatery for professionals, families, and food lovers",
              "Custom menus that reflect your guests, culture, and budget",
            ],
            "list list--check",
          )}
        </div>
        <div class="card card--accent reveal">
          <h2>Our Promise</h2>
          ${list(
            [
              "Reliable timing and professional coordination",
              "Fresh ingredients and consistent flavour",
              "Beautifully plated and photograph-ready food",
              "Warm, attentive service from start to finish",
            ],
            "list list--check",
          )}
        </div>
      </div>
    </section>

    <section class="section reveal">
      <div class="container grid grid--2-cols">
        <div class="card">
          <h2>The Eatery Experience</h2>
          <p>
            Beyond events, D.dot is also your everyday spot for hot Nigerian meals. The eatery is designed as a relaxed, clean
            space where you can grab a quick lunch, meet friends after work, or pick up dinner for the family.
          </p>
          ${list([
            "Daily specials featuring trending Nigerian dishes",
            "Balanced portions for both light and heavy eaters",
            "Fast service for busy workdays",
          ])}
        </div>
        <div class="card card--accent">
          <h2>Location &amp; Hours</h2>
          <p class="muted">Update these details with your actual address and opening times.</p>
          <p><strong>Address:</strong><br />${escapeHtml(siteContact.city)}</p>
          <p><strong>Eatery Hours:</strong><br />${siteContact.eateryHours.map(escapeHtml).join("<br />")}</p>
          <p>
            <strong>Reservations &amp; Enquiries:</strong><br />
            Phone: <a href="${siteContact.phoneHref}">${escapeHtml(siteContact.phoneDisplay)}</a><br />
            Email: <a href="mailto:${siteContact.email}">${escapeHtml(siteContact.email)}</a>
          </p>
        </div>
      </div>
    </section>
  `;
}
