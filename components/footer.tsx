"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { useTranslation } from "./language-provider"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4 relative h-14 w-48">
              <Image src="/images/logo.png" alt="SB Luxury Rental Cars" fill className="object-cover rounded-md p-2 bg-white rounded" />
            </div>
            <p className="text-gray-400 mb-4">{t("footer.about")}</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sb.rentacar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Facebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <Link href="/cars-fleet" className="text-gray-400 hover:text-red-600">
                  {t("common.carsFleet")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600">
                  {t("common.services")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-red-600">
                  {t("common.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cars */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.popularCars")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars-fleet/ferrari-purosangue" className="text-gray-400 hover:text-red-600">
                  Ferrari Purosangue
                </Link>
              </li>
              <li>
                <Link href="/cars-fleet/lamborghini-aventador-svj" className="text-gray-400 hover:text-red-600">
                  Lamborghini Aventador SVJ
                </Link>
              </li>
              <li>
                <Link href="/cars-fleet/porsche-gt3-rs-weissach" className="text-gray-400 hover:text-red-600">
                  Porsche GT3 RS Weissach
                </Link>
              </li>
              <li>
                <Link href="/cars-fleet/rolls-royce-cullinan" className="text-gray-400 hover:text-red-600">
                  Rolls Royce Cullinan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+971 999 999 999</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@sbluxuryrental.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} SB Luxury Rental Cars. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
