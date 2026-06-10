import { createDatePicker } from "./modules/date-picker.js";
import { calculatePlanetPositions, getDefaultDate, getDisplayDate } from "./modules/orbits.js";
import { renderSolarSystem } from "./modules/solar-system.js";

const solarSystem = document.querySelector("#solar-system");
const summary = document.querySelector("#selection-summary");
const picker = document.querySelector("#date-form");

const state = {
  date: getDefaultDate(),
};

const updateView = () => {
  const positions = calculatePlanetPositions(state.date);
  renderSolarSystem(solarSystem, positions);
  summary.textContent = `Selected date: ${getDisplayDate(state.date)}`;
};

createDatePicker(picker, {
  initialDate: state.date,
  onChange(nextDate) {
    state.date = nextDate;
    updateView();
  },
});

updateView();
