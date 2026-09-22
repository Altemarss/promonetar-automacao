import { selecionarOfertas } from "../filters/selectOffers.js";
import { formatarOferta } from "./formatOffer.js";

const prototipo = [
  {
    marketplace: "mercado_livre",
    externalId: "DEMO-001",
    title: "Fone Bluetooth — produto demonstrativo",
    originalPrice: 199.90,
    price: 119.90,
    discountPercent: 40,
    url: "https://exemplo.invalid/oferta",
  },
  {
    marketplace: "amazon",
    externalId: "DEMO-002",
    title: "Smart Plug — produto demonstrativo",
    originalPrice: 99.90,
    price: 89.90,
    discountPercent: 10,
    url: "https://exemplo.invalid/oferta-2",
  },
];

const selecionadas = selecionarOfertas(prototipo);
console.log("=== PROTÓTIPO PROMONETAR ===");
for (const oferta of selecionadas) {
  console.log("\n" + formatarOferta(oferta));
}
