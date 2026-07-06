import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How do I purchase a course?",
      answer:
        "Simply create an account, browse the courses, and click the Buy Course button.",
    },
    {
      question: "Can I access my courses forever?",
      answer:
        "Yes. Once you purchase a course, you'll have lifetime access to it.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, certificates can be provided after successfully completing eligible courses.",
    },
    {
      question: "Can I request a refund?",
      answer:
        "Yes. Refund requests are accepted within 7 days of purchase, subject to our refund policy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-500 mt-3">
          Everything you need to know about Skillora.
        </p>
      </div>

      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold hover:bg-slate-50 transition"
            >
              {faq.question}

              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;