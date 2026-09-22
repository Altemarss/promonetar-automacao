from dataclasses import dataclass

@dataclass(slots=True)
class Offer:
    marketplace: str
    title: str
    price: float
    original_price: float
    discount_percent: int
    status: str = "Pronta"
