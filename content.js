// ============================================================================
//  CISSP STUDY CONTENT
//  ---------------------------------------------------------------------------
//  This is the ONLY file you need to edit as you study.
//  Add flashcards and quiz questions here from your workbook.
//
//  DOMAINS: the 8 CISSP domains (2024 CAT weighting shown in `weight`).
//
//  FLASHCARD format:
//    { id: "unique-id", domain: 1, front: "term or question", back: "answer" }
//
//  QUIZ format:
//    { id: "unique-id", domain: 1, q: "question text",
//      choices: ["A", "B", "C", "D"], answer: 2,   // 0-based index of correct choice
//      explain: "why the answer is correct" }
//
//  Tips:
//   - `id` just has to be unique. Any string. e.g. "d1-cia-triad"
//   - `domain` is a number 1-8 (see DOMAINS below)
//   - Keep adding items to FLASHCARDS and QUIZ arrays. That's it.
// ============================================================================

// (Wrapped in a function so re-loading this file can never cause
//  "X has already been declared" errors — everything is scoped inside.)
(function () {

const DOMAINS = [
  { id: 1, name: "Security & Risk Management", weight: 16, short: "Risk Mgmt" },
  { id: 2, name: "Asset Security", weight: 10, short: "Asset Sec" },
  { id: 3, name: "Security Architecture & Engineering", weight: 13, short: "Arch & Eng" },
  { id: 4, name: "Communication & Network Security", weight: 13, short: "Network" },
  { id: 5, name: "Identity & Access Management (IAM)", weight: 13, short: "IAM" },
  { id: 6, name: "Security Assessment & Testing", weight: 12, short: "Assess & Test" },
  { id: 7, name: "Security Operations", weight: 13, short: "Sec Ops" },
  { id: 8, name: "Software Development Security", weight: 10, short: "Dev Sec" },
];

// ---------------------------------------------------------------------------
//  FLASHCARDS  — starter set, ~2-3 per domain. Add yours below each domain.
// ---------------------------------------------------------------------------
const FLASHCARDS = [
  // Domain 1 — Security & Risk Management
  { id: "d1-cia", domain: 1, front: "The CIA Triad", back: "Confidentiality, Integrity, Availability — the three core goals of information security. Some models add Authenticity and Non-repudiation." },
  { id: "d1-due-care", domain: 1, front: "Due Care vs. Due Diligence", back: "Due Diligence = investigating/understanding risks (the research). Due Care = acting on that knowledge with reasonable prudence (the doing). 'Diligence discovers, care acts.'" },
  { id: "d1-risk-terms", domain: 1, front: "Risk = ?", back: "Risk = Threat × Vulnerability (× Impact/Asset Value). A threat needs a matching vulnerability to create risk. No vulnerability, no risk from that threat." },
  { id: "d1-quant", domain: 1, front: "ALE formula", back: "ALE = SLE × ARO. SLE = Asset Value × Exposure Factor. ARO = Annualized Rate of Occurrence. ALE = Annualized Loss Expectancy." },

  // Domain 2 — Asset Security
  { id: "d2-data-roles", domain: 2, front: "Data Owner vs. Data Custodian", back: "Owner = accountable, sets classification & policy (usually senior/business). Custodian = implements/maintains controls day-to-day (usually IT). Owner decides, custodian does." },
  { id: "d2-states", domain: 2, front: "Three states of data", back: "At rest (storage), In transit/motion (network), In use/processing (memory/CPU). Each needs different protection controls." },
  { id: "d2-remanence", domain: 2, front: "Data Remanence", back: "Residual data left on media after deletion. Countermeasures: clearing, purging, destruction. Degaussing works on magnetic media only, not SSDs." },

  // Domain 3 — Security Architecture & Engineering
  { id: "d3-bell", domain: 3, front: "Bell-LaPadula model", back: "Confidentiality model. 'No read up, no write down' (Simple Security Property + *-Property). Prevents leaking high data to low subjects." },
  { id: "d3-biba", domain: 3, front: "Biba model", back: "Integrity model. 'No write up, no read down.' Opposite of Bell-LaPadula. Protects integrity, not confidentiality." },
  { id: "d3-fips140", domain: 3, front: "FIPS 140-3 levels", back: "Validates cryptographic modules. Level 1 (basic) → Level 4 (tamper-active, environmental protection). Supersedes FIPS 140-2 (sunset). Relevant to federal crypto procurement." },

  // Domain 4 — Communication & Network Security
  { id: "d4-osi", domain: 4, front: "OSI 7 layers (bottom-up)", back: "Physical, Data Link, Network, Transport, Session, Presentation, Application. Mnemonic: 'Please Do Not Throw Sausage Pizza Away.'" },
  { id: "d4-tcp", domain: 4, front: "TCP 3-way handshake", back: "SYN → SYN/ACK → ACK. Establishes a connection. A SYN flood attacks this by leaving half-open connections." },

  // Domain 5 — IAM
  { id: "d5-aaa", domain: 5, front: "AAA of access control", back: "Authentication (who you are), Authorization (what you can do), Accounting/Auditing (what you did). Identification precedes authentication." },
  { id: "d5-factors", domain: 5, front: "Authentication factors", back: "Something you know (password), have (token), are (biometric). Also: somewhere you are (location), something you do (behavior). MFA = 2+ different categories." },
  { id: "d5-saml", domain: 5, front: "SAML vs. OAuth vs. OIDC", back: "SAML = XML-based SSO/federation (enterprise). OAuth 2.0 = authorization/delegation (access, not identity). OIDC = identity layer on top of OAuth 2.0." },

  // Domain 6 — Security Assessment & Testing
  { id: "d6-pentest", domain: 6, front: "Pen test knowledge levels", back: "Black box (no knowledge), White/Crystal box (full knowledge), Gray box (partial). Also blind/double-blind describe defender awareness." },

  // Domain 7 — Security Operations
  { id: "d7-raid", domain: 7, front: "RAID basics", back: "RAID 0 = striping (speed, no redundancy). RAID 1 = mirroring. RAID 5 = striping + parity (1 disk fault tolerance). RAID 10 = mirror + stripe." },
  { id: "d7-bcp", domain: 7, front: "RTO vs. RPO", back: "RTO = Recovery Time Objective (how fast you must restore). RPO = Recovery Point Objective (how much data loss is acceptable, i.e. backup age)." },

  // Domain 8 — Software Development Security
  { id: "d8-sdlc", domain: 8, front: "Shift-left security", back: "Integrating security testing/controls early in the SDLC rather than at the end. Cheaper to fix defects early. Aligns with DevSecOps." },
];

// ---------------------------------------------------------------------------
//  QUIZ QUESTIONS — starter set. Add yours below.
// ---------------------------------------------------------------------------
const QUIZ = [
  {
    id: "q-d1-1", domain: 1,
    q: "An organization calculates that a single flood would destroy $200,000 of equipment (asset value $500,000). Floods occur about once every 20 years. What is the ALE?",
    choices: ["$10,000", "$25,000", "$40,000", "$200,000"],
    answer: 0,
    explain: "SLE = $200,000 (the actual loss per event). ARO = 1/20 = 0.05. ALE = SLE × ARO = $200,000 × 0.05 = $10,000."
  },
  {
    id: "q-d1-2", domain: 1,
    q: "Which BEST describes the difference between due diligence and due care?",
    choices: [
      "They are identical legal concepts",
      "Due diligence is investigating risk; due care is acting prudently on it",
      "Due care is investigating risk; due diligence is acting on it",
      "Both refer only to financial auditing"
    ],
    answer: 1,
    explain: "Due diligence is the research/investigation of risk. Due care is taking reasonable action based on that knowledge. Diligence discovers, care acts."
  },
  {
    id: "q-d3-1", domain: 3,
    q: "A security model enforces 'no read up, no write down.' Which model and goal is this?",
    choices: [
      "Biba — integrity",
      "Bell-LaPadula — confidentiality",
      "Clark-Wilson — integrity",
      "Brewer-Nash — conflict of interest"
    ],
    answer: 1,
    explain: "'No read up, no write down' is Bell-LaPadula, which protects confidentiality. Biba is the inverse ('no write up, no read down') and protects integrity."
  },
  {
    id: "q-d3-2", domain: 3,
    q: "For validating a cryptographic module used in a federal system, which standard applies?",
    choices: ["FIPS 199", "FIPS 140-3", "FISMA", "NIST 800-53"],
    answer: 1,
    explain: "FIPS 140-3 validates cryptographic modules (Levels 1-4). FIPS 199 is for security categorization; 800-53 is a controls catalog; FISMA is the overarching law."
  },
  {
    id: "q-d5-1", domain: 5,
    q: "Which protocol is designed for authorization/delegation rather than authentication of identity?",
    choices: ["SAML", "OAuth 2.0", "OpenID Connect", "Kerberos"],
    answer: 1,
    explain: "OAuth 2.0 handles authorization (delegated access to resources). OIDC adds an identity layer on top of it. SAML and Kerberos handle authentication."
  },
  {
    id: "q-d7-1", domain: 7,
    q: "A business can tolerate losing at most 4 hours of data. This is a statement of:",
    choices: ["RTO", "RPO", "MTD", "MTTR"],
    answer: 1,
    explain: "RPO (Recovery Point Objective) defines acceptable data loss, which drives backup frequency. RTO is how fast you must restore service."
  },
];

// Expose to the app (do not edit below this line)
window.CISSP_DATA = { DOMAINS, FLASHCARDS, QUIZ };

})();
