<div align="center">

# Agentic Wallet

**Treasury and budget infrastructure for autonomous AI agents over x402**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0--alpha-green.svg)]()
[![CI](https://github.com/todayisday100/agentic-wallet/actions/workflows/ci.yml/badge.svg)](https://github.com/todayisday100/agentic-wallet/actions)
[![x402](https://img.shields.io/badge/protocol-x402-00ffa3.svg)]()

</div>

---

## Overview

Agentic Wallet is a treasury and budget management layer for autonomous AI agents operating over the [x402 payment protocol](https://x402.org). Each agent in the registry receives an allocated budget, a KYA (Know Your Agent) behavioral trust score, and signs x402 requests to protocol endpoints in real time.

The system monitors all activity continuously — tracking spend per agent, detecting score drift, and surfacing anomalies before they become incidents.

> Demonstration concept. All data is simulated — no real blockchain, no real payments.

---

## Features

| | Feature | Description |
|---|---|---|
| ◆ | **Treasury engine** | Per-agent budget allocation with hard caps and real-time alerts |
| ◆ | **KYA scoring** | Behavioral trust scoring with drift detection and floor enforcement |
| ◆ | **x402 signing** | Request signing and routing over the x402 HTTP payment protocol |
| ◆ | **Interactive CLI** | Live `aw>` prompt — pause, topup, freeze, withdraw in real time |
| ◆ | **Anomaly detection** | Budget critical, KYA floor breach, and treasury-wide freeze events |
| ◆ | **Policy engine** | Per-agent tx limits, global thresholds, configurable KYA minimums |

---

## Quick Start

```bash
git clone https://github.com/todayisday100/agentic-wallet.git
cd agentic-wallet
npm install
npm start
```

No `.env` required — all values have sensible defaults.

---

## CLI Reference

```
aw> status                  Treasury overview
aw> agents                  All agents table
aw> agent <id>              Agent detail + recent txs
aw> txlog [id]              Last 20 transactions
aw> pause <id>              Pause agent spending
aw> resume <id>             Resume paused agent
aw> topup <id> <usd>        Add budget to agent
aw> limit <id> <usd>        Set max single tx for agent
aw> freeze                  Halt ALL agent spending
aw> unfreeze                Resume all agents
aw> withdraw <usd>          Withdraw from treasury
aw> set threshold <pct>     Low-budget alert threshold
aw> set kya-min <n>         KYA minimum score
aw> help                    Show this list
aw> exit                    Shutdown
```

---

## Configuration

All values are optional. Set via environment variables or `.env` file.

| Variable | Default | Description |
|---|---|---|
| `AW_AGENT_ID` | `aw-primary-001` | Identity of this wallet instance |
| `AW_NETWORK` | `testnet` | Target network |
| `AW_TOTAL_BUDGET` | `10000` | Total treasury budget in USD |
| `AW_ALERT_THRESHOLD` | `0.2` | Budget remaining fraction to trigger alert |
| `AW_KYA_MIN_SCORE` | `0.6` | Minimum acceptable KYA trust score |
| `AW_MAX_SINGLE_TX` | `500` | Max spend per single transaction in USD |
| `AW_TICK_INTERVAL_MS` | `2000` | Milliseconds between simulation ticks |

---

## Roadmap

- [x] Core treasury engine
- [x] KYA behavioral scoring
- [x] x402 request signing and routing
- [x] Interactive CLI with full command set
- [x] Real-time anomaly detection
- [ ] TEE key storage (Q2 2026)
- [ ] Policy Engine v2 — multi-sig approval flows (Q2 2026)
- [ ] Session keys with TTL (Q3 2026)
- [ ] Onchain deployment (Q3 2026)

---

## License

MIT © 2026 Agentic Wallet
