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
// 2025-04-07T17:05:24
// 2025-04-07T20:23:44
// 2025-04-07T21:33:05
// 2025-04-10T12:40:54
// 2025-04-10T18:37:39
// 2025-04-11T12:45:14
// 2025-04-11T13:12:35
// 2025-04-11T13:15:44
// 2025-04-11T21:55:37
// 2025-04-14T14:04:05
// 2025-04-14T14:15:54
// 2025-04-15T11:19:11
// 2025-04-15T18:14:41
// 2025-04-15T20:38:47
// 2025-04-15T21:47:18
// 2025-04-17T10:00:33
// 2025-04-17T11:36:44
// 2025-04-17T14:53:47
// 2025-04-17T16:24:00
// 2025-04-18T10:44:11
// 2025-04-18T17:45:00
// 2025-04-19T11:04:19
// 2025-04-19T15:01:09
// 2025-04-22T11:10:22
// 2025-04-22T13:06:30
// 2025-04-22T18:26:56
// 2025-04-24T11:01:11
// 2025-04-24T14:50:59
// 2025-04-24T19:16:14
// 2025-04-25T22:26:46
// 2025-04-30T11:30:46
// 2025-04-30T12:10:45
// 2025-04-30T14:22:11
// 2025-04-30T22:13:20
// 2025-05-01T12:25:54
// 2025-05-01T15:05:20
// 2025-05-01T17:39:12
// 2025-05-01T20:17:01
// 2025-05-02T10:26:21
// 2025-05-02T13:57:33
// 2025-05-02T14:46:50
// 2025-05-03T17:22:29
// 2025-05-05T16:15:54
// 2025-05-05T17:43:55
// 2025-05-06T11:21:50
// 2025-05-06T14:41:01
// 2025-05-12T15:18:17
// 2025-05-12T16:28:44
// 2025-05-12T16:47:11
// 2025-05-13T10:56:06
// 2025-05-13T13:20:42
// 2025-05-13T15:06:44
// 2025-05-13T18:01:27
// 2025-05-14T11:11:57
// 2025-05-14T14:51:40
// 2025-05-14T21:33:41
// 2025-05-15T16:10:32
// 2025-05-15T18:10:05
// 2025-05-17T11:00:16
// 2025-05-17T16:18:37
// 2025-05-19T12:25:21
// 2025-05-19T16:18:46
// 2025-05-19T21:36:39
// 2025-05-21T10:33:31
// 2025-05-21T10:57:24
// 2025-05-21T18:52:59
// 2025-05-22T10:30:59
// 2025-05-22T11:28:55
// 2025-05-22T18:49:04
// 2025-05-22T22:43:05