const brl=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});
async function load(){
 const r=await fetch("/api/status"); const d=await r.json();
 for(const k of ["found","approved","queued","published"]) document.getElementById(k).textContent=d[k];
 document.getElementById("telegram").textContent="Telegram: "+d.telegram;
 document.getElementById("offers").innerHTML=d.offers.map(o=>`<div class="offer"><div><b>${o.title}</b><br><small>${o.marketplace}</small></div><div class="price"><del>${brl.format(o.oldPrice)}</del><b>${brl.format(o.price)}</b></div><div class="discount">${o.discount}% OFF</div><div class="status">${o.status}</div></div>`).join("");
} load();