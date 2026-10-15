export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  summary: string;
  detailedContent: string[];
  problems: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: 'air-conditioning-repair',
    name: 'Air Conditioning Repair',
    shortName: 'AC Repair',
    description:
      'Fast, reliable air conditioning repair to restore comfort to your home or business when your cooling system stops performing.',
    image: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'HVAC technician repairing an outdoor air conditioning unit',
    icon: 'Wind',
    summary:
      'When your air conditioner is blowing warm air, making strange noises, or not turning on at all, our technicians diagnose and repair the issue efficiently.',
    detailedContent: [
      'When the summer heat hits Michigan, a functioning air conditioner is essential for your comfort and health. Our air conditioning repair service covers all major components of your cooling system, from the compressor and condenser coil to the evaporator, refrigerant lines, and electrical controls. We work on central air systems, split systems, and packaged units.',
      'Many AC problems start small — a slight decrease in cooling performance, a faint unusual sound, or a minor increase in energy usage. Addressing these early signs can prevent a complete system failure during the hottest days of the year. Our technicians are trained to identify the root cause, not just the symptoms, so your repair lasts.',
      'We service a variety of air conditioner brands and models. Whether your system is relatively new or has been cooling your home for years, we provide thorough diagnostics and honest recommendations about whether a repair or replacement makes more sense for your situation.',
    ],
    problems: [
      'AC blowing warm air or not cooling properly',
      'Unusual noises or vibrations from the outdoor unit',
      'System short-cycling or running continuously',
      'Weak airflow from supply registers',
      'Refrigerant leaks or ice buildup on coils',
      'Thermostat communication issues',
    ],
    process: [
      {
        title: 'Diagnostic Visit',
        description:
          'A technician inspects your air conditioning system, identifies the root cause, and explains the problem in plain language.',
      },
      {
        title: 'Transparent Repair Quote',
        description:
          'You receive a clear, upfront price for the repair before any work begins. No surprises, no hidden fees.',
      },
      {
        title: 'Professional Repair',
        description:
          'We perform the repair using quality parts and industry-standard techniques, then test the system to confirm proper operation.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my air conditioner needs repair?',
        answer:
          'Common signs include warm air from vents, unusual noises, frequent cycling, weak airflow, or higher-than-normal energy bills. If you notice any of these, call us to schedule a diagnostic visit.',
      },
      {
        question: 'Should I repair or replace my air conditioner?',
        answer:
          'That depends on the age of your system, the cost of the repair, and the overall condition of the unit. We provide honest recommendations so you can make an informed decision.',
      },
      {
        question: 'How long does an AC repair take?',
        answer:
          'Most repairs are completed on the same visit. More complex issues may require ordering parts, in which case we keep you informed every step of the way.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    name: 'Air Conditioning Installation',
    shortName: 'AC Installation',
    description:
      'Professional air conditioning installation for new construction, replacements, and system upgrades designed for efficiency and long-term performance.',
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'New air conditioner condenser unit installed on a building exterior',
    icon: 'Snowflake',
    summary:
      'A properly sized and installed air conditioning system delivers reliable cooling, lower energy bills, and consistent comfort throughout your home or building.',
    detailedContent: [
      'Installing a new air conditioning system is an investment in your comfort and property value. The key to getting the most from that investment is proper sizing and professional installation. An oversized unit cools too quickly without removing humidity, while an undersized one runs constantly and never quite reaches the desired temperature.',
      'Our installation process begins with a thorough assessment of your space. We consider square footage, ceiling height, insulation quality, window placement, sun exposure, and the number of occupants to calculate the correct cooling load. This ensures your new system operates efficiently and maintains consistent temperatures throughout your home or building.',
      'We install central air systems, ductless mini-splits, and packaged units. After installation, we test every component — refrigerant charge, airflow, electrical connections, thermostat communication — to make sure your new air conditioner is ready to perform reliably for years to come.',
    ],
    problems: [
      'Old system requiring frequent repairs',
      'Uneven cooling across rooms or floors',
      'Rising energy costs from an inefficient unit',
      'New construction or renovation needing cooling',
      'System that no longer meets your comfort needs',
    ],
    process: [
      {
        title: 'Load Calculation',
        description:
          'We assess your space to determine the correct cooling capacity, ensuring your new system is neither oversized nor undersized.',
      },
      {
        title: 'System Selection',
        description:
          'We help you choose an efficient system that fits your budget, comfort needs, and property requirements.',
      },
      {
        title: 'Expert Installation',
        description:
          'Our team installs your new air conditioner to manufacturer specifications and tests every component for optimal performance.',
      },
    ],
    faqs: [
      {
        question: 'How long does an air conditioning installation take?',
        answer:
          'A typical residential installation is completed in one day. Larger or more complex projects may take longer, and we communicate the timeline before starting.',
      },
      {
        question: 'What size air conditioner do I need?',
        answer:
          'Cooling capacity depends on square footage, insulation, window placement, and other factors. We perform a proper load calculation rather than guessing.',
      },
      {
        question: 'Do you remove and dispose of the old system?',
        answer:
          'Yes. We safely remove and dispose of your existing equipment as part of the installation process.',
      },
    ],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    shortName: 'Furnace Repair',
    description:
      'Dependable furnace repair service to keep your heating system running safely and efficiently through the coldest Michigan winters.',
    image: 'https://images.pexels.com/photos/6854973/pexels-photo-6854973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Flames burning in a furnace indicating heating system operation',
    icon: 'Flame',
    summary:
      'A malfunctioning furnace during a Michigan winter is more than an inconvenience. Our technicians diagnose heating problems quickly and get your system back up and running.',
    detailedContent: [
      'A furnace failure during a Michigan winter can quickly become a safety concern. Frozen pipes, uncomfortable indoor temperatures, and the risk of carbon monoxide from a malfunctioning system all make prompt furnace repair a priority. Our technicians respond quickly to restore your heat.',
      'We repair gas furnaces, electric furnaces, and oil furnaces. Common issues we address include ignition failures, faulty thermocouples, blower motor problems, cracked heat exchangers, and thermostat malfunctions. Our diagnostic process identifies the specific component that has failed so we can target the repair accurately.',
      'Safety is our first priority on every furnace repair. Before beginning any work, we check for gas leaks, carbon monoxide, and electrical hazards. If we detect a safety concern, we explain it immediately and recommend the appropriate course of action to protect your household.',
    ],
    problems: [
      'Furnace not producing heat',
      'Pilot light or ignition problems',
      'Frequent cycling or blower running continuously',
      'Unusual banging, rattling, or squealing sounds',
      'Carbon monoxide detector alerting',
      'System shutting off before reaching set temperature',
    ],
    process: [
      {
        title: 'Safety Inspection',
        description:
          'We check for safety concerns including gas leaks, carbon monoxide, and electrical issues before proceeding with any repair.',
      },
      {
        title: 'Accurate Diagnosis',
        description:
          'Our technician identifies the failed component and explains what is needed to restore your heating system.',
      },
      {
        title: 'Reliable Repair',
        description:
          'We replace faulty parts, test the system through a full heating cycle, and confirm safe, proper operation.',
      },
    ],
    faqs: [
      {
        question: 'Why is my furnace blowing cold air?',
        answer:
          'Common causes include a faulty igniter, pilot light issues, a tripped limit switch, or a problem with the gas supply. Call us for a professional diagnosis.',
      },
      {
        question: 'Is a noisy furnace dangerous?',
        answer:
          'Some noises indicate minor issues, while others may signal a serious safety concern. We recommend shutting down the system and calling us if you hear banging, popping, or screeching sounds.',
      },
      {
        question: 'How often should I have my furnace serviced?',
        answer:
          'Annual maintenance before the heating season helps prevent breakdowns and keeps your furnace running efficiently.',
      },
    ],
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    shortName: 'Furnace Installation',
    description:
      'Expert furnace installation for new builds, replacements, and high-efficiency upgrades designed for reliable winter comfort.',
    image: 'https://images.pexels.com/photos/9551366/pexels-photo-9551366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Indoor view of a modern heating system installation',
    icon: 'Flame',
    summary:
      'A correctly sized and installed furnace provides consistent, efficient heating and can significantly reduce your winter energy costs.',
    detailedContent: [
      'A new furnace is one of the most important investments you can make for winter comfort in Michigan. Modern high-efficiency furnaces can achieve AFUE ratings of 90% or higher, meaning that nearly all the energy consumed is converted into heat for your home. The right furnace, properly installed, can lower your winter energy bills while keeping every room warm.',
      'Our furnace installation process starts with a heat loss calculation for your home. We evaluate insulation, window quality, ductwork condition, and the climate to determine the correct heating capacity. A furnace that is too large will short-cycle, wasting energy and creating temperature swings. One that is too small will struggle during the coldest days.',
      'We install gas, electric, and oil furnaces from major manufacturers. After installation, we test the igniter, flame sensor, blower motor, venting, and thermostat communication to ensure safe and efficient operation. We also remove and dispose of your old equipment.',
    ],
    problems: [
      'Furnace more than 15-20 years old',
      'Frequent breakdowns and rising repair costs',
      'Inconsistent heating or cold spots in the home',
      'Energy bills increasing year over year',
      'Cracked heat exchanger or safety concern',
    ],
    process: [
      {
        title: 'Heating Assessment',
        description:
          'We evaluate your home size, insulation, ductwork, and comfort needs to recommend the right furnace capacity and efficiency level.',
      },
      {
        title: 'System Recommendation',
        description:
          'We present options that match your budget and comfort goals, explaining the benefits of each model.',
      },
      {
        title: 'Professional Installation',
        description:
          'We install your new furnace to code, connect it properly, and test every safety and performance component before completing the job.',
      },
    ],
    faqs: [
      {
        question: 'How long does a furnace installation take?',
        answer:
          'Most residential furnace installations are completed in one day. We provide a clear timeline before the work begins.',
      },
      {
        question: 'What efficiency rating should I look for?',
        answer:
          'High-efficiency furnaces (AFUE 90% or above) can reduce energy costs significantly. We help you compare models based on your heating needs and budget.',
      },
      {
        question: 'Do you offer warranties on furnace installations?',
        answer:
          'New furnaces typically come with manufacturer warranties. Call us to discuss warranty details for the system you are considering.',
      },
    ],
  },
  {
    slug: 'heating-system-repair',
    name: 'Heating System Repair',
    shortName: 'Heating Repair',
    description:
      'Comprehensive heating system repair for furnaces, boilers, heat pumps, and other heating equipment to keep your property warm and safe.',
    image: 'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting and repairing a heating system',
    icon: 'Thermometer',
    summary:
      'Whether you have a furnace, boiler, or heat pump, our technicians have the expertise to diagnose and repair all types of heating systems.',
    detailedContent: [
      'Heating systems in Michigan work hard for several months each year. Beyond furnaces, many homes and businesses use boilers, heat pumps, radiant heating, and hybrid systems. Each type has its own common failure points, and our technicians are experienced across the full range of heating equipment.',
      'Boiler repairs often involve pressure loss, circulator pump failures, zone valve issues, or leaks in the piping system. Heat pump repairs may involve reversing valve problems, defrost cycle failures, or refrigerant charge issues. Whatever type of heating system you have, we diagnose the specific problem and provide a clear repair plan.',
      'We carry common parts and have access to a wide network of suppliers for less common components. Our goal is to get your heat back on as quickly as possible while ensuring the repair is done right. We also advise you when a repair is approaching the point where replacement would be more cost-effective.',
    ],
    problems: [
      'Heating system not reaching the set temperature',
      'Uneven heat distribution across rooms',
      'System turning on and off too frequently',
      'Boiler leaks or pressure loss',
      'Heat pump stuck in one mode',
      'Unusual odors when the system runs',
    ],
    process: [
      {
        title: 'System Evaluation',
        description:
          'We inspect your heating equipment, identify the malfunction, and explain the issue in straightforward terms.',
      },
      {
        title: 'Clear Pricing',
        description:
          'You receive a written estimate for the repair before any work begins, so you know exactly what to expect.',
      },
      {
        title: 'Quality Repair',
        description:
          'We fix the problem using dependable parts and test the system through a complete cycle to confirm everything works.',
      },
    ],
    faqs: [
      {
        question: 'What types of heating systems do you repair?',
        answer:
          'We repair furnaces, boilers, heat pumps, and other common heating systems. Call us to confirm we service your specific equipment.',
      },
      {
        question: 'How can I tell if my heating system is failing?',
        answer:
          'Watch for rising energy bills, uneven heating, strange noises, frequent cycling, or a system that struggles to maintain temperature. These are signs it may need repair or replacement.',
      },
      {
        question: 'Can you repair my heating system the same day?',
        answer:
          'We strive to complete repairs on the first visit when parts are available. For more complex issues, we communicate the timeline clearly.',
      },
    ],
  },
  {
    slug: 'heating-system-installation',
    name: 'Heating System Installation',
    shortName: 'Heating Installation',
    description:
      'Professional installation of furnaces, boilers, heat pumps, and complete heating systems sized and selected for your property.',
    image: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician performing maintenance on a heating system with gauges',
    icon: 'ThermometerSun',
    summary:
      'A properly installed heating system delivers consistent warmth, operates efficiently, and reduces the risk of mid-winter breakdowns.',
    detailedContent: [
      'Choosing and installing the right heating system requires careful consideration of your property, your budget, and your long-term comfort goals. A system that is properly matched to your space will operate efficiently, maintain consistent temperatures, and last longer with fewer repairs.',
      'We install furnaces, boilers, heat pumps, and hybrid systems that combine multiple heating technologies. For homes with existing ductwork, a furnace or dual-fuel system may be the best fit. For properties with radiant piping, a boiler replacement can restore efficient heating. For homes looking to reduce energy use, a heat pump can provide both heating and cooling in one system.',
      'Every installation includes a full evaluation of your existing infrastructure — ductwork, piping, electrical, and ventilation — to ensure compatibility with the new equipment. We handle the removal of your old system, the installation of the new one, and all testing and commissioning to make sure everything works safely from day one.',
    ],
    problems: [
      'Old heating system nearing end of life',
      'Constant repairs adding up in cost',
      'Home addition or renovation requiring new heating',
      'System unable to keep up with cold weather',
      'Desire to upgrade to a more efficient system',
    ],
    process: [
      {
        title: 'Property Assessment',
        description:
          'We measure your space, evaluate existing ductwork or piping, and determine the correct heating capacity for your property.',
      },
      {
        title: 'System Selection',
        description:
          'We recommend heating options based on your comfort needs, energy goals, and budget, explaining the trade-offs of each.',
      },
      {
        title: 'Installation and Testing',
        description:
          'We install the system to manufacturer and code requirements, then test all safety and performance components thoroughly.',
      },
    ],
    faqs: [
      {
        question: 'How do I choose the right heating system?',
        answer:
          'The right system depends on your property size, existing infrastructure, energy goals, and budget. We assess all these factors and provide tailored recommendations.',
      },
      {
        question: 'How long does a heating system installation take?',
        answer:
          'Most residential installations are completed in one to two days. We provide a detailed timeline before starting the project.',
      },
      {
        question: 'Can you install a heating system in a new construction?',
        answer:
          'Yes. We work with homeowners and builders on new construction projects to design and install heating systems from the ground up.',
      },
    ],
  },
  {
    slug: 'heat-pump-services',
    name: 'Heat Pump Services',
    shortName: 'Heat Pump Services',
    description:
      'Complete heat pump services including repair, installation, and maintenance for energy-efficient heating and cooling in one system.',
    image: 'https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern heat pump system installed indoors',
    icon: 'RefreshCw',
    summary:
      'Heat pumps provide both heating and cooling in one efficient system. We service, repair, and install heat pumps for residential and commercial properties.',
    detailedContent: [
      'Heat pumps are one of the most versatile and energy-efficient HVAC options available. Instead of generating heat by burning fuel, a heat pump moves heat from one place to another — pulling heat out of your home in summer to cool it, and extracting heat from the outside air in winter to warm it. This process uses significantly less energy than traditional heating methods.',
      'Modern cold-climate heat pumps are designed to operate efficiently even when outdoor temperatures drop well below freezing. For Michigan homeowners, this means a heat pump can serve as a primary heating and cooling system or work in combination with a furnace as part of a dual-fuel setup that maximizes efficiency across all temperature ranges.',
      'We provide complete heat pump services including repair of compressor failures, refrigerant leaks, reversing valve issues, and defrost cycle problems. We also install new heat pump systems and perform the seasonal maintenance needed to keep them running at peak efficiency year after year.',
    ],
    problems: [
      'Heat pump not switching between heating and cooling',
      'Reduced efficiency or higher energy bills',
      'Ice buildup on the outdoor unit in winter',
      'Unusual noises during operation',
      'System short-cycling or not reaching set temperature',
      'Refrigerant leaks requiring professional attention',
    ],
    process: [
      {
        title: 'Full Inspection',
        description:
          'We examine both indoor and outdoor components, check refrigerant levels, and assess electrical connections for safe operation.',
      },
      {
        title: 'Diagnosis and Quote',
        description:
          'We identify any issues and provide a clear explanation and written estimate for the recommended service.',
      },
      {
        title: 'Service or Installation',
        description:
          'Whether repairing, maintaining, or installing a new heat pump, we complete the work to the highest standard and test performance.',
      },
    ],
    faqs: [
      {
        question: 'Can a heat pump work in Michigan winters?',
        answer:
          'Modern heat pumps are effective in cold climates. We can assess whether a heat pump is suitable for your property and recommend the right system.',
      },
      {
        question: 'How long do heat pumps last?',
        answer:
          'With proper maintenance, a heat pump typically lasts 10-15 years. Regular service helps maximize the lifespan and efficiency of your system.',
      },
      {
        question: 'Do heat pumps save money compared to separate furnace and AC?',
        answer:
          'Heat pumps can reduce energy costs because they move heat rather than generate it. We can evaluate your situation and provide specific guidance.',
      },
    ],
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    shortName: 'HVAC Maintenance',
    description:
      'Preventative HVAC maintenance services that extend equipment life, improve efficiency, and reduce the risk of costly breakdowns.',
    image: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting an outdoor HVAC unit during maintenance',
    icon: 'Wrench',
    summary:
      'Regular maintenance is the most effective way to protect your investment in heating and cooling equipment and avoid unexpected failures.',
    detailedContent: [
      'HVAC maintenance is the single most effective way to prevent unexpected breakdowns and keep your heating and cooling systems running efficiently. A well-maintained system uses less energy, provides more consistent comfort, and lasts longer than one that is neglected until something goes wrong.',
      'Our maintenance service covers both your heating and cooling systems. For air conditioners, we clean the condenser and evaporator coils, check refrigerant charge, inspect electrical connections, lubricate moving parts, and replace air filters. For furnaces and heating systems, we inspect the heat exchanger, clean burners, check ignition components, test safety controls, and verify proper venting.',
      'After each maintenance visit, you receive a detailed report of what was inspected, cleaned, and adjusted. We flag any components that are showing wear or may need attention in the future, so you can plan ahead rather than being caught off guard by a failure during extreme weather.',
    ],
    problems: [
      'System efficiency declining over time',
      'Minor issues escalating into major repairs',
      'Shorter equipment lifespan due to neglect',
      'Inconsistent comfort or air quality',
      'Higher utility bills with no obvious cause',
    ],
    process: [
      {
        title: 'Comprehensive Inspection',
        description:
          'We inspect all major components, check refrigerant levels, test electrical connections, and evaluate overall system performance.',
      },
      {
        title: 'Cleaning and Tuning',
        description:
          'We clean coils, replace filters, lubricate moving parts, and make adjustments to optimize efficiency and performance.',
      },
      {
        title: 'Detailed Report',
        description:
          'You receive a summary of the maintenance performed, along with recommendations for any repairs or improvements to consider.',
      },
    ],
    faqs: [
      {
        question: 'How often should I schedule HVAC maintenance?',
        answer:
          'We recommend maintenance twice a year: once before the cooling season and once before the heating season. This keeps both systems in top condition.',
      },
      {
        question: 'Does maintenance really prevent breakdowns?',
        answer:
          'Regular maintenance catches small issues before they become major failures. It also keeps your system running efficiently, which can lower energy bills.',
      },
      {
        question: 'What is included in an HVAC maintenance visit?',
        answer:
          'A typical visit includes inspection, cleaning, filter replacement, performance testing, and a report on system condition. Call us for specific details.',
      },
    ],
  },
  {
    slug: 'thermostat-services',
    name: 'Thermostat Services',
    shortName: 'Thermostat Services',
    description:
      'Thermostat installation, repair, and upgrade services including smart and programmable thermostats for better comfort and energy control.',
    image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern digital thermostat mounted on a wall',
    icon: 'Thermometer',
    summary:
      'A properly functioning thermostat is the control center of your heating and cooling system. We install, repair, and upgrade thermostats for precise comfort management.',
    detailedContent: [
      'The thermostat is the command center of your HVAC system. It controls when your heating and cooling equipment turns on and off, and it determines how comfortable your home feels. A faulty or outdated thermostat can cause temperature swings, energy waste, and unnecessary wear on your equipment.',
      'We install and configure a wide range of thermostats, from basic programmable models to Wi-Fi-enabled smart thermostats that learn your schedule and adjust automatically. Smart thermostats can be controlled from your phone, provide energy usage reports, and even integrate with other smart home devices. Professional installation ensures compatibility with your HVAC system and correct wiring for reliable operation.',
      'We also repair thermostats that are not functioning properly. Common issues include unresponsive touchscreens, incorrect temperature readings, short-cycling caused by thermostat miscommunication, and systems that fail to turn on or off at the right time. In many cases, a thermostat repair is a simple fix that restores full comfort control.',
    ],
    problems: [
      'Thermostat not responding or displaying incorrectly',
      'Temperature does not match the setting',
      'System runs when it should not, or fails to start',
      'Old thermostat lacking programmable features',
      'Want to upgrade to a smart or Wi-Fi thermostat',
    ],
    process: [
      {
        title: 'Compatibility Check',
        description:
          'We verify that the new thermostat is compatible with your heating and cooling system and your home wiring.',
      },
      {
        title: 'Installation and Setup',
        description:
          'We install the thermostat, configure it for your system, and set up scheduling or smart features according to your preferences.',
      },
      {
        title: 'Walkthrough',
        description:
          'We show you how to use the thermostat, including any app-based controls, and answer your questions before wrapping up.',
      },
    ],
    faqs: [
      {
        question: 'Can I install a smart thermostat myself?',
        answer:
          'Some homeowners do, but professional installation ensures compatibility with your HVAC system, correct wiring, and proper configuration of all features.',
      },
      {
        question: 'Will a programmable thermostat save me money?',
        answer:
          'A programmable thermostat can reduce energy use by adjusting temperatures when you are away or asleep. The savings depend on your schedule and settings.',
      },
      {
        question: 'My thermostat screen is blank. What should I do?',
        answer:
          'This could be a dead battery, a wiring issue, or a problem with the HVAC system. Call us and we will diagnose and resolve the issue.',
      },
    ],
  },
  {
    slug: 'indoor-air-quality',
    name: 'Indoor Air Quality',
    shortName: 'Indoor Air Quality',
    description:
      'Indoor air quality solutions including air filtration, humidity control, and ventilation to create a healthier indoor environment.',
    image: 'https://images.pexels.com/photos/32079712/pexels-photo-32079712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Air quality monitor next to a plant on an indoor table',
    icon: 'Wind',
    summary:
      'The air inside your home or business can contain pollutants, allergens, and excess humidity. We offer solutions to improve air quality for better comfort and health.',
    detailedContent: [
      'Most people spend the majority of their time indoors, which makes indoor air quality a significant factor in overall health and comfort. Dust, pollen, pet dander, mold spores, bacteria, cooking fumes, and volatile organic compounds from cleaning products and furniture can all accumulate in your home. Your HVAC system plays a central role in managing these pollutants.',
      'We offer a range of indoor air quality solutions that integrate with your existing heating and cooling system. High-efficiency air filters capture finer particles than standard filters. UV light systems neutralize bacteria and mold at the coil. Whole-house humidifiers add moisture during dry Michigan winters, while dehumidifiers remove excess moisture during humid summers. Energy recovery ventilators bring in fresh outdoor air while minimizing energy loss.',
      'Our process begins with an assessment of your indoor air and your HVAC system. We identify the specific pollutants or conditions affecting your home and recommend targeted solutions. Every home is different, and the right combination of filtration, humidity control, and ventilation depends on your specific situation and concerns.',
    ],
    problems: [
      'Allergy symptoms worsen indoors',
      'Excessive dust or pet dander in the air',
      'Dry air in winter or high humidity in summer',
      'Persistent odors or stale air',
      'Concern about airborne pollutants or mold',
    ],
    process: [
      {
        title: 'Air Quality Assessment',
        description:
          'We evaluate your indoor air, inspect your HVAC system, and identify factors contributing to poor air quality.',
      },
      {
        title: 'Solution Recommendations',
        description:
          'Based on our findings, we recommend appropriate solutions such as air purifiers, UV lights, humidifiers, dehumidifiers, or improved filtration.',
      },
      {
        title: 'Professional Installation',
        description:
          'We install the chosen solution into your existing HVAC system and verify it is operating correctly for maximum effectiveness.',
      },
    ],
    faqs: [
      {
        question: 'What causes poor indoor air quality?',
        answer:
          'Common causes include dust, pet dander, pollen, cooking fumes, cleaning chemicals, excess humidity, and inadequate ventilation. Your HVAC system plays a key role in managing these factors.',
      },
      {
        question: 'Will an air purifier help with allergies?',
        answer:
          'A quality air filtration system can reduce airborne allergens. We can recommend the right filtration level for your specific concerns.',
      },
      {
        question: 'How do I know if I need a humidifier or dehumidifier?',
        answer:
          'If your air is too dry in winter, you may need a humidifier. If humidity is too high, especially in summer, a dehumidifier can help. We assess your situation and recommend accordingly.',
      },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
