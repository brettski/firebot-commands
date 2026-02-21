const param0 = $arg[0];
const celsius = parseFloat(param0);
if (isNaN(celsius)) {
  return;
}
const fahrenheit = celsius * 1.8 + 32;

return `${celsius}°C = ${fahrenheit.toFixed(0)}°F`;

// output set as
// $effectOutput[jsResult]
