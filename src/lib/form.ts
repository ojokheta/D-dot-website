import { eventTypeOptions } from "../data";
import type { BookingRequest, EventType } from "../types";
import { escapeHtml } from "./html";

const eventTypeValues: readonly EventType[] = eventTypeOptions.map((option) => option.value);

export function isEventType(value: string): value is EventType {
  return eventTypeValues.includes(value as EventType);
}

export function renderBookingForm(): string {
  const options = eventTypeOptions
    .map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`)
    .join("");

  return `
    <form class="form" data-booking-form novalidate>
      <div class="form__group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />
      </div>
      <div class="form__group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>
      <div class="form__group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+234..." required />
      </div>
      <div class="form__group form__group--inline">
        <div>
          <label for="eventType">Event Type</label>
          <select id="eventType" name="eventType">
            ${options}
          </select>
        </div>
        <div>
          <label for="guests">No. of Guests</label>
          <input type="number" id="guests" name="guests" min="10" placeholder="e.g. 150" />
        </div>
      </div>
      <div class="form__group">
        <label for="date">Event Date</label>
        <input type="date" id="date" name="date" />
      </div>
      <div class="form__group">
        <label for="message">Additional Details</label>
        <textarea id="message" name="message" rows="4" placeholder="Tell us about your event, theme, and menu preferences"></textarea>
      </div>
      <button type="submit" class="btn btn--full">Submit Booking Request</button>
      <p class="form__note" data-form-note>
        This form is for demo purposes only. Connect it to your email or CRM to start receiving inquiries.
      </p>
    </form>
  `;
}

function readField(form: HTMLFormElement, name: string): string {
  const value = new FormData(form).get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function parseBookingForm(form: HTMLFormElement): BookingRequest | null {
  const name = readField(form, "name");
  const email = readField(form, "email");
  const phone = readField(form, "phone");
  const eventType = readField(form, "eventType");
  const guestsRaw = readField(form, "guests");
  const date = readField(form, "date");
  const message = readField(form, "message");

  if (!name || !email || !phone || !isEventType(eventType)) {
    return null;
  }

  const guests = guestsRaw === "" ? null : Number(guestsRaw);
  if (guests !== null && (!Number.isFinite(guests) || guests < 10)) {
    return null;
  }

  return { name, email, phone, eventType, guests, date, message };
}
