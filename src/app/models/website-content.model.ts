export interface Product {
  id: string; name: string; category: string; power: string; connector: string; supply: string;
  description: string; applications: string[]; features: string[]; image: string;
  document: string | null; visibility: boolean; notice?: string;
}
export interface WebsiteContent {
  site: { title: string; companyName: string; tagline: string; description: string; logo: string; bijlifyLogo?: string; enquiryUrl?: string; appUrl?: string; themeColors?: {navy:string;blue:string;cyan:string;white:string}; primaryCta: {label:string;href:string}; phone:string; email:string; address:string; socialLinks: {label:string;url:string}[] };
  navigation: {label:string;path:string}[];
  home: {eyebrow:string;headline:string;description:string;bijlifyLogoAlt?:string;chargerImage?:string;primaryCta:string;secondaryCta:string;highlights:{value:string;label:string}[]};
  about: {title:string;description:string;shortTitle?:string;shortDescription?:string;commitment?:string;longSections?:{title:string;body:string;items?:string[]}[];closing?:string;experience:string;principles:string[]};
  products: Product[];
  applications: {title:string;description:string;items:{title:string;description:string}[]};
  services: {title:string;items:string[]};
  zenBundle: {title:string;rate:string;description:string;hardware:string[];software:string[];note:string};
  whyUs: {title:string;items:string[]};
  faqs: {question:string;answer:string}[];
  contact: {title:string;description:string;phone:string;email:string;address:string;formFields:string[];formNotice:string};
  footer: {text:string;copyright:string;appLabel?:string;appDescription?:string};
  seo: {defaultTitle:string;defaultDescription:string};
}
