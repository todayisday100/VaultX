'use strict';

const readline   = require('readline');
const agents     = require('./agents');
const config     = require('./config');
const state      = require('./state');
const display    = require('./display');
const boot       = require('./boot');
const loop       = require('./loop');
const cli        = require('./cli');
const onboarding = require('./onboarding');

async function main() {
  // ── First-run or returning user ──────────────────────────────────────────────
  if (state.isFirstRun()) {
    // Onboarding uses its own readline, closes it when done
    const setupRl = readline.createInterface({ input: process.stdin, output: process.stdout });
    await onboarding.run(setupRl, agents);
    setupRl.close();
    await new Promise(r => setTimeout(r, 200)); // let stdin settle
  } else {
    onboarding.loadSaved(agents);
  }

  // ── Boot sequence ─────────────────────────────────────────────────────────────
  await boot.boot(agents);

  // ── Start interactive CLI readline ────────────────────────────────────────────
  const rl = readline.createInterface({
    input:    process.stdin,
    output:   process.stdout,
    terminal: true,
  });

  // Make readline available to display (prompt-aware logging) and cli
  state.rl = rl;

  // Graceful shutdown on Ctrl+C
  process.on('SIGINT', () => {
    loop.stop();
    rl.close();
    process.stdout.write('\nAgentic Wallet shutting down... Goodbye.\n');
    process.exit(0);
  });

  // ── Start event loop + CLI ────────────────────────────────────────────────────
  loop.start(agents);
  cli.start(agents);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

// 2025-04-01T21:56:18
// 2025-04-03T10:08:19
// 2025-04-03T12:02:38
// 2025-04-03T16:38:48
// 2025-04-03T22:21:45
// 2025-04-05T16:07:00
// 2025-04-05T19:33:35
// 2025-04-06T14:15:38
// 2025-04-07T14:22:30