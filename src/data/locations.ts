export interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  description: string;
  dispatchTime: string;
  dispatchRoute: string;
  travelMinutes: string;
  housingStock: string;
  climateContext: string;
  hvacChallenges: string;
  utilityRebates: string;
  neighborhoods: string[];
  localFaqs: { question: string; answer: string }[];
}

export const locations: LocationData[] = [
  {
    slug: 'ann-arbor-mi',
    city: 'Ann Arbor',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Ann Arbor is the home headquarters and primary service hub for On The Mark Mechanical. Located at 3526 W Liberty Rd, Suite 300, our technicians provide immediate, local response for residential and commercial heating and cooling systems throughout Tree Town.',
    dispatchTime: 'Primary Headquarters · Immediate Local Dispatch',
    dispatchRoute: 'Dispatched directly from 3526 W Liberty Rd via W Liberty, Stadium, Jackson Rd, and Washtenaw Ave.',
    travelMinutes: '5–15 mins',
    housingStock:
      'Diverse architectural styles ranging from 19th-century Victorians and Craftsman bungalows in the Old West Side and Burns Park to modern eco-conscious homes in Water Hill and newer developments on the south side.',
    climateContext:
      'Humid continental climate characterized by sudden sub-zero winter arctic fronts and high-80s/90s summer heat waves with heavy humidity.',
    hvacChallenges:
      'Older homes often lack central ductwork, requiring specialized ductless mini-split installation or high-velocity systems. High demand for eco-friendly heat pumps and high-SEER2 equipment eligible for municipal and DTE energy rebates.',
    utilityRebates:
      'DTE Energy & Consumers Energy electric and gas rebates up to $1,500+ on qualifying high-efficiency heat pumps, ACs, and 96%+ AFUE gas furnaces.',
    neighborhoods: [
      'Old West Side',
      'Burns Park',
      'Kerrytown',
      'Water Hill',
      'Eberwhite',
      'Dicken',
      'Lower Burns Park',
      'Georgetown',
    ],
    localFaqs: [
      {
        question: 'Where is On The Mark Mechanical located in Ann Arbor?',
        answer:
          'Our physical office and dispatch hub is located at 3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103. Being locally based right off I-94 and W Liberty allows us to reach any Ann Arbor neighborhood in minutes.',
      },
      {
        question: 'Do you service historic Ann Arbor homes without existing ductwork?',
        answer:
          'Yes. Many historic Ann Arbor homes in the Old West Side and Kerrytown have radiator heat and no ductwork. We specialize in ductless mini-split heat pump installations that provide whisper-quiet heating and cooling without tearing down historic plaster walls.',
      },
      {
        question: 'Are permits required for HVAC replacement in the City of Ann Arbor?',
        answer:
          'Yes, the City of Ann Arbor Building Department requires mechanical and electrical permits for all furnace, air conditioning, and heat pump installations. We handle all required code compliance and permit filings for you.',
      },
    ],
  },
  {
    slug: 'dexter-mi',
    city: 'Dexter',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Dexter is a charming community along the Huron River just northwest of Ann Arbor. On The Mark Mechanical provides responsive HVAC repair, maintenance, and system replacements for historic village homes and surrounding acreage properties.',
    dispatchTime: 'Direct Dispatch from Ann Arbor HQ (~9 miles northwest)',
    dispatchRoute: 'Travel via Dexter-Ann Arbor Rd or Huron River Dr directly into downtown Dexter and surrounding township areas.',
    travelMinutes: '12–18 mins',
    housingStock:
      'Historic homes in the village center near Monument Park, alongside modern subdivisions and expansive rural custom properties along the Huron River.',
    climateContext:
      'River valley humidity in July and August increases cooling load; winter temperatures in surrounding township fields experience heavy wind chill.',
    hvacChallenges:
      'Elevated river-valley humidity demands precision AC sizing and whole-home dehumidification; rural properties with long duct runs require proper static pressure balancing.',
    utilityRebates:
      'Eligible for DTE Energy heating and cooling rebates on high-efficiency equipment.',
    neighborhoods: [
      'Dexter Crossing',
      'Huron Farms',
      'Downtown Village',
      'Webster Township borders',
      'Scio/Dexter corridor',
    ],
    localFaqs: [
      {
        question: 'How quickly can an On The Mark technician reach Dexter?',
        answer:
          'Our shop is on W Liberty Rd on the west side of Ann Arbor, only about 9 miles from downtown Dexter. Under normal traffic via Dexter-Ann Arbor Rd, our service vans arrive in 12 to 18 minutes for emergency AC or heating calls.',
      },
      {
        question: 'Why does my Dexter home feel humid even when the AC is running?',
        answer:
          'Dexter homes near the Huron River experience elevated outdoor moisture. If an AC unit is oversized, it cools the air too quickly without running long enough to pull out humidity. We test airflow and recommend proper staging or whole-home dehumidification.',
      },
    ],
  },
  {
    slug: 'saline-mi',
    city: 'Saline',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Saline is an active city southwest of Ann Arbor known for its strong community and historic charm. On The Mark Mechanical provides prompt heating, cooling, and air quality services to Saline homes and commercial facilities.',
    dispatchTime: 'Direct Dispatch from Ann Arbor HQ (~9 miles south)',
    dispatchRoute: 'Straight south down Ann Arbor-Saline Rd or US-12 (Michigan Ave).',
    travelMinutes: '14–20 mins',
    housingStock:
      'Historic properties along Michigan Avenue and established subdivisions such as Torwood, Brookside, and Austin Commons.',
    climateContext:
      'Southern Washtenaw wind exposure across open surrounding farmland creates high winter heat demand and temperature differentials.',
    hvacChallenges:
      'Hard municipal/well water can impact whole-home steam humidifiers and condensate lines; multi-story family homes often struggle with second-floor temperature imbalances.',
    utilityRebates:
      'DTE Energy gas furnace and central AC rebate programs available.',
    neighborhoods: [
      'Downtown Saline',
      'Brookside',
      'Torwood',
      'Austin Commons',
      'Curtiss Park Area',
      'Saline Township',
    ],
    localFaqs: [
      {
        question: 'Do you offer emergency HVAC service in Saline?',
        answer:
          'Yes. We dispatch directly down Ann Arbor-Saline Rd and can arrive at your Saline residence within 15 to 20 minutes when severe cold or extreme summer heat strikes.',
      },
      {
        question: 'How can I fix hot upstairs bedrooms in my two-story Saline home?',
        answer:
          'We evaluate your ductwork static pressure, install smart zoning dampers, or add targeted ductless units to balance second-story temperatures effectively.',
      },
    ],
  },
  {
    slug: 'chelsea-mi',
    city: 'Chelsea',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Chelsea is a historic city in western Washtenaw County. On The Mark Mechanical delivers dependable furnace repair, heat pump conversions, and air conditioning service to Chelsea residents and rural farm properties.',
    dispatchTime: 'Direct Dispatch from Ann Arbor HQ (~15 miles west)',
    dispatchRoute: 'Rapid west transit via I-94 W to M-52 / Old US-12 into Chelsea.',
    travelMinutes: '18–25 mins',
    housingStock:
      'Victorian residences near the historic Clocktower and Pierce Park, alongside expansive rural farmsteads and modern homes in Sibley Lake area.',
    climateContext:
      'Higher elevation and open western fields result in colder winter wind chills and early freeze cycles.',
    hvacChallenges:
      'Many rural properties rely on LP (propane) or electric resistance heat, making high-efficiency dual-fuel heat pumps an ideal money-saving upgrade.',
    utilityRebates:
      'DTE Energy & Consumers Energy rebates on high-efficiency heat pumps and furnaces.',
    neighborhoods: [
      'Downtown Clocktower District',
      'Pierce Park area',
      'Sibley Lake',
      'Lyndon Township borders',
      'Lima Township borders',
    ],
    localFaqs: [
      {
        question: 'Can I replace my expensive Chelsea propane heating with a heat pump?',
        answer:
          'Yes! A dual-fuel hybrid heat pump uses electricity to heat efficiently down to freezing temperatures and automatically switches to propane only during extreme sub-zero cold snaps, cutting fuel bills by up to 40%.',
      },
      {
        question: 'How fast do you dispatch for winter heating emergencies in Chelsea?',
        answer:
          'Our service vans travel straight down I-94 West from our W Liberty Rd shop, arriving in Chelsea in approximately 18 to 22 minutes.',
      },
    ],
  },
  {
    slug: 'ypsilanti-mi',
    city: 'Ypsilanti',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Ypsilanti is our neighbor directly east of Ann Arbor. On The Mark Mechanical provides trusted furnace repair, central AC upgrades, and preventive tune-ups for Ypsilanti residential homes, Depot Town properties, and local businesses.',
    dispatchTime: 'Direct Dispatch from Ann Arbor HQ (~8 miles east)',
    dispatchRoute: 'Transit via Washtenaw Ave, Packard Rd, or I-94 E straight into Ypsilanti and Ypsilanti Township.',
    travelMinutes: '12–18 mins',
    housingStock:
      'Historic 19th-century Queen Anne and Italianate homes in Depot Town and Normal Park, 1940s–1950s single-family homes, and multi-family rental properties near EMU.',
    climateContext:
      'Urban valley microclimate along the Huron River with humid summer afternoons and rapid winter temperature drops.',
    hvacChallenges:
      'Compact older basements with narrow stairwells requiring precision furnace sizing and vertical installation; aging cast iron or galvanized ductwork transitions.',
    utilityRebates:
      'DTE Energy full heating & cooling rebate programs available.',
    neighborhoods: [
      'Depot Town',
      'Normal Park',
      'College Heights',
      'Midtown',
      'Prospect Park',
      'Ypsilanti Township',
    ],
    localFaqs: [
      {
        question: 'Do you work on older gravity furnace and radiator systems in Ypsilanti?',
        answer:
          'Yes. We have over 20 years of experience upgrading historic Ypsilanti homes from outdated, inefficient heating setups to modern high-efficiency furnaces and heat pumps.',
      },
      {
        question: 'Are your technicians licensed for Ypsilanti rental inspection compliance?',
        answer:
          'Yes. We perform certified furnace safety and combustion analysis inspections required for City of Ypsilanti certificate of occupancy and rental compliance.',
      },
    ],
  },
  {
    slug: 'pittsfield-charter-township-mi',
    city: 'Pittsfield Charter Township',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Pittsfield Charter Township borders Ann Arbor immediately to the south. On The Mark Mechanical provides routine maintenance, AC repairs, and furnace replacements for Pittsfield’s vibrant residential subdivisions and business parks.',
    dispatchTime: 'Immediate Border Dispatch (~5–8 miles south)',
    dispatchRoute: 'Quick access via State St, Ellsworth Rd, Michigan Ave (US-12), and US-23.',
    travelMinutes: '10–15 mins',
    housingStock:
      'Modern master-planned subdivisions built during the 1990s and 2000s, newer townhome developments, and established single-family neighborhoods.',
    climateContext:
      'Typical southeast Michigan conditions requiring high summer dehumidification and steady winter heating.',
    hvacChallenges:
      'Many original 1990s/2000s builder-grade 80% furnaces and 10–13 SEER AC systems are reaching their 15–20 year life expectancy and failing during peak weather.',
    utilityRebates:
      'Full DTE Energy equipment rebate eligibility.',
    neighborhoods: [
      'Carpenter Rd corridor',
      'Ellsworth & State area',
      'Arbor Creek',
      'Stonebridge vicinity',
      'Platt Rd neighborhoods',
    ],
    localFaqs: [
      {
        question: 'My Pittsfield home was built in the early 2000s. Is it time to replace my AC?',
        answer:
          'If your air conditioner is 15–20 years old and still uses phased-out R-22 Freon, a replacement is significantly more economical than continuing expensive refrigerant refills. Modern systems also lower monthly DTE electric bills.',
      },
    ],
  },
  {
    slug: 'scio-township-mi',
    city: 'Scio Township',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Scio Township lies immediately west of our Ann Arbor headquarters. On The Mark Mechanical delivers rapid on-site service for Scio Township homes, custom subdivisions, and businesses along the Jackson Rd commercial corridor.',
    dispatchTime: 'Immediate Neighborhood Dispatch (~3–7 miles west)',
    dispatchRoute: 'Direct westward transit along W Liberty Rd, Scio Church Rd, and Jackson Rd.',
    travelMinutes: '5–12 mins',
    housingStock:
      'Spacious suburban subdivisions (Polo Run, Scio Highlands) alongside large multi-acre private estates and wooded custom homes.',
    climateContext:
      'Rolling terrain and rural wooded borders produce cold nighttime drafts and seasonal humidity spikes.',
    hvacChallenges:
      'Higher square footage properties requiring dual-zone or dual-system configurations, variable-speed blowers, and smart airflow balancing.',
    utilityRebates:
      'DTE Energy & Consumers Energy rebate programs apply.',
    neighborhoods: [
      'Polo Run',
      'Scio Highlands',
      'Delhi Mills',
      'Jackson Rd Corridor',
      'Scio Church rural area',
    ],
    localFaqs: [
      {
        question: 'How fast can you reach a home in Scio Township?',
        answer:
          'Because our physical shop is at 3526 W Liberty Rd right on the Ann Arbor/Scio border, our technicians can often be on-site in Scio Township in under 10 minutes.',
      },
    ],
  },
  {
    slug: 'canton-mi',
    city: 'Canton',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Canton is a major suburban community in western Wayne County. On The Mark Mechanical provides reliable furnace repair, AC installations, and system maintenance for Canton homeowners seeking trusted, direct trade craftsmanship.',
    dispatchTime: 'Direct Dispatch from Ann Arbor (~18 miles northeast)',
    dispatchRoute: 'Fast east-northeast corridor transit via M-14 E to Sheldon/Beck Rd or Ford Rd (M-153).',
    travelMinutes: '20–25 mins',
    housingStock:
      'Substantial single-family residential subdivisions constructed primarily between 1985 and 2015, featuring central forced-air heating and cooling.',
    climateContext:
      'Suburban microclimate with sustained summer heat index peaks in July/August and heavy winter freeze cycles.',
    hvacChallenges:
      'Replacement of aging builder equipment with high-SEER2 two-stage air conditioning and 96%+ two-stage variable-speed gas furnaces that eliminate hot/cold spots in large two-story floor plans.',
    utilityRebates:
      'DTE Energy Wayne County electric & gas rebate programs.',
    neighborhoods: [
      'Cherry Hill Village',
      'Ford Rd corridor',
      'Heritage Park area',
      'Glengarry',
      'Sheldon Rd subdivisions',
    ],
    localFaqs: [
      {
        question: 'Does On The Mark Mechanical service Canton, Wayne County?',
        answer:
          'Yes! We frequently dispatch to Canton along the M-14 and Ford Rd corridors. Our fully equipped service vans carry common parts for same-day repair of furnaces, heat pumps, and air conditioners in Canton.',
      },
      {
        question: 'Do you offer upfront quotes for furnace replacement in Canton?',
        answer:
          'Yes. We inspect your home, perform a proper load calculation, and provide a clear, upfront written estimate without high-pressure sales tactics.',
      },
    ],
  },
  {
    slug: 'plymouth-mi',
    city: 'Plymouth',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Plymouth is a vibrant community in western Wayne County known for Kellogg Park and historic neighborhoods. On The Mark Mechanical delivers high-quality air conditioning, heating, and indoor air quality solutions to Plymouth homes and businesses.',
    dispatchTime: 'Direct Dispatch from Ann Arbor (~20 miles northeast)',
    dispatchRoute: 'Direct transit up M-14 E to Beck Rd, Sheldon Rd, or Ann Arbor Rd.',
    travelMinutes: '22–28 mins',
    housingStock:
      'Mix of historic character homes in Old Village and downtown Kellogg Park, alongside established mid-century and modern subdivisions in Plymouth Township.',
    climateContext:
      'Classic four-season southeastern Michigan weather demanding quiet outdoor condensers on compact residential parcels.',
    hvacChallenges:
      'Property line setbacks in historic downtown areas require ultra-quiet, compact outdoor condensers; older masonry chimneys require proper metal liners when converting to high-efficiency condensing equipment.',
    utilityRebates:
      'DTE Energy Wayne County rebate programs.',
    neighborhoods: [
      'Old Village',
      'Downtown / Kellogg Park area',
      'Plymouth Township',
      'Lake Pointe',
      'Ann Arbor Rd corridor',
    ],
    localFaqs: [
      {
        question: 'Can you install quiet AC units for compact lots in Downtown Plymouth?',
        answer:
          'Yes. In historic Plymouth where homes are close together, loud outdoor units can cause neighbor friction. We install whisper-quiet inverter and two-stage condensers with sound ratings as low as 55 dBA.',
      },
    ],
  },
  {
    slug: 'belleville-mi',
    city: 'Belleville',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Belleville is situated on the shores of Belleville Lake in western Wayne County. On The Mark Mechanical provides responsive heating, air conditioning, and lakefront humidity control solutions for Belleville and Van Buren Township.',
    dispatchTime: 'Direct Dispatch from Ann Arbor (~20 miles east)',
    dispatchRoute: 'Smooth eastward transit via I-94 E to Belleville Rd or Rawsonville Rd.',
    travelMinutes: '20–26 mins',
    housingStock:
      'Lakefront homes and seasonal cottages along Belleville Lake, alongside established single-family subdivisions throughout Van Buren Township.',
    climateContext:
      'High ambient moisture and lakefront humidity in summer; open water winter winds that challenge heating systems.',
    hvacChallenges:
      'Elevated lakefront moisture demands dedicated whole-home dehumidifiers and correctly sized AC equipment to prevent mold and clamminess; outdoor coils need regular inspection against environmental exposure.',
    utilityRebates:
      'DTE Energy Wayne County residential heating and cooling rebates.',
    neighborhoods: [
      'Belleville Lakefront',
      'Downtown Belleville',
      'Van Buren Township',
      'Rawsonville corridor',
      'Sumpter area',
    ],
    localFaqs: [
      {
        question: 'How do you combat high humidity in Belleville lakefront homes?',
        answer:
          'Lakefront homes frequently have high relative humidity even when the thermostat temperature is satisfied. We install integrated whole-home dehumidifiers and multi-stage cooling that maintain comfortable 45-50% humidity levels year-round.',
      },
    ],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
