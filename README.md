# OfficeMaker n8n Node Starter

Starter repository for an `n8n` integration that targets the public OfficeMaker free API at `https://free.officemaker.ai`.

## What is included

- a tiny OfficeMaker client in `src/officemaker-client.mjs`
- sample document builders for:
  - AI-generated letters
  - custom quotes
  - briefing decks
- runnable scripts in `scripts/`
- an importable `n8n` HTTP workflow in `n8n/workflows/create-ai-letter.json`

## Quick start

```bash
npm run create:letter
npm run create:quote
npm run create:deck
```

Optional base URL override:

```bash
OFFICEMAKER_BASE_URL=https://free.officemaker.ai npm run create:letter
```

## Current scope

This repo is a starter project, not a published `n8n` community node yet. It is intended to prove the first OfficeMaker action surface:

- create Word document
- create Excel workbook
- create PowerPoint deck
- later: schema lookup and preview generation

## Next build steps

1. Wrap the create calls in a real `n8n` node package.
2. Add credentials handling and typed parameter fields.
3. Publish a polished community node once the request/response surface is stable.
