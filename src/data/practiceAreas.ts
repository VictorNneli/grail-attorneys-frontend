import { Scale, Gavel, Building2, Home, Clapperboard, Zap, Lightbulb, Vote, Fuel } from 'lucide-react';
import type { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'human-rights-criminal-justice',
    title: 'Human Rights & Criminal Justice',
    description: 'Safeguarding civil liberties, dignified representation, and access to justice across courts, tribunals, and law enforcement proceedings.',
    image: '/images/practice-human-rights.png',
    icon: Scale
  },
  {
    slug: 'litigation-adr',
    title: 'Litigation & Alternative Dispute Resolution',
    description: 'Decisive courtroom advocacy and tactical commercial mediation across Nigerian high courts, appellate divisions, and arbitral tribunals.',
    image: '/images/practice-litigation.png',
    icon: Gavel
  },
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial Law',
    description: 'Regulatory compliance, business registration, mergers, and structured financing for businesses, entrepreneurs, and multinationals.',
    image: '/images/practice-corporate.png',
    icon: Building2
  },
  {
    slug: 'real-estate-property',
    title: 'Real Estate & Property Management',
    description: 'Title perfection, land acquisition due diligence, and lease/property agreement drafting across Abia, Imo, and the South-East.',
    image: '/images/practice-real-estate.png',
    icon: Home
  },
  {
    slug: 'media-entertainment-technology-sports-law',
    title: 'Media, Entertainment, Technology and Sports Law (METS)',
    description: 'This is an emerging area of law and due to our attention to details and quest for growth we delved into it as this industry is in dire need of innovative and brilliant solicitors and litigators. We have over the years brought our collective experience and solution driven mindset towards solving complex legal issues in the creative, technology and sport industry.',
    image: '/images/practice-mets.jpeg',
    icon: Clapperboard
  },
  {
    slug: 'energy-law',
    title: 'Energy Law',
    description: 'Climate change has expanded the scope of the energy/power industry, with renewable energy the new normal. This without an iota of doubt has led to rapid development in the energy landscape which is a critical sector in the development of any economy. With growth comes opportunities and challenges, thus, the need for the advisory service of an expert energy law solicitor to help harness the opportunities of this ever growing industry.',
    details: [
      `Climate change has expanded the scope of the energy/power industry, with renewable energy the new normal. This without an iota of doubt has led to rapid development in the energy landscape which is a critical sector in the development of any economy. With growth comes opportunities and challenges, thus, the need for the advisory service of an expert energy law solicitor to help harness the opportunities of this ever growing industry.`,
      `Grail Attorneys team of experienced and vibrant energy lawyers have closely followed developments in the energy industry and thus a trusted ally to help industry players navigate the intricacies of this industry.`,
      {
        intro: `Our wide grasp and understanding of the regulatory and commercial issues in the energy industry is top notch. We have over the years successfully provided bespoke services to our esteemed clients in areas such as:`,
        items: [
          `General legal regulatory framework in the energy sector including foreign investment laws and regimes in Nigeria.`,
          `Expert advisory services on ownership and construction of power projects and other energy matters.`,
          `Obtaining relevant licenses and authorizations.`,
          `Negotiating and drafting all industry commercial agreement such as joint ventures, development agreement, sales and purchase agreement among others.`,
          `Due diligence on all energy assets and contracts.`,
          `Acquisition and disposal of all energy assets.`,
          `Regulatory and compliance matters.`,
          `Litigation, dispute resolution, arbitration and mediation.`,
          `General advisory services.`
        ]
      }
    ],
    image: '/images/practice-energy.jpeg',
    icon: Zap
  },
  {
    slug: 'intellectual-property-law',
    title: 'Intellectual Property Law',
    description: 'Our intellectual property law department is fully engaged in diverse areas of intellectual property.',
    image: '/images/practice-ip.jpg',
    icon: Lightbulb
  },
  {
    slug: 'election-petition-experts',
    title: 'Election Petition Experts',
    description: 'Election petition is sui generis. Our capacity building programme has helped our attorneys carve a niche for themselves in this unique area of law.',
    image: '/images/practice-election.jpeg',
    icon: Vote
  },
  {
    slug: 'oil-and-gas-law',
    title: 'Oil and Gas Law',
    description: 'The fulcrum of the Nigeria economy is oil and gas. The important and complex nature of this industry has brought about so many legal issues that demands expert legal services.',
    details: [
      `The fulcrum of the Nigeria economy is oil and gas. The important and complex nature of this industry has brought about so many legal issues that demands expert legal services.`,
      {
        intro: `We engage in:`,
        items: [
          `Advisory services in respect of Oil & Gas transactions.`,
          `Obtaining relevant licenses such as Petroleum Exploration licence (PELS) Petroleum Prospecting license (PPLS) Petroleum Mining License (PMLS), haulage permit amongst others.`,
          `Drafting and review of all oil and gas contracts, agreements and instruments.`,
          `Regulatory compliance.`,
          `Arbitration and Negotiation.`,
          `Petroleum Industry litigation.`
        ]
      },
      `Our efficiency in rendering services in this practice areas cannot be over emphasized. Our clientele which cuts across major brands and start-ups have constantly been satisfied with our diligent advisory, dispute resolution and litigation services.`
    ],
    image: '/images/practice-oil-gas.jpeg',
    icon: Fuel
  }
];