export const rules = [

{
  clause: "6.7.5",
  title: "Earth Leakage Protection",

  page: 214,

  keywords: [
    "earth leakage",
    "rcd",
    "elcb",
    "protection",
    "shock protection"
  ],

  rule: "Earth leakage protection shall disconnect the supply automatically in the event of an earth fault.",

  explanation: `
Purpose:
Prevent electric shock and fire.

Practical installation:
Install a 30 mA earth leakage device after the main switch.

Common mistakes:
Shared neutrals after RCD devices can cause nuisance tripping.
`,

  old_rule: "Earth leakage protection required on circuits supplying socket outlets.",

  new_rule: "Earth leakage protection shall disconnect the supply automatically in the event of an earth fault."
},

{
  clause: "7.1",
  title: "Bathrooms",

  page: 312,

  keywords: [
    "bathroom",
    "bath",
    "shower",
    "wet area",
    "zones"
  ],

  rule: "Electrical installations in bathrooms shall comply with safety zoning requirements.",

  explanation: `
Purpose:
Prevent electric shock in wet areas.

Important:
Zone 0, Zone 1 and Zone 2 restrictions apply.

Typical restriction examples:
No socket outlets allowed inside Zone 0 or Zone 1.
`,

  old_rule: "Basic protection requirements applied to bathrooms.",

  new_rule: "Bathroom installations must comply with defined safety zones (Zone 0, Zone 1 and Zone 2)."
}

];