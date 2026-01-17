console.log("running set deaths...");
var param = parameters[0];
console.log("param0", param);
var newVal = 0;
if (!Number.isNaN(param)) {
  newVal = Number.parseInt(param);
}
return newVal;

// next is update counter effect, update to `$effectOutput[jsResult]`
// next chat something like `Death ☠️ count set to $counter[deaths]`
