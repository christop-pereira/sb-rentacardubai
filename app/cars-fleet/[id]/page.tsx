"use client"

import Image from "next/image"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ShieldCheck } from "lucide-react"
import { useParams } from "next/navigation"
import { cars } from "@/lib/cars-data"

export default function CarDetail() {
  const params = useParams()
  const carId = params.id as string
  const car = cars.find((c) => c.id === carId) || cars[0]
  const { t } = useTranslation()

  const phoneNumber = "+971999999999"
  const message = `Hello, I would like to book the ${car.name}.`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container px-4 mx-auto">
        <div className="bg-gray-900 rounded-3xl overflow-hidden max-w-4xl mx-auto">
          {/* Car Header */}
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              {car.name} <span className="text-white">{car.year}</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Car Image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Car Details */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-green-500 mb-4">
                  {car.dailyPrice} AED / {t("carDetail.day")}
                </h2>

                <h3 className="text-xl font-semibold text-white mb-2">{t("carDetail.specifications")}:</h3>

                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div>
                    {t("carDetail.color")}: {car.color}
                  </div>
                  <div>
                    {t("carDetail.engine")}: {car.engine}
                  </div>
                  <div>
                    {t("carDetail.seats")}: {car.seats}
                  </div>
                  <div>
                    {t("carDetail.doors")}: {car.doors}
                  </div>
                  <div>
                    {t("carDetail.transmission")}: {t("carDetail.automatic")}
                  </div>
                  <div>
                    {t("carDetail.bluetooth")}: {t("common.yes")}
                  </div>
                  <div>
                    {t("carDetail.usb")}: {t("common.yes")}
                  </div>
                  <div>
                    {t("carDetail.navigation")}: {t("common.yes")}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{t("carDetail.included")}:</h3>

                <div className="grid gap-2 text-gray-300">
                  <div>
                    {t("carDetail.mileage")}: {car.mileage} KM
                  </div>
                  <div>
                    {t("carDetail.extraKm")}: {car.extraKmCost} AED
                  </div>
                  <div>
                    {t("carDetail.security")}: {car.securityAmount} AED
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center text-orange-500">
                  <MapPin className="mr-2" />
                  <span>{t("carDetail.freePickup")}</span>
                </div>
                <div className="flex items-center text-orange-500">
                  <Clock className="mr-2" />
                  <span>{t("carDetail.support")}</span>
                </div>
                <div className="flex items-center text-orange-500">
                  <ShieldCheck className="mr-2" />
                  <span>{t("carDetail.noDeposit")}</span>
                </div>
              </div>

              <div className="mt-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
                    {t("common.bookNow")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
