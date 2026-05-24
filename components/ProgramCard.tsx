"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProgramCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

export default function ProgramCard({
  href,
  title,
  description,
  icon,
  index = 0,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={href}>
        <div className="card-premium group h-full">
          <div className="relative z-10 flex flex-col items-center text-center gap-5 h-full">
            <div className="w-14 h-14 rounded-2xl bg-gold/[0.06] border border-gold/10 flex items-center justify-center group-hover:bg-gold/[0.12] group-hover:border-gold/30 group-hover:scale-110 transition-all duration-500">
              <span className="text-gold/80 group-hover:text-gold transition-colors duration-500">
                {icon}
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-ivory/90 group-hover:text-gold transition-colors duration-500">
              {title}
            </h3>
            <p className="text-ivory/50 text-sm leading-relaxed group-hover:text-ivory/70 transition-colors duration-500">
              {description}
            </p>
            <span className="text-gold/60 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              استكشف ←
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
