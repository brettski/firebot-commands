/* purposely a single file app */

const baseWheelItems = ["🪨", "⛏️", "🍺", "⛰️", "🪓", "🧔‍♀️", "💎"];
const wheelItems = [
  "🪨",
  "🪨",
  "🪨",
  "🪨",
  "⛏️",
  "⛏️",
  "⛏️",
  "⛏️",
  "🍺",
  "🍺",
  "🍺",
  "🍺",
  "⛰️",
  "⛰️",
  "⛰️",
  "🪓",
  "🪓",
  "🧔‍♀️",
  "🧔‍♀️",
  "💎",
];

function getRandomInt2(min, max) {
  if (min > max) {
    throw new Error("Minimum should be less than or equal to maximum.");
  }
  const range = max - min + 1;
  const array = new Uint32Array(1); // Create a buffer for one 32-bit integer
  crypto.getRandomValues(array);

  return min + (array[0] % range);
}
function getRandomInt(min, max) {
  if (min > max) {
    throw new Error("Minimum should be less than or equal to maximum.");
  }
  // +1 makes the 'max' value inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCount(wheels, item) {
  return wheels.filter((wi) => wi === item).length;
}

function getWinMultiplier(wheels) {
  const gem = getCount(wheels, "💎");
  const beard = getCount(wheels, "🧔‍♀️");
  const axe = getCount(wheels, "🪓");
  const mountain = getCount(wheels, "⛰️");
  const beer = getCount(wheels, "🍺");
  const pick = getCount(wheels, "⛏️");
  const rock = getCount(wheels, "🪨");

  // console.log(gem, beard, axe, mountain, beer, pick, rock);

  let winMultiplier = 0;
  if (beer === 2 && pick === 1) {
    winMultiplier = 1;
  } else if (pick === 2 && beer === 1) {
    winMultiplier = 3;
  } else if (rock === 3) {
    winMultiplier = 1;
  } else if (pick === 3) {
    winMultiplier = 10;
  } else if (beer === 3) {
    winMultiplier = 20;
  } else if (mountain == 3) {
    winMultiplier = 50;
  } else if (axe == 3) {
    winMultiplier = 200;
  } else if (beard === 3) {
    winMultiplier = 500;
  } else if (gem === 3) {
    winMultiplier = 1000;
  } else if (axe === 2) {
    winMultiplier = 20;
  } else if (axe === 1) {
    winMultiplier = 3;
  } else if (beer === 2) {
    winMultiplier = 4;
  } else if (beer === 1) {
    winMultiplier = 2;
  } else if (rock >= 1) {
    winMultiplier = 1;
  }

  return winMultiplier;
}

export function spin() {
  const wheelSize = wheelItems.length - 1;
  const result = [
    wheelItems[getRandomInt(0, wheelSize)],
    wheelItems[getRandomInt(0, wheelSize)],
    wheelItems[getRandomInt(0, wheelSize)],
  ];

  const wheelsView = `[--${result[0]}--${result[1]}--${result[2]}--]`;
  console.log(wheelsView);
  const winMultiplier = getWinMultiplier(result);
  console.log(`You win ${winMultiplier}x`);
  return { wheelsView, winMultiplier, result };
}

spin();
