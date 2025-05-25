"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useViewModelInstanceColor,
} from "@rive-app/react-canvas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type ImageProp = {
  src: string;
  alt: string;
};

// Fisher-Yates shuffle function
const shuffleArray = (array: ImageProp[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Hero: React.FC = () => {
  const t = useTranslations();
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Original layout with spans (fixed order)
  const layout = [
    { span: "col-span-5 row-span-2" },
    { span: "col-span-3 row-span-2" },
    { span: "col-span-4 row-span-3" },
    { span: "col-span-3 row-span-2" },
    { span: "col-span-5 row-span-2" },
    { span: "col-span-4 row-span-3" },
    { span: "col-span-4 row-span-2" },
    { span: "col-span-4 row-span-2" },
  ];

  // Image content to shuffle
  const imageContent = Array.from({ length: 8 }, (_, index) => ({
    src: `https://storage.googleapis.com/gdg-cloud-hanoi/featured_${
      index + 1
    }_preview_optimized.jpg`,
    alt: `Feature ${index + 1}`,
  }));

  const [shuffledImages, setShuffledImages] = useState(imageContent);

  useEffect(() => {
    const shuffled = shuffleArray(imageContent).slice(0, layout.length);
    setShuffledImages(shuffled);
  }, []);

  const { rive, RiveComponent } = useRive({
    src: "/animations/google_cloud_next_25.riv",
    stateMachines: "default",
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const { setRgb: setThemeColorRgb } = useViewModelInstanceColor(
    "textColor",
    rive?.viewModelInstance
  );

  useEffect(() => {
    if (theme === "dark") {
      setThemeColorRgb(255, 255, 255);
    } else {
      setThemeColorRgb(0, 0, 0);
    }
  }, [setThemeColorRgb, theme]);

  return (
    <motion.div
      id="home"
      className="min-h-screen flex items-center justify-center px-8 md:px-20 font-[family-name:var(--font-geist-sans)] mb-16 lg:mb-0"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center lg:justify-start">
          <div
            style={{
              height: "500px",
              width: "500px",
            }}
          >
            <RiveComponent />
          </div>
        </div>

        {/* <motion.div
          className="flex flex-col p-8 sm:p-12 gap-6 sm:gap-8 items-center lg:items-start text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.h1
            className="text-2xl font-semibold tracking-tight"
            variants={itemVariants}
          >
            Đăng ký nhận vé sự kiện sớm
          </motion.h1>

          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </motion.div> */}

        <motion.div
          className="grid grid-cols-12 gap-2 sm:gap-4 h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-2xl mx-auto lg:mx-0"
          variants={itemVariants}
        >
          {layout.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 ${item.span}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="object-cover scale-125"
                src={shuffledImages[index].src}
                alt={shuffledImages[index].alt}
                fill
                sizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw, 15vw"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
