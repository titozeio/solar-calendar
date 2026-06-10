import { normalizeDateParts, extractDateParts } from "./date-utils.js";

export function createDatePicker(formElement, { initialDate, onChange }) {
  const daySelect = formElement.querySelector("#day-select");
  const monthSelect = formElement.querySelector("#month-select");
  const yearInput = formElement.querySelector("#year-input");

  populateDayOptions(daySelect);
  populateMonthOptions(monthSelect);

  const applyDate = (date) => {
    const parts = extractDateParts(date);
    daySelect.value = String(parts.day);
    monthSelect.value = String(parts.month);
    yearInput.value = String(parts.year);
  };

  const emitDate = () => {
    const nextDate = normalizeDateParts({
      year: Number(yearInput.value),
      month: Number(monthSelect.value),
      day: Number(daySelect.value),
    });

    onChange(nextDate);
  };

  applyDate(initialDate);

  formElement.addEventListener("change", emitDate);

  yearInput.addEventListener("blur", emitDate);
}

function populateDayOptions(select) {
  for (let day = 1; day <= 31; day += 1) {
    select.append(createOption(day, String(day)));
  }
}

function populateMonthOptions(select) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month, index) => {
    select.append(createOption(index + 1, month));
  });
}

function createOption(value, label) {
  const option = document.createElement("option");
  option.value = String(value);
  option.textContent = label;
  return option;
}
