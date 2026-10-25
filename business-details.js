
"use strict";

const businesses = {
  "urban-table": {
    name: "Urban Table Restaurant",
    category: "Restaurant",
    description:
      "Discover Urban Table Restaurant on BusinessHub58. Add the restaurant's verified introduction, menu highlights, location, and opening hours here.",
    services: [
      "Restaurant services",
      "Food and dining"
    ]
  },

  "elite-beauty": {
    name: "Elite Beauty Studio",
    category: "Beauty",
    description:
      "Discover Elite Beauty Studio on BusinessHub58. Add the studio's verified introduction, beauty services, location, and opening hours here.",
    services: [
      "Beauty services",
      "Personal care"
    ]
  },

  "carepoint-clinic": {
    name: "CarePoint Clinic",
    category: "Healthcare",
    description:
      "Discover CarePoint Clinic on BusinessHub58. Add verified clinic information, available services, location, and appointment details here.",
    services: [
      "Healthcare services",
      "Patient appointments"
    ]
  },

  "proauto-services": {
    name: "ProAuto Services",
    category: "Automotive",
    description:
      "Discover ProAuto Services on BusinessHub58. Add the company's verified introduction, automotive services, location, and business hours here.",
    services: [
      "Automotive services",
      "Vehicle maintenance"
    ]
  }
};

const detailsContainer = document.getElementById("business-details");
const params = new URLSearchParams(window.location.search);
const businessId = params.get("id");
const business = businessId ? businesses[businessId] : null;

function renderBusinessDetails(item) {
  document.title = `${item.name} | BusinessHub58`;

  const servicesHTML = item.services
    .map(service => `<li>${escapeHTML(service)}</li>`)
    .join("");

  detailsContainer.innerHTML = `
    <span class="business-details-category">
      ${escapeHTML(item.category)}
    </span>

    <h1>${escapeHTML(item.name)}</h1>

    <p class="business-details-description">
      ${escapeHTML(item.description)}
    </p>

    <h2>Services</h2>
    <ul class="business-contact-list">
      ${servicesHTML}
    </ul>

    <h2>Contact Information</h2>
    <p>
      Contact details have not been added yet.
      BusinessHub58 will display verified contact information when available.
    </p>

    <div class="business-details-actions">
      <a class="business-primary-link" href="businesses.html">
        Browse More Businesses
      </a>
    </div>
  `;
}

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

if (business) {
  renderBusinessDetails(business);
} else {
  document.title = "Business Not Found | BusinessHub58";

  detailsContainer.innerHTML = `
    <h1>Business Not Found</h1>
    <div class="business-detail-message">
      <p>
        We could not find this business. It may not exist or the link may be incorrect.
      </p>
      <a class="business-primary-link" href="businesses.html">
        Return to Businesses
      </a>
    </div>
  `;
}

