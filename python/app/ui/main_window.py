from PySide6.QtCore import Qt
from PySide6.QtWidgets import (
    QFrame, QHBoxLayout, QLabel, QMainWindow, QPushButton,
    QTableWidget, QTableWidgetItem, QVBoxLayout, QWidget
)
from app.core.demo_data import get_demo_offers

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Promonetar Desktop")
        self.resize(1100, 680)
        self.offers = get_demo_offers()
        self.setCentralWidget(self._build())
        self.setStyleSheet(self._style())

    def _build(self):
        root = QWidget()
        layout = QHBoxLayout(root)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)

        sidebar = QFrame()
        sidebar.setObjectName("sidebar")
        sidebar.setFixedWidth(220)
        side = QVBoxLayout(sidebar)
        brand = QLabel("PROMONETAR")
        brand.setObjectName("brand")
        side.addWidget(brand)
        for text in ["Dashboard", "Ofertas", "Marketplaces", "Telegram", "Histórico", "Automação", "Configurações"]:
            button = QPushButton(text)
            button.setObjectName("nav")
            button.setCursor(Qt.CursorShape.PointingHandCursor)
            side.addWidget(button)
        side.addStretch()

        content = QWidget()
        main = QVBoxLayout(content)
        main.setContentsMargins(34, 28, 34, 28)
        title = QLabel("Visão geral")
        title.setObjectName("title")
        subtitle = QLabel("Mercado Livre • Shopee • Amazon")
        subtitle.setObjectName("muted")
        main.addWidget(title)
        main.addWidget(subtitle)

        stats = QHBoxLayout()
        for label, value in [("Encontradas", "12"), ("Aprovadas", "7"), ("Na fila", "3"), ("Publicadas", "0")]:
            card = QFrame()
            card.setObjectName("card")
            box = QVBoxLayout(card)
            small = QLabel(label)
            small.setObjectName("muted")
            number = QLabel(value)
            number.setObjectName("number")
            box.addWidget(small)
            box.addWidget(number)
            stats.addWidget(card)
        main.addLayout(stats)

        section = QLabel("Melhores ofertas")
        section.setObjectName("section")
        main.addWidget(section)

        table = QTableWidget(len(self.offers), 5)
        table.setHorizontalHeaderLabels(["Marketplace", "Produto", "Preço", "Desconto", "Status"])
        table.horizontalHeader().setStretchLastSection(True)
        table.setAlternatingRowColors(True)
        table.verticalHeader().setVisible(False)
        for row, offer in enumerate(self.offers):
            values = [
                offer.marketplace,
                offer.title,
                f"R$ {offer.price:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."),
                f"{offer.discount_percent}% OFF",
                offer.status,
            ]
            for col, value in enumerate(values):
                table.setItem(row, col, QTableWidgetItem(value))
        main.addWidget(table)

        status = QLabel("● PROTÓTIPO — integrações reais serão conectadas nas próximas etapas")
        status.setObjectName("status")
        main.addWidget(status)

        layout.addWidget(sidebar)
        layout.addWidget(content)
        return root

    def _style(self):
        return """
        QMainWindow, QWidget { background: #07110e; color: #e9eef2; font-family: 'Segoe UI'; font-size: 14px; }
        #sidebar { background: #0b1814; border-right: 1px solid #1c372e; }
        #brand { color: #61e6a7; font-size: 21px; font-weight: 800; letter-spacing: 2px; padding: 18px 8px; }
        #nav { text-align: left; padding: 12px; border: 0; border-radius: 8px; color: #9db1aa; background: transparent; }
        #nav:hover { background: #142720; color: #ffffff; }
        #title { font-size: 32px; font-weight: 700; }
        #section { font-size: 20px; font-weight: 700; margin-top: 20px; }
        #muted { color: #789087; }
        #number { font-size: 30px; font-weight: 800; color: #61e6a7; }
        #card { background: #0d1b17; border: 1px solid #1c372e; border-radius: 12px; margin-top: 20px; }
        QTableWidget { background: #0d1b17; alternate-background-color: #0b1713; border: 1px solid #1c372e; border-radius: 10px; gridline-color: #193229; margin-top: 8px; }
        QHeaderView::section { background: #10231c; color: #9db1aa; border: 0; padding: 10px; font-weight: 600; }
        #status { color: #f5bd62; padding-top: 10px; font-size: 12px; }
        """
