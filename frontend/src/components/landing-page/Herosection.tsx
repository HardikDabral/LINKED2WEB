"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Herosection() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
      {/* Deep ambient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(184,227,233,0.55),transparent_50%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(79,124,130,0.18),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgba(11,46,51,0.08),transparent_50%),linear-gradient(180deg,#f0fafb_0%,#ffffff_45%,#f8fbfc_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#B8E3E9]/35 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#4F7C82]/20 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Gradient frame + glass panel */}
      <div className="relative z-0 mx-auto max-w-[1400px] rounded-[2rem] p-[1px] shadow-[0_32px_80px_-24px_rgba(11,46,51,0.25)] sm:rounded-[2.25rem] md:rounded-[2.5rem] bg-gradient-to-br from-white via-[#B8E3E9]/80 to-[#4F7C82]/50">
        <div className="relative overflow-hidden rounded-[1.95rem] border border-white/60 bg-white/55 shadow-inner shadow-white/40 backdrop-blur-2xl sm:rounded-[2.2rem] md:rounded-[2.45rem]">
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(186, 55%, 88%, 0.55) 0, hsla(186, 40%, 72%, 0.2) 45%, hsla(186, 35%, 50%, 0) 78%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(186, 45%, 82%, 0.35) 0, hsla(186, 32%, 65%, 0.1) 75%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(186, 40%, 78%, 0.22) 0, hsla(186, 28%, 58%, 0.08) 80%, transparent 100%)"
            translateY={-320}
            width={820}
            smallWidth={320}
            duration={9}
            xOffset={80}
          />

          <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-5 py-14 sm:min-h-[calc(100vh-4rem)] sm:px-8 sm:py-16 md:min-h-[calc(100vh-5rem)] md:px-12 md:py-20 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:items-center lg:gap-16 lg:px-14 lg:py-20">
            {/* Copy column */}
            <div className="flex flex-1 flex-col lg:max-w-[580px] lg:text-left">
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mb-6 flex justify-center lg:justify-start"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#4F7C82]/25 bg-gradient-to-r from-white/90 to-[#E8F6F8]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d5c63] shadow-sm shadow-[#4F7C82]/10 backdrop-blur-md sm:text-[11px]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4F7C82] opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F7C82]" />
                  </span>
                  fruupy.com · live tools
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mb-5 text-center text-[2.1rem] font-black leading-[1.05] tracking-[-0.035em] text-[#0B2E33] sm:text-4xl md:text-5xl lg:mb-6 lg:text-left lg:text-[3.25rem] xl:text-[3.75rem]"
              >
                <span className="block">Calculators that</span>
                <span className="mt-1 block bg-gradient-to-r from-[#0B2E33] via-[#4F7C82] to-[#2a9d8f] bg-clip-text text-transparent sm:mt-2">
                  look as good as they work.
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mx-auto mb-8 max-w-xl text-center text-base leading-relaxed text-[#0B2E33]/72 sm:text-lg lg:mx-0 lg:text-left"
              >
                <strong className="font-semibold text-[#0B2E33]">Fruupy</strong> on{" "}
                <span className="whitespace-nowrap font-medium text-[#4F7C82]">fruupy.com</span> — fast, accurate tools for
                BMI, EMI, GST, timers, and more. No signup: open a tab, get the number, move on.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mb-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Link
                  href="/tools"
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#0B2E33] to-[#1a4a52] px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_20px_40px_-12px_rgba(11,46,51,0.55)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(11,46,51,0.65)] sm:w-auto sm:py-4 sm:text-base"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Browse Fruupy tools</span>
                </Link>
                <Link
                  href="/tools"
                  className="w-full rounded-full border border-[#93B1B5]/50 bg-white/70 px-8 py-3.5 text-center text-sm font-semibold text-[#0B2E33] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#4F7C82]/45 hover:bg-white sm:w-auto sm:py-4 sm:text-base"
                >
                  All tools on Fruupy
                </Link>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start"
              >
                {["30+ tools", "100% free", "No login"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#93B1B5]/35 bg-white/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#0B2E33]/75 shadow-sm backdrop-blur-sm sm:px-4 sm:text-xs"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Visual column — floating glass cards */}
            <div className="relative mt-14 flex flex-1 justify-center lg:mt-0 lg:justify-end">
              <div className="relative h-[340px] w-full max-w-[420px] sm:h-[380px] sm:max-w-[440px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 top-0 z-20 w-[88%] rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 to-[#E8F6F8]/80 p-5 shadow-[0_24px_48px_-20px_rgba(11,46,51,0.2)] backdrop-blur-xl sm:w-[85%]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4F7C82]">Finance</p>
                  <p className="mt-2 text-lg font-bold text-[#0B2E33]">EMI · GST · Interest</p>
                  <p className="mt-1 text-sm text-[#0B2E33]/60">Crisp outputs, readable labels.</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute right-0 top-[28%] z-10 w-[78%] rounded-2xl border border-white/60 bg-white/65 p-4 shadow-lg backdrop-blur-xl sm:w-[72%]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4F7C82]">Health &amp; time</p>
                  <p className="mt-1.5 text-base font-bold text-[#0B2E33]">BMI · Age · Countdown</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-2 left-[12%] z-30 w-[70%] rounded-2xl border border-[#4F7C82]/20 bg-[#0B2E33] p-4 text-white shadow-[0_20px_40px_-12px_rgba(11,46,51,0.5)] sm:bottom-0"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8E3E9]">Productivity</p>
                  <p className="mt-1 text-sm font-semibold text-white/95">Pomodoro · Word counter · QR</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* SEO body — calmer band */}
          {/* <div className="relative z-10 border-t border-[#93B1B5]/25 bg-gradient-to-b from-transparent to-white/40 px-5 py-10 sm:px-8 md:px-12 md:py-12">
            <div className="mx-auto max-w-3xl space-y-4 text-left text-sm leading-relaxed text-[#0B2E33]/68 sm:text-[15px]">
              <p>
                Whether you need a <strong className="text-[#0B2E33]">free BMI calculator</strong>,{" "}
                <strong className="text-[#0B2E33]">EMI calculator</strong>,{" "}
                <strong className="text-[#0B2E33]">GST calculator</strong>, percentage math, a{" "}
                <strong className="text-[#0B2E33]">word counter</strong> for essays, a{" "}
                <strong className="text-[#0B2E33]">QR code generator</strong>, or a simple{" "}
                <strong className="text-[#0B2E33]">countdown timer</strong>, Fruupy keeps those tools in one trusted place.
                Students, freelancers, small-business owners, and busy parents use Fruupy on desktop and mobile because the
                interface stays calm and the results stay readable.
              </p>
              <p>
                Explore with Ramesh built Fruupy so anyone can skip installing yet another app. Bookmark{" "}
                <span className="font-medium text-[#4F7C82]">fruupy.com</span>, share Fruupy links with classmates or coworkers,
                and come back whenever numbers, dates, or small utilities get in your way. Fruupy adds new calculators and
                helpers over time — health, finance, education, productivity, and developer-friendly formatters — always with
                the same promise: useful, free, and straightforward.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
