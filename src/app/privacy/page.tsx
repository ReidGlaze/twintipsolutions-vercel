import { FaShieldAlt, FaLock, FaUserShield, FaDatabase } from "react-icons/fa";

export default function Privacy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-transparent bg-clip-text leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Twin Tip Solutions is committed to protecting the privacy and security of your practice and your patients&apos; data.
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">HIPAA Aligned</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Signed BAA with Google Cloud Platform
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <FaDatabase className="text-4xl text-green-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Minimal Data Collection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We collect only what&apos;s necessary for service
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <FaUserShield className="text-4xl text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Your Control</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clinics control their data and patient information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              <strong>Effective Date:</strong> July 30, 2025 | <strong>Last Updated:</strong> July 30, 2025
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-6">
              Twin Tip Solutions LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides white-label AI-powered mobile applications 
              and web services for medical spas and dermatology clinics (the &quot;Service&quot;). This Privacy Policy 
              explains how we handle information for both clinics using our service and their patients using 
              the white-labeled applications.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">2. HIPAA Compliance</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <p className="mb-4">
                <strong>✓ HIPAA-Aligned Infrastructure:</strong> Twin Tip Solutions operates under a signed 
                Business Associate Agreement (BAA) with Google Cloud Platform, ensuring all data handling 
                meets HIPAA requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>All infrastructure runs on HIPAA-compliant Google Cloud services</li>
                <li>Signed BAA with all cloud service providers</li>
                <li>Zero AI training on patient data per HIPAA requirements</li>
                <li>Complete audit trails and access logging</li>
                <li>Regular security assessments and compliance reviews</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">3. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 For Clinics (B2B Customers)</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Business contact information (names, emails, phone numbers)</li>
              <li>Clinic details and branding materials</li>
              <li>Usage analytics and performance metrics</li>
              <li>Support communications and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 For App Users (Your Patients)</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>On-Device Only:</strong> Photos and analysis results stored encrypted on patient devices</li>
              <li><strong>When Shared with Clinic:</strong> Patient-submitted photos and contact info (with explicit consent)</li>
              <li><strong>Technical Data:</strong> Anonymous device information for app functionality</li>
              <li><strong>No Background Collection:</strong> No location, contacts, or personal data collected</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">4. How Patient Data Is Handled</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Default Privacy Model:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>All patient data stays on their device by default</li>
                <li>AI processing happens without cloud storage</li>
                <li>No patient data visible to Twin Tip Solutions</li>
                <li>Patients explicitly choose what to share with their clinic</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">5. Data Sharing and Disclosure</h2>
            <p className="mb-4">We share information only as follows:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>With Your Clinic:</strong> Patient data shared only when patients explicitly submit it</li>
              <li><strong>Service Providers:</strong> Google Cloud Platform under strict BAA terms</li>
              <li><strong>Legal Requirements:</strong> Only when required by law with appropriate protections</li>
              <li><strong>Never For:</strong> Marketing, advertising, data sales, or AI training</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">6. Data Security</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <FaLock className="text-2xl text-blue-600 mb-2" />
                <h4 className="font-semibold mb-2">Encryption</h4>
                <p className="text-sm">AES-256 encryption at rest and in transit</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <FaUserShield className="text-2xl text-green-600 mb-2" />
                <h4 className="font-semibold mb-2">Access Control</h4>
                <p className="text-sm">Role-based access with TOTP 2FA</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">7. Data Retention and Deletion</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Clinic Data:</strong> Retained for duration of service agreement plus 90 days</li>
              <li><strong>Patient Data on Devices:</strong> Controlled entirely by patients</li>
              <li><strong>Submitted Patient Data:</strong> Retained per clinic&apos;s retention policy</li>
              <li><strong>Deletion Rights:</strong> Clinics can request data deletion at any time</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">8. Your Rights</h2>
            <p className="mb-4">Clinics and their patients have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Access their personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of data</li>
              <li>Export data in standard formats</li>
              <li>Opt-out of non-essential communications</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">9. International Data Transfers</h2>
            <p className="mb-6">
              Data may be processed in the United States. We ensure appropriate safeguards through:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Google Cloud Platform&apos;s global HIPAA-compliant infrastructure</li>
              <li>Standard contractual clauses where required</li>
              <li>Adherence to applicable data protection laws</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">10. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
              We will notify clinics of material changes via email and update the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">11. Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> reid@twintipsolutions.com</p>
              <p className="mb-2"><strong>Company:</strong> Twin Tip Solutions LLC</p>
              <p className="mb-2"><strong>Privacy Inquiries:</strong> reid@twintipsolutions.com</p>
              <p><strong>HIPAA Compliance:</strong> reid@twintipsolutions.com</p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mt-8">
              <h3 className="font-bold mb-2">Medical Disclaimer</h3>
              <p className="text-sm">
                Twin Tip Solutions&apos; applications are for educational purposes only and do not provide 
                medical diagnoses, treatment recommendations, or medical advice. Users should always 
                consult qualified healthcare providers for medical concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}