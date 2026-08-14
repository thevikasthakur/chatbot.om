# The Chatbot.OM article publishing machine

One article publishes every day at `chatbot.om/blog/`. This is the sibling of
the machine in `voxcare-static` (customercare.om), sharing its architecture;
this document covers what is specific to this site. For the pipeline diagram,
setup, commands and troubleshooting, the sister's manual applies with the
paths and names below; everything else is identical.

## Who this blog is for

The small, message-first Omani business: two to ten people, enquiries
arriving on WhatsApp, the website and Instagram, the owner close to every
conversation. Customer care is one slice of the coverage, never the whole
diet: the lanes span selling in chat, WhatsApp practice, websites that
convert, running a small team, stories and Oman's seasons.

| Day | Lane | Series |
|---|---|---|
| Sunday | `chats-to-customers` | Chats Into Customers |
| Monday | `pulse` (news-driven) | Oman Digital Pulse |
| Tuesday | `whatsapp-at-work` | WhatsApp at Work |
| Wednesday | `website-working` | Your Website, Working |
| Thursday | `small-team-playbook` | Small Team Playbook |
| Friday | `weekend-read` | The Friday Story |
| Saturday | `season-ready` | Ready for the Rush |

## The two-site system (no duplicates, natural cross-links)

customercare.om writes for operations leads at organisations with staffed
phone lines and IVRs; this site writes for small message-first teams. The
split is enforced three ways:

1. **Different readers by design**: lane briefs, target-business rules and
   worked examples are sized for opposite ends of the market.
2. **Cross-site dedupe**: each generator reads the sister's
   `content/articles/` from disk, injects the sister's recent titles into the
   prompt as do-not-duplicate territory, and runs its near-duplicate check
   against both stores. This machine runs at 11:50/21:50 IST, deliberately
   after the sister's 10:35/20:35, so it sees the sister's article for the
   day before writing its own.
3. **Cross-recommendations, honestly**: when a problem here is phone-shaped
   (the phone line is the main channel, outbound calling, an inbox needing
   its own agent, IVR-scale organisations), the article recommends
   CustomerCare.OM with one natural link; the sister recommends Chatbot.OM
   when its article meets a small message-first business. At most one sister
   link per article, exempt from the sources[] rule, validated against the
   sister's real pages and articles at generation time. The rules come from
   `/comparison/`, which stays the source of truth for the split.

## Scheduled articles and what you see where

An article is live only on and after its `publishDate`, so a production build
never ships tomorrow's piece early. Local development does the opposite:
`npm run dev` shows every article in the store, including future-dated ones,
each marked with a lime `SCHEDULED` tag on the index and article page. That
way a freshly generated article never looks like it vanished.

Setting `CONTENT_AS_OF` opts back into strict filtering at any date, which is
what a build or a date-pinned check should use:

```bash
CONTENT_AS_OF=2026-08-16 npm run build   # build the site as it will look that day
```

The two seed articles are dated 15 and 16 August, the machine's first two
lane days, so they appear in dev immediately and go live on their dates.

## Names and paths specific to this repo

- Generator: `scripts/generate-daily-article.mjs`; brand rules enforce
  exactly `Chatbot.OM`, the CTA phrase is "Get Chatbot.OM", and the article
  must never claim the product answers phone calls.
- Env overrides: `CHATBOT_OM_GENERATION_DATE`, `CHATBOT_OM_CLAUDE_MODEL`.
- Success marker: `/tmp/chatbot-om-article-gen-success-<date>`.
- launchd label: `com.chatbot-om.article-generator` (plist example in
  `scripts/`), 11:50 and 21:50 host time (IST).
- llms.txt gains a Blog group via this repo's own `scripts/ai-readability.mjs`
  (which walks `.next/server/app`; article JSON lives in `content/articles/`,
  never under `public/`, which gitignores generated `.md`).
- Auth: the same `~/.claude/.oauth-token` used by every generator on this
  machine.

```bash
# setup
cp scripts/com.chatbot-om.article-generator.plist.example \
   ~/Library/LaunchAgents/com.chatbot-om.article-generator.plist
launchctl load ~/Library/LaunchAgents/com.chatbot-om.article-generator.plist
tail -f scripts/cron.log
```
