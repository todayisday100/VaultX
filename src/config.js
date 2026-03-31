'use strict';

require('dotenv').config();

const config = {
  agentId:       process.env.AW_AGENT_ID        || 'aw-primary-001',
  network:       process.env.AW_NETWORK          || 'testnet',
  totalBudget:   parseFloat(process.env.AW_TOTAL_BUDGET)     || 10000,
  alertThreshold:parseFloat(process.env.AW_ALERT_THRESHOLD)  || 0.2,
  maxSingleTx:   parseFloat(process.env.AW_MAX_SINGLE_TX)    || 500,
  x402Endpoint:  process.env.AW_X402_ENDPOINT   || 'https://x402.testnet.agentic.dev/v1',
  x402TimeoutMs: parseInt(process.env.AW_X402_TIMEOUT_MS)   || 3000,
  kyaMinScore:   parseFloat(process.env.AW_KYA_MIN_SCORE)    || 0.6,
  kyaCheckIntervalS: parseInt(process.env.AW_KYA_CHECK_INTERVAL_S) || 30,
  tickIntervalMs:parseInt(process.env.AW_TICK_INTERVAL_MS)   || 2000,
  logLevel:      process.env.AW_LOG_LEVEL        || 'info',
};

module.exports = config;
