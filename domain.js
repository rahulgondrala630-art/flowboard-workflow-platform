export const domain = {
  "repo": "flowboard-workflow-platform",
  "brand": "Flowboard",
  "tagline": "Decisions without bottlenecks.",
  "subtitle": "Workflow requests, review queues, and clear next steps.",
  "theme": "flowboard",
  "primary": "requests",
  "secondary": "workflows",
  "primaryLabel": "Requests",
  "secondaryLabel": "Workflows",
  "statuses": [
    "Draft",
    "Pending",
    "Approved",
    "Rejected"
  ],
  "secondaryStatuses": [
    "Active",
    "Paused"
  ],
  "fields": [
    [
      "owner",
      "Owner",
      "text"
    ],
    [
      "amount",
      "Amount ($)",
      "number"
    ],
    [
      "dueDate",
      "Due date",
      "date"
    ]
  ],
  "secondaryFields": [
    [
      "owner",
      "Process owner",
      "text"
    ],
    [
      "steps",
      "Review stages",
      "text"
    ]
  ],
  "relationLabel": "Workflow",
  "seeds": [
    [
      "Vendor onboarding",
      "Pending",
      "Maya Chen",
      4800,
      "2026-10-20"
    ],
    [
      "Equipment purchase",
      "Approved",
      "Noah Patel",
      12000,
      "2026-10-16"
    ],
    [
      "Travel approval",
      "Draft",
      "Avery Reed",
      850,
      "2026-10-22"
    ]
  ],
  "secondarySeeds": [
    [
      "Procurement",
      "Active",
      "Maya Chen",
      "Manager \u2192 Finance"
    ],
    [
      "People operations",
      "Active",
      "Noah Patel",
      "People lead \u2192 Director"
    ]
  ],
  "actions": {
    "Pending": [
      "Approved",
      "Rejected"
    ],
    "Draft": [
      "Pending"
    ]
  },
  "unit": "USD"
};
