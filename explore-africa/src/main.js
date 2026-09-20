import "./style.css";
import countries from "./data/countries.js";

const currentPath = window.location.pathname;

// Display an individual country page
if (currentPath.startsWith("/countries/")) {
  const countrySlug = currentPath.split("/")[2];

  const country = countries.find(
    (country) => country.slug === countrySlug
  );

  if (country) {
    document.title = `${country.name} | Explore Africa`;

    document.body.innerHTML = `
      <header class="hero">
        <nav class="container">
          <strong>Explore Africa</strong>

          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>

      <main class="container country-details">
        <a href="/">← Back to all countries</a>

        <article>
          <img
            src="${country.image}"
            alt="Flag of ${country.name}"
            class="detail-image"
          >

          <div class="detail-content">
            <h1>${country.name}</h1>

            <p>${country.description}</p>

            <p>
              <strong>Capital:</strong>
              ${country.capital}
            </p>

            <p>
              <strong>Region:</strong>
              ${country.region}
            </p>

            <p>
              <strong>Main language:</strong>
              ${country.language}
            </p>

            <p>
              <strong>Popular attraction:</strong>
              ${country.attraction}
            </p>
          </div>
        </article>
      </main>

      <footer class="container">
        <p>Explore Africa Travel Guide</p>
      </footer>
    `;
  } else {
    // Display a 404 page if the country does not exist
    document.title = "Page Not Found | Explore Africa";

    document.body.innerHTML = `
      <main class="container not-found">
        <h1>404</h1>
        <h2>Country not found</h2>

        <p>
          Sorry, we could not find the country you requested.
        </p>

        <a href="/" role="button">Return Home</a>
      </main>
    `;
  }
} else {
  // Display the homepage
  const countriesContainer = document.querySelector(
    "#countries-container"
  );

  countries.forEach((country) => {
    const countryCard = document.createElement("article");

    countryCard.classList.add("country-card");
    countryCard.style.animationDelay = `${country.id * 0.12}s`;

    countryCard.innerHTML = `
      <img
        src="${country.image}"
        alt="Flag of ${country.name}"
        class="country-image"
      >

      <div class="country-content">
        <h3>${country.name}</h3>

        <p><strong>Capital:</strong> ${country.capital}</p>

        <p><strong>Region:</strong> ${country.region}</p>

        <p>
          <strong>Popular attraction:</strong>
          ${country.attraction}
        </p>

        <a
          href="/countries/${country.slug}"
          role="button"
        >
          Explore ${country.name}
        </a>
      </div>
    `;

    countriesContainer.appendChild(countryCard);
  });
}