from .models import Offer

def get_demo_offers():
    return [
        Offer("Mercado Livre", "Fone Bluetooth", 119.90, 199.90, 40, "Aprovada"),
        Offer("Shopee", "Kit utilidades domésticas", 69.90, 99.90, 30, "Aprovada"),
        Offer("Amazon", "Smart Plug Wi-Fi", 89.90, 119.90, 25, "Na fila"),
    ]
