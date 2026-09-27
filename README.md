# WEB103 Project 2 - Explore Africa

Submitted by: **Mohamed Alie Conteh**

About this web app: **Explore Africa is a travel guide that allows users to discover African countries and learn about their capitals, regions, languages, and popular attractions. The country information is retrieved from a PostgreSQL database through an Express API. Users can search for countries and open an individual page to view more information about each country.**

Time spent: **3 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **The walkthrough includes a view of the Render dashboard demonstrating that the PostgreSQL database is available**
  - [X] **The walkthrough demonstrates the database table contents using `SELECT * FROM countries;`**

## Optional Features

The following **optional** features are implemented:

- [x] **The user can search for items by a specific attribute**
  - Users can search by country name, capital, region, language, or attraction.

## Additional Features

The following **additional** features are implemented:

- [x] Users can select a country and view a detailed country page.
- [x] Each country displays its flag, capital, region, language, attraction, and description.
- [x] The application displays a custom “Country Not Found” page for an invalid country URL.
- [x] The application displays an error message if country data cannot be loaded.
- [x] The website uses a responsive card layout.
- [x] Country information is supplied through an Express API.
- [x] The API retrieves country information from a PostgreSQL database.

## Video Walkthrough

Here is a walkthrough of the implemented features:

<img src="YOUR-GIF-LINK-HERE" title="Explore Africa Video Walkthrough" width="" alt="Explore Africa Video Walkthrough" />

GIF created with **ScreenToGif**.

The walkthrough demonstrates:

1. The Explore Africa homepage.
2. Country data loaded from PostgreSQL.
3. Searching by country name, capital, region, language, or attraction.
4. Opening an individual country page.
5. The Render dashboard showing the PostgreSQL database.
6. The database table contents displayed using:

```sql
SELECT * FROM countries;
## Challenges Encountered

One challenge was connecting the frontend, Express server, and PostgreSQL database. The original database table did not contain all the columns needed by the frontend. The table and database reset script were updated to include the `attraction`, `image`, and `description` columns.

Another challenge was allowing the frontend and backend to communicate while running on different ports. CORS middleware was added to the Express server so that the frontend could request information from the API.

It was also necessary to run the frontend and backend simultaneously. The frontend runs through Vite, while the backend runs through Node.js and Express.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express
- PostgreSQL
- Render PostgreSQL
- Vite
- CORS
- Git and GitHub

## Future Improvements

Future improvements could include:

- Adding more African countries.
- Adding filtering by African region.
- Adding sorting options.
- Adding more travel information for each country.
- Adding user accounts and favorite countries.
- Adding an interactive map of Africa.
- Deploying both the frontend and backend.

## License

Copyright 2026 Mohamed Alie Conteh

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at:

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.