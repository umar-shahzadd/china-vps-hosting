import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter VPS",
    price: "$29.99",
    period: "/month",
    features: [
      "2 GB RAM",
      "50 GB SSD Storage",
      "1 TB Bandwidth",
      "2 CPU Cores",
      "China/Hong Kong Location",
      "24/7 Support",
      "Free Setup",
    ],
    popular: false,
    link: "https://arzhost.com/hosting/china-based-vps-server-hosting/",
  },
  {
    name: "Professional VPS",
    price: "$59.99",
    period: "/month",
    features: [
      "4 GB RAM",
      "100 GB SSD Storage",
      "2 TB Bandwidth",
      "4 CPU Cores",
      "China/Hong Kong Location",
      "24/7 Priority Support",
      "Free Setup & Migration",
      "Daily Backups",
    ],
    popular: true,
    link: "https://arzhost.com/hosting/china-based-vps-server-hosting/",
  },
  {
    name: "Enterprise VPS",
    price: "$99.99",
    period: "/month",
    features: [
      "8 GB RAM",
      "200 GB SSD Storage",
      "5 TB Bandwidth",
      "8 CPU Cores",
      "China/Hong Kong Location",
      "24/7 Premium Support",
      "Free Setup & Migration",
      "Daily Backups",
      "Dedicated IP",
      "Advanced Security",
    ],
    popular: false,
    link: "https://arzhost.com/hosting/china-based-vps-server-hosting/",
  },
];

export default function PricingTable() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            China VPS Hosting Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect <strong>vps china</strong> plan for your needs.
            All plans include premium features and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-lg shadow-lg p-8 ${
                plan.popular
                  ? "border-2 border-accent ring-2 ring-accent ring-opacity-20"
                  : "border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-accent text-primary hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Our team can help you find the perfect{" "}
            <strong>web hosting in china</strong> package.
          </p>
          <a
            href="https://www.arzhost.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
