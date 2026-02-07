export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  form: string;
  priceLabel: string;
  benefits: string[];
  formulation: string[];
  dosage: string[];
  storage: string[];
  ageGroup: string[];
  limitations: string[];
  claimsCan: string[];
  claimsCannot: string[];
  dos: string[];
  donts: string[];
  nutrition: string[];
  micronutrients?: string[];
  bioactives: string[];
};

export const products: Product[] = [
  {
    slug: "sesbania-sesban-juice",
    name: "Sesbania sesban Juice",
    shortDescription:
      "A gentle herbal throat-soothing juice that reduces irritation, supports immunity, and feels safe for daily use.",
    heroDescription:
      "A fast-growing Himalayan herb formulation designed for riders and anyone exposed to dust and pollution.",
    form: "Medicinal Juice",
    priceLabel: "NPR 500",
    benefits: [
      "Provides astringent action to calm swollen throat tissues",
      "Supports antimicrobial protection",
      "Acts as a mild anti-inflammatory",
    ],
    formulation: [
      "Sesbania sesban fresh leaf extract – 30 ml",
      "Tulsi juice – 25 ml",
      "Ginger juice – 10 ml",
      "Mint extract – 5 ml",
      "Honey – 20 ml",
      "Lemon juice – 5 ml",
      "Purified water – 5 ml",
    ],
    dosage: [
      "20–30 ml once daily",
      "Best taken after riding or in the evening",
    ],
    storage: [
      "Store in a clean, airtight glass or food-grade plastic bottle",
      "Avoid exposure to direct sunlight and heat",
      "Use within 10 days",
    ],
    ageGroup: [
      "Adults aged 18–60 years",
      "Elderly above 60 years (lower dose)",
      "Not recommended for children below 12 years",
      "Not recommended for pregnant or breastfeeding women",
    ],
    limitations: [
      "Not a substitute for medical treatment",
      "Not meant to cure serious respiratory diseases",
    ],
    claimsCan: [
      "Soothe throat irritation caused by dust and pollution",
      "Reduce mild inflammation in the throat",
      "Support natural respiratory comfort",
      "Help maintain throat hygiene",
      "Provide mild antimicrobial support",
      "Improve daily comfort for riders exposed to polluted air",
    ],
    claimsCannot: [
      "Does not cure infections",
      "Does not replace antibiotics",
    ],
    dos: [
      "Shake well before use",
      "Consume fresh and within recommended time",
      "Drink warm water afterward for better throat comfort",
      "Follow dosage instructions strictly",
    ],
    donts: [
      "Do not exceed recommended dose",
      "Do not consume on an empty stomach",
      "Do not mix with alcohol or smoking",
      "Do not consume if taste, smell, or color changes",
      "Do not use continuously for months without breaks",
    ],
    nutrition: [
      "Energy: 25–35 kcal",
      "Carbohydrates: 6–8 g",
      "Natural sugars: 3–5 g",
      "Protein: 0.8–1.2 g",
      "Fat: 0–0.3 g",
      "Dietary fiber: 0.5–1 g",
    ],
    micronutrients: [
      "Vitamin C: 8–12 mg",
      "Vitamin A (beta-carotene): 150–250 IU",
      "Calcium: 30–50 mg",
      "Iron: 1–2 mg",
      "Potassium: 70–120 mg",
    ],
    bioactives: [
      "Flavonoids – anti-inflammatory action",
      "Tannins – astringent, soothing effect on throat",
      "Phenolic compounds – antioxidant support",
    ],
  },
  {
    slug: "sesbania-sesban-powder",
    name: "Sesbania sesban Powder",
    shortDescription:
      "A portable herbal throat powder that mixes easily with warm water or milk for daily comfort.",
    heroDescription:
      "Designed for long exposure days, with anti-inflammatory phytochemicals for sustained throat support.",
    form: "Herbal Throat Powder",
    priceLabel: "NPR 500",
    benefits: [
      "Dried leaves provide anti-inflammatory phytochemicals",
      "Helps maintain throat health over long exposure periods",
    ],
    formulation: [
      "Sesbania sesban leaf powder – 35 g",
      "Turmeric powder – 20 g",
      "Ginger powder – 20 g",
      "Mulethi (licorice) powder – 10 g",
      "Black pepper powder – 5 g",
      "Tulsi powder – 10 g",
    ],
    dosage: [
      "1 teaspoon (≈3–5 g) in 100–150 ml warm water or milk",
      "Once daily (not more than recommended)",
    ],
    storage: [
      "Store in a dry, airtight container",
      "Keep in a cool, dark place away from sunlight",
      "Shelf life: 6–12 months if kept dry and sealed",
      "Avoid moisture to prevent clumping or mold",
    ],
    ageGroup: [
      "Adults: 18–60 years",
      "Elderly: 60+ years (use caution, lower dose)",
      "Children: 12–18 years (lower dose under supervision)",
      "Not recommended for children below 12 years",
      "Not recommended for pregnant or breastfeeding women unless advised",
    ],
    limitations: [
      "Not a substitute for medical treatment",
      "Not intended to cure infections, bacterial or viral diseases",
      "Effectiveness may vary by individual health and environment",
      "Overuse may cause mild side effects",
    ],
    claimsCan: [
      "Soothe throat irritation caused by dust and pollution",
      "Reduce mild inflammation in the throat",
      "Support respiratory comfort for riders exposed to air pollution",
      "Provide mild antimicrobial and antioxidant support",
      "Promote general throat hygiene and comfort",
    ],
    claimsCannot: [
      "Does not claim to cure infections or replace medical treatment",
    ],
    dos: [
      "Store in a cool, dry place",
      "Use clean spoons or cups to avoid contamination",
      "Stir well before drinking",
      "Follow recommended dosage strictly",
      "Test a small amount first if consuming for the first time",
    ],
    donts: [
      "Do not exceed recommended dose",
      "Do not use on an empty stomach",
      "Do not mix with alcohol or smoking",
      "Do not consume if powder changes color, odor, or texture",
      "Avoid continuous use for months without breaks",
    ],
    nutrition: [
      "Energy: 280–320 kcal",
      "Carbohydrates: 55–65 g",
      "Natural sugars: 10–15 g",
      "Protein: 8–12 g",
      "Total fat: 2–4 g",
      "Dietary fiber: 12–18 g",
    ],
    micronutrients: [
      "Vitamin C: 40–60 mg",
      "Vitamin A (beta-carotene): 800–1200 IU",
      "Vitamin B-complex (trace amounts)",
      "Calcium: 350–500 mg",
      "Iron: 15–25 mg",
      "Potassium: 700–1000 mg",
      "Magnesium: 80–120 mg",
    ],
    bioactives: [
      "Flavonoids – anti-inflammatory support",
      "Phenolic compounds – antioxidant activity",
      "Tannins – astringent, throat-soothing effect",
      "Saponins (low level) – antimicrobial support",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
