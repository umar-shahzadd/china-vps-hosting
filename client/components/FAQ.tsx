import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is China VPS hosting?",
    answer:
      "China VPS hosting is a virtual private server located in data centers within China or Hong Kong. It provides dedicated resources, better performance for Asian markets, and compliance with local regulations. Our china vps solutions offer excellent connectivity and reduced latency for users in the Asia-Pacific region.",
  },
  {
    question: "Why choose VPS hosting in China over other locations?",
    answer:
      "Choosing vps china offers several advantages: faster loading times for Asian users, better compliance with Chinese internet regulations, improved SEO for Chinese search engines, and enhanced user experience for local audiences. Our hosting china infrastructure ensures optimal performance for regional traffic.",
  },
  {
    question: "What are the benefits of Hong Kong VPS hosting?",
    answer:
      "Hong Kong VPS hosting provides an excellent gateway to Asian markets with unrestricted internet access, international connectivity, and proximity to mainland China. Our virtual server hosting hong kong solutions offer the perfect balance of performance, accessibility, and regulatory compliance.",
  },
  {
    question: "Do you provide email hosting in China?",
    answer:
      "Yes, we offer comprehensive email hosting in china as part of our hosting packages. Our email solutions include spam protection, webmail access, and integration with popular email clients. This ensures reliable communication for businesses operating in the Chinese market.",
  },
  {
    question: "What support do you provide for China web hosting?",
    answer:
      "We provide 24/7 technical support for all our china web hosting services. Our support team is experienced with Chinese internet infrastructure and regulations. We offer assistance in multiple languages and maintain local support teams to ensure rapid response times.",
  },
  {
    question: "How reliable is your Chinese web hosting infrastructure?",
    answer:
      "Our chinese web hosting infrastructure maintains 99.9% uptime with redundant systems, multiple data centers, and robust network connectivity. We partner with top-tier data centers in China and Hong Kong to ensure maximum reliability and performance for your websites and applications.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our{" "}
            <strong>china vps hosting</strong> services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-card"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions about our hosting services?
          </p>
          <a
            href="https://www.arzhost.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-primary px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
