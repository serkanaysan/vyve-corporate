"use client";

import { useI18n } from "@/app/providers/intl";
import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const { t } = useI18n();

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: t("faq.q1.question", "What is Vyve?"),
      answer: t("faq.q1.answer", "Vyve is a platform that shows real-time occupancy and crowd information of cafes and venues in the city. It lets you see how busy a place is before you go."),
    },
    {
      id: 2,
      question: t("faq.q2.question", "What information does Vyve provide?"),
      answer: t("faq.q2.answer", "Vyve provides venues’ real-time occupancy, crowd levels (quiet / medium / busy), and movement trends over time in a clear and simple way."),
    },
    {
      id: 3,
      question: t("faq.q3.question", "How is this data collected?"),
      answer: t("faq.q3.answer", "Data is collected anonymously through people and movement tracking systems installed in venues and transmitted to Vyve in real time."),
    },
    {
      id: 4,
      question: t("faq.q4.question", "Am I being watched by a camera?"),
      answer: t("faq.q4.answer", "No. Vyve does not use cameras, record video, or collect personal data. The system only generates counts and occupancy data."),
    },
    {
      id: 5,
      question: t("faq.q5.question", "Is my personal data safe?"),
      answer: t("faq.q5.answer", "Yes. Vyve does not collect any personal information, identity data, or facial recognition data. All data is anonymous and presented as aggregated statistics."),
    },
    {
      id: 6,
      question: t("faq.q6.question", "How up-to-date is the data?"),
      answer: t("faq.q6.answer", "The information in Vyve is real-time and updates within seconds, so you can see the latest status before visiting a venue."),
    },
    {
      id: 7,
      question: t("faq.q7.question", "Are all venues on Vyve?"),
      answer: t("faq.q7.answer", "No. Only venues with Vyve systems installed and active data collection appear, ensuring the information is reliable."),
    },
    {
      id: 8,
      question: t("faq.q8.question", "Why is a venue's occupancy sometimes not visible?"),
      answer: t("faq.q8.answer", "Sometimes a venue may be temporarily closed, data flow may pause briefly, or the system may be under maintenance. In such cases, occupancy data may be temporarily hidden."),
    },
    {
      id: 9,
      question: t("faq.q9.question", "Is Vyve free to use?"),
      answer: t("faq.q9.answer", "Vyve’s core features are free for users. Advanced features or special solutions may be offered in the future."),
    },
    {
      id: 10,
      question: t("faq.q10.question", "How can businesses join Vyve?"),
      answer: t("faq.q10.answer", "Businesses can contact Vyve to install tracking systems, monitor their own venue’s occupancy, and make it visible to users."),
    },
    {
      id: 11,
      question: t("faq.q11.question", "What benefits does Vyve provide to businesses?"),
      answer: t("faq.q11.answer", "Vyve offers businesses real-time occupancy tracking, movement analysis by day and hour, customer behavior insights, and more efficient planning."),
    },
    {
      id: 12,
      question: t("faq.q12.question", "In which cities is Vyve available?"),
      answer: t("faq.q12.answer", "Vyve operates in cities where the system is installed. New cities and venues are continuously added."),
    },
    {
      id: 13,
      question: t("faq.q13.question", "Can occupancy data be incorrect?"),
      answer: t("faq.q13.answer", "The systems are highly accurate; however, sudden entries or exits may cause short-term deviations. Since data is continuously updated, this is quickly corrected."),
    },
    {
      id: 14,
      question: t("faq.q14.question", "How can I start using Vyve?"),
      answer: t("faq.q14.answer", "You can start using Vyve via the website or mobile app by selecting your city, viewing venues, and checking occupancy before making a decision."),
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 bg-gray-100 dark:bg-white/1  md:py-28">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            {t("faq.title", "Frequently Asked Questions")}
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            {t("faq.description", "Answered all frequently asked questions, Still confused? feel free contact with us")}
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
