import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import { SeoHead } from './SeoHead';
import { PlatformHeaderNav } from './PlatformHeaderNav';
import type { PrishiTechPageData } from '../data/platformPagesData';
import { 
  PLATFORM_CLIENT_LOGOS, 
  PLATFORM_CASE_STUDIES 
} from '../data/platformPagesData';

interface PlatformPageTemplateProps {
  data: PrishiTechPageData;
  onRequestDemo: () => void;
}

export const PlatformPageTemplate: React.FC<PlatformPageTemplateProps> = ({
  data,
  onRequestDemo,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const logosRow1 = PLATFORM_CLIENT_LOGOS.slice(0, 6);
  const logosRow2 = PLATFORM_CLIENT_LOGOS.slice(6, 12);

  return (
    <>
      <SeoHead
        title={data.metaTitle}
        description={data.metaDescription}
      />

      {/* Horizontal Platform Sub-navigation */}
      <PlatformHeaderNav currentId={data.slug} />

      <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        {/* =========================================================
            1. HERO SECTION (Modern layout)
        ========================================================= */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100 bg-[#fbfcfd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {data.badge && (
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {data.badge}
                  </div>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
                  {data.hero.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                  {data.hero.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-6 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>{data.hero.primaryCtaText || 'Book a demo ->'}</span>
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-6 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>{data.hero.secondaryCtaText || 'Contact Engineering'}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                  <img
                    src={data.hero.image}
                    alt={data.hero.title}
                    className="w-full h-auto object-contain max-h-[520px] transition-transform duration-500 hover:scale-[1.01]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. LOGO CLOUD SECTION
        ========================================================= */}
        <section className="py-14 sm:py-20 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-10 tracking-tight">
              Trusted by manufacturers scaling industrial data and AI
            </h4>

            {/* Row 1: Enterprise Manufacturers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-8">
              {logosRow1.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center h-12 w-full px-3">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 2: Cloud & Enterprise Data Ecosystem */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
              {logosRow2.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center h-12 w-full px-3">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. CONTEXTUAL OVERVIEW & ARCHITECTURE DIAGRAM
        ========================================================= */}
        {data.overview && (data.overview.title || data.overview.diagramImage) && (
          <section className="py-16 sm:py-24 bg-[#f3f4f6]/60 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {data.overview.title && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 sm:mb-16 items-start">
                  <div className="md:col-span-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      {data.overview.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    {data.overview.description ? (
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        {data.overview.description}
                      </p>
                    ) : (
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        Industrial data doesn’t scale through isolated tools. It requires a coordinated foundation to connect, structure, govern, and manage data across systems and sites. PrishiTech brings these capabilities together in one seamless platform.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {data.overview.diagramImage && (
                <div className="relative rounded-2xl overflow-hidden bg-[#050c0a] p-2 sm:p-4 md:p-6 shadow-2xl border border-slate-800/80">
                  <img
                    src={data.overview.diagramImage}
                    alt={data.overview.title || 'Modern Industrial Data Foundation Architecture'}
                    className="w-full h-auto object-contain mx-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================================================
            4. OPERATIONAL RESULTS FROM REAL DEPLOYMENTS (2x2 Cards)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Operational results from real deployments
              </h3>
              <p className="text-base sm:text-lg text-slate-600">
                These results come from manufacturers deploying our platform to standardize industrial data architecture across plants.
              </p>
              <div className="mt-4">
                <button
                  onClick={onRequestDemo}
                  className="text-base font-medium text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  <span>Read more customer case studies</span>
                  <ArrowRight className="w-4 h-4 text-[#05DF72]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {PLATFORM_CASE_STUDIES.map((study, idx) => (
                <div
                  key={idx}
                  className="flex flex-col-reverse sm:flex-row items-center justify-between bg-[#f8fafc] rounded-lg overflow-hidden border border-slate-200 p-6 sm:p-8 gap-6 shadow-2xs hover:shadow-sm transition-shadow"
                >
                  <div className="sm:basis-1/2 text-left space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {study.stat}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 font-normal">
                      {study.description}
                    </p>
                  </div>
                  <div className="sm:basis-1/2 w-full overflow-hidden rounded-md">
                    <img
                      src={study.image}
                      alt={study.alt}
                      className="w-full h-40 sm:h-36 object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. CAPABILITIES / FEATURE BLOCKS (Alternating 2-column)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
            {data.capabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={cap.id || idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-5 text-left ${
                      isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:col-start-7'
                    }`}
                  >
                    {cap.eyebrow && (
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                        {cap.eyebrow}
                      </p>
                    )}

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      {cap.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>

                    {cap.bullets && cap.bullets.length > 0 && (
                      <div className="pt-2">
                        <strong className="block text-sm font-semibold text-slate-900 mb-3">
                          {data.id === 'industrial-data-foundation' ? 'Key features:' : 'What this enables:'}
                        </strong>
                        <ul className="space-y-3">
                          {cap.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                              </span>
                              <span className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4">
                      {cap.linkUrl ? (
                        <Link
                          to={cap.linkUrl}
                          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline"
                        >
                          <span>{cap.linkText || 'Learn more'}</span>
                          <ArrowRight className="w-4 h-4 text-[#05DF72]" />
                        </Link>
                      ) : (
                        <button
                          onClick={onRequestDemo}
                          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline"
                        >
                          <span>Book a demo</span>
                          <ArrowRight className="w-4 h-4 text-[#05DF72]" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`${
                      isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:col-start-1'
                    }`}
                  >
                    {cap.image ? (
                      <div className="relative rounded-xl overflow-hidden bg-[#070b12] border border-slate-800/80 shadow-md p-1.5 sm:p-2.5 group">
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-auto object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative rounded-lg overflow-hidden bg-[#050c0a] border border-slate-800/80 shadow-md p-3 flex items-center justify-center">
                        <img
                          src="/images/platform/modern-industrial-data-foundation.png"
                          alt="Industrial Architecture"
                          className="w-full h-auto object-contain mx-auto rounded"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            6. "WHY MATTERS" SECTION (Dark Banner, if present)
        ========================================================= */}
        {data.whyMatters && data.whyMatters.title && (
          <section className="py-16 sm:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {data.whyMatters.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300">
                    {data.whyMatters.description || 'A strong platform layer enables:'}
                  </p>
                  <div>
                    <button
                      onClick={onRequestDemo}
                      className="inline-flex items-center justify-center whitespace-nowrap bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold h-11 px-6 rounded-sm text-sm"
                    >
                      Book a demo -&gt;
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {data.whyMatters.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt=""
                          className="w-10 h-10 object-contain shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-[#05DF72] flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                      )}
                      <span className="text-base sm:text-lg font-medium text-white">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            7. SYSTEMS INTEGRATION SECTION ("Built for legacy and modern...")
        ========================================================= */}
        {data.systems && data.systems.title && (
          <section className="py-16 sm:py-24 bg-[#f3f4f6]/60 border-t border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                    {data.systems.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {data.systems.description}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onRequestDemo}
                      className="inline-flex items-center justify-center whitespace-nowrap bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold h-11 px-7 rounded-sm text-sm"
                    >
                      Book a demo -&gt;
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {data.systems.image && (
                    <div className="rounded-xl overflow-hidden bg-[#070b12] p-2 sm:p-3 shadow-md border border-slate-800/80">
                      <img
                        src={data.systems.image}
                        alt={data.systems.title}
                        className="w-full h-auto object-contain mx-auto rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            8. FAQs ACCORDION SECTION
        ========================================================= */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-16 sm:py-24 bg-[#f3f4f6]/50 border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  FAQs
                </h3>
                <p className="text-base sm:text-lg text-slate-600">
                  Quick answers to your industrial data questions.
                </p>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-5 px-6 flex items-center justify-between text-left font-semibold text-slate-900 text-base sm:text-lg hover:text-emerald-700 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-emerald-600' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            9. BOTTOM CTA BANNER (Action style)
        ========================================================= */}
        <section className="relative py-20 sm:py-28 overflow-hidden bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {data.bottomCta?.title || 'Build your industrial data foundation for scale'}
            </h3>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {data.bottomCta?.description || 'Talk to our team to see how our platform simplifies connectivity, DataOps, and edge AI.'}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold h-11 sm:h-12 px-7 sm:px-9 rounded-sm text-sm sm:text-[15px] shadow-sm transition-all"
              >
                <span>{data.bottomCta?.primaryCtaText || 'Book a demo ->'}</span>
              </button>

              <Link
                to="/platform/industrial-data-foundation"
                className="inline-flex items-center justify-center whitespace-nowrap border border-white/80 hover:border-[#05DF72] bg-transparent hover:bg-white/10 text-white font-medium h-11 sm:h-12 px-7 sm:px-9 rounded-sm text-sm sm:text-[15px] transition-all"
              >
                <span>{data.bottomCta?.secondaryCtaText || 'Explore Architecture'}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
