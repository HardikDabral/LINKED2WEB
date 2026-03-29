"use client";

export default function CoolSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#93B1B5]/35 bg-gradient-to-b from-white to-[#F8FBFC] px-4 py-12 text-[#0B2E33] sm:px-6 md:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-between border-t border-[#93B1B5]/40 pt-4">
          <div className="mb-6 flex items-baseline justify-between text-[10px] font-mono uppercase tracking-widest text-[#4F7C82]">
            <span>fruupy.com</span>
            <span>2026</span>
            <span className="text-[#0B2E33]">Fruupy</span>
          </div>

          <p className="mb-3 text-xs font-semibold tracking-wide text-[#0B2E33]">
            Fruupy · <span className="text-[#4F7C82]">www.fruupy.com</span>
          </p>

          <div className="mb-6 max-w-xl space-y-4">
            <p className="text-sm leading-relaxed text-[#0B2E33]/70">
              <strong className="text-[#0B2E33]">Fruupy</strong> on <span className="font-medium text-[#4F7C82]">fruupy.com</span>{' '}
              is one home for calculators, timers, converters, and everyday utilities — fast, accurate, and free. Bookmark
              Fruupy and skip the app store.
            </p>
            <p className="text-sm leading-relaxed text-[#0B2E33]/70">
              The Fruupy catalog spans <strong className="text-[#0B2E33]">financial calculators</strong> (EMI, GST, interest,
              salary), <strong className="text-[#0B2E33]">health tools</strong> (BMI, calories, water, sleep),{' '}
              <strong className="text-[#0B2E33]">date and time utilities</strong> (age, day counter, countdown, stopwatch),{' '}
              <strong className="text-[#0B2E33]">education helpers</strong> (GPA, percentage, math solver, word counter), and{' '}
              <strong className="text-[#0B2E33]">creative or technical utilities</strong> (QR generator, JSON formatter, Base64,
              color picker, image resizer, meme maker, language translator). Each Fruupy experience is built to feel familiar:
              open fruupy.com, pick a category mentally, and land on the right Fruupy tool in seconds.
            </p>
          </div>

          <div className="mb-6 h-px w-full bg-[#93B1B5]/40" />

          <div className="mb-8 max-w-xl">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#0B2E33] md:text-3xl">
              Free online calculators &amp; Fruupy utilities
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#0B2E33]/70">
              People discover Fruupy through searches for specific problems — &quot;free EMI calculator India&quot;, &quot;BMI
              calculator online&quot;, &quot;word counter for SEO&quot;, &quot;Pomodoro timer web&quot; — and stay because Fruupy
              respects their time. Explore with Ramesh documents updates on the Fruupy blog and keeps messaging honest: Fruupy
              is supported by thoughtful ads on some pages, not by locking basic math behind accounts.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4F7C82]">
              Popular Fruupy searches
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#0B2E33]/65">
              EMI calculator · GST calculator · age calculator · percentage calculator · salary calculator · tip calculator ·
              discount calculator · BMI calculator · calorie calculator · GPA calculator · QR code generator · JSON formatter ·
              countdown timer · Pomodoro · word counter — all on <span className="font-medium text-[#4F7C82]">fruupy.com</span>.
            </p>
          </div>

          <div className="mt-2 hidden lg:block">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#4F7C82]">
              Explore with Ramesh · Fruupy
            </span>
          </div>
        </div>

        <div className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-[#93B1B5]/40 shadow-sm lg:h-auto lg:min-h-[400px]">
          <div className="absolute left-0 right-0 top-0 z-20 flex items-start justify-between p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#4F7C82]">fruupy.com</span>
              <div className="h-0.5 w-10 overflow-hidden rounded-full bg-[#93B1B5]/50">
                <div className="h-full w-1/2 bg-[#0B2E33]" />
              </div>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#0B2E33]/40">—</span>
          </div>

          <div className="absolute inset-2 overflow-hidden rounded-xl border border-[#93B1B5]/30">
            <img
              src="/images/cools.jpg"
              alt="Fruupy free online calculators and tools at fruupy.com"
              className="h-full w-full object-cover brightness-[1.02] transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
