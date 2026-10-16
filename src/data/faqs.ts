export interface FAQItem {
  question: string;
  answer: string;
  category?: 'General & Emergency' | 'Repairs & Diagnostics' | 'Replacement & Costs' | 'Maintenance & Efficiency';
  linkPath?: string;
  linkText?: string;
}

export const generalFAQs: FAQItem[] = [
  {
    question: 'How quickly can a technician come out for emergency AC or furnace repair in Ann Arbor?',
    answer:
      'We dispatch directly from our central facility at 3526 W Liberty Rd, Suite 300, Ann Arbor, MI. For no-heat emergencies during freezing Michigan winter temperatures or total AC failures during summer heat waves, our typical dispatch response is between 15 to 45 minutes for Ann Arbor, Scio, and Pittsfield, with on-call emergency dispatch across Washtenaw County.',
    category: 'General & Emergency',
    linkPath: '/contact',
    linkText: 'Call Our Ann Arbor Dispatch (734-222-0918)',
  },
  {
    question: 'How much does a service diagnostic call cost, and do you give upfront quotes?',
    answer:
      'We believe in complete transparency with zero sales gimmicks. Our diagnostic call includes an exhaustive 20-point mechanical, electrical, and thermal inspection by a licensed technician. Once we pinpoint the root cause of the breakdown, you receive a flat-rate written estimate for your approval before any repair work begins. There are never surprise fees or hidden markups.',
    category: 'Repairs & Diagnostics',
    linkPath: '/services',
    linkText: 'Learn About Our Diagnostic Process',
  },
  {
    question: 'My AC is running, but blowing warm or lukewarm air. What is usually the problem?',
    answer:
      'The most common culprits include a failed dual-run capacitor preventing the outdoor compressor from kicking on, a refrigerant leak in the evaporator or condenser coils, a dirty air filter choking airflow and causing the indoor coil to freeze into a solid block of ice, or a tripped outdoor circuit breaker. Turn off cooling at your thermostat immediately to prevent compressor burnout, and call us for an accurate diagnostic.',
    category: 'Repairs & Diagnostics',
    linkPath: '/air-conditioning-repair-ann-arbor-mi',
    linkText: 'Air Conditioning Repair in Ann Arbor',
  },
  {
    question: 'How do I know if I should repair or replace my aging HVAC system?',
    answer:
      'We recommend applying the industry standard "$5,000 Rule": multiply the age of your equipment in years by the estimated repair cost. If the result exceeds $5,000 (for example, a 12-year-old system needing a $600 repair equals $7,200), replacement is typically the smarter long-term investment. Other crucial factors include safety hazards like a cracked furnace heat exchanger or systems that still rely on discontinued, expensive R-22 Freon refrigerant.',
    category: 'Replacement & Costs',
    linkPath: '/air-conditioning-installation-ann-arbor-mi',
    linkText: 'AC Replacement & Installation Options',
  },
  {
    question: 'Do you service historic Ann Arbor homes that lack ductwork?',
    answer:
      'Yes! Many historic homes in the Old West Side, Burns Park, and Kerrytown have boiler radiator heat and no ductwork. We specialize in ductless mini-split heat pump installations (featuring top brands like Mitsubishi and Daikin) that deliver whisper-quiet, room-by-room zone cooling and heating without tearing down historic lath and plaster walls.',
    category: 'Replacement & Costs',
    linkPath: '/ductless-mini-split-services-ann-arbor-mi',
    linkText: 'Ductless Mini-Splits in Ann Arbor',
  },
  {
    question: 'What utility rebates are available for high-efficiency HVAC equipment in Washtenaw County?',
    answer:
      'Washtenaw County homeowners qualify for valuable rebates through DTE Energy and Consumers Energy, frequently offering $500 to $1,500+ for qualifying high-SEER2 cold-climate heat pumps and 96%+ AFUE modulating gas furnaces. In addition, the federal Inflation Reduction Act (IRA Section 25C) provides up to $2,000 in energy tax credits. We provide complete documentation to ensure you receive all qualifying savings.',
    category: 'Maintenance & Efficiency',
    linkPath: '/heat-pump-services-ann-arbor-mi',
    linkText: 'Heat Pumps & Utility Rebate Details',
  },
  {
    question: 'Do you provide commercial HVAC and refrigeration services for businesses?',
    answer:
      'Yes. On The Mark Mechanical works with commercial facility managers, restaurants, and retail spaces across Ann Arbor. We service commercial rooftop packaged units (RTUs), split systems, economizers, make-up air units, and commercial refrigeration systems including walk-in coolers, freezers, and ice machines.',
    category: 'General & Emergency',
    linkPath: '/commercial-hvac-ann-arbor-mi',
    linkText: 'Commercial HVAC & Refrigeration',
  },
  {
    question: 'Are your technicians licensed and insured in Michigan?',
    answer:
      'Yes. On The Mark Mechanical holds an official State of Michigan Mechanical Contractor License (LARA compliant), EPA Section 608 Universal Certification for handling all refrigerant classes, and carries $2,000,000 in general commercial liability coverage. All installations are permitted and inspected per City of Ann Arbor and Washtenaw County building codes.',
    category: 'General & Emergency',
    linkPath: '/about',
    linkText: 'View Our Technicians & Verifiable Credentials',
  },
  {
    question: 'Where is On The Mark Mechanical located, and what is your service territory?',
    answer:
      'Our primary shop and dispatch headquarters is located at 3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103. We provide daily service calls throughout Ann Arbor, Scio Township, Pittsfield Township, Dexter, Saline, Chelsea, Ypsilanti, Canton, Plymouth, and Belleville.',
    category: 'General & Emergency',
    linkPath: '/service-areas',
    linkText: 'View Our Service Areas & Coverage Information',
  },
  {
    question: 'What brands of heating and cooling equipment do you repair and install?',
    answer:
      'Our technicians repair and maintain all major residential and commercial brands, including Carrier, Trane, Lennox, Rheem, Ruud, Goodman, York, Bryant, Amana, and Mitsubishi Electric. For new installations, we perform a proper Manual J load calculation to recommend the most reliable, energy-efficient system for your property.',
    category: 'Repairs & Diagnostics',
    linkPath: '/furnace-repair-ann-arbor-mi',
    linkText: 'Furnace Repair Services in Ann Arbor',
  },
];
