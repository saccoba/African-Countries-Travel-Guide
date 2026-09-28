import "./style.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3000/api/countries";

const currentPath = window.location.pathname;

const showError = (message) => {
  document.body.innerHTML = `
    <main class="container not-found">
      <h1>Something went wrong</h1>
      <p>${message}</p>
      <a href="/" role="button">Return Home</a>
    </main>
  `;
};

const createCountryCard = (country) => {
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

      <a href="/countries/${country.slug}" role="button">
        Explore ${country.name}
      </a>
    </div>
  `;

  return countryCard;
};

const displayCountries = (countries) => {
  const countriesContainer = document.querySelector(
    "#countries-container"
  );

  countriesContainer.innerHTML = "";

  if (countries.length === 0) {
    countriesContainer.innerHTML = `
      <p class="no-results">
        No countries matched your search.
      </p>
    `;

    return;
  }

  countries.forEach((country) => {
    countriesContainer.appendChild(createCountryCard(country));
  });
};

const loadHomepage = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Unable to retrieve countries from the database.");
    }

    const countries = await response.json();

    displayCountries(countries);

    const searchInput = document.querySelector("#country-search");

    searchInput.addEventListener("input", (event) => {
      const searchValue = event.target.value
        .trim()
        .toLowerCase();

      const filteredCountries = countries.filter((country) => {
        const searchableAttributes = [
          country.name,
          country.capital,
          country.region,
          country.language,
          country.attraction
        ];

        return searchableAttributes.some((attribute) =>
          attribute
            ?.toLowerCase()
            .includes(searchValue)
        );
      });

      displayCountries(filteredCountries);
    });
  } catch (error) {
    console.error("Error loading countries:", error);
    showError("The countries could not be loaded.");
  }
};

const loadCountryDetails = async () => {
  const countrySlug = currentPath.split("/")[2];

  try {
    const response = await fetch(
      `${API_URL}/${countrySlug}`
    );

    if (response.status === 404) {
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

      return;
    }

    if (!response.ok) {
      throw new Error("Unable to retrieve the country.");
    }

    const country = await response.json();

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
  } catch (error) {
    console.error("Error loading country:", error);
    showError("The country information could not be loaded.");
  }
};

if (currentPath.startsWith("/countries/")) {
  loadCountryDetails();
} else {
  loadHomepage();
}