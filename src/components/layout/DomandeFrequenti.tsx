"use client";

import React, { useState } from "react";
import { COLORS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className="border rounded-2xl p-6 cursor-pointer transition-all duration-100 hover:shadow-md items-center justify-center"
      style={{ borderColor: COLORS.TEXT }}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-lg font-semibold flex-1" style={{ color: COLORS.TEXT_TITLE }}>
          {question}
        </h3>
        <Button 
          onClick={onToggle}
          className="flex-shrink-0 w-8 h-8 !p-0 !min-w-0 text-2xl font-light transition-transform duration-300"
          style={{ 
            color: COLORS.TEXT,
            background: 'transparent',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          {isOpen ? "−" : "+"}
        </Button>
      </div>
      <div 
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: COLORS.TEXT }}
          dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br>") }}
        />
      </div>
    </div>
  );
}

export default function DomandeFrequenti() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quali sono i principali vantaggi dell'outsourcing dei servizi digitali?",
      answer: "L'outsourcing permette di ridurre i costi operativi, accedere a competenze specializzate, garantire conformità normativa costante e scalare rapidamente le risorse in base alle esigenze del business, senza investimenti in infrastrutture o formazione interna."
    },
    {
      question: "Quanto tempo richiede l'attivazione dei servizi di outsourcing?",
      answer: "Dipende dalla complessità del progetto. Per servizi standard come il data management o il contact center, l'attivazione può avvenire in 2-4 settimane. Per progetti più articolati che richiedono personalizzazione dei processi amministrativi o integrazione documentale, il tempo può estendersi a 4-6 settimane."
    },
    {
      question: "In che modo vi differenziate da un semplice servizio di assistenza esterno?",
      answer: "A differenza di un call center tradizionale, Outsourcing Group opera come una vera estensione dei reparti interni della tua azienda.<br>Il nostro team viene informato direttamente dal cliente sulle procedure da gestire - ad esempio attivazione di SPID, firme digitali o PEC - così da garantire risposte precise e coerenti con gli standard del servizio.<br>In questo modo solleviamo l’organizzazione da attività operative complesse, assicurando continuità, qualità e piena aderenza ai processi aziendali."
    },
    {
      question: "I vostri servizi sono scalabili in base alle nostre esigenze?",
      answer: "Assolutamente sì. La scalabilità è uno dei principali vantaggi dell'outsourcing. Possiamo aumentare o ridurre le risorse dedicate in tempi rapidi, adattandoci ai picchi stagionali, ai nuovi progetti o alle variazioni del business, garantendo sempre il livello di servizio concordato."
    }
  ];

  return (
    <section 
      className="xl:px-32 lg:px-24 lg:py-16 flex flex-col lg:gap-16 gap-8 px-8 py-16"
    > 
      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        Domande frequenti
      </h2>
      

      <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 justify-center items-stretch">

        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div
          className="border rounded-3xl p-6 lg:p-8 flex flex-col justify-between w-full lg:min-w-[320px] lg:max-w-[350px] gap-8 lg:gap-0 overflow-hidden"
          style={{ borderColor: COLORS.TEXT }}
        >
          <div 
            className="w-16 h-16 flex items-center justify-center rounded-2xl"
            style={{ background: COLORS.PRIMARY }}
          >
            <FontAwesomeIcon 
              icon={faComments} 
              className="text-3xl" 
              style={{ color: COLORS.TEXT_WHITE }}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 
              className="text-xl font-bold" 
              style={{ color: COLORS.TEXT_TITLE, fontFamily: 'var(--font-jost)' }}
            >
              Hai altre domande?
            </h3>
            <p 
              className="text-base leading-relaxed" 
              style={{ color: COLORS.TEXT }}
            >
              Clicca qui sotto per contattarci e chiedere qualsiasi informazione di cui hai bisogno.
            </p>
          </div>
          
          <Button
            href="/contatti"
            className="w-full text-center !min-w-0"
          >
            Contattaci
          </Button>
        </div>

      </div>

    </section>
  );
} 