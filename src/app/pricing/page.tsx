"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaRocket, FaBuilding, FaInfinity } from "react-icons/fa";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      icon: FaRocket,
      description: "Perfect for small clinics getting started with AI",
      monthlyPrice: 999,
      yearlyPrice: 899,
      features: [
        "Up to 3 dermatologists",
        "500 AI analyses per month",
        "Basic patient app",
        "Email support",
        "Standard integrations",
        "Monthly reports",
      ],
      notIncluded: [
        "Custom branding",
        "API access",
        "Priority support",
      ],
      stripeMonthlyPriceId: "price_starter_monthly", // Replace with actual Stripe price ID
      stripeYearlyPriceId: "price_starter_yearly", // Replace with actual Stripe price ID
    },
    {
      name: "Professional",
      icon: FaBuilding,
      description: "For established clinics ready to scale",
      monthlyPrice: 2499,
      yearlyPrice: 2249,
      features: [
        "Up to 10 dermatologists",
        "2,000 AI analyses per month",
        "White-labeled patient app",
        "Priority email & phone support",
        "EHR integration",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Dedicated account manager",
      ],
      notIncluded: [
        "Custom AI training",
        "On-premise deployment",
      ],
      popular: true,
      stripeMonthlyPriceId: "price_professional_monthly", // Replace with actual Stripe price ID
      stripeYearlyPriceId: "price_professional_yearly", // Replace with actual Stripe price ID
    },
    {
      name: "Enterprise",
      icon: FaInfinity,
      description: "Custom solution for large organizations",
      customPricing: true,
      features: [
        "Unlimited dermatologists",
        "Unlimited AI analyses",
        "Fully customized solution",
        "24/7 phone support",
        "Custom integrations",
        "Custom AI model training",
        "On-premise option available",
        "SLA guarantee",
        "Dedicated success team",
        "Quarterly business reviews",
      ],
      notIncluded: [],
    },
  ];

  const handleSubscribe = async (priceId: string) => {
    // TODO: Implement Stripe checkout
    // This is where you would call your backend to create a Stripe checkout session
    console.log("Subscribe to plan with price ID:", priceId);
    // Example implementation:
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ priceId }),
    // });
    // const { url } = await response.json();
    // window.location.href = url;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your clinic&apos;s needs. All plans include our core AI technology, 
            HIPAA compliance, and regular updates.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={billingPeriod === "monthly" ? "font-semibold" : ""}>Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform ${
                  billingPeriod === "yearly" ? "translate-x-8" : ""
                }`}
              />
            </button>
            <span className={billingPeriod === "yearly" ? "font-semibold" : ""}>
              Yearly <span className="text-green-600 text-sm">(Save 10%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const currentPrice = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const priceId = billingPeriod === "monthly" ? plan.stripeMonthlyPriceId : plan.stripeYearlyPriceId;
              
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ${
                    plan.popular ? "ring-4 ring-blue-600" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <Icon className="text-5xl mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                  </div>
                  
                  <div className="text-center mb-8">
                    {plan.customPricing ? (
                      <p className="text-3xl font-bold">Custom Pricing</p>
                    ) : (
                      <>
                        <p className="text-5xl font-bold">${currentPrice}</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          per month, billed {billingPeriod}
                        </p>
                      </>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <li key={`not-${index}`} className="flex items-start gap-3 opacity-50">
                        <span className="text-gray-400 mt-0.5">✗</span>
                        <span className="text-sm line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.customPricing ? (
                    <Link
                      href="/contact"
                      className="block w-full py-3 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                    >
                      Contact Sales
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleSubscribe(priceId!)}
                      className={`block w-full py-3 px-6 text-center rounded-lg font-semibold transition ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      Get Started
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">What&apos;s included in the AI analyses?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each AI analysis includes skin condition detection, severity assessment, progress tracking, 
                and evidence-based recommendations. The analysis is performed in seconds and includes a 
                detailed report for the dermatologist.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start 
                of your next billing cycle. We&apos;ll prorate any differences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No setup fees for Starter and Professional plans. Enterprise plans may include a one-time 
                implementation fee depending on customization requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What about HIPAA compliance?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All plans include full HIPAA compliance with BAA (Business Associate Agreement) included. 
                Our infrastructure is SOC 2 Type II certified and includes end-to-end encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of dermatology clinics already using AI to improve patient care.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg inline-block">
            Schedule Your Demo
          </Link>
        </div>
      </section>
    </div>
  );
}