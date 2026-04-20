# POKÉDEX – Dynamic Pokémon Encyclopedia

An interactive Pokédex built with Vanilla JavaScript and the PokéAPI.

Browse, search, and explore Pokémon with a fast, responsive interface powered by asynchronous data loading and dynamic UI rendering.

🔗 **Live Demo:** https://stefanstraeter.github.io/pokedex/

---

## Preview

![Pokédex Preview](assets/img/pokedex_mockup.jpg)

---

## Features

- Dynamic Pokémon loading via PokéAPI
- Real-time search and filtering
- “Load More” pagination for performance optimization
- Detailed modal view with extended stats
- Next/Previous navigation inside modal
- Responsive design (mobile & desktop)
- Type-based color system using CSS variables

---

## Purpose

This project was developed as part of a frontend training program at the Developer Akademie.

It demonstrates how to build a dynamic, API-driven web application using Vanilla JavaScript without relying on frontend frameworks.

Focus areas include:

- asynchronous data fetching with modern JavaScript (async/await)
- separation of data layer and UI rendering
- building reusable UI templates
- managing UI state across dynamic components (modal system)

---

## Getting Started

Clone the repository:

```id="x91kpl"
git clone https://github.com/stefanstraeter/pokedex
cd pokedex
```

Run the project using a local development server (e.g. VS Code Live Server).

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- PokéAPI (REST API)

---

## Project Structure

```id="m4z8qp"
scripts/
  api.js
  templates.js
  modal.js
styles/
```

- **scripts/api.js** – Handles all API requests, error handling, and data processing
- **scripts/templates.js** – Generates reusable UI components (cards, detail views)
- **scripts/modal.js** – Controls modal logic, navigation, and state
- **styles/** – Modular CSS structure (layout, variables, components)

---

## Architecture Highlights

- **Separation of Concerns**
  Clear split between data fetching, UI rendering, and interaction logic.

- **Asynchronous Data Strategy**
  Efficient loading using async/await and staged data fetching (list vs. detail view).

- **Template-Based Rendering**
  Reusable HTML generation for consistent and maintainable UI components.

- **Dynamic UI Updates**
  Real-time DOM updates without page reloads for a smooth user experience.

---

## Technical Challenges

### API Data Handling

Managing asynchronous requests, error states, and partial data loading while keeping the UI responsive.

### Modal State Synchronization

Keeping navigation (Next/Previous) in sync with dynamically loaded data.

### Performance Optimization

Reducing initial load time using incremental data loading (“Load More” pattern).

### Real-Time Search

Implementing efficient filtering without unnecessary re-renders or performance drops.

---

## Author

**Stefan Straeter**

GitHub: https://github.com/stefanstraeter/
