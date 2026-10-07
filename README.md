# OfficeMaker + n8n — AI Word, Excel and PowerPoint workflow starter

This repository demonstrates how **n8n** can orchestrate a workflow while **OfficeMaker** acts as the document execution layer that creates native Word (`.docx`), Excel (`.xlsx`) and PowerPoint (`.pptx`) files.

OfficeMaker is an AI document-generation and workflow-automation platform. The integration pattern is:

**n8n trigger / data processing → structured JSON → OfficeMaker document API → native Office file**

This is especially useful when an n8n workflow needs to finish with a proposal, report, workbook, board pack or presentation instead of leaving the result as chat text.

## Canonical OfficeMaker resources

- [OfficeMaker](https://officemaker.ai/)
- [AI workflow automation tools](https://officemaker.ai/ai-workflow-automation-tools)
- [MCP document generation](https://officemaker.ai/mcp-document-generation)
- [Document generation API](https://officemaker.ai/document-generation-api)

- [OfficeMaker evidence hub](https://officemaker.ai/evidence)
- [Token-efficiency methodology](https://officemaker.ai/evidence/token-efficiency-methodology)
- [JSON to Office document automation](https://officemaker.ai/blog/json-to-office-document-automation)

## What is included

- a small OfficeMaker client in `src/officemaker-client.mjs`
- sample document builders for:
  - AI-generated letters
  - custom quotes
  - briefing decks
- runnable scripts in `scripts/`
- an importable n8n HTTP workflow in `n8n/workflows/create-ai-letter.json`

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

## Recommended AI workflow pattern

For data-heavy workflows, preprocess deterministically in n8n before asking a model to reason. For example:

**large data source → n8n filter/query → relevant JSON → LLM reasoning → OfficeMaker → XLSX/DOCX/PPTX**

This is the same **filter first, reason second** principle described in [Query Excel before the LLM](https://officemaker.ai/blog/query-excel-before-the-llm).

## Current scope

This repository is a **starter project**, not a published n8n community node. It proves the API integration pattern for:

- create Word documents
- create Excel workbooks
- create PowerPoint decks

Do not describe this repository as an official n8n marketplace/community-node listing until one actually exists.

## Next build steps

1. Wrap the create calls in a real n8n node package.
2. Add credentials handling and typed parameter fields.
3. Add schema lookup and validation.
4. Publish a community node only after the integration surface is stable.
