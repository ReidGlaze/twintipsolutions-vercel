import Image from "next/image";
import { FaApple, FaGooglePlay, FaLinkedin, FaGraduationCap, FaShieldAlt, FaLock, FaUserMd } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 py-12 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-fuchsia-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section with Business Description */}
      <section className="flex flex-col items-center gap-6 text-center relative">
        <div className="relative">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-emerald-500 text-transparent bg-clip-text">
            Twin Tip Solutions
          </h1>
          <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-600/20 via-fuchsia-500/20 to-emerald-500/20 blur-xl -z-10 animate-pulse"></div>
        </div>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          AI-Powered Healthcare Technology • HIPAA-Compliant Solutions • Mobile Innovation
        </p>
        
        {/* Clear Business Description */}
        <div className="mt-8 max-w-4xl mx-auto text-left bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">What We Do</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Twin Tip Solutions develops cutting-edge AI-powered healthcare applications that democratize access to health insights while maintaining the highest standards of data privacy and security. We specialize in mobile applications that leverage machine learning and large language models (LLMs) to provide instant, personalized health guidance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <FaUserMd className="text-blue-600" /> Problems We Solve
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Limited access to dermatological expertise</li>
                <li>• Difficulty tracking nutrition impact on heart health</li>
                <li>• Healthcare organizations need for secure AI solutions</li>
                <li>• High cost of preliminary health assessments</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Target Audience</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><strong>B2C:</strong> Health-conscious individuals seeking AI-powered insights</li>
                <li><strong>B2B:</strong> Healthcare organizations requiring HIPAA-compliant solutions</li>
                <li><strong>Enterprise:</strong> Hospitals and clinics for white-label deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center mb-4">The Team Behind Twin Tip Solutions</h2>
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-xl p-8 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                RG
              </div>
              <a 
                href="https://www.linkedin.com/in/reidhglaze/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn Profile
              </a>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Reid Glaze</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Founder & CEO</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      MS in Mechanical Engineering, University of Colorado Boulder
                      <br />
                      <span className="italic">Specialization: AI/ML Applications</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Expertise</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI/ML Engineering • Mobile App Development • Healthcare Technology • 
                      HIPAA Compliance • Cloud Architecture • Computer Vision
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "Passionate about leveraging AI to make healthcare more accessible and affordable for everyone, 
                    while ensuring the highest standards of privacy and security."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Development Stage */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Products & Services</h2>
        
        {/* DermaWhiz - Expanded */}
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
          <div className="relative z-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image src="/dermawhiz-logo.png" alt="DermaWhiz logo" width={120} height={120} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white shadow-lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">DermaWhiz</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Live on App Store & Google Play</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Educational mobile app that helps users better understand skin conditions using AI-powered photo analysis 
                    and a RAG (Retrieval-Augmented Generation) system for trusted, evidence-based insights.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Key Features</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>✓ AI-powered skin analysis</li>
                        <li>✓ Evidence-based educational content</li>
                        <li>✓ RAG system for accurate information</li>
                        <li>✓ Privacy-first architecture</li>
                        <li>✓ HIPAA-compliant infrastructure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Current Status</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>📱 Live on iOS and Android</li>
                        <li>👥 Active user base</li>
                        <li>⭐ Positive user reviews</li>
                        <li>🔄 Regular updates</li>
                        <li>🆓 Free to use</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mb-4">
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      <strong>Medical Disclaimer:</strong> DermaWhiz is for educational purposes only and does not provide medical diagnoses. 
                      Always consult with a qualified healthcare provider for medical advice.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href="https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition font-semibold text-sm shadow">
                      <FaApple className="text-xl" /> App Store
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#3DDC84] hover:bg-[#34be71] text-black transition font-semibold text-sm shadow">
                      <FaGooglePlay className="text-lg" /> Google Play
                    </a>
                    <a href="https://DermaWhiz.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition font-semibold text-sm shadow">
                      🌐 Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HeartHealthAI - Expanded */}
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
          <div className="relative z-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image src="/heart-logo.png" alt="HeartHealthAI logo" width={120} height={120} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white shadow-lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">HeartHealthAI</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Live on App Store & Google Play</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    AI-powered nutrition tracking app that analyzes food photos to provide instant health scores, 
                    macro tracking, and personalized recommendations for heart health optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Analysis Categories</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>📊 Healthy/Unhealthy Fats</li>
                        <li>🍬 Sugar Content</li>
                        <li>🧂 Sodium Levels</li>
                        <li>🌾 Fiber Content</li>
                        <li>💪 Protein, Carbs, Fats</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Unique Features</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>🤖 AI assistant with meal memory</li>
                        <li>📸 Instant photo analysis</li>
                        <li>🎯 Personalized health scores</li>
                        <li>📈 Progress tracking</li>
                        <li>🆓 Free to use</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href="https://apps.apple.com/us/app/hearthealthai/id6743356123" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition font-semibold text-sm shadow">
                      <FaApple className="text-xl" /> App Store
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.reidglaze.hearthealthai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#3DDC84] hover:bg-[#34be71] text-black transition font-semibold text-sm shadow">
                      <FaGooglePlay className="text-lg" /> Google Play
                    </a>
                    <a href="https://HeartHealthAI.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition font-semibold text-sm shadow">
                      🌐 Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Label Solutions */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-3xl text-blue-600" />
            <h3 className="text-2xl font-bold">White Label HIPAA-Aligned Solutions</h3>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">In Development</span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Enterprise-grade healthcare AI solutions customizable for your organization's needs. 
            Built with security and compliance at the core.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/80 dark:bg-black/40 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Full Customization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your branding, your features, your data. Complete white-label solution tailored to your needs.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built from the ground up with HIPAA compliance, BAA ready, and enterprise security.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Scalable Infrastructure</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cloud-native architecture that scales with your organization's growth.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> Our white-label solutions are independently developed and will be fully 
              customized for each client to ensure no conflicts or legal concerns. All intellectual property 
              will be clearly defined in client agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center mb-4">Enterprise-Grade Security</h2>
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-xl p-8 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Our commitment to security and privacy is demonstrated through our comprehensive architecture:
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/security-architecture.png" 
              alt="Security Architecture Diagram" 
              width={1200} 
              height={800} 
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔐</div>
              <h4 className="font-semibold mb-1">Multi-Layer Encryption</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">AES-256-GCM with unique keys per user</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-1">Zero-Knowledge Architecture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Developers cannot access user data</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold mb-1">HIPAA Compliant</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full compliance with healthcare standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="text-center py-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare with AI?</h2>
        <p className="text-lg mb-6 opacity-90">
          Whether you're looking for our consumer apps or enterprise solutions, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:contact@twintipsolutions.com" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Contact Us
          </a>
          <a 
            href="https://www.linkedin.com/in/reidhglaze/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg flex items-center justify-center gap-2"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}