const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

export function getAnimationDurationMs(fromDate, toDate) {
  const yearsApart = Math.abs(toDate.getTime() - fromDate.getTime()) / MS_PER_YEAR;

  if (yearsApart < 1) {
    return 1000;
  }

  if (yearsApart < 10) {
    return 2000;
  }

  if (yearsApart <= 100) {
    return 3000;
  }

  return 4000;
}

export function easeOutCubic(progress) {
  const clampedProgress = clampProgress(progress);
  const invertedProgress = 1 - clampedProgress;
  return 1 - invertedProgress * invertedProgress * invertedProgress;
}

function clampProgress(progress) {
  if (progress < 0) {
    return 0;
  }

  if (progress > 1) {
    return 1;
  }

  return progress;
}
