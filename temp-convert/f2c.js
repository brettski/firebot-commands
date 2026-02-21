const param0 = $arg[0];
const fahrenheit = parseFloat(param0);
if (isNaN(fahrenheit)) {
  return;
}
const celsius = (fahrenheit - 32) / 1.8;

return `${fahrenheit}°F = ${celsius.toFixed(1)}°C`;

// output set as
// $effectOutput[jsResult]
