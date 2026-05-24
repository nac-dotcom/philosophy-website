"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smile, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export default function JoySchoolPage() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen pt-32 pb-28">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} className="text-center mb-20">
            <div className="w-16 h-16 rounded-2xl bg-gold/[0.06] border border-gold/10 flex items-center justify-center mx-auto mb-6">
              <Smile className="w-8 h-8 text-gold/70" />
            </div>
            <h1 className="heading-lg text-gradient-gold mb-4">مدرسة الفرح</h1>
            <p className="text-ivory/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              برنامج تنمية إيجابية عبر الفلسفة. نهدف إلى بناء علاقة إيجابية مع التعلم والتفكير من خلال أنشطة فلسفية ممتعة.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mt-6 text-sm">
              <ArrowRight size={14} />
              العودة إلى الصفحة الرئيسية
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <MediaPlaceholder type="image" title="صور البرنامج" />
            <MediaPlaceholder type="video" title="فيديوهات البرنامج" />
            <MediaPlaceholder type="audio" title="مواد صوتية" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 glass rounded-2xl p-8 md:p-12">
            <h2 className="heading-md text-gold/80 mb-4">مقالات وموارد</h2>
            <p className="text-ivory/50 leading-relaxed">المحتوى قيد الإعداد. سنضيف قريباً موارد حول الفلسفة الإيجابية والفرح.</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
