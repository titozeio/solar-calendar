export function extractDateParts(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

export function normalizeDateParts({ year, month, day }) {
  const safeYear = clampNumber(year, 1900, 2100, new Date().getFullYear());
  const safeMonth = clampNumber(month, 1, 12, 1);
  const maxDay = getDaysInMonth(safeYear, safeMonth);
  const safeDay = clampNumber(day, 1, maxDay, 1);

  return new Date(safeYear, safeMonth - 1, safeDay, 12, 0, 0, 0);
}

function clampNumber(value, min, max, fallback) {
  if (!Number.isFinite(value)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, Math.trunc(value)));
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
