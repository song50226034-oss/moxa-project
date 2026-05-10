export type Product = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  specKey: string;
  use: string;
  image: string;
  category: "traditional" | "modern" | "raw";
};

const products: Product[] = [
  {
    id: "moxa-stick",
    nameKey: "moxaStick",
    descriptionKey: "moxaStickDesc",
    specKey: "moxaStickSpec",
    use: "clinic / therapy / spa",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    category: "traditional",
  },
  {
    id: "smokeless-device",
    nameKey: "smokelessDevice",
    descriptionKey: "smokelessDeviceDesc",
    specKey: "smokelessDeviceSpec",
    use: "modern wellness clinics",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
    category: "modern",
  },
  {
    id: "moxa-box",
    nameKey: "moxaBox",
    descriptionKey: "moxaBoxDesc",
    specKey: "moxaBoxSpec",
    use: "spa / therapy centers",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80",
    category: "traditional",
  },
  {
    id: "moxa-wool",
    nameKey: "moxaWool",
    descriptionKey: "moxaWoolDesc",
    specKey: "moxaWoolSpec",
    use: "manufacturing / OEM",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    category: "raw",
  },
  {
    id: "moxa-cone",
    nameKey: "moxaCone",
    descriptionKey: "moxaConeDesc",
    specKey: "moxaConeSpec",
    use: "acupuncture clinics",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    category: "traditional",
  },
  {
    id: "moxa-patch",
    nameKey: "moxaPatch",
    descriptionKey: "moxaPatchDesc",
    specKey: "moxaPatchSpec",
    use: "retail / home use",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    category: "modern",
  },
];

export default products;
