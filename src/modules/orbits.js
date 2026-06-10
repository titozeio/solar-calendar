import { extractDateParts } from "./date-utils.js";

const PLANETS = [
  { name: "Mercury", orbit: 66, size: 5, periodDays: 88, color: "#b6b2aa" },
  { name: "Venus", orbit: 98, size: 8, periodDays: 225, color: "#e5c07b" },
  { name: "Earth", orbit: 130, size: 8, periodDays: 365.25, color: "#7cc7ff" },
  { name: "Mars", orbit: 162, size: 6, periodDays: 687, color: "#ff8c5a" },
  { name: "Jupiter", orbit: 206, size: 14, periodDays: 4333, color: "#d6b08a" },
  { name: "Saturn", orbit: 252, size: 12, periodDays: 10759, color: "#f0d38a" },
];

const REFERENCE_DATE = new Date(2000, 0, 1, 12, 0, 0, 0);

export function getDefaultDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
}

export function calculatePlanetPositions(date) {
  const daysSinceReference = (date.getTime() - REFERENCE_DATE.getTime()) / 86400000;

  return PLANETS.map((planet) => {
    const angle = ((daysSinceReference / planet.periodDays) * Math.PI * 2) % (Math.PI * 2);
    const centerX = 400;
    const centerY = 400;
    const x = centerX + Math.cos(angle) * planet.orbit;
    const y = centerY + Math.sin(angle) * planet.orbit;

    return {
      ...planet,
      angle,
      x,
      y,
    };
  });
}

export function getDisplayDate(date) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(date);
}

export function getOrbitPlanets() {
  return PLANETS;
}
