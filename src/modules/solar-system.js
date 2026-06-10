import { getOrbitPlanets } from "./orbits.js";

export function renderSolarSystem(svgElement, planets) {
  const size = 800;
  svgElement.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svgElement.replaceChildren();

  const defs = createSvgElement("defs");
  defs.append(createSunGradient());
  svgElement.append(defs);

  const stars = createSvgElement("g");
  stars.setAttribute("aria-hidden", "true");
  stars.append(...createStars());
  svgElement.append(stars);

  const orbitsGroup = createSvgElement("g");
  orbitsGroup.setAttribute("aria-hidden", "true");

  getOrbitPlanets().forEach((planet) => {
    const orbit = createSvgElement("circle");
    orbit.setAttribute("class", "orbit");
    orbit.setAttribute("cx", "400");
    orbit.setAttribute("cy", "400");
    orbit.setAttribute("r", String(planet.orbit));
    orbitsGroup.append(orbit);
  });

  svgElement.append(orbitsGroup);

  const sun = createSvgElement("circle");
  sun.setAttribute("cx", "400");
  sun.setAttribute("cy", "400");
  sun.setAttribute("r", "28");
  sun.setAttribute("fill", "url(#sun-gradient)");
  svgElement.append(sun);

  planets.forEach((planet) => {
    const body = createSvgElement("circle");
    body.setAttribute("cx", String(planet.x));
    body.setAttribute("cy", String(planet.y));
    body.setAttribute("r", String(planet.size));
    body.setAttribute("fill", planet.color);
    body.setAttribute("stroke", "rgba(255,255,255,0.2)");
    body.setAttribute("stroke-width", "1");
    body.setAttribute("data-planet", planet.name);
    svgElement.append(body);

    const label = createSvgElement("text");
    label.setAttribute("class", "planet-label");
    label.setAttribute("x", String(planet.x + planet.size + 6));
    label.setAttribute("y", String(planet.y + 4));
    label.textContent = planet.name;
    svgElement.append(label);
  });
}

function createSvgElement(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function createSunGradient() {
  const gradient = createSvgElement("radialGradient");
  gradient.setAttribute("id", "sun-gradient");

  const stops = [
    ["0%", "#fff7c2", 1],
    ["40%", "#ffbe55", 1],
    ["100%", "#ff6d2f", 1],
  ];

  stops.forEach(([offset, color, opacity]) => {
    const stop = createSvgElement("stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    stop.setAttribute("stop-opacity", String(opacity));
    gradient.append(stop);
  });

  return gradient;
}

function createStars() {
  const coordinates = [
    [80, 120],
    [150, 240],
    [220, 80],
    [630, 130],
    [700, 260],
    [590, 520],
    [120, 610],
    [320, 690],
    [720, 610],
    [480, 90],
  ];

  return coordinates.map(([cx, cy]) => {
    const star = createSvgElement("circle");
    star.setAttribute("cx", String(cx));
    star.setAttribute("cy", String(cy));
    star.setAttribute("r", "1.6");
    star.setAttribute("fill", "rgba(255,255,255,0.55)");
    return star;
  });
}
