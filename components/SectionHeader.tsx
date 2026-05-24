"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center mb-16 md:mb-20"
    >
      <h2 className="heading-lg text-gradient-gold mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ivory/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <div className="divider-gold mt-8" />
    </motion.div>
  );
}
