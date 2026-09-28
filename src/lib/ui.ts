import { parseBookingForm } from "./form";

function initNav(): void {
  const navToggle = document.querySelector<HTMLButtonElement>(".navbar__toggle");
  const navLinks = document.querySelector<HTMLUListElement>(".navbar__links");

  if (!navToggle || !navLinks) {
    return;
  }

  const setOpen = (open: boolean): void => {
    navLinks.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  };

  navToggle.addEventListener("click", () => {
    setOpen(!navLinks.classList.contains("is-open"));
  });

  navLinks.addEventListener("click", (event: MouseEvent) => {
    if (event.target instanceof HTMLAnchorElement) {
      setOpen(false);
    }
  });
}

function initSmoothScroll(): void {
  const internalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event: MouseEvent) => {
      const targetId = link.getAttribute("href")?.slice(1);
      if (!targetId) {
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (!targetEl) {
        return;
      }

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initReveal(): void {
  const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initYear(): void {
  const yearSpans = document.querySelectorAll<HTMLElement>("[data-year]");
  const year = String(new Date().getFullYear());
  yearSpans.forEach((span) => {
    span.textContent = year;
  });
}

function scrollToHash(): void {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);
  if (target) {
    target.scrollIntoView();
  }
}

function initBookingForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-booking-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event: SubmitEvent) => {
      event.preventDefault();

      const request = parseBookingForm(form);
      const note = form.querySelector<HTMLElement>("[data-form-note]");

      if (!request) {
        if (note) {
          note.textContent = "Please complete your name, email, phone, and a guest count of at least 10.";
        }
        return;
      }

      form.reset();
      if (note) {
        note.textContent = `Thanks ${request.name}. Your ${request.eventType} booking request is ready to connect to email or a CRM.`;
      }
    });
  });
}

export function initUi(): void {
  initNav();
  initSmoothScroll();
  initReveal();
  initYear();
  initBookingForms();
  scrollToHash();
}
