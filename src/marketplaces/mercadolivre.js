const API_BASE = "https://api.mercadolibre.com";

export async function buscarItensMercadoLivre(itemIds = []) {
  if (!itemIds.length) return [];

  const token = process.env.MERCADOLIVRE_ACCESS_TOKEN;
  if (!token) throw new Error("MERCADOLIVRE_ACCESS_TOKEN não configurado.");

  const ids = itemIds.slice(0, 20).join(",");
  const url = `${API_BASE}/items/bulk?ids=${encodeURIComponent(ids)}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Mercado Livre API: HTTP ${response.status}`);
  }

  const data = await response.json();
  return data
    .filter((entry) => entry.status_code === 200 && entry.body)
    .map((entry) => normalizarOferta(entry.body));
}

function normalizarOferta(item) {
  const original = Number(item.original_price ?? item.base_price ?? item.price);
  const atual = Number(item.price ?? 0);
  const desconto = original > atual
    ? Math.round(((original - atual) / original) * 100)
    : 0;

  return {
    marketplace: "mercado_livre",
    externalId: item.id,
    title: item.title,
    price: atual,
    originalPrice: original,
    discountPercent: desconto,
    url: item.permalink,
    thumbnail: item.thumbnail,
    availableQuantity: item.available_quantity,
  };
}
