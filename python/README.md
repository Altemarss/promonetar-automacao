# Promonetar Desktop — Python

Interface desktop do Promonetar Hybrid.

## Executar em desenvolvimento

No Windows:

```bat
cd python
py -m venv .venv
.venv\Scripts\activate
py -m pip install -r requirements.txt
py main.py
```

A versão atual usa dados demonstrativos. O próximo ciclo conecta o núcleo Python ao banco SQLite e aos adaptadores de marketplace.

## Empacotamento planejado

A aplicação será empacotada como executável Windows após estabilizarmos a interface e o motor central.
