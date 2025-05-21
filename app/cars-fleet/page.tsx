"use client"

import { CarGrid } from "@/components/car-grid"
import { useTranslation } from "@/components/language-provider"

export default function CarsFleet() {
  return (
    <div 
      className="min-h-screen py-12 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          <TranslatedText id="carsFleet.title" />
        </h1>

        <CarGrid />
      </div>
    </div>
  )
}

function TranslatedText({ id }: { id: string }) {
  const { t } = useTranslation()
  return <>{t(id)}</>
}
