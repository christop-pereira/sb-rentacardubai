"use client"

import { useTranslation } from "./language-provider"
import { MapPin, Clock, DollarSign, ShieldCheck } from "lucide-react"

export function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      title: "features.pickup.title",
      description: "features.pickup.description",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      title: "features.noDeposit.title",
      description: "features.noDeposit.description",
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "features.support.title",
      description: "features.support.description",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-orange-500" />,
      title: "features.prices.title",
      description: "features.prices.description",
    },
  ]

  return (
    <section className="py-12 bg-black">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{t(feature.title)}</h3>
              <p className="text-gray-400">{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
