"use client";

export default function Cool2() {
  return (
    <section
      aria-label="Fruupy tool categories on fruupy.com"
      className="relative w-full overflow-hidden border-t border-[#93B1B5]/35 bg-gradient-to-b from-[#F8FBFC] to-white px-4 py-20 text-[#0B2E33] sm:px-6 md:px-8 lg:px-12"
    >
      {/* Grid lines (same as About / FAQ) — overlay so gradient is not replaced */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mb-12 max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0B2E33] md:text-3xl">
            Browse Fruupy by category on <span className="text-[#4F7C82]">fruupy.com</span>
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#0B2E33]/75 md:text-[15px]">
            <p>
              The Fruupy library is organized so you can jump straight to the kind of problem you are solving. Date and time
              tools handle birthdays, project timelines, and event countdowns. Productivity utilities keep focus sessions and
              writing workflows moving. Finance Fruupy pages answer &quot;what will this loan cost?&quot; and &quot;how much GST
              am I charging?&quot; without opening Excel.
            </p>
            <p>
              Every Fruupy URL is shareable — send a colleague to the same Fruupy EMI calculator you used, or drop a Fruupy
              Pomodoro link in a study group chat. Because Fruupy runs in the browser, updates ship centrally: when Explore with
              Ramesh improves a formula or adds a field, everyone on fruupy.com benefits immediately.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
        <div className="group relative flex min-h-[560px] flex-col justify-between rounded-2xl border border-[#93B1B5]/40 bg-white p-6 shadow-sm transition-colors hover:border-[#4F7C82]/45 lg:min-h-[700px]">
          <div className="relative flex h-full flex-col py-4">
            <div className="mb-10 flex items-start justify-between text-xs font-mono uppercase tracking-widest text-[#4F7C82] lg:mb-20">
              <span>Fruupy · fruupy.com</span>
              <span>01</span>
            </div>

            <h3 className="mb-8 text-4xl font-bold leading-[0.9] tracking-tighter text-[#0B2E33] md:mb-12 md:text-5xl lg:text-6xl">
              Date &<br />
              Time
            </h3>

            <div className="mb-auto grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy Age Calculator</strong> on fruupy.com — exact age in years, months, and
                days from date of birth; helpful for forms, school projects, and verifying eligibility windows.
              </p>
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy Day Counter</strong> — count days between two calendar dates for
                contracts, travel, pregnancy milestones, or exam prep; free on Fruupy with no account.
              </p>
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy Stopwatch &amp; Timer</strong> — track elapsed time, laps, and
                presentations; pair with other Fruupy productivity tools at fruupy.com.
              </p>
            </div>

            <div className="mt-8 border-t border-[#93B1B5]/35 pt-8">
              <span className="-ml-2 block text-[18rem] font-bold leading-[0.7] tracking-tighter text-[#B8E3E9]/90">
                1
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] h-[420px] overflow-hidden rounded-2xl border border-[#93B1B5]/40 bg-[#F8FBFC] shadow-sm lg:h-[700px]">
          <img
            src="/images/ccol.jpg"
            alt="Fruupy online tools and calculators — fruupy.com"
            className="h-full w-full object-cover brightness-[1.02] contrast-[1.02] transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        <div className="group relative flex min-h-[560px] flex-col justify-between rounded-2xl border border-[#93B1B5]/40 bg-white p-6 shadow-sm transition-colors hover:border-[#4F7C82]/45 lg:min-h-[700px]">
          <div className="relative flex h-full flex-col py-4">
            <div className="mb-10 flex items-start justify-between text-xs font-mono uppercase tracking-widest text-[#4F7C82] lg:mb-20">
              <span>Fruupy tools</span>
              <span>02</span>
            </div>

            <h3 className="mb-8 text-4xl font-bold leading-[0.9] tracking-tighter text-[#0B2E33] md:mb-12 md:text-5xl lg:text-6xl">
              Productivity
              <br />
              Tools
            </h3>

            <div className="mb-auto grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy To-Do List</strong> — capture daily tasks, check them off, and keep
                lightweight lists next to your other Fruupy tabs without installing a native app.
              </p>
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy Pomodoro</strong> — structured focus and break intervals for deep
                work; pair with Fruupy timers when you batch creative or coding sessions.
              </p>
              <p className="text-xs leading-snug text-[#0B2E33]/65">
                <strong className="text-[#0B2E33]">Fruupy Word Counter</strong> — words, characters, reading-time style stats for
                blogs, captions, and assignments; part of the Fruupy writing toolkit on fruupy.com.
              </p>
            </div>

            <div className="mt-8 border-t border-[#93B1B5]/35 pt-8">
              <span className="-ml-2 block text-[18rem] font-bold leading-[0.7] tracking-tighter text-[#B8E3E9]/90">
                2
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
