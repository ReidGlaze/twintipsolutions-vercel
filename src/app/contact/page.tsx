"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaCalendar } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    clinicName: "",
    contactName: "",
    email: "",
    phone: "",
    clinicSize: "",
    currentEHR: "",
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
    
    // TODO: Implement actual form submission
    // This would typically send to your backend API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        clinicName: "",
        contactName: "",
        email: "",
        phone: "",
        clinicSize: "",
        currentEHR: "",
        message: "",
      });
    } catch {
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
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Let&apos;s Transform Your Practice Together
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to see how AI can revolutionize your dermatology clinic? 
            Schedule a personalized demo or get in touch with our team.
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
                Fill out the form below and we&apos;ll schedule a personalized demo for your clinic.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium mb-2">
                      Clinic Name *
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
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="clinicSize" className="block text-sm font-medium mb-2">
                      Number of Dermatologists
                    </label>
                    <select
                      id="clinicSize"
                      name="clinicSize"
                      value={formData.clinicSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    >
                      <option value="">Select...</option>
                      <option value="1-3">1-3</option>
                      <option value="4-10">4-10</option>
                      <option value="11-25">11-25</option>
                      <option value="25+">25+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="currentEHR" className="block text-sm font-medium mb-2">
                      Current EHR System
                    </label>
                    <input
                      type="text"
                      id="currentEHR"
                      name="currentEHR"
                      value={formData.currentEHR}
                      onChange={handleChange}
                      placeholder="e.g., Epic, Cerner, etc."
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
                    placeholder="Tell us about your clinic&apos;s needs..."
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
                <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Open Calendar
                </button>
                {/* TODO: Integrate with Calendly or similar service */}
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  We typically respond within 24 hours
                </p>
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
                Most clinics are up and running within 2-4 weeks. This includes initial setup, 
                staff training, and integration with your existing systems.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Do you offer training for our staff?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! We provide comprehensive training for all staff members, including 
                live sessions, video tutorials, and ongoing support.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Can we try before we buy?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely. We offer a 30-day pilot program where you can test our solution 
                in your clinic with full support from our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}