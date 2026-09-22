const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatarOferta(oferta) {
  const precoAnterior = oferta.originalPrice > oferta.price
    ? `De: ~${brl.format(oferta.originalPrice)}~\n`
    : "";

  return [
    "🔥 OFERTA ENCONTRADA!",
    "",
    `🛍️ ${oferta.title}`,
    "",
    precoAnterior.trimEnd(),
    `💰 Por: ${brl.format(oferta.price)}`,
    oferta.discountPercent ? `📉 ${oferta.discountPercent}% OFF` : "",
    "",
    "🛒 PEGAR A OFERTA 👇",
    oferta.url,
    "",
    "⚠️ Preço e disponibilidade podem mudar.",
  ].filter(Boolean).join("\n");
}
