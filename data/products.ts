export type Product = {
  name: string;
  description: string;
  use: string;
};

const products: Product[] = [
  {
    name: "Moxa Stick",
    description: "Traditional moxibustion stick for acupuncture clinics",
    use: "clinic / therapy / spa",
  },
  {
    name: "Smokeless Moxibustion Device",
    description: "Low-smoke modern moxibustion device",
    use: "modern wellness clinics",
  },
  {
    name: "Moxa Box",
    description: "Heat therapy box for body treatment",
    use: "spa / therapy centers",
  },
  {
    name: "Moxa Wool",
    description: "Raw moxa material for processing",
    use: "manufacturing / OEM",
  },
];

export default products;
