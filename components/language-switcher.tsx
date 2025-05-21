"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="uppercase font-medium">
      {language === "en" ? "FR" : "EN"}
    </Button>
  )
}
