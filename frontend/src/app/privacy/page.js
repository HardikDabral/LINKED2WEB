import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <h1 className="sr-only">Privacy Policy - Fruupy</h1>
      <div className="min-h-screen ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white/50 backdrop-blur-xl rounded-xl p-8 shadow-md border border-[#93B1B5]/40">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2E33] mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#0B2E33]/70 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-sm max-w-none text-[#0B2E33] space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">1. Introduction</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We built Fruupy to be simple: open a tool, get your result, and move on with your day. This Privacy Policy explains what information we collect, why we collect it, how it is used, and what options you have. We wrote this in plain language because privacy policies should be understandable by real people, not only lawyers.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  When we say "Fruupy," "we," "our," or "us," we mean the Fruupy website and the team maintaining it. When we say "you," we mean any visitor, user, or person contacting us. By using Fruupy, you agree to the practices described on this page. If you do not agree, you can stop using the site at any time.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  Fruupy includes calculators, utility tools, and informational pages. Some tools run fully in your browser, while others may send limited data to a server to generate results. We always try to keep data collection proportional to what is needed to operate the service reliably, securely, and fairly for everyone.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">2.1 Information You Provide</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  Most visitors use Fruupy without creating an account. That said, you may choose to provide information directly when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>Contact us by email for support, feedback, or business questions.</li>
                  <li>Send bug reports, tool suggestions, or feature requests.</li>
                  <li>Submit optional details through forms on selected pages.</li>
                </ul>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  Examples of data you might provide include your name, email address, and any message content you send us. If your message contains additional details, attachments, or screenshots, that content may also be processed so we can respond properly.
                </p>

                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Like almost every modern website, Fruupy may automatically collect technical information when you visit. This can include your IP address, approximate region/country, browser type, operating system, referring URL, pages viewed, and timestamps. We may also collect device identifiers and performance data such as load times, crash details, and aggregated engagement metrics.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  We also use cookies and similar technologies for core functionality, analytics, and ad-related preferences. Some of this data is collected directly by us, while some may be collected by trusted service providers acting on our behalf.
                </p>

                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">2.3 Tool Input Data</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Many Fruupy tools process information that you type in. In many cases, this processing happens locally in your browser and never leaves your device. In cases where server processing is required, we process only what is necessary to return your requested output and maintain service stability. We do not intentionally collect sensitive personal data through tool inputs, and you should avoid entering confidential or highly sensitive information unless absolutely required by the tool.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  We use collected information for practical service reasons, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>Operating the website and making tools available as requested.</li>
                  <li>Improving speed, reliability, usability, and accessibility.</li>
                  <li>Understanding what tools are useful so we can prioritize updates.</li>
                  <li>Responding to support emails and resolving reported issues.</li>
                  <li>Preventing abuse, fraud, spam, scraping, and security incidents.</li>
                  <li>Measuring traffic and performance through analytics.</li>
                  <li>Showing and managing advertisements where applicable.</li>
                  <li>Complying with legal obligations and lawful requests.</li>
                </ul>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  We do not sell your personal information in the traditional sense of directly exchanging your identity for cash. However, some data sharing with advertising or analytics partners may qualify as "sharing" under certain privacy laws. Where required, we provide controls for opt-out and consent management.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">4. Legal Bases for Processing (Where Applicable)</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  If you are in a jurisdiction such as the UK, EEA, or other regions with similar laws, we process personal data only where we have a legal basis. Depending on context, these legal bases may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90 mt-4">
                  <li><strong>Consent:</strong> for example, where cookie consent is required for non-essential tracking.</li>
                  <li><strong>Legitimate interests:</strong> such as keeping our website secure, improving tools, and understanding usage trends.</li>
                  <li><strong>Contractual necessity:</strong> to provide a service you request.</li>
                  <li><strong>Legal obligations:</strong> where we must retain or disclose information under law.</li>
                </ul>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  You can withdraw consent where consent is our legal basis. Withdrawal does not affect processing already completed before withdrawal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">5. Cookies and Similar Technologies</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Cookies are small files stored by your browser that help websites remember preferences, keep sessions stable, and understand traffic patterns. Fruupy may use first-party and third-party cookies for different purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90 mt-4">
                  <li><strong>Essential cookies:</strong> required for core site functions and security.</li>
                  <li><strong>Performance/analytics cookies:</strong> help us understand usage and improve tools.</li>
                  <li><strong>Advertising cookies:</strong> may support ad relevance, frequency capping, and reporting.</li>
                  <li><strong>Preference cookies:</strong> remember settings, such as language or basic UI choices.</li>
                </ul>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  You can control cookies through browser settings. Blocking all cookies may affect how certain features behave. Where required by law, we present a consent mechanism so you can accept or reject non-essential cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">6. Advertising and Analytics</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Fruupy may display ads to keep our tools free to use. Ad partners can use cookies or similar technologies to measure ad performance, detect fraud, and provide relevant ad experiences in accordance with their own policies and applicable law. We may also use analytics providers to understand traffic, page performance, and feature usage at an aggregated level.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  If we use services like Google AdSense or Google Analytics, your interaction with those services is also governed by the provider's privacy terms. You can typically manage ad personalization through provider settings and browser controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">7. Data Storage, Retention, and Security</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We use reasonable technical and organizational measures to protect data against unauthorized access, disclosure, misuse, and loss. These measures may include encrypted transport (HTTPS), role-based access controls, monitoring, and limited retention practices.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  We keep personal data only as long as needed for the purposes described in this policy, unless a longer retention period is required or permitted by law. Retention periods depend on the data type and purpose. For example, support correspondence may be retained to resolve prior issues and improve support quality, while some logs may be retained for security and abuse prevention.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  No internet service is perfectly secure. While we work hard to protect information, we cannot guarantee absolute security in all circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">8. Third-Party Services and Links</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Fruupy may include links to third-party websites, embedded content, or integrations. Once you leave Fruupy or interact with third-party services, their terms and privacy policies apply. We do not control external sites and are not responsible for their content, practices, or security standards.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  We recommend reviewing third-party policies before sharing personal information with them. This is especially important for services involving payments, social login, downloads, or user-generated content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">9. International Data Transfers</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Fruupy may be operated from one country while using hosting or service providers in others. As a result, your information may be transferred to and processed in countries different from your own. Where required, we use appropriate safeguards for international transfers, such as standard contractual clauses or equivalent mechanisms recognized by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">10. Your Privacy Rights</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  Depending on your location, you may have rights regarding your personal data. These can include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>Right to know what data we collect and how we use it.</li>
                  <li>Right to access or receive a copy of your personal data.</li>
                  <li>Right to correct inaccurate personal data.</li>
                  <li>Right to delete personal data, subject to legal exceptions.</li>
                  <li>Right to limit or object to certain processing.</li>
                  <li>Right to withdraw consent where consent is used.</li>
                  <li>Right to opt out of certain sharing or targeted advertising where required by law.</li>
                  <li>Right to non-discrimination for exercising privacy rights.</li>
                </ul>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  To exercise your rights, email us using the contact details below. To protect user privacy, we may need to verify your request before completing it. If we cannot comply fully, we will explain why, subject to legal limits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">11. Region-Specific Notices</h2>
                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">11.1 California Residents</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  If you are a California resident, you may have rights under California privacy laws, including the right to know, delete, correct, and opt out of certain forms of sharing. You may designate an authorized agent to make requests on your behalf, subject to verification.
                </p>
                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">11.2 EEA/UK Residents</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  If you are in the EEA or UK, you may have rights under data protection laws including access, rectification, erasure, portability, restriction, objection, and complaint rights with a supervisory authority in your country.
                </p>
                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">11.3 Other Regions</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We aim to honor privacy rights globally where reasonable and legally required. If local law grants additional rights not listed here, you may still contact us and we will evaluate your request in line with applicable rules.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">12. Children's Privacy</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Fruupy is designed for a general audience and is not intended for children under 13 (or under the relevant age in your jurisdiction). We do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided personal information, contact us and we will take appropriate steps, including deletion where required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">13. Data Minimization and Sensitive Information</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We follow a data minimization approach where possible. That means we try to collect less, store less, and keep data only for as long as needed. We do not ask users to submit sensitive personal information for normal tool usage. Please do not submit details such as government IDs, full financial account numbers, medical records, or other high-risk information through public forms or general support emails.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  If sensitive information is accidentally shared, contact us so we can review and remove it where feasible and legally permissible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">14. How We Handle Support Emails</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  When you email us, we use your message details to respond, troubleshoot, and improve the service. We may keep support history to avoid repeating questions and to provide consistent help. Please include only information necessary for your request.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  If your request concerns privacy rights, include enough detail for us to identify the relevant records. We may ask follow-up questions to verify identity and ensure we do not disclose or delete the wrong information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">15. Changes to This Privacy Policy</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We may update this Privacy Policy to reflect changes in our tools, technology, legal requirements, or business operations. When we make updates, we will post the revised version on this page and update the "Last updated" date.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  If changes are material, we may provide additional notice through website banners or other reasonable means. Continued use of Fruupy after an update means the updated policy applies from that point forward.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">16. Contact Us</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Questions, concerns, or privacy requests are welcome. If anything in this policy is unclear, reach out and we will explain it in plain language. You can contact us at{' '}
                  <a href="mailto:handyhelpertoolscalculator@gmail.com" className="text-[#4F7C82] hover:underline">
                    handyhelpertoolscalculator@gmail.com
                  </a>
                  . Please include "Privacy Request" in the subject line if your message is about data rights, deletion, correction, or consent withdrawal so we can route it quickly.
                </p>
                <p className="text-[#0B2E33]/90 leading-relaxed mt-4">
                  Our goal is to build tools that are useful, fast, and respectful of your privacy. We appreciate your trust and we are committed to handling your information responsibly.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-[#93B1B5]/40">
              <Link 
                href="/terms" 
                className="text-[#4F7C82] hover:text-[#0B2E33] transition-colors text-sm"
              >
                → View Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

