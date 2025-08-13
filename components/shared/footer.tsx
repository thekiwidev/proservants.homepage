import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, Paragraph } from "@/components/ui";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Community Guidelines", href: "/guidelines" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  };

  return (
    <footer
      data-no-animate
      className={cn("bg-dark-900 text-white animate-none", className)}
    >
      <Container size="xl">
        <div className="py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo_dark.png"
                  alt="MigranX Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <Paragraph className="text-gray-400 mb-6 max-w-md">
                Connecting immigrants with their cultural heritage through
                authentic products, community, and shared experiences.
              </Paragraph>

              {/* Social links */}
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Paragraph className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MigranX. All rights reserved.
            </Paragraph>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Available on:</span>
              <div className="flex space-x-4">
                <div className="h-8 bg-gray-800 rounded-lg px-3 flex items-center text-xs font-medium gap-x-2">
                  <FaAppStore /> App Store
                </div>
                <div className="h-8 bg-gray-800 rounded-lg px-3 flex items-center text-xs font-medium gap-x-2">
                  <FaGooglePlay /> Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
