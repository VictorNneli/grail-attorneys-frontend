import { Scale, Gavel, Building2, Home, Clapperboard, Zap, Lightbulb, Vote, Fuel } from 'lucide-react';
import type { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
    {
    slug: 'human-rights-criminal-justice',
    title: 'Human Rights and Criminal Justice',
    description: 'Our Human Rights and Criminal Justice department consist of some of the finest Human Rights and Criminal Justice lawyers exclusively devoted to defending and protecting the rights of our clients accused of criminal offences. Whether they are charged with a misdemeanour, a felony or a serious/capital offence, we walk by them every step of the way.',
    details: [
      `Our Human Rights and Criminal Justice department consist of some of the finest Human Rights and Criminal Justice lawyers exclusively devoted to defending and protecting the rights of our clients accused of criminal offences. Whether they are charged with a misdemeanour, a felony or a serious/capital offence, we walk by them every step of the way.`,
      { emphasis: `“You are innocent until proven guilty beyond reasonable doubt.”` },
      `At Grail Attorneys, we are a beacon of excellence in the realm of Human Rights and Criminal Justice. Our team’s impeccable track record speaks volume. We have consistently delivered favourable outcome in high-stake criminal cases from achieving acquittals and reduced charges to securing dismissals and favourable plea bargains.`,
      {
        intro: `Our team is fully abreast with relevant and modern principles of international treaties and conventions governing all Human Right matters such as:`,
        items: [
          `State relations with her citizens and foreigners.`,
          `Protection of the fundamental rights and citizens in accordance to international best practices.`,
          `Fundamental Rights enforcement litigation.`,
          `Activism in respect of the protection of child’s right.`,
          `Restorative justice and so-forth.`
        ]
      },
      `Over the years, our Human Rights and Criminal Justice department have brought smiles and hope to so many indigent persons and police brutality victims by representing them effectively at all levels of court up to the supreme court and also before different tribunals and panels of inquiry to get manifest justice. We have also partnered with the Legal Aid Council of Nigeria, the Nigeria Bar Association section on Public Interest and Development Law and other numerous Non-governmental Organization to assist in the decongestion of the correctional centres all over Nigeria as we have successfully released over one hundred and fifty (150) awaiting trial inmates who were illegally detained as a result of the #ENDSARS protest, #IPOB protest amongst others.`
    ],
    image: '/images/practice-human-rights.png',
    icon: Scale
  },
    {
    slug: 'litigation-adr',
    title: 'Litigation and Alternative Dispute Resolution (ADR)',
    description: 'Our Litigation and Alternative Dispute Resolution department consist of the finest breed of lawyers who have benefitted immensely from the firms capacity building programme making them seasoned trial lawyers and Alternative Dispute Resolution practitioners. We have used our diversified but intertwined expertise to navigate complex legal landscape and consistently deliver robust legal representation tailored to the unique needs of each client.',
    details: [
      `Our Litigation and Alternative Dispute Resolution department consist of the finest breed of lawyers who have benefitted immensely from the firms capacity building programme making them seasoned trial lawyers and Alternative Dispute Resolution practitioners. We have used our diversified but intertwined expertise to navigate complex legal landscape and consistently deliver robust legal representation tailored to the unique needs of each client.`,
      `Over the years, we have been acknowledged and renowned as a litigation law firm across all practice areas. Our litigation department has enjoyed enviable reputation as seasoned advocates dedicated to the cause of our clients in contentious trial and appellate matters. Regardless, the interest of our client remains our priority. Thus, the option of out- of-court settlement that gives real value to our client is always open in other to save our clients time and resources alongside preserving valuable business relationship.`,
      {
        intro: `In the spirit of out of court settlement, our ADR department who are adept at facilitating constructive dialogue, fostering collaborative solutions and resolving disputes efficiently outside the court room have successfully:`,
        items: [
          `Brought disputing parties to a round table, extinguished hostilities and created a room for progressive discussion on all issues in contention.`,
          `Engaged in negotiations, conciliation, mediation and arbitration.`,
          `Settled disputes amicably between persons and corporate bodies all over the globe both physically and virtually.`,
          `Represented clients in plea bargain matters effectively.`,
          `Played advisory roles in ensuring proper compliance with arbitration awards and so forth.`
        ]
      }
    ],
    image: '/images/practice-litigation.png',
    icon: Gavel
  },
    {
    slug: 'corporate-commercial',
    title: 'Corporate and Commercial Law Practice',
    description: 'We take pride in our innovative solution driven mindset aimed at protecting the best interest of our clients in all Corporate/Commercial transaction.',
    details: [
      `Grail Attorney’s corporate and commercial law department has over the years offered real time practical corporate and commercial advice to both multinational corporations and start-up businesses in various sectors on legal issues which has massively impacted their businesses.`,
      {
        intro: `Our team of corporate and commercial lawyers have distinguished themselves repeatedly in advising and representing clients in several business and/or corporate related transactions ranging from:`,
        items: [
          `Pre-incorporation contracts and Business formation.`,
          `Post incorporation matters.`,
          `Corporate governance.`,
          `Securities and collective investment contracts.`,
          `Regulatory and statutory compliances.`,
          `Mergers and Acquisition.`,
          `Company secretarial services.`,
          `General corporate Restructuring.`,
          `General Tax compliance matters.`,
          `Banking and finance investments.`,
          `Preparation of all kinds of agreements and contractual documents such as:`,
          `Joint Ventures, Franchise, Non-Disclosure Agreement, Employment Contracts, Shareholding and Partnership Agreements amongst others.`,
          `General Advisory Services pertaining to general commercial contracts.`
        ]
      },
      `The capacity building programme of this firm has kept our team of corporate and commercial lawyers updated and abreast with modern legal treads which aid innovative solutions, geared towards the success of our client’s businesses.`
    ],
    image: '/images/practice-corporate.png',
    icon: Building2
  },
    {
    slug: 'real-estate-property',
    title: 'Real Estate and Property Management Law',
    description: 'Our diligent team of lawyers in this department provides top notch advisory services to both our local and international clients on all aspects of real estate and property management.',
    details: [
      `Our diligent team of lawyers in this department provides top notch advisory services to both our local and international clients on all aspects of real estate and property management.`,
      {
        intro: `We have over the years ensured due diligence in acquiring land and managing the estate of our esteemed clients. Our specialization in this area includes but not limited to:`,
        items: [
          `Proper investigation of title to land and other related searches.`,
          `Preparation of all kind of title documents.`,
          `Prompt registration of title documents.`,
          `Procurement of genuine certificate of occupancy.`,
          `Expert advisory services to client’s pertaining to Real Estate acquisitions and purchase.`,
          `Top notch management of our client’s estate.`
        ]
      }
    ],
    image: '/images/practice-real-estate.png',
    icon: Home
  },
    {
    slug: 'media-entertainment-technology-sports-law',
    title: 'Media, Entertainment, Technology and Sports (METS) Law',
    description: 'This is an emerging area of law and due to our attention to details and quest for growth we delved into it as this industry is in dire need of innovative and brilliant solicitors and litigators. We have over the years brought our collective experience and solution driven mindset towards solving complex legal issues in the creative, technology and sport industry.',
    details: [
      `This is an emerging area of law and due to our attention to details and quest for growth we delved into it as this industry is in dire need of innovative and brilliant solicitors and litigators. We have over the years brought our collective experience and solution driven mindset towards solving complex legal issues in the creative, technology and sport industry.`,
      `We engage in expert advisory services, dispute resolution, regulatory compliances, intellectual property insurance, legal representation on contentious and non-contentious issues, legal documentations, contract reviews amongst other to both major brands and start-ups in this industry.`,
      `Our top notch understanding of the intricacies of this industry have been beneficial to our esteemed clients as we have successfully closed business transactions swiftly and efficiently while offering cost effective, affordable and wholesome legal services.`
    ],
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
    details: [
      `Our intellectual property law department is fully engaged in diverse areas of intellectual property.`,
      `Over the years, we have successfully assisted our clients who are both major brands and start-ups in registering, managing and protecting their intellectual assets/ideas.`,
      {
        intro: `We offer swift and bespoke services to meet the specific needs of each client on the following areas of intellectual property:`,
        items: [
          `Trademark.`,
          `Copyright.`,
          `Patents and designs.`,
          `Trade secrets.`,
          `Product Registration.`,
          `Contentious and non-contentious intellectual property matters before administrative tribunals, arbitration panels, trials and appellate courts.`
        ]
      }
    ],
    image: '/images/practice-ip.jpg',
    icon: Lightbulb
  },
    {
    slug: 'election-petition-experts',
    title: 'Election Petition Experts',
    description: 'Election petition is sui generis. Our capacity building programme has helped our attorneys carve a niche for themselves in this unique area of law.',
    details: [
      `Election petition is sui generis. Our capacity building programme has helped our attorneys carve a niche for themselves in this unique area of law.`,
      `We have a specialized team of election law experts with extensive experience in navigating the intricacies of election petition. Our understanding of the time-sensitive nature of election petition and our strategic litigation approach tailored to each case is top notch.`,
      `We have over the years been involved in high profile election petition matters as a firm and also in collaboration with other law firms, which portrays our ability to be a team player.`,
      `Most recently we were part of the legal teams that successfully defended the 2023 election victory of the Governor of Abia State from the tribunal level up to the supreme court among other successful election petition matters we have litigated upon.`,
      `We maintain a robust team of election petition lawyers who possess deep understanding of electoral laws, constitutional provisions and precedents relevant to challenging/defending election outcomes, so as to ensure top notch representation of our clients.`,
      `Our team of lawyers are specialized in resolving all legal pre and post election dispute.`
    ],
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