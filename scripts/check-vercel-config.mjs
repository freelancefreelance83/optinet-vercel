#!/usr/bin/env node
/**
 * Pre-push verification:
 *  1. vercel.json exists at the project root
 *  2. vercel.json is tracked by Git
 *  3. vercel.json contains a SPA rewrite to /index.html
 *  4. the Vite build succeeds
 *
 * Usage: node scripts/check-vercel-config.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "vercel.json");

const fail = (msg) => {
  console.error(`\u274c ${msg}`);
  process.exit(1);
};
const ok = (msg) => console.log(`\u2705 ${msg}`);

// 1. existence
if (!existsSync(file)) fail("vercel.json is missing at the project root.");
ok("vercel.json exists at the project root");

// 2. tracked by git
try {
  execSync("git ls-files --error-unmatch vercel.json", {
    cwd: root,
    stdio: "ignore",
  });
  ok("vercel.json is tracked by Git");
} catch {
  fail("vercel.json is not tracked by Git (run: git add vercel.json).");
}

// 3. SPA rewrite present
let config;
try {
  config = JSON.parse(readFileSync(file, "utf8"));
} catch (e) {
  fail(`vercel.json is not valid JSON: ${e.message}`);
}
const rewrites = config.rewrites ?? [];
const hasSpaRewrite = rewrites.some(
  (r) => r?.destination === "/index.html" && /\(\.\*\)|:path\*/.test(r?.source ?? ""),
);
if (!hasSpaRewrite) fail('vercel.json has no SPA rewrite to "/index.html".');
ok("SPA rewrite to /index.html is configured");

// 4. build
console.log("\n\u25b6 Running Vite build...");
try {
  execSync("npm run build", { cwd: root, stdio: "inherit" });
} catch {
  fail("Vite build failed \u2014 do not push.");
}
ok("Vite build succeeded");

console.log("\n\u2705 All pre-push checks passed.");
