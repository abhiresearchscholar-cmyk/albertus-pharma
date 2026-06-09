import { writeFileSync } from "node:fs";

const output = new URL("../assets/catalogue/albertus-pharma-catalogue.pdf", import.meta.url);
const lines = [
  { text: "Albertus Pharma", size: 28 },
  { text: "Pharmaceutical Product Catalogue", size: 16 },
  { text: "Pharmaceutical company and supply partner for formulations, nutraceuticals, wellness products, hygiene products, and institutional healthcare requirements.", size: 11 },
  { text: "Serving pharmacies, distributors, hospitals, clinics, laboratories, healthcare institutions, and government procurement teams.", size: 11 },
  { text: "", size: 11 },
  { text: "Core Categories", size: 16 },
  { text: "Analgesics & Antipyretics - general medicine formulations for pharmacy and institutional supply.", size: 11 },
  { text: "Nutraceuticals - wellness capsules, tablets, powders, and channel-ready nutrition products.", size: 11 },
  { text: "Gastrointestinal Care - digestive health products for retail and healthcare procurement.", size: 11 },
  { text: "Respiratory Care - syrups and respiratory-support formulations for pharmacy distribution.", size: 11 },
  { text: "Personal Care & Hygiene - sanitizers, hygiene products, and institutional care products.", size: 11 },
  { text: "Hospital Supply - disinfectants, first-aid support, and healthcare facility supply products.", size: 11 },
  { text: "Bone & Joint Care - calcium, vitamin, and wellness support formulations.", size: 11 },
  { text: "", size: 11 },
  { text: "For current pricing, availability, and delivery details, request a quotation by email.", size: 12 },
  { text: "Email: info@albertuspharma.com | Contact: 7018008582, 9418285897, 9805990300", size: 11 },
  { text: "M.O.: #205, 2nd Floor, M-92/1, Choudhary Baldev Singh Complex, Munirka, New Delhi - 110067", size: 10 },
  { text: "A.O.: #20F, SOHO, SBP City of Dreams, High Grounds, Zirakpur - 140603 | R.O.: Ward No. 10, Ram Nagar, Hamirpur (HP) - 177001", size: 10 }
];

function esc(text) {
  return text.replace(/[()\\]/g, "\\$&");
}

let y = 760;
const stream = ["BT", "/F1 11 Tf", "50 760 Td"];
for (const line of lines) {
  if (!line.text) {
    y -= 14;
    stream.push(`50 ${y} Td`);
    continue;
  }
  stream.push(`/F1 ${line.size} Tf`);
  stream.push(`1 0 0 1 50 ${y} Tm`);
  stream.push(`(${esc(line.text)}) Tj`);
  y -= line.size + 10;
}
stream.push("ET");

const content = stream.join("\n");
const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
  "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  `5 0 obj\n<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream\nendobj\n`
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += object;
}
const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(output, pdf);
