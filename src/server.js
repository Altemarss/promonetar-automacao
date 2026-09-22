import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "public");
const port = Number(process.env.PORT ?? 3000);

const demoOffers = [
  { marketplace: "Mercado Livre", title: "Fone Bluetooth", price: 119.90, oldPrice: 199.90, discount: 40, status: "Aprovada" },
  { marketplace: "Shopee", title: "Kit utilidades domésticas", price: 69.90, oldPrice: 99.90, discount: 30, status: "Aprovada" },
  { marketplace: "Amazon", title: "Smart Plug Wi-Fi", price: 89.90, oldPrice: 119.90, discount: 25, status: "Na fila" }
];

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api/status") {
      res.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
      return res.end(JSON.stringify({
        mode: "prototype",
        marketplaces: ["Mercado Livre","Shopee","Amazon"],
        found: 12, approved: 7, queued: 3, published: 0,
        telegram: "Não configurado",
        offers: demoOffers
      }));
    }

    const path = req.url === "/" ? "index.html" : req.url.replace(/^\//, "");
    const file = await readFile(join(publicDir, path));
    const type = path.endsWith(".css") ? "text/css" : path.endsWith(".js") ? "text/javascript" : "text/html";
    res.writeHead(200, {"Content-Type": type + "; charset=utf-8"});
    res.end(file);
  } catch {
    res.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
    res.end("Não encontrado");
  }
});

server.listen(port, () => {
  console.log(`Promonetar disponível em http://localhost:${port}`);
});
