import { siteContact } from "../data";
import { renderBookingForm } from "../lib/form";
import { escapeHtml, list } from "../lib/html";

export function renderContact(): string {
  return `
    <section class="section section--light reveal">
      <div class="container grid grid--2-cols">
        <div>
          <p class="eyebrow">Contact</p>
          <h1>Reach Out to D.dot</h1>
          <p>
            We would love to hear about your event, catering needs or general enquiries. Use the form to request a quote or send
            us an email, and our team will respond within 24 hours.
          </p>
          <ul class="list">
            <li><strong>Phone:</strong> <a href="${siteContact.phoneHref}">${escapeHtml(siteContact.phoneDisplay)}</a></li>
            <li><strong>Email:</strong> <a href="mailto:${siteContact.email}">${escapeHtml(siteContact.email)}</a></li>
            <li><strong>Location:</strong> ${escapeHtml(siteContact.city)}</li>
          </ul>
        </div>
        <div class="card card--accent">
          <h2>Visit the Eatery</h2>
          <p class="muted">Update this section with your precise address and map link.</p>
          <p><strong>Address:</strong><br />${escapeHtml(siteContact.city)}</p>
          <p><strong>Eatery Hours:</strong><br />${siteContact.eateryHours.map(escapeHtml).join("<br />")}</p>
          <p><strong>Directions:</strong><br />Share Google Maps or landmark directions here.</p>
        </div>
      </div>
    </section>

    <section id="book" class="section section--highlight reveal">
      <div class="container grid grid--2-cols">
        <div>
          <h2>Book D.dot for Your Next Event</h2>
          <p>
            Tell us about your event and preferred menu style. We will respond with suggested menu options and a clear quote.
          </p>
          ${list(
            [
              "Weddings, introductions and traditional ceremonies",
              "Corporate functions, launches and retreats",
              "Birthdays, house parties and family gatherings",
            ],
            "list list--check",
          )}
        </div>
        ${renderBookingForm()}
      </div>
    </section>
  `;
}
