"use strict";

/**
 * Run TypeScript code without compiling it
 * ts-node register helps compiling and importing TypeScript modules
 * credit:
 * https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescriptlang-org/gatsby-config.js
 * see:
 * https://github.com/gatsbyjs/gatsby/issues/1457
 * https://github.com/assainov/extensive.one/blob/master/gatsby-config.js
 */
require("ts-node").register();

// @ts-ignore
module.exports = require("./gatsby-config.ts");
