"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, Button } from "@/components/ui";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Sell with Us", href: "#features" },
    { name: "Deliver with Us", href: "#testimonials" },
    { name: "Awards", href: "#awards" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50",
        className
      )}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Group */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo_dark.png"
                alt="MigranX Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-700 hover:text-primary-500 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop CTA - Positioned at extreme right */}
          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-black text-white hover:bg-gray-800">
              Download Now →
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <svg
                className={cn(
                  "w-6 h-6 transition-transform",
                  isMenuOpen && "rotate-90"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-700 hover:text-primary-500 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button
                  size="sm"
                  fullWidth
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Download Now →
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </motion.header>
  );
}
