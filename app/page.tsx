"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import { CarCard } from "@/components/car-card"
import { BrandLogos } from "@/components/brand-logos"
import { Features } from "@/components/features"
import { cars } from "@/lib/cars-data"

export default function Home() {
  const featuredCars = cars.slice(0, 3) // Get the first 3 cars for the featured section

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Dubai Skyline */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <TranslatedText id="hero.title" />
              </h1>
              <p className="text-xl text-white mb-8">
                <TranslatedText id="hero.subtitle" />
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-12 bg-black">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              <TranslatedText id="featuredCars.title" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} id={car.id} name={car.name} image={car.image} price={car.dailyPrice.toString()} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/cars-fleet">
              <Button variant="outline" className="bg-red-600 hover:bg-red-700 text-white border-none">
                <TranslatedText id="featuredCars.viewAll" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Features */}
      <Features />
    </div>
  )
}

function TranslatedText({ id }: { id: string }) {
  const { t } = useTranslation()
  return <>{t(id)}</>
}

function WhatsAppButton() {
  const { t } = useTranslation()
  const phoneNumber = "+971999999999"
  const message = "Hello, I would like to book a car."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
        {t("common.bookNow")}
      </Button>
    </a>
  )
}
