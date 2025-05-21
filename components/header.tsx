"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Instagram } from "lucide-react"
import { useTranslation } from "./language-provider"
import { LanguageSwitcher } from "./language-switcher"

export default function Header() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const phoneNumber = "+971999999999"
  const message = "Hello, I would like to book a car."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const navigation = [
    { name: "common.home", href: "/" },
    { name: "common.carsFleet", href: "/cars-fleet" },
    { name: "common.services", href: "/services" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-14 w-48">
              <Image src="/images/logo.png" alt="SB Luxury Rental Cars" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wider ${
                  isActive(item.href) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Contact & Book Now */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex flex-col items-start">
              <a href={`https://wa.me/${phoneNumber}`} className="text-gray-800 font-medium flex items-center">
                <div className="relative w-4 h-4 mr-1">
                  <Image 
                    src="/images/whatsapp-logo.png" 
                    alt="WhatsApp" 
                    width={16} 
                    height={16} 
                    className="object-contain"
                  />
                </div>
                {phoneNumber}
              </a>
              <a
                href="https://instagram.com/sb.rentacar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 flex items-center"
              >
                <Instagram className="w-4 h-4 mr-1 text-pink-600" />
                SB.RENTACAR
              </a>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">{t("common.bookNow")}</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <div className="relative h-10 w-32">
                      <Image src="/images/logo.png" alt="SB Luxury Rental Cars" fill className="object-contain" />
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-6 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-lg font-medium ${
                          isActive(item.href) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(item.name)}
                      </Link>
                    ))}
                    <LanguageSwitcher />
                  </nav>

                  <div className="mt-auto py-6">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        {t("common.bookNow")}
                      </Button>
                    </a>

                    <div className="flex flex-col items-center mt-4 space-y-2">
                      <a href={`https://wa.me/${phoneNumber}`} className="text-gray-800 font-medium flex items-center">
                        <Image 
                          src="/images/whatsapp-logo.png" 
                          alt="WhatsApp" 
                          width={16} 
                          height={16} 
                          className="object-contain"
                        />
                        {phoneNumber}
                      </a>
                      <a
                        href="https://instagram.com/sb.rentacar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <Instagram className="w-4 h-4 mr-1 text-pink-600" />
                        SB.RENTACAR
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
