import { html } from "lit";

export function renderRedesign() {
  return html`
    <div class="redesign-sandbox">
      <div class="redesign-section">
        <h2 class="redesign-section__title">Redesign Sandbox</h2>
        <p class="redesign-section__desc">
          This is the playground page for iterating on the CopyClaude UI redesign. Nothing here affects
          the existing pages.
        </p>
      </div>

      <!-- Color Palette Preview -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Color Palette</h3>
        <div class="redesign-palette">
          <div class="redesign-swatch" style="background: var(--bg)"><span>--bg</span></div>
          <div class="redesign-swatch" style="background: var(--bg-elevated)">
            <span>--bg-elevated</span>
          </div>
          <div class="redesign-swatch" style="background: var(--card)"><span>--card</span></div>
          <div class="redesign-swatch" style="background: var(--accent)"><span>--accent</span></div>
          <div class="redesign-swatch" style="background: var(--accent-2)"><span>--accent-2</span></div>
          <div class="redesign-swatch" style="background: var(--ok)"><span>--ok</span></div>
          <div class="redesign-swatch" style="background: var(--warn)"><span>--warn</span></div>
          <div class="redesign-swatch" style="background: var(--danger)"><span>--danger</span></div>
        </div>
      </div>

      <!-- Typography -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Typography</h3>
        <div style="display: grid; gap: 12px">
          <div
            style="
              font-size: 26px;
              font-weight: 700;
              letter-spacing: -0.035em;
              color: var(--text-strong);
            "
          >
            Page Title (26px/700)
          </div>
          <div style="font-size: 15px; font-weight: 600; color: var(--text-strong)">
            Card Title (15px/600)
          </div>
          <div style="font-size: 14px; color: var(--text)">
            Body text — The quick brown fox jumps over the lazy dog.
          </div>
          <div style="font-size: 13px; color: var(--muted)">
            Muted text — Secondary information and descriptions.
          </div>
          <div style="font-family: var(--mono); font-size: 13px; color: var(--text)">
            Mono text — code, values, keys
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Buttons</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
          <button class="btn">Default</button>
          <button class="btn primary">Primary</button>
          <button class="btn active">Active</button>
          <button class="btn danger">Danger</button>
          <button class="btn btn--sm">Small</button>
          <button class="btn" disabled>Disabled</button>
        </div>
      </div>

      <!-- Cards -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Cards</h3>
        <div
          style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
        >
          <div class="card">
            <div class="card-title">Card Title</div>
            <div class="card-sub">
              This is a standard card with some descriptive text below the title.
            </div>
          </div>
          <div class="card">
            <div class="card-title">Another Card</div>
            <div class="card-sub">Cards are used throughout for grouping related content.</div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Stats</h3>
        <div class="stat-grid">
          <div class="stat stat-card">
            <div class="stat-label">Uptime</div>
            <div class="stat-value ok">12h 34m</div>
          </div>
          <div class="stat stat-card">
            <div class="stat-label">Tokens Used</div>
            <div class="stat-value">1.2M</div>
          </div>
          <div class="stat stat-card">
            <div class="stat-label">Cost Today</div>
            <div class="stat-value warn">$4.82</div>
          </div>
          <div class="stat stat-card">
            <div class="stat-label">Errors</div>
            <div class="stat-value" style="color: var(--danger)">3</div>
          </div>
        </div>
      </div>

      <!-- Pills & Chips -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Pills & Chips</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
          <span class="pill"><span class="statusDot ok"></span> Connected</span>
          <span class="pill"><span class="statusDot"></span> Offline</span>
          <span class="pill danger">Error</span>
          <span class="chip">default</span>
          <span class="chip chip-ok">online</span>
          <span class="chip chip-warn">degraded</span>
          <span class="chip chip-danger">failed</span>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Form Fields</h3>
        <div class="form-grid">
          <div class="field">
            <span>Text Input</span>
            <input type="text" placeholder="Enter something..." />
          </div>
          <div class="field">
            <span>Select</span>
            <select>
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Callouts -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Callouts</h3>
        <div style="display: grid; gap: 10px">
          <div class="callout">Default callout — neutral information.</div>
          <div class="callout info">Info callout — something to be aware of.</div>
          <div class="callout success">Success callout — operation completed.</div>
          <div class="callout danger">Danger callout — something went wrong.</div>
        </div>
      </div>

      <!-- Chat Preview -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Chat Bubbles</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px">
          <div class="chat-line user">
            <div class="chat-msg">
              <div class="chat-bubble">
                <div class="chat-text">Hey, can you check the deployment status?</div>
              </div>
              <div class="chat-stamp">You &middot; 2m ago</div>
            </div>
          </div>
          <div class="chat-line assistant">
            <div class="chat-msg">
              <div class="chat-bubble">
                <div class="chat-text">
                  The deployment is running. 3 of 5 services are healthy. Checking the remaining two
                  now.
                </div>
              </div>
              <div class="chat-stamp">Assistant &middot; 1m ago</div>
            </div>
          </div>
          <div class="chat-line assistant">
            <div class="chat-msg">
              <div class="chat-bubble chat-reading-indicator">
                <div class="chat-reading-indicator__dots"><span></span><span></span><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Log Stream Preview -->
      <div class="redesign-section">
        <h3 class="redesign-section__title">Log Stream</h3>
        <div class="log-stream" style="max-height: 200px">
          <div class="log-row">
            <span class="log-time">14:32:01</span>
            <span class="log-level info">info</span>
            <span class="log-subsystem">gateway</span>
            <span class="log-message">WebSocket client connected from 127.0.0.1</span>
          </div>
          <div class="log-row">
            <span class="log-time">14:32:03</span>
            <span class="log-level debug">debug</span>
            <span class="log-subsystem">router</span>
            <span class="log-message">Routing to anthropic/claude-3-opus (cost: $0.015/1k)</span>
          </div>
          <div class="log-row">
            <span class="log-time">14:32:05</span>
            <span class="log-level warn">warn</span>
            <span class="log-subsystem">health</span>
            <span class="log-message">Provider groq health check timeout (3000ms)</span>
          </div>
          <div class="log-row">
            <span class="log-time">14:32:06</span>
            <span class="log-level error">error</span>
            <span class="log-subsystem">memory</span>
            <span class="log-message">Vector store write failed: SQLITE_BUSY</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
