import Image from "next/image";
import { FaShieldAlt, FaLock, FaCheckCircle, FaUserShield, FaKey, FaDatabase } from "react-icons/fa";

export default function Security() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Enterprise-Grade Security & Compliance
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your patients&apos; data security is our top priority. We maintain the highest standards 
            of security and compliance for healthcare organizations.
          </p>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="text-4xl text-blue-600" />
                <h2 className="text-3xl font-bold">HIPAA-Aligned</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We take HIPAA alignment seriously. Our platform is designed with healthcare privacy 
                regulations in mind, implementing security measures that align with HIPAA standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Business Associate Agreement (BAA)</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Standard BAA included with all plans
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Security Assessments</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Regular security reviews and assessments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Employee Training</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Team members receive security and privacy training
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Incident Response Plan</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      24/7 monitoring and rapid incident response procedures
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">HIPAA Safeguards</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Administrative</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Security officer designation</li>
                    <li>• Workforce training programs</li>
                    <li>• Access management procedures</li>
                    <li>• Regular risk assessments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Physical</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Facility access controls</li>
                    <li>• Workstation security</li>
                    <li>• Device & media controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">Technical</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Access control systems</li>
                    <li>• Audit logs & monitoring</li>
                    <li>• Integrity controls</li>
                    <li>• Transmission security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Security Architecture</h2>
          
          <div className="mb-12">
            <Image 
              src="/security-architecture.png" 
              alt="Security Architecture Diagram" 
              width={1200} 
              height={800} 
              className="rounded-xl shadow-2xl mx-auto"
            />
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              Full SHA-256 Key derivation method intentionally omitted.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <FaLock className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AES-256-GCM encryption for data at rest and in transit. Each user has unique encryption keys.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <FaUserShield className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Device-Based Storage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Patient data stays on the device. We cannot access your photos or analysis results.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <FaKey className="text-3xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Biometric Authentication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Face ID required for app access, adding an extra layer of security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling Practices */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Handle Your Data</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaDatabase className="text-blue-600" />
                Normal App Usage
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                During normal app use, your photos are sent to our secure cloud with double encryption 
                for AI analysis and immediately deleted after processing. Results are stored only on your device.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Photos encrypted during transmission for analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Immediate deletion after AI processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Analysis results stored only on your device</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-purple-600" />
                Hallucination Reporting
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Only when users report AI hallucinations is data stored in our database with double encryption. 
                This is required for:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Google Play Store compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Legal safeguards and liability protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Improving AI model accuracy</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                We are HIPAA-aligned in our security practices, focusing on protecting patient privacy 
                through device-based storage and minimal data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Security</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaDatabase className="text-blue-600" />
                Data Security
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Encrypted backups with point-in-time recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Geographically distributed data centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated security patching</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Regular vulnerability scanning</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Network Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>WAF (Web Application Firewall)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>DDoS protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>VPC isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>TLS 1.3 for all connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Center */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Trust is Our Foundation</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We understand that trust is earned. That&apos;s why we&apos;re transparent about our security 
            practices and always available to answer your questions.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Email us at reid@twintipsolutions.com for any security-related questions or concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}