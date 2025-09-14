'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Hobby',
    price: '$10',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: '$25',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['All Features', 'Dedicated Support', 'Custom Integrations'],
  },
]

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState('Pro')

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pricing that scales with you
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose a plan that fits your needs. No hidden fees, no contracts.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 pt-12 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${selectedPlan === plan.name ? 'border-2 border-purple-500' : 'border'}`}>
              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-center">{plan.price}</p>
              <p className="mt-2 text-sm text-gray-500 text-center">per month</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  className="w-full"
                  onClick={() => setSelectedPlan(plan.name)}>
                  {selectedPlan === plan.name ? 'Selected' : 'Choose Plan'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
