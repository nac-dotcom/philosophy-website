"use client";

import { motion } from "framer-motion";
import { Image, Video, Music } from "lucide-react";

interface MediaPlaceholderProps {
  type: "image" | "video" | "audio";
  title?: string;
}

const icons = {
  image: Image,
  video: Video,
  audio: Music,
};

const labels = {
  image: "الصور",
  video: "الفيديوهات",
  audio: "الملفات الصوتية",
};

export default function MediaPlaceholder({ type, title }: MediaPlaceholderProps) {
  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <div className="glass rounded-2xl p-10 md:p-14 text-center h-full group hover:border-gold/20 transition-all duration-500">
        <div className="flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gold/[0.04] border border-gold/10 flex items-center justify-center group-hover:bg-gold/[0.08] group-hover:border-gold/20 transition-all duration-500">
            <Icon className="w-7 h-7 text-gold/50 group-hover:text-gold/70 transition-colors duration-500" />
          </div>
          <h4 className="text-lg font-heading font-bold text-ivory/60">
            {title || labels[type]}
          </h4>
          <p className="text-ivory/40 text-sm leading-relaxed max-w-xs">
            المحتوى قيد الإعداد وسيتم إضافته قريباً
          </p>
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold/20"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
