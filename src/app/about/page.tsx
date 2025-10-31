import Image from "next/image";
import { FaLinkedin, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-zinc-50 to-gray-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-transparent bg-clip-text leading-tight">
            About
          </h1>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Developer</h2>

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
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
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Developer</p>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    Reid brings a unique combination of engineering expertise and entrepreneurial vision
                    to Twin Tip Solutions. With a Master&apos;s degree in Mechanical Engineering from
                    CU Boulder with a focus on AI/ML, he is particularly passionate about the intersection
                    of AI, cybersecurity, and data privacy, ensuring that powerful technology can be
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
    </div>
  );
}
