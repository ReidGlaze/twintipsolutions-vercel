import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaMobileAlt, FaDesktop, FaCloud, FaChartBar, FaCog } from "react-icons/fa";

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Complete AI Solution for Modern Dermatology
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with practical tools 
            designed specifically for dermatology clinics.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Complete Platform</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <FaDesktop className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Clinic Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Powerful web dashboard for dermatologists and clinic staff.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Patient management</li>
                <li>• AI analysis review</li>
                <li>• Treatment planning</li>
                <li>• Analytics & reporting</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <FaCloud className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enterprise-grade cloud infrastructure with guaranteed uptime.
              </p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li>• HIPAA-compliant hosting</li>
                <li>• Automatic backups</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Global CDN</li>
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
                      Identifies potential skin conditions with 94% accuracy using computer vision
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
            
            <div className="relative">
              <Image 
                src="/security-architecture.png" 
                alt="AI Analysis Demo" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Seamless Workflow Integration</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Patient Captures Images</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Patients use your branded app to photograph skin concerns at home or in the waiting room
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Pre-Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our AI instantly analyzes images and prepares a detailed report for the dermatologist
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dermatologist Review</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Doctor reviews AI insights and patient history before the consultation begins
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Efficient Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    With AI pre-screening complete, consultations are 30% faster and more thorough
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Integration Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <FaCog className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">EHR Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Seamlessly integrate with your existing Electronic Health Records system.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Epic MyChart</li>
                <li>• Cerner</li>
                <li>• Athenahealth</li>
                <li>• Custom API integration</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <FaChartBar className="text-4xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Practice Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with your practice management tools for streamlined operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Appointment scheduling</li>
                <li>• Billing integration</li>
                <li>• Patient communications</li>
                <li>• Reporting & analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">See Our Solution in Action</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a personalized demo to see how our AI platform can transform your dermatology practice.
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