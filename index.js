const n = false && 410520000;
function init(n=42) {
  const map = new Map();
  if (isFinite(n)) for (let i = 0; i < n; i++) {
    // map preserves the order of insertion
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Parameters
    //
    map.set(i => i, i);
  };
  return map;
};
