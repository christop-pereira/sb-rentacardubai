export function BrandLogos() {
  const brands = [
    { name: "McLaren", image: "/placeholder.svg?height=60&width=120" },
    { name: "Lamborghini", image: "/placeholder.svg?height=60&width=120" },
    { name: "Porsche", image: "/placeholder.svg?height=60&width=120" },
    { name: "Ferrari", image: "/placeholder.svg?height=60&width=120" },
    { name: "Rolls Royce", image: "/placeholder.svg?height=60&width=120" },
    { name: "Mercedes", image: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-10 bg-gray-800">
      <div className="container px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="w-24 h-16 relative">
              <img src={brand.image || "/placeholder.svg"} alt={brand.name} className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
