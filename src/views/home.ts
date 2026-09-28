import {
  cateringServices,
  homeMenuHighlights,
  homeReviews,
} from "../data";
import { renderBookingForm } from "../lib/form";
import { list, menuCard, reviewCard, serviceCard } from "../lib/html";

export function renderHome(): string {
  return `
    <section class="hero reveal">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="eyebrow">Catering &amp; Eatery • Nigerian Cuisine</p>
          <h1>Hot, Trendy Nigerian Meals – Crafted for Every Moment.</h1>
          <p class="hero__subtitle">
            D.dot brings the heart of Nigerian cuisine to your events and everyday dining.
            From smoky party jollof to suya platters and gourmet small chops and the best Swallow options, we deliver
            unforgettable flavor with premium service.
          </p>
          <div class="hero__actions">
            <a href="contact.html#book" class="btn">Book Catering</a>
            <a href="menu.html" class="btn btn--outline">View Menu Highlights</a>
          </div>
          <div class="hero__meta">
            <div>
              <span class="hero__meta-label">Event-ready</span>
              <p>Weddings • Corporate • Private Dinners</p>
            </div>
            <div>
              <span class="hero__meta-label">Eatery Hours</span>
              <p>Mon–Sat: 9:00am – 9:00pm</p>
            </div>
          </div>
        </div>
        <div class="hero__image-card">
          <div class="hero__badge">Fresh • Spicy • Authentic</div>
          <div class="hero__image hero__image--primary">
            <span class="placeholder">D.dot Signature Jollof &amp; Swallow</span>
          </div>
          <div class="hero__image hero__image--secondary">
            <span class="placeholder">Styled catering setup</span>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section section--light reveal">
      <div class="container grid grid--2-cols">
        <div>
          <h2>About D.dot</h2>
          <p>
            D.dot is a contemporary Nigerian caterer and eatery focused on bold flavors,
            impeccable presentation, and reliable service. Whether you are hosting an
            intimate house party or a 500-guest celebration, our team delivers meals that
            feel like home – with a modern twist.
          </p>
          <p>
            We specialize in trending Nigerian meals, crafted with fresh ingredients and
            meticulous attention to detail. Every plate is designed to impress your guests
            and satisfy serious food lovers.
          </p>
          ${list([
            "Full-service catering for weddings, corporate events & parties",
            "Casual dine-in & takeaway at our Lagos eatery",
            "Curated menus featuring classic and trending Nigerian dishes",
          ])}
        </div>
        <div class="card card--accent">
          <h3>Why Clients Choose D.dot</h3>
          ${list(
            [
              "Professional, punctual, and detail-driven catering team",
              "Consistent taste and quality across events of any size",
              "Instagram-ready presentation for modern events",
              "Flexible menus tailored to your guests and budget",
            ],
            "list list--check",
          )}
        </div>
      </div>
    </section>

    <section id="services" class="section reveal">
      <div class="container">
        <header class="section__header">
          <h2>Catering Services</h2>
          <p>End-to-end catering for modern Nigerian events.</p>
        </header>
        <div class="grid grid--3-cols cards">
          ${cateringServices.map(serviceCard).join("")}
        </div>
      </div>
    </section>

    <section id="menu" class="section section--soft reveal">
      <div class="container">
        <header class="section__header">
          <h2>Trending Nigerian Menu Highlights</h2>
          <p>A curated taste of what D.dot serves daily and at events.</p>
        </header>
        <div class="grid grid--3-cols cards cards--menu">
          ${homeMenuHighlights.map((category) => menuCard(category)).join("")}
        </div>
        <p class="section__note">Full menu available on request – we also create custom menus for your event.</p>
      </div>
    </section>

    <section id="reviews" class="section section--light reveal">
      <div class="container">
        <header class="section__header">
          <h2>What Our Clients Say</h2>
          <p>Recent 5-star reviews from D.dot catering clients and eatery regulars.</p>
        </header>
        <div class="grid grid--3-cols cards">
          ${homeReviews.map(reviewCard).join("")}
        </div>
      </div>
    </section>

    <section id="eatery" class="section reveal">
      <div class="container grid grid--2-cols">
        <div>
          <h2>D.dot Eatery</h2>
          <p>
            Join us at our cozy, contemporary eatery for dine-in and takeaway.
            Perfect for lunch breaks, after-work hangouts, and weekend cravings.
          </p>
          ${list([
            "Rotating daily specials featuring trending Nigerian meals",
            "Quick service for busy professionals",
            "Comfortable seating and a relaxed atmosphere",
          ])}
        </div>
        <div class="card card--accent">
          <h3>Location &amp; Hours</h3>
          <p class="muted">Sample details – update with your actual address.</p>
          <p><strong>Address:</strong><br />Lagos, Nigeria</p>
          <p><strong>Eatery Hours:</strong><br />Mon–Sat: 10:00am – 9:00pm<br />Sun: 12:00pm – 7:00pm</p>
          <p><strong>Takeaway &amp; Delivery:</strong><br />Call or send us a message to place an order.</p>
        </div>
      </div>
    </section>

    <section id="book" class="section section--highlight reveal">
      <div class="container grid grid--2-cols">
        <div>
          <h2>Book D.dot for Your Next Event</h2>
          <p>
            Share a few details about your event and our team will reach out with a
            tailored menu and quote.
          </p>
          ${list(
            [
              "Response within 24 hours",
              "Flexible packages for different guest sizes",
              "Tasting sessions available on request",
            ],
            "list list--check",
          )}
        </div>
        ${renderBookingForm()}
      </div>
    </section>
  `;
}
