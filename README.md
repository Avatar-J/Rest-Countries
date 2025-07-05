# 🌍 RestCountries Application

This project is an Angular-based web application for exploring data about countries from the [REST Countries API](https://restcountries.com/). It includes features like search, region-based filtering, detailed views, theme switching (light/dark mode), and global state management using NgRx.

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

---

## 🚀 Features

- View a list of countries with key information (name, region, population, flag).
- Search countries by name (full and partial matches).
- Filter countries by region (Africa, Asia, Europe, Americas, Oceania).
- Click on a country to view detailed information.
- View neighboring border countries and navigate to their detail pages.
- Toggle between light and dark themes.
- Fully responsive UI optimized for mobile, tablet, and desktop.
- Global state management with NgRx for countries, search, region filter, and theme.

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components (e.g., country-card)
│   ├── pages/               # Route-level components (e.g., country-list, country-details)
│   ├── services/            # API service for REST Countries
│   ├── store/               # NgRx: actions, reducers, selectors, effects
│   ├── models/              # Interfaces (e.g., Country model)
│   └── app.config.ts        # Application-wide providers (NgRx store, effects)
```

---

## ⚙️ Setup & Run Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/rest-countries.git
cd rest-countries
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the application locally**

```bash
ng serve
```

4. **View in browser**

Open `http://localhost:4200/`

---

## 🌐 Routing Overview

| Route            | Component                 | Description                       |
| ---------------- | ------------------------- | --------------------------------- |
| `/`              | `CountryListComponent`    | Lists all countries               |
| `/details/:code` | `CountryDetailsComponent` | Shows detailed info for a country |

---

## 📦 API Consumption

- Uses the [REST Countries v3 API](https://restcountries.com/v3.1/all)
- Endpoints used:
  - `/all` – fetch all countries
  - `/alpha/{code}` – fetch country by 3-letter code
  - `/alpha?codes={code1,code2}` – fetch multiple countries by codes

API calls are handled via a dedicated service: `CountryApiService`.

---

## 🧠 NgRx Store Implementation

### ✔ State Slices

- `country`: manages country data, loading state, search query, and region filter.
- `theme`: manages light/dark mode.

### ✔ Actions

- `loadCountries`, `loadCountriesSuccess`, `loadCountriesFailure`
- `setSearchQuery`, `setFilterRegion`
- `switchTheme`

### ✔ Reducers

- Handle updates to each part of the state based on dispatched actions.

### ✔ Selectors

- `selectAllCountries`, `selectFilteredCountries`, `selectLoading`, `selectTheme`

### ✔ Effects

- `loadCountries` effect makes API call and dispatches `success` or `failure` actions.
- `loadCountriesByCode` effect makes API call and dispatches `success` or `failure` actions.

---

## 🎨 Theme Switching

- Theme preference is managed globally with NgRx.
- `switchTheme` toggles between dark and light modes.
- The current theme is applied using conditional class bindings (e.g., `ngClass="{'dark-theme': isDarkTheme}"`).
- Styles adapt using SCSS with class-specific overrides.

---
