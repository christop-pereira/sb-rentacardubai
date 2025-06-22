"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ShieldCheck, ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { cars } from "@/lib/cars-data"
import { CarCarousel } from "@/components/car-carousel"

export default function CarDetail() {
  const params = useParams()
  const carId = params.id as string
  const car = cars.find((c) => c.id === carId) || cars[0]
  const { t } = useTranslation()

  const phoneNumber = "+971999999999"
  const message = `Hello, I would like to book the ${car.name}.`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8">
      <div className="container px-4 mx-auto">
        <div className="bg-gray-900 rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
          {/* Car Header with Back Button */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/cars-fleet">
                <Button variant="ghost" size="icon" className="text-white hover:text-red-600">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                {car.name} <span className="text-white">{car.year}</span>
              </h1>
            </div>
          </div>

          {/* Car Image Carousel - Optimized for Portrait */}
          <div className="p-6 pb-4">
            <CarCarousel images={car.images || [car.image]} alt={car.name} />
          </div>

          {/* Car Details - Organized in Cards */}
          <div className="p-6 space-y-6">
            {/* Price and Book Section */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  {car.dailyPrice.toLocaleString()} AED
                </h2>
                <p className="text-gray-300 mb-6">/ {t("carDetail.day")}</p>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 hover:scale-105">
                    {t("common.bookNow")}
                  </Button>
                </a>
              </div>
            </div>

            {/* Car Specifications */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-red-600 mr-3 rounded"></div>
                {t("carDetail.specifications")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.color")}:</span>
                  <span className="text-white font-semibold">{car.color}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.engine")}:</span>
                  <span className="text-white font-semibold">{car.engine}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.seats")}:</span>
                  <span className="text-white font-semibold">{car.seats}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.doors")}:</span>
                  <span className="text-white font-semibold">{car.doors}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.transmission")}:</span>
                  <span className="text-white font-semibold">{t("carDetail.automatic")}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.bluetooth")}:</span>
                  <span className="text-white font-semibold">{t("common.yes")}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.usb")}:</span>
                  <span className="text-white font-semibold">{t("common.yes")}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-300">{t("carDetail.navigation")}:</span>
                  <span className="text-white font-semibold">{t("common.yes")}</span>
                </div>
              </div>
            </div>

            {/* Included Section */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-green-500 mr-3 rounded"></div>
                {t("carDetail.included")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center py-4 px-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-500 mb-1">{car.mileage}</div>
                  <div className="text-sm text-gray-300">{t("carDetail.mileage")}</div>
                </div>
                <div className="text-center py-4 px-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">{car.extraKmCost} AED</div>
                  <div className="text-sm text-gray-300">{t("carDetail.extraKm")}</div>
                </div>
                <div className="text-center py-4 px-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-red-500 mb-1">{car.securityAmount} AED</div>
                  <div className="text-sm text-gray-300">{t("carDetail.security")}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-orange-500 mr-3 rounded"></div>
                Services Inclus
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <MapPin className="h-8 w-8 text-orange-500 mb-3" />
                  <span className="text-white font-medium">{t("carDetail.freePickup")}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <Clock className="h-8 w-8 text-orange-500 mb-3" />
                  <span className="text-white font-medium">{t("carDetail.support")}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <ShieldCheck className="h-8 w-8 text-orange-500 mb-3" />
                  <span className="text-white font-medium">{t("carDetail.noDeposit")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
