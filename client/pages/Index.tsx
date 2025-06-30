import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";
import FAQ from "../components/FAQ";
import {
  Server,
  Shield,
  Clock,
  Globe,
  Zap,
  HeadphonesIcon,
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    document.title =
      "China VPS Hosting | Reliable Virtual Private Servers | ARZ Host";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Premium China VPS hosting with high-performance virtual private servers in China and Hong Kong. Fast, reliable, and secure hosting solutions with 24/7 support.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Premium China VPS hosting with high-performance virtual private servers in China and Hong Kong. Fast, reliable, and secure hosting solutions with 24/7 support.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Premium <span className="text-accent">China VPS Hosting</span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience blazing-fast <strong>china vps hosting</strong> with
                our cutting-edge virtual private servers. Perfect for businesses
                targeting Asian markets with guaranteed uptime and exceptional
                performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors text-center"
                >
                  Get Started Now
                </a>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white rounded-xl shadow-xl p-8 inline-block">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      &lt;50ms
                    </div>
                    <div className="text-sm text-muted-foreground">Latency</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">SSD</div>
                    <div className="text-sm text-muted-foreground">Storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our China VPS Hosting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our <strong>vps china</strong> solutions deliver unmatched
              performance, reliability, and support for your business needs in
              the Asian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Lightning Fast Performance
              </h3>
              <p className="text-muted-foreground">
                Experience blazing-fast load times with our high-performance SSD
                storage and optimized network infrastructure for{" "}
                <strong>china web hosting</strong>.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground">
                Advanced security measures including DDoS protection, firewalls,
                and regular security updates to keep your{" "}
                <strong>chinese web hosting</strong> secure.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Strategic Locations
              </h3>
              <p className="text-muted-foreground">
                Data centers in China and Hong Kong provide optimal connectivity
                for Asian markets with our{" "}
                <strong>vps hosting hong kong</strong> solutions.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Server className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Scalable Resources
              </h3>
              <p className="text-muted-foreground">
                Easily scale your{" "}
                <strong>virtual server hosting hong kong</strong> resources up
                or down based on your growing business needs.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                99.9% Uptime
              </h3>
              <p className="text-muted-foreground">
                Guaranteed uptime with redundant systems and multiple data
                centers ensuring your <strong>hosting china</strong> stays
                online.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <HeadphonesIcon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                24/7 Expert Support
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock technical support from our team of hosting
                experts who understand the Chinese market and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Unlock the Power of Asian Markets
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                "Our <strong>web hosting in china</strong> solutions have helped
                thousands of businesses succeed in the world's largest digital
                market. With strategic server locations and optimized
                infrastructure, we provide the competitive edge you need."
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Reduced Latency
                    </h4>
                    <p className="text-muted-foreground">
                      Serve your Asian customers with lightning-fast page loads
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Regulatory Compliance
                    </h4>
                    <p className="text-muted-foreground">
                      Stay compliant with Chinese internet regulations and
                      policies
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Enhanced SEO
                    </h4>
                    <p className="text-muted-foreground">
                      Improve search rankings on Chinese search engines like{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Baidu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Baidu
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:text-center">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="VPS Hosting in China - Complete Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Learn more about our China VPS hosting infrastructure and
                capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Expand into Asian Markets?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of businesses that trust{" "}
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ARZ Host
            </a>{" "}
            for their China hosting needs. Our{" "}
            <strong>email hosting in china</strong> and VPS solutions provide
            everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Start Your Free Trial
            </a>
            <a
              href="https://www.arzhost.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-primary transition-colors"
            >
              Speak with Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
