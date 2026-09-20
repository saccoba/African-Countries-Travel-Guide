# WEB103 Project 1 - Explore Africa

Submitted by: **Mohamed Alie Conteh**

About this web app: **Explore Africa is a travel guide that allows users to discover selected African countries. The homepage displays each country as an interactive card containing its flag, capital, region, and popular attraction. Users can select a country to view a detailed page containing all of its information.**

Time spent: **3 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes**
- [x] **The user can click on each item in the list to see a detailed view of it, including all data fields**
  - [x] **Each detail view has a unique endpoint**
  - Examples:
    - `/countries/sierra-leone`
    - `/countries/ghana`
    - `/countries/nigeria`
    - `/countries/kenya`
    - `/countries/south-africa`
    - `/countries/egypt`
- [x] **The web app serves an appropriate 404 page when no matching country route is defined**
- [x] **The web app is styled using PicoCSS**

## Optional Features

The following **optional** features are implemented:

- [x] **The web app displays the countries in a unique card layout**
- [x] **The country cards have staggered entrance animations**
- [x] **The country images enlarge when the user hovers over a card**

## Additional Features

The following **additional** features are implemented:

- [x] Responsive layout for desktop, tablet, and mobile screens
- [x] Country flags displayed using external image links
- [x] Back-to-home navigation on every country detail page
- [x] Custom African-inspired colors and styling
- [x] Interactive card hover effects
- [x] Dynamically generated country cards using JavaScript

## Video Walkthrough

Here's a walkthrough of the implemented features:

<img src="YOUR-GIF-LINK-HERE" title="Explore Africa Video Walkthrough" width="" alt="Explore Africa Video Walkthrough" />

GIF created with **ScreenToGif**.

The walkthrough demonstrates:

1. The Explore Africa homepage and website title
2. Six unique African country cards
3. At least three displayed attributes for every country
4. The card animations and hover effects
5. Selecting different countries
6. The unique URL for each country detail page
7. All country fields displayed on the detail page
8. The custom 404 page
9. The responsive PicoCSS styling

## Notes

One challenge I encountered was creating a unique detail page for each country without using a frontend framework. I solved this by reading the URL path with JavaScript, finding the matching country using its slug, and dynamically displaying its information. I also created a custom 404 view for country routes that do not match any country in the data.

Another challenge was ensuring that every country card linked to the correct detail route. I solved this by giving every country a unique `slug` field and using it to construct the country URL.

## License

Copyright 2026 Mohamed Alie Conteh

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.