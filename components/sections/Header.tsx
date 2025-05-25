"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ScrollContext";
import { useRouter } from "next/navigation";
import { HeaderProps } from "@/lib/types";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import logo from "@/public/gdg_cloud_hanoi.png";

const Header = (props: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();
  const router = useRouter();

  const handleScroll = (id: string, url?: string) => {
    if (url) {
      router.push(url); // Navigate to the URL if it exists
    } else {
      scrollToSection(id); // Scroll to section if no URL
    }
    setIsMobileMenuOpen(false);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md border-b-1 bg-background/60 backdrop-blur">
      <nav className="mx-auto w-full px-8 md:px-20 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            src={logo}
            alt="GDG Cloud Hanoi"
            className="max-w-40 object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-6"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {props.nav.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Button
                variant="ghost"
                className="text-gray-700 dark:text-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => handleScroll(item.id, item.url)}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
          <ThemeSwitcher />
          {/* <LanguageSwitcher /> */}
        </motion.div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex gap-2">
          <ThemeSwitcher />
          {/* <LanguageSwitcher /> */}
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "md:hidden bg-white absolute top-full left-0 right-0 shadow-md",
          isMobileMenuOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {props.nav.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full text-left text-gray-700 hover:text-blue-600"
              onClick={() => handleScroll(item.id, item.url)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
