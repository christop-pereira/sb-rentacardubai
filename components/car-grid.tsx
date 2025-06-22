"use client"

import { useState } from "react"
import { CarCard } from "./car-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "./language-provider"
import { cars } from "@/lib/cars-data"

export function CarGrid() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState("all")

  const filteredCars = filter === "all" ? cars : cars.filter((car) => car.brand.toLowerCase() === filter)

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-white">{t("carsFleet.availableCars")}</h2>

        <Select defaultValue="all" onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder={t("carsFleet.filterByBrand")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("carsFleet.allBrands")}</SelectItem>
            <SelectItem value="ferrari">Ferrari</SelectItem>
            <SelectItem value="lamborghini">Lamborghini</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="mercedes">Mercedes</SelectItem>
            <SelectItem value="rolls-royce">Rolls Royce</SelectItem>
            <SelectItem value="porsche">Porsche</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image || "/placeholder.svg?height=200&width=300"}
            price={car.dailyPrice.toString()}
          />
        ))}
      </div>
    </div>
  )
}
