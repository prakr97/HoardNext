"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. All transactions are secure and encrypted.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders may take 7-14 business days.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see specific shipping details during checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-8 sm:py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-1 sm:mb-2">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-amber-700">Find answers to common questions about our services</p>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-6 border border-amber-100">
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-amber-200 rounded-lg px-3 sm:px-4 mb-2 sm:mb-4 data-[state=open]:bg-amber-50 transition-colors"
                >
                  <AccordionTrigger className="text-left py-3 sm:py-4 hover:no-underline">
                    <span className="text-base sm:text-lg font-medium text-amber-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-amber-800 pb-3 sm:pb-4 pt-1 sm:pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
} 