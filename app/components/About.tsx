"use client";

export default function About() {
  const features = [
    {
      title: "Page-aware",
      description: "Answers stay in-context for every URL.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
    {
      title: "Performance-first",
      description: "Async embed, sub-30KB start, zero CLS.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
    {
      title: "Lead-ready",
      description: "Intent-based capture with frictionless prompts.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
  ];

  const metrics = [
    {
      title: "Improve Content Discovery",
      description: "Help visitors find what they need faster with AI-powered search that understands intent.",
      metric: "3x faster discovery",
    },
    {
      title: "Reduce Bounce Rate",
      description: "Keep visitors on your site longer by helping them find relevant content quickly.",
      metric: "45% lower bounce",
    },
    {
      title: "Increase Conversions",
      description: "Guide users to the right pages and products, leading to higher conversion rates.",
      metric: "32% more conversions",
    },
    {
      title: "Better User Experience",
      description: "Modern, intuitive search interface that users expect from contemporary websites.",
      metric: "5-star UX",
    },
  ];

  return (
    <section
      className="relative z-10 min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Purple Gradient Shade - Left Side Centered */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full pointer-events-none blur-3xl" 
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0.15) 30%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        {/* Features Section */}
        <div className="mb-16 md:mb-24">
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 150}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                {/* Live Badge */}
                <div className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 py-0.5">
                  <span className="text-[9px] font-medium text-white/90">
                    {feature.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mb-2.5 text-xs leading-relaxed text-gray-400">
                  {feature.description}
                </p>

                {/* Detail */}
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-1 rounded-full bg-purple-500" />
                  <span className="text-[10px] text-gray-500">{feature.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Powered By Section */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mt-12 text-center">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-wider text-gray-500">
              POWERED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Next.js", "Vercel", "Pinecone", "OpenAI"].map((tech, index) => (
                <div
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-1.5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <span className="text-xs font-medium text-white/90">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline Section */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mb-16 text-center md:mb-24">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Real business impact from better search
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg">
            See how AI-powered chat and search drive measurable results for your
            business.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 150}
              className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Left Side - Title and Description */}
              <div className="flex-1">
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  {metric.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-400">
                  {metric.description}
                </p>
              </div>

              {/* Right Side - Metric Button */}
              <div className="flex-shrink-0 sm:self-center">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600/80 to-purple-700/80 px-4 py-1.5">
                  <span className="text-xs font-semibold text-white">
                    {metric.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}


