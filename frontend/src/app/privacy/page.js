import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <h1 className="sr-only">Privacy Policy - Handy Helper Tools</h1>
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
                  Handy Helper Tools ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our free online calculators and utility tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">2.1 Information You Provide</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>Use our calculators and tools</li>
                  <li>Contact us via email</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0B2E33] mt-4 mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">4. Data Storage and Security</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We may use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">6. Third-Party Services</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Our website may contain links to third-party websites or services that are not owned or controlled by Handy Helper Tools. We have no control over, and assume no responsibility for, the privacy policies or practices of any third-party websites or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">7. Your Rights</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#0B2E33]/90">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data</li>
                  <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
                  <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">8. Children's Privacy</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0B2E33] mt-8 mb-4">10. Contact Us</h2>
                <p className="text-[#0B2E33]/90 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:handyhelpertoolscalculator@gmail.com" className="text-[#4F7C82] hover:underline">
                    handyhelpertoolscalculator@gmail.com
                  </a>
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

