import { extraMenuSections, menuHighlights } from "../data";
import { list, menuCard } from "../lib/html";

export function renderMenu(): string {
  return `
    <section class="section section--soft reveal">
      <div class="container">
        <header class="section__header">
          <h1>D.dot Menu Highlights</h1>
          <p>Hot and trending Nigerian meals available for catering and at the eatery.</p>
        </header>
        <div class="grid grid--3-cols cards cards--menu">
          ${menuHighlights.map((category) => menuCard(category)).join("")}
        </div>
      </div>
    </section>

    <section class="section reveal">
      <div class="container grid grid--3-cols cards">
        ${extraMenuSections.map((category) => menuCard(category, "card")).join("")}
      </div>
    </section>

    <section class="section section--light reveal">
      <div class="container">
        <header class="section__header">
          <h2>Plan Your Menu With Us</h2>
          <p>We can customise these highlights to match your event style and guests.</p>
        </header>
        <div class="grid grid--2-cols">
          <div>
            <p>
              Every menu starts with a conversation. Share your guest count, event type, and preferences, and our team will
              recommend a balanced selection of mains, sides, soups, grills and small chops.
            </p>
            ${list(
              [
                "Options for halal, vegetarian and light eaters",
                "Child-friendly menu sections",
                "Creative plating and live stations available",
              ],
              "list list--check",
            )}
          </div>
          <div class="card card--accent">
            <h3>Ready to Build Your Menu?</h3>
            <p>Use the booking form to request a customised menu and quote.</p>
            <a href="contact.html#book" class="btn" style="margin-top:0.75rem;">Start a Menu Consultation</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
