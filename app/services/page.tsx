"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/components/language-provider"
import { Car, Clock, MapPin, CreditCard, Phone, Shield, ThumbsUp, Sparkles, Award } from "lucide-react"

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-12">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          <TranslatedText id="services.title" />
        </h1>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-300 text-lg">
            <TranslatedText id="services.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Car className="h-10 w-10" />}
            title="services.premiumCars.title"
            description="services.premiumCars.description"
          />
          <ServiceCard
            icon={<MapPin className="h-10 w-10" />}
            title="services.freePickup.title"
            description="services.freePickup.description"
          />
          <ServiceCard
            icon={<Clock className="h-10 w-10" />}
            title="services.support.title"
            description="services.support.description"
          />
          <ServiceCard
            icon={<CreditCard className="h-10 w-10" />}
            title="services.noDeposit.title"
            description="services.noDeposit.description"
          />
          <ServiceCard
            icon={<Shield className="h-10 w-10" />}
            title="services.insurance.title"
            description="services.insurance.description"
          />
          <ServiceCard
            icon={<ThumbsUp className="h-10 w-10" />}
            title="services.bestPrices.title"
            description="services.bestPrices.description"
          />
          <ServiceCard
            icon={<Sparkles className="h-10 w-10" />}
            title="services.cleanCars.title"
            description="services.cleanCars.description"
          />
          <ServiceCard
            icon={<Phone className="h-10 w-10" />}
            title="services.easyBooking.title"
            description="services.easyBooking.description"
          />
          <ServiceCard
            icon={<Award className="h-10 w-10" />}
            title="services.experience.title"
            description="services.experience.description"
          />
        </div>
      </div>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
      <CardHeader className="flex flex-col items-center">
        <div className="text-red-600 mb-4">{icon}</div>
        <CardTitle className="text-white text-xl text-center">
          <TranslatedText id={title} />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center text-gray-300">
        <TranslatedText id={description} />
      </CardContent>
    </Card>
  )
}

function TranslatedText({ id }: { id: string }) {
  const { t } = useTranslation()
  return <>{t(id)}</>
}
