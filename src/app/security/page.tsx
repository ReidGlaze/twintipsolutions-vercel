import Image from "next/image";
import { FaShieldAlt, FaLock, FaCheckCircle, FaUserShield, FaKey, FaDatabase } from "react-icons/fa";

export default function Security() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
            Professional Security & Compliance
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Patient data security is the top priority. Twin Tip Solutions maintains strong 
            security practices and compliance measures for healthcare organizations.
          </p>
        </div>
      </section>

      {/* Why HIPAA? */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why HIPAA Alignment Matters</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              While our apps don&apos;t collect traditional patient identifiers like names or specific locations, 
              HIPAA alignment is still critical for protecting patient privacy:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Biometric Data:</strong> Facial photos are considered biometric identifiers under HIPAA, 
                requiring special protection even without names attached.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Clinic Association:</strong> Your custom-branded app inherently links patients to your 
                specific clinic, creating an indirect identifier.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Anonymous Design:</strong> Every user account is created with anonymous identifiers, 
                but the combination of photo data and clinic association still requires HIPAA-level protection.</span>
              </li>
            </ul>
            <p className="text-center mt-6 font-semibold text-gray-700 dark:text-gray-300">
              This is why we&apos;ve built our entire platform with HIPAA alignment from day one.
            </p>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="text-4xl text-blue-600" />
                <h2 className="text-3xl font-bold">HIPAA-Aligned</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                HIPAA alignment is taken seriously. The platform is designed with healthcare privacy 
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
                    <strong>Security Best Practices</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Following industry security standards and best practices
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Transparent Communication</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Direct communication about any security matters
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">HIPAA-Aligned Approach</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A practical approach to security that aligns with HIPAA principles:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong>Minimal Data Collection:</strong> Data is only processed when explicitly requested by users
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong>Device-Based Storage:</strong> Patient data stays on their devices, not in the cloud
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong>Immediate Deletion:</strong> Data is deleted immediately after AI processing - never stored in our database (except hallucination reports with double encryption)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong>Encryption First:</strong> All data is encrypted both at rest and in transit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong>Direct Support:</strong> Personal attention to any security concerns from the founder
                  </span>
                </li>
              </ul>
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
              <h3 className="text-xl font-bold mb-2">Multi-Layer Encryption</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AES-256-GCM encryption at rest and in transit, plus TLS. Double encryption until Cloud Function decryption for AI processing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <FaUserShield className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Device-Based Storage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Patient data stays on the device. Photos and analysis results cannot be accessed by Twin Tip Solutions.
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

      {/* Basic Security Best Practices */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Defense in Depth: Every Layer Matters</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                While the platform implements sophisticated HIPAA-aligned security measures, I believe in defense at every level. 
                Research shows that over 90% of cyberattacks exploit basic vulnerabilities rather than advanced technical systems.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Founder&apos;s Security Practices</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As the founder and sole developer, I personally use these security tools to ensure platform integrity:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FaShieldAlt className="text-blue-600" />
                    Network Security
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>ProtonVPN:</strong> All development and administrative work conducted through encrypted VPN connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Secure DNS:</strong> Protection against DNS hijacking and phishing attempts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FaKey className="text-purple-600" />
                    Access Management
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Password Manager:</strong> Unique, complex passwords for every service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>2FA Everything:</strong> Multi-factor authentication on all accounts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FaLock className="text-green-600" />
                    Browser Security
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Mozilla Firefox:</strong> Privacy-focused browser with enhanced tracking protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Regular Updates:</strong> All software kept current with security patches</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FaUserShield className="text-orange-600" />
                    Operational Security
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Zero Trust:</strong> Verify everything, trust nothing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Phishing Awareness:</strong> Continuous vigilance against social engineering</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Security is a mindset, not just technology.</strong> While our technical infrastructure provides 
                robust protection, we maintain security hygiene at every level - from encrypted communications to 
                comprehensive access management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling Practices */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Data Is Handled</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaDatabase className="text-blue-600" />
                Normal App Usage
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All data is stored encrypted on your device. When you request an analysis, photos are 
                temporarily sent to secure cloud infrastructure with double encryption for AI processing, then immediately deleted.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All data stored encrypted on your device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Temporary cloud processing with immediate deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Double encryption during transmission</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-purple-600" />
                Hallucination Reporting
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Only when users report AI hallucinations is data stored in the database with double encryption. 
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
                Twin Tip Solutions is HIPAA-aligned in security practices, focusing on protecting patient privacy 
                through device-based storage and minimal data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Mobile Apps Protect You */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Mobile Apps Protect You</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaDatabase className="text-blue-600" />
                Your Data Stays With You
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>On-Device Storage</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All your photos and analysis results stay on your phone
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Face ID Protection</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Only you can access your app with biometric authentication
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Local Encryption</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your data is encrypted on your device using military-grade encryption
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>You Control Your Data</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Delete your data anytime - it can&apos;t be accessed externally
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">AI Processing Security</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Temporary Processing Only</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Photos sent for AI analysis are deleted immediately after
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Double Encryption</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your data is encrypted twice during transmission
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Anonymous Processing</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI analysis happens without any personal identifiers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Secure Cloud Infrastructure</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Google Cloud&apos;s enterprise-grade security for AI processing
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Simple Privacy Promise</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your health data is yours. It can&apos;t be seen, stored, or shared by Twin Tip Solutions. 
              Everything stays encrypted on your phone where only you can access it.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Center */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Trust Through Transparency</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Trust is earned through transparency. All security practices are open for review, 
            and questions are always welcome.
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