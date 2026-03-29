"use client";

export default function WhyUs() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FBFC] to-white">
      <div
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-[600px] w-[400px] -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(184, 227, 233, 0.55) 0%, rgba(79, 124, 130, 0.12) 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter text-[#0B2E33] md:text-5xl lg:text-7xl">
              Why Fruupy
            </h2>
            <p className="mb-3 text-sm font-medium text-[#4F7C82]">fruupy.com · free Fruupy tools</p>
            <div className="relative h-16 w-full overflow-hidden rounded-full border border-[#93B1B5]/40 bg-gradient-to-r from-[#B8E3E9]/30 via-white to-[#B8E3E9]/20 md:w-[300px]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>
          </div>
          <div className="text-left md:text-right">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-[#0B2E33] md:text-5xl lg:text-7xl">Fruupy built</h2>
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-[#4F7C82] md:text-5xl lg:text-7xl">for you</h2>
          </div>
        </div>

        <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4">
          <div className="group flex flex-col justify-between rounded-[2rem] border border-[#93B1B5]/40 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45 md:row-span-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#0B2E33]">Fast & accurate</h3>
              <p className="text-sm leading-relaxed text-[#0B2E33]/70">
                <strong className="text-[#0B2E33]">Fruupy</strong> tools on <span className="font-medium text-[#4F7C82]">fruupy.com</span> are tuned for quick answers — EMI, BMI, countdowns, GST splits, word counts, and more without clutter.
                Inputs stay obvious, outputs stay copy-friendly, and Fruupy avoids dark patterns that trick you into signing up
                for something you never needed.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#93B1B5]/40 transition-colors duration-300 group-hover:border-[#4F7C82] group-hover:bg-[#F8FBFC]">
                <div className="h-2 w-2 rounded-full bg-[#4F7C82]" />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#93B1B5]/40 bg-[#F8FBFC] p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45">
            <h3 className="mb-2 text-xl font-bold text-[#0B2E33]">No login</h3>
            <p className="text-xs leading-relaxed text-[#0B2E33]/65">
              Open Fruupy at fruupy.com and go — low friction, high speed. Your history stays in the browser unless you choose to
              share it; Fruupy does not force social login for a basic calculator.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#93B1B5]/40 bg-[#F8FBFC] p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45">
            <h3 className="mb-2 text-xl font-bold text-[#0B2E33]">Always free</h3>
            <p className="text-xs leading-relaxed text-[#0B2E33]/65">
              Fruupy core calculators stay free on fruupy.com — that is the whole point of Fruupy. Premium features may arrive
              someday, but the everyday Fruupy tools millions rely on will remain accessible without a paywall.
            </p>
          </div>

          <div className="group flex flex-col justify-between rounded-[2rem] border border-[#93B1B5]/40 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45 md:row-span-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#0B2E33]">Growing library</h3>
              <p className="text-sm leading-relaxed text-[#0B2E33]/70">
                Fruupy adds new utilities on fruupy.com regularly — converters, mini games, marketing helpers, and student
                shortcuts. Tell Explore with Ramesh what Fruupy should build next; the best Fruupy ideas come from real users
                stuck repeating the same spreadsheet steps.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#93B1B5]/40 transition-colors group-hover:border-[#4F7C82] group-hover:bg-[#F8FBFC]">
                <div className="h-2 w-2 rounded-full bg-[#4F7C82]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-[2rem] border border-[#93B1B5]/40 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45 md:col-span-2">
            <div className="flex-1 pr-4">
              <h3 className="mb-1 text-xl font-bold text-[#0B2E33]">Clean interface</h3>
            </div>
            <div className="flex-1 border-l border-[#93B1B5]/35 pl-6">
              <p className="text-xs leading-relaxed text-[#0B2E33]/65 md:text-sm">
                Same Fruupy teal palette across fruupy.com so every Fruupy page feels familiar. Typography, spacing, and button
                styles repeat intentionally — you should recognize Fruupy instantly whether you landed on a finance tool or a
                productivity timer.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between rounded-[2rem] border border-[#93B1B5]/40 bg-[#F8FBFC] p-8 shadow-sm transition-all duration-500 hover:border-[#4F7C82]/45 md:col-span-3 md:flex-row">
            <h3 className="mb-2 text-xl font-bold text-[#0B2E33] md:mb-0 md:w-1/3">Explore with Ramesh</h3>
            <p className="text-sm leading-relaxed text-[#0B2E33]/70 md:w-2/3 md:border-l md:border-[#93B1B5]/35 md:pl-8">
              <strong className="text-[#0B2E33]">Fruupy</strong> at <span className="font-medium text-[#4F7C82]">fruupy.com</span> is for people who want dependable tools without noise — students balancing exams, creators shipping content, shop owners
              estimating margins, and parents planning budgets. When you trust Fruupy with a quick calculation, you are trusting a
              brand that publishes policies, listens to email, and iterates in public.
            </p>
          </div>

          <a
            href="/about"
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] bg-[#0B2E33] p-8 text-center transition-transform hover:scale-[1.02]"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-wider text-white">About Fruupy · fruupy.com</span>
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

        <article className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#93B1B5]/40 bg-white p-8 shadow-sm md:mt-20 md:p-12">
          <h2 className="mb-4 text-xl font-bold text-[#0B2E33] md:text-2xl">
            Fruupy mission &amp; how <span className="text-[#4F7C82]">fruupy.com</span> helps you daily
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#0B2E33]/75 md:text-[15px]">
            <p>
              Fruupy exists so the internet still has a calm corner for honest math and small utilities. Instead of downloading
              questionable executables or signing into five dashboards, you open Fruupy, solve the task, and leave. That
              workflow matters for schools with shared Chromebooks, offices that block installs, and travelers on hotel Wi‑Fi
              who just need a working Fruupy EMI estimate before talking to a bank.
            </p>
            <p>
              Long term, Fruupy wants to be the name people associate with &quot;free online calculators that actually
              work.&quot; Explore with Ramesh invests in performance, copy clarity, and search-friendly structure so Fruupy
              pages are easy for humans and search engines to understand — without stuffing keywords where they do not belong.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
