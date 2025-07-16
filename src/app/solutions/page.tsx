import Link from "next/link";
import { FaCheckCircle, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
            AI Solutions for MedSpas & Dermatology
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Custom mobile apps that help your clients track their skin journey and aesthetic treatments. 
            Perfect for documenting injectables, laser therapies, body contouring, skin rejuvenation, and general skin health.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Included</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Patient Mobile App</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                White-labeled app providing AI analysis of skin concerns for your patients.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Instant AI skin analysis</li>
                <li>• Detailed condition explanations</li>
                <li>• Web client for PDF export</li>
                <li>• Educational patient insights</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <FaCloud className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Web Client Portal</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Secure web access for patients to export and track results.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Export results as PDF reports</li>
                <li>• Track progress over time</li>
                <li>• Perfect for consultations</li>
                <li>• Secure patient portal</li>
                <li>• HIPAA-aligned infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">AI Features</h2>
          
          <div className="max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">How the AI Analysis Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Multi-Purpose Analysis</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Provides insights for both aesthetic treatments and skin health education
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Instant Skin Analysis</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI analyzes skin photos and provides educational insights
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Risk Assessment</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Flags high-priority cases for immediate dermatologist review
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>RAG-Powered Insights</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Provides evidence-based insights from latest dermatology research
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Training Sources */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customizable AI Training Sources</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              Your white-label app can be trained on sources specific to your practice focus. The sources below 
              are used for our dermatology demo app (DermaWhiz), but can be customized for aesthetic practices.
            </p>
            <p className="text-center text-sm text-blue-600 dark:text-blue-400 font-semibold mb-8">
              For MedSpas: The AI can be trained on aesthetic medicine journals, cosmetic dermatology resources, and injection technique databases.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-blue-600">Primary Medical Sources</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <div>
                      <strong>PubMed Central Open Access</strong>
                      <p className="text-gray-600 dark:text-gray-400">Peer-reviewed dermatology research</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <div>
                      <strong>BMC Dermatology</strong>
                      <p className="text-gray-600 dark:text-gray-400">Open-access clinical research</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <div>
                      <strong>PLOS ONE</strong>
                      <p className="text-gray-600 dark:text-gray-400">Scientific dermatology studies</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-purple-600">Government Sources</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <div>
                      <strong>NIH Bookshelf</strong>
                      <p className="text-gray-600 dark:text-gray-400">Public domain medical textbooks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <div>
                      <strong>ClinicalTrials.gov</strong>
                      <p className="text-gray-600 dark:text-gray-400">Latest dermatology trial data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <div>
                      <strong>NIH Skin Diseases Institute</strong>
                      <p className="text-gray-600 dark:text-gray-400">Federal research data</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Legal Compliance:</strong> All sources are open-access with Creative Commons or public domain licensing. 
                We respect copyright laws and robots.txt directives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Client Features */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Secure Staff Portal</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Your staff receives client-submitted reports through a secure web portal for seamless clinic integration.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-4 text-blue-600">Receive Client Reports</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Receive client-submitted skin analyses</li>
                  <li>• View AI-generated insights</li>
                  <li>• Access client notes and concerns</li>
                  <li>• Review treatment history</li>
                  <li>• Export reports for consultations</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-4 text-purple-600">Client Management</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Track client progress over time</li>
                  <li>• Compare before/after treatment results</li>
                  <li>• Manage multiple client reports</li>
                  <li>• Schedule follow-up appointments</li>
                  <li>• Maintain comprehensive client records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Your Branded App Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Download & Create Profile</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your clients download your custom-branded app and create a secure profile with their medications and health history
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Take Photo of Skin Concern</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your client snaps a photo of any skin issue they want to understand better
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Instant AI Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Receive immediate AI insights about skin appearance and characteristics
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Share Reports with Your Clinic</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clients can share their AI analysis reports directly with your clinic through the app for consultation prep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">See a Demo</h2>
          <p className="text-xl mb-8 opacity-90">
            See how custom apps can enhance your MedSpa or Dermatology practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              Schedule Demo
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold text-lg hover:bg-blue-900 transition shadow-lg">
              View Pricing Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}