'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import {motion} from 'motion/react'
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
const FaqSection = () => {
  return (
    <section className="pb-24 bg-white">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        viewport={{once: true}}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{once: true}}
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

  )
}

export default FaqSection