import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildCustomQuote, fileStem } from '../src/sample-documents.mjs';

const [customerName = 'Northwind Traders', productName = 'OfficeMaker Automation Pack', quantityArg = '10', unitPriceArg = '49'] =
  process.argv.slice(2);

const quantity = Number(quantityArg);
const unitPrice = Number(unitPriceArg);

const documentObject = buildCustomQuote({ customerName, productName, quantity, unitPrice });
const result = await createDocument({
  documentType: 'excel',
  fileName: `${fileStem(customerName)}-custom-quote`,
  documentObject
});

printCreateSummary(result);
