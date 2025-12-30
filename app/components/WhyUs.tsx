"use client";

import { ChevronRight } from "lucide-react";

export default function WhyUs() {
  const widgets = [
    {
      header: "CHAT WIDGET",
      title: "AI-powered conversations",
      status: "Live",
      description: "Context-aware answers with quick actions, tone control, and guardrails.",
      features: ["Smart suggestions", "Safety + escalation", "No login required"],
      footer: "Async · SEO-safe",
      link: "Learn more",
      accent: "purple",
    },
    {
      header: "SEARCH WIDGET",
      title: "Semantic search",
      status: "Live",
      description: "Website-scoped vector search with fast results, filters, and recency bias.",
      features: ["Filters + facets", "URL-aware ranking", "Structured snippets"],
      footer: "Async · SEO-safe",
      link: "Learn more",
      accent: "blue",
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Purple Gradient Shade - Right Side Centered */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full pointer-events-none blur-3xl" 
        style={{
          background: 'radial-gradient(ellipse at right center, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0.15) 30%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        {/* Headline Section */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="mb-16 text-center md:mb-20">
          <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Two powerful widgets.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              One simple embed.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg">
            Deploy AI chat and semantic search with a single line of code.
          </p>
        </div>

        {/* Widget Cards */}
        <div className="mb-16 grid gap-5 md:grid-cols-2 lg:gap-6">
          {widgets.map((widget, index) => (
            <div
              key={index}
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.01] hover:border-white/20 hover:bg-white/10 ${
                widget.accent === "purple"
                  ? "hover:shadow-xl hover:shadow-purple-500/20"
                  : "hover:shadow-xl hover:shadow-blue-500/20"
              }`}
            >

              {/* Content */}
              <div className="relative z-10">
                {/* Header and Status */}
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {widget.header}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 py-0.5">
                    <div className="h-1 w-1 animate-pulse rounded-full bg-green-400" />
                    <span className="text-[9px] font-semibold text-green-400">
                      {widget.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-white md:text-xl">
                  {widget.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-xs leading-relaxed text-gray-400">
                  {widget.description}
                </p>

                {/* Features List */}
                <ul className="mb-5 flex flex-wrap items-center gap-3">
                  {widget.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          widget.accent === "purple"
                            ? "bg-purple-500"
                            : "bg-blue-500"
                        }`}
                      />
                      <span className="text-xs font-medium text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-800/50 pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-1 animate-pulse rounded-full bg-green-400" />
                    <span className="text-[10px] font-medium text-gray-500">
                      {widget.footer}
                    </span>
                  </div>
                  <a
                    href="#"
                    className={`group/link flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 hover:gap-2 ${
                      widget.accent === "purple"
                        ? "text-purple-400 hover:text-purple-300"
                        : "text-blue-400 hover:text-blue-300"
                    }`}
                  >
                    {widget.link}
                    <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between gap-6 flex-col sm:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Ready to ship a modern AI surface?
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                Launch the widget, test live in minutes, and keep performance and brand
                control.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 sm:px-8 sm:py-3 sm:text-sm">
                Start free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

