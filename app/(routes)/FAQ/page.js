'use client'

import Header from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const faqs = [
  {
    question: "Why Should I Cleaning on Shoelace?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "How I Can Request for Pick Up Order Schedule?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "What Payment Methods that Shoelace Support?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "Why Should I Cleaning on Shoelace?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "How I Can Request for Pick Up Order Schedule?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "What Payment Methods that Shoelace Support?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  }
]

export default function FAQSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
    <section className="lg:px-40 md:px-6 pt-12">
      <Header title={'FAQ'} link={'/FAQ'}/>
    </section>
      <section className="pb-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#00A8FF] text-lg font-semibold mb-4">
              FAQ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Question
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none rounded-lg mb-4">
                    <AccordionTrigger className="px-4 border hover:no-underline bg-transparent hover:text-white hover:bg-blue-500">
                      <span className="text-left font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-3 text-gray-600 border-none">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={containerRef} className="relative h-[600px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/Mobile-Browsing.jpg"
            alt="Background"
            width={10000}
            height={10000}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Still Have Any Problem For<br />Our Service?
          </h2>
          <p className="text-gray-200 max-w-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-400 hover:bg-orange-500 text-white"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}

