
"use strict";

const businesses = {
  "urban-table": {
    name: "Urban Table Restaurant",
    category: "Restaurants & Food",
    image: "featured-restaurant.jpg",
    imageAlt: "Urban Table Restaurant",
    description:
      "Explore Urban Table Restaurant on BusinessHub58. Discover its food and dining offering, and check the available business information before planning your visit.",
    about:
      "Urban Table Restaurant is listed in the Restaurants & Food category on BusinessHub58. This profile helps visitors explore the business and understand its general service category. Menu items, location and opening hours can be added when verified information is available.",
    services: [
      {
        title: "Restaurant Dining",
        text: "Explore the restaurant's dining offering.",
        icon: "🍽"
      },
      {
        title: "Food & Meals",
        text: "Discover food-related services offered by the business.",
        icon: "🥗"
      },
      {
        title: "Dining Information",
        text: "Check the available details before visiting.",
        icon: "☕"
      },
      {
        title: "Business Enquiries",
        text: "Look for verified contact details when available.",
        icon: "✉"
      }
    ],
    benefits: [
      {
        title: "Easy to Discover",
        text: "Find this restaurant through the BusinessHub58 business directory."
      },
      {
        title: "Clear Business Category",
        text: "Quickly identify the business as part of the food and dining category."
      },
      {
        title: "Information in One Place",
        text: "Review the available profile details before deciding what to do next."
      }
    ]
  },

  "elite-beauty": {
    name: "Elite Beauty Studio",
    category: "Beauty & Personal Care",
    image: "featured-salon.jpg",
    imageAlt: "Elite Beauty Studio",
    description:
      "Explore Elite Beauty Studio on BusinessHub58. Discover its beauty and personal care category and review the business information currently available.",
    about:
      "Elite Beauty Studio is listed in the Beauty & Personal Care category on BusinessHub58. Its profile provides a starting point for visitors looking for beauty-related businesses. Specific treatments, prices, appointments and opening hours should be added once confirmed by the business.",
    services: [
      {
        title: "Beauty Services",
        text: "Explore the beauty services listed by the business.",
        icon: "✦"
      },
      {
        title: "Personal Care",
        text: "Discover personal care offerings where available.",
        icon: "♡"
      },
      {
        title: "Service Information",
        text: "Review available details before making an enquiry.",
        icon: "▤"
      },
      {
        title: "Business Enquiries",
        text: "Check for verified contact information when available.",
        icon: "✉"
      }
    ],
    benefits: [
      {
        title: "Easy to Find",
        text: "Discover the studio through the BusinessHub58 directory."
      },
      {
        title: "Relevant Category",
        text: "Browse a business listed under beauty and personal care."
      },
      {
        title: "Helpful Profile",
        text: "Find the available business information in one convenient place."
      }
    ]
  },

  "carepoint-clinic": {
    name: "CarePoint Clinic",
    category: "Health & Medicine",
    image: "featured-clinic.jpg",
    imageAlt: "CarePoint Clinic",
    description:
      "Explore CarePoint Clinic on BusinessHub58. Review the available clinic profile and check for verified information before making a healthcare enquiry.",
    about:
      "CarePoint Clinic is listed in the Health & Medicine category on BusinessHub58. This profile helps visitors identify the clinic listing and review available information. Medical specialties, practitioners, consultation fees and appointment arrangements have not been confirmed in this profile.",
    services: [
      {
        title: "Clinic Information",
        text: "Review the healthcare business listing and available details.",
        icon: "✚"
      },
      {
        title: "Healthcare Enquiries",
        text: "Look for verified ways to contact the clinic.",
        icon: "♡"
      },
      {
        title: "Service Details",
        text: "Check which medical services are confirmed by the clinic.",
        icon: "▤"
      },
      {
        title: "Appointment Information",
        text: "Confirm appointment arrangements directly when contact details are available.",
        icon: "◷"
      }
    ],
    benefits: [
      {
        title: "Easy to Discover",
        text: "Find the clinic listing through the BusinessHub58 directory."
      },
      {
        title: "Information to Review",
        text: "See the available profile information before making an enquiry."
      },
      {
        title: "Verify Before Visiting",
        text: "Confirm medical services, practitioners and appointment details directly with the clinic."
      }
    ]
  },

  "proauto-services": {
    name: "ProAuto Services",
    category: "Automotive",
    image: "featured-automotive.jpg",
    imageAlt: "ProAuto Services",
    description:
      "Explore ProAuto Services on BusinessHub58. Discover its automotive business category and review available information about vehicle-related services.",
    about:
      "ProAuto Services is listed in the Automotive category on BusinessHub58. This profile helps visitors discover the business and review its available information. Specific repair services, vehicle types, prices, location and operating hours should be confirmed before arranging a service.",
    services: [
      {
        title: "Automotive Services",
        text: "Explore the vehicle-related services listed by the business.",
        icon: "⚙"
      },
      {
        title: "Vehicle Maintenance",
        text: "Check which maintenance services are confirmed as available.",
        icon: "🔧"
      },
      {
        title: "Service Information",
        text: "Review available information before arranging work.",
        icon: "▤"
      },
      {
        title: "Business Enquiries",
        text: "Look for verified contact details to ask about your vehicle.",
        icon: "✉"
      }
    ],
    benefits: [
      {
        title: "Easy to Discover",
        text: "Find the automotive listing through BusinessHub58."
      },
      {
        title: "Relevant Business Category",
        text: "Quickly identify the listing as an automotive business."
      },
      {
        title: "Check Before Booking",
        text: "Confirm the required service, price and availability with the business."
      }
    ]
  }
};

const detailsContainer = document.getElementById("business-details");
const params = new URLSearchParams(window.location.search);
const businessId = params.get("id");
const business = businessId ? businesses[businessId] : null;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function renderBusinessDetails(item) {
  document.title = `${item.name} | BusinessHub58`;

  const servicesHTML = item.services.map(service => `
    <article class="profile-service">
      <div class="profile-service-icon" aria-hidden="true">
        ${escapeHTML(service.icon)}
      </div>
      <div>
        <h3>${escapeHTML(service.title)}</h3>
        <p>${escapeHTML(service.text)}</p>
      </div>
    </article>
  `).join("");

  const benefitsHTML = item.benefits.map(benefit => `
    <div class="profile-benefit">
      <span class="profile-check" aria-hidden="true">✓</span>
      <div>
        <strong>${escapeHTML(benefit.title)}</strong>
        <p>${escapeHTML(benefit.text)}</p>
      </div>
    </div>
  `).join("");

  detailsContainer.innerHTML = `
    <section class="profile-hero">
      <div class="profile-hero-image">
        <img
          src="${escapeHTML(item.image)}"
          alt="${escapeHTML(item.imageAlt)}"
          fetchpriority="high"
        >
      </div>

      <div class="profile-hero-content">
        <p class="profile-eyebrow">Discover Local Businesses</p>

        <span class="profile-category">
          ${escapeHTML(item.category)}
        </span>

        <h1 class="profile-title">${escapeHTML(item.name)}</h1>

        <p class="profile-intro">${escapeHTML(item.description)}</p>

        <div class="profile-hero-actions">
          <a class="profile-button profile-button-primary" href="#services">
            Explore Services <span aria-hidden="true">→</span>
          </a>

          <a class="profile-button profile-button-secondary" href="businesses.html">
            Browse Directory
          </a>
        </div>
      </div>
    </section>

    <div class="profile-layout">
      <div class="profile-main">
        <section class="profile-panel" aria-labelledby="about-heading">
          <p class="profile-section-kicker">Business Overview</p>
          <h2 class="profile-section-title" id="about-heading">
            About ${escapeHTML(item.name)}
          </h2>
          <p class="profile-section-copy">
            ${escapeHTML(item.about)}
          </p>
        </section>

        <section class="profile-panel" id="services" aria-labelledby="services-heading">
          <p class="profile-section-kicker">What to Explore</p>
          <h2 class="profile-section-title" id="services-heading">
            Services & Information
          </h2>
          <p class="profile-section-copy">
            Explore the business category and review the information available.
            Confirm specific services directly with the business before booking.
          </p>

          <div class="profile-services">
            ${servicesHTML}
          </div>
        </section>

        <section class="profile-panel" aria-labelledby="benefits-heading">
          <p class="profile-section-kicker">Discover with Confidence</p>
          <h2 class="profile-section-title" id="benefits-heading">
            Why Explore This Business?
          </h2>
          <p class="profile-section-copy">
            BusinessHub58 helps visitors discover businesses and review
            available information in one place.
          </p>

          <div class="profile-benefits">
            ${benefitsHTML}
          </div>
        </section>
      </div>

      <aside class="profile-sidebar">
        <section class="profile-panel" aria-labelledby="information-heading">
          <p class="profile-section-kicker">At a Glance</p>
          <h2 class="profile-section-title" id="information-heading">
            Business Information
          </h2>

          <div class="profile-info-row">
            <div class="profile-info-icon" aria-hidden="true">▦</div>
            <div>
              <span class="profile-info-label">Business Name</span>
              <div class="profile-info-value">${escapeHTML(item.name)}</div>
            </div>
          </div>

          <div class="profile-info-row">
            <div class="profile-info-icon" aria-hidden="true">⌂</div>
            <div>
              <span class="profile-info-label">Category</span>
              <div class="profile-info-value">${escapeHTML(item.category)}</div>
            </div>
          </div>

          <div class="profile-info-row">
            <div class="profile-info-icon" aria-hidden="true">✉</div>
            <div>
              <span class="profile-info-label">Contact Details</span>
              <div class="profile-info-value">
                Not provided in this listing yet.
              </div>
            </div>
          </div>

          <p class="profile-info-note">
            Location, opening hours, pricing and direct contact details
            will be displayed when verified information is added.
          </p>
        </section>

        <section class="profile-cta" aria-labelledby="cta-heading">
          <h2 id="cta-heading">Explore More Businesses</h2>
          <p>
            Continue browsing the BusinessHub58 directory to discover
            other listed businesses and categories.
          </p>
          <a class="profile-button" href="businesses.html">
            Browse All Businesses <span aria-hidden="true">→</span>
          </a>
        </section>
      </aside>
    </div>
  `;
}

function renderBusinessNotFound() {
  document.title = "Business Not Found | BusinessHub58";

  detailsContainer.innerHTML = `
    <section class="profile-error">
      <p class="profile-section-kicker">Profile Unavailable</p>
      <h1>Business Not Found</h1>
      <p>
        We couldn't find a business for this link.
        Return to the directory to explore the available listings.
      </p>
      <a class="profile-button profile-button-primary" href="businesses.html">
        ← Return to Businesses
      </a>
    </section>
  `;
}

if (business) {
  renderBusinessDetails(business);
} else {
  renderBusinessNotFound();
}
