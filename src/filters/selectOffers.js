export function selecionarOfertas(ofertas, options = {}) {
  const {
    minDiscountPercent = 20,
    minPrice = 10,
    maxPrice = 5000,
  } = options;

  return ofertas
    .filter((oferta) => oferta.price >= minPrice)
    .filter((oferta) => oferta.price <= maxPrice)
    .filter((oferta) => oferta.discountPercent >= minDiscountPercent)
    .sort((a, b) => b.discountPercent - a.discountPercent);
}
