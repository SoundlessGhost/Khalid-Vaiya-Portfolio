// components/ClientContext.jsx
export default function ClientContext({
  industry,
  clientName,
  clientType,
  location,
  goal,
  website,
  stats = [], 
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {/* header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Overview
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
          Client & Context
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* left: client details */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <dl className="grid gap-4 sm:grid-cols-2">
            {clientName && (
              <div>
                <dt className="text-sm text-slate-500">Client</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {clientName}
                </dd>
              </div>
            )}
            {clientType && (
              <div>
                <dt className="text-sm text-slate-500">Type</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {clientType}
                </dd>
              </div>
            )}
            {location && (
              <div>
                <dt className="text-sm text-slate-500">Location</dt>
                <dd className="mt-1 font-medium text-slate-900">{location}</dd>
              </div>
            )}
            {website && (
              <div>
                <dt className="text-sm text-slate-500">Website</dt>
                <dd className="mt-1 font-medium text-blue-600">
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {website.replace(/^https?:\/\//, "")}
                  </a>
                </dd>
              </div>
            )}
          </dl>

          {goal && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Goal</p>
              <p className="mt-1 text-slate-700">{goal}</p>
            </div>
          )}
        </div>

        {/* right: industry + small stats */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Industry</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            {industry || "—"}
          </p>

          {Array.isArray(stats) && stats.length > 0 && (
            <ul className="mt-4 space-y-2">
              {stats.map((s) => (
                <li
                  key={`${s.label}-${s.value}`}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                >
                  <span className="text-sm text-slate-600">{s.label}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {s.value}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </section>
  );
}
