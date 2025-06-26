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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              HIPAA-Aligned AI for Dermatology Clinics
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Empower your patients with AI-powered skin monitoring between visits. 
              Improve treatment adherence and patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg">
                Schedule a Demo
              </Link>
              <Link href="/solutions" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Better Patient Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Patients can track skin conditions between visits with AI-powered analysis.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaChartLine className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Improved Patient Engagement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep patients engaged with their treatment through the mobile app.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">HIPAA-Aligned Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enterprise-grade security with end-to-end encryption designed for healthcare.
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
              <h2 className="text-3xl font-bold mb-6">The Challenge Dermatology Clinics Face</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Long wait times leading to patient dissatisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Limited time for thorough skin examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Difficulty tracking treatment progress over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Patients forget important details between visits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our AI-Powered Solution</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Patient-driven skin monitoring between appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>AI-powered skin analysis for patient education</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Photo history tracking to monitor changes over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Patient app for between-visit monitoring</span>
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
              Our consumer app DermaWhiz demonstrates the core technology that powers our enterprise solution. 
              Your clinic will receive a fully customized, white-labeled version.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image 
                src="/dermawhiz-logo.png" 
                alt="DermaWhiz Demo" 
                width={200} 
                height={200} 
                className="mx-auto rounded-2xl shadow-xl"
              />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Try our consumer version:</p>
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
                    <strong>Your Branding</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete white-label with your clinic&apos;s logo and colors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>AI Models Stay Current</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regular updates to AI models for improved accuracy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Basic Reporting</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Track usage and get insights into app performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Direct Founder Support</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email support directly from the founder</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Expected ROI for Your Clinic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">More</div>
              <p className="text-gray-700 dark:text-gray-300">More patients per day</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">Fewer</div>
              <p className="text-gray-700 dark:text-gray-300">No-shows through better engagement</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">High</div>
              <p className="text-gray-700 dark:text-gray-300">Patient satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Dermatology Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join dermatology clinics using AI to improve patient care.
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