export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSpec = {
  labelKey: string;
  valueKey: string;
};

export type FAQ = {
  questionKey: string;
  answerKey: string;
};

export type Product = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  shortDescKey: string;
  specKey: string;
  useKey: string;
  image: string;
  category: "traditional" | "modern" | "raw";
  images: ProductImage[];
  specifications: ProductSpec[];
  packagingKey: string;
  moq: string;
  oemSupport: boolean;
  privateLabelSupport: boolean;
  usageScenarioKeys: string[];
  shippingInfoKey: string;
  faqs: FAQ[];
  relatedProductIds: string[];
};

const products: Product[] = [
  {
    id: "moxa-stick",
    nameKey: "moxaStick",
    descriptionKey: "moxaStickDesc",
    shortDescKey: "moxaStickShort",
    specKey: "moxaStickSpec",
    useKey: "useClinic",
    image: "/images/products/moxa-stick-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-stick-main.jpg", alt: "Premium moxa sticks crafted from aged artemisia" },
      { src: "/images/products/moxa-stick-detail.jpg", alt: "Close-up view of moxa stick texture" },
      { src: "/images/products/moxa-stick-use.jpg", alt: "Moxa stick in clinical application" },
      { src: "/images/products/moxa-stick-packaging.jpg", alt: "Professional packaging for moxa sticks" },
    ],
    specifications: [
      { labelKey: "specPurityRatio", valueKey: "valPurityRange" },
      { labelKey: "specDiameter", valueKey: "valDiameters" },
      { labelKey: "specLength", valueKey: "valLength200" },
      { labelKey: "specAgingPeriod", valueKey: "valAging3to5" },
      { labelKey: "specBurnTime", valueKey: "valBurnTime45to60" },
      { labelKey: "specMaterial", valueKey: "valPureArtemisia" },
    ],
    packagingKey: "packMoxaStick",
    moq: "500",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioClinicMoxa",
      "scenarioTcm",
      "scenarioWellnessSpa",
      "scenarioPhysicalTherapy",
    ],
    shippingInfoKey: "shipMoxaStick",
    faqs: [
      { questionKey: "faqPurityBest", answerKey: "faqPurityBestAns" },
      { questionKey: "faqStorage", answerKey: "faqStorageAns" },
      { questionKey: "faqCustomPackaging", answerKey: "faqCustomPackagingAns" },
    ],
    relatedProductIds: ["moxa-box", "moxa-cone", "moxa-wool"],
  },
  {
    id: "smokeless-device",
    nameKey: "smokelessDevice",
    descriptionKey: "smokelessDeviceDesc",
    shortDescKey: "smokelessDeviceShort",
    specKey: "smokelessDeviceSpec",
    useKey: "useModernWellness",
    image: "/images/products/smokeless-device-main.jpg",
    category: "modern",
    images: [
      { src: "/images/products/smokeless-device-main.jpg", alt: "Modern smokeless moxibustion device" },
      { src: "/images/products/smokeless-device-detail.jpg", alt: "Temperature control panel" },
      { src: "/images/products/smokeless-device-use.jpg", alt: "Smokeless device in clinical setting" },
      { src: "/images/products/smokeless-device-packaging.jpg", alt: "Professional device packaging" },
    ],
    specifications: [
      { labelKey: "specType", valueKey: "valCarbonSmokeless" },
      { labelKey: "specTempRange", valueKey: "valTempRange40to65" },
      { labelKey: "specHeatingDuration", valueKey: "valHeating20to40" },
      { labelKey: "specPowerSource", valueKey: "valPowerOptions" },
      { labelKey: "specSmokeLevel", valueKey: "valUltraLow" },
      { labelKey: "specMaterial", valueKey: "valMedicalGrade" },
    ],
    packagingKey: "packSmokeless",
    moq: "200",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioModernClinic",
      "scenarioUrbanSpa",
      "scenarioHomeTherapy",
      "scenarioSensitivePatient",
    ],
    shippingInfoKey: "shipSmokeless",
    faqs: [
      { questionKey: "faqIndoorUse", answerKey: "faqIndoorUseAns" },
      { questionKey: "faqTempAccuracy", answerKey: "faqTempAccuracyAns" },
      { questionKey: "faqElectricVersion", answerKey: "faqElectricVersionAns" },
    ],
    relatedProductIds: ["moxa-patch", "moxa-stick", "moxa-box"],
  },
  {
    id: "moxa-box",
    nameKey: "moxaBox",
    descriptionKey: "moxaBoxDesc",
    shortDescKey: "moxaBoxShort",
    specKey: "moxaBoxSpec",
    useKey: "useSpaTherapy",
    image: "/images/products/moxa-box-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-box-main.jpg", alt: "Wooden moxa therapy box" },
      { src: "/images/products/moxa-box-detail.jpg", alt: "Interior mesh and ventilation design" },
      { src: "/images/products/moxa-box-use.jpg", alt: "Moxa box therapy session" },
      { src: "/images/products/moxa-box-sizes.jpg", alt: "Available sizes comparison" },
    ],
    specifications: [
      { labelKey: "specMaterial", valueKey: "valBambooWalnut" },
      { labelKey: "specSizes", valueKey: "valBoxSizes" },
      { labelKey: "specInterior", valueKey: "valStainlessMesh" },
      { labelKey: "specHeightAdjustment", valueKey: "val3Levels" },
      { labelKey: "specFit", valueKey: "valStandardSticks" },
      { labelKey: "specFinish", valueKey: "valNaturalLacquer" },
    ],
    packagingKey: "packMoxaBox",
    moq: "100",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioAbdominalMoxa",
      "scenarioBackShoulder",
      "scenarioSpaHeat",
      "scenarioHomeWellness",
    ],
    shippingInfoKey: "shipMoxaBox",
    faqs: [
      { questionKey: "faqWoodTypes", answerKey: "faqWoodTypesAns" },
      { questionKey: "faqHeightAdjust", answerKey: "faqHeightAdjustAns" },
      { questionKey: "faqReplacementParts", answerKey: "faqReplacementPartsAns" },
    ],
    relatedProductIds: ["moxa-stick", "moxa-wool", "moxa-cone"],
  },
  {
    id: "moxa-wool",
    nameKey: "moxaWool",
    descriptionKey: "moxaWoolDesc",
    shortDescKey: "moxaWoolShort",
    specKey: "moxaWoolSpec",
    useKey: "useManufacturing",
    image: "/images/products/moxa-wool-main.jpg",
    category: "raw",
    images: [
      { src: "/images/products/moxa-wool-main.jpg", alt: "Pure moxa wool for professional use" },
      { src: "/images/products/moxa-wool-texture.jpg", alt: "Fine moxa wool texture detail" },
      { src: "/images/products/moxa-wool-grades.jpg", alt: "Different purity grades comparison" },
      { src: "/images/products/moxa-wool-bulk.jpg", alt: "Bulk packaging options" },
    ],
    specifications: [
      { labelKey: "specPurityGrades", valueKey: "valPurityGrades" },
      { labelKey: "specForm", valueKey: "valLooseCompressed" },
      { labelKey: "specSource", valueKey: "valNanyangArtemisia" },
      { labelKey: "specAging", valueKey: "valAging1to5" },
      { labelKey: "specColor", valueKey: "valGoldenYellow" },
      { labelKey: "specPackaging", valueKey: "valBagSizes" },
    ],
    packagingKey: "packMoxaWool",
    moq: "50kg",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioDirectMoxa",
      "scenarioConeStickMfg",
      "scenarioOemProduction",
      "scenarioResearchDev",
    ],
    shippingInfoKey: "shipMoxaWool",
    faqs: [
      { questionKey: "faqPurityGrade", answerKey: "faqPurityGradeAns" },
      { questionKey: "faqQualityDetermined", answerKey: "faqQualityDeterminedAns" },
      { questionKey: "faqSampleGrades", answerKey: "faqSampleGradesAns" },
    ],
    relatedProductIds: ["moxa-cone", "moxa-stick", "moxa-box"],
  },
  {
    id: "moxa-cone",
    nameKey: "moxaCone",
    descriptionKey: "moxaConeDesc",
    shortDescKey: "moxaConeShort",
    specKey: "moxaConeSpec",
    useKey: "useAcupuncture",
    image: "/images/products/moxa-cone-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-cone-main.jpg", alt: "Pre-formed moxa cones" },
      { src: "/images/products/moxa-cone-detail.jpg", alt: "Cone size and texture detail" },
      { src: "/images/products/moxa-cone-use.jpg", alt: "Moxa cone on acupoint" },
      { src: "/images/products/moxa-cone-varieties.jpg", alt: "Self-adhesive and traditional varieties" },
    ],
    specifications: [
      { labelKey: "specTypes", valueKey: "valConeTypes" },
      { labelKey: "specSizes", valueKey: "valConeSizes" },
      { labelKey: "specBurnTime", valueKey: "valConeBurn3to8" },
      { labelKey: "specPurityRatio", valueKey: "valConePurity" },
      { labelKey: "specBase", valueKey: "valConeBase" },
      { labelKey: "specGrade", valueKey: "valClinicalPro" },
    ],
    packagingKey: "packMoxaCone",
    moq: "10,000",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioPreciseAcupoint",
      "scenarioScarringTech",
      "scenarioCombinedTherapy",
      "scenarioHomeSupervised",
    ],
    shippingInfoKey: "shipMoxaCone",
    faqs: [
      { questionKey: "faqConeTypes", answerKey: "faqConeTypesAns" },
      { questionKey: "faqConePopular", answerKey: "faqConePopularAns" },
      { questionKey: "faqConeGinger", answerKey: "faqConeGingerAns" },
    ],
    relatedProductIds: ["moxa-stick", "moxa-wool", "moxa-box"],
  },
  {
    id: "moxa-patch",
    nameKey: "moxaPatch",
    descriptionKey: "moxaPatchDesc",
    shortDescKey: "moxaPatchShort",
    specKey: "moxaPatchSpec",
    useKey: "useRetailHome",
    image: "/images/products/moxa-patch-main.jpg",
    category: "modern",
    images: [
      { src: "/images/products/moxa-patch-main.jpg", alt: "Self-heating moxa patches" },
      { src: "/images/products/moxa-patch-detail.jpg", alt: "Patch adhesive and material detail" },
      { src: "/images/products/moxa-patch-use.jpg", alt: "Patch applied for therapy" },
      { src: "/images/products/moxa-patch-retail.jpg", alt: "Retail packaging design" },
    ],
    specifications: [
      { labelKey: "specHeatDuration", valueKey: "valHeat8to12" },
      { labelKey: "specTemperature", valueKey: "valTemp40to50" },
      { labelKey: "specSizes", valueKey: "valPatchSizes" },
      { labelKey: "specIngredients", valueKey: "valPatchIngredients" },
      { labelKey: "specAdhesive", valueKey: "valHypoallergenic" },
      { labelKey: "specSkinSafe", valueKey: "valDermoTested" },
    ],
    packagingKey: "packMoxaPatch",
    moq: "5,000",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarioKeys: [
      "scenarioRetailWellness",
      "scenarioHomePainRelief",
      "scenarioTravelTherapy",
      "scenarioSupplementClinical",
    ],
    shippingInfoKey: "shipMoxaPatch",
    faqs: [
      { questionKey: "faqSensitiveSkin", answerKey: "faqSensitiveSkinAns" },
      { questionKey: "faqCutSize", answerKey: "faqCutSizeAns" },
      { questionKey: "faqRetailPackaging", answerKey: "faqRetailPackagingAns" },
    ],
    relatedProductIds: ["smokeless-device", "moxa-cone", "moxa-stick"],
  },
];

export default products;

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProductIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}
