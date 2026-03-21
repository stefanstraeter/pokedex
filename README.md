# POKÉDEX – DYNAMIC POKÉMON ENCYCLOPEDIA

## Overview

**Pokédex** is a high-performance, interactive encyclopedia built with **Vanilla JavaScript** that interfaces with the **RESTful PokéAPI**. It allows users to browse, search, and explore the Pokémon universe through a sleek, responsive interface. The project focuses on efficient asynchronous data fetching, dynamic DOM manipulation, and modular architecture.

This project was developed as a technical milestone during my **Front-End Development training at Developer Akademie**, emphasizing API integration and advanced UI components like synchronized modals.

### Preview

![Pokédex Mockup](assets/img/pokedex_mockup.jpg)

### Live Demo

- **Link:** [View Live Project](https://stefanstraeter.github.io/pokedex/)

---

## Technical Architecture

The application is built with a modular mindset, separating the data-fetching layer from the UI logic and templating engine:

### Project Structure

- **`scripts/api.js`**: The core data layer. It handles all asynchronous `fetch` requests to the PokéAPI, including error handling and data normalization.
- **`scripts/templates.js`**: A dedicated UI-component library that generates semantic HTML strings for Pokémon cards and detailed views.
- **`scripts/modal.js`**: Manages the complex state of the detail view, including navigation (Next/Prev) and backdrop interactions.
- **`styles/`**: A highly modular CSS architecture, separating `variables.css` (design tokens), `layout.css`, and specific component styles.

---

## Key Features & Implementation

### Asynchronous Data Management

The app utilizes modern **ES6+ async/await** patterns to fetch data from the PokéAPI. It implements a "Load More" strategy to optimize initial page load speeds and minimize memory consumption by only requesting detailed stats when needed.

### Real-Time Search & Filtering

- **Live-Filter**: A high-performance search algorithm that filters the currently loaded Pokémon in real-time as the user types.
- **Efficient UI Updates**: The grid re-renders dynamically without full page reloads, providing a smooth, app-like experience.

### Advanced Detail View (Modal System)

- **Multi-Stage Data Fetching**: While the main grid shows basic info, clicking a card triggers a secondary fetch for deep-dive stats (abilities, base stats, weight/height).
- **Navigation Logic**: Users can cycle through Pokémon directly within the modal, requiring complex state tracking to sync the modal with the underlying data set.

### Responsive & Modular Design

- **CSS Variables**: Centralized color palettes based on Pokémon types, managed via `variables.css`.
- **Mobile-First Layout**: A fluid grid system (using Flexbox and CSS Grid) that scales seamlessly from single-column mobile views to multi-column desktop layouts.
- **Zalando Sans Typography**: Integration of custom web fonts for a premium, modern look.

---

## Getting Started

1. **Clone the repository:** `git clone https://github.com/stefanstraeter/pokedex`
2. **Launch:** Open `index.html` via a local server (e.g., VS Code Live Server) to allow for clean API requests.
3. **Usage:** Scroll to load more Pokémon, use the search bar to find specific entries, and click any card to see detailed combat stats.

---

## Author

**Stefan Straeter**

- GitHub: [@stefanstraeter](https://github.com/stefanstraeter/)
