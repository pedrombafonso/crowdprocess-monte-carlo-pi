function Run() {
  var inQuarterCircle = 0,
      n = 100000000,
      i = n;

  while (i--) {
    if (Math.pow(Math.random(), 2) + Math.pow(Math.random(), 2) < 1) {
      inQuarterCircle++;
    }
  };

  var pi = 4 * inQuarterCircle / n;
  return pi;
}