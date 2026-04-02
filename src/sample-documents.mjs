function paragraph(text) {
  return {
    type: 'paragraph',
    children: [{ type: 'text', text }]
  };
}

export function fileStem(value) {
  return String(value || 'officemaker-document')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'officemaker-document';
}

export function buildAiLetter({
  recipientName = 'Customer',
  companyName = 'OfficeMaker',
  purpose = 'follow up on your recent request',
  bulletPoints = ['Confirm the next step', 'Summarize the agreed deliverables', 'Invite a reply']
} = {}) {
  const children = [
    paragraph(`${recipientName}`),
    paragraph(''),
    paragraph(`Dear ${recipientName},`),
    paragraph(`Thank you for your time. I am writing on behalf of ${companyName} to ${purpose}.`),
    paragraph('Key points:')
  ];

  for (const point of bulletPoints) {
    children.push(paragraph(`- ${point}`));
  }

  children.push(paragraph('Please let us know if you would like us to tailor the next version for a specific audience.'));
  children.push(paragraph(`Kind regards,`));
  children.push(paragraph(companyName));

  return {
    type: 'document',
    content: { children }
  };
}

export function buildCustomQuote({
  customerName = 'Example Customer',
  productName = 'OfficeMaker Automation Pack',
  quantity = 10,
  unitPrice = 49
} = {}) {
  const total = quantity * unitPrice;

  return {
    type: 'excel',
    sheets: [
      {
        name: 'Quote',
        colWidths: [3200, 2800, 2800, 3200],
        rowHeights: [420, 320, 320, 320, 320, 320],
        cells: [
          { row: 0, col: 0, t: 's', value: 'Custom Quote' },
          { row: 1, col: 0, t: 's', value: 'Customer' },
          { row: 1, col: 1, t: 's', value: customerName },
          { row: 2, col: 0, t: 's', value: 'Product' },
          { row: 2, col: 1, t: 's', value: productName },
          { row: 3, col: 0, t: 's', value: 'Quantity' },
          { row: 3, col: 1, t: 'n', value: quantity },
          { row: 4, col: 0, t: 's', value: 'Unit Price' },
          { row: 4, col: 1, t: 'n', value: unitPrice },
          { row: 5, col: 0, t: 's', value: 'Total' },
          { row: 5, col: 1, t: 'n', value: total }
        ]
      }
    ]
  };
}

export function buildBriefingDeck({
  title = 'OfficeMaker Briefing',
  subtitle = 'Starter external integration demo',
  highlights = ['Generate Word documents', 'Build Excel quotes', 'Create PowerPoint decks']
} = {}) {
  return {
    type: 'powerpoint',
    slides: [
      {
        layout: 'Title Slide',
        shapes: [
          { type: 'textBox', shapeName: 'Title 1', text: title },
          { type: 'textBox', shapeName: 'Subtitle 2', text: subtitle }
        ]
      },
      {
        layout: 'Title and Content',
        shapes: [
          { type: 'textBox', shapeName: 'Title 1', text: 'Highlights' },
          { type: 'textBox', shapeName: 'Content Placeholder 2', text: highlights.map((item) => `- ${item}`).join('\n') }
        ]
      }
    ]
  };
}
