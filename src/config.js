'use strict';

require('dotenv').config();

const config = {
  agentId:       process.env.SIGNUM_AGENT_ID        || 'signum-primary-001',
  network:       process.env.SIGNUM_NETWORK          || 'testnet',
  totalBudget:   parseFloat(process.env.SIGNUM_TOTAL_BUDGET)     || 10000,
  alertThreshold:parseFloat(process.env.SIGNUM_ALERT_THRESHOLD)  || 0.2,
  maxSingleTx:   parseFloat(process.env.SIGNUM_MAX_SINGLE_TX)    || 500,
  x402Endpoint:  process.env.SIGNUM_X402_ENDPOINT   || 'https://x402.testnet.signum.dev/v1',
  x402TimeoutMs: parseInt(process.env.SIGNUM_X402_TIMEOUT_MS)   || 3000,
  kyaMinScore:   parseFloat(process.env.SIGNUM_KYA_MIN_SCORE)    || 0.6,
  kyaCheckIntervalS: parseInt(process.env.SIGNUM_KYA_CHECK_INTERVAL_S) || 30,
  tickIntervalMs:parseInt(process.env.SIGNUM_TICK_INTERVAL_MS)   || 2000,
  logLevel:      process.env.SIGNUM_LOG_LEVEL        || 'info',
};

module.exports = config;
