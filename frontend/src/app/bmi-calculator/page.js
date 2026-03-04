'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Scale, Ruler, Weight, HelpCircle, BookOpen, Activity, Info } from 'lucide-react'
import ShareButtons from '@/components/common/ShareButtons'

export default function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric') // metric or imperial

  const calculateBMI = () => {
    if (!height || !weight) return null

    let bmi
    if (unit === 'metric') {
      // Height in cm, weight in kg
      bmi = (weight / Math.pow(height / 100, 2))
    } else {
      // Height in inches, weight in pounds
      bmi = (weight / Math.pow(height, 2)) * 703
    }

    const category =
      bmi < 18.5 ? 'Underweight' :
        bmi < 25 ? 'Normal weight' :
          bmi < 30 ? 'Overweight' :
            'Obese'

    const color =
      bmi < 18.5 ? 'text-blue-600' :
        bmi < 25 ? 'text-green-600' :
          bmi < 30 ? 'text-yellow-600' :
            'text-red-600'

    const healthyWeightRange = {
      min: (18.5 * Math.pow(unit === 'metric' ? height / 100 : height, 2) * (unit === 'imperial' ? 1 / 703 : 1)).toFixed(1),
      max: (24.9 * Math.pow(unit === 'metric' ? height / 100 : height, 2) * (unit === 'imperial' ? 1 / 703 : 1)).toFixed(1)
    }

    return {
      bmi: bmi.toFixed(1),
      category,
      color,
      healthyWeightRange
    }
  }

  const result = calculateBMI()

  const faqs = [
    {
      q: "What is a healthy BMI for a woman?",
      a: "The healthy BMI range for both adult women and men is the same: 18.5 to 24.9. However, BMI does not account for muscle mass or body fat distribution."
    },
    {
      q: "Is BMI an accurate measure of health?",
      a: "BMI is a useful screening tool, but it doesn't measure body fat directly. Highly muscular athletes may have a high BMI without being overweight. Consult a doctor for a full health assessment."
    },
    {
      q: "How can I lower my BMI?",
      a: "You can lower your BMI by maintaining a balanced diet, reducing calorie intake, and increasing physical activity. Our calorie calculator can help you plan your meals."
    }
  ]

  return (
    <main className="min-h-screen pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 pt-16">
        <div className="flex items-center mb-10 bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-[#0B2E33]/10">
          <div className="p-4 rounded-2xl bg-[#0B2E33] text-white mr-5 shadow-lg">
            <Scale size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#0B2E33]">Free BMI Calculator</h1>
            <p className="text-[#0B2E33]/60 mt-2 font-medium">Instantly calculate your Body Mass Index and healthy weight range.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calculator Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl border border-[#0B2E33]/5">
            <div className="flex bg-[#0B2E33]/5 p-2 rounded-2xl mb-8">
              <button
                onClick={() => setUnit('metric')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${unit === 'metric' ? 'bg-[#0B2E33] text-white shadow-lg' : 'text-[#0B2E33]/50'}`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${unit === 'imperial' ? 'bg-[#0B2E33] text-white shadow-lg' : 'text-[#0B2E33]/50'}`}
              >
                Imperial (lb/in)
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#0B2E33] mb-3 ml-1 uppercase tracking-wider opacity-60">Height ({unit === 'metric' ? 'cm' : 'inches'})</label>
                <div className="relative group">
                  <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B2E33]/30 group-focus-within:text-[#0B2E33] transition-colors" size={20} />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === 'metric' ? '175' : '69'}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0B2E33]/5 border border-transparent focus:bg-white focus:border-[#0B2E33]/20 focus:outline-none text-xl font-bold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0B2E33] mb-3 ml-1 uppercase tracking-wider opacity-60">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                <div className="relative group">
                  <Weight className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B2E33]/30 group-focus-within:text-[#0B2E33] transition-colors" size={20} />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === 'metric' ? '70' : '154'}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0B2E33]/5 border border-transparent focus:bg-white focus:border-[#0B2E33]/20 focus:outline-none text-xl font-bold transition-all"
                  />
                </div>
              </div>
            </div>

            {result && (
              <div className="mt-10 p-6 rounded-3xl bg-gray-50 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-6">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Your BMI Score</p>
                  <p className={`text-6xl font-black ${result.color}`}>{result.bmi}</p>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <span className="font-bold text-gray-500">Category</span>
                  <span className={`font-black uppercase tracking-wider ${result.color}`}>{result.category}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <span className="font-bold text-gray-500">Healthy Range</span>
                  <span className="font-black text-[#0B2E33]">
                    {result.healthyWeightRange.min} - {result.healthyWeightRange.max} {unit === 'metric' ? 'kg' : 'lbs'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Result Info Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0B2E33] rounded-[40px] p-8 text-white flex-1 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-black mb-6">Understanding BMI</h2>
                <p className="text-[#B8E3E9]/70 leading-relaxed mb-6">
                  BMI is a screening tool used by doctors to categorize weight. While not a direct measure of body fat, it correlates strongly with metabolic and health outcomes.
                </p>
                <div className="space-y-3">
                  {[
                    { range: "< 18.5", label: "Underweight", color: "text-blue-300" },
                    { range: "18.5 – 24.9", label: "Normal Weight", color: "text-green-300" },
                    { range: "25.0 – 29.9", label: "Overweight", color: "text-yellow-300" },
                    { range: "> 30.0", label: "Obese", color: "text-red-300" },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between items-center px-4 py-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="font-bold">{r.range}</span>
                      <span className={`font-black uppercase text-xs ${r.color}`}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Activity className="absolute bottom-[-20px] right-[-20px] text-white/[0.03]" size={200} />
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-[#0B2E33]/10 shadow-xl">
              <h3 className="text-xl font-bold text-[#0B2E33] mb-4 flex items-center gap-2">
                <Info size={20} />
                Quick Health Tips
              </h3>
              <ul className="space-y-4 text-sm text-[#0B2E33]/70 font-medium">
                <li className="flex gap-2"><span>✅</span> Stay hydrated with 2-3 liters of water daily.</li>
                <li className="flex gap-2"><span>✅</span> Aim for 150 minutes of moderate exercise per week.</li>
                <li className="flex gap-2"><span>✅</span> Prioritize 7-9 hours of quality sleep for recovery.</li>
              </ul>
            </div>
          </div>
        </div>

        <ShareButtons title="I just checked my BMI on Fruupy! Try this free tool yourself." />

        {/* Massive SEO Content */}
        <article className="mt-16 bg-white/50 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-[#0B2E33]/5 shadow-sm">
          <h2 className="text-3xl font-black text-[#0B2E33] mb-8 flex items-center gap-3">
            <BookOpen size={28} />
            Comprehensive Guide to BMI & Weight Management
          </h2>

          <div className="prose prose-slate max-w-none text-[#0B2E33]/80 leading-relaxed">
            <p className="mb-6">
              Maintaining a healthy weight is one of the most effective ways to prevent long-term diseases like Type 2 Diabetes, Hypertension, and Cardiovascular problems. <strong>Fruupy's BMI Calculator</strong> is a premium, free utility that helps you track your body composition journey from the comfort of your home.
            </p>

            <h3 className="text-2xl font-bold text-[#0B2E33] mt-10 mb-4">What does your BMI result actually mean?</h3>
            <p className="mb-4">
              When you enter your height and weight into our <strong>free online BMI calculator</strong>, the resulting number represents a ratio. This ratio helps placing you into one of the four primary categories developed by the World Health Organization. Normal weight (18.5–24.9) indicates that your weight is proportional to your height, which typically correlates with lower health risks.
            </p>

            <h3 className="text-2xl font-bold text-[#0B2E33] mt-10 mb-4">Limitations of BMI You Should Know</h3>
            <p className="mb-6">
              While BMI is an excellent general guide, it isn't perfect. For example, athletes and bodybuilders often have high BMI because muscle is denser than fat. Similarly, elderly people might have a "normal" BMI but low muscle mass, which could mask health risks. It is always best to use BMI alongside other metrics like waist circumference and body fat percentage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-[#0B2E33]/5 p-8 rounded-3xl border border-[#0B2E33]/10">
                <h4 className="text-xl font-bold text-[#0B2E33] mb-4">BMI Calculation Formula</h4>
                <p className="text-sm font-medium mb-4">Metric: Weight (kg) / [Height (m)]²</p>
                <p className="text-sm font-medium">Imperial: 703 × Weight (lbs) / [Height (in)]²</p>
              </div>
              <div className="bg-[#B8E3E9]/20 p-8 rounded-3xl border border-[#0B2E33]/10">
                <h4 className="text-xl font-bold text-[#0B2E33] mb-4">Who developed BMI?</h4>
                <p className="text-sm">BMI was originally called the Quetelet Index, developed in the 1830s by Adolphe Quetelet, a Belgian polymath, to estimate the degree of obesity in general populations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-black text-[#0B2E33] mb-8 mt-16 flex items-center gap-3">
              <HelpCircle size={28} />
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#0B2E33]/5 pb-6">
                  <h4 className="text-lg font-bold text-[#0B2E33] mb-2">{faq.q}</h4>
                  <p className="text-[#0B2E33]/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}