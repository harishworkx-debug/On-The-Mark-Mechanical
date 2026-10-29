export interface ArticleAuthor {
  name: string;
  role: string;
  experience: string;
  bio: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: string;
}

export interface Article {
  slug: string;
  title: string;
  searchIntent: string;
  category: 'Cooling' | 'Heating' | 'Maintenance' | 'Heat Pumps' | 'Commercial & Specialized';
  readTime: string;
  publishedDate: string;
  author: ArticleAuthor;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  relatedServiceSlug: string;
  relatedServiceUrl: string;
  relatedServiceCta: string;
}

export const articles: Article[] = [
  {
    slug: 'signs-ac-needs-repair-ann-arbor',
    title: 'Signs Your Air Conditioner Needs Repair in Ann Arbor: Diagnostic Guide',
    searchIntent: 'AC Repair Leads',
    category: 'Cooling',
    readTime: '6 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Richard',
      role: 'Lead Service Specialist & Diagnostics',
      experience: '18+ Years Field Experience',
      bio: 'Richard leads residential diagnostic calls across Ann Arbor, Scio, and Pittsfield, specializing in electrical circuit analysis and honest repair solutions.',
    },
    excerpt:
      'Is your cooling system struggling with Ann Arbor summer humidity? Learn the early warning symptoms—from weak register airflow to capacitor buzzing—before an outright breakdown occurs.',
    heroImage: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'HVAC technician Richard checking electrical controls on an outdoor AC condenser unit',
    keyTakeaways: [
      'Warm or lukewarm air blowing from registers usually points to a failed dual-run capacitor or refrigerant leak rather than a bad thermostat.',
      'Frequent short-cycling (turning on and off every 3–5 minutes) puts extreme stress on the compressor motor and spikes DTE electric bills.',
      'Ice accumulation along the copper line-set indicates severe airflow choking or low refrigerant charge—turn the system off immediately.',
      'Ann Arbor historic homes with older ductwork often suffer from high static pressure, requiring professional blower wheel and coil inspection.',
    ],
    sections: [
      {
        heading: '1. Air Coming From Vents Is Warm or Lukewarm',
        paragraphs: [
          'During peak July and August heat waves in Washtenaw County, indoor temperatures should drop steadily when your thermostat calls for cooling. If the blower is running but the air entering your rooms feels room-temperature or faintly warm, your system is failing to absorb and reject heat.',
          'In more than 60% of our diagnostic calls in Ann Arbor, the root cause is a weakened or blown dual-run capacitor on the outdoor condenser unit. When this inexpensive cylindrical component fails, the outdoor fan motor or the scroll compressor cannot start, meaning only the indoor blower operates.',
        ],
        bulletPoints: [
          'Outdoor fan spinning but compressor silent: typical capacitor or contactor failure.',
          'Neither outdoor fan nor compressor engaging: tripped breaker, safety high-pressure lockout, or 24V control transformer issue.',
          'Both running but air not cold: possible refrigerant leak across the evaporator coil solder joints.',
        ],
        callout: 'Technician Tip: Never force your AC to run continuously when blowing warm air. The compressor relies on returning cool refrigerant gas to keep its internal motor windings from burning out.',
      },
      {
        heading: '2. Unfamiliar Rattling, Buzzing, or Screeching Noises',
        paragraphs: [
          'A healthy central air conditioner produces a consistent, low hum when operating. If you notice sudden metallic clatter, loud electrical buzzing upon startup, or high-pitched screeching, mechanical components are vibrating loose or grinding under friction.',
          'A buzzing sound at the outdoor disconnect or electrical service panel often signals a contactor with pitted points or a failing relay coil. Screeching or squealing typically comes from dry, unlubricated bearings inside the condenser fan motor or the indoor blower wheel.',
        ],
      },
      {
        heading: '3. Rapid Short-Cycling (Turning On and Off Every Few Minutes)',
        paragraphs: [
          'A cooling cycle should typically run for 15 to 25 minutes to thoroughly dehumidify your home. If your unit fires up, runs for 2 to 4 minutes, shuts down, and repeats this cycle dozens of times an hour, it is short-cycling.',
          'Short-cycling can be caused by an oversized unit, a severely clogged 1-inch return air filter, or an overheating compressor safety trip. This drastically accelerates equipment wear and prevents effective humidity removal in Michigan humid summers.',
        ],
      },
      {
        heading: '4. Sudden Spikes in Monthly DTE Electric Bills',
        paragraphs: [
          'While summer cooling costs naturally increase, an unexplained 40% to 70% jump in electrical consumption compared to the same month last year strongly suggests mechanical inefficiency.',
          'When coils become encrusted with cottonwood seeds, pollen, and dust, heat transfer efficiency plummets. The compressor is forced to draw excessive amperage and run twice as long to achieve the same temperature setpoint.',
        ],
      },
    ],
    relatedServiceSlug: 'air-conditioning-repair',
    relatedServiceUrl: '/air-conditioning-repair-ann-arbor-mi',
    relatedServiceCta: 'Schedule AC Diagnostic in Ann Arbor (734) 294-5501',
  },
  {
    slug: 'furnace-repair-vs-replacement-michigan',
    title: 'Furnace Repair vs. Replacement: What Michigan Homeowners Should Compare',
    searchIntent: 'Furnace Leads',
    category: 'Heating',
    readTime: '7 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Rick',
      role: 'Installation Lead & Systems Specialist',
      experience: '20+ Years Field Experience',
      bio: 'Rick oversees heating system replacements and high-efficiency installations across Ann Arbor, Saline, and Dexter, ensuring pristine code compliance and energy savings.',
    },
    excerpt:
      'Faced with an expensive furnace repair during a Michigan freeze? Use the industry-standard $5,000 Rule, efficiency math, and safety indicators to make a confident decision.',
    heroImage: 'https://images.pexels.com/photos/6854973/pexels-photo-6854973.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'Interior combustion chamber and clean flame sensors of a high-efficiency gas furnace',
    keyTakeaways: [
      'The "$5,000 Rule" is the industry benchmark: multiply equipment age in years by the repair estimate. Over $5,000 means replacement offers superior return.',
      'A cracked heat exchanger is an automatic condemnation: carbon monoxide leakage poses severe health risks and cannot legally or safely be patched.',
      'Upgrading from an older 80% AFUE furnace to a 96%+ modulating unit saves Michigan homeowners 15–25% on annual winter heating fuel.',
      'DTE Energy and Consumers Energy offer up to $1,500+ in heating equipment rebates for qualifying high-efficiency replacements.',
    ],
    sections: [
      {
        heading: 'The $5,000 Rule Explained for Michigan Homeowners',
        paragraphs: [
          'When an unexpected heating failure strikes in the middle of January, homeowners often wonder: "Is it worth sinking $800 into a 14-year-old furnace, or should I invest that money into a brand-new, reliable heating system?"',
          'At On The Mark Mechanical, our technicians use the formula endorsed by HVAC engineers: (Age of Furnace in Years) × (Cost of Repair in Dollars). If the total exceeds 5,000, replacement is the more prudent long-term investment.',
        ],
        bulletPoints: [
          'Example 1 (Repair): A 6-year-old furnace needs a $350 draft inducer assembly. 6 × 350 = 2,100 (< 5,000). Repair makes complete financial sense.',
          'Example 2 (Replace): A 15-year-old furnace needs an $800 ECM blower motor replacement. 15 × 800 = 12,000 (> 5,000). Sinking $800 into equipment nearing its end of life is rarely economical.',
        ],
        callout: 'Transparent Commitment: We quote both repair and replacement options in writing so you can review the economics without high-pressure sales.',
      },
      {
        heading: 'Non-Negotiable Safety Hazard: Cracked Heat Exchangers',
        paragraphs: [
          'The heat exchanger is the steel chamber that separates combustible exhaust gases (including odorless, toxic carbon monoxide) from the clean air circulating through your living spaces.',
          'Over 15 to 20 Michigan winters, repeated thermal expansion and contraction causes microscopic metal fatigue. Once a crack or rust perforation develops, carbon monoxide can enter the supply airflow. By Michigan Mechanical Code and manufacturer safety mandates, a cracked heat exchanger cannot be welded or sealed—the exchanger or the entire furnace must be replaced.',
        ],
      },
      {
        heading: 'Efficiency Gains: Upgrading from 80% to 96% AFUE',
        paragraphs: [
          'Older standard furnaces feature an AFUE (Annual Fuel Utilization Efficiency) rating of roughly 70% to 80%, meaning 20 to 30 cents of every dollar spent on gas literally goes out the metal flue pipe as wasted exhaust heat.',
          'Modern sealed-combustion condensing furnaces capture this latent heat using a secondary stainless-steel heat exchanger, achieving 96% to 98% AFUE. Over a typical Ann Arbor winter, this translates into noticeable savings on DTE natural gas utility bills, supplemented by local utility rebates.',
        ],
      },
    ],
    relatedServiceSlug: 'furnace-repair',
    relatedServiceUrl: '/furnace-repair-ann-arbor-mi',
    relatedServiceCta: 'Get an Honest Heating Evaluation (734) 294-5501',
  },
  {
    slug: 'hvac-maintenance-checklist-michigan-winter',
    title: 'HVAC Maintenance Checklist Before a Michigan Winter: 24-Point Prep',
    searchIntent: 'Maintenance Leads',
    category: 'Maintenance',
    readTime: '5 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Terry',
      role: 'Diagnostic Master Technician',
      experience: '15+ Years Field Experience',
      bio: 'Terry specializes in preventive maintenance tune-ups and complex troubleshooting on residential and light commercial mechanical equipment throughout Washtenaw County.',
    },
    excerpt:
      'Avoid 2:00 AM heating emergencies when temperatures plunge below zero. Review our comprehensive fall furnace inspection checklist for Michigan homeowners.',
    heroImage: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'HVAC technician Terry performing a combustion and electrical tune-up on a heating system',
    keyTakeaways: [
      'Over 80% of emergency no-heat service calls during winter freezes stem from dirty flame sensors or blocked condensate drain lines.',
      'Furnace air filters should be checked every 30 days during peak heating season to prevent heat exchanger overheating.',
      'Testing electronic carbon monoxide detectors before turning the heat on for the season is a critical household safety step.',
      'Professional combustion gas analysis ensures the burner is burning clean blue flames with zero dangerous soot accumulation.',
    ],
    sections: [
      {
        heading: 'Why Preventative Fall Furnace Tune-Ups Are Essential in Michigan',
        paragraphs: [
          'Michigan winters are notorious for sustained arctic blasts where wind chill drops well below zero. When temperatures outside hit single digits, your heating system runs for 12 to 18 hours per day under peak mechanical stress.',
          'A neglected furnace with coated burner orifices or a sticky inducer switch will almost invariably fail on the coldest night of the year when heating companies are flooded with emergency calls. A professional fall tune-up catches minor wear and tear before it leaves your family in the cold.',
        ],
      },
      {
        heading: 'The Critical Checklist Steps Our Technicians Perform',
        paragraphs: [
          'A true professional furnace tune-up goes far beyond merely swapping an air filter. Here are the core safety and performance checks included in our 24-point inspection:',
        ],
        bulletPoints: [
          'Cleaning and polishing the flame rectification sensor rod (removes microscopic silica oxidation that causes false ignition dropouts).',
          'Testing microfarad ratings on the blower motor run capacitor against factory tolerances.',
          'Measuring manifold gas pressure with a digital manometer to guarantee precise BTU firing rates.',
          'Conducting carbon monoxide testing in supply plenum and checking flue draft clearances.',
          'Flushing the trap and clearing PVC condensate drain lines on high-efficiency 90%+ condensing furnaces to prevent winter ice blockage.',
          'Inspecting electrical wiring, terminal tightening, and safety high-limit switch verification.',
        ],
        callout: 'Homeowner Tip: If your furnace flame burns lazy yellow or orange rather than crisp blue, turn the unit off and call for an immediate burner and gas valve inspection.',
      },
      {
        heading: 'DIY Checks Every Ann Arbor Homeowner Can Do Today',
        paragraphs: [
          'Before calling for your seasonal tune-up, ensure your thermostat has fresh AA lithium batteries, verify all return air grilles are unblocked by heavy rugs or furniture, and replace your 1-inch or 4-inch pleated filter.',
        ],
      },
    ],
    relatedServiceSlug: 'hvac-maintenance',
    relatedServiceUrl: '/hvac-maintenance-ann-arbor-mi',
    relatedServiceCta: 'Book Fall Furnace Tune-Up (734) 294-5501',
  },
  {
    slug: 'why-ac-unit-freezes-up',
    title: 'Why an AC Unit Freezes Up and When to Call a Technician',
    searchIntent: 'Troubleshooting and Repair',
    category: 'Cooling',
    readTime: '6 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Richard',
      role: 'Lead Service Specialist & Diagnostics',
      experience: '18+ Years Field Experience',
      bio: 'Richard diagnoses refrigerant and airflow failures across Washtenaw County, helping homeowners avoid costly compressor replacements.',
    },
    excerpt:
      'Stepping outside on an 85°F day only to find your AC refrigerant line encased in a block of ice? Discover the two primary causes and the exact steps to take right now.',
    heroImage: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'HVAC technician testing refrigerant gauges on an air conditioning unit',
    keyTakeaways: [
      'A frozen evaporator coil or iced copper suction pipe is almost always caused by either restricted airflow or low refrigerant charge.',
      'Never attempt to scrape off ice with a screwdriver or knife—you risk puncturing thin copper or aluminum evaporator tubing.',
      'Turn the AC setting to "OFF" immediately, but set the fan switch to "ON" to circulate warm air and begin melting the ice block.',
      'Continuing to run a frozen AC will cause liquid refrigerant to flood back into the compressor, causing catastrophic hydraulic lock.',
    ],
    sections: [
      {
        heading: 'How Can an Air Conditioner Freeze on a Sweltering Summer Day?',
        paragraphs: [
          'It seems completely counterintuitive: when it is 90°F outdoors in Ann Arbor, how can an air conditioner become encased in solid ice? The answer lies in how refrigerant operates.',
          'Your AC does not actually "create cold"; it absorbs heat from your indoor air across the indoor evaporator coil. Refrigerant passes through the coil at temperatures around 40°F. If anything prevents the warm indoor air from reaching that refrigerant—or if refrigerant pressure drops—the coil temperature plummets below 32°F, freezing moisture from the air directly onto the metal fins.',
        ],
      },
      {
        heading: 'Cause #1: Choked Airflow (The Most Common Culprit)',
        paragraphs: [
          'When airflow is restricted, there is not enough thermal heat transfer to keep the cold refrigerant above freezing. As moisture condenses onto the coil, it freezes instantly, creating an insulating layer of ice that chokes off even more airflow until the entire coil becomes a solid block of ice.',
        ],
        bulletPoints: [
          'Severely neglected air filter clogged with pet fur and household dust.',
          'Closed supply registers or furniture placed over return air grilles.',
          'Blower wheel encrusted with dirt or blower motor capacitor losing speed.',
          'Crushed, disconnected, or undersized flexible ductwork in the attic or crawlspace.',
        ],
      },
      {
        heading: 'Cause #2: Low Refrigerant Charge (Refrigerant Leak)',
        paragraphs: [
          'Refrigerant systems are hermetically sealed closed loops. Your AC never "consumes" or "uses up" refrigerant. If refrigerant is low, your system has an active leak.',
          'When refrigerant escapes through a microscopic pinhole leak, the pressure inside the evaporator drops. According to the laws of thermodynamics (pressure-temperature relationship), lower pressure means lower boiling temperatures. The coil drops well below 32°F and freezes solid.',
        ],
        callout: 'Critical Warning: Topping off refrigerant without locating and repairing the leak is illegal under EPA regulations and wastes money, as the refrigerant will leak back out.',
      },
      {
        heading: 'Immediate 3-Step Action Plan Before Calling Our Tech',
        paragraphs: [
          '1. Go to your thermostat and flip the system mode switch to OFF.',
          '2. Switch the fan setting from AUTO to ON. This keeps the blower running to thaw the coil without operating the compressor.',
          '3. Check your furnace/air handler drain pan. As pounds of ice melt, make sure the condensate drain line is flowing freely to avoid water leaking onto your ceilings or floors.',
        ],
      },
    ],
    relatedServiceSlug: 'air-conditioning-repair',
    relatedServiceUrl: '/air-conditioning-repair-ann-arbor-mi',
    relatedServiceCta: 'Call For Frozen AC Diagnosis (734) 294-5501',
  },
  {
    slug: 'heat-pump-vs-furnace-michigan',
    title: 'Heat Pump vs. Furnace for Michigan Homes: Dual-Fuel & Cold-Climate Performance',
    searchIntent: 'Installation / Replacement',
    category: 'Heat Pumps',
    readTime: '8 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Rick',
      role: 'Installation Lead & Systems Specialist',
      experience: '20+ Years Field Experience',
      bio: 'Rick designs cold-climate heat pump and hybrid dual-fuel systems tailored for Washtenaw County weather patterns and local utility rebates.',
    },
    excerpt:
      'Can modern heat pumps handle Michigan sub-zero winters? Explore how cold-climate inverters and dual-fuel hybrid systems deliver high efficiency and maximize DTE rebates.',
    heroImage: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'Modern cold-climate inverter heat pump outdoor unit installed alongside residential home',
    keyTakeaways: [
      'Modern cold-climate heat pumps (CCHPs) utilize variable-capacity inverter compressors that extract heat efficiently even down to -15°F.',
      'A Dual-Fuel Hybrid System pairs an electric heat pump with an existing natural gas furnace, automatically switching to gas only during extreme arctic freezes.',
      'DTE Energy electric heating rebates and federal IRA Section 25C tax credits can provide up to $2,000–$3,500+ in combined installation savings.',
      'For Ann Arbor historic homes without ductwork, multi-zone ductless mini-split heat pumps offer room-by-room precision zoning.',
    ],
    sections: [
      {
        heading: 'Can a Heat Pump Actually Heat a Home in a Michigan Winter?',
        paragraphs: [
          'Ten or fifteen years ago, traditional single-stage heat pumps struggled in northern states. Once outdoor temperatures dropped below 35°F, their heating capacity plunged, forcing expensive auxiliary electric resistance heat strips to kick on.',
          'Today, cold-climate inverter technology has completely transformed winter heating. Brands like Mitsubishi, Bosch, and Carrier utilize variable-speed inverter compressors that can maintain 100% heating capacity down to 5°F and continue producing warmth even at -15°F outdoor ambient temperatures.',
        ],
      },
      {
        heading: 'The Best of Both Worlds: Dual-Fuel Hybrid Heating',
        paragraphs: [
          'For most Ann Arbor homeowners with access to natural gas, the most cost-effective and resilient setup is a Dual-Fuel Hybrid System.',
          'In this configuration, a high-efficiency heat pump replaces your standard outdoor air conditioner, while an efficient gas furnace acts as the indoor air handler and backup heat source. In spring, summer, and mild fall/winter days (above 30°F), the heat pump delivers ultra-efficient heating and cooling. When a polar vortex drives temperatures below freezing, the system seamlessly transitions to gas furnace heating.',
        ],
        bulletPoints: [
          'Spring & Fall: Inverter heat pump runs at 300%–400% coefficient of performance (COP).',
          'Summer: Heat pump acts as a premium, whisper-quiet high-SEER2 central air conditioner.',
          'Winter Arctic Freezes: Gas furnace takes over, ensuring reliable, high-temperature heat even during sub-zero blizzards.',
        ],
      },
      {
        heading: 'Michigan Utility Rebates & Federal IRA Incentives',
        paragraphs: [
          'Both DTE Energy and Consumers Energy provide substantial equipment rebates for qualifying high-efficiency heat pump installations. When combined with the Federal Inflation Reduction Act (Section 25C) tax credits of up to $2,000, homeowners can substantially offset the initial system investment.',
        ],
        callout: 'Rebate Assistance: On The Mark Mechanical handles AHRI certificate verification and provides all qualifying equipment documentation for DTE energy rebates.',
      },
    ],
    relatedServiceSlug: 'heat-pump-services',
    relatedServiceUrl: '/heat-pump-services-ann-arbor-mi',
    relatedServiceCta: 'Explore Heat Pump Options (734) 294-5501',
  },
  {
    slug: 'commercial-refrigeration-repair-ann-arbor',
    title: 'Commercial Refrigeration Repair in Ann Arbor: Walk-ins, Freezers & Emergency Care',
    searchIntent: 'Business Customers',
    category: 'Commercial & Specialized',
    readTime: '7 min read',
    publishedDate: '2026-10-16',
    author: {
      name: 'Terry',
      role: 'Master Commercial Technician',
      experience: '15+ Years Field Experience',
      bio: 'Terry oversees commercial refrigeration diagnostics, walk-in cold storage repairs, and preventative maintenance for restaurants and venues across Ann Arbor.',
    },
    excerpt:
      'When walk-in coolers or display cases fail, food inventory and regulatory health compliance are on the line. Learn preventative diagnostic strategies for Ann Arbor food service businesses.',
    heroImage: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageAlt: 'Commercial technician Terry servicing refrigeration compressors and mechanical piping',
    keyTakeaways: [
      'Commercial walk-in coolers must maintain strictly between 35°F and 38°F to prevent food spoilage and satisfy Washtenaw County Health Department guidelines.',
      'Defrost timer clock failures or burned-out electric defrost heaters are the primary cause of iced evaporator coils in commercial walk-in freezers.',
      'Grease, dust, and cardboard lint buildup on commercial condenser coils can raise head pressure by 30%, triggering thermal overload shutoffs.',
      'On The Mark Mechanical provides rapid dispatch for commercial facilities, catering venues (like historic wedding venues), and local restaurants.',
    ],
    sections: [
      {
        heading: 'Why Commercial Refrigeration Demands Rapid Specialist Dispatch',
        paragraphs: [
          'In food service, hospitality, and research facilities, cooling equipment failure is not an inconvenience—it is an immediate operational emergency. Thousands of dollars in perishable food inventory, craft beer, or temperature-sensitive supplies can spoil within hours.',
          'Commercial refrigeration systems operate under far more demanding duty cycles than residential air conditioning. They run continuously 24/7, endure frequent door openings during busy shifts, and must maintain precise temperatures regardless of ambient kitchen heat.',
        ],
      },
      {
        heading: 'Common Mechanical Failures in Walk-ins & Reach-ins',
        paragraphs: [
          'Our commercial technicians frequently encounter and resolve the following critical issues across Ann Arbor commercial kitchens:',
        ],
        bulletPoints: [
          'Iced-over walk-in freezer evaporator coils caused by faulty defrost termination thermostats or failed defrost timer clock motors.',
          'Thermostatic Expansion Valve (TXV) power element degradation causing erratic superheat and starving the evaporator coil.',
          'Condenser fan motor failure leading to elevated head pressure and compressor thermal overload trips.',
          'Worn silicone door gaskets allowing warm, humid kitchen air to enter, causing excessive frost buildup and high humidity.',
        ],
        callout: 'Commercial Advice: Monthly condenser coil sanitization and quarterly door gasket checks can prevent up to 70% of sudden commercial refrigeration breakdowns.',
      },
      {
        heading: 'Specialized Capabilities: Historic Venues & Non-Standard Layouts',
        paragraphs: [
          'Many Ann Arbor and Washtenaw County establishments (such as historic reception halls, catering venues like Wellers Weddings, and downtown restaurants) operate in unique architectural spaces with remote outdoor condenser racks or basement machinery rooms. We understand how to design and repair refrigeration linesets in non-standard commercial configurations.',
        ],
      },
    ],
    relatedServiceSlug: 'commercial-refrigeration',
    relatedServiceUrl: '/commercial-refrigeration-ann-arbor-mi',
    relatedServiceCta: 'Contact Commercial Dispatch (734) 294-5501',
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
