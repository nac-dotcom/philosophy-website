"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export default function CafePage() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen pt-32 pb-28">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} className="text-center mb-20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/[0.1] to-gold/[0.03] border border-gold/[0.12] shadow-[0_0_20px_-8px_rgba(214,169,74,0.1)] flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-gold/70" />
            </div>
            <h1 className="heading-lg text-gradient-gold mb-4">مقهى الفلسفة</h1>
            <p className="text-ivory/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              لقاءات مفتوحة للنقاش الفلسفي في أجواء غير رسمية. نجتمع لنتحاور ونتأمل في قضايا الحياة والفكر.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mt-6 text-sm">
              <ArrowRight size={14} />
              العودة إلى الصفحة الرئيسية
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <MediaPlaceholder type="image" title="صور اللقاءات" />
            <MediaPlaceholder type="video" title="فيديوهات النقاشات" />
            <MediaPlaceholder type="audio" title="تسجيلات الجلسات" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 card-premium p-8 md:p-12 cursor-default">
            <h2 className="heading-md text-gold mb-4">مقالات وموارد</h2>
            <p className="text-ivory/50 leading-relaxed">المحتوى قيد الإعداد. سنضيف قريباً تقارير عن اللقاءات وموارد فلسفية.</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
