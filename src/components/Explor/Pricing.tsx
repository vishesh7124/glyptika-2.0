import { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Team Starter",
      description: "Perfect for small teams getting started",
      admins: 1,
      screens: 2,
      jobsPerMonth: 840,
      furnitureModels: 50,
      jobsPerDay: 28,
      monthlyPrice: 8200,
      yearlyPrice: 7300,
      extraJobCost: 9.8,
      popular: false,
      features: [
        "AI-powered 2D to 3D conversion",
        "Basic furniture library",
        "VR walkthrough support",
        "Export & sharing tools",
        "Email support"
      ]
    },
    {
      name: "Enterprise",
      description: "Ideal for growing businesses",
      admins: 1,
      screens: 5,
      jobsPerMonth: 2100,
      furnitureModels: 80,
      jobsPerDay: 70,
      monthlyPrice: 20100,
      yearlyPrice: 18100,
      extraJobCost: 9.5,
      popular: false,
      features: [
        "Everything in Team Starter",
        "Advanced furniture library",
        "Custom textures & materials",
        "Priority processing",
        "Phone & email support"
      ]
    },
    {
      name: "Enterprise Plus",
      description: "Most popular for established teams",
      admins: 1,
      screens: 9,
      jobsPerMonth: 3780,
      furnitureModels: 120,
      jobsPerDay: 126,
      monthlyPrice: 35800,
      yearlyPrice: 32100,
      extraJobCost: 9.5,
      popular: true,
      features: [
        "Everything in Enterprise",
        "Premium furniture collection",
        "Advanced customization tools",
        "API access",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise Premium",
      description: "Ultimate solution for large organizations",
      admins: 1,
      screens: 13,
      jobsPerMonth: 5460,
      furnitureModels: 170,
      jobsPerDay: 182,
      monthlyPrice: 51200,
      yearlyPrice: 45700,
      extraJobCost: 9.4,
      popular: false,
      features: [
        "Everything in Enterprise Plus",
        "Unlimited furniture models",
        "White-label solutions",
        "Custom integrations",
        "24/7 premium support"
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose a Plan That Fits 
            <span className="block bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Your Needs
            </span>
          </h1>
          <br />
          <h1 className="text-lg md:text-base text-white mb-6">
            Flexible pricing options designed to scale with your business, from small teams to large enterprises.
            <br />
          </h1>
          <br />

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-medium mr-4 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
              <br />
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-all duration-300 focus:outline-none hover:bg-white/30 focus:ring-2 focus:ring-teal-400/50"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-300 shadow-lg ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
              <br />
            </button>
            <span className={`text-lg font-medium ml-4 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-sm text-gray-400">(billed annually)</span>
            </span>
            {isYearly && (
              <span className="ml-3 bg-gradient-to-r from-teal-500 to-green-500 text-white text-sm font-medium px-3 py-1 rounded-full animate-pulse">
                Save up to 15%
              </span>
            )}
          </div>
        </div>
<br />
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-teal-500 ring-2 ring-teal-500/20 animate-pulse' 
                  : 'border-white/10'
              } overflow-hidden`}
            >
              {/* Animated background for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 opacity-50"></div>
              )}
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center animate-bounce">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {isYearly ? 'per month (billed annually)' : 'per month'}
                  </div>
                  {isYearly && plan.monthlyPrice > plan.yearlyPrice && (
                    <div className="text-sm text-teal-400 mt-1 animate-pulse">
                      Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice * 12)} annually
                    </div>
                  )}
                </div>

                <button className={`group/btn w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white hover:from-teal-600 hover:to-green-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  )}
                  <span className="relative flex items-center justify-center">
                  Get Started
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
<br />
              {/* Plan Details */}
              <div className="relative z-10 space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Admins</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">{plan.admins}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Screens</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">{plan.screens}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Jobs per month</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">{plan.jobsPerMonth.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Furniture models</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">{plan.furnitureModels}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Jobs per day</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">{plan.jobsPerDay}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                  <span className="text-gray-300">Extra job cost</span>
                  <span className="text-white font-medium group-hover:text-teal-300 transition-colors duration-300">₹{plan.extraJobCost}</span>
                </div>
              </div>
<br />
              {/* Features */}
              <ul className="relative z-10 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    <Check className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0 group-hover:text-green-400 transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<br />
        {/* Comparison Table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Detailed Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-gray-300 font-medium">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="pb-4 text-white font-semibold text-center min-w-[140px]">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-white/10">
                  <td className="py-4 text-gray-300">Admins</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">{plan.admins}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 text-gray-300">Screens</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">{plan.screens}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 text-gray-300">Jobs per month</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">{plan.jobsPerMonth.toLocaleString()}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 text-gray-300">Furniture models</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">{plan.furnitureModels}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 text-gray-300">Jobs per day</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">{plan.jobsPerDay}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-gray-300">Extra job cost</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 text-white text-center">₹{plan.extraJobCost}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
                  <br />
        {/* Notes Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-16">
          <h3 className="text-xl font-bold text-white mb-6">Important Notes</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
              <p>For promotional videos and marketing integrations, clients must provide content.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse delay-200"></div>
              <p>Customized enterprise solutions are available on request.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse delay-500"></div>
              <p>All prices are in Indian Rupees (INR) and exclude applicable taxes.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse delay-700"></div>
              <p>Annual plans are billed yearly and offer significant savings over monthly billing.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse delay-1000"></div>
              <p><strong>Yearly pricing:</strong> Prices shown are monthly rates when billed annually (lower monthly cost for annual commitment).</p>
            </div>
          </div>
        </div>
<br />
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <br />
          <h2 className="text-base text-white mb-6">
            Contact our sales team for personalized pricing and custom enterprise solutions tailored to your specific needs.
          </h2>
          <br />
          <br />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold text-lg rounded-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">
              Contact Sales Team
              </span>
            </button>
            <button className="group px-8 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-teal-400/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative">
              Schedule Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;