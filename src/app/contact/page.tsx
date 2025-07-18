"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaCalendar } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    clinicName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        clinicName: "",
        contactName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
            Let&apos;s Transform Your Practice Together
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to see how AI can revolutionize your medspa or dermatology clinic? 
            Schedule a personalized demo or get in touch to learn more.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Request a Demo</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and we&apos;ll schedule a personalized demo for your medspa or clinic.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium mb-2">
                      Medspa/Clinic Name *
                    </label>
                    <input
                      type="text"
                      id="clinicName"
                      name="clinicName"
                      required
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                </div>
                
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your medspa or clinic&apos;s needs..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Schedule Demo"}
                </button>
                
                {submitStatus === "success" && (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg">
                    Thank you! We&apos;ll be in touch within 24 hours to schedule your demo.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:reid@twintipsolutions.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                      reid@twintipsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaPhone className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Available upon request
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaLinkedin className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/reidhglaze/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                    >
                      Connect with Reid Glaze
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Calendar Widget Placeholder */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaCalendar className="text-blue-600" />
                  Schedule a Call
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Prefer to schedule a call directly? Use our calendar to find a time that works for you.
                </p>
                <a 
                  href="https://calendly.com/reid-twintipsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  Open Calendar
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">How long does implementation take?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                It typically takes 2-3 weeks to customize the app with your branding and get it 
                approved on both the App Store and Google Play.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">What&apos;s included in the customization?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your custom app includes: complete branding with your medspa or clinic&apos;s logo and colors, 
                customized AI prompting and responses tailored to your services, AI training on your 
                websites and documents for business-specific insights, direct phone links and appointment 
                booking integration, and custom App Store listings with keyword optimization.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Can I see how it works first?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Download DermaWhiz from the App Store or Google Play to experience 
                the technology. Your custom app will have the same features with your branding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}