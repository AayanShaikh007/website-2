# NanoQuant portfolio source record

Repository: https://github.com/AayanShaikh007/fpga_stockmarketsimulation, inspected at `c9ac3a20d1a4e8f4151b739f21269c045ce904ef`.

Reviewed README, docs/validation.md, docs/dashboard.md, docs/hardware.md, docs/protocol.md, docs/market-research.md, development_journal.md, and the code-agent history. Some hardware/protocol text predates later physical acceptance; the explicit subsequent results in validation.md and the later work-log entries take precedence over those historical limitations.

## Claims and evidence

- Tang Nano 9K, Verilog engine, Python reference, UART validation, hardware action LEDs: README, hardware/protocol docs and RTL implementation. LEDs are demonstrated in the owner's supplied clip; this task does not independently validate every LED state.
- React/TypeScript, Tailwind, Recharts, FastAPI/WebSockets, independent market-source/engine controls, replay, trade inspectors, $10,000 paper ledger, fees/P&L and diagnostics: dashboard and market-research docs plus actual running client.
- 22 physical CLI responses matched Python; host RTT 4.1930–4.6643 ms. A later 21-response backend run measured 4.1874–4.3436 ms. These are published historical validation results, not new hardware tests performed for the portfolio.
- Approximately 37.04 ns at 27 MHz is the one-cycle architectural estimate. No isolated physical engine timing, demonstrated speedup, or profitable strategy is claimed. All orders/fills remain simulated.
- Live Alpaca integration and historical downloads are implemented. The portfolio screenshots use generated data with Python, not authenticated provider data or new physical serial runs.

## Media

- Hardware photo: owner's previously supplied `IMG_20261020_201809955.jpg`, reused from the Life image.
- Client screenshots: actual isolated clone on loopback ports 5174/8001, Python engine, generated prices, 20 quotes/sec. Stopped before captures; marker selected through UI. Paper P&L visible in screenshots is synthetic simulation output, not evidence of attainable returns. No credentials or physical hardware commands used. The original project checkout was not modified.
- GIF: owner's `VID_20261021_002934427.mp4`, seconds 1–5.8, 640×360, 10 fps, 96-colour palette, 3,509,261 bytes. Audio and source metadata omitted. Verified 48 frames / 4.8 seconds, no repeat extension (one playback). The gallery provides a static source for prefers-reduced-motion and an image link to reopen the GIF.

Validation: Astro diagnostics and production build; asset/route checks and browser inspection. No physical FPGA validation was repeated. Temporary screenshot services are shut down after use.
