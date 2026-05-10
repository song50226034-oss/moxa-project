"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "en" | "ja" | "zh";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
};

type Translations = {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    viewProducts: string;
    requestSamples: string;
    brandMessage: string;
  };
  markets: {
    tagline: string;
    title: string;
    japanClinics: string;
    japanClinicsDesc: string;
    westernWellness: string;
    westernWellnessDesc: string;
    asiaDistribution: string;
    asiaDistributionDesc: string;
    therapyCenters: string;
    therapyCentersDesc: string;
  };
  advantages: {
    tagline: string;
    title: string;
    nanyangAccess: string;
    nanyangAccessDesc: string;
    qualityAssurance: string;
    qualityAssuranceDesc: string;
    oemCapability: string;
    oemCapabilityDesc: string;
    globalShipping: string;
    globalShippingDesc: string;
  };
  process: {
    tagline: string;
    title: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
    step5: string;
    step5Desc: string;
  };
  products: {
    tagline: string;
    title: string;
    subtitle: string;
    moxaStick: string;
    moxaStickDesc: string;
    moxaStickShort: string;
    moxaStickSpec: string;
    smokelessDevice: string;
    smokelessDeviceDesc: string;
    smokelessDeviceShort: string;
    smokelessDeviceSpec: string;
    moxaBox: string;
    moxaBoxDesc: string;
    moxaBoxShort: string;
    moxaBoxSpec: string;
    moxaWool: string;
    moxaWoolDesc: string;
    moxaWoolShort: string;
    moxaWoolSpec: string;
    moxaCone: string;
    moxaConeDesc: string;
    moxaConeShort: string;
    moxaConeSpec: string;
    moxaPatch: string;
    moxaPatchDesc: string;
    moxaPatchShort: string;
    moxaPatchSpec: string;
    useCase: string;
    specifications: string;
    inquireNow: string;
    viewDetails: string;
    requestSample: string;
    keySpecs: string;
    moqLabel: string;
    oemAvailable: string;
    categoryTraditional: string;
    categoryModern: string;
    categoryRaw: string;
    filterAll: string;
    // Product detail page
    usageScenarios: string;
    oemPrivateLabel: string;
    customManufacturing: string;
    customManufacturingDesc: string;
    oemManufacturing: string;
    privateLabelBranding: string;
    flexibleMoq: string;
    qualityCertification: string;
    discussOem: string;
    shippingInfo: string;
    globalDelivery: string;
    productFaq: string;
    relatedProducts: string;
    readyToOrder: string;
    readyToOrderDesc: string;
    sendInquiry: string;
    // Trust badges
    isoCertified: string;
    qualityAssured: string;
    oemReady: string;
    privateLabel: string;
    globalShipping: string;
    countriesServed: string;
    freeSamples: string;
    creditedToOrder: string;
    showingProducts: string;
    // OEM Section
    oemServices: string;
    oemSectionTitle: string;
    oemSectionDesc: string;
    oemItem1: string;
    oemItem2: string;
    oemItem3: string;
    oemItem4: string;
    oemClients: string;
    // Sample CTA
    sampleCtaDesc: string;
    // Inquiry form
    inquirySubmitted: string;
    inquirySubmittedDesc: string;
    close: string;
    inquireAbout: string;
    inquiryFormDesc: string;
    expectedQuantity: string;
    expectedQuantityPlaceholder: string;
    cancel: string;
    packaging: string;
  };
  quality: {
    tagline: string;
    title: string;
    subtitle: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
  };
  faq: {
    tagline: string;
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  cta: {
    requestSamples: string;
    becomeDistributor: string;
    contactUs: string;
    whatsapp: string;
    wechat: string;
  };
  contact: {
    tagline: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    country: string;
    countryPlaceholder: string;
    inquiryType: string;
    selectType: string;
    typeSample: string;
    typeDistributor: string;
    typeOEM: string;
    typeGeneral: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitted: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    address: string;
  };
  about: {
    tagline: string;
    title: string;
    subtitle: string;
    story: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    manufacturingTitle: string;
    manufacturingDesc: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    description: string;
    products: string;
    company: string;
    contact: string;
    premiumMoxa: string;
    smokelessDevices: string;
    oemServices: string;
    rights: string;
    location: string;
    aboutUs: string;
    faq: string;
    contactUs: string;
    email: string;
    hours: string;
    allRightsReserved: string;
  };
  // Trust badges and stats
  stats: {
    isoCertified: string;
    countriesServed: string;
    yearsExperience: string;
    yearsExperienceLabel: string;
    exportCountriesLabel: string;
    b2bPartnersLabel: string;
    sqMetersFacility: string;
    skilledWorkers: string;
    unitsYearCapacity: string;
    qualityPassRate: string;
  };
  // About page
  aboutPage: {
    whyPartnerTitle: string;
    productionTagline: string;
    ourJourney: string;
    milestones: string;
    readyToPartner: string;
    readyToPartnerDesc: string;
    viewProducts: string;
    timeline2010: string;
    timeline2014: string;
    timeline2016: string;
    timeline2018: string;
    timeline2020: string;
    timeline2024: string;
  };
  // Countries for form
  countries: {
    japan: string;
    unitedStates: string;
    germany: string;
    france: string;
    unitedKingdom: string;
    canada: string;
    australia: string;
    southKorea: string;
    taiwan: string;
    singapore: string;
    malaysia: string;
    thailand: string;
    vietnam: string;
    indonesia: string;
    india: string;
    other: string;
  };
  // Product detail data translations
  productDetails: {
    // Use case labels
    useClinic: string;
    useModernWellness: string;
    useSpaTherapy: string;
    useManufacturing: string;
    useAcupuncture: string;
    useRetailHome: string;
    // Specification labels
    specPurityRatio: string;
    specDiameter: string;
    specLength: string;
    specAgingPeriod: string;
    specBurnTime: string;
    specMaterial: string;
    specType: string;
    specTempRange: string;
    specHeatingDuration: string;
    specPowerSource: string;
    specSmokeLevel: string;
    specSizes: string;
    specInterior: string;
    specHeightAdjustment: string;
    specFit: string;
    specFinish: string;
    specPurityGrades: string;
    specForm: string;
    specSource: string;
    specAging: string;
    specColor: string;
    specPackaging: string;
    specTypes: string;
    specBase: string;
    specGrade: string;
    specHeatDuration: string;
    specTemperature: string;
    specIngredients: string;
    specAdhesive: string;
    specSkinSafe: string;
    // Specification values
    valPurityRange: string;
    valDiameters: string;
    valLength200: string;
    valAging3to5: string;
    valBurnTime45to60: string;
    valPureArtemisia: string;
    valCarbonSmokeless: string;
    valTempRange40to65: string;
    valHeating20to40: string;
    valPowerOptions: string;
    valUltraLow: string;
    valMedicalGrade: string;
    valBambooWalnut: string;
    valBoxSizes: string;
    valStainlessMesh: string;
    val3Levels: string;
    valStandardSticks: string;
    valNaturalLacquer: string;
    valPurityGrades: string;
    valLooseCompressed: string;
    valNanyangArtemisia: string;
    valAging1to5: string;
    valGoldenYellow: string;
    valBagSizes: string;
    valConeTypes: string;
    valConeSizes: string;
    valConeBurn3to8: string;
    valConePurity: string;
    valConeBase: string;
    valClinicalPro: string;
    valHeat8to12: string;
    valTemp40to50: string;
    valPatchSizes: string;
    valPatchIngredients: string;
    valHypoallergenic: string;
    valDermoTested: string;
    // Packaging info
    packMoxaStick: string;
    packSmokeless: string;
    packMoxaBox: string;
    packMoxaWool: string;
    packMoxaCone: string;
    packMoxaPatch: string;
    // Shipping info
    shipMoxaStick: string;
    shipSmokeless: string;
    shipMoxaBox: string;
    shipMoxaWool: string;
    shipMoxaCone: string;
    shipMoxaPatch: string;
    // Usage scenarios
    scenarioClinicMoxa: string;
    scenarioTcm: string;
    scenarioWellnessSpa: string;
    scenarioPhysicalTherapy: string;
    scenarioModernClinic: string;
    scenarioUrbanSpa: string;
    scenarioHomeTherapy: string;
    scenarioSensitivePatient: string;
    scenarioAbdominalMoxa: string;
    scenarioBackShoulder: string;
    scenarioSpaHeat: string;
    scenarioHomeWellness: string;
    scenarioDirectMoxa: string;
    scenarioConeStickMfg: string;
    scenarioOemProduction: string;
    scenarioResearchDev: string;
    scenarioPreciseAcupoint: string;
    scenarioScarringTech: string;
    scenarioCombinedTherapy: string;
    scenarioHomeSupervised: string;
    scenarioRetailWellness: string;
    scenarioHomePainRelief: string;
    scenarioTravelTherapy: string;
    scenarioSupplementClinical: string;
    // FAQ questions and answers
    faqPurityBest: string;
    faqPurityBestAns: string;
    faqStorage: string;
    faqStorageAns: string;
    faqCustomPackaging: string;
    faqCustomPackagingAns: string;
    faqIndoorUse: string;
    faqIndoorUseAns: string;
    faqTempAccuracy: string;
    faqTempAccuracyAns: string;
    faqElectricVersion: string;
    faqElectricVersionAns: string;
    faqWoodTypes: string;
    faqWoodTypesAns: string;
    faqHeightAdjust: string;
    faqHeightAdjustAns: string;
    faqReplacementParts: string;
    faqReplacementPartsAns: string;
    faqPurityGrade: string;
    faqPurityGradeAns: string;
    faqQualityDetermined: string;
    faqQualityDeterminedAns: string;
    faqSampleGrades: string;
    faqSampleGradesAns: string;
    faqConeTypes: string;
    faqConeTypesAns: string;
    faqConePopular: string;
    faqConePopularAns: string;
    faqConeGinger: string;
    faqConeGingerAns: string;
    faqSensitiveSkin: string;
    faqSensitiveSkinAns: string;
    faqCutSize: string;
    faqCutSizeAns: string;
    faqRetailPackaging: string;
    faqRetailPackagingAns: string;
  };
};

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Premium Moxa Supply from Nanyang, China",
      title: "Traditional Eastern Wellness Solutions for Modern Clinics",
      subtitle: "Connecting global wellness professionals with authentic moxa products from China's renowned herbal production region",
      viewProducts: "View Products",
      requestSamples: "Request Samples",
      brandMessage: "Based in Nanyang, China's traditional moxa production region, we connect global wellness professionals with reliable sourcing solutions for modern therapeutic practice.",
    },
    markets: {
      tagline: "Industry Applications",
      title: "Serving Global Wellness Professionals",
      japanClinics: "Acupuncture Clinics",
      japanClinicsDesc: "Premium moxa supplies for shinkyu practitioners, osteopathic clinics, and traditional acupuncture centers across Japan and worldwide.",
      westernWellness: "Wellness Spas",
      westernWellnessDesc: "High-quality moxibustion products for luxury spas, wellness studios, and holistic health centers.",
      asiaDistribution: "Distributors",
      asiaDistributionDesc: "Wholesale partnerships for health institutions, regional distributors, and local wellness agents.",
      therapyCenters: "Therapy Centers",
      therapyCentersDesc: "Specialized supplies for physical therapy clinics, rehabilitation centers, and alternative medicine practices.",
    },
    advantages: {
      tagline: "Why Nanyang Sourcing",
      title: "The Heart of China's Moxa Production",
      nanyangAccess: "Origin Access",
      nanyangAccessDesc: "Direct sourcing from Nanyang, home to China's finest artemisia crops and centuries of moxa-making expertise.",
      qualityAssurance: "Quality Assurance",
      qualityAssuranceDesc: "Rigorous quality control with ISO-certified facilities, ensuring consistent therapeutic grade products.",
      oemCapability: "OEM Capability",
      oemCapabilityDesc: "Custom formulations, private labeling, and tailored packaging solutions for your brand.",
      globalShipping: "Global Logistics",
      globalShippingDesc: "Established shipping networks to Japan, Europe, Americas, and Southeast Asia with reliable delivery.",
    },
    process: {
      tagline: "Cooperation Process",
      title: "How We Work Together",
      step1: "Initial Inquiry",
      step1Desc: "Share your requirements, market focus, and product interests with our team.",
      step2: "Sample Evaluation",
      step2Desc: "Receive product samples to assess quality, specifications, and suitability.",
      step3: "Terms Agreement",
      step3Desc: "Finalize pricing, MOQ, packaging, and shipping arrangements.",
      step4: "Production",
      step4Desc: "Quality-controlled manufacturing with regular progress updates.",
      step5: "Delivery & Support",
      step5Desc: "Reliable shipping with documentation and ongoing partnership support.",
    },
    products: {
      tagline: "Product Range",
      title: "Premium Moxa Products for Professional Use",
      subtitle: "Comprehensive selection of traditional and modern moxibustion supplies for clinical and wellness applications.",
      moxaStick: "Premium Moxa Stick",
      moxaStickDesc: "Traditional hand-rolled moxa sticks crafted from aged artemisia for consistent, therapeutic-grade heat therapy.",
      moxaStickShort: "Therapeutic-grade moxa sticks with 3-5 year aged artemisia for consistent heat therapy.",
      moxaStickSpec: "10:1 to 35:1 purity ratios | Multiple sizes | Aged 3-5 years",
      smokelessDevice: "Smokeless Moxa Device",
      smokelessDeviceDesc: "Modern low-smoke moxibustion devices ideal for clinic environments and sensitive spaces.",
      smokelessDeviceShort: "Indoor-friendly moxibustion devices with precise temperature control.",
      smokelessDeviceSpec: "Carbon-based | Temperature controlled | Indoor-friendly",
      moxaBox: "Moxa Therapy Box",
      moxaBoxDesc: "Versatile wooden therapy boxes for targeted heat treatment on various body areas.",
      moxaBoxShort: "Versatile therapy boxes for targeted heat treatment on various body areas.",
      moxaBoxSpec: "Multiple sizes | Natural wood | Adjustable height",
      moxaWool: "Pure Moxa Wool",
      moxaWoolDesc: "Premium artemisia wool for direct moxibustion, cone making, and OEM manufacturing.",
      moxaWoolShort: "Premium artemisia wool for manufacturing and direct moxibustion applications.",
      moxaWoolSpec: "Various grades | Bulk packaging | OEM ready",
      moxaCone: "Moxa Cones",
      moxaConeDesc: "Pre-formed moxa cones for precise acupoint treatment and consistent therapy.",
      moxaConeShort: "Pre-formed cones for precise acupoint treatment with consistent burn time.",
      moxaConeSpec: "Multiple sizes | Self-adhesive options | Clinical grade",
      moxaPatch: "Moxa Heat Patches",
      moxaPatchDesc: "Self-heating moxa patches for convenient home use and retail distribution.",
      moxaPatchShort: "Self-heating patches with 8-12 hour warmth for retail and home use.",
      moxaPatchSpec: "8-12 hour warmth | Various sizes | Retail ready",
      useCase: "Use Case",
      specifications: "Specifications",
      inquireNow: "Inquire Now",
      viewDetails: "View Details",
      requestSample: "Request Sample",
      keySpecs: "Key Specifications",
      moqLabel: "MOQ",
      oemAvailable: "OEM Available",
      categoryTraditional: "Traditional",
      categoryModern: "Modern",
      categoryRaw: "Raw Materials",
      filterAll: "All Products",
      // Product detail page
      usageScenarios: "Usage Scenarios",
      oemPrivateLabel: "OEM & Private Label",
      customManufacturing: "Custom Manufacturing Solutions",
      customManufacturingDesc: "We offer comprehensive customization options for this product, including custom formulations, branding, and packaging to match your specific requirements.",
      oemManufacturing: "OEM manufacturing with your specifications",
      privateLabelBranding: "Private label branding and packaging",
      flexibleMoq: "Flexible MOQ for new brands",
      qualityCertification: "Quality assurance and certification support",
      discussOem: "Discuss OEM Requirements",
      shippingInfo: "Shipping Information",
      globalDelivery: "Global Delivery",
      productFaq: "Frequently Asked Questions",
      relatedProducts: "Related Products",
      readyToOrder: "Ready to Order",
      readyToOrderDesc: "Contact us to discuss your requirements, request samples, or get a customized quote for your business.",
      sendInquiry: "Send Inquiry",
      // Trust badges
      isoCertified: "ISO Certified",
      qualityAssured: "Quality Assured",
      oemReady: "OEM Ready",
      privateLabel: "Private Label",
      globalShipping: "Global Shipping",
      countriesServed: "20+ Countries",
      freeSamples: "Free Samples",
      creditedToOrder: "Credited to Order",
      showingProducts: "Showing",
      // OEM Section
      oemServices: "OEM Services",
      oemSectionTitle: "Custom Manufacturing Solutions",
      oemSectionDesc: "We offer comprehensive OEM and private label services for brands looking to create their own line of moxa products. From custom formulations to tailored packaging designs, our experienced team can help bring your vision to life.",
      oemItem1: "Custom formulation and blending",
      oemItem2: "Private label and branded packaging",
      oemItem3: "Flexible MOQ for new brands",
      oemItem4: "Quality assurance and certification support",
      oemClients: "OEM Clients",
      // Sample CTA
      sampleCtaDesc: "Evaluate our products before placing bulk orders. Sample costs are often credited toward your first order.",
      // Inquiry form
      inquirySubmitted: "Inquiry Submitted",
      inquirySubmittedDesc: "Thank you for your interest. Our team will respond within 24-48 hours.",
      close: "Close",
      inquireAbout: "Inquire About",
      inquiryFormDesc: "Fill out the form below and our team will get back to you within 24-48 hours.",
      expectedQuantity: "Expected Quantity",
      expectedQuantityPlaceholder: "e.g., 500 units per month",
      cancel: "Cancel",
      packaging: "Packaging",
    },
    quality: {
      tagline: "Quality Assurance",
      title: "Committed to Excellence",
      subtitle: "Every product meets international standards for safety, purity, and therapeutic efficacy.",
      item1: "ISO 9001 certified manufacturing facilities",
      item2: "Third-party lab testing for purity and safety",
      item3: "GMP-compliant production processes",
      item4: "Full traceability from farm to delivery",
    },
    faq: {
      tagline: "FAQ",
      title: "Frequently Asked Questions",
      q1: "What is the minimum order quantity (MOQ)?",
      a1: "MOQ varies by product type. Sample orders start from small quantities, while bulk orders typically begin at 100-500 units depending on the product. Contact us for specific requirements.",
      q2: "Do you offer OEM/private label services?",
      a2: "Yes, we provide comprehensive OEM services including custom formulations, private labeling, and tailored packaging solutions to match your brand requirements.",
      q3: "What are your shipping options?",
      a3: "We ship globally via sea freight, air freight, and express courier. Shipping method depends on order size and urgency. All shipments include proper documentation for customs clearance.",
      q4: "How long does production take?",
      a4: "Standard orders are typically ready within 15-30 days. Large or custom orders may require 30-45 days. We provide regular progress updates throughout production.",
      q5: "Can I request product samples?",
      a5: "Absolutely. We encourage sample evaluation before bulk orders. Sample costs may apply but are often credited toward your first order.",
    },
    cta: {
      requestSamples: "Request Samples",
      becomeDistributor: "Become a Distributor",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
    },
    contact: {
      tagline: "Get in Touch",
      title: "Start Your Sourcing Journey",
      subtitle: "Share your requirements and let us help you find the perfect moxa solutions for your business.",
      name: "Full Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "name@company.com",
      company: "Company Name",
      companyPlaceholder: "Your company",
      country: "Country/Region",
      countryPlaceholder: "Select your country",
      inquiryType: "Inquiry Type",
      selectType: "Select inquiry type",
      typeSample: "Sample Request",
      typeDistributor: "Distributor Partnership",
      typeOEM: "OEM/Private Label",
      typeGeneral: "General Inquiry",
      message: "Message",
      messagePlaceholder: "Tell us about your requirements, target market, and expected quantities...",
      submit: "Submit Inquiry",
      submitted: "Thank you! We will respond within 24-48 hours.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      address: "Nanyang, Henan Province, China",
    },
    about: {
      tagline: "About Us",
      title: "Your Trusted Moxa Sourcing Partner",
      subtitle: "Based in Nanyang, China's traditional moxa production region, we connect global wellness professionals with reliable sourcing solutions for modern therapeutic practice.",
      story: "With deep roots in Nanyang's centuries-old moxa production heritage, we bridge traditional craftsmanship with modern quality standards. Our mission is to provide wellness professionals worldwide with authentic, high-quality moxa products backed by reliable supply chains and dedicated partnership support.",
      point1: "Direct access to Nanyang's premium artemisia production",
      point2: "Established B2B export partnerships across 20+ countries",
      point3: "ISO-certified quality management systems",
      point4: "Comprehensive OEM and private label capabilities",
      point5: "Dedicated account management and after-sales support",
      manufacturingTitle: "Manufacturing Excellence",
      manufacturingDesc: "Our facilities combine traditional moxa-making techniques with modern production standards, ensuring every product meets the exacting requirements of professional wellness practitioners.",
    },
    footer: {
      copyright: "Moxa Source Partner. All rights reserved.",
      tagline: "Premium moxa supply from the heart of China's herbal production region.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Connect With Us",
      description: "Based in Nanyang, China's traditional moxa production region. We connect global wellness professionals with reliable sourcing solutions.",
      products: "Products",
      company: "Company",
      contact: "Contact",
      premiumMoxa: "Premium Moxa Sticks",
      smokelessDevices: "Smokeless Devices",
      oemServices: "OEM Services",
      rights: "All rights reserved.",
      location: "Nanyang, Henan, China",
      aboutUs: "About Us",
      faq: "FAQ",
      contactUs: "Contact Us",
      email: "Email",
      hours: "Business Hours",
      allRightsReserved: "All rights reserved",
    },
    stats: {
      isoCertified: "ISO Certified",
      countriesServed: "20+ Countries",
      yearsExperience: "10+ Years",
      yearsExperienceLabel: "Years Experience",
      exportCountriesLabel: "Export Countries",
      b2bPartnersLabel: "B2B Partners",
      sqMetersFacility: "Sq. Meters Facility",
      skilledWorkers: "Skilled Workers",
      unitsYearCapacity: "Units/Year Capacity",
      qualityPassRate: "Quality Pass Rate",
    },
    aboutPage: {
      whyPartnerTitle: "Why Partner With Us",
      productionTagline: "Production",
      ourJourney: "Our Journey",
      milestones: "Milestones",
      readyToPartner: "Ready to Partner With Us?",
      readyToPartnerDesc: "Join 500+ global B2B partners who trust us for their moxa sourcing needs.",
      viewProducts: "View Products",
      timeline2010: "Company founded in Nanyang",
      timeline2014: "ISO 9001 certification achieved",
      timeline2016: "Expanded to international markets",
      timeline2018: "OEM services launched",
      timeline2020: "20+ export countries reached",
      timeline2024: "500+ global B2B partners",
    },
    countries: {
      japan: "Japan",
      unitedStates: "United States",
      germany: "Germany",
      france: "France",
      unitedKingdom: "United Kingdom",
      canada: "Canada",
      australia: "Australia",
      southKorea: "South Korea",
      taiwan: "Taiwan",
      singapore: "Singapore",
      malaysia: "Malaysia",
      thailand: "Thailand",
      vietnam: "Vietnam",
      indonesia: "Indonesia",
      india: "India",
      other: "Other",
    },
    productDetails: {
      useClinic: "clinic / therapy / spa",
      useModernWellness: "modern wellness clinics",
      useSpaTherapy: "spa / therapy centers",
      useManufacturing: "manufacturing / OEM",
      useAcupuncture: "acupuncture clinics",
      useRetailHome: "retail / home use",
      specPurityRatio: "Purity Ratio",
      specDiameter: "Diameter",
      specLength: "Length",
      specAgingPeriod: "Aging Period",
      specBurnTime: "Burn Time",
      specMaterial: "Material",
      specType: "Type",
      specTempRange: "Temperature Range",
      specHeatingDuration: "Heating Duration",
      specPowerSource: "Power Source",
      specSmokeLevel: "Smoke Level",
      specSizes: "Sizes",
      specInterior: "Interior",
      specHeightAdjustment: "Height Adjustment",
      specFit: "Fit",
      specFinish: "Finish",
      specPurityGrades: "Purity Grades",
      specForm: "Form",
      specSource: "Source",
      specAging: "Aging",
      specColor: "Color",
      specPackaging: "Packaging",
      specTypes: "Types",
      specBase: "Base",
      specGrade: "Grade",
      specHeatDuration: "Heat Duration",
      specTemperature: "Temperature",
      specIngredients: "Ingredients",
      specAdhesive: "Adhesive",
      specSkinSafe: "Skin Safe",
      valPurityRange: "10:1 to 35:1",
      valDiameters: "18mm / 22mm / 25mm",
      valLength200: "200mm",
      valAging3to5: "3-5 years",
      valBurnTime45to60: "45-60 minutes",
      valPureArtemisia: "100% Pure Artemisia Argyi",
      valCarbonSmokeless: "Carbon-based smokeless",
      valTempRange40to65: "40-65°C adjustable",
      valHeating20to40: "20-40 minutes",
      valPowerOptions: "Self-heating / Electric options",
      valUltraLow: "Ultra-low (indoor safe)",
      valMedicalGrade: "Medical-grade materials",
      valBambooWalnut: "Natural bamboo / Walnut wood",
      valBoxSizes: "Single hole, 2-hole, 4-hole, 6-hole",
      valStainlessMesh: "Stainless steel mesh",
      val3Levels: "3 levels",
      valStandardSticks: "Standard moxa sticks (18-25mm)",
      valNaturalLacquer: "Natural lacquer, food-safe",
      valPurityGrades: "5:1, 10:1, 15:1, 20:1, 35:1",
      valLooseCompressed: "Loose wool / Compressed bales",
      valNanyangArtemisia: "Nanyang Artemisia Argyi",
      valAging1to5: "1-5 years available",
      valGoldenYellow: "Golden yellow (indicates quality)",
      valBagSizes: "1kg, 5kg, 10kg, 25kg bags",
      valConeTypes: "Traditional / Self-adhesive",
      valConeSizes: "Mini (5mm), Small (8mm), Medium (12mm), Large (15mm)",
      valConeBurn3to8: "3-8 minutes per cone",
      valConePurity: "20:1 to 35:1",
      valConeBase: "Paper / Adhesive options",
      valClinicalPro: "Clinical professional",
      valHeat8to12: "8-12 hours",
      valTemp40to50: "40-50°C sustained",
      valPatchSizes: "Small (5x5cm), Medium (7x10cm), Large (10x14cm)",
      valPatchIngredients: "Moxa extract, iron powder, activated carbon",
      valHypoallergenic: "Hypoallergenic medical-grade",
      valDermoTested: "Dermatologically tested",
      packMoxaStick: "10 sticks per box, 50 boxes per carton. Custom packaging available.",
      packSmokeless: "20 units per box, 10 boxes per carton. Individual retail packaging available.",
      packMoxaBox: "Individual box packaging, 20 units per carton.",
      packMoxaWool: "Vacuum-sealed bags. 1kg, 5kg, 10kg, 25kg options. Custom packaging for OEM.",
      packMoxaCone: "200 cones per box, 50 boxes per carton. Individual blister packs available.",
      packMoxaPatch: "6 patches per retail box, 100 boxes per carton. Custom retail packaging available.",
      shipMoxaStick: "Sea freight (20-30 days), Air freight (5-7 days), Express courier (3-5 days). All shipments include proper documentation for customs clearance.",
      shipSmokeless: "Sea freight (20-30 days), Air freight (5-7 days). Special handling for electric variants.",
      shipMoxaBox: "Sea freight recommended for bulk orders. Careful packaging to prevent damage.",
      shipMoxaWool: "Sea freight for bulk orders. Special vacuum packaging maintains quality during transit.",
      shipMoxaCone: "Air or sea freight. Cones packaged to prevent crushing during transport.",
      shipMoxaPatch: "Air or sea freight. Temperature-stable packaging for all climates.",
      scenarioClinicMoxa: "Acupuncture clinics for moxibustion therapy",
      scenarioTcm: "Traditional Chinese medicine practices",
      scenarioWellnessSpa: "Wellness spas offering heat therapy",
      scenarioPhysicalTherapy: "Physical therapy and rehabilitation centers",
      scenarioModernClinic: "Modern wellness clinics with ventilation restrictions",
      scenarioUrbanSpa: "Urban spa environments",
      scenarioHomeTherapy: "Home therapy applications",
      scenarioSensitivePatient: "Sensitive patient treatments",
      scenarioAbdominalMoxa: "Abdominal moxibustion therapy",
      scenarioBackShoulder: "Back and shoulder treatments",
      scenarioSpaHeat: "Spa heat therapy sessions",
      scenarioHomeWellness: "Home wellness routines",
      scenarioDirectMoxa: "Direct moxibustion treatments",
      scenarioConeStickMfg: "Cone and stick manufacturing",
      scenarioOemProduction: "OEM product production",
      scenarioResearchDev: "Research and development",
      scenarioPreciseAcupoint: "Precise acupoint moxibustion",
      scenarioScarringTech: "Scarring and non-scarring techniques",
      scenarioCombinedTherapy: "Combined acupuncture-moxa therapy",
      scenarioHomeSupervised: "Home use with supervision guidance",
      scenarioRetailWellness: "Consumer retail wellness products",
      scenarioHomePainRelief: "At-home pain relief solutions",
      scenarioTravelTherapy: "Travel-friendly therapy option",
      scenarioSupplementClinical: "Supplement to clinical treatments",
      faqPurityBest: "What purity ratio is best for clinical use?",
      faqPurityBestAns: "For clinical use, we recommend 20:1 to 35:1 purity ratios for optimal therapeutic effect with minimal smoke.",
      faqStorage: "How should moxa sticks be stored?",
      faqStorageAns: "Store in a cool, dry place away from direct sunlight. Properly stored moxa can maintain quality for years.",
      faqCustomPackaging: "Can I get custom branded packaging?",
      faqCustomPackagingAns: "Yes, we offer full OEM services including custom packaging design, branding, and labeling.",
      faqIndoorUse: "Are these suitable for indoor use?",
      faqIndoorUseAns: "Yes, smokeless devices are specifically designed for indoor environments with minimal ventilation.",
      faqTempAccuracy: "What is the temperature accuracy?",
      faqTempAccuracyAns: "Our devices maintain temperature within ±2°C of the set point for consistent therapy.",
      faqElectricVersion: "Do you offer electric versions?",
      faqElectricVersionAns: "Yes, we offer both self-heating and electric versions to suit different clinical needs.",
      faqWoodTypes: "What wood types are available?",
      faqWoodTypesAns: "We offer bamboo (economical), walnut (premium), and custom wood options for OEM orders.",
      faqHeightAdjust: "Can the height be adjusted during use?",
      faqHeightAdjustAns: "Yes, our boxes feature 3-level height adjustment for temperature control.",
      faqReplacementParts: "Are replacement parts available?",
      faqReplacementPartsAns: "Yes, we supply replacement mesh screens and straps separately.",
      faqPurityGrade: "What purity grade should I choose?",
      faqPurityGradeAns: "5:1 to 10:1 for manufacturing, 20:1+ for direct clinical use requiring finer texture.",
      faqQualityDetermined: "How is quality determined?",
      faqQualityDeterminedAns: "Quality is assessed by leaf-to-stem ratio, color (golden = better), and aging period.",
      faqSampleGrades: "Can I get samples of different grades?",
      faqSampleGradesAns: "Yes, we provide sample kits with multiple grades for evaluation.",
      faqConeTypes: "What is the difference between traditional and self-adhesive?",
      faqConeTypesAns: "Self-adhesive cones have a paper base with adhesive for easy placement; traditional cones require manual positioning.",
      faqConePopular: "Which size is most popular?",
      faqConePopularAns: "Medium (12mm) is most popular for general clinical use; small (8mm) for facial and sensitive areas.",
      faqConeGinger: "Can cones be used with ginger/salt?",
      faqConeGingerAns: "Yes, our traditional cones work well with indirect moxibustion techniques using ginger, salt, or garlic.",
      faqSensitiveSkin: "Are these safe for sensitive skin?",
      faqSensitiveSkinAns: "Yes, our patches use hypoallergenic adhesive and are dermatologically tested. Always test on a small area first.",
      faqCutSize: "Can patches be cut to size?",
      faqCutSizeAns: "We recommend using patches whole; cutting may affect heat distribution and duration.",
      faqRetailPackaging: "What retail packaging options exist?",
      faqRetailPackagingAns: "We offer standard retail boxes, gift sets, and full custom packaging design for OEM orders.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      products: "製品",
      about: "会社概要",
      contact: "お問い合わせ",
    },
    hero: {
      tagline: "中国南陽からのプレ��アム艾供給",
      title: "現代クリニックのための伝統東洋ウェルネスソリューション",
      subtitle: "中国有数のハーブ生産地域から、世界のウェルネス専門家に本格的な艾製品をお届けします",
      viewProducts: "製品を見る",
      requestSamples: "サンプル請求",
      brandMessage: "中国伝統の艾生産���、南陽を拠点に、現代の治療実践に信頼できる調達ソリューションを世界のウェルネス専門家にお届けします。",
    },
    markets: {
      tagline: "業界アプリケーション",
      title: "世界のウェルネス専門家へのサービス",
      japanClinics: "鍼灸院",
      japanClinicsDesc: "日本および世界中の鍼灸師、整骨院、伝統的な鍼治療センター向けのプレミアム艾用品。",
      westernWellness: "ウェルネススパ",
      westernWellnessDesc: "高級スパ、ウェルネススタジオ、ホリスティックヘルスセンター向けの高品質灸製品。",
      asiaDistribution: "卸売業者",
      asiaDistributionDesc: "医療機関、地域代理店、ウェルネスエージェント向けの卸売パートナーシップ。",
      therapyCenters: "セラピーセンター",
      therapyCentersDesc: "理学療法クリニック、リハビリセンター、代替医療施設向けの専門用品。",
    },
    advantages: {
      tagline: "南陽調達の優位性",
      title: "中国艾生産の中心地",
      nanyangAccess: "産地直結",
      nanyangAccessDesc: "中国最高品質のヨモギ栽培と数世紀にわたる艾製造の専門知識を持つ南陽からの直接調達。",
      qualityAssurance: "品質保証",
      qualityAssuranceDesc: "ISO認証施設による厳格な品質管理で、一貫した治療グレード製品を保証。",
      oemCapability: "OEM対応",
      oemCapabilityDesc: "カスタム処方、プライベートラベル、お客様ブランドに合わせたパッケージングソリューション。",
      globalShipping: "グローバル物流",
      globalShippingDesc: "日本、欧州、アメリカ、東南アジアへの確立された配送ネットワークと信頼性の高い配達。",
    },
    process: {
      tagline: "協力プロセス",
      title: "パートナーシップの流れ",
      step1: "初回お問い合わせ",
      step1Desc: "ご要望、市場フォーカス、製品への関心をお知らせください。",
      step2: "サンプル評価",
      step2Desc: "品質、仕様、適合性を評価するためのサンプルをお届けします。",
      step3: "条���合意",
      step3Desc: "価格、最小発注数量、パッケージング、配送手配を決定。",
      step4: "製造",
      step4Desc: "品質管理された製造と定期的な進捗報告。",
      step5: "納品・サポート",
      step5Desc: "書類完備の信頼できる配送と継続的なパートナーシップサポート。",
    },
    products: {
      tagline: "製品ラインナップ",
      title: "プロ向けプレミアム艾製品",
      subtitle: "臨床およびウェルネス用途向けの伝統的・現代的灸用品の包括的なセレクション。",
      moxaStick: "プレミアム艾條",
      moxaStickDesc: "熟成ヨモギから手巻きで作られた伝統的な艾條。一貫した治療グレードの温熱療法に。",
      moxaStickShort: "3〜5年熟成の治療グレード艾條で一貫した温熱療法を実現。",
      moxaStickSpec: "10:1〜35:1の純度比 | 複数サイズ | 3〜5年熟成",
      smokelessDevice: "無煙灸器具",
      smokelessDeviceDesc: "クリニック環境や敏感な空間に最適な現代的低煙灸器具。",
      smokelessDeviceShort: "精密な温度制御を備えた室内対応の灸器具。",
      smokelessDeviceSpec: "炭素ベース | 温度制御 | 室内対応",
      moxaBox: "灸箱",
      moxaBoxDesc: "様々な体の部位への温熱治療の多用途木製セラピーボックス。",
      moxaBoxShort: "様々な体の部位への的確な温熱治療のための多用途セラピーボックス。",
      moxaBoxSpec: "複数サイズ | 天然木材 | 高さ調整可能",
      moxaWool: "純艾絨",
      moxaWoolDesc: "直接灸、艾炷作成、OEM製造用のプレミアムヨモギウール。",
      moxaWoolShort: "製造および直接灸用途のプレミアムヨモギウール。",
      moxaWoolSpec: "各種グレード | バルク包装 | OEM対応",
      moxaCone: "艾炷",
      moxaConeDesc: "経穴治療と一貫したセラピーのための成形済み艾炷。",
      moxaConeShort: "一貫した燃焼時間で精密な経穴治療のための成形済み艾炷。",
      moxaConeSpec: "複数サイズ | 粘着式オプション | クリニカルグレード",
      moxaPatch: "温灸パッチ",
      moxaPatchDesc: "家庭用と小売流通に便利な自己発熱式艾パッチ。",
      moxaPatchShort: "小売と家庭用に8〜12時間の温かさを提供する自己発熱パッチ。",
      moxaPatchSpec: "8〜12時間の温かさ | 各種サイズ | 小売対応",
      useCase: "用途",
      specifications: "仕様",
      inquireNow: "今すぐ問い合わせ",
      viewDetails: "詳細を見る",
      requestSample: "サンプル請求",
      keySpecs: "主な仕様",
      moqLabel: "最小発注数量",
      oemAvailable: "OEM対応",
      categoryTraditional: "伝統的",
      categoryModern: "現代的",
      categoryRaw: "原材料",
      filterAll: "すべての製品",
      // 製品詳細ページ
      usageScenarios: "使用シーン",
      oemPrivateLabel: "OEM・プライベートラベル",
      customManufacturing: "カスタム製造ソリューション",
      customManufacturingDesc: "カスタム処方、ブランディング、パッケージングなど、お客様のご要望に合わせた包括的なカスタマイズオプションをご提供します。",
      oemManufacturing: "お客様の仕様に基づくOEM製造",
      privateLabelBranding: "プライベートラベルブランディングとパッケージング",
      flexibleMoq: "新規ブランド向けの柔軟な最小発注数量",
      qualityCertification: "品質保証と認証サポート",
      discussOem: "OEMのご相談",
      shippingInfo: "配送情報",
      globalDelivery: "グローバル配送",
      productFaq: "よくあるご質問",
      relatedProducts: "関連製品",
      readyToOrder: "ご注文の準備ができましたか",
      readyToOrderDesc: "ご要望のご相談、サンプルのご請求、またはお見積もりのご依頼はこちらから。",
      sendInquiry: "お問い合わせを送信",
      // 信頼バッジ
      isoCertified: "ISO認証取得",
      qualityAssured: "品質保証",
      oemReady: "OEM対応",
      privateLabel: "プライベートラベル",
      globalShipping: "グローバル配送",
      countriesServed: "20カ国以上",
      freeSamples: "無料サンプル",
      creditedToOrder: "初回注文に充当",
      showingProducts: "表示中",
      // OEMセクション
      oemServices: "OEMサービス",
      oemSectionTitle: "カスタム製造ソリューション",
      oemSectionDesc: "独自の艾製品ラインを作りたいブランド向けに、包括的なOEMおよびプライベートラベルサービスを提供しています。カスタム処方からパッケージデザインまで、経験豊富なチームがお客様のビジョンを実現します。",
      oemItem1: "カスタム処方とブレンド",
      oemItem2: "プライベートラベルとブランドパッケージング",
      oemItem3: "新規ブランド向けの柔軟な最小発注数量",
      oemItem4: "品質保証と認証サポート",
      oemClients: "OEMクライアント",
      // サンプルCTA
      sampleCtaDesc: "大量注文の前に製品をお試しください。サンプル費用は多くの場合、初回注文に充当されます。",
      // 問い合わせフォーム
      inquirySubmitted: "お問い合わせを送信しました",
      inquirySubmittedDesc: "ご関心をお寄せいただきありがとうございます。24〜48時間以内にご返信いたします。",
      close: "閉じる",
      inquireAbout: "のお問い合わせ",
      inquiryFormDesc: "以下のフォームにご記入ください。24〜48時間以内にご連絡いたします。",
      expectedQuantity: "予想数量",
      expectedQuantityPlaceholder: "例：月500個",
      cancel: "キャンセル",
      packaging: "パッケージング",
    },
    quality: {
      tagline: "品質保証",
      title: "卓越性へのコミットメント",
      subtitle: "すべての製��が安全性、純度、治療効果の国際基準を満たしています。",
      item1: "ISO 9001認証取得製造施設",
      item2: "純度と安全性の第三者機関試験",
      item3: "GMP準拠の製造プロセス",
      item4: "農場から配送までの完全トレーサビリティ",
    },
    faq: {
      tagline: "よくある質問",
      title: "FAQ",
      q1: "最小発注数量（MOQ）はどのくらいですか？",
      a1: "MOQは製品タイプによって異なります。サンプル注文は少量から可能で、大量注文は製品により通常100〜500個から開始します。詳細はお問い合わせください。",
      q2: "OEM/プライベートラベルサービスはありますか？",
      a2: "はい、カスタム処方、プライベートラベリング、お客様のブランド要件に合わせたパッケージングソリューションを含む包括的なOEMサービスを提供しています。",
      q3: "配送オプションは何がありますか？",
      a3: "海上輸送、航空輸送、宅配便で世界中に配送します。配送方法は注文サイズと緊急度によります。すべての出荷に通関用の適切な書類が含まれます。",
      q4: "製造にどのくらい時間がかかりますか？",
      a4: "標準注文は通常15〜30日で準備完了します。大量注文やカスタム注文は30〜45日かかる場合があります。製造中は定期的に進捗報告をいたします。",
      q5: "製品サンプルをリクエストできますか？",
      a5: "もちろんです。大量注文前のサンプル評価をお勧めします。サンプル費用がかかる場合がありますが、多くの場合、最初の注文に充当されます。",
    },
    cta: {
      requestSamples: "サンプル請求",
      becomeDistributor: "代理店になる",
      contactUs: "お問い合わせ",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
    },
    contact: {
      tagline: "お問い合わせ",
      title: "調達の旅を始めましょう",
      subtitle: "ご要望をお聞かせください。お客様のビジネスに最適な艾ソリューションをご提案します。",
      name: "お名前",
      namePlaceholder: "お名前",
      email: "メールアドレス",
      emailPlaceholder: "name@company.com",
      company: "会社名",
      companyPlaceholder: "会社名",
      country: "国/地域",
      countryPlaceholder: "国を選択",
      inquiryType: "お問い合わせ種類",
      selectType: "種類を選択",
      typeSample: "サンプル請求",
      typeDistributor: "代理店パートナーシップ",
      typeOEM: "OEM/プライ��ートラベル",
      typeGeneral: "一般的なお問い合わせ",
      message: "メッセージ",
      messagePlaceholder: "ご要望、ターゲット市場、予想数量などをお知らせください...",
      submit: "送信",
      submitted: "ありがとうございます！24〜48時間以内にご返信いたします。",
      emailLabel: "メール",
      phoneLabel: "電話",
      addressLabel: "住所",
      address: "中国河南省南陽市",
    },
    about: {
      tagline: "会社概要",
      title: "信頼できる艾調達パートナー",
      subtitle: "中国伝統の艾生産地、南陽を拠点に、現代の治療実践に信頼できる調達ソリューションを世界のウェルネス専門家にお届けします。",
      story: "南陽の数世紀にわたる艾生産の伝統に深く根ざし、伝統的な職人技と現代の品質基準を橋渡ししています。私たちの使命は、信頼できるサプライチェーンと専任のパートナーシップサポートに支えられた、本物の高品質艾製品を世界中のウェルネス専門家に提供することです。",
      point1: "南陽のプレミアムヨモギ生産への直接アクセス",
      point2: "20カ国以上への確立されたB2B輸出パートナーシップ",
      point3: "ISO認証品質管理システム",
      point4: "包括的なOEM��プライベートラベル能力",
      point5: "専任のアカウント管理とアフターサービス",
      manufacturingTitle: "製造の卓越性",
      manufacturingDesc: "当社の施設は、伝統的な艾製造技術と現代の生産基準を組み合わせ、すべての製品がプロのウェルネス施術者の厳格な要件を満たすことを保証します。",
    },
    footer: {
      copyright: "Moxa Source Partner 無断転載を禁じます",
      tagline: "中国ハーブ生産地域の中心からのプレミアム艾供給。",
      quickLinks: "クイックリンク",
      contactInfo: "連絡先情報",
      followUs: "フォローする",
      description: "中国伝統の艾生産地、南陽を拠点に。世界のウェルネス専門家に信頼できる調達ソリューションを提供。",
      products: "製品",
      company: "会社情報",
      contact: "連絡先",
      premiumMoxa: "プレミアム艾條",
      smokelessDevices: "無煙灸器具",
      oemServices: "OEMサービス",
      rights: "無断転載を禁じます。",
      location: "中国河南省南陽市",
      aboutUs: "会社概要",
      faq: "よくある質問",
      contactUs: "お問い合わせ",
      email: "メール",
      hours: "営業時間",
      allRightsReserved: "無断転載を禁じます",
    },
    stats: {
      isoCertified: "ISO認証取得",
      countriesServed: "20カ国以上",
      yearsExperience: "10年以上",
      yearsExperienceLabel: "業界経験",
      exportCountriesLabel: "輸出国",
      b2bPartnersLabel: "B2Bパートナー",
      sqMetersFacility: "平方メートルの施設",
      skilledWorkers: "熟練スタッフ",
      unitsYearCapacity: "年間生産能力",
      qualityPassRate: "品質合格率",
    },
    aboutPage: {
      whyPartnerTitle: "パートナーシップの理由",
      productionTagline: "製造",
      ourJourney: "私たちの歩み",
      milestones: "沿革",
      readyToPartner: "パートナーシップを始めませんか？",
      readyToPartnerDesc: "艾製品の調達で信頼される500社以上のグローバルB2Bパートナーに加わりましょう。",
      viewProducts: "製品を見る",
      timeline2010: "南陽で会社設立",
      timeline2014: "ISO 9001認証取得",
      timeline2016: "国際市場へ進出",
      timeline2018: "OEMサービス開始",
      timeline2020: "輸出国20カ国以上達成",
      timeline2024: "グローバルB2Bパートナー500社以上",
    },
    countries: {
      japan: "日本",
      unitedStates: "アメリカ",
      germany: "ドイツ",
      france: "フランス",
      unitedKingdom: "イギリス",
      canada: "カナダ",
      australia: "オーストラリア",
      southKorea: "韓国",
      taiwan: "台湾",
      singapore: "シンガポール",
      malaysia: "マレーシア",
      thailand: "タイ",
      vietnam: "ベトナム",
      indonesia: "インドネシア",
      india: "インド",
      other: "その他",
    },
    productDetails: {
      useClinic: "クリニック・セラピー・スパ",
      useModernWellness: "現代ウェルネスクリニック",
      useSpaTherapy: "スパ・セラピーセンター",
      useManufacturing: "製造・OEM",
      useAcupuncture: "鍼灸院",
      useRetailHome: "小売・家庭用",
      specPurityRatio: "純度比",
      specDiameter: "直径",
      specLength: "長さ",
      specAgingPeriod: "熟成期間",
      specBurnTime: "燃焼時間",
      specMaterial: "素材",
      specType: "タイプ",
      specTempRange: "温度範囲",
      specHeatingDuration: "加熱時間",
      specPowerSource: "電源",
      specSmokeLevel: "煙レベル",
      specSizes: "サイズ",
      specInterior: "内部構造",
      specHeightAdjustment: "高さ調整",
      specFit: "適合",
      specFinish: "仕上げ",
      specPurityGrades: "純度グレード",
      specForm: "形状",
      specSource: "産地",
      specAging: "熟成",
      specColor: "色",
      specPackaging: "包装",
      specTypes: "種類",
      specBase: "ベース",
      specGrade: "グレード",
      specHeatDuration: "発熱時間",
      specTemperature: "温度",
      specIngredients: "成分",
      specAdhesive: "粘着剤",
      specSkinSafe: "肌への安全性",
      valPurityRange: "10:1〜35:1",
      valDiameters: "18mm / 22mm / 25mm",
      valLength200: "200mm",
      valAging3to5: "3〜5年",
      valBurnTime45to60: "45〜60分",
      valPureArtemisia: "100%純ヨモギ（艾蒿）",
      valCarbonSmokeless: "炭素ベース無煙タイプ",
      valTempRange40to65: "40〜65°C 調整可能",
      valHeating20to40: "20〜40分",
      valPowerOptions: "自己発熱式 / 電気式",
      valUltraLow: "超低煙（室内使用可）",
      valMedicalGrade: "医療グレード素材",
      valBambooWalnut: "天然竹 / ウォールナット材",
      valBoxSizes: "1穴、2穴、4穴、6穴",
      valStainlessMesh: "ステンレスメッシュ",
      val3Levels: "3段階",
      valStandardSticks: "標準艾條対応（18〜25mm）",
      valNaturalLacquer: "天然ラッカー、食品安全",
      valPurityGrades: "5:1、10:1、15:1、20:1、35:1",
      valLooseCompressed: "ルーズウール / 圧縮ベール",
      valNanyangArtemisia: "南陽産ヨモギ（艾蒿）",
      valAging1to5: "1〜5年熟成品あり",
      valGoldenYellow: "黄金色（品質指標）",
      valBagSizes: "1kg、5kg、10kg、25kg袋",
      valConeTypes: "伝統式 / 粘着式",
      valConeSizes: "ミニ（5mm）、小（8mm）、中（12mm）、大（15mm）",
      valConeBurn3to8: "1個あたり3〜8分",
      valConePurity: "20:1〜35:1",
      valConeBase: "紙製 / 粘着式オプション",
      valClinicalPro: "クリニカルプロフェッショナル",
      valHeat8to12: "8〜12時間",
      valTemp40to50: "40〜50°C 持続",
      valPatchSizes: "小（5x5cm）、中（7x10cm）、大（10x14cm）",
      valPatchIngredients: "艾エキス、鉄粉、活性炭",
      valHypoallergenic: "低アレルギー性医療グレード",
      valDermoTested: "皮膚科学的テスト済み",
      packMoxaStick: "1箱10本入り、1カートン50箱。カスタムパッケージ対応可。",
      packSmokeless: "1箱20個入り、1カートン10箱。個別小売包装対応可。",
      packMoxaBox: "個装箱入り、1カートン20個。",
      packMoxaWool: "真空パック。1kg、5kg、10kg、25kgオプション。OEM向けカスタム包装対応。",
      packMoxaCone: "1箱200個入り、1カートン50箱。個別ブリスターパック対応可。",
      packMoxaPatch: "小売箱1箱6枚入り、1カートン100箱。カスタム小売包装対応可。",
      shipMoxaStick: "海上輸送（20〜30日）、航空輸送（5〜7日）、宅配便（3〜5日）。すべての出荷に通関用書類完備。",
      shipSmokeless: "海上輸送（20〜30日）、航空輸送（5〜7日）。電気式は特別取り扱い。",
      shipMoxaBox: "大量注文は海上輸送推奨。破損防止のための丁寧な梱包。",
      shipMoxaWool: "大量注文は海上輸送。特別真空包装で輸送中の品質維持。",
      shipMoxaCone: "航空または海上輸送。輸送中の破損防止包装。",
      shipMoxaPatch: "航空または海上輸送。すべての気候に対応した温度安定包装。",
      scenarioClinicMoxa: "鍼灸院での灸治療",
      scenarioTcm: "中医学・東洋医学治療",
      scenarioWellnessSpa: "温熱療法を提供するウェルネススパ",
      scenarioPhysicalTherapy: "理学療法・リハビリテーションセンター",
      scenarioModernClinic: "換気制限のある現代ウェルネスクリニック",
      scenarioUrbanSpa: "都市型スパ環境",
      scenarioHomeTherapy: "家庭用セラピー",
      scenarioSensitivePatient: "敏感な患者様への治療",
      scenarioAbdominalMoxa: "腹部への灸療法",
      scenarioBackShoulder: "背中・肩の治療",
      scenarioSpaHeat: "スパでの温熱セラピーセッション",
      scenarioHomeWellness: "家庭でのウェルネスルーティン",
      scenarioDirectMoxa: "直接灸治療",
      scenarioConeStickMfg: "艾炷・艾條の製造",
      scenarioOemProduction: "OEM製品の生産",
      scenarioResearchDev: "研究開発",
      scenarioPreciseAcupoint: "精密な経穴への施灸",
      scenarioScarringTech: "有痕灸・無痕灸技法",
      scenarioCombinedTherapy: "鍼灸併用療法",
      scenarioHomeSupervised: "指導のもとでの家庭使用",
      scenarioRetailWellness: "消費者向けウェルネス小売製品",
      scenarioHomePainRelief: "家庭での痛み緩和ソリューション",
      scenarioTravelTherapy: "旅行に便利なセラピーオプション",
      scenarioSupplementClinical: "臨床治療の補助として",
      faqPurityBest: "臨床使用に最適な純度比は？",
      faqPurityBestAns: "臨床使用には、煙が少なく治療効果が最適な20:1〜35:1の純度比をお勧めします。",
      faqStorage: "艾條の保管方法は？",
      faqStorageAns: "直射日光を避け、涼しく乾燥した場所に保管してください。適切に保管すれば、長年品質を維持できます。",
      faqCustomPackaging: "カスタムブランドパッケージは可能ですか？",
      faqCustomPackagingAns: "はい、カスタムパッケージデザイン、ブランディング、ラベリングを含むフルOEMサービスを提供しています。",
      faqIndoorUse: "室内での使用は可能ですか？",
      faqIndoorUseAns: "はい、無煙灸器具は換気が最小限の室内環境向けに特別に設計されています。",
      faqTempAccuracy: "温度精度はどのくらいですか？",
      faqTempAccuracyAns: "当社の器具は設定温度から±2°C以内を維持し、一貫した治療を提供します。",
      faqElectricVersion: "電気式バージョンはありますか？",
      faqElectricVersionAns: "はい、様々な臨床ニーズに対応するため、自己発熱式と電気式の両方をご用意しています。",
      faqWoodTypes: "どのような木材タイプがありますか？",
      faqWoodTypesAns: "竹（経済的）、ウォールナット（プレミアム）、およびOEM注文向けのカスタム木材オプションをご用意しています。",
      faqHeightAdjust: "使用中に高さ調整は可能ですか？",
      faqHeightAdjustAns: "はい、当社の灸箱は温度制御のための3段階高さ調整機能を備えています。",
      faqReplacementParts: "交換部品は入手可能ですか？",
      faqReplacementPartsAns: "はい、交換用メッシュスクリーンとストラップを別途ご用意しています。",
      faqPurityGrade: "どの純度グレードを選ぶべきですか？",
      faqPurityGradeAns: "製造用には5:1〜10:1、より細かいテクスチャが必要な直接臨床使用には20:1以上をお勧めします。",
      faqQualityDetermined: "品質はどのように判断されますか？",
      faqQualityDeterminedAns: "品質は葉と茎の比率、色（黄金色が良い）、熟成期間で評価されます。",
      faqSampleGrades: "異なるグレードのサンプルを入手できますか？",
      faqSampleGradesAns: "はい、評価用に複数グレードのサンプルキットをご用意しています。",
      faqConeTypes: "伝統式と粘着式の違いは何ですか？",
      faqConeTypesAns: "粘着式艾炷は簡単に配置できる粘着付き紙ベースです。伝統式は手動で配置する必要があります。",
      faqConePopular: "最も人気のあるサイズは？",
      faqConePopularAns: "一般的な臨床使用には中（12mm）が最も人気です。顔面や敏感な部位には小（8mm）をご使用ください。",
      faqConeGinger: "生姜や塩と一緒に艾炷を使用できますか？",
      faqConeGingerAns: "はい、当社の伝統式艾炷は生姜、塩、にんにくを使用した間接灸技法に適しています。",
      faqSensitiveSkin: "敏感肌でも安全ですか？",
      faqSensitiveSkinAns: "はい、当社のパッチは低アレルギー性粘着剤を使用し、皮膚科学的にテスト済みです。最初に小さな範囲でテストしてください。",
      faqCutSize: "パッチをカットして使用できますか？",
      faqCutSizeAns: "パッチはそのままの使用をお勧めします。カットすると発熱の分布と持続時間に影響する可能性があります。",
      faqRetailPackaging: "どのような小売包装オプションがありますか？",
      faqRetailPackagingAns: "標準小売ボックス、ギフトセット、およびOEM注文向けのフルカスタムパッケージデザインをご用意しています。",
    },
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品",
      about: "关于我们",
      contact: "联系我们",
    },
    hero: {
      tagline: "来自中国南阳的优质艾草供应",
      title: "现代诊所的传统东方养生解决方案",
      subtitle: "连接全球养生专业人士与中国著名草药产区的正宗艾灸产品",
      viewProducts: "查看产品",
      requestSamples: "申请样品",
      brandMessage: "立足于中国传统艾草生产基地���阳，我们为全球养生专业人士提供可靠的现代治疗实践采购解决方案。",
    },
    markets: {
      tagline: "行业应用",
      title: "服务全球养生专业人士",
      japanClinics: "针灸诊所",
      japanClinicsDesc: "为日本及全球的针灸师、骨科诊所和传统针灸中心提供优质艾草用品。",
      westernWellness: "养生水疗",
      westernWellnessDesc: "为高端水疗中心、养生工作室和整体健康中心提供高品质艾灸产品。",
      asiaDistribution: "批发商",
      asiaDistributionDesc: "与医疗机构、区域分销商和本地养生代理建立批发合作关系。",
      therapyCenters: "理疗中心",
      therapyCentersDesc: "为物理治疗诊所、康复中心和替代医学机构提供专业用品。",
    },
    advantages: {
      tagline: "南阳采购优势",
      title: "中国艾草生产的核心地带",
      nanyangAccess: "产地直供",
      nanyangAccessDesc: "直接从南阳采购，这里拥有中国最优质的艾蒿作物和数百年的艾草制作专业技术。",
      qualityAssurance: "质量保证",
      qualityAssuranceDesc: "ISO认证设施的严格质量控制，确保产品达到一致的治疗级别。",
      oemCapability: "OEM能力",
      oemCapabilityDesc: "定制配方、自有品牌和量身定制的包装解决方案。",
      globalShipping: "全球物流",
      globalShippingDesc: "已建立面向日本、欧洲、美洲和东南亚的配送网络，提供可靠的交付服务。",
    },
    process: {
      tagline: "合作流程",
      title: "我们如何合作",
      step1: "初步咨询",
      step1Desc: "与我们的团队分享您的需求、市场定位和产品兴趣。",
      step2: "样品评估",
      step2Desc: "收到产品样品以评估质量、规格和适用性。",
      step3: "条款协议",
      step3Desc: "确定价格、起订量、包装和配送安排。",
      step4: "生产制造",
      step4Desc: "质量控制的生产过程，定期进度更新。",
      step5: "交付与支持",
      step5Desc: "可靠的配送，完整的文件和持续的合作支持。",
    },
    products: {
      tagline: "产品系列",
      title: "专业级优质艾灸产品",
      subtitle: "为临床和养生应用提供传统及现代艾灸用品的全面选择。",
      moxaStick: "优质艾条",
      moxaStickDesc: "采用陈年艾草手工卷制的传统艾条，为热疗提供一致的治疗级效果。",
      moxaStickShort: "3-5年陈化的治疗级艾条，提供一致的温热疗效。",
      moxaStickSpec: "10:1至35:1纯度比 | 多种规格 | 3-5年陈化",
      smokelessDevice: "无烟灸具",
      smokelessDeviceDesc: "适合诊所环境和敏感空间的现代低烟艾灸设备。",
      smokelessDeviceShort: "精准温控的室内适用艾灸设备。",
      smokelessDeviceSpec: "碳基材料 | 温度控制 | 室内适用",
      moxaBox: "艾灸盒",
      moxaBoxDesc: "用于身体各部位热疗的多功能木质治疗盒。",
      moxaBoxShort: "用于身体各部位精准温热治疗的多功能治疗盒。",
      moxaBoxSpec: "多种尺寸 | 天然木材 | 高度可调",
      moxaWool: "纯艾绒",
      moxaWoolDesc: "用于直接灸、艾炷制作和OEM生产的优质艾草绒。",
      moxaWoolShort: "用于生产和直接灸的优质艾草绒原料。",
      moxaWoolSpec: "多种等级 | 批量包装 | OEM就绪",
      moxaCone: "艾炷",
      moxaConeDesc: "用于精准穴位治疗和一致疗效的预制艾炷。",
      moxaConeShort: "燃烧时间一致的预制艾炷，适用于精准穴位治疗。",
      moxaConeSpec: "多种尺寸 | 自粘选项 | 临床级",
      moxaPatch: "艾灸贴",
      moxaPatchDesc: "方便家用和零售分销的自发热艾草贴。",
      moxaPatchShort: "8-12小时持续温热的自发热贴，适用于零售和家用。",
      moxaPatchSpec: "8-12小时温热 | 多种尺寸 | 零售就绪",
      useCase: "用途",
      specifications: "规格",
      inquireNow: "立即咨询",
      viewDetails: "查看详情",
      requestSample: "申��样品",
      keySpecs: "主要规格",
      moqLabel: "起订量",
      oemAvailable: "支持OEM",
      categoryTraditional: "传统产品",
      categoryModern: "现代产品",
      categoryRaw: "原材料",
      filterAll: "全部产品",
      // 产品详情页
      usageScenarios: "应用场景",
      oemPrivateLabel: "OEM与自有品牌",
      customManufacturing: "定制生产解决方案",
      customManufacturingDesc: "我们为该产品提供全面的定制选项，包括定制配方、品牌设计和包装，以满足您的具体需求。",
      oemManufacturing: "按您的规格进行OEM生产",
      privateLabelBranding: "自有品牌设计和包装",
      flexibleMoq: "新品牌灵活起订量",
      qualityCertification: "质量保证和认证支持",
      discussOem: "洽谈OEM需求",
      shippingInfo: "配送信息",
      globalDelivery: "全球配送",
      productFaq: "常见问题",
      relatedProducts: "相关产品",
      readyToOrder: "准备下单",
      readyToOrderDesc: "联系我们讨论您的需求、申请样品或获取定制报价。",
      sendInquiry: "发送询价",
      // 信任徽章
      isoCertified: "ISO认证",
      qualityAssured: "品质保证",
      oemReady: "OEM就绪",
      privateLabel: "自有品牌",
      globalShipping: "全球配送",
      countriesServed: "覆盖20+国家",
      freeSamples: "免费样品",
      creditedToOrder: "抵扣首单",
      showingProducts: "显示",
      // OEM板块
      oemServices: "OEM服务",
      oemSectionTitle: "定制生产解决方案",
      oemSectionDesc: "我们为希望创建自有艾草产品线的品牌提供全面的OEM和自有品牌服务。从定制配方到包装设计，我们经验丰富的团队将帮助您实现愿景。",
      oemItem1: "定制配方和调配",
      oemItem2: "自有品牌和品牌包装",
      oemItem3: "新品牌灵活起订量",
      oemItem4: "质量保证和认证支持",
      oemClients: "OEM客户",
      // 样品CTA
      sampleCtaDesc: "在大批量订购前先试用我们的产品。样品费用通常可抵扣首单。",
      // 询价表单
      inquirySubmitted: "询价已提交",
      inquirySubmittedDesc: "感谢您的关注。我们的团队将在24-48小时内回复。",
      close: "关闭",
      inquireAbout: "咨询产品",
      inquiryFormDesc: "请填写以下表单，我们的团队将在24-48小时内与您联系。",
      expectedQuantity: "预计数量",
      expectedQuantityPlaceholder: "例如：每月500件",
      cancel: "取消",
      packaging: "包装",
    },
    quality: {
      tagline: "质量保证",
      title: "卓越品质承诺",
      subtitle: "每件产品均符合安全性、纯度和治疗效果的国际标准。",
      item1: "ISO 9001认证生产设施",
      item2: "第三方实验室纯度和安全测试",
      item3: "GMP合规生产流程",
      item4: "从农场到交付的全程可追溯",
    },
    faq: {
      tagline: "常见问题",
      title: "FAQ",
      q1: "最低起订量（MOQ）是多少？",
      a1: "MOQ因产品类型而异。样品订单可从少量开始，批量订单通常根据产品从100-500件起。具体要求请联系我们。",
      q2: "你们提供OEM/自有品牌服务吗？",
      a2: "是的，我们提供全面的OEM服务，包括定制配方、自有品牌标签和符合您品牌要求的定制包装解决方案。",
      q3: "有哪些配送选项？",
      a3: "我们通过海运、空运和快递在全球范围内配送。配送方式取决于订单规模和紧急程度。所有��物均包含清关所需的完整文件。",
      q4: "生产需要多长时间？",
      a4: "标准订单通常在15-30天内准备就绪。大批量或定制订单可能需要30-45天。我们在整个生产过程中提供定期进度更新。",
      q5: "可以申请产品样品吗？",
      a5: "当然可以。我们鼓励在大批量订单前进行样品评估。可能会收取���品费用，但通常会抵扣到您的首单中。",
    },
    cta: {
      requestSamples: "申请样品",
      becomeDistributor: "成为分销商",
      contactUs: "联系我们",
      whatsapp: "WhatsApp",
      wechat: "微信",
    },
    contact: {
      tagline: "联系我们",
      title: "开启您的采购之旅",
      subtitle: "分享您的需求，让我们帮助您找到适合您业务的完美艾灸解决方案。",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "电子邮箱",
      emailPlaceholder: "name@company.com",
      company: "公司名称",
      companyPlaceholder: "您的公司",
      country: "国家/地区",
      countryPlaceholder: "选择您的国家",
      inquiryType: "咨询类型",
      selectType: "选择咨询类型",
      typeSample: "样品申请",
      typeDistributor: "分销商合作",
      typeOEM: "OEM/自有品牌",
      typeGeneral: "一般咨询",
      message: "留言",
      messagePlaceholder: "请告诉我们您的需求、目标市场和预期数量...",
      submit: "提交咨询",
      submitted: "感谢您！我们将在24-48小时内回复。",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      addressLabel: "地址",
      address: "中国河南省南阳市",
    },
    about: {
      tagline: "关于我们",
      title: "您值得信赖的艾草采购伙伴",
      subtitle: "立足于中国传统艾草生产基地南阳，我们为全球养生专业人士提供可靠的现代治疗实践采购解决方案。",
      story: "深深扎根于南阳数百年的艾草生产传统，我们将传统工艺与现代质量标准相结合。我们的使命是为全球养生专业人士提供正宗、高品质的艾草产品，并以可靠的供应链和专业的合作支持为后盾。",
      point1: "直接获取南阳优质艾蒿生产资源",
      point2: "已建立覆盖20多个国家的B2B出口合作关系",
      point3: "ISO认证质量管理体系",
      point4: "全面的OEM和自有品牌能力",
      point5: "专属客户经理和售后服务支持",
      manufacturingTitle: "卓越制造",
      manufacturingDesc: "我们的设施将传统艾草制作技术与现代生产标准相结合，确保每件产品都能满足专业养生从业者的严格要求。",
    },
    footer: {
      copyright: "Moxa Source Partner. 版权所有。",
      tagline: "来自中国草药产区核心地带的优质艾草供应。",
      quickLinks: "快速链接",
      contactInfo: "联系信息",
      followUs: "关注我们",
      description: "立足于中国传统艾草生产基地南阳，为全球养生专业人士提供可靠的采购解决方案。",
      products: "产品",
      company: "公司",
      contact: "联系方式",
      premiumMoxa: "优质艾条",
      smokelessDevices: "无烟灸具",
      oemServices: "OEM服务",
      rights: "版权所有。",
      location: "中国河南省南阳市",
      aboutUs: "关于我们",
      faq: "常见问题",
      contactUs: "联系我们",
      email: "邮箱",
      hours: "营业时间",
      allRightsReserved: "版权所有",
    },
    stats: {
      isoCertified: "ISO认证",
      countriesServed: "覆盖20+国家",
      yearsExperience: "10年以上",
      yearsExperienceLabel: "行业经验",
      exportCountriesLabel: "出口国家",
      b2bPartnersLabel: "B2B合作伙伴",
      sqMetersFacility: "平方米厂房",
      skilledWorkers: "技术工人",
      unitsYearCapacity: "年产能",
      qualityPassRate: "质量合格率",
    },
    aboutPage: {
      whyPartnerTitle: "为什么选择我们",
      productionTagline: "生产制造",
      ourJourney: "发展历程",
      milestones: "里程碑",
      readyToPartner: "准备好与我们合作了吗？",
      readyToPartnerDesc: "加入500多家全球B2B合作伙伴，信赖我们满足您的艾草采购需求。",
      viewProducts: "查看产品",
      timeline2010: "公司在南阳成立",
      timeline2014: "获得ISO 9001认证",
      timeline2016: "拓展国际市场",
      timeline2018: "启动OEM服务",
      timeline2020: "出口国家超过20个",
      timeline2024: "全球B2B合作伙伴超过500家",
    },
    countries: {
      japan: "日本",
      unitedStates: "美国",
      germany: "德国",
      france: "法国",
      unitedKingdom: "英国",
      canada: "加拿大",
      australia: "澳大利亚",
      southKorea: "韩国",
      taiwan: "台湾",
      singapore: "新加坡",
      malaysia: "马来西亚",
      thailand: "泰国",
      vietnam: "越南",
      indonesia: "印度尼西亚",
      india: "印度",
      other: "其他",
    },
    productDetails: {
      useClinic: "诊所・治疗・水疗",
      useModernWellness: "现代养生诊所",
      useSpaTherapy: "水疗・理疗中心",
      useManufacturing: "生产制造・OEM",
      useAcupuncture: "针灸诊所",
      useRetailHome: "零售・家用",
      specPurityRatio: "纯度比",
      specDiameter: "直径",
      specLength: "长度",
      specAgingPeriod: "陈化时间",
      specBurnTime: "燃烧时间",
      specMaterial: "材质",
      specType: "类型",
      specTempRange: "温度范围",
      specHeatingDuration: "加热时间",
      specPowerSource: "电源",
      specSmokeLevel: "烟量",
      specSizes: "尺寸",
      specInterior: "内部结构",
      specHeightAdjustment: "高度调节",
      specFit: "适配",
      specFinish: "表面处理",
      specPurityGrades: "纯度等级",
      specForm: "形态",
      specSource: "产地",
      specAging: "陈化",
      specColor: "颜色",
      specPackaging: "包装",
      specTypes: "种类",
      specBase: "底座",
      specGrade: "等级",
      specHeatDuration: "发热时间",
      specTemperature: "温度",
      specIngredients: "成分",
      specAdhesive: "粘合剂",
      specSkinSafe: "皮肤安全性",
      valPurityRange: "10:1至35:1",
      valDiameters: "18mm / 22mm / 25mm",
      valLength200: "200mm",
      valAging3to5: "3-5年",
      valBurnTime45to60: "45-60分钟",
      valPureArtemisia: "100%纯艾蒿",
      valCarbonSmokeless: "碳基无烟型",
      valTempRange40to65: "40-65°C可调",
      valHeating20to40: "20-40分钟",
      valPowerOptions: "自发热/电热可选",
      valUltraLow: "超低烟（室内适用）",
      valMedicalGrade: "医疗级材料",
      valBambooWalnut: "天然竹材/胡桃木",
      valBoxSizes: "单孔、2孔、4孔、6孔",
      valStainlessMesh: "不锈钢网",
      val3Levels: "3档",
      valStandardSticks: "适配标准艾条（18-25mm）",
      valNaturalLacquer: "天然漆，食品安全",
      valPurityGrades: "5:1、10:1、15:1、20:1、35:1",
      valLooseCompressed: "散装/压缩包",
      valNanyangArtemisia: "南阳艾蒿",
      valAging1to5: "1-5年陈化可选",
      valGoldenYellow: "金黄色（品质指标）",
      valBagSizes: "1kg、5kg、10kg、25kg袋装",
      valConeTypes: "传统式/粘贴式",
      valConeSizes: "迷你（5mm）、小（8mm）、中（12mm）、大（15mm）",
      valConeBurn3to8: "每个3-8分钟",
      valConePurity: "20:1至35:1",
      valConeBase: "纸底/粘贴式可选",
      valClinicalPro: "临床专业级",
      valHeat8to12: "8-12小时",
      valTemp40to50: "40-50°C持续",
      valPatchSizes: "小（5x5cm）、中（7x10cm）、大（10x14cm）",
      valPatchIngredients: "艾草提取物、铁粉、活性炭",
      valHypoallergenic: "低敏医疗级",
      valDermoTested: "皮肤科测试",
      packMoxaStick: "每盒10支，每箱50盒。可定制包装。",
      packSmokeless: "每盒20个，每箱10盒。可提供单独零售包装。",
      packMoxaBox: "独立包装，每箱20个。",
      packMoxaWool: "真空密封袋。1kg、5kg、10kg、25kg可选。OEM定制包装。",
      packMoxaCone: "每盒200个，每箱50盒。可提供独立泡罩包装。",
      packMoxaPatch: "每零售盒6片，每箱100盒。可定制零售包装。",
      shipMoxaStick: "海运（20-30天）、空运（5-7天）、快递（3-5天）。所有货物均含完整清关文件。",
      shipSmokeless: "海运（20-30天）、空运（5-7天）。电热款需特殊处理。",
      shipMoxaBox: "大批量订单建议海运。精心包装防止损坏。",
      shipMoxaWool: "大批量订单海运。特殊真空包装确保运输质量。",
      shipMoxaCone: "空运或海运。防压包装确保运输安全。",
      shipMoxaPatch: "空运或海运。适应各种气候的温度稳定包装。",
      scenarioClinicMoxa: "针灸诊所灸疗",
      scenarioTcm: "中医诊疗实践",
      scenarioWellnessSpa: "提供热疗的养生水疗",
      scenarioPhysicalTherapy: "理疗和康复中心",
      scenarioModernClinic: "通风受限的现代养生诊所",
      scenarioUrbanSpa: "城市水疗环境",
      scenarioHomeTherapy: "家庭理疗应用",
      scenarioSensitivePatient: "敏感患者治疗",
      scenarioAbdominalMoxa: "腹部艾灸疗法",
      scenarioBackShoulder: "背部和肩部治疗",
      scenarioSpaHeat: "水疗热疗项目",
      scenarioHomeWellness: "家庭养生日常",
      scenarioDirectMoxa: "直接灸治疗",
      scenarioConeStickMfg: "艾炷和艾条制造",
      scenarioOemProduction: "OEM产品生产",
      scenarioResearchDev: "研发应用",
      scenarioPreciseAcupoint: "精准穴位艾灸",
      scenarioScarringTech: "有痕灸和无痕灸技术",
      scenarioCombinedTherapy: "针灸结合疗法",
      scenarioHomeSupervised: "指导下的家庭使用",
      scenarioRetailWellness: "消费者零售养生产品",
      scenarioHomePainRelief: "居家止痛方案",
      scenarioTravelTherapy: "旅行便携理疗选择",
      scenarioSupplementClinical: "临床治疗补充",
      faqPurityBest: "临床使用最佳纯度比是多少？",
      faqPurityBestAns: "临床使用建议20:1至35:1纯度比，烟量少且治疗效果最佳。",
      faqStorage: "艾条如何保存？",
      faqStorageAns: "存放于阴凉干燥处，避免阳光直射。妥善保存的艾草可保持多年品质。",
      faqCustomPackaging: "可以定制品牌包装吗？",
      faqCustomPackagingAns: "可以，我们提供完整的OEM服务，包括定制包装设计、品牌标识和标签。",
      faqIndoorUse: "室内可以使用吗？",
      faqIndoorUseAns: "可以，无烟灸具专为通风有限的室内环境设计。",
      faqTempAccuracy: "温度精度如何？",
      faqTempAccuracyAns: "我们的设备将温度维持在设定点±2°C范围内，确保治疗一致性。",
      faqElectricVersion: "有电热版本吗？",
      faqElectricVersionAns: "有，我们提供自发热和电热两种版本，以适应不同临床需求。",
      faqWoodTypes: "有哪些木材类型？",
      faqWoodTypesAns: "我们提供竹材（经济型）、胡桃木（高端）以及OEM订单定制木材选项。",
      faqHeightAdjust: "使用时可以调节高度吗？",
      faqHeightAdjustAns: "可以，我们的灸盒具有3档高度调节功能以控制温度。",
      faqReplacementParts: "可以购买替换零件吗？",
      faqReplacementPartsAns: "可以，我们单独提供替换网罩和绑带。",
      faqPurityGrade: "应该选择哪种纯度等级？",
      faqPurityGradeAns: "制造用途选择5:1至10:1，需要更细腻质感的直接临床使用选择20:1以上。",
      faqQualityDetermined: "品质如何判定？",
      faqQualityDeterminedAns: "品质根据叶茎比、颜色（金黄色更佳）和陈化时间来评估。",
      faqSampleGrades: "可以获得不同等级的样品吗？",
      faqSampleGradesAns: "可以，我们提供包含多种等级的样品套装供评估。",
      faqConeTypes: "传统式和粘贴式有什么区别？",
      faqConeTypesAns: "粘贴式艾炷有带粘性的纸底，便于放置；传统式需要手动定位。",
      faqConePopular: "最受欢迎的尺寸是哪个？",
      faqConePopularAns: "中号（12mm）最受一般临床使用欢迎；小号（8mm）适用于面部和敏感部位。",
      faqConeGinger: "艾炷可以配合姜或盐使用吗？",
      faqConeGingerAns: "可以，我们的传统式艾炷非常适合使用姜、盐或蒜的间接灸技术。",
      faqSensitiveSkin: "敏感肌肤安全吗？",
      faqSensitiveSkinAns: "安全，我们的贴片使用低敏粘合剂并经过皮肤科测试。建议先在小范围测试。",
      faqCutSize: "贴片可以裁剪使用吗？",
      faqCutSizeAns: "建议整片使用；裁剪可能影响发热分布和持续时间。",
      faqRetailPackaging: "有哪些零售包装选项？",
      faqRetailPackagingAns: "我们提供标准零售盒、礼品套装以及OEM订单的完全定制包装设计。",
    },
  },
};

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("moxa-locale", newLocale);
    }
  }, []);

  // Initialize from localStorage on mount
  useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("moxa-locale") as Locale | null;
      if (saved && translations[saved]) {
        setLocaleState(saved);
      }
    }
  });

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
