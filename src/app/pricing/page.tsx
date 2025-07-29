import { FaEnvelope } from "react-icons/fa";

export default function Pricing() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-transparent bg-clip-text leading-tight">
            Pricing
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our HIPAA-aligned AI solution for MedSpas and Dermatology clinics is currently in early access. 
            We&apos;re working with select practices to perfect our offering.
          </p>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 shadow-xl">
            <FaEnvelope className="text-6xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Early Access Program</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re currently offering customized pricing for early adopter MedSpas and Dermatology clinics. 
              Each solution is tailored to your specific services, whether aesthetic or medical.
            </p>
            
            <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
              <h3 className="font-semibold text-xl mb-3">What&apos;s Included:</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Custom white-labeled mobile app for your practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI-powered analysis for aesthetic and medical treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>HIPAA-aligned infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Setup assistance and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Direct founder support</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="mailto:reid@twintipsolutions.com?subject=Pricing%20Inquiry%20-%20MedSpa%20Dermatology%20AI%20Solution"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-rose-700 hover:to-orange-700 transition shadow-lg"
            >
              <FaEnvelope />
              Email for Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Consultation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us about your practice - whether you&apos;re a MedSpa, Dermatology clinic, or both. 
                  We&apos;ll schedule a call to understand your specific needs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Proposal</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;ll create a customized proposal based on your practice type, services offered, 
                  patient volume, and specific requirements.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pilot Program</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Start with a pilot program to ensure our solution fits perfectly with your 
                  clinic&apos;s workflow before full implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Apps */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See Our Technology in Action</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Try DermaWhiz, our consumer app, to experience the AI technology that will power your clinic&apos;s solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Download on App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Download on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our early access program and be among the first clinics to offer AI-powered skin analysis.
          </p>
          <a 
            href="mailto:reid@twintipsolutions.com?subject=Early%20Access%20Request%20-%20Dermatology%20AI"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            <FaEnvelope />
            Email Us for Early Access
          </a>
        </div>
      </section>
    </div>
  );
}