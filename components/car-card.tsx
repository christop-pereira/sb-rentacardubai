"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { useTranslation } from "./language-provider"

interface CarCardProps {
  name: string
  image: string
  price: string
  id?: string
}

export function CarCard({ name, image, price, id = "default" }: CarCardProps) {
  const { t } = useTranslation()
  const formattedName = name.toLowerCase().replace(/\s+/g, "-")
  const carId = id === "default" ? formattedName : id

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 rounded-xl">
      <CardContent className="p-0 relative">
        <div className="absolute top-2 left-2 z-10">
          <h3 className="text-xl font-bold text-red-600">{name}</h3>
        </div>
        <div className="absolute top-2 right-2 z-10">
          <MoreHorizontal className="h-6 w-6 text-white" />
        </div>
        <Link href={`/cars-fleet/${carId}`}>
          <div className="relative h-48 w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-900">
        <div className="text-white">
          {t("carCard.rentNow")} {price}$/day
        </div>
        <Link href={`/cars-fleet/${carId}`}>
          <div className="text-sm text-red-500 hover:text-red-400">{t("carCard.details")} →</div>
        </Link>
      </CardFooter>
    </Card>
  )
}
