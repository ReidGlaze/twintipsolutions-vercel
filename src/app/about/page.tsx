import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGraduationCap, FaLightbulb, FaRocket, FaHeart, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
            About Twin Tip Solutions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Twin Tip Solutions is on a mission to revolutionize dermatology care through AI technology, 
            making advanced skin analysis accessible to clinics and patients worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-yellow-500" />
                The Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower dermatology clinics with AI technology that enhances patient monitoring, 
                improves treatment adherence, and increases practice efficiency—all while maintaining 
                the highest standards of data privacy and security.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FaRocket className="text-blue-600" />
                The Vision
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A future where every dermatology patient has access to AI-enhanced care, 
                where skin conditions are caught earlier, treated more effectively, and 
                monitored continuously for better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Developer</h2>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image 
                    src="https://avatars.githubusercontent.com/u/104596386?s=400&u=aedeb59c60ebbb50eda60fae2981b401621e2848&v=4" 
                    alt="Reid Glaze" 
                    width={192} 
                    height={192} 
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <a 
                  href="https://www.linkedin.com/in/reidhglaze/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <FaLinkedin className="text-xl" />
                  Connect on LinkedIn
                </a>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Reid Glaze</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Owner</p>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    Reid brings a unique combination of engineering expertise and entrepreneurial vision 
                    to Twin Tip Solutions. With a Master&apos;s degree in Mechanical Engineering from 
                    CU Boulder with a focus on AI/ML, he is particularly passionate about the intersection 
                    of AI, cybersecurity, and data privacy—ensuring that powerful technology can be 
                    deployed while protecting user information.
                  </p>
                  
                  
                  <div className="flex items-start gap-3">
                    <FaGraduationCap className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Education</strong>
                      <p className="text-sm">MS Mechanical Engineering, University of Colorado Boulder</p>
                      <p className="text-sm italic">Focus: AI/ML Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-First Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every feature starts with the question: How will this improve patient care?
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy by Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Security and privacy aren&apos;t afterthoughts—they&apos;re built into every line of code.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The AI models are constantly evolving to provide the most accurate, helpful insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Story</h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Twin Tip Solutions began when I realized dermatology patients needed better tools to track 
              their skin conditions between appointments. Many would forget to monitor their progress, 
              lose track of changes, or simply feel disconnected from their treatment plans during the 
              weeks between visits.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              What if clinics could offer their patients a secure, professional app to photograph and 
              track their skin conditions over time? Not for diagnosis, but as a visual diary that 
              helps patients see their progress, remember concerns to discuss, and stay engaged with 
              their treatment plans between visits.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Having previously built <a href="https://hearthealthai.app/" 
              target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
              HeartHealthAI</a> for nutrition tracking, I understood how to create health apps that support 
              professional care plans. DermaWhiz became the proof of concept—a tool that gives patients 
              educational insights while always encouraging them to follow up with their dermatologist.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Now, clinics can offer their own branded version of this technology. It&apos;s a tool that 
              extends their practice beyond office hours, keeps patients engaged with their treatment 
              plans, and provides a trusted alternative to unreliable online medical advice—all while 
              strengthening the doctor-patient relationship.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Revolution in Dermatology Care</h2>
          <p className="text-xl mb-8 opacity-90">
            Bring AI-powered skin analysis to your clinic today.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}