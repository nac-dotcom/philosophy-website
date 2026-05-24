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
      <div className="card-premium group h-full cursor-default">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 h-full py-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/[0.06] to-transparent border border-gold/[0.08] flex items-center justify-center group-hover:border-gold/20 group-hover:shadow-[0_0_30px_-12px_rgba(214,169,74,0.15)] transition-all duration-500">
            <Icon className="w-8 h-8 text-gold/40 group-hover:text-gold/60 transition-colors duration-500" />
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-heading font-bold text-ivory/60 group-hover:text-ivory/75 transition-colors duration-500">
              {title || labels[type]}
            </h4>
            <p className="text-ivory/35 text-sm leading-relaxed max-w-xs">
              المحتوى قيد الإعداد وسيتم إضافته قريباً
            </p>
          </div>
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold/15 group-hover:bg-gold/30 transition-colors duration-500"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
