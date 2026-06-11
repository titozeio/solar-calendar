import { createDatePicker } from "./modules/date-picker.js";
import { easeOutCubic, getAnimationDurationMs } from "./modules/animation.js";
import { calculatePlanetPositions, getDefaultDate, getDisplayDate } from "./modules/orbits.js";
import { createSolarSystemRenderer } from "./modules/solar-system.js";

const solarSystem = document.querySelector("#solar-system");
const summary = document.querySelector("#selection-summary");
const picker = document.querySelector("#date-form");
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

const state = {
  selectedDate: getDefaultDate(),
  displayedDate: getDefaultDate(),
  displayedPlanets: calculatePlanetPositions(getDefaultDate()),
  animationFrameId: null,
};

const solarSystemRenderer = createSolarSystemRenderer(solarSystem);
solarSystemRenderer.setPlanets(state.displayedPlanets);

const updateSummary = (date) => {
  summary.textContent = `Selected date: ${getDisplayDate(date)}`;
};

const stopAnimation = () => {
  if (state.animationFrameId !== null) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }
};

const animateToDate = (nextDate) => {
  const targetPlanets = calculatePlanetPositions(nextDate);
  const startDate = state.displayedDate;

  stopAnimation();

  if (nextDate.getTime() === startDate.getTime()) {
    state.displayedPlanets = targetPlanets;
    state.displayedDate = nextDate;
    solarSystemRenderer.setPlanets(targetPlanets);
    return;
  }

  if (prefersReducedMotion) {
    state.displayedPlanets = targetPlanets;
    state.displayedDate = nextDate;
    solarSystemRenderer.setPlanets(targetPlanets);
    return;
  }

  const durationMs = getAnimationDurationMs(startDate, nextDate);

  if (durationMs === 0) {
    state.displayedPlanets = targetPlanets;
    state.displayedDate = nextDate;
    solarSystemRenderer.setPlanets(targetPlanets);
    return;
  }

  const startTime = performance.now();

  const step = (now) => {
    const elapsed = now - startTime;
    const rawProgress = Math.min(elapsed / durationMs, 1);
    const easedProgress = easeOutCubic(rawProgress);
    const interpolatedDate = new Date(startDate.getTime() + (nextDate.getTime() - startDate.getTime()) * easedProgress);
    const interpolatedPlanets = calculatePlanetPositions(interpolatedDate);

    state.displayedPlanets = interpolatedPlanets;
    solarSystemRenderer.setPlanets(interpolatedPlanets);

    if (rawProgress < 1) {
      state.animationFrameId = requestAnimationFrame(step);
      return;
    }

    state.animationFrameId = null;
    state.displayedPlanets = targetPlanets;
    state.displayedDate = nextDate;
  };

  state.animationFrameId = requestAnimationFrame(step);
};

createDatePicker(picker, {
  initialDate: state.selectedDate,
  onChange(nextDate) {
    state.selectedDate = nextDate;
    updateSummary(nextDate);
    animateToDate(nextDate);
  },
});

updateSummary(state.selectedDate);
animateToDate(state.selectedDate);
