export interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  description: string;
}

export const locations: LocationData[] = [
  {
    slug: 'ann-arbor-mi',
    city: 'Ann Arbor',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Ann Arbor is the primary service area for On The Mark Mechanical. As a locally based HVAC contractor, we provide heating and cooling services to homes and businesses throughout the city and surrounding neighborhoods.',
  },
  {
    slug: 'dexter-mi',
    city: 'Dexter',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Dexter is a village in Washtenaw County located northwest of Ann Arbor. We offer HVAC services to residents and businesses in the Dexter area.',
  },
  {
    slug: 'saline-mi',
    city: 'Saline',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Saline is a city in Washtenaw County southwest of Ann Arbor. We provide heating and cooling services to homes and businesses in Saline.',
  },
  {
    slug: 'chelsea-mi',
    city: 'Chelsea',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Chelsea is a city in Washtenaw County northwest of Ann Arbor. We serve the HVAC needs of residential and commercial customers in Chelsea.',
  },
  {
    slug: 'ypsilanti-mi',
    city: 'Ypsilanti',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Ypsilanti is a city in Washtenaw County east of Ann Arbor. We provide heating and cooling repair, installation, and maintenance services to the Ypsilanti area.',
  },
  {
    slug: 'pittsfield-charter-township-mi',
    city: 'Pittsfield Charter Township',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Pittsfield Charter Township is located south of Ann Arbor in Washtenaw County. We offer HVAC services to residents and businesses in the township.',
  },
  {
    slug: 'scio-township-mi',
    city: 'Scio Township',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Washtenaw County',
    description:
      'Scio Township is located west of Ann Arbor in Washtenaw County. We provide heating and cooling services to homes and businesses in Scio Township.',
  },
  {
    slug: 'canton-mi',
    city: 'Canton',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Canton is a charter township in Wayne County northeast of Ann Arbor. We serve the HVAC needs of residential and commercial customers in Canton.',
  },
  {
    slug: 'plymouth-mi',
    city: 'Plymouth',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Plymouth is a city in Wayne County northeast of Ann Arbor. We provide heating and cooling services to homes and businesses in Plymouth.',
  },
  {
    slug: 'belleville-mi',
    city: 'Belleville',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne County',
    description:
      'Belleville is a city in Wayne County east of Ann Arbor. We offer HVAC repair, installation, and maintenance services to the Belleville area.',
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
