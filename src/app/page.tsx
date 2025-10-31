import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text leading-tight">
            Reid Glaze
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
            Twin Tip Solutions
          </p>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            AI/ML Engineer & Founder building intelligent applications
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-8">
            MS Mechanical Engineering (AI/ML Focus) - CU Boulder
          </p>
        </div>
      </section>

      {/* Current Project - OVScribe */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Project</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-4xl md:text-5xl font-black mb-6">OVScribe</h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              AI-powered medical documentation and transcription platform
            </p>
            <a
              href="https://ovscribe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Visit OVScribe.com
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Past Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DermaWhiz */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-6">
                <Image
                  src="/derma-icon.png"
                  alt="DermaWhiz Logo"
                  width={120}
                  height={120}
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">DermaWhiz</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                AI-powered skin health analysis app with computer vision and RAG architecture
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* HeartHealthAI */}
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-6">
                <Image
                  src="/heart-logo.png"
                  alt="HeartHealthAI Logo"
                  width={120}
                  height={120}
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">HeartHealthAI</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                AI nutrition tracking with food photo analysis and heart health optimization
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/us/app/hearthealthai/id6738994173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.twintipsolutions.HeartHealthAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* AI Cough Checker */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-6 h-[120px] items-center">
                <div className="text-6xl">🎤</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Cough Checker</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                Machine learning-powered respiratory health monitoring through cough analysis
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                >
                  App Store
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
          <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              AI/ML engineer with an MS in Mechanical Engineering from CU Boulder, specializing in
              developing intelligent applications that leverage machine learning and computer vision.
              Experienced in building production mobile applications with advanced AI capabilities,
              HIPAA-aligned architectures, and scalable cloud infrastructure.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently focused on <strong>OVScribe</strong>, an AI-powered medical documentation platform,
              while maintaining several deployed healthcare AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:reid@twintipsolutions.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              <FaEnvelope />
              reid@twintipsolutions.com
            </a>
            <a
              href="https://www.linkedin.com/in/reidhglaze/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
