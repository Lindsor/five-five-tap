'use strict';

/**
 * The encoding/decoding grid to use.
 * @type {Array}
 */
const grid = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['L', 'M', 'N', 'O', 'P'],
  ['Q', 'R', 'S', 'T', 'U'],
  ['V', 'W', 'X', 'Y', 'Z']
];

/**
 * Decrypts the passed in cypher using the five by five marine encryption.
 * @return {String} The decoded cypher string.
 */
exports.decrypt = function() {
  const cypher = arguments[0] || "";
  const text = [];

  //Validate passed in cypher.
  if (typeof cypher !== "string" || cypher.length === 0 || cypher.length % 2 !== 0) {
    throw new Error("The provided cypher: '" + cypher + "' is not valid.");
  }

  //Loop through the cypher and grab the corresponding 
  for (let i = 0, l = cypher.length; i < l; i += 2) {
    const row = parseInt(cypher.charAt(i), 10) - 1;
    const col = parseInt(cypher.charAt(i + 1), 10) - 1;

    text.push(grid[row][col]);
  }

  return text.join("");
};

/**
 * Encrypts the passed in text using the five by five marine algorythm.
 * @return {String}   The encrypted string.
 */
exports.encrypt = function() {
  let text = arguments[0] || "";
  const cypher = [];

  //Validate the passed in text.
  if (typeof text !== "string") {
    throw new Error("The provided cypher: '" + cypher + "' is not valid.");
  } else if (text.length === 0) {
    return "";
  }

  text = text.toUpperCase().replace(/\s+/g, "").replace(/k/gi, "C");

  //Loop through the text and encode it.
  text.split("").forEach(function(t) {
    for (let i = 0, li = grid.length; i < li; i++) {
      for (let j = 0, lj = grid[i].length; j < lj; j++) {
        if (t === grid[i][j]) {
          cypher.push((i + 1) + "" + (j + 1));
          break;
        }
      }
    }
  });

  return cypher.join("");
};
