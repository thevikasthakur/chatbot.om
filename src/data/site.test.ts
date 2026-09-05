/**
 * Run: npm test
 *
 * `selfServeUrl` decides whether a second, account-requiring path appears on
 * a page whose badges promise "No account needed". The default therefore has
 * to be OFF, and these tests pin that down.
 *
 * The value is computed at module load from process.env, so each case sets the
 * variable and then imports a fresh copy via a cache-busting query string.
 */
import test from "node:test";
import assert from "node:assert/strict";

const loadSite = async (appUrl?: string) => {
  if (appUrl === undefined) delete process.env.NEXT_PUBLIC_APP_URL;
  else process.env.NEXT_PUBLIC_APP_URL = appUrl;
  // Fresh module instance so the top-level env read runs again.
  return import(`./site.ts?case=${encodeURIComponent(String(appUrl))}`);
};

test("self-serve is OFF unless NEXT_PUBLIC_APP_URL is set", async () => {
  const { selfServeUrl } = await loadSite(undefined);
  assert.equal(selfServeUrl, null);
});

test("an empty or whitespace-only value stays OFF", async () => {
  assert.equal((await loadSite("")).selfServeUrl, null);
  assert.equal((await loadSite("   ")).selfServeUrl, null);
});

test("a configured base URL produces the onboarding link with the src hand-off", async () => {
  const { selfServeUrl } = await loadSite("https://app.chatbot.om");
  assert.equal(selfServeUrl, "https://app.chatbot.om/agents/create?src=chatbot.om");
});

test("a trailing slash does not produce a double slash", async () => {
  const { selfServeUrl } = await loadSite("https://app.chatbot.om/");
  assert.equal(selfServeUrl, "https://app.chatbot.om/agents/create?src=chatbot.om");
  assert.ok(!selfServeUrl.includes("//agents"));
});

test("the src value stays equal to site.domain, which the app matches as a hostname", async () => {
  const mod = await loadSite("https://app.chatbot.om");
  assert.ok(mod.selfServeUrl.endsWith(`?src=${mod.site.domain}`));
});
