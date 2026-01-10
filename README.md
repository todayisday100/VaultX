# Signum

Agentic wallet infrastructure for AI systems over x402.

## What is this

Signum is a CLI agent that implements a treasury and budget management layer for autonomous AI agents communicating over the x402 payment protocol. Each AI agent in the registry has an allocated budget, a KYA (Know Your Agent) trust score, and issues x402-signed requests to protocol endpoints. Signum monitors all activity in real time — tracking spend, scoring agent behavior, and surfacing anomalies before they become incidents.

This is a demonstration concept. All data is simulated — no real blockchain, no real payments.

## Quick Start

```bash
git clone https://github.com/todayisday100/Signum.git
cd Signum
npm install
cp .env.example .env
npm start
```

Works without a `.env` file — all values have sensible defaults.

## Configuration

See [`.env.example`](.env.example) for the full list. Key variables:

| Variable | Default | Description |
|---|---|---|
| `SIGNUM_AGENT_ID` | `signum-primary-001` | Identity of this agent instance |
| `SIGNUM_NETWORK` | `testnet` | Target network |
| `SIGNUM_TOTAL_BUDGET` | `10000` | Total treasury budget in USD |
| `SIGNUM_ALERT_THRESHOLD` | `0.2` | Budget remaining fraction to trigger alert |
| `SIGNUM_KYA_MIN_SCORE` | `0.6` | Minimum acceptable KYA trust score |
| `SIGNUM_TICK_INTERVAL_MS` | `2000` | Milliseconds between simulation ticks |

## What it shows

- Boot sequence with step-by-step initialization
- Real-time x402 request log (agent, method, path, cost, status, latency)
- Budget tracking per agent with low-budget alerts
- KYA score drift monitoring with threshold alerts
- Treasury dashboard table every 10 ticks

## License

MIT — Signum
