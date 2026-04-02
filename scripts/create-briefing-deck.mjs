import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildBriefingDeck, fileStem } from '../src/sample-documents.mjs';

const [title = 'OfficeMaker External Integrations', subtitle = 'n8n starter project'] = process.argv.slice(2);

const documentObject = buildBriefingDeck({ title, subtitle });
const result = await createDocument({
  documentType: 'powerpoint',
  fileName: `${fileStem(title)}-briefing-deck`,
  documentObject
});

printCreateSummary(result);
