"use client"

import { useTranslation } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const { t } = useTranslation()

  const faqData = [
    {
      id: "vehicles",
      question: "faq.vehicles.question",
      answer: "faq.vehicles.answer",
    },
    {
      id: "documents",
      question: "faq.documents.question",
      answer: "faq.documents.answer",
    },
    {
      id: "license",
      question: "faq.license.question",
      answer: "faq.license.answer",
    },
    {
      id: "deposit",
      question: "faq.deposit.question",
      answer: "faq.deposit.answer",
    },
    {
      id: "mileage",
      question: "faq.mileage.question",
      answer: "faq.mileage.answer",
    },
    {
      id: "included",
      question: "faq.included.question",
      answer: "faq.included.answer",
    },
    {
      id: "hiddenFees",
      question: "faq.hiddenFees.question",
      answer: "faq.hiddenFees.answer",
    },
    {
      id: "refund",
      question: "faq.refund.question",
      answer: "faq.refund.answer",
    },
    {
      id: "pickup",
      question: "faq.pickup.question",
      answer: "faq.pickup.answer",
    },
    {
      id: "lateReturn",
      question: "faq.lateReturn.question",
      answer: "faq.lateReturn.answer",
    },
    {
      id: "dropOff",
      question: "faq.dropOff.question",
      answer: "faq.dropOff.answer",
    },
    {
      id: "trafficFine",
      question: "faq.trafficFine.question",
      answer: "faq.trafficFine.answer",
    },
  ]

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('images/background.png')" }}
    >
      {/* CONTENEUR DE L'OVERLAY + CONTENU */}
      <div className="bg-black bg-opacity-60">
        <div className="relative z-10 py-12">
          <div className="container px-4 mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("faq.aboutUs")}</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-white">{t("faq.title")}</h2>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-white bg-opacity-90 rounded-lg border-none"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-gray-800 font-medium hover:no-underline hover:bg-gray-50 rounded-lg">
                      {t(item.question)}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700 mt-2">
                      {t(item.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
