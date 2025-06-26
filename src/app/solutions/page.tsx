import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
            Complete AI Solution for Modern Dermatology
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            This comprehensive platform combines cutting-edge AI technology with practical tools 
            designed specifically for dermatology clinics.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Complete Platform</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Patient Mobile App</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                White-labeled app for your patients to capture skin concerns and track progress.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• AI-powered photo analysis</li>
                <li>• Appointment scheduling</li>
                <li>• Treatment reminders</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <FaCloud className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Secure cloud processing for AI analysis.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• HIPAA-aligned hosting</li>
                <li>• Signed BAA with Google Cloud</li>
                <li>• AI does not train on any data</li>
                <li>• Reliable infrastructure</li>
                <li>• Immediate deletion after processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced AI Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Powered by State-of-the-Art AI</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Skin Condition Analysis</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Identifies potential skin conditions using advanced computer vision
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Progress Tracking</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Automatically compares images over time to track treatment effectiveness
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
                      Provides evidence-based recommendations from latest dermatology research
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative flex items-center justify-center overflow-hidden">
              <div style={{ maxHeight: '600px', overflow: 'hidden' }}>
                <Image 
                  src="/Untitled.png" 
                  alt="AI Analysis Demo" 
                  width={450} 
                  height={974} 
                  className="drop-shadow-2xl"
                  style={{ 
                    width: 'auto',
                    height: '650px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    marginBottom: '-50px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Training Sources */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trained on Trusted Medical Sources</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Our AI is trained exclusively on reliable, peer-reviewed medical sources. We follow all web scraping 
              laws and only use publicly available, open-access materials.
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
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
                    Patients download your custom-branded app and create a secure profile with their medications and health history
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Take Photos for AI Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Simply snap photos of skin concerns and get instant AI-powered educational insights
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Track Progress Over Time</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All photos and analyses are stored securely on the device - patients can track changes and improvements
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Share with Your Doctor</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Patients can easily show their photo history and AI insights during appointments for better consultations
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
          <h2 className="text-4xl font-bold mb-6">See the Solution in Action</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a personalized demo to see how this AI platform can transform your dermatology practice.
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