import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
                AI-Powered Apps for MedSpas & Dermatology
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                Custom-branded mobile apps with AI-powered skin analysis for aesthetic treatments and medical dermatology. 
                Enhance patient engagement and treatment tracking for your MedSpa or Dermatology clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg">
                  Schedule a Demo
                </Link>
                <Link href="/solutions" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <Image 
                  src="/Analysis.png" 
                  alt="DermaWhiz Mobile App Analysis Screen" 
                  width={375}
                  height={812}
                  className="mx-auto drop-shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Live on iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Treatment Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Patients track aesthetic treatments & skin conditions with before/after photo comparisons.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaChartLine className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Boost Treatment Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Increase patient satisfaction and treatment adherence with personalized follow-ups.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">HIPAA-Aligned Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional security with multi-layer encryption designed for healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge MedSpas & Dermatology Clinics Face</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Difficulty documenting treatment results for aesthetic procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Patients struggle to track progress of cosmetic treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No standardized way to capture before/after photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Limited patient engagement between treatment sessions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">The AI-Powered Solution</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Before/after photo tracking for aesthetic treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>AI analysis for both medical and cosmetic concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Treatment progress visualization for better outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Boost patient satisfaction with visible progress tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DermaWhiz Example Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See It In Action: DermaWhiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The consumer app DermaWhiz demonstrates the core technology that powers the white-label solution. 
              Your clinic will receive a fully customized, white-labeled version.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image 
                src="/DermaWhizSerious.png" 
                alt="DermaWhiz Demo" 
                width={200} 
                height={200} 
                className="mx-auto rounded-2xl shadow-xl hidden md:block"
              />
              <Image 
                src="/dermawhiz-logo.png" 
                alt="DermaWhiz Demo" 
                width={200} 
                height={200} 
                className="mx-auto rounded-2xl shadow-xl md:hidden"
              />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Try the consumer version:</p>
                <div className="flex gap-4 justify-center">
                  <a href="https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-700 underline">
                    App Store
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-700 underline">
                    Google Play
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Custom Enterprise Solution Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Custom App Store Listing</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Your own App Store & Google Play listings with custom logos, titles, and descriptions. Keyword optimization included.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Complete Brand Customization</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Graphics completely customized to match your branding and colors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>AI Trained on Your Content</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI can be trained on your clinic&apos;s website and documentation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Appointment Integration</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone and website links for easy appointment booking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Direct Founder Support</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Personal support directly from the founder</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MedSpa & Dermatology Use Cases */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect for MedSpas & Dermatology Clinics</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">For MedSpas</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Track Botox, fillers, and injection results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Document laser treatment progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Before/after galleries for marketing consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Treatment package tracking and reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Chemical peel and microneedling documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">For Dermatology</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Monitor acne treatment effectiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Track suspicious moles and lesions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Document psoriasis and eczema flare-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Post-surgical healing progress photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Medication response tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Benefits for Your Practice</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">Better</div>
              <p className="text-gray-700 dark:text-gray-300">Treatment adherence through continuous monitoring</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">Improved</div>
              <p className="text-gray-700 dark:text-gray-300">Patient engagement between visits</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">Enhanced</div>
              <p className="text-gray-700 dark:text-gray-300">Documentation of treatment progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Give your MedSpa or Dermatology patients the tools to track their treatment journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              Schedule Your Demo
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold text-lg hover:bg-blue-900 transition shadow-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}