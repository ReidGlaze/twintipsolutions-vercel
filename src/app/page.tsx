import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 py-12 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-fuchsia-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 text-center relative">
        <div className="relative">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-emerald-500 text-transparent bg-clip-text">
            Twin Tip Solutions
          </h1>
          <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-600/20 via-fuchsia-500/20 to-emerald-500/20 blur-xl -z-10 animate-pulse"></div>
        </div>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Mobile App Development. <span className="font-bold text-blue-600 dark:text-blue-400 drop-shadow-sm">AI</span> & <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400 drop-shadow-sm">LLMs</span>. Built for the future.
        </p>
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="flex flex-col gap-8">
        {/* HeartHealthAI */}
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
          <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
            <div className="flex-shrink-0 flex items-center justify-center p-2 sm:p-0">
              <Image src="/heart-logo.png" alt="HeartHealthAI logo" width={90} height={90} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white shadow-lg" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">HeartHealthAI <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded ml-2">Featured</span></h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Snap a photo of your food and get instant, AI-powered health scores and macro tracking. Your personal nutritionist, in your pocket.</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-gray-600 dark:text-gray-400 mb-2">
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Healthy/Unhealthy Fats</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Sugar</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Sodium</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Fiber</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Nutrient Density</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Processing Level</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Additives/Preservatives</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Macros: Protein, Carbs, Fats</span>
              </div>
              {/* Button Grid for iOS, Android, and Website */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 items-stretch w-full">
                {/* iOS Section */}
                <a href="https://apps.apple.com/us/app/hearthealthai/id6743356123" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition font-semibold text-base shadow h-14 w-full">
                  <FaApple className="text-2xl" /> App Store
                </a>
                {/* Android Section */}
                <a href="https://play.google.com/store/apps/details?id=com.reidglaze.hearthealthai&utm_source=na_Med" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#3DDC84] hover:bg-[#34be71] text-black transition font-semibold text-base shadow h-14 w-full">
                  <FaGooglePlay className="text-xl" /> Google Play
                </a>
                {/* Website Section */}
                <a href="https://HeartHealthAI.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition font-semibold text-base shadow h-14 w-full">
                  🌐 Website
                </a>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center sm:text-left">
            <span>Includes an AI assistant that remembers your past logged meals. Free to use. Feedback welcome!</span>
          </div>
          </div>
        </div>

        {/* DermaWhiz */}
        <div className="bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
          <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
            <div className="flex-shrink-0 flex items-center justify-center p-2 sm:p-0">
              <Image src="/dermawhiz-logo.png" alt="DermaWhiz logo" width={90} height={90} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white shadow-lg" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">DermaWhiz <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded ml-2">Featured</span></h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Educational mobile app that helps users better understand skin issues using AI-powered photo analysis and a RAG system for trusted, evidence-based insights.</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-gray-600 dark:text-gray-400 mb-2">
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">AI Image Analysis</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">RAG System</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Privacy Protected</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Educational Content</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Dermatology Sources</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">User-Friendly</span>
              </div>
              {/* Button Grid for iOS, Android, and Website */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 items-stretch w-full">
                {/* iOS Section */}
                <a href="https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition font-semibold text-base shadow h-14 w-full">
                  <FaApple className="text-2xl" /> App Store
                </a>
                {/* Android Section */}
                <a href="https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#3DDC84] hover:bg-[#34be71] text-black transition font-semibold text-base shadow h-14 w-full">
                  <FaGooglePlay className="text-xl" /> Google Play
                </a>
                {/* Website Section */}
                <a href="https://DermaWhiz.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition font-semibold text-base shadow h-14 w-full">
                  🌐 Website
                </a>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center sm:text-left">
            <span>Fully HIPAA compliant with double encryption - developer cannot access your data. Free to use.</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
