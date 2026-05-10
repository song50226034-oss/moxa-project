export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  shortDescKey: string;
  specKey: string;
  use: string;
  image: string;
  category: "traditional" | "modern" | "raw";
  images: ProductImage[];
  specifications: ProductSpec[];
  packaging: string;
  moq: string;
  oemSupport: boolean;
  privateLabelSupport: boolean;
  usageScenarios: string[];
  shippingInfo: string;
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
    use: "clinic / therapy / spa",
    image: "/images/products/moxa-stick-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-stick-main.jpg", alt: "Premium moxa sticks crafted from aged artemisia" },
      { src: "/images/products/moxa-stick-detail.jpg", alt: "Close-up view of moxa stick texture" },
      { src: "/images/products/moxa-stick-use.jpg", alt: "Moxa stick in clinical application" },
      { src: "/images/products/moxa-stick-packaging.jpg", alt: "Professional packaging for moxa sticks" },
    ],
    specifications: [
      { label: "Purity Ratio", value: "10:1 to 35:1" },
      { label: "Diameter", value: "18mm / 22mm / 25mm" },
      { label: "Length", value: "200mm" },
      { label: "Aging Period", value: "3-5 years" },
      { label: "Burn Time", value: "45-60 minutes" },
      { label: "Material", value: "100% Pure Artemisia Argyi" },
    ],
    packaging: "10 sticks per box, 50 boxes per carton. Custom packaging available.",
    moq: "500 sticks (50 boxes)",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Acupuncture clinics for moxibustion therapy",
      "Traditional Chinese medicine practices",
      "Wellness spas offering heat therapy",
      "Physical therapy and rehabilitation centers",
    ],
    shippingInfo: "Sea freight (20-30 days), Air freight (5-7 days), Express courier (3-5 days). All shipments include proper documentation for customs clearance.",
    faqs: [
      { question: "What purity ratio is best for clinical use?", answer: "For clinical use, we recommend 20:1 to 35:1 purity ratios for optimal therapeutic effect with minimal smoke." },
      { question: "How should moxa sticks be stored?", answer: "Store in a cool, dry place away from direct sunlight. Properly stored moxa can maintain quality for years." },
      { question: "Can I get custom branded packaging?", answer: "Yes, we offer full OEM services including custom packaging design, branding, and labeling." },
    ],
    relatedProductIds: ["moxa-box", "moxa-cone", "moxa-wool"],
  },
  {
    id: "smokeless-device",
    nameKey: "smokelessDevice",
    descriptionKey: "smokelessDeviceDesc",
    shortDescKey: "smokelessDeviceShort",
    specKey: "smokelessDeviceSpec",
    use: "modern wellness clinics",
    image: "/images/products/smokeless-device-main.jpg",
    category: "modern",
    images: [
      { src: "/images/products/smokeless-device-main.jpg", alt: "Modern smokeless moxibustion device" },
      { src: "/images/products/smokeless-device-detail.jpg", alt: "Temperature control panel" },
      { src: "/images/products/smokeless-device-use.jpg", alt: "Smokeless device in clinical setting" },
      { src: "/images/products/smokeless-device-packaging.jpg", alt: "Professional device packaging" },
    ],
    specifications: [
      { label: "Type", value: "Carbon-based smokeless" },
      { label: "Temperature Range", value: "40-65°C adjustable" },
      { label: "Heating Duration", value: "20-40 minutes" },
      { label: "Power Source", value: "Self-heating / Electric options" },
      { label: "Smoke Level", value: "Ultra-low (indoor safe)" },
      { label: "Material", value: "Medical-grade materials" },
    ],
    packaging: "20 units per box, 10 boxes per carton. Individual retail packaging available.",
    moq: "200 units (10 boxes)",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Modern wellness clinics with ventilation restrictions",
      "Urban spa environments",
      "Home therapy applications",
      "Sensitive patient treatments",
    ],
    shippingInfo: "Sea freight (20-30 days), Air freight (5-7 days). Special handling for electric variants.",
    faqs: [
      { question: "Are these suitable for indoor use?", answer: "Yes, smokeless devices are specifically designed for indoor environments with minimal ventilation." },
      { question: "What is the temperature accuracy?", answer: "Our devices maintain temperature within ±2°C of the set point for consistent therapy." },
      { question: "Do you offer electric versions?", answer: "Yes, we offer both self-heating and electric versions to suit different clinical needs." },
    ],
    relatedProductIds: ["moxa-patch", "moxa-stick", "moxa-box"],
  },
  {
    id: "moxa-box",
    nameKey: "moxaBox",
    descriptionKey: "moxaBoxDesc",
    shortDescKey: "moxaBoxShort",
    specKey: "moxaBoxSpec",
    use: "spa / therapy centers",
    image: "/images/products/moxa-box-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-box-main.jpg", alt: "Wooden moxa therapy box" },
      { src: "/images/products/moxa-box-detail.jpg", alt: "Interior mesh and ventilation design" },
      { src: "/images/products/moxa-box-use.jpg", alt: "Moxa box therapy session" },
      { src: "/images/products/moxa-box-sizes.jpg", alt: "Available sizes comparison" },
    ],
    specifications: [
      { label: "Material", value: "Natural bamboo / Walnut wood" },
      { label: "Sizes", value: "Single hole, 2-hole, 4-hole, 6-hole" },
      { label: "Interior", value: "Stainless steel mesh" },
      { label: "Height Adjustment", value: "3 levels" },
      { label: "Fit", value: "Standard moxa sticks (18-25mm)" },
      { label: "Finish", value: "Natural lacquer, food-safe" },
    ],
    packaging: "Individual box packaging, 20 units per carton.",
    moq: "100 units",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Abdominal moxibustion therapy",
      "Back and shoulder treatments",
      "Spa heat therapy sessions",
      "Home wellness routines",
    ],
    shippingInfo: "Sea freight recommended for bulk orders. Careful packaging to prevent damage.",
    faqs: [
      { question: "What wood types are available?", answer: "We offer bamboo (economical), walnut (premium), and custom wood options for OEM orders." },
      { question: "Can the height be adjusted during use?", answer: "Yes, our boxes feature 3-level height adjustment for temperature control." },
      { question: "Are replacement parts available?", answer: "Yes, we supply replacement mesh screens and straps separately." },
    ],
    relatedProductIds: ["moxa-stick", "moxa-wool", "moxa-cone"],
  },
  {
    id: "moxa-wool",
    nameKey: "moxaWool",
    descriptionKey: "moxaWoolDesc",
    shortDescKey: "moxaWoolShort",
    specKey: "moxaWoolSpec",
    use: "manufacturing / OEM",
    image: "/images/products/moxa-wool-main.jpg",
    category: "raw",
    images: [
      { src: "/images/products/moxa-wool-main.jpg", alt: "Pure moxa wool for professional use" },
      { src: "/images/products/moxa-wool-texture.jpg", alt: "Fine moxa wool texture detail" },
      { src: "/images/products/moxa-wool-grades.jpg", alt: "Different purity grades comparison" },
      { src: "/images/products/moxa-wool-bulk.jpg", alt: "Bulk packaging options" },
    ],
    specifications: [
      { label: "Purity Grades", value: "5:1, 10:1, 15:1, 20:1, 35:1" },
      { label: "Form", value: "Loose wool / Compressed bales" },
      { label: "Source", value: "Nanyang Artemisia Argyi" },
      { label: "Aging", value: "1-5 years available" },
      { label: "Color", value: "Golden yellow (indicates quality)" },
      { label: "Packaging", value: "1kg, 5kg, 10kg, 25kg bags" },
    ],
    packaging: "Vacuum-sealed bags. 1kg, 5kg, 10kg, 25kg options. Custom packaging for OEM.",
    moq: "50kg",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Direct moxibustion treatments",
      "Cone and stick manufacturing",
      "OEM product production",
      "Research and development",
    ],
    shippingInfo: "Sea freight for bulk orders. Special vacuum packaging maintains quality during transit.",
    faqs: [
      { question: "What purity grade should I choose?", answer: "5:1 to 10:1 for manufacturing, 20:1+ for direct clinical use requiring finer texture." },
      { question: "How is quality determined?", answer: "Quality is assessed by leaf-to-stem ratio, color (golden = better), and aging period." },
      { question: "Can I get samples of different grades?", answer: "Yes, we provide sample kits with multiple grades for evaluation." },
    ],
    relatedProductIds: ["moxa-cone", "moxa-stick", "moxa-box"],
  },
  {
    id: "moxa-cone",
    nameKey: "moxaCone",
    descriptionKey: "moxaConeDesc",
    shortDescKey: "moxaConeShort",
    specKey: "moxaConeSpec",
    use: "acupuncture clinics",
    image: "/images/products/moxa-cone-main.jpg",
    category: "traditional",
    images: [
      { src: "/images/products/moxa-cone-main.jpg", alt: "Pre-formed moxa cones" },
      { src: "/images/products/moxa-cone-detail.jpg", alt: "Cone size and texture detail" },
      { src: "/images/products/moxa-cone-use.jpg", alt: "Moxa cone on acupoint" },
      { src: "/images/products/moxa-cone-varieties.jpg", alt: "Self-adhesive and traditional varieties" },
    ],
    specifications: [
      { label: "Types", value: "Traditional / Self-adhesive" },
      { label: "Sizes", value: "Mini (5mm), Small (8mm), Medium (12mm), Large (15mm)" },
      { label: "Burn Time", value: "3-8 minutes per cone" },
      { label: "Purity", value: "20:1 to 35:1" },
      { label: "Base", value: "Paper / Adhesive options" },
      { label: "Grade", value: "Clinical professional" },
    ],
    packaging: "200 cones per box, 50 boxes per carton. Individual blister packs available.",
    moq: "10,000 cones (50 boxes)",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Precise acupoint moxibustion",
      "Scarring and non-scarring techniques",
      "Combined acupuncture-moxa therapy",
      "Home use with supervision guidance",
    ],
    shippingInfo: "Air or sea freight. Cones packaged to prevent crushing during transport.",
    faqs: [
      { question: "What is the difference between traditional and self-adhesive?", answer: "Self-adhesive cones have a paper base with adhesive for easy placement; traditional cones require manual positioning." },
      { question: "Which size is most popular?", answer: "Medium (12mm) is most popular for general clinical use; small (8mm) for facial and sensitive areas." },
      { question: "Can cones be used with ginger/salt?", answer: "Yes, our traditional cones work well with indirect moxibustion techniques using ginger, salt, or garlic." },
    ],
    relatedProductIds: ["moxa-stick", "moxa-wool", "moxa-box"],
  },
  {
    id: "moxa-patch",
    nameKey: "moxaPatch",
    descriptionKey: "moxaPatchDesc",
    shortDescKey: "moxaPatchShort",
    specKey: "moxaPatchSpec",
    use: "retail / home use",
    image: "/images/products/moxa-patch-main.jpg",
    category: "modern",
    images: [
      { src: "/images/products/moxa-patch-main.jpg", alt: "Self-heating moxa patches" },
      { src: "/images/products/moxa-patch-detail.jpg", alt: "Patch adhesive and material detail" },
      { src: "/images/products/moxa-patch-use.jpg", alt: "Patch applied for therapy" },
      { src: "/images/products/moxa-patch-retail.jpg", alt: "Retail packaging design" },
    ],
    specifications: [
      { label: "Heat Duration", value: "8-12 hours" },
      { label: "Temperature", value: "40-50°C sustained" },
      { label: "Sizes", value: "Small (5x5cm), Medium (7x10cm), Large (10x14cm)" },
      { label: "Ingredients", value: "Moxa extract, iron powder, activated carbon" },
      { label: "Adhesive", value: "Hypoallergenic medical-grade" },
      { label: "Skin Safe", value: "Dermatologically tested" },
    ],
    packaging: "6 patches per retail box, 100 boxes per carton. Custom retail packaging available.",
    moq: "5,000 patches (minimum 50 cartons)",
    oemSupport: true,
    privateLabelSupport: true,
    usageScenarios: [
      "Consumer retail wellness products",
      "At-home pain relief solutions",
      "Travel-friendly therapy option",
      "Supplement to clinical treatments",
    ],
    shippingInfo: "Air or sea freight. Temperature-stable packaging for all climates.",
    faqs: [
      { question: "Are these safe for sensitive skin?", answer: "Yes, our patches use hypoallergenic adhesive and are dermatologically tested. Always test on a small area first." },
      { question: "Can patches be cut to size?", answer: "We recommend using patches whole; cutting may affect heat distribution and duration." },
      { question: "What retail packaging options exist?", answer: "We offer standard retail boxes, gift sets, and full custom packaging design for OEM orders." },
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
