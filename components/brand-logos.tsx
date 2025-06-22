export function BrandLogos() {
  const brands = [
    { name: "Rolls Royce", image: "/logoRolls.png" },
    { name: "Lamborghini", image: "/logoLamborghini.png" },
    { name: "Porsche", image: "/logoPorsche.png" },
    { name: "Ferrari", image: "/logoFerrari.png" },
    { name: "Audi", image: "/logoAudi.png" },
    { name: "Mercedes", image: "/logoMercedes.png" },
  ]

  return (
    <section className="py-10 bg-black">
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
