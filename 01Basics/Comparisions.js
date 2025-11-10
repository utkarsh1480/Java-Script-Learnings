// null and undefined are equal only to each other (with ==) and not to any other value.

// console.log(null == undefined);  // ✅ true
// console.log(null === undefined); // ❌ false


// But when compared with numbers, special rules apply 👇

// console.log(null == 0);  // ❌ false
// console.log(undefined == 0); // ❌ false
// console.log(Number(null));     // 0
// console.log(Number(undefined)); // NaN


// 👉 null converts to 0 only in numeric comparisons (like <, >, >=, <=), not in ==.
// Why?

// Because:

// For relational operators (<, >, etc.), JS converts both sides to numbers.

// Number(null) = 0.

// Rule N0 - 03
//undefined in numeric comparisons
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false
// console.log(undefined == 0); // false


// Because:

// Number(undefined) = NaN

// Any comparison with NaN → always false.

// So:

// null >= 0 → 0 >= 0 → true

// But null == 0 → false (because == doesn’t convert null that way)

// ⚠️ Tricky interview question!

// 4️⃣ Empty string ("") and space (" ")
// ➤ Empty string ""

// When used in numeric comparison or ==:

// console.log("" == 0);     // ✅ true   (because "" → 0)
// console.log("" == false); // ✅ true   (false → 0, "" → 0)
// console.log("" == null);  // ❌ false

// ➤ String with space " "

// A space string is not empty — it contains one space character.

// When converted to a number:


// ------------------------------------- Cheat Sheet-------------
// Perfect 🔥 — here’s your **complete “JavaScript Comparison & Type Coercion Cheat Sheet”** —
// exactly the kind of thing that helps you **crack theory + MCQ rounds + tricky output questions** in placements 🚀

// ---

// ## 🧠 1️⃣ Equality Operators Overview

// | Operator | Name              | Type Conversion             | Example             |
// | -------- | ----------------- | --------------------------- | ------------------- |
// | `==`     | Loose equality    | ✅ Converts before comparing | `5 == "5" → true`   |
// | `===`    | Strict equality   | ❌ No conversion             | `5 === "5" → false` |
// | `!=`     | Loose inequality  | ✅ Converts                  | `5 != "5" → false`  |
// | `!==`    | Strict inequality | ❌ No conversion             | `5 !== "5" → true`  |

// ---

// ## 🧩 2️⃣ Type Conversion Rules for `==`

// JavaScript automatically converts values before comparing if the types differ.

// | Conversion Type        | Example                      | Explanation              |
// | ---------------------- | ---------------------------- | ------------------------ |
// | **String → Number**    | `"5" == 5` → `true`          | `"5"` converted to `5`   |
// | **Boolean → Number**   | `true == 1` → `true`         | `true → 1`, `false → 0`  |
// | **null & undefined**   | `null == undefined` → `true` | Equal only to each other |
// | **Object → Primitive** | `[1] == "1"` → `true`        | `[1].toString()` → `"1"` |

// ---

// ## ⚙️ 3️⃣ `null` and `undefined` Rules

// | Expression           | Result  | Reason                             |
// | -------------------- | ------- | ---------------------------------- |
// | `null == undefined`  | ✅ true  | Both represent “no value”          |
// | `null === undefined` | ❌ false | Different types                    |
// | `null == 0`          | ❌ false | Special case                       |
// | `null >= 0`          | ✅ true  | `null → 0` for numeric comparisons |
// | `undefined == 0`     | ❌ false | `undefined → NaN`                  |
// | `undefined > 0`      | ❌ false | `NaN` is never > or < anything     |

// ---

// ## 🔢 4️⃣ String, Boolean, and Number Conversions

// | Expression     | Result | Reason                    |
// | -------------- | ------ | ------------------------- |
// | `"0" == 0`     | ✅ true | String `"0"` → number `0` |
// | `" " == 0`     | ✅ true | Space string `" "` → 0    |
// | `"" == 0`      | ✅ true | Empty string → 0          |
// | `false == 0`   | ✅ true | `false → 0`               |
// | `true == 1`    | ✅ true | `true → 1`                |
// | `false == "0"` | ✅ true | Both → 0                  |
// | `true == "1"`  | ✅ true | Both → 1                  |

// ---

// ## 🧮 5️⃣ Objects, Arrays, and Strings

// When an **object or array** is compared, JS tries to convert it to a **primitive (string or number)**.

// | Expression                | Result  | Explanation                           |
// | ------------------------- | ------- | ------------------------------------- |
// | `[] == 0`                 | ✅ true  | `[].toString()` → `""`, then `"" → 0` |
// | `[] == ""`                | ✅ true  | `[].toString()` → `""`                |
// | `[1] == "1"`              | ✅ true  | `[1].toString()` → `"1"`              |
// | `[1,2] == "1,2"`          | ✅ true  | Array → `"1,2"`                       |
// | `[] == false`             | ✅ true  | `[] → "" → 0`, `false → 0`            |
// | `[0] == false`            | ✅ true  | `[0] → "0" → 0`                       |
// | `{}` == `[object Object]` | ❌ false | Object converted differently          |

// ---

// ## ⚖️ 6️⃣ Falsy Values (Important for `if` and `==`)

// These values act like **false** when converted to Boolean:

// | Falsy Value | Type      |
// | ----------- | --------- |
// | `false`     | boolean   |
// | `0`         | number    |
// | `-0`        | number    |
// | `""`        | string    |
// | `null`      | object    |
// | `undefined` | undefined |
// | `NaN`       | number    |

// Everything else → **truthy** (`"0"`, `" "`, `[]`, `{}`, `"false"`)

// ---

// ## 🧩 7️⃣ Relational Comparisons (`<`, `>`, `<=`, `>=`)

// Rules:

// 1. If both operands are strings → compared **lexicographically**.
// 2. Otherwise → both converted to numbers.

// **Examples:**

// ```js
// console.log("2" > "12");  // true (string comparison)
// console.log(2 > "12");    // false (numeric comparison)
// console.log(null >= 0);   // true (null → 0)
// console.log(undefined > 0); // false (undefined → NaN)
// ```

// ---

// ## 🚀 8️⃣ Trick Interview Questions (with Explanations)

// | Expression          | Output  | Why                            |
// | ------------------- | ------- | ------------------------------ |
// | `0 == "0"`          | ✅ true  | string converted to 0          |
// | `0 === "0"`         | ❌ false | different types                |
// | `false == "false"`  | ❌ false | `"false"` → NaN                |
// | `false == "0"`      | ✅ true  | both → 0                       |
// | `null == 0`         | ❌ false | rule exception                 |
// | `null >= 0`         | ✅ true  | null → 0                       |
// | `undefined == null` | ✅ true  | special case                   |
// | `" " == 0`          | ✅ true  | space → 0                      |
// | `[] == 0`           | ✅ true  | `[].toString()` → `"" → 0`     |
// | `[null] == 0`       | ✅ true  | `[null].toString()` → `"" → 0` |
// | `["0"] == 0`        | ✅ true  | `"0" → 0`                      |
// | `[] == []`          | ❌ false | different references           |
// | `{} == {}`          | ❌ false | different references           |
// | `NaN == NaN`        | ❌ false | NaN never equals anything      |
// | `isNaN(NaN)`        | ✅ true  | true because it’s NaN          |

// ---

// ## 🧾 9️⃣ Safe Coding Practices

// ✅ Always use **strict equality (`===`)** for comparisons
// ✅ Avoid relying on automatic type coercion
// ✅ Use `Number()`, `Boolean()`, or `String()` explicitly when needed

// **Example:**

// ```js
// // Bad ❌
// if (x == "0") { ... }

// // Good ✅
// if (Number(x) === 0) { ... }
// ```

// ---

// ## 🧩 10️⃣ Quick Memory Tip (for interviews)

// 🔹 `==` tries to make things **equal by force**
// 🔹 `===` checks if they’re **already equal in both value & type**
// 🔹 `null` and `undefined` are only equal to **each other**
// 🔹 `NaN` is **never equal** to anything (even itself)
// 🔹 `" "` (space) → `0` in numeric comparison
// 🔹 `[]` → `""` → `0`
// 🔹 Always use `===` in real code ✅

// ---

// Would you like me to give you a **set of 10 JavaScript output questions** based on these comparisons (like ones asked in TCS / Infosys / Accenture / product-based tests)?
// They’re great for practicing and testing your understanding.
// // 