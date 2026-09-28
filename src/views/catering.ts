import { cateringPackages, cateringReviews } from "../data";
import { list, packageCard, reviewCard } from "../lib/html";

export function renderCatering(): string {
  return `
    <section class="section section--highlight reveal">
      <div class="container grid grid--2-cols">
        <div>
          <p class="eyebrow">Catering Services</p>
          <h1>Event Catering That Feels Like Home, Looks Premium.</h1>
          <p>
            D.dot offers full-service Nigerian catering for weddings, corporate events, traditional ceremonies, and private
            celebrations. We manage everything from menu planning and tastings to service and cleanup, so you can focus on
            hosting.
          </p>
          ${list(
            [
              "Tailored menus built around your guests and budget",
              "Professional service team and event supervisors",
              "Live stations for grills, small chops, and signature dishes",
            ],
            "list list--check",
          )}
          <div class="hero__actions" style="margin-top:1.75rem;">
            <a href="contact.html#book" class="btn">Request a Catering Quote</a>
            <a href="menu.html" class="btn btn--outline">View Sample Menus</a>
          </div>
        </div>
        <div class="card card--accent reveal">
          <h2>Event Types</h2>
          ${list(
            [
              "Weddings, introductions & traditional ceremonies",
              "Corporate conferences, retreats & office parties",
              "Birthdays, house parties & family gatherings",
              "Church and community events",
            ],
            "list list--check",
          )}
        </div>
      </div>
    </section>

    <section class="section reveal">
      <div class="container grid grid--3-cols cards">
        ${cateringPackages.map(packageCard).join("")}
      </div>
    </section>

    <section class="section section--light reveal">
      <div class="container">
        <header class="section__header">
          <h2>Recent 5-Star Catering Reviews</h2>
          <p>See what clients say about trusting D.dot with their big days.</p>
        </header>
        <div class="grid grid--3-cols cards">
          ${cateringReviews.map(reviewCard).join("")}
        </div>
      </div>
    </section>
  `;
}
