import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ARZ Host</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of{" "}
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                china vps hosting
              </a>{" "}
              solutions. We deliver reliable, high-performance virtual private
              servers with exceptional support.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong>Website:</strong>{" "}
                <span className="text-accent">Insert your website here</span>
              </p>
              <p className="text-gray-300">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+16315948060"
                  className="text-accent hover:underline"
                >
                  +1 (631) 594-8060
                </a>
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong>{" "}
                <span className="text-accent">Insert your data here</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Our Hosting Services
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.arzhost.com/terms-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/disclaimer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 ARZ Host. All rights reserved. |
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline ml-1"
            >
              Visit our main website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
