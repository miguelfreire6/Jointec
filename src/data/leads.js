export const LEAD_STORAGE_KEY = "jointec-dev-leads";

export const MACHINE_INTEREST_OPTIONS = [
  "Block Production Line",
  "Microdryer",
  "Nonstop & Topfoil Pallet",
  "CAPE machinery",
  "Private demonstration visit",
  "FEFPEB / industry events",
  "General equipment and solution updates",
];

export const LEAD_STATUS_OPTIONS = [
  "New lead",
  "Contacted",
  "Interested",
  "Demo requested",
  "Offer needed",
  "Offer sent",
  "Negotiation",
  "Won",
  "Lost",
];

export function createLeadRecord(data) {
  return {
    id: crypto.randomUUID(),
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    country: data.country.trim(),
    machineInterest: data.machineInterest,
    message: data.message.trim(),
    sourcePage: data.sourcePage,
    consent: Boolean(data.consent),
    createdAt: new Date().toISOString(),
    status: "New lead",
    notes: "",
  };
}

export function readDevelopmentLeads() {
  try {
    return JSON.parse(window.localStorage.getItem(LEAD_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function writeDevelopmentLeads(leads) {
  window.localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(leads));
}
