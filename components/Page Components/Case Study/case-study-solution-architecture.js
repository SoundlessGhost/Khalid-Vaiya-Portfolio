"use client";

export function SolutionArchitecture({
  title = "Solution Architecture",
  nodes = [
    "Crawler (Playwright)",
    "Queue (Redis)",
    "Parser (Node/Python)",
    "QA (Great Expectations)",
    "Storage (Postgres/S3)",
    "Dashboard (Metabase)",
  ],
  highlights = [
    "Rate-aware crawling with backoff & retries",
    "Rotating proxies + geo-routing",
    "Schema validation & dedupe pipeline",
    "DOM-change detection alerts",
  ],
  stack = [
    "Playwright",
    "Redis",
    "Node.js",
    "Python",
    "PostgreSQL",
    "S3",
    "Metabase",
  ],
  note = "We respect robots.txt & site TOS. No PII is collected or stored.",
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* header */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Design
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        {/* diagram */}
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
          <Diagram nodes={nodes} />

          {/* stack badges */}
          {Array.isArray(stack) && stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* highlights + note */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-3 text-base font-semibold text-slate-900">
              Highlights
            </h3>
            <ul className="grid list-disc gap-2 pl-5 text-slate-700 md:grid-cols-2">
              {highlights.map((h, i) => (
                <li key={`${h}-${i}`}>{h}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 shadow-sm">
            <strong className="block text-slate-900">
              Compliance & Safety
            </strong>
            <span className="mt-1 block">{note}</span>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Inline SVG Diagram ---------- */

function Diagram({ nodes = [] }) {
  if (!nodes || nodes.length === 0) return null;

  // layout
  const width = 1100;
  const height = 160;
  const padX = 28;
  const step = (width - padX * 2) / nodes.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="min-w-[680px] w-full"
        aria-label="Solution flow diagram"
      >
        {/* subtle gradient line */}
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        {nodes.map((n, i) => {
          const boxW = 180;
          const boxH = 64;
          const x = padX + i * step + step / 2 - boxW / 2;
          const y = height / 2 - boxH / 2;

          return (
            <g
              key={`${n}-${i}`}
              className="transition duration-300 hover:opacity-100"
            >
              {/* connector */}
              {i < nodes.length - 1 && (
                <>
                  <line
                    x1={x + boxW}
                    y1={height / 2}
                    x2={x + step + boxW / 2}
                    y2={height / 2}
                    stroke="url(#g)"
                    strokeWidth="2"
                    opacity="0.7"
                  />
                  {/* arrow head */}
                  <polygon
                    points={`${x + step + boxW / 2},${height / 2} ${
                      x + step + boxW / 2 - 8
                    },${height / 2 - 6} ${x + step + boxW / 2 - 8},${
                      height / 2 + 6
                    }`}
                    className="fill-blue-400"
                    opacity="0.8"
                  />
                </>
              )}

              {/* node */}
              <rect
                x={x}
                y={y}
                width={boxW}
                height={boxH}
                rx="16"
                className="fill-white"
              />
              <rect
                x={x}
                y={y}
                width={boxW}
                height={boxH}
                rx="16"
                className="stroke-slate-300"
                fill="none"
              />
              {/* glow on hover */}
              <rect
                x={x - 2}
                y={y - 2}
                width={boxW + 4}
                height={boxH + 4}
                rx="18"
                className="fill-transparent"
                style={{ filter: "url(#)" }}
              />
              <text
                x={x + boxW / 2}
                y={y + boxH / 2 + 4}
                textAnchor="middle"
                className="text-[12px] fill-neutral-800"
              >
                {n}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
