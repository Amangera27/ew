export interface ChecklistSection {
  title: string;
  items: string[];
}

export interface ArticleSection {
  title: string;
  content: string[];
}

export const solarChecklistData: ChecklistSection[] = [
  {
    title: "1. Documentation & Compliance",
    items: [
      "System design available",
      "Single Line Diagram (SLD) available",
      "PV string calculations completed",
      "Inverter specifications available",
      "Battery specifications available",
      "Manufacturer installation manuals on site",
      "Embedded generation approval from municipality (if grid-tied)",
      "Electrical CoC issued/updated",
      "PV Supplementary CoC issued",
      "Installer registration details available",
      "Equipment carries applicable certification (IEC/NRS where applicable)"
    ]
  },
  {
    title: "2. Labelling Requirements",
    items: [
      "Main DB: \"WARNING – DUAL SUPPLY\" label installed",
      "Main DB: Main switch clearly identified",
      "Main DB: Alternative supply warning installed",
      "Main DB: PV supply breaker labelled",
      "Inverter: Inverter identification label installed",
      "Inverter: Shutdown procedure displayed",
      "Batteries: Battery hazard warning signs",
      "Batteries: Voltage warning labels",
      "Batteries: Emergency contact information displayed",
      "External: PV array warning labels",
      "External: DC cable route identified",
      "External: Isolation points labelled"
    ]
  },
  {
    title: "3. PV Array Inspection",
    items: [
      "Modules securely mounted",
      "Roof structure suitable",
      "No damaged panels / cracked glass",
      "Frames bonded and earthed",
      "Correct orientation according to design",
      "Cable management neat",
      "No cable contact with roof surface",
      "UV-resistant cable ties used"
    ]
  },
  {
    title: "4. Roof Mounting Inspection",
    items: [
      "Mounting system structurally sound",
      "Roof penetrations waterproofed",
      "Stainless steel or corrosion-resistant fasteners used",
      "No signs of corrosion",
      "Wind load requirements considered",
      "Rails properly bonded"
    ]
  },
  {
    title: "5. DC Electrical Inspection",
    items: [
      "DC isolator installed and accessible",
      "Correct DC voltage and current rating",
      "MC4 connectors compatible and matching brand",
      "No mixed connector brands",
      "Polarity verified & string voltages recorded",
      "Cables mechanically protected",
      "DC SPD installed (where required)",
      "String fusing installed (where required)"
    ]
  },
  {
    title: "6. Inverter Inspection",
    items: [
      "Correct inverter sizing",
      "Mounted according to manufacturer requirements",
      "Adequate ventilation & safe working clearances maintained",
      "Earth connection verified",
      "Firmware updated & no active fault alarms",
      "Anti-islanding protection enabled (grid-tied)"
    ]
  },
  {
    title: "7. Battery System Inspection",
    items: [
      "Battery securely mounted",
      "BMS operational",
      "Correct battery protection & DC breaker/fuse installed",
      "Isolation switch installed",
      "Ventilation adequate",
      "No combustible materials nearby",
      "Emergency shutdown available",
      "Battery cable sizing verified",
      "Battery enclosure compliant"
    ]
  },
  {
    title: "8. AC Installation Inspection",
    items: [
      "Dedicated inverter breaker installed & correctly sized",
      "AC isolator installed where required",
      "Earth leakage protection verified",
      "Neutral-earth arrangement compliant",
      "Cable sizing compliant",
      "Segregation of AC and DC wiring maintained",
      "DB schedule updated"
    ]
  },
  {
    title: "9. Earthing & Bonding",
    items: [
      "PV frame earth continuity verified",
      "Inverter earth continuity verified",
      "Battery earth continuity verified",
      "Earth conductor correctly sized",
      "Earth resistance test completed",
      "Bonding connections secure"
    ]
  },
  {
    title: "10. Testing & Commissioning Values & Functional Tests",
    items: [
      "String 1 & 2 Voc values recorded",
      "String 1 & 2 Isc values recorded",
      "Insulation resistance values recorded",
      "Earth continuity and resistance values recorded",
      "Correct polarity confirmed",
      "Inverter startup & Grid synchronisation successful",
      "Battery charging & discharge operational",
      "Monitoring platform operational & emergency shutdown tested",
      "System producing expected power"
    ]
  },
  {
    title: "11. Insurance Inspection Requirements",
    items: [
      "Electrical CoC & PV Supplementary CoC available",
      "Qualified and registered installer used",
      "Batteries installed to manufacturer specification",
      "Correct protection devices (breakers, fuses, isolators) fitted",
      "DC and AC isolation and Surge protection devices installed",
      "Fire risk assessment satisfactory",
      "Installation photographs archived & asset values declared to insurer"
    ]
  }
];

export const cocMistakesData: ArticleSection[] = [
  {
    title: "Introduction — Why This Matters",
    content: [
      "An Electrical Certificate of Compliance (COC) is far more than a piece of paper; it is a legally binding declaration of safety. In South Africa, this document is governed by the Electrical Installation Regulations and attests that an installation meets the stringent safety standards outlined in SANS 10142.",
      "However, many electricians underestimate the profound consequences of an incorrect or fraudulent COC. A single oversight can trigger a chain of catastrophic events: a devastating electrical fire, a denied insurance claim that leaves a homeowner financially ruined, or the permanent revocation of your hard-earned license and registration.",
      "This isn't about mere paperwork—it's about professional integrity, public safety, and the viability of your career. This guide will walk you through the most common and costly COC mistakes and provide a clear, actionable path to avoiding them, ensuring you protect your clients, your reputation, and your livelihood."
    ]
  },
  {
    title: "The Legal and Technical Foundation of the COC",
    content: [
      "Before delving into the pitfalls, it's crucial to understand what a COC truly represents. A Certificate of Compliance is not an invoice or a simple job completion form. It is a legal document that certifies that the electrical installation it covers is safe, complies with the standards set out in SANS 10142-1, and adheres to the Electrical Installation Regulations."
    ]
  },
  {
    title: "What the Regulations Require",
    content: [
      "The law mandates that every electrical installation must have a valid COC when it is newly installed, altered, or added to. Furthermore, a COC is required for the sale of a property and is often requested by insurers.",
      "When you sign a COC, you are declaring, under law, that you have personally inspected and tested the installation and that it is, to the best of your knowledge, safe and compliant. This declaration is supported by a completed test report, which serves as the irrefutable evidence of your due diligence."
    ]
  },
  {
    title: "The Role of SANS 10142 in COC Issuance",
    content: [
      "SANS 10142 is the bedrock of electrical safety in South Africa. It details everything from wire sizing and earthing requirements to the placement of sockets and the protection offered by earth leakage devices. A valid COC is your professional attestation that the installation aligns with this comprehensive standard.",
      "For instance, if you issue a COC for a domestic property but fail to identify a missing earth wire on the stove circuit, you have not only breached a technical standard but have also issued a legally invalid certificate. This exposes you to significant liability, as that simple oversight could lead to an electrocution."
    ]
  },
  {
    title: "Who May Legally Sign and Issue a COC — and Why That Matters",
    content: [
      "The authority to issue a COC is not granted lightly. The regulations are explicitly clear on who bears this responsibility, and blurring these lines is one of the fastest ways to encounter serious legal trouble."
    ]
  },
  {
    title: "Registered Persons vs. Unregistered",
    content: [
      "Only a person registered with the Department of Employment and Labour in a specific electrical worker class—such as Single Phase Tester, Master Installation Electrician, or Installation Electrician—is legally permitted to issue a COC for the type of work they are qualified to perform.",
      "An unregistered person, regardless of their skill or experience, cannot issue a valid COC. If they do, the document is considered fraudulent from the outset. This rule exists to ensure that only competent, vetted professionals are certifying the safety of electrical installations that protect lives and property."
    ]
  },
  {
    title: "Employer and Contractor Obligations",
    content: [
      "Registered contractors must be vigilant about the work carried out under their banner. If an unregistered employee performs an installation and a COC is issued under the contractor's name without the proper oversight and personal inspection by the registered person, both the individual and the company can be held liable.",
      "Consider a scenario where a homeowner hires a cheap, unregistered contractor to rewire their house. The contractor issues a COC, and a year later, an electrical fault causes a fire. The insurance investigator discovers the invalid COC, leading to a rejected claim. The homeowner is left with massive financial losses and may pursue legal action against the contractor for fraud. The risks of operating outside the legal framework are simply too high."
    ]
  },
  {
    title: "Administrative and Documentation Mistakes",
    content: [
      "While technical failures can cause safety hazards, administrative errors can invalidate an otherwise perfectly safe installation's certification. These are often seen as trivial, but regulators and insurers view them as a sign of professional negligence."
    ]
  },
  {
    title: "Missing or Incomplete Test Reports",
    content: [
      "The COC itself is a summary document; its validity is wholly dependent on the detailed test report that must accompany it. This report, often called the \"Section 4\" test sheet, is the proof that you conducted the necessary inspections and measurements. Forgetting to attach this report, or leaving critical fields like earth fault loop impedance or insulation resistance values blank, renders the COC null and void. During an audit, if you cannot produce the test report for a specific COC, it is as if you never performed the tests at all."
    ]
  },
  {
    title: "Incorrect COC Numbering and Registration Trace",
    content: [
      "Every COC you issue must have a unique, traceable number. This is a fundamental requirement for creating an audit trail. Using duplicate numbers, or failing to maintain a coherent numbering system in your COC book or software, creates chaos. If a disputed COC arises and you cannot locate the original document and its corresponding test reports in your records, you have no defense against allegations of improper practice. A consistent, well-managed numbering and filing system is not just good organization—it's your first line of defense in a dispute.",
      "To avoid these pitfalls, implement a standardized COC checklist that includes all administrative elements. Use digital templates with mandatory fields to prevent omissions, and always keep secure, backed-up copies of every COC and its test reports for a minimum of five years. This disciplined approach transforms your documentation from a vulnerability into an asset."
    ]
  },
  {
    title: "Technical and Installation Mistakes That Lead to Failed COCs",
    content: [
      "These are the failures that create immediate physical danger and are the core of what a COC is designed to prevent. Even if your paperwork is perfect, these technical defects will cause your COC to be rejected and can lead to immediate disciplinary action."
    ]
  },
  {
    title: "Earthing and Bonding Defects",
    content: [
      "A robust earthing system is the cornerstone of electrical safety. Common failures include insufficient earth electrode resistance, missing bonding conductors to metal water pipes and other services, and loose connections at the earth bar in the distribution board. A bonding conductor that is not properly connected to the kitchen sink's plumbing, for instance, can create a potential shock hazard if a live wire touches the sink."
    ]
  },
  {
    title: "Faulty or Missing Protective Devices (RCDs/MLCBs)",
    content: [
      "The SANS standards mandate the use of Residual Current Devices (RCDs) or Miniature Circuit Breakers (MLCBs) with residual current protection for all socket-outlet circuits. A frequent mistake is installing an RCD that does not trip within the required time (typically 30 milliseconds for a 30mA device) or failing to install them on all required circuits. Another critical error is using over-sized circuit breakers that do not provide adequate protection for the cable sizing, potentially leading to overheating and fire before the breaker trips."
    ]
  },
  {
    title: "Non-Compliant Distribution Boards and Wiring Practices",
    content: [
      "The distribution board (DB) is the heart of the installation, and sloppy work here is a major red flag. This includes:",
      "1. Poor cable management, with conductors stretched tightly or without proper support.",
      "2. Incorrect or absent circuit identification on the DB schedule.",
      "3. The use of unapproved or counterfeit breakers.",
      "4. Overcrowding of DBs, making future work hazardous.",
      "5. DIY-style wiring extensions in roof spaces that are not properly enclosed or protected.",
      "Preventive measures are key. Adopt a rigorous testing protocol that includes torque-checking critical connections, performing earth continuity and earth electrode resistance tests on every installation, and ensuring all protective devices are functionally tested and correctly rated for their circuits."
    ]
  },
  {
    title: "Testing and Reporting Mistakes: The “Paperwork Is the Proof” Problem",
    content: [
      "The tests you perform are meaningless if they are not accurately recorded. The test report is your only evidence that you fulfilled your legal and professional duties."
    ]
  },
  {
    title: "Incomplete or Improperly Filled Test Results",
    content: [
      "It is not enough to simply perform the tests; you must record the actual results. Writing \"OK\" or a tick mark in the insulation resistance column is insufficient. You must record the actual megohm value measured. Similarly, for earth leakage tests, you must document the trip time and current. An auditor or insurer will question a COC where all test results are suspiciously perfect round numbers with no variation, as this suggests the form was filled out without actual testing."
    ]
  },
  {
    title: "Not Performing Required Tests for Specific Installations",
    content: [
      "The standard set of tests for a simple domestic installation may not suffice for more complex systems. This is particularly critical with the rise of alternative energy sources. For a solar PV installation, for example, additional tests are mandatory.",
      "These include verifying the correct operation of DC isolation and protection devices, testing the insulation resistance of the DC side, and ensuring anti-islanding protection is functional. Issuing a COC for a solar installation without performing and recording these specialized tests is a guaranteed path to a rejected COC and potential liability if the system fails.",
      "The solution is meticulousness. Use standardized, comprehensive test forms. Create a checklist for each distribution board and circuit type to ensure no test is overlooked. Where possible, supplement your paper trail with dated photographs of test equipment displays showing the results, providing an additional layer of verification."
    ]
  },
  {
    title: "Fraud, Fake COCs and the Criminal Risk",
    content: [
      "Beyond simple mistakes lies the deliberate act of fraud, which carries the most severe penalties of all. The industry and regulators are increasingly cracking down on this criminal activity."
    ]
  },
  {
    title: "Insurance and Civil Risk",
    content: [
      "The ramifications extend beyond the disciplinary hearing. If a fire occurs and the investigation reveals a fraudulent COC, the insurer will almost certainly void the claim. The property owner, facing hundreds of thousands of Rands in damages, will then likely sue the electrician for the full amount. This combination of regulatory punishment and civil liability can lead to financial ruin.",
      "To protect yourself, establish an unbreakable personal rule: never, under any circumstances, sign a COC without having personally performed or directly supervised the inspection and testing. Implement firm internal controls in your business, and walk away from any client who pressures you to back-date a certificate or issue one without the proper work being done. No job is worth your license and your freedom."
    ]
  },
  {
    title: "How COC Mistakes Affect Insurance, Sales and Property Transactions",
    content: [
      "The validity of a COC has direct and immediate consequences in the financial and real estate worlds, making it a critical document in major life events."
    ]
  },
  {
    title: "Insurance Risk",
    content: [
      "For a homeowner, a valid COC is a key document that proves the electrical system is safe. In the event of an electrical fire, the very first thing the insurance assessor will request is the COC for the property. If the COC is invalid due to any of the mistakes discussed—missing test reports, an unregistered issuer, or technical non-compliance—the insurer has solid grounds to reject the entire claim. The homeowner is left to bear the full cost of rebuilding, and the electrician who issued the faulty COC will face a massive lawsuit for professional negligence."
    ]
  },
  {
    title: "Property Transfers and Bond Registration",
    content: [
      "During the sale of a property, a valid COC is a mandatory legal requirement. Without it, the transfer of ownership cannot be registered with the Deeds Office. Conveyancers will not proceed, and banks will not release bond funds. A delayed, incorrect, or fraudulent COC can collapse a property sale, resulting in financial loss and legal action from both the buyer and seller. As the electrician, you hold a significant responsibility in ensuring this process proceeds smoothly by providing a legally impeccable document."
    ]
  },
  {
    title: "A Practical Pre-Submission Checklist for Electricians",
    content: [
      "To systematically avoid these costly errors, integrate a rigorous pre-submission checklist into your workflow. This turns complex regulations into a simple, repeatable process."
    ]
  },
  {
    title: "Visual Inspection Checklist (Quick Wins)",
    content: [
      "Before you even take out your test equipment, conduct a thorough visual scan. Look for:",
      "- Correct and legible DB labelling.",
      "- Presence of RCDs on all required circuits.",
      "- Evidence of unapproved DIY work or damage to accessories.",
      "- Proper glanding and securing of cables at the DB.",
      "- Correct polarity at socket outlets and light switches (a simple tester can confirm this)."
    ]
  },
  {
    title: "Mandatory Tests and Acceptance Criteria",
    content: [
      "Next, perform and record these critical tests, ensuring results fall within SANS 10142 acceptance criteria:",
      "- Earth Continuity: Ensure a continuous earth path on all circuits.",
      "- Insulation Resistance: Measure resistance between live conductors and earth. Values should typically be greater than 1 MΩ, with higher values expected in a healthy installation.",
      "- Earth Fault Loop Impedance: This critical test ensures that if a fault occurs, enough current will flow to quickly trip the circuit breaker.",
      "- RCD/MLCB Operation: Test the trip time and current of every earth leakage device. A 30mA device should trip within 300ms at a 150mA test current and within 40ms at a rated current.",
      "- Polarity and Phase Sequence: Verify correct connection."
    ]
  },
  {
    title: "Documentation and Handover Pack",
    content: [
      "Finally, compile the complete handover pack for your client. This should include the original, signed COC, the full set of completed test reports, and any photographs or advice notes. This professional package not only fulfills your legal obligations but also builds immense trust with your client, demonstrating a level of thoroughness that sets you apart."
    ]
  },
  {
    title: "For Landlords and Homeowners: How to Avoid Being Duped",
    content: [
      "As a property owner, you are the one who ultimately suffers from a faulty COC. You must be proactive in verifying the credentials of any electrician you hire."
    ]
  },
  {
    title: "Red Flags to Spot",
    content: [
      "Be wary of any electrician who exhibits these behaviors:",
      "- They are unwilling or unable to produce their Department of Labour registration card.",
      "- They offer a \"cheap, quick COC\" without a thorough inspection.",
      "- They ask for payment before the work is done or the certificate is issued.",
      "- The quote seems unusually low compared to others—this often means corners are being cut.",
      "- They provide a COC without a detailed test report."
    ]
  },
  {
    title: "What to Ask for Before You Pay",
    content: [
      "Before hiring an electrician, ask directly: \"Can I please see your wireman's license?\" A legitimate professional will be proud to show it. Upon completion, before making the final payment, insist on receiving the full COC package: the certificate itself and the complete test report. Check that the name and registration number on the certificate match the electrician you hired.",
      "A simple script for a landlord could be: \"As part of our rental compliance, I need a copy of your wireman's license for our records and will require the full test report with the COC upon completion.\""
    ]
  },
  {
    title: "Escalation and Remediation — What to Do if a COC Is Questioned",
    content: [
      "Mistakes can happen. How you handle them defines your professionalism and can mitigate the damage."
    ]
  },
  {
    title: "Internal Remediation Steps",
    content: [
      "If you discover an error in a COC you have issued—for example, a missed test or a wiring fault found later—the correct course of action is immediate and transparent. Contact the client, explain the situation professionally, and arrange to rectify the defect at your own cost. Re-test the entire installation and issue a replacement COC, clearly referencing the original and stating it is a correction. This demonstrates integrity and a commitment to safety."
    ]
  },
  {
    title: "When to Escalate to Regulators or Insurers",
    content: [
      "If you suspect you have encountered a fraudulent COC issued by another electrician, or if an insurer or regulator has formally questioned your work, it is time to escalate. Advise your client to contact the Department of Employment and Labour to verify the registration of the electrician in question. In disputes with insurers, ensure all communication is in writing and provide them with your full documentation. In these high-stakes situations, honesty and a complete paper trail are your most valuable assets."
    ]
  },
  {
    title: "Conclusion — Keep Your Licence, Keep People Safe",
    content: [
      "The path to maintaining your license and upholding your professional duty is built on a foundation of rigorous diligence. The most critical mistakes—sloppy documentation, inadequate testing, technical non-compliance, and the cardinal sin of fraud—are all preventable.",
      "By adopting a meticulous, checklist-driven approach to every COC you issue, you transform risk into reliability. Treat the Certificate of Compliance with the gravity it deserves: it is a legal declaration, a shield for your client, and the protector of your career. Commit to continuous professional development, stay updated with the latest SANS amendments, and never compromise on the processes that ensure safety. A valid COC does more than satisfy a legal requirement; it protects lives, and that is the highest calling of your profession."
    ]
  }
];
