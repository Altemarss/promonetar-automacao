# Promonetar Automação

Automação para coleta, seleção e distribuição de ofertas de marketplaces em canais de divulgação.

## Objetivo

Construir um pipeline modular capaz de coletar ofertas por integrações oficiais quando disponíveis, aplicar regras de preço e qualidade, evitar duplicações, gerar mensagens, organizar uma fila e publicar inicialmente no Telegram.

## Arquitetura planejada

```text
Marketplace → Coletor → Filtros → Gerador de publicação
            → Banco/anti-duplicação → Fila → Telegram
```

## Stack inicial

- Node.js
- JavaScript
- SQLite
- APIs oficiais dos marketplaces
- Telegram Bot API

## Roadmap

- [x] Estrutura inicial do repositório
- [ ] Coletor do primeiro marketplace
- [ ] Motor de filtros
- [ ] Persistência e anti-duplicação
- [ ] Integração com Telegram
- [ ] Scheduler e fila
- [ ] Métricas de desempenho
- [ ] Novos marketplaces e canais suportados

## Segurança

Tokens, credenciais e chaves de API ficam em variáveis de ambiente e nunca devem ser publicados. Use `.env.example` como modelo e mantenha o `.env` real fora do Git.

## Status

Em desenvolvimento — primeira versão do projeto de portfólio.
